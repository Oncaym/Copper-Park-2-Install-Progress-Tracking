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
  description: 'Apply parsed install-tracker updates. Only fill fields that should change. If you cannot resolve a unit name to a specific key (e.g. user said "20A" but there are 6 SF20A keys), return needs_clarification with a short Chinese question and leave unit_updates empty.',
  input_schema: {
    type: 'object',
    properties: {
      summary: {
        type: 'string',
        description: '一句中文话，总结这次改动。例如 "把 SF11A.1 和 SF11B 改成已安装（5/26），并加一条 framing 日志"。'
      },
      needs_clarification: {
        type: 'string',
        description: '如果用户的描述对不上唯一的 unit key（id 重复、日期不明、状态不清），写一个简短的中文澄清问题；否则留空字符串。'
      },
      unit_updates: {
        type: 'array',
        description: '要修改的 unit 列表。key 必须精确匹配 state.units 里的 key（不是 id）。',
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
        description: '要追加到 log 的条目。是否补 log 取决于 unit_updates 的语义 — 装框写 framing，装百叶写 louver，问题写 issue。',
        items: {
          type: 'object',
          properties: {
            date:     { type: 'string', description: 'YYYY-MM-DD' },
            category: { type: 'string', enum: ['framing', 'louver', 'caulking', 'issue', 'glass', 'other'] },
            content:  { type: 'string', description: '一行内容，列出涉及的 unit id（带 dot 后缀），用 · 分隔。例如 "11A · 11A.1 · 11B"' },
            planned:  { type: 'boolean', description: '是否计划项（未来日期默认 true）' }
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

  return `你是 Cooper Park 2 工地的安装进度记录助手。用户用中文描述当天的施工情况，你的任务是把它解析成结构化的改动，通过 apply_changes 工具返回。

今天日期: ${today}

## 数据模型
- 每个 unit 有唯一的 key（如 SF11A__1）和显示用的 id（如 SF11A、SF11A.1）。同一个 id 可能对应多个 key —— 必须按 key 修改。
- status: installed（已装）/ pending（未装）/ issue（有问题）
- louver: yes / no（百叶有没有装）
- 日志类别: framing（装框）/ louver（百叶）/ caulking（打胶）/ issue（问题）/ glass（玻璃）/ other

## 当前 units 状态（key / id / zone / status）
${lines}

## 解析规则
1. 用户说 "今天装了 X" → 找 X 对应的 pending key，status 改 installed，date 填今天，note 可写 "Framing ${today.slice(5)}".
2. 用户说 "X 装了百叶" → 该 key 的 louver 改 yes，note 追加 "Louver".
3. 用户说 "X 出问题了/开洞错了" → status 改 issue.
4. 用户提到的 id 在 units 表里有多个 key（比如 SF20A 有 6 个），并且无法从上下文确定是哪几个 → unit_updates 留空，在 needs_clarification 里问清楚（列出所有候选 key 和它们当前状态）。
5. 用户说 "明天要 X" 或 "下周准备 X" → 在 log_entries 加 planned:true 的条目，不改 unit。
6. 每次只要 unit_updates 不为空，就在 log_entries 加对应类别的日志。日期 = 改动日期。content 用 · 分隔涉及的 id。
7. 没法解析的话 needs_clarification 写一个简短问题，unit_updates 和 log_entries 留空数组。
8. 严格只用 apply_changes 工具回复，不要写普通文本。`;
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
