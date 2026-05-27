/* ============================================================
   CP2 Chat — Claude parse endpoint
   ============================================================
   POST /api/parse
   Body: { message: string, state: { units, log }, today: 'YYYY-MM-DD' }
   Returns: {
     summary: string,
     needs_clarification?: string,
     unit_updates: [{ key, status?, date?, louver?, note? }],
     log_entries:  [{ date, category, content, planned? }]
   }

   Requires ANTHROPIC_API_KEY env var in Vercel project settings.
   ============================================================ */

// Override with CLAUDE_MODEL env var if you want to try a different snapshot.
const MODEL = process.env.CLAUDE_MODEL || 'claude-sonnet-4-5-20250929';

// Tool schema — Claude must return changes through this tool.
const APPLY_CHANGES_TOOL = {
  name: 'apply_changes',
  description: 'Apply parsed install-tracker updates. Only fill fields that should change. If you cannot resolve a unit name to a specific key (e.g. user said "20A" but there are 6 SF20A keys), set needs_clarification to a short question (in the user\'s input language) and leave unit_updates empty.',
  input_schema: {
    type: 'object',
    properties: {
      summary: {
        type: 'string',
        description: 'One-sentence summary of the change, in the user input language (English, Chinese, or Korean). Example: "Set SF11A.1 and SF11B to installed (5/26) and added a framing log entry."'
      },
      needs_clarification: {
        type: 'string',
        description: 'If the user message cannot be resolved to specific unit keys (ambiguous id, unclear date, unclear status), write a short clarification question in the user input language. Otherwise leave empty.'
      },
      unit_updates: {
        type: 'array',
        description: 'Units to modify. key must exactly match a key in state.units (NOT the display id).',
        items: {
          type: 'object',
          properties: {
            key:    { type: 'string', description: 'Exact unit key, e.g. "SF11A__1"' },
            status: { type: 'string', enum: ['installed', 'pending', 'issue'] },
            date:   { type: 'string', description: 'YYYY-MM-DD' },
            louver: { type: 'string', enum: ['yes', 'no'] },
            note:   { type: 'string' }
          },
          required: ['key']
        }
      },
      log_entries: {
        type: 'array',
        description: 'Log entries to append. Append a matching log whenever you modify units — framing for framing work, louver for louvers, issue for problems, etc.',
        items: {
          type: 'object',
          properties: {
            date:     { type: 'string', description: 'YYYY-MM-DD' },
            category: { type: 'string', enum: ['framing', 'louver', 'caulking', 'issue', 'glass', 'other'] },
            content:  { type: 'string', description: 'A short line listing the affected unit ids (with dot suffixes), separated by " · ". Example: "11A · 11A.1 · 11B"' },
            planned:  { type: 'boolean', description: 'true if this is a future/planned item' }
          },
          required: ['date', 'category', 'content']
        }
      }
    },
    required: ['summary', 'unit_updates', 'log_entries']
  }
};

function buildSystemPrompt(state, today) {
  const units = (state && state.units) || [];
  const lines = units.map(u =>
    `${u.key}\t${u.id}\t${u.zone || '-'}\t${u.status || 'pending'}${u.date ? ' ('+u.date+')' : ''}`
  ).join('\n');

  return `You are the install-progress assistant for the Cooper Park 2 construction site. Users describe daily site activity in natural language (English, Chinese, or Korean). Parse their message into structured changes and return them via the apply_changes tool.

Today's date: ${today}

## Data model
- Each unit has a unique "key" (e.g. SF11A__1) and a display "id" (e.g. SF11A, SF11A.1). Multiple keys can share the same id — you MUST update by key.
- status: installed / pending / issue
- louver: yes / no (whether the louver has been installed)
- Log categories: framing / louver / caulking / issue / glass / other

## Current units (key / id / zone / status)
${lines}

## Parsing rules
1. "Installed X today" → find the pending key matching X, set status=installed, date=today, note="Framing ${today.slice(5)}".
2. "Added louver to X" → set that key louver=yes, append "Louver" to note.
3. "X has an issue" / "opening error on X" → set status=issue.
4. If a mentioned id maps to multiple keys (e.g. SF20A has 6 keys) AND context cannot disambiguate → leave unit_updates empty, set needs_clarification asking which ones (list candidate keys + their current status).
5. "Planning X tomorrow" → add a planned:true log_entry with that future date, DO NOT modify any unit.
6. Whenever unit_updates is non-empty, also add a matching log_entry. date = change date. content = affected ids joined with " · ".
7. If you cannot parse the message at all, set needs_clarification to a short question and leave unit_updates and log_entries as empty arrays.
8. summary and needs_clarification should be written in the SAME language the user used.
9. Reply ONLY via the apply_changes tool — no plain text.`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not set in Vercel env vars' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { return res.status(400).json({ error: 'Invalid JSON' }); }
  }
  const { message, state, today } = body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'message required' });
  }
  const todayStr = today || new Date().toISOString().slice(0, 10);

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 2048,
        system: buildSystemPrompt(state, todayStr),
        tools: [APPLY_CHANGES_TOOL],
        tool_choice: { type: 'tool', name: 'apply_changes' },
        messages: [{ role: 'user', content: message }],
      }),
    });

    if (!r.ok) {
      const text = await r.text();
      console.error('Anthropic API error:', r.status, text);
      return res.status(502).json({ error: `Claude API ${r.status}: ${text.slice(0, 500)}` });
    }

    const data = await r.json();
    const toolUse = (data.content || []).find(b => b.type === 'tool_use' && b.name === 'apply_changes');
    if (!toolUse) {
      return res.status(502).json({ error: 'Claude did not return a tool_use block', raw: data });
    }
    const parsed = toolUse.input || {};
    return res.status(200).json({
      summary: parsed.summary || '',
      needs_clarification: parsed.needs_clarification || '',
      unit_updates: Array.isArray(parsed.unit_updates) ? parsed.unit_updates : [],
      log_entries:  Array.isArray(parsed.log_entries)  ? parsed.log_entries  : [],
      _model: MODEL,
      _usage: data.usage || null,
    });
  } catch (e) {
    console.error('parse.js error:', e);
    return res.status(500).json({ error: String(e.message || e) });
  }
}
