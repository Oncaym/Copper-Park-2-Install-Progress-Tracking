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
  description: 'Apply parsed install-tracker updates. Only fill fields that should change. If you cannot resolve a unit name to a specific key (e.g. user said "20A" but there are 6 SF20A keys), return needs_clarification with a short English question and leave unit_updates empty.',
  input_schema: {
    type: 'object',
    properties: {
      summary: {
        type: 'string',
        description: 'One short English sentence summarizing the change. e.g. "Marked SF11A.1 and SF11B as installed (5/26) and added a framing log entry."'
      },
      needs_clarification: {
        type: 'string',
        description: 'If the user\'s description does not map to a unique unit key (duplicate id, ambiguous date or status), write a short English clarifying question; otherwise leave it as an empty string.'
      },
      unit_updates: {
        type: 'array',
        description: 'Units to update. key must exactly match a key in state.units (not the id).',
        items: {
          type: 'object',
          properties: {
            key:    { type: 'string', description: '精确的 unit key, 如 "SF11A__1"' },
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
        description: 'Entries to append to the log. Whether to add a log depends on the semantics of unit_updates — framing for framing installs, louver for louvers, issue for problems.',
        items: {
          type: 'object',
          properties: {
            date:     { type: 'string', description: 'YYYY-MM-DD' },
            category: { type: 'string', enum: ['framing', 'louver', 'caulking', 'issue', 'glass', 'other'] },
            content:  { type: 'string', description: 'One line listing the affected unit ids (with dot suffixes), separated by ·. e.g. "11A · 11A.1 · 11B"' },
            planned:  { type: 'boolean', description: 'Whether this is a planned entry (default true for future dates).' }
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
  // Compact unit table — only fields Claude needs to resolve names
  const lines = units.map(u =>
    `${u.key}\t${u.id}\t${u.zone || '-'}\t${u.status || 'pending'}${u.date ? ' ('+u.date+')' : ''}`
  ).join('\n');

  return `You are the install-progress recording assistant for the Cooper Park 2 jobsite. The user describes that day's work in natural language; your job is to parse it into structured changes and return them through the apply_changes tool.

Today's date: ${today}

## Language
ALWAYS respond in English. Even if the user writes in Chinese, Korean, or any other language, summary and needs_clarification fields MUST be in English.

## Data model
- Each unit has a unique key (e.g. SF11A__1) and a display id (e.g. SF11A, SF11A.1). The same id can map to multiple keys — you must modify by key.
- status: installed / pending / issue
- louver: yes / no (whether the louver is installed)
- Log categories: framing / louver / caulking / issue / glass / other

## Current units (key / id / zone / status)
${lines}

## Parsing rules
1. User says "installed X today" → find the pending key for X, set status=installed, date=today, note can be "Framing ${today.slice(5)}".
2. User says "X has a louver / louver installed on X" → set that key's louver=yes, append "Louver" to note.
3. User says "X has a problem / wrong cutout / opening error" → set status=issue.
4. If the id the user mentions maps to multiple keys (e.g. SF20A has 6) and you cannot determine which from context → leave unit_updates empty and ask in needs_clarification (list all candidate keys and their current status).
5. User says "tomorrow we'll do X" / "planning X next week" → add a log_entries entry with planned:true, do NOT modify any unit.
6. Whenever unit_updates is non-empty, add a corresponding log_entries entry. date = change date. content joins affected ids with ·.
7. If you can't parse it, write a short clarifying question in needs_clarification and leave unit_updates and log_entries as empty arrays.
8. Reply strictly via the apply_changes tool — no plain text.`;
}

export default async function handler(req, res) {
  // CORS — same-origin so this is mostly defensive
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
    // Extract the tool_use block
    const toolUse = (data.content || []).find(b => b.type === 'tool_use' && b.name === 'apply_changes');
    if (!toolUse) {
      return res.status(502).json({ error: 'Claude did not return a tool_use block', raw: data });
    }
    const parsed = toolUse.input || {};
    // Normalize
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
