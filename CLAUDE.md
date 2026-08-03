# CP2 Tracker — Claude 会话交接文件 / Session Handoff

> 任何人在自己的 Claude/Cowork 会话里挂载这个文件夹，读到这里就能接上全部背景。
> 改动前先读完本文件 + `SYNC.md`。

## 项目是什么

Cooper Park 2（GC: Broadway Builder）的幕墙/storefront 安装进度看板。
静态 HTML + Firebase 云同步，多人实时编辑，部署在 Vercel。
**2026-07-06 起与 AC3 tracker 共享同一套 core 代码**（见下）。

## 架构（2026-07-06 core/config 分离）

- **core 文件**（与 AC3 tracker 逐字节一致，跨项目同步）：`app.js`、`app-log.js`、
  `cloud-sync.js`、`chat.html`、`api/parse.js`、`.github/` 备份 Action
- **项目件（永不跨项目覆盖）**：`project-config.js`（SEED、storageKey
  `cooper_park_2_install_v4`、i18n 项目名）、`firebase-config.js`、`state.json`、
  `index.html`（混合件）、`gf-plan.png`、`warehouse.html`、`friday-triage.html`
- 同步规则见 `SYNC.md`，功能清单见 `FEATURES.md`（要同步说 "把 F-0XX 同步到 XX" 就行）

## 编辑锁（防 OneDrive/同步冲突，Claude 必须遵守）

修改本文件夹任何文件前：先读根目录 `EDITING.lock`。存在、2 小时内、且不是当前用户
→ 停下问用户。可以编辑时先写入锁 `{ "user", "started", "note" }`，改完删除。
只读操作不需要锁。

## 数据模型

与 AC3 相同（unit: key/id/status/date/louver/glassPanels/ro…；log 带证据字段
ref/party/fault，分类含 fit-issue/field-verify/gc-inquiry）。细节见 AC3 tracker
的 CLAUDE.md 或直接读 `project-config.js`。

CP2 特有：`defaultPositions` 有平面图预置坐标（requirePlacedMarkers=false）；
门 ID 规则只有 `^SD`；无立面视图（F-007 未启用，需要 shop drawing DXF 才能生成）。

## 关键规则

1. 云端是唯一真相；重置数据 = Firebase Console 删 `/state`，会用 project-config 的 SEED 重播种
2. unit 的 `key` 不能改；Scope 变更改 `project-config.js` + `state.json` 两处
3. 冲突策略 last-save-wins，Edit History（右上角用户菜单）可查
4. ↻ Reset 在云模式下只从云端重拉，不会覆盖共享数据（F-013）

## 待办

- [ ] 备份 Action 需要配 repo secrets：`FIREBASE_SERVICE_ACCOUNT` + `FIREBASE_DATABASE_URL`
  （CP2 自己的 Firebase 项目），配好后 Actions 页手动 Run 一次验证
- [x] ~~2026-07-06 的 core 统一还没推 GitHub/Vercel——推之前先本地打开 index.html 验证~~
  2026-07-23 验证时发现问题是真的存在：core 统一后 `index.html` 弹窗一直没跟上，
  marker 点击基本没反应（`openUnit`/`saveUnit` 读写 `cal-id` 等字段时直接报错）。
  已修复——弹窗升级为 Calendar/R.O./Glass/RFI 四 tab，见 FEATURES.md F-031。
  **部署前务必本地过一遍：点 marker → 改状态/日期/louver/note → Save → 刷新看是否保留。**
- [ ] chat 证据解析（F-011）部署后生效；R.O. tab（F-012）已在界面里（现已确认 openUnit/saveUnit 会正确 seed/存回 u.ro，2026-07-23）
- [ ] F-031 待同步到 AC3（Open Items 面板 + RFI 行的 party 输入框 bug 修复，这个 bug 两边都有）
- [ ] F-032 待同步到 AC3（弹窗加宽、mergeSeedUnits 的 RFI 追加、upsertRfiLog 日志同步、
  state.projectItems 项目级条目）——Opus review 过，细节见 HANDOFF-F031-F032-review.md
- [ ] **F-033（两周 pilot 三件套：📤 每日 GC 推送生成器 + access 访问日志 + 卡点优先落地）
  部署前须做**：①Firebase Console 更新并发布 `firebase-database-rules.json`（新增 `access` 节点），
  否则访问日志写不进；②给 GC 建**只读账号**（现规则下不登录看不到看板）；③本地过一遍：
  点 📤 出草稿 / ⏳ 有卡点时自动弹一次 / ⏳ 面板底部 📊 Usage 能读。运行手册见 `PILOT-2WK.md`。
  待同步到 AC3（app.js + cloud-sync.js；rules 的 access 节点两边各自发布）。
- [ ] **F-037（GC 双向协作）部署前须做**：①Firebase Console 更新并发布 `firebase-database-rules.json`
  （新增 `gcItems` 节点：任何登录用户可创建自己那条，只有 editor 能改/删）——不发布的话 GC 提交会
  自动降级成邮件草稿，内容不丢但看板收不到；②本地过一遍：用 GC 只读账号点 marker → 应该出**只读卡**
  （没有输入框/Save）→ ➕ Raise an issue → 换回 Leo 账号在 🔧 面板看到 "From the GC — needs triage"
  → ⤵ Merge/Promote → 检查内容进了对应 thread 或新建了项目级条目；③thread 的"哪一方"框现在可以直接
  手输（Architect / Owner / EOR …）。待同步到 AC3（app.js + cloud-sync.js；rules 的 gcItems 两边各自发布）。
- [ ] **F-038（Required R.O. + 📐 Openings 清单）**：不需要改 Firebase 规则（复用 F-037 的 `gcItems`）。
  部署前本地过一遍：unit 弹窗 R.O. tab 顶部填 Width/Height（打 `84.25` 或 `7-0 1/4` 都行，失焦自动变
  `7'-0 1/4"`）→ Save → 点 header 📐 看清单（平面图 tag 是不是全称、表格对不对）→ 🖨 打印预览
  （应该只剩清单、平面图是黑线白底）→ 用 GC 账号点 ✓ Opening ready → tag 变绿。
  **Leo 待办**：把各 unit 的 R.O. 尺寸录进去（可以直接给我列表，我批量写进 project-config SEED）。
- [ ] **F-039（平面图 lens 栏）本地验一遍**：平面图上方应有 `[📐 Openings] [🔧 Issues] [✓ Progress]`。
  Openings → marker 变成写着尺寸的胶囊（要先有 R.O. 数据才看得到，否则是空的）；Issues → 出现 RFI
  下拉，选一条只亮对应 unit；Progress → 跟以前一样。GC 账号登录应直接落在 Openings，且 📐 Drawings
  按钮不可见。待同步到 AC3（app.js）。
- [ ] **F-041（Caulking / Face Cover 进度）本地验一遍**：顶部 banner 应有「Caulking Done / Face Cover Done」
  两张卡（百分比 + `x / y units · n in progress`），点开是逐单元清单；平面图 marker 上，caulking 装完的
  出现**左上琥珀弧**、face cover 装完的出现**右下钢灰弧**，进行中是虚线，都没开始则无环。数据来自 unit 弹窗
  Calendar tab 的 Caulking / Face Cover 两行——**先在几个 unit 上把这两行设成 Installed/Ready 再看图**，
  否则整张图不会有环（这是设计如此，不是坏了）。不需要改 Firebase 规则。待同步到 AC3（app.js + index.html
  的 KPI 卡/CSS/图例；AC3 用 facecap 而不是 faceCover，同步时要确认字段名）。
  验证脚本：`npm i jsdom && node test-scope-kpi.cjs`（36 断言）。
- [ ] Leo：把安装窗口**结束日期**告诉当前会话，好设"最后一天"收尾对话提醒（super/PM 访谈，
  问题清单在 PILOT-2WK.md 第四节）。GC 依赖清单给我可批量录入 project-config SEED。
