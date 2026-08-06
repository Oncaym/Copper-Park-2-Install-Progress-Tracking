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
5. **平面图必须成对出交付物，而且是透明底（Leo 反复提过，别再犯）**：GF 的图是
   **透明背景 PNG（RGBA）**——只画线，页面底色透出来，所以同一张图在深色/日间模式下都对。
   任何新增/替换的平面底图都要按这个规格出两张：`xxx.png`（**黑线 + 透明底**，给打印/日间）
   和 `xxx-white.png`（**白线 + 透明底**，给深色 UI），并在 `PROJECT.floors` 里同时填
   `img` + `imgDark`（GF 走 `<img>` 上的 `data-plan-light`/`data-plan-dark`）。
   **不透明白底 = 深色模式下一块黑板**（2026-08-05 就是这么翻车的）；也不要指望运行时 canvas
   反色兜底——那只是没有孪生图的旧楼层的退路。自检：`Image.open(f).mode` 必须是 RGBA、
   角像素 alpha=0、透明像素占比 >0.9；`_tests/test-floors-types.cjs` 里有对应断言。

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
- [ ] **F-033（access 访问日志 + 卡点优先落地）部署前须做**：①Firebase Console 更新并发布
  `firebase-database-rules.json`（`access` 节点），否则访问日志写不进；②给 GC 建**只读账号**；
  ③本地过一遍：⏳ 有卡点时自动弹一次 / ⏳ 面板底部 📊 Activity 能读。运行手册见 `PILOT-2WK.md`。
  **📤 每日 GC 推送生成器已于 2026-08-05 删除（F-049）**——推送最后都是手写的，留个半吊子生成器更碍事。
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
  验证脚本：`npm i jsdom && node _tests/test-scope-kpi.cjs`（36 断言）。
- [ ] **F-042（unit shop drawing）本地验一遍**：unit 弹窗 → `Field Verify · R.O.` tab → 底部
  「Shop drawing / elevation」选一张 elevation 截图 → 应出现缩略图（点开能看大图）→ **Save** →
  用 GC 只读账号点该 unit 的 marker（Openings lens）→ 尺寸下面应有「Shop drawing · 1 sheet」缩略图，
  点开能放大。📐 清单表也应多一列 Drawing。**要注意的一点**：如果状态栏出现「Storage rejected the
  upload」，说明 Firebase Storage 规则没放开，图会以 data-URL 存进 /state（压到 1200px）——能用但会
  让 /state 变大，要去 Firebase Console 的 Storage 规则里放开（跟日报照片同一个 `cp2-photos/` 前缀，
  日报照片能上传的话这里也能）。不需要改 Realtime Database 规则。
  验证脚本：`npm i jsdom && node _tests/test-unit-drawings.cjs`（43 断言）。待同步到 AC3（app.js；AC3 没有
  R.O. tab，同步后 `ro-dwg-thumbs` 不存在 → 保存时不会动 `u.drawings`，行为不变）。
- [ ] **F-043（GC 视图收窄）本地验一遍**：用 GC 只读账号登录 → 顶部 KPI 卡片整排应该**看不见**，
  平面图上方只有 `📐 Openings` `🔧 Issues` 两个 tab（没有 `✓ Progress`）；换回 Leo 账号 → 两者都回来。
  待同步到 AC3（app.js 的 `_lensAllowed` + index.html 的 `data-gc-hide`）。
  验证脚本：`npm i jsdom && node _tests/test-gc-view.cjs`（23 断言）。
- [ ] **F-044（2F/13F 拆分 + IS + 门类型）本地验一遍**：①平面图上方应有 **Ground Floor / 2nd Floor / 13th Floor**
  三个按钮，下面 Unit 表格的 tab 也是 All + 三层；②切到 2nd Floor → 底图是原来那张图的左半，SF60~63 六个
  marker 位置应该大致对（我按裁切框重算过坐标，可能还要微调）；③切到 13th Floor → 新的 DXF 底图，SF70/SF71
  五个 marker **坐标已清空**（会叠在中心），拖出来放到正确位置即可；④**第一次用 editor 账号打开会自动跑一次
  数据迁移**（控制台有 `[migration] cp2-2026-08-floor-split`，Daily Log 里也会多一条记录），跑完会推回云端 —— 
  **确认推成功了再关页面**，否则下次还会再跑（幂等性我测过，重复跑不会二次映射坐标，但还是看一眼稳妥）；
  ⑤IS 开头的 unit 应显示成**菱形**；⑥点门单元 → Calendar tab 有 Door type 下拉，选防火门 → marker 出现琥珀双环。
  ⑦深色模式下 2F/13F 应该是**白线黑底**（跟 1 层一致）——用的是预反色孪生图 `*-white.png`，不是运行时反色。
  验证脚本：`npm i jsdom && node _tests/test-floors-types.cjs`（63 断言）。
  **注意**：`13th fl.dxf`（26MB）已加进 `.gitignore`（`*.dxf`）——仓库里只放渲染好的 PNG。要重新渲染就把 DXF
  放回文件夹让我跑一次。待同步到 AC3（app.js 的 runStateMigrations / isInterior / doorTypeOf / renderDoorTypeRow）。
- [ ] **F-045（换楼层）本地验一遍**：①在 13th Floor 上点 ➕ Add new marker → 输入 SD19 → 应弹确认
  「把 SD19 从 2nd Floor 移到 13th Floor…」→ 确认后 marker 出现在你点的位置，2nd Floor 上不再有它，
  Daily Log 多一条 moved 记录；②或者点开 unit 弹窗 → Calendar tab 顶部 **Floor** 下拉直接改楼层
  （改完坐标会清空，拖到位即可）。验证脚本：`node _tests/test-floors-types.cjs`（77 断言）。待同步到 AC3。
- [ ] **F-046（尺寸基准 / 免责说明 / 透明底图）本地验一遍**：①unit 弹窗 `Field Verify · R.O.` tab 顶部
  多了「Dimension basis」下拉 —— **玻璃没订的 unit 记得切成 "We follow the GC's opening"**，切完 GC 那边
  看到的就变成「请把实测尺寸发给我们」，📐 清单该行显示 `follows your opening`；②GC 卡片和 📐 清单
  （含打印稿）底部都应有一行 Reference only 免责说明；③2F/13F 底图在深色模式下应该跟 1 层一样是
  **透明底 + 白线**（不是黑板），日间模式是黑线。④Openings lens 上 hold 是蓝色、follow 是**紫色虚线边**、GC 确认后都变绿，lens 栏下方有色标图例。
  验证脚本：`node _tests/test-unit-drawings.cjs`（66 断言）+ `node _tests/test-gc-view.cjs`（33 断言）
  + `node _tests/test-floors-types.cjs`（84 断言）。待同步到 AC3。
  **2F 底图已换成 `2nd fl.dxf` 渲染的整层平面**（不再是老图纸裁的左半）—— SF60~63 六个 marker 的坐标
  是按老底图算的，在新图上会偏，拖一下就行（我没清空，免得把你已经调过的位置也一起清了）。
  **Leo 待办**：把哪些 unit 是"玻璃还没订"标出来（或给我清单，我批量写进 project-config）。
- [ ] **F-047（手机端用户菜单）验一遍**：手机上点右上头像 → 三个选项（Edit history / Who's online /
  Sign out）应完整显示、不再被裁一半；横屏时若下方空间不够会翻到按钮上方。
  验证脚本：`node _tests/test-user-menu.cjs`（21 断言）。**core 改动（cloud-sync.js），AC3 同样中招，待同步。**
- [ ] **F-050（Face Cover → Beauty Cap）本地验一遍**：①第一次用 editor 账号打开会跑迁移
  `cp2-2026-08-facecover-to-beautycap`（控制台 + Daily Log 各一条），跑完确认推回云端；②unit 弹窗
  Calendar tab 里原来的「Face Cover」行现在叫 **Beauty Cap**，之前填的状态/日期应原样还在；
  ③顶部第二张卡变成 Beauty Cap，marker 右下弧同理。验证脚本：`node _tests/test-scope-kpi.cjs`（36）。
- [ ] Leo：把安装窗口**结束日期**告诉当前会话，好设"最后一天"收尾对话提醒（super/PM 访谈，
  问题清单在 PILOT-2WK.md 第四节）。GC 依赖清单给我可批量录入 project-config SEED。

## 怎么加一种新的 unit 类型（F-051）

不用改代码，也不用部署：

1. 顶部 **⚙** → 面板底部 **🔷 Unit types…**
2. **+ Add type**，填四样：
   - **Name** —— 图例上显示的名字，例如 `Hollow metal door`
   - **Id starts with** —— 编号前缀，例如 `HM`（其实是正则，`^` 可省略；大小写不敏感）
   - **形状 / 颜色** —— 6 种形状 × 8 种描边色，都是挑好的
   - **Badge**（可选）—— marker 角上的两字标记，例如 `HM`
3. **Save**。立刻生效，并同步给所有登录的人；平面图图例会自动多出这一项。

几条要知道的规矩：
- **填充色永远是安装状态**（绿=已装、黄=就绪、红=问题、灰=待装），类型只改形状/描边/徽标 —— 所以一眼还是先看得出装没装。
- 前缀命中就自动归类；某个 unit 想例外，打开它的弹窗 → Calendar tab → **Unit type** 下拉手动指定（下拉里会写明"自动会判成什么"）。
- 删掉一个类型，对应的 marker 会退回普通圆点，数据不会丢。
- 内置的三种（外部 storefront 圆形 / IS 菱形 / 门 方形）删不掉，但可以用同前缀的自定义类型盖过去。
- 想让某个类型跟着仓库走（新克隆的 tracker 也自带），把它写进 `project-config.js` 的 `unitTypes`；界面上加的存在云端。
