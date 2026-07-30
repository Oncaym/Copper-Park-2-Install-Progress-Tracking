# Feature Ledger / 功能台账

One line per feature. When syncing, reference the ID ("把 F-012 同步到 CP2").
Status: ✅ live · ⬜ not enabled · ⚠ diverged (see note)

| ID | Feature | AC3 | CP2 | Notes |
|---|---|---|---|---|
| F-001 | Core dashboard (plan/KPI/grid/table/timeline/charts) | ✅ | ✅ | core |
| F-002 | Firebase cloud sync + login gate + edit history | ✅ | ✅ | core |
| F-003 | Chat updater (NL → structured updates, EN/中/한) | ✅ | ✅ | core; needs ANTHROPIC_API_KEY in Vercel |
| F-004 | Glass per-panel tracking + batch update + triage link | ✅ | ✅ | core |
| F-005 | Door Mode + door unit patterns | ✅ | ✅ | patterns per project (PROJECT.doorPatterns) |
| F-006 | Face Cap tracking | ✅ | ⬜ | core-guarded; CP2 index has no m-facecap field |
| F-007 | Interactive elevations (per-SF, DXF geometry) | ✅ | ⬜ | needs elevations.js data per project |
| F-008 | Elevation frame-status button + door→parent-SF view | ✅ | ⬜ | rides on F-007 |
| F-009 | Element type editing via popup (no cycle-click) | ✅ | ⬜ | rides on F-007 |
| F-010 | Day mode (light theme, chart-aware) | ✅ | ✅ | CSS+JS in index.html; helpers in core |
| F-011 | Evidence layer: ref/party/fault + fit-issue/field-verify/gc-inquiry + log filter | ✅ | ✅ | core + index filter input |
| F-012 | Field Verify · R.O. tab (u.ro, auto field-verify log) | ✅ | ✅ | core + index panel |
| F-013 | Cloud-safe Reset (re-pull instead of overwrite) | ✅ | ✅ | core |
| F-014 | Nightly backup GitHub Action | ✅ | ✅ | each repo needs FIREBASE_SERVICE_ACCOUNT + FIREBASE_DATABASE_URL secrets |
| F-015 | core/config architecture (project-config.js) | ✅ | ✅ | 2026-07-06 unification |
| F-016 | Warehouse page | ⬜ | ✅ | CP2-only page |
| F-017 | Friday glass triage page | ⬜ | ✅ | CP2-only page |
| F-018 | Sync Console (`sync.html` — 本地一键 core 对齐, 哈希比对+锁感知) | ✅ | ✅ | meta 工具, 双击用 Chrome/Edge 打开 |
| F-019 | Modules 面板（header ⚙ → 网页内开关功能, 存 state.features 云同步） | ✅ | ✅ | core; PM 免代码开关。**2026-07-23**：module def 支持 `defaultOff:true`（`featureOn` 在 `state.features[k]` 未显式设置时按 defaultOff 判定，否则默认 ON）；Glass Triage（`glassTriage` → `a[href="friday-triage.html"]`）加进 Modules 并 defaultOff，**默认隐藏**，需在 ⚙ 面板勾选才显示。待同步到 AC3。 |
| F-020 | New Tracker Wizard（`new-project.html` — 网页向导建新项目：粘贴 takeoff → 一键生成） | ✅ | ✅ | meta 工具; Chrome/Edge 双击打开 |
| F-021 | 数据驱动楼层（`PROJECT.floors` → 动态生成楼层按钮/Tab/底图） | ✅ | ⬜ | **core（app.js）**：无 floors 时回退到 GF+L2，行为不变；CP2 需同步 app.js 才有此能力（向后兼容，暂不同步也不影响 CP2） |
| F-022 | 向导升级 v2（导入只需编号 · louver 可编辑 · 自定义多楼层多底图 · 界面中/英/韩切换 · 云端步骤标注可选） | ✅ | ⬜ | meta 工具 new-project.html；依赖 F-021 生成的 floors |
| F-023 | Sync Console 云端 Hub 模式（从 GitHub 权威 core 一键拉取 + FEATURES.md 功能菜单 diff） | ✅ | ⬜ | meta 工具 sync.html；Hub 仓库需 public；owner/repo/branch 存 localStorage |
| F-024 | New Tracker Wizard 云端模板模式（Step 1 可从 Hub raw 拉模板生成，不用本地模板文件夹） | ✅ | ⬜ | meta 工具 new-project.html；复用 localStorage `tracker_hub` |
| F-025 | 贡献回 Hub（"📤 贡献回 Hub" 按钮 → serverless `api/contribute.js` 用 bot token 自动开 PR；无端点则降级下载打包） | ✅ | ⬜ | 端点只需部署在 Hub；env `GITHUB_HUB_TOKEN`；说明见 HUB-SETUP.md |
| F-026 | **Project Sync**（`project-sync.html`）：把 sync + new-project 合并成单文件双分页工具，中/英/韩三语，Hub 改为**粘贴 GitHub 链接**自动解析 owner/repo/branch，全部按钮 node 校验可点击 | ✅ | ⬜ | meta 工具；**取代 `sync.html` + `new-project.html`（已删除）**；F-023/24/25 的能力都并入此文件 |
| F-028 | Modules 面板（⚙）标签/标题/描述/按钮三语自适应（读 currentLang；切语言自动重建面板） | ✅ | ⬜ | **core（app.js）**，需同步 CP2；warehouse.html 也已加入 project-sync 的 TOOLING 同步清单 |
| F-027 | Project Sync 同步"工具/文档文件"（project-sync.html/SYNC.md/FEATURES.md/HUB-SETUP.md 可从 Hub 拉取，🔧 标记）+ 旧文件清理（sync.html/new-project.html 若残留可一键 🗑 删除） | ✅ | ⬜ | 让工具能自我分发；contribDiffFiles 限定 core，不误报"贡献" |
| F-029 | Tracker 内嵌 Takeoff Tool（header "🛠 Takeoff Tool" 直跳 `takeoff/`，import DXF 在 takeoff 页做） | ✅ | ⬜ | **非 core**：`takeoff/` = Downloads takeoff tool 的镜像拷贝（改一边要同步另一边）；零件库共享 Firestore 挂 atlantic-chestnut-3 项目 |
| F-030 | **Elevation 入云**：takeoff 页 "→ Tracker" 按钮把每个 unit 的立面几何（glass/louver/door/panel 元素+框线 base）写入 Firestore `elevGeo`；tracker 端 `elev-cloud.js` 实时订阅合并进 `window.ELEVATIONS`（云端覆盖 elevations.js 同名静态条目）→ 导入新 DXF 不用改文件不用重部署 | ✅ | ⬜ | 非 core（elev-cloud.js + index.html 两个 script 标签）；需 Firestore 开通+规则（takeoff tool/`FIRESTORE-SETUP.md`）；unit 显示 id 必须与 mark 一致（如 SF04.1） |
| F-031 | **Open Items 面板**（跨方卡点可视化）：复用现有 `u.rfi[]`（ref/date/subject/status/party/response）—— 不新增数据结构。①`renderRfiList` 里 status=open 的行旁加 "Nd" 天数徽标（>7天红/>3天黄）；②全项目扫一遍所有 unit 的 open rfi，按天数从久到近排序，做成一个 header ⏳ 按钮 + modal（`computeOpenItems`/`openItemsModal`），点 unit 直接跳转编辑；③接入 Modules 面板（F-019），键名 `openItemsBtn`，可关。纯读投影，对没有 rfi 数据的老 unit 零影响，向后兼容。 | ⬜ | ✅ | **core（app.js）**，2026-07-23 首发于 CP2，待同步到 AC3。**已知局限**：`u.rfi` 是挂在单个 unit 上的，但真实卡点常常是 submittal/RFI/结构计算这类项目级、不对应单一 unit 的事项（如 relieving angle trim revision、structural calc review）——目前只能挂在某个代表性 unit 上，或者先不进面板。CP2 现在还没有任何 SD 前缀的门 unit（fire-rated door 还没建档），所以门铰链 RFI 这类也暂时没有天然归属的 unit。后续如果要做「项目级 open item（不挂 unit）」，需要加一层新的顶层数据（如 `state.projectItems[]`），是潜在的 F-032。**顺带修的 bug**：RFI 行的输入网格里一直没有 `party` 这一列输入框——`u.rfi[].party` 在数据模型和展示里都存在，但 `renderRfiList`/`_rfiRowsRaw` 从没读写过它，导致每次 Save 都会把 party 静默清空。已加上 party 输入框（ref/date/subject/status/**party**/response/dateAnswered），jsdom 端到端测过存取正常。**2026-07-23 追加**：即使加宽到 760px，7-8 列还是挤成一行看不清——`renderRfiList`/`renderProjectItemsList` 都改成两行（`.evi-line1`=ref/date/subject/status+天数徽标，`.evi-line2`=party/response(加宽)/answered/删除），DOM 读取顺序不变（`querySelectorAll('input,select')` 按文档顺序走，不受视觉分两行影响）。项目级条目又加了一个 `relatedUnits` 自由文本字段（F-032 最初设计漏了这点——项目级条目几乎总是对应一批 unit，比如门铰链变更只影响门，不是真的"跟 unit 无关"），会一起同步进 `upsertRfiLog` 生成的 log 内容里。 |
| — | **F-031 连带发现并修复的更大 bug**：2026-07-06 的 core 统一把 `app.js` 换成了 AC3 的 M3 版本（openUnit/saveUnit 只认 `cal-id`/`cal-note`/`#cal-rows`/`#rfi-list` 这套 DOM），但 CP2 的 `index.html` 弹窗当时保留的是同步前的 Framing/R.O./Glass 三 tab 结构——两边完全不匹配。结果：`openUnit()` 第一步读/写 `cal-id` 就直接抛异常，marker 点击后 modal 根本不会显示 `show`；`saveUnit()` 同理写不进任何字段。**这不是本次新引入的问题，是核心同步后就一直存在、直到这次做 RFI 才被发现。** 修法：把 CP2 弹窗升级成 Calendar / R.O. / Glass / RFI 四个 tab（跳过 Elevation tab，因为 CP2 还没有 DXF 生成的 `window.ELEVATIONS`），并在 `app.js` 里补上 CP2 专用但做了 null-guard 的 `renderGlassPanelList`/`renderRoList` seed 调用 + `saveUnit` 里对应的 guarded 写回，`switchModalTab` 的 tab 列表也加了 `glass`/`ro`（AC3 没有这两个 DOM，guard 后零影响）。已用 jsdom 跑通 openUnit→切 tab→改字段→saveUnit 全流程，无报错，数据正确落盘。 |

| F-032 | **Open Items 收尾**（Opus review 后落地，2026-07-23）：①弹窗加宽——`#unitModal .modal` 在 `@media (min-width:821px)` 下 max-width 提到 760px（特意包在这个 media query 里，不是裸选择器，避免跟手机端 `@media (max-width:820px)` 的全屏弹窗规则打specificity架）；②`mergeSeedUnits()` 里加了 RFI 追加逻辑——project-config.js 的 seed unit 带 `rfi[]` 时，按 `ref`（无 ref 则按 subject，大小写不敏感）在已存在 unit 的 `rfi[]` 里找不到匹配才追加，找到就跳过不覆盖；有追加时复用 `_mergeNote` 触发 `_cloudApplyRemoteState()` 已有的 push-back 机制，本地/云端两条路径共用同一个 `mergeSeedUnits`，改一处生效两处；③新增 `upsertRfiLog`/`sweepOrphanRfiLogs`（app-log.js）：`kind:'rfi'` + `rfiKey`(`scopeKey::safeKey(ref||subject)`) 做身份标识，跟 `isUnitAutoEntry`(`!kind\|\|kind==='unit'`) 和 glass 的 `kind==='glass'` 天然隔离；`saveUnit()` 里换成对 `u.rfi[]` 每一条都 upsert + 孤儿 sweep（不再是"只处理新增部分"），编辑/删除 RFI 都会同步反映到 log；能自动收编 F-031 之前那种没有 `kind`/`rfiKey` 的旧版 bare gc-inquiry log（按 content 里有没有包含 "RFI <ref>" 或 subject 判断），不会产生重复条目；④新增顶层 `state.projectItems[]`（不挂 unit），`loadState()`/初始 state 都给默认 `[]`，`_cloudApplyRemoteState()` 里跟 `log`/`submittals`/`materials` 一样做了 `Object.values(x||{})` 兜底（Firebase 空数组会变成 `{}`/`null`，不 coerce 会在别的客户端炸)；`⏳ Open Items` 面板拆成两块，上面还是原来按 unit 的只读汇总，下面新增可编辑的项目级区块（跟 RFI tab 一样的行 UI），有自己的 Save，走同一套 `upsertRfiLog`（scopeKey 用字面量 `'project'`）；`computeOpenItems()` 合并两种 scope 一起按天数排序。四点均由 Opus review 后确认落地，用扩展过的 jsdom harness 跑通（新增断言：seed 追加不覆盖、幂等重跑不重复、legacy log 收编、编辑/删除同步到 log、project-level CRUD、混排排序、空数组 coercion）。 | ⬜ | ✅ | **core（app.js + app-log.js）**，2026-07-23 首发于 CP2，待同步到 AC3（含 F-031 的 party 输入框修复一起同步）。 |

| F-033 | **两周安装窗口 pilot 三件套**（2026-07-23，Opus）：①**每日 GC 推送生成器**——header 加 `📤` 按钮（`_injectDailyPushBtn`，随 `render` 注入,挨着 ⏳）→ `openDailyPush()` 弹窗,`buildDailyPushText()` 从**实时 state** 生成纯文本(今日安装=`status==='installed' && date===TODAY`、明日计划=`date===tomorrow`、open 卡点复用 `computeOpenItems()` 按天数排序、自动挑最久那条拼一句"Need your reply")→ textarea 可改 + 📋 复制(navigator.clipboard,execCommand 兜底)+ ✉️ mailto 草稿。纯读,不写 state。②**访问日志(opens tracking)**——`cloud-sync.js` 在 `.info/connected` 首次为 true 时(`window._accessLogged` guard 防重连重复)往 Firebase `access` push 一条 `{email,ts,ua}`;`firebase-database-rules.json` 新增 `access` 节点:写=任何登录用户但只能写自己那条且 append-only(`!data.exists()` + `newData.child('email')==auth.token.email`),读=仅 editor(allowlist);`openUsagePanel()`(⏳ 面板底部 `📊 Usage`,editor-only)读 `access` 聚合成每人 opens+last-seen。③**卡点优先落地**——`_injectOpenItemsBtn` 在有 open item 时把 ⏳ 按钮标红加粗;`_pilotAutoOpenBlockers()` 在 initApp 末尾按 `sessionStorage` 日期标记每浏览器 session 弹一次 Open Items(编辑者整天开着也只弹一次)。jsdom 测过 `buildDailyPushText`(今日/明日/卡点/GC ask 全部正确,旧日期 unit 不误算)。**部署前须做**:(a) Firebase Console 更新并发布新规则,否则 access 写不进;(b) 给 GC 建只读账号(现规则下不登录看不到看板)。运行手册见 `PILOT-2WK.md`。 | ⬜ | ✅ | **core(app.js + cloud-sync.js)+ 项目件(firebase-database-rules.json 需各项目自己发布)**,2026-07-23 首发 CP2,待同步到 AC3(rules 的 access 节点两边都要加)。**v2(2026-07-23 只读账号实测反馈)**:①卡点面板重命名 **Things to Solve**(⏳→🔧,标题去掉描述段);②取消 auto-pop modal(桌面像故障、手机不触发),改成 `_injectBlockerBanner()`——`<main>` 顶部常驻红色横幅"N things to solve → Review",随 render 反映实时数量,0 时移除,手机桌面都可靠;③project-level 输入框之前是白的(不在 `.form-row` 里没继承深色样式)——`_EVI_IN` 补上 bg/border/color/padding 跟 RFI tab 一致;④只读账号(GC/非 allowlist)隐藏 Chat/Warehouse/Modules/📤 Daily push——`applyReadOnlyUI()`(hide-only,不 un-hide 以免覆盖 Modules 自己的开关)随 render 跑 + cloud-sync `enterReadOnlyMode` 里通过 `window._onReadOnly` 即时触发;⑤Daily GC push 改为纯英文(内容+弹窗 chrome)。jsdom 14 断言全过。 |

| F-034 | **Response 变 Thread（双向往来记录）**（2026-07-28，Cowork）：RFI / 项目级条目的"回复"从单个 `response` 字符串升级为 `thread=[{by:'us'|'gc'|'', text, date}]` —— 我方修改、GC 反馈、通过则 close、不通过再改，逐条留痕。共享 helper（`_threadFrom`/`_threadEntryHtml`/`_threadBoxHtml`/`_readThread`/`_threadReadHtml`/`_sideLabel`）；`renderRfiList` 与 `renderProjectItemsList` 去掉 Response/Answered 两个单框，改成行内 thread 编辑器（side 下拉 + note + date + "+ Add response"/×）；读取从**按位置**改成**按 `.evi-line1/.evi-line2` 作用域取标量 + `.thread-entry` 取 thread**，thread 的可变行数不再打乱标量索引；`computeOpenItems`/项目级读卡都带上 `thread`，Things to Solve 卡片把单行 `↩ response` 换成迷你对话视图。旧的单串 `response` 首次渲染时迁移成一条 side 留空的 thread 条目（`upsertRfiLog` 不读 response，log 同步不受影响）。GC 只读→仍用邮件回复，Leo 把 GC 回复登记为 `gc` 条目。38 断言（thread/reader/zoom）全过。 | ⬜ | ✅ | **core（app.js）**，2026-07-28 首发 CP2，待同步到 AC3。 |
| F-035 | **平面图缩放/平移修复**（2026-07-28，Cowork）：①**marker 缩放时不变大**——planWrap 缩放会把 marker 一起放大导致遮挡；`applyPlanTransform` 现给 wrap 设 `--mk = MIN_ZOOM/s`，marker 的 transform 乘 `scale(var(--mk,1))`（含 hover/hover:none/glass-marker selected），使 marker 屏幕尺寸恒定=fit 视图大小，放大只拉开间距不放大点（index.html 6 处 transform）。②**可缩小到 fit 以下 + 边缘可达**——新增 `ZOOM_MIN=0.35` 作为绝对缩小下限（`planZoom` clamp 用它，`MIN_ZOOM=0.9` 仍是 fit/reset 基准与 label 100% 基准）；`clampPlanPan` 重写：用真实 `wrap.offsetWidth/Height*s` 而非 viewport 宽近似，去掉 `s<=MIN_ZOOM` 的 snap-back（缩小不再被弹回），四周各留半个 viewport 的平移余量 → 被拖到画面外/黑边的 marker 能缩小看到并拖回；拖拽自动放大仅在**恰好 fit** 时触发（缩小状态不误放大）。 | ⬜ | ✅ | **core（app.js）+ 项目件（index.html 的 marker transform CSS）**，2026-07-28 首发 CP2，待同步到 AC3（app.js 部分）。 |

## Notes
- **2026-07-23 (Opus) — GC 只读界面精简**（core：app.js 一行 + 项目件：index.html 标记/CSS，待同步 AC3）：
  只读账号(GC)加 `body.gc-view`(在 `applyReadOnlyUI` 里按 `CloudSync.isReadOnly()` toggle,纯 CSS 驱动,
  编辑者永远不加)。CSS:`body.gc-view [data-gc-hide]{display:none}` + `body.gc-view .plan-toolbar>*:not(:first-child){display:none}`。
  `data-gc-hide` 打在:4 张非进度 KPI 卡(Issues/Pending/Louvers/Glass,保留 Installed + Overall Progress)、
  趋势+状态两图的 grid-2、Glass Status Breakdown、Unit Status Map 网格、Daily Log + Unit Detail Table 的 grid-2。
  平面图 section 保留(只读),但 plan-toolbar 只留第一个子元素(GF/L2 楼层切换),其余编辑工具全隐藏;zoom 控件在
  viewport 内不受影响。结果:GC 只看到 顶部 Things to Solve 横幅/按钮 + Installed & Overall Progress 两个数 + 只读平面图。
  jsdom 3 断言(gc-view 加/不加/来回 toggle)过。**已知遗留**:GC 点 marker 仍打开可编辑的 unit 弹窗(Save 会被云端规则拒),
  暂未锁;如需只读弹窗再做。
  **v2(2026-07-23 GC 实测反馈,方向调整——不再极简,保留信息但清理噪音)**:
  ①保留全部 KPI 卡(Installed/Issues/Pending/Louvers/Glass/Overall)、趋势/状态/玻璃三图、Unit Status Map 网格——
  上一版对这些打的 `data-gc-hide` 全部撤掉;②GC 只隐藏 **Daily Log + Unit Detail Table**(它们同在 grid-2 `17a02737:465`,
  上一版漏打标记所以没隐藏,这次补上);③`body.gc-view #langSwitcher{display:none}` 隐藏语言切换,且 `applyReadOnlyUI`
  里对 GC 强制 `applyLang('en')`(guard currentLang 防 render 循环);④**Things to Solve 横幅改 `position:sticky;top:0`
  常驻顶部(全局,非仅 GC),背景改不透明(var(--panel)+红边+红字+内阴影红晕),往下滑不再消失;⑤GC 地图 marker 清理:
  `font-size:0` 去掉编号、缩小到 13px(手机 11px)减少重叠、`.has-louver::after{display:none}` 去掉 louver 'L' 徽标、
  `.issue` 加红色 glow(box-shadow)。GC 只剩 installed(绿)/pending(灰)/issue(红闪+红晕)/ready(黄)。jsdom 5 断言过。
  **v3(2026-07-23 再次调整)**：①GC 重新隐藏三张图(趋势/状态/玻璃 breakdown = grid-2 `:167` + glass 段)和 Unit Status Map 网格(`:188`)——v2 误撤了这些标记,现补回 `data-gc-hide`;GC 最终只见 全部 KPI 卡 + 平面图 + Things to Solve。②**Things to Solve 横幅真正钉顶**：之前放 `<main>` 里 `position:sticky` 无效(header 本身 sticky z-index:100 会盖住,且手机 `body{overflow-x:hidden}` 让 sticky 失效)。改成把横幅 append 进 `<header>` 跟着已生效的 sticky header 一起钉顶,去掉脆弱的 position:sticky。0 时移除、不重复。jsdom 7 断言过。
- **2026-07-23 (Opus) — bugfix：边缘 marker 拖不动**（待同步 AC3）：编辑位置模式下,靠近平面图边缘的
  marker(如最右侧 x≈96 那批 50/19/49/51/52)拖不动。根因:单个 marker 的 `mousemove` 里有
  `if (x<0||x>100||y<0||y>100) return;`——0.9 缩放下平面居中、四周是黑边距,一拖光标就越过 wrap 边缘
  →x>100→整个 move 被 return 掉,marker 冻住。多选拖拽路径本来就是 clamp(不 return)所以不受影响。
  修法(第一版):单 marker 路径改成 clamp(0,100) 不再 return。**修正(Leo 要 marker 能放到平面图
  外的黑边区域)**:不 clamp 到 0–100,改成把**光标 clamp 到 plan viewport**再算 %——位置可以为负
  / 超过 100(落进缩放后平面四周的黑边距,`.plan-wrap` overflow visible 会渲染出来),但 marker 永远
  拖不出可视 viewport(`.plan-viewport` overflow hidden)不会丢。多选拖拽的 nx/ny 也从 clamp(0,100)
  放宽成 `_clampMarkerPct`=clamp(-50,150) 安全带。node --check + 视口 clamp 逻辑断言过。
- **2026-07-23 (Opus) — 只读账号 + 手机实测第二轮修改**（都待同步 AC3）：
  1. **只读横幅移除**：`cloud-sync.js` `showReadOnlyBanner()` 直接 `return`（GC 视角无用噪音；编辑入口已由 `applyReadOnlyUI` 隐藏）。
  2. **删除 ↻ Reset 按钮**：`index.html` header 里 `resetData()` 按钮删掉（云模式下等于刷新页面，且对 GC 吓人）。`resetData()` 函数本身保留但无入口。
  3. **Calendar：Sun Shade → Face Cover**：`renderCalendar` 里 `scope:'sunshade'` 行换成 `scope:'faceCover'`（label "Face Cover"，CP2 没有 sunshade）；`categoryLabel` 加 `faceCover`。存到 `u.scopes.faceCover`。**若 Leo 本意是绑到现有 `facecap` 字段而非新 scope，回来改。**
  4. **Field Verify R.O. 加拍照/上传**：`renderRoList` 每行加 📷 Add photo（`accept="image/*"` 手机可拍可选）+ 缩略图（点开大图、× 删除）；照片走已有 `_photoFileToBlob`/`_uploadPhotoToStorage`（Firebase Storage，data-URL 兜底），URL 存 `u.ro[i].photos[]`（小字符串，云同步没问题）。`_roRowsRaw` 用 `input:not([type=file])` 排除 file input 保持列位；照片存 `.ro-row[data-photos]`（单引号属性，& ' < 转义，兼容 Firebase URL 里的 &）。`readRoRows` 保留只有照片没尺寸的行。
  5. **手机可收起 Unit Status Map**：`#planSection` header 加 `.plan-collapse-btn`（仅手机 `@media`显示），`togglePlanCollapse()` 切 `.plan-collapsed`（隐藏 toolbar/batch/viewport），caret ▾/▸。
  6. **Things to Solve 手机不重叠 + 线程视图**：默认读视图把 unit 级和项目级都渲染成只读 thread 卡片（无输入框，`threadCard()`，去掉原来的列网格表头）；项目级区块加 `✏️ Edit`/`✓ Save` 开关（`toggleProjectEdit`/`_projItemsEditMode`），编辑态才出输入行；`@media(max-width:820px)` 下 `.evi-line1/.evi-line2` 强制单列堆叠（`!important`），彻底解决手机上 7-8 列挤重叠。jsdom 15 断言全过。
- **2026-07-20 (Sonnet)**: core-sync audit vs AC3 — `app.js`/`app-log.js`/`chat.html`/
  `cloud-sync.js`/`api/parse.js`/backup scripts/all `takeoff/*` core files confirmed already in
  sync, except `api/parse.js` was missing `'in-progress'` from its status enum — fixed to match
  AC3. Real remaining gap is `index.html` (F-023–030, all ⬜ here) + no `elevations.js`/no F-030
  elev-cloud wiring, so elevation markers have no geometry to show. See AC3 `memory.md`
  2026-07-20 entry for full diagnosis. Not yet acted on — awaiting scope decision.

## Divergence watchlist
- **F-021 (app.js 数据驱动楼层, 2026-07-07)**: AC3 的 app.js 已加 getFloors/renderFloorControls，CP2 尚未同步。改动向后兼容（无 `PROJECT.floors` 时零行为变化），所以 CP2 现状不受影响；但下次改 core 前应把 app.js 原样复制到 CP2 并 md5 校验，避免漂移。
