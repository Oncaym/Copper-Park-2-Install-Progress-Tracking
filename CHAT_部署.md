# CP2 聊天式更新 — 部署指引

聊天界面用自然语言上报当天施工情况，先预览再写入 Firebase。代替/补充手动编辑 HTML 的工作流。

## 新增/修改的文件

```
cp2-tracker-deploy/
├── chat.html              新增 — 独立聊天页面，/chat 入口
├── api/
│   └── parse.js           新增 — Vercel serverless function，调用 Claude API
├── package.json           新增 — 声明 ESM，让 Vercel 把 api/*.js 当 Node 函数跑
└── （其它文件未改动）
```

## 一次性部署步骤

### 1. 拿 Anthropic API key

去 console.anthropic.com → API Keys → Create Key。
开通后会送 5 美元额度，足够跑几千次解析（每次约 $0.005）。
拿到形如 `sk-ant-api03-xxxxxx...` 的字符串。

### 2. 在 Vercel 后台加环境变量

打开 Vercel → 你的项目 → Settings → Environment Variables，新增一条：

| Key                 | Value                | 环境                       |
|---------------------|----------------------|----------------------------|
| `ANTHROPIC_API_KEY` | 上一步拿到的 key     | Production, Preview, Dev   |

（可选）如果想换模型，再加一条 `CLAUDE_MODEL`，默认是 `claude-sonnet-4-5-20250929`。

加完点 Save。

### 3. Push 代码上线

```bash
cd cp2-tracker-deploy
git add chat.html api/parse.js package.json CHAT_部署.md
git commit -m "Add /chat natural-language updater"
git push
```

Vercel 自动检测到 `api/` 目录里有 `.js` 文件，会把它部署为 serverless function。
部署完成后访问 `https://你的项目.vercel.app/chat` 即可。

> **注意**：第一次部署后如果 `/api/parse` 返回 404，去 Vercel → 项目 → Deployments → 最新一个 → Functions 标签，确认 `api/parse` 出现了。没出现的话 redeploy 一次。

## 验证流程（第一次必做）

打开 `/chat`，用你 Firebase 的账户登录。然后按顺序试：

1. **打招呼测试**：输入 `今天天气真好` → 应该回复 "我没听懂这条…"
   验证：Claude API 联通了，没解析出动作。

2. **澄清测试**：输入 `今天装了 SF11A` → 应该弹一个澄清问题（SF11A 有 5 个 key，让你说哪几个）。
   验证：Claude 能识别歧义，没胡乱乱改。

3. **真实改动测试**：找一个目前还是 pending 的 unit，输入 `今天装了 SF11A.3 和 SF11A.4 的框`
   → 应该弹预览卡片：
   - `SF11A__4 (SF11A.3): status: pending → installed, date: '' → 2026-05-26`
   - `SF11A__5 (SF11A.4): status: pending → installed, date: '' → 2026-05-26`
   - `+log 2026-05-26 [framing] 11A.3 · 11A.4`
   - 点 **确认写入** → 应该看到 ✓ 已写入
   - 切到主 tracker（在另一个标签页），应该看到这两个 unit 已经变绿。

4. **撤回测试**：如果第 3 步改错了，去主 tracker 手动改回，或者用聊天框说 `SF11A.3 和 SF11A.4 改回 pending`。

## 团队使用方式

把 `https://你的项目.vercel.app/chat` 这个链接发给团队。
他们用各自的 Firebase 账户登录就能上报进度，不用下载 HTML、不用手动编辑。

每次改动都会：
- 推到 `/state`（其他打开主 tracker 的人 1 秒内自动刷新）
- 追加一条 `/history`（带用户邮箱、时间戳、改动描述）

## 常见出错

| 现象 | 原因 | 处理 |
|------|------|------|
| `/api/parse 500: ANTHROPIC_API_KEY not set` | Vercel env var 没配 | 回步骤 2 |
| `/api/parse 502: Claude API 401` | API key 错了 / 失效 | console.anthropic.com 重新生成 |
| `/api/parse 404` | Vercel 没识别 api/ 目录 | 确认 package.json 存在，redeploy |
| 登录后写入失败 "PERMISSION_DENIED" | 账户不在写权限列表 | 这个项目当前规则是 `auth != null` 全部可写，应该不会触发；如果你后来改了规则记得也允许该用户 |
| 预览说 "数据库里没找到这个 key" | Claude 返回了不存在的 key | 一般是 Claude 把 id 当 key 了 — 这是 bug，告诉我具体输入 |

## 成本

- Vercel：你已经在 Hobby plan，serverless functions 每月 100GB-hours 免费，远超够用。
- Anthropic：每次解析平均消耗约 1500 input tokens + 200 output tokens ≈ $0.005。每天上报 10 次 ≈ $0.05/天 ≈ $1.5/月。
- Firebase：读写量不变（聊天页只是另一个客户端），还是免费 Spark plan 够用。
