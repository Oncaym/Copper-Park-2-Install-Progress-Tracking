/* ============================================================
   COOPER PARK 2 — Installation Progress Monitor
   Data extracted from: INSTALLED FRAMING UPDATE.pdf (Ground FL)
   ============================================================ */
/* ============================================================
   i18n — ENG / CN / KR
   ============================================================ */
const I18N = {
  en: {
    header_sub: "Broadway Builder · Ground Floor · Installed Framing & Louver Tracking",
    btn_export: "⬇ Export JSON",
    btn_import: "⬆ Import JSON",
    btn_add_log: "+ Add Daily Log",
    btn_reset: "↻ Reset",
    kpi_installed: "Installed",
    kpi_installed_sub: "Framing units completed",
    kpi_progress: "Ready",
    kpi_progress_sub: "Ready to install",
    kpi_issues: "Issues",
    kpi_issues_sub: "Opening error / rework needed",
    kpi_pending: "Pending",
    kpi_pending_sub: "Not yet installed",
    kpi_louvers: "Louvers Installed",
    kpi_louvers_sub: "Louver installation count",
    kpi_percent: "Overall Progress",
    kpi_percent_sub: "— Overall",
    kpi_percent_sub_dyn: "{installed} / {total} units · Ground FL",
    sec_plan_title: "Floor Plan (from DXF) · Click marker to edit / drag to reposition",
    legend_louver: "Louver",
    level_gf: "Ground Floor",
    level_l2: "Level 2",
    tool_edit_pos: "📍 Edit marker position (drag)",
    tool_place: "➕ Add new marker on plan",
    tool_hide_pending: "Hide Pending markers",
    tool_hint: "Click marker to edit status",
    sec_trend: "Daily Installation Trend",
    cat_framing: "Framing",
    cat_louver: "Louver",
    cat_caulking: "Caulking",
    sec_status_breakdown: "Status Breakdown",
    sec_unit_map: "Unit Status Map · Click unit to update status",
    zone_all: "All",
    zone_sf: "Storefront SF",
    zone_gf: "Ground Floor",
    zone_l2: "Level 2",
    sec_log: "Daily Installation Log",
    btn_add_entry: "+ Add Entry",
    sec_table: "Unit Detail Table",
    filter_all: "All",
    status_installed: "Installed",
    status_in_progress: "Ready",
    status_issue: "Issue",
    status_issue_long: "Issue / Rework Needed",
    status_pending: "Pending",
    th_unit: "Unit",
    th_type: "Type",
    th_status: "Status",
    th_date: "Date",
    th_note: "Note",
    footer_updated: "Last updated",
    footer_autosave: "Auto-saved in browser",
    modal_edit_unit: "Edit Unit",
    form_status: "Status",
    form_date: "Installation Date",
    form_louver: "Louver Installed?",
    opt_no: "No",
    opt_yes: "Yes",
    opt_na: "N/A",
    form_note: "Note",
    ph_note: "Notes",
    btn_cancel: "Cancel",
    btn_save: "Save",
    modal_add_log: "Add Daily Log Entry",
    modal_edit_log: "Edit Daily Log Entry",
    btn_delete: "Delete",
    log_click_edit: "Click to edit",
    log_delete: "Delete entry",
    confirm_log_delete: "Delete this log entry?\n\n{content}",
    msg_log_deleted: "Log entry deleted",
    alert_pick_category: "Pick at least one category",
    form_date_only: "Date",
    form_category: "Category",
    cat_framing_long: "Framing Installation",
    cat_louver_long: "Louver Installation",
    cat_issue_note: "Issue / Note",
    form_units_desc: "Units / Description",
    ph_log_content: "e.g. 11A 11B 10A or Caulking",
    toast_saved: "Saved ✓",
    img_alt_gf: "Cooper Park 2 — Ground Floor Plan (from DXF)",
    msg_pos_saved: "position saved",
    place_cancel: "× Cancel adding",
    place_hint: "Click a location on the plan to choose a unit",
    prompt_place_unit: "Which unit to place at ({x}%, {y}%)?\n\nAvailable: {units}\n\nEnter unit ID:",
    confirm_unit_create: 'Unit "{id}" does not exist. Create it?',
    msg_edit_on: "Edit mode — drag markers to reposition",
    msg_edit_off: "Edit mode off",
    alert_fill_required: "Please fill in date and content",
    msg_exported: "JSON exported",
    alert_invalid_format: "Invalid format",
    alert_json_parse_fail: "JSON parse failed",
    confirm_reset: "Reset to PDF original data? Edits saved in browser will be lost.",
    msg_reset: "Reset complete",
    msg_import_ok: "Import successful",
    badge_planned: "Planned",
    legend_planned: "Planned",
    filter_planned: "Planned",
    no_units_match: "No units match",
    edit_unit_title: "Edit · {id}"
  },
  zh: {
    header_sub: "Broadway Builder · 一层 · 框架与百叶安装追踪",
    btn_export: "⬇ 导出 JSON",
    btn_import: "⬆ 导入 JSON",
    btn_add_log: "+ 新增日报",
    btn_reset: "↻ 重置",
    kpi_installed: "已安装",
    kpi_installed_sub: "已完成框架单元",
    kpi_progress: "就绪",
    kpi_progress_sub: "准备安装",
    kpi_issues: "问题",
    kpi_issues_sub: "开口误差 / 待返工",
    kpi_pending: "待装",
    kpi_pending_sub: "尚未安装",
    kpi_louvers: "百叶已装",
    kpi_louvers_sub: "百叶安装数",
    kpi_percent: "总进度",
    kpi_percent_sub: "— 总进度",
    kpi_percent_sub_dyn: "{installed} / {total} 单元 · 一层",
    sec_plan_title: "平面图（来自 DXF）· 点击标记编辑 / 拖拽调整位置",
    legend_louver: "百叶",
    level_gf: "一层",
    level_l2: "二层",
    tool_edit_pos: "📍 编辑标记位置（拖拽）",
    tool_place: "➕ 在平面图上添加标记",
    tool_hide_pending: "隐藏待装标记",
    tool_hint: "点击标记可编辑状态",
    sec_trend: "每日安装趋势",
    cat_framing: "框架",
    cat_louver: "百叶",
    cat_caulking: "打胶",
    sec_status_breakdown: "状态分布",
    sec_unit_map: "单元状态图 · 点击单元更新状态",
    zone_all: "全部",
    zone_sf: "店面 SF",
    zone_gf: "一层",
    zone_l2: "二层",
    sec_log: "每日安装日报",
    btn_add_entry: "+ 新增条目",
    sec_table: "单元明细表",
    filter_all: "全部",
    status_installed: "已安装",
    status_in_progress: "就绪",
    status_issue: "问题",
    status_issue_long: "问题 / 需返工",
    status_pending: "待装",
    th_unit: "单元",
    th_type: "类型",
    th_status: "状态",
    th_date: "日期",
    th_note: "备注",
    footer_updated: "最后更新",
    footer_autosave: "数据自动保存到浏览器",
    modal_edit_unit: "编辑单元",
    form_status: "状态",
    form_date: "安装日期",
    form_louver: "已装百叶？",
    opt_no: "否",
    opt_yes: "是",
    opt_na: "不适用",
    form_note: "备注",
    ph_note: "备注内容",
    btn_cancel: "取消",
    btn_save: "保存",
    modal_add_log: "新增日报条目",
    modal_edit_log: "编辑日报条目",
    btn_delete: "删除",
    log_click_edit: "点击编辑",
    log_delete: "删除该条目",
    confirm_log_delete: "确定删除该日报条目?\n\n{content}",
    msg_log_deleted: "已删除日报条目",
    alert_pick_category: "请至少选择一个类别",
    form_date_only: "日期",
    form_category: "类别",
    cat_framing_long: "框架安装",
    cat_louver_long: "百叶安装",
    cat_issue_note: "问题 / 备注",
    form_units_desc: "单元 / 描述",
    ph_log_content: "例如 11A 11B 10A 或 打胶",
    toast_saved: "已保存 ✓",
    img_alt_gf: "Cooper Park 2 — 一层平面图（来自 DXF）",
    msg_pos_saved: "位置已保存",
    place_cancel: "× 取消添加",
    place_hint: "点击平面图上的位置以选择单元",
    prompt_place_unit: "在 ({x}%, {y}%) 放置哪个单元？\n\n可用: {units}\n\n输入单元 ID:",
    confirm_unit_create: '单元 "{id}" 不存在，是否新建？',
    msg_edit_on: "编辑模式 — 拖拽标记调整位置",
    msg_edit_off: "编辑模式已关闭",
    alert_fill_required: "请填写日期和内容",
    msg_exported: "已导出 JSON",
    alert_invalid_format: "格式不正确",
    alert_json_parse_fail: "JSON 解析失败",
    confirm_reset: "确认恢复为 PDF 原始数据？浏览器中保存的修改会丢失。",
    msg_reset: "已重置",
    msg_import_ok: "导入成功",
    badge_planned: "计划",
    legend_planned: "计划",
    filter_planned: "计划",
    no_units_match: "无匹配单元",
    edit_unit_title: "编辑 · {id}"
  },
  ko: {
    header_sub: "Broadway Builder · 1층 · 프레임 및 루버 설치 추적",
    btn_export: "⬇ JSON 내보내기",
    btn_import: "⬆ JSON 가져오기",
    btn_add_log: "+ 일일 기록 추가",
    btn_reset: "↻ 초기화",
    kpi_installed: "설치 완료",
    kpi_installed_sub: "프레임 설치 완료 유닛",
    kpi_progress: "준비됨",
    kpi_progress_sub: "설치 준비 완료",
    kpi_issues: "문제",
    kpi_issues_sub: "개구부 오차 / 재작업 필요",
    kpi_pending: "대기",
    kpi_pending_sub: "미설치",
    kpi_louvers: "루버 설치",
    kpi_louvers_sub: "루버 설치 수량",
    kpi_percent: "전체 진행률",
    kpi_percent_sub: "— 전체",
    kpi_percent_sub_dyn: "{installed} / {total} 유닛 · 1층",
    sec_plan_title: "평면도 (DXF) · 마커 클릭하여 편집 / 드래그하여 위치 조정",
    legend_louver: "루버",
    level_gf: "1층",
    level_l2: "2층",
    tool_edit_pos: "📍 마커 위치 편집 (드래그)",
    tool_place: "➕ 평면도에 새 마커 추가",
    tool_hide_pending: "대기 마커 숨기기",
    tool_hint: "마커 클릭하여 상태 편집",
    sec_trend: "일일 설치 추이",
    cat_framing: "프레임",
    cat_louver: "루버",
    cat_caulking: "코킹",
    sec_status_breakdown: "상태 분포",
    sec_unit_map: "유닛 상태 맵 · 유닛 클릭하여 상태 변경",
    zone_all: "전체",
    zone_sf: "스토어프론트 SF",
    zone_gf: "1층",
    zone_l2: "2층",
    sec_log: "일일 설치 기록",
    btn_add_entry: "+ 항목 추가",
    sec_table: "유닛 상세 표",
    filter_all: "전체",
    status_installed: "설치 완료",
    status_in_progress: "준비됨",
    status_issue: "문제",
    status_issue_long: "문제 / 재작업 필요",
    status_pending: "대기",
    th_unit: "유닛",
    th_type: "유형",
    th_status: "상태",
    th_date: "날짜",
    th_note: "비고",
    footer_updated: "최종 업데이트",
    footer_autosave: "브라우저에 자동 저장됨",
    modal_edit_unit: "유닛 편집",
    form_status: "상태",
    form_date: "설치 날짜",
    form_louver: "루버 설치됨?",
    opt_no: "아니오",
    opt_yes: "예",
    opt_na: "해당 없음",
    form_note: "비고",
    ph_note: "비고",
    btn_cancel: "취소",
    btn_save: "저장",
    modal_add_log: "일일 기록 항목 추가",
    modal_edit_log: "일일 기록 항목 편집",
    btn_delete: "삭제",
    log_click_edit: "클릭하여 편집",
    log_delete: "항목 삭제",
    confirm_log_delete: "이 기록 항목을 삭제하시겠습니까?\n\n{content}",
    msg_log_deleted: "기록 항목이 삭제되었습니다",
    alert_pick_category: "카테고리를 하나 이상 선택하세요",
    form_date_only: "날짜",
    form_category: "카테고리",
    cat_framing_long: "프레임 설치",
    cat_louver_long: "루버 설치",
    cat_issue_note: "문제 / 메모",
    form_units_desc: "유닛 / 설명",
    ph_log_content: "예: 11A 11B 10A 또는 코킹",
    toast_saved: "저장됨 ✓",
    img_alt_gf: "Cooper Park 2 — 1층 평면도 (DXF)",
    msg_pos_saved: "위치 저장됨",
    place_cancel: "× 추가 취소",
    place_hint: "평면도에서 위치를 클릭하여 유닛 선택",
    prompt_place_unit: "({x}%, {y}%)에 어느 유닛을 배치할까요?\n\n사용 가능: {units}\n\n유닛 ID 입력:",
    confirm_unit_create: '유닛 "{id}"이(가) 없습니다. 새로 만들까요?',
    msg_edit_on: "편집 모드 — 마커를 드래그하여 위치 조정",
    msg_edit_off: "편집 모드 해제",
    alert_fill_required: "날짜와 내용을 입력하세요",
    msg_exported: "JSON 내보내기 완료",
    alert_invalid_format: "형식이 올바르지 않습니다",
    alert_json_parse_fail: "JSON 파싱 실패",
    confirm_reset: "PDF 원본 데이터로 복원하시겠습니까? 브라우저에 저장된 변경 사항이 손실됩니다.",
    msg_reset: "초기화 완료",
    msg_import_ok: "가져오기 성공",
    badge_planned: "예정",
    legend_planned: "예정",
    filter_planned: "예정",
    no_units_match: "일치하는 유닛 없음",
    edit_unit_title: "편집 · {id}"
  }
};
const WEEKDAYS = {
  en: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
  zh: ['周日','周一','周二','周三','周四','周五','周六'],
  ko: ['일','월','화','수','목','금','토']
};
let currentLang = localStorage.getItem('cp2_lang') || 'en';
function t(key) {
  const dict = I18N[currentLang] || I18N.en;
  return dict[key] || I18N.en[key] || key;
}
let _appReady = false;  // set true after state/render functions are initialized below
function applyLang(lang) {
  if (!I18N[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('cp2_lang', lang);
  document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : lang === 'ko' ? 'ko' : 'en');
  // Translate static elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
  });
  // Update switcher button state
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // Re-render dynamic parts that depend on language — only after `state` is defined.
  // The initial call from _initLang() happens before `state` exists (let TDZ), so we
  // skip render() then; the boot `render()` at the bottom of the script handles it.
  if (_appReady && typeof render === 'function') render();
}
function _initLang() {
  document.querySelectorAll('.lang-btn').forEach(b => {
    if (b.__langBound) return;
    b.__langBound = true;
    b.addEventListener('click', () => applyLang(b.dataset.lang));
  });
  applyLang(currentLang);
}
// The artifact bundler uses document.documentElement.replaceWith() after
// DOMContentLoaded fires on the outer document, so by the time this inline
// script runs the DOM is already complete. Initialize immediately, and also
// queue a microtask retry in case render() defines elements lazily.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _initLang);
} else {
  _initLang();
}


const STORAGE_KEY = 'cooper_park_2_install_v4';
// Tracks which embedded.updatedAt the local state was derived from. If the
// HTML file is replaced (newer embedded snapshot), the stored baseline no
// longer matches and we drop localStorage to honor the freshly shared data.
const BASELINE_KEY = 'cooper_park_2_install_v4_baseline';
const YEAR = new Date().getFullYear(); // assumed log year

const TODAY_ISO = new Date().toISOString().slice(0,10);
function isPlanned(item) { return !!(item && item.date && item.date > TODAY_ISO); }

// Seed data extracted from PDF — Ground Floor + Level 2 units
// Source: "GLASS and Louver Locations on plans.pdf"
const SEED_UNITS = [
  { key:'SF06N', id:'SF06N', type:'Storefront', zone:'North', level:'GF', status:'installed', date:`${YEAR}-05-19`, louver:'no', note:'Framing 5/19 (06NE)' },
  { key:'SF04__1', id:'SF04', type:'Storefront', zone:'North', level:'GF', status:'installed', date:`${YEAR}-05-15`, louver:'yes', note:'Framing 5/15 · Louver → 5/18' },
  { key:'SF04__2', id:'SF04.1', type:'Storefront', zone:'North', level:'GF', status:'installed', date:`${YEAR}-05-15`, louver:'yes', note:'Framing 5/15 · Louver → 5/18' },
  { key:'SF07N', id:'SF07N', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF07W', id:'SF07W', type:'Storefront', zone:'West', level:'GF', status:'installed', date:`${YEAR}-05-20`, louver:'yes', note:'Framing + Louver 5/20 (07NW)' },
  { key:'SF01__1', id:'SF01', type:'Storefront', zone:'West', level:'GF', status:'installed', date:`${YEAR}-05-13`, louver:'yes', note:'Framing 5/13 · Louver → 5/18' },
  { key:'SF01__2', id:'SF01.1', type:'Storefront', zone:'West', level:'GF', status:'installed', date:`${YEAR}-05-13`, louver:'yes', note:'Framing 5/13 · Louver → 5/18' },
  { key:'SF20A__1', id:'SF20A', type:'Storefront', zone:'North', level:'GF', status:'installed', date:`${YEAR}-05-12`, louver:'no', note:'Framing 5/12' },
  { key:'SF20A__2', id:'SF20A.1', type:'Storefront', zone:'North', level:'GF', status:'installed', date:`${YEAR}-05-20`, louver:'yes', note:'Framing + Louver 5/20' },
  { key:'SF20B__1', id:'SF20B', type:'Storefront', zone:'North', level:'GF', status:'installed', date:`${YEAR}-05-12`, louver:'no', note:'Framing 5/12' },
  { key:'SF20A__3', id:'SF20A.2', type:'Storefront', zone:'North', level:'GF', status:'installed', date:`${YEAR}-05-20`, louver:'yes', note:'Framing + Louver 5/20' },
  { key:'SF20B__2', id:'SF20B.1', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF20A__4', id:'SF20A.3', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF52', id:'SF52', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF51__1', id:'SF51', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF50__1', id:'SF50', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF51__2', id:'SF51.1', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF50__2', id:'SF50.1', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF21A', id:'SF21A', type:'Storefront', zone:'East', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF21B__1', id:'SF21B', type:'Storefront', zone:'East', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF21B__2', id:'SF21B.1', type:'Storefront', zone:'East', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF21B__3', id:'SF21B.2', type:'Storefront', zone:'East', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF32', id:'SF32', type:'Storefront', zone:'East', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF08E', id:'SF08E', type:'Storefront', zone:'East', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF08N', id:'SF08N', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF03__1', id:'SF03', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF03__2', id:'SF03.1', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF03__3', id:'SF03.2', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF09N', id:'SF09N', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF09W', id:'SF09W', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF02', id:'SF02', type:'Storefront', zone:'West', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF22B', id:'SF22B', type:'Storefront', zone:'West', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF40', id:'SF40', type:'Storefront', zone:'West', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF41', id:'SF41', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF42', id:'SF42', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF43', id:'SF43', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF44', id:'SF44', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF45', id:'SF45', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF46', id:'SF46', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF48', id:'SF48', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF20A__5', id:'SF20A.4', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF20A__6', id:'SF20A.5', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF10A', id:'SF10A', type:'Storefront', zone:'South', level:'GF', status:'installed', date:`${YEAR}-05-20`, louver:'yes', note:'Framing + Louver 5/20' },
  { key:'SF30', id:'SF30', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF11A__1', id:'SF11A', type:'Storefront', zone:'South', level:'GF', status:'installed', date:`${YEAR}-05-20`, louver:'no', note:'Framing 5/20' },
  { key:'SF11A__2', id:'SF11A.1', type:'Storefront', zone:'South', level:'GF', status:'installed', date:`${YEAR}-05-20`, louver:'no', note:'Framing 5/20' },
  { key:'SF11A__3', id:'SF11A.2', type:'Storefront', zone:'South', level:'GF', status:'installed', date:`${YEAR}-05-20`, louver:'no', note:'Framing 5/20' },
  { key:'SF11B', id:'SF11B', type:'Storefront', zone:'South', level:'GF', status:'installed', date:`${YEAR}-05-20`, louver:'no', note:'Framing 5/20' },
  { key:'SF11A__4', id:'SF11A.3', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF11A__5', id:'SF11A.4', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF31__1', id:'SF31', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF17S', id:'SF17S', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF47', id:'SF47', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF13A', id:'SF13A', type:'Storefront', zone:'East', level:'GF', status:'installed', date:`${YEAR}-05-13`, louver:'no', note:'Framing 5/13' },
  { key:'SF12B', id:'SF12B', type:'Storefront', zone:'East', level:'GF', status:'installed', date:`${YEAR}-05-11`, louver:'no', note:'Framing 5/11' },
  { key:'SF12A__1', id:'SF12A', type:'Storefront', zone:'East', level:'GF', status:'installed', date:`${YEAR}-05-12`, louver:'no', note:'Framing 5/12' },
  { key:'SF12A__2', id:'SF12A.1', type:'Storefront', zone:'East', level:'GF', status:'installed', date:`${YEAR}-05-12`, louver:'no', note:'Framing 5/12' },
  { key:'SF12A__3', id:'SF12A.2', type:'Storefront', zone:'East', level:'GF', status:'issue', date:`${YEAR}-05-12`, louver:'no', note:'12A3 — opening error (per PDF)' },
  { key:'SF16E', id:'SF16E', type:'Storefront', zone:'East', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF16N', id:'SF16N', type:'Storefront', zone:'East', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF31__2', id:'SF31.1', type:'Storefront', zone:'East', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF01__3', id:'SF01.2', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF01__4', id:'SF01.3', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF06E', id:'SF06E', type:'Storefront', zone:'North', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF17E', id:'SF17E', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF12A__4', id:'SF12A.3', type:'Storefront', zone:'South', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF12A__5', id:'SF12A.4', type:'Storefront', zone:'East', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF15E', id:'SF15E', type:'Storefront', zone:'East', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
  { key:'SF15N', id:'SF15N', type:'Storefront', zone:'East', level:'GF', status:'pending', date:'', louver:'no', glass:'', panels:'', note:'' },
];

// Daily log from PDF notes (May 2026)
const SEED_LOG = [
  // ----- Actual (per PDF "INSTALLED FRAMING UPDATE" 5/11-5/20) -----
  { date:`${YEAR}-05-11`, category:'framing',  content:'12A1 · 12A2 · 12B' },
  { date:`${YEAR}-05-12`, category:'framing',  content:'12A · 12A3 · 12A · 20A · 20A.1 · 20B' },
  { date:`${YEAR}-05-12`, category:'issue',    content:'12A3 — opening error' },
  { date:`${YEAR}-05-13`, category:'framing',  content:'13A · 01 · 01 · 20A.1 · 20B.1' },
  { date:`${YEAR}-05-14`, category:'caulking', content:'Caulking' },
  { date:`${YEAR}-05-15`, category:'framing',  content:'04 · 04 · 01L · 01R · 20A.1' },
  { date:`${YEAR}-05-18`, category:'louver',   content:'12A3 Louvers' },
  { date:`${YEAR}-05-19`, category:'framing',  content:'15NE · 16NE · 06NE' },
  { date:`${YEAR}-05-20`, category:'framing',  content:'11A · 11A · 11B · 11A — opening error' },
  { date:`${YEAR}-05-20`, category:'louver',   content:'10A · 20A · 20A · 07NW' },
  // ----- Planned (after today) -----
  { date:`${YEAR}-05-21`, category:'issue',    content:'Caulking / Louvers — Yulin NOT On-site', planned:true },
  { date:`${YEAR}-05-22`, category:'louver',   content:'Louvers (TBD)', planned:true },
];

// Pre-placed marker positions on the Ground Floor plan (% of image w/h)
// Approximated from PDF page 1 visible labels — drag to refine
const DEFAULT_POSITIONS = {
  'SF06N': { x: 86.07, y: 8.26 },
  'SF04__1': { x: 81.27, y: 8.03 },
  'SF04__2': { x: 75.58, y: 8.03 },
  'SF07N': { x: 70.20, y: 8.01 },
  'SF07W': { x: 67.97, y: 10.41 },
  'SF01__1': { x: 67.80, y: 16.03 },
  'SF01__2': { x: 67.80, y: 22.84 },
  'SF20A__1': { x: 66.34, y: 45.70 },
  'SF20A__2': { x: 62.83, y: 45.70 },
  'SF20B__1': { x: 58.90, y: 45.70 },
  'SF20A__3': { x: 54.83, y: 45.70 },
  'SF20B__2': { x: 50.91, y: 45.70 },
  'SF20A__4': { x: 46.90, y: 45.70 },
  'SF52': { x: 43.80, y: 48.85 },
  'SF51__1': { x: 42.29, y: 50.74 },
  'SF50__1': { x: 38.89, y: 50.74 },
  'SF51__2': { x: 35.17, y: 50.74 },
  'SF50__2': { x: 31.76, y: 50.74 },
  'SF21A': { x: 29.82, y: 43.68 },
  'SF21B__1': { x: 29.84, y: 37.64 },
  'SF21B__2': { x: 29.84, y: 30.60 },
  'SF21B__3': { x: 29.84, y: 23.82 },
  'SF32': { x: 29.84, y: 15.65 },
  'SF08E': { x: 30.08, y: 10.33 },
  'SF08N': { x: 28.00, y: 8.00 },
  'SF03__1': { x: 22.60, y: 8.02 },
  'SF03__2': { x: 17.27, y: 8.02 },
  'SF03__3': { x: 11.98, y: 8.02 },
  'SF09N': { x: 6.56, y: 8.02 },
  'SF09W': { x: 4.57, y: 10.10 },
  'SF02': { x: 4.22, y: 16.30 },
  'SF22B': { x: 4.18, y: 23.57 },
  'SF40': { x: 3.70, y: 76.11 },
  'SF41': { x: 6.49, y: 84.53 },
  'SF42': { x: 11.99, y: 84.53 },
  'SF43': { x: 15.71, y: 84.53 },
  'SF44': { x: 18.84, y: 84.53 },
  'SF45': { x: 24.60, y: 84.53 },
  'SF46': { x: 30.52, y: 84.53 },
  'SF48': { x: 38.34, y: 84.53 },
  'SF20A__5': { x: 42.23, y: 88.00 },
  'SF20A__6': { x: 46.47, y: 88.00 },
  'SF10A': { x: 50.70, y: 88.00 },
  'SF30': { x: 55.64, y: 88.00 },
  'SF11A__1': { x: 59.23, y: 88.00 },
  'SF11A__2': { x: 63.35, y: 88.00 },
  'SF11A__3': { x: 67.45, y: 88.00 },
  'SF11B': { x: 71.66, y: 88.00 },
  'SF11A__4': { x: 75.88, y: 88.00 },
  'SF11A__5': { x: 80.23, y: 88.00 },
  'SF31__1': { x: 85.33, y: 87.87 },
  'SF17S': { x: 90.69, y: 87.79 },
  'SF47': { x: 36.12, y: 84.53 },
  'SF13A': { x: 92.27, y: 66.58 },
  'SF12B': { x: 92.28, y: 61.00 },
  'SF12A__1': { x: 92.27, y: 54.60 },
  'SF12A__2': { x: 92.27, y: 47.94 },
  'SF12A__3': { x: 92.27, y: 41.62 },
  'SF16E': { x: 92.27, y: 36.10 },
  'SF16N': { x: 90.49, y: 33.66 },
  'SF31__2': { x: 87.78, y: 31.47 },
  'SF01__3': { x: 87.78, y: 24.69 },
  'SF01__4': { x: 87.78, y: 17.41 },
  'SF06E': { x: 87.78, y: 10.87 },
  'SF17E': { x: 96.30, y: 86.27 },
  'SF12A__4': { x: 96.29, y: 80.82 },
  'SF12A__5': { x: 96.29, y: 74.42 },
  'SF15E': { x: 96.29, y: 69.12 },
  'SF15N': { x: 94.24, y: 66.55 },
};

// FIX: defer loadState() until after DOMContentLoaded. The <script id="__embedded_state">
// tag lives AT THE END OF <body>, AFTER this main <script>. If we call loadState()
// here, document.getElementById('__embedded_state') returns null (the slot isn't
// parsed yet) and we silently fall back to SEED_UNITS — making the dashboard show
// the original PDF baseline instead of the team-shared snapshot baked into the file.
let state = null;
let currentZone = 'all';
let currentFilter = 'all';
let currentLevel = 'GF';   // which floor's markers to render on the plan
let trendChart, donutChart;
let editingUnitId = null;

function loadState() {
  // Embedded baseline — fetched from state.json at boot (see bootstrap() at
  // the bottom of this file). Fallback: the inline <script id="__embedded_state">
  // tag (kept for back-compat with legacy "Save to HTML" snapshots).
  let embedded = null;
  if (window._embeddedStateJson && window._embeddedStateJson.units && window._embeddedStateJson.log) {
    embedded = window._embeddedStateJson;
  } else {
    try {
      const el = document.getElementById('__embedded_state');
      if (el && el.textContent.trim()) {
        const parsed = JSON.parse(el.textContent);
        if (parsed && parsed.units && parsed.log) embedded = parsed;
      }
    } catch (e) { console.warn('Embedded state parse failed', e); }
  }

  let local = null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) local = JSON.parse(raw);
  } catch (e) {}

  // ----- Baseline check -----
  // localStorage is only valid if it was created on top of THIS exact embedded
  // snapshot. We store the embedded.updatedAt the local state was derived from
  // in BASELINE_KEY. If it differs from the current embedded.updatedAt, the
  // HTML file has been re-uploaded by a teammate and we MUST discard the
  // stale local copy — otherwise localStorage from the previous version of
  // the file shadows the new shared data (e.g. 19 installed instead of 29).
  const embeddedStamp = embedded ? (embedded.updatedAt || '') : '';
  let baseline = null;
  try { baseline = localStorage.getItem(BASELINE_KEY); } catch (e) {}

  let s = null;
  let staleDiscarded = false;
  if (embedded && local && baseline && baseline === embeddedStamp) {
    // local is a continuation of the current embedded snapshot — preserve
    // the user's in-flight edits since they downloaded this file.
    s = local;
  } else if (embedded) {
    // No local, or local was based on a different (older) version of the
    // file. Use embedded as the source of truth.
    s = embedded;
    if (local && baseline !== embeddedStamp) {
      staleDiscarded = true;
      // FIX: actually drop the stale local copy. Previously we only updated
      // BASELINE_KEY, which silently 'blessed' the old localStorage so the
      // very next load would happily use it again (the bug that made the
      // dashboard show SEED data even though embedded was correct).
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    }
    try { localStorage.setItem(BASELINE_KEY, embeddedStamp); } catch (e) {}
  } else if (local) {
    s = local;
  }
  if (staleDiscarded) {
    console.log('CP2: discarded stale localStorage — HTML file was updated externally');
    // Surface a one-time toast so the user understands why their cached view changed.
    setTimeout(() => { try { toast('Loaded latest snapshot from HTML / 已加载最新共享数据'); } catch(e){} }, 50);
  }

  if (s) {
      // ensure positions exist (migration for older state)
      if (!s.positions) s.positions = structuredClone(DEFAULT_POSITIONS);
      if (!s.glassPanelOffsets) s.glassPanelOffsets = {};
      // ----- merge any new seed units the user does not yet have -----
      // Preserves user edits to existing units; only adds new IDs.
      const existing = new Set(s.units.map(u => u.key || u.id));
      let added = 0;
      SEED_UNITS.forEach(seed => {
        if (!existing.has(seed.key)) {
          s.units.push(structuredClone(seed));
          if (!s.positions[seed.key] && DEFAULT_POSITIONS[seed.key]) {
            s.positions[seed.key] = { ...DEFAULT_POSITIONS[seed.key] };
          }
          added++;
        }
      });
      // backfill missing `key` on legacy units (use id as key)
      s.units.forEach(u => { if (!u.key) u.key = u.id; });
      // backfill missing `level` (default GF)
      s.units.forEach(u => { if (!u.level) u.level = 'GF'; });
      // backfill glass + panels from SEED_UNITS
      s.units.forEach(u => {
        const seed = SEED_UNITS.find(x => x.key === u.key);
        if (seed) {
          if (!u.glass)  u.glass  = seed.glass  || '';
          if (!u.panels) u.panels = seed.panels || '';
        }
      });
      // Sync `zone` (wall direction) from SEED_UNITS — zone is layout metadata,
      // not a user-edited field, so force-update it to match the latest seed.
      // This lets us fix marker fan-out direction without a Reset.
      s.units.forEach(u => {
        const seed = SEED_UNITS.find(x => x.key === u.key);
        if (seed && seed.zone) u.zone = seed.zone;
      });
      if (added > 0) {
        s._mergeNote = `+${added} new units from PDF`;
      }
      return s;
  }
  return {
    units: structuredClone(SEED_UNITS),
    log: structuredClone(SEED_LOG),
    positions: structuredClone(DEFAULT_POSITIONS),
    glassPanelOffsets: {},
    updatedAt: new Date().toISOString()
  };
}

function saveState(showToast = true, description) {
  // Don't echo a save that was triggered by applying a remote snapshot —
  // otherwise two clients ping-pong updates back and forth forever.
  const isRemoteApply = window._cloudIsSuppressed && window._cloudIsSuppressed();

  state.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  // mark "unsaved-to-file" so the Save to HTML button can pulse
  markDirty();
  render();
  if (showToast && !isRemoteApply) toast(t('toast_saved'));

  // ---- CLOUD SYNC: push to Firebase Realtime DB (debounced ~350ms) ----
  if (!isRemoteApply && window._cloudQueuePush) {
    window._cloudQueuePush(state, description);
  }
}

/* Called by cloud-sync.js when another client pushes a state update.
   Replaces local state with the remote snapshot and re-renders WITHOUT
   pushing back to the cloud (the suppress flag is set by the caller). */
window._cloudApplyRemoteState = function(remoteState, meta) {
  if (!remoteState || !remoteState.units) return;
  if (window._cloudSetSuppress) window._cloudSetSuppress(true);
  try {
    state = remoteState;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
    if (typeof render === 'function') render();
    if (typeof toast === 'function' && meta && meta.by) {
      const who = String(meta.by).split('@')[0];
      const what = meta.desc ? ` · ${meta.desc}` : '';
      toast(`↻ Updated by ${who}${what}`);
    }
  } finally {
    if (window._cloudSetSuppress) window._cloudSetSuppress(false);
  }
};

/* -------- Embed-in-HTML save (team-shared workflow) -------- */
let isDirty = false;
let htmlFileHandle = null;     // FileSystemFileHandle for the HTML file itself
const supportsFSA = typeof window.showSaveFilePicker === 'function';

function markDirty() {
  isDirty = true;
  updateSaveBtnState();
}
function clearDirty() {
  isDirty = false;
  updateSaveBtnState();
}
function updateSaveBtnState() {
  const btns = document.querySelectorAll('button[onclick="saveToHTML()"]');
  btns.forEach(b => {
    if (isDirty) {
      b.style.boxShadow = '0 0 0 2px var(--orange)';
      b.title = htmlFileHandle
        ? `有未保存修改 — 点击写入 ${htmlFileHandle.name}\nUnsaved changes — click to save in place`
        : '有未保存到 HTML 的修改 — 点击保存\nUnsaved changes — click to save';
    } else {
      b.style.boxShadow = '';
      b.title = htmlFileHandle
        ? `已链接到 ${htmlFileHandle.name} — 修改后会直接覆盖该文件\nLinked to ${htmlFileHandle.name} — saves overwrite in place`
        : '点击保存(首次会让你选中并授权这个 HTML 文件,之后静默覆盖)\nFirst save links the HTML file; later saves overwrite silently';
    }
  });
}

async function ensurePerm(handle) {
  if (!handle.queryPermission) return true;
  let p = await handle.queryPermission({ mode: 'readwrite' });
  if (p === 'granted') return true;
  p = await handle.requestPermission({ mode: 'readwrite' });
  return p === 'granted';
}

function buildHTMLString() {
  const slot = document.getElementById('__embedded_state');
  if (!slot) throw new Error('Missing embedded slot');
  state.updatedAt = new Date().toISOString();
  // Escape end-script tags inside JSON so they can't break the parser.
  // Concat literal so this source line doesn't terminate the live <script>.
  const endTagRe = new RegExp('<' + '/script', 'gi');
  const json = JSON.stringify(state).replace(endTagRe, '<\\/script');
  slot.textContent = json;
  return '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
}

async function saveToHTML() {
  const html = buildHTMLString();

  // ---- Path A: in-place overwrite via File System Access API ----
  if (supportsFSA) {
    try {
      if (!htmlFileHandle) {
        // First save: ask the user to point to this HTML file on disk.
        const guess = decodeURIComponent(location.pathname.split('/').pop() || '')
          .replace(/\.html?$/i, '') + '.html';
        htmlFileHandle = await window.showSaveFilePicker({
          suggestedName: guess || 'Installation_Progress_Monitor.html',
          types: [{ description: 'HTML', accept: { 'text/html': ['.html', '.htm'] } }]
        });
      }
      const ok = await ensurePerm(htmlFileHandle);
      if (!ok) { toast('需要写入权限 / Write permission required'); return; }
      const w = await htmlFileHandle.createWritable();
      await w.write(html);
      await w.close();
      // local state is now in sync with the just-written embedded snapshot —
      // align the baseline so a page reload doesn't think it's stale.
      try { localStorage.setItem(BASELINE_KEY, state.updatedAt); } catch(e) {}
      clearDirty();
      updateSaveBtnState();
      toast(`已保存到 / Saved: ${htmlFileHandle.name}`);
      return;
    } catch(err) {
      if (err && err.name === 'AbortError') return; // user cancelled
      console.warn('FSA save failed, falling back to download', err);
      htmlFileHandle = null;
      // fall through to download fallback
    }
  }

  // ---- Path B: fallback download (Safari / Firefox) ----
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const fname = decodeURIComponent(location.pathname.split('/').pop() || 'Installation_Progress_Monitor.html')
    .replace(/\.html?$/i, '') + '.html';
  a.href = url;
  a.download = fname;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  // local state is now in sync with the just-built embedded snapshot — align
  // the baseline so reopening the downloaded file doesn't drop the user's view.
  try { localStorage.setItem(BASELINE_KEY, state.updatedAt); } catch(e) {}
  clearDirty();
  toast('已下载更新的 HTML — 替换团队共享文件 / Updated HTML downloaded');
}

// Cloud sync handles all persistence — no need to warn about unsaved local changes.
// (beforeunload removed; isDirty is still tracked harmlessly for any code that reads it)

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._tm);
  toast._tm = setTimeout(()=>t.classList.remove('show'), 1800);
}

/* -------- Render -------- */
function render() {
  renderKPIs();
  renderPlan();
  renderUnitGrid();
  renderTable();
  renderTimeline();
  renderCharts();
  renderGlassChart();
  document.getElementById('lastUpdated').textContent = new Date(state.updatedAt).toLocaleString();
}

/* ---- Floor Plan rendering ---- */
function renderPlan() {
  const wrap = document.getElementById('planWrap');
  // remove existing markers (keep image + tooltip)
  wrap.querySelectorAll('.plan-marker').forEach(el => el.remove());
  // Also remove any STALE glass markers + reset glass-mode class to match JS state.
  // Without this, a Save-to-HTML done while in glass mode bakes the markers
  // and `.glass-mode` class into the file; on reload `mapGlassMode` is false
  // so the markers stay in the DOM with no event handlers → clicks do nothing
  // until the user toggles glass mode off-and-on.
  wrap.querySelectorAll('.glass-marker').forEach(el => el.remove());
  if (typeof mapGlassMode === 'undefined' || !mapGlassMode) {
    wrap.classList.remove('glass-mode');
    const _gmBtn = document.getElementById('glassMapBtn');
    if (_gmBtn) { _gmBtn.textContent = '🪟 Glass Mode'; _gmBtn.classList.remove('btn-primary'); }
    const _gbBtn = document.getElementById('glassBatchBtn');
    if (_gbBtn) { _gbBtn.style.display = 'none'; _gbBtn.textContent = '☑ Batch Select'; _gbBtn.classList.remove('btn-primary'); }
    const _gbBar = document.getElementById('glassBatchBar');
    if (_gbBar) _gbBar.style.display = 'none';
  }
  const hidePending = document.getElementById('hidePendingChk').checked;
  state.units.forEach(u => {
    if ((u.level || 'GF') !== currentLevel) return;
    if (hidePending && u.status === 'pending') return;
    const pos = state.positions[u.key] || { x: 50, y: 50 };
    const m = document.createElement('div');
    m.className = `plan-marker ${u.status}${u.louver === 'yes' ? ' has-louver' : ''}${isPlanned(u) ? ' planned' : ''}`;
    m.style.left = pos.x + '%';
    m.style.top  = pos.y + '%';
    {
      // Strip SF prefix only — sub-IDs are entered manually by the user, no auto suffix
      m.textContent = u.id.replace(/^SF/, '');
    }
    m.dataset.unit = u.key;
    m.title = `${u.id} · ${formatStatus(u.status)}${u.date ? ' · ' + formatDate(u.date) : ''}`;
    // hover tooltip
    m.addEventListener('mouseenter', e => showPlanTooltip(e, u));
    m.addEventListener('mouseleave', hidePlanTooltip);
    wrap.appendChild(m);
  });
  setupPlanInteractions();
  if (typeof mapGlassMode !== 'undefined' && mapGlassMode) renderGlassMarkers();
}

function showPlanTooltip(e, u) {
  const tt = document.getElementById('planTooltip');
  tt.innerHTML = `<strong>${u.id}</strong> · ${u.type} · ${u.zone}<br>
    <span style="color:var(--text-dim)">${formatStatus(u.status)}${u.date ? ' · ' + formatDate(u.date) : ''}${u.louver==='yes' ? ' · Louver ✓' : ''}</span>
    ${u.note ? '<br><span style="color:var(--text-dim);font-size:10px">' + u.note + '</span>' : ''}`;
  const rect = e.currentTarget.getBoundingClientRect();
  const wrapRect = document.getElementById('planWrap').getBoundingClientRect();
  tt.style.left = (rect.left - wrapRect.left + rect.width/2) + 'px';
  tt.style.top  = (rect.top  - wrapRect.top) + 'px';
  tt.style.display = 'block';
}
function hidePlanTooltip() {
  document.getElementById('planTooltip').style.display = 'none';
}

/* ---- Plan zoom & pan (touch + buttons + wheel) ---- */
let planView = { s: 1, tx: 0, ty: 0 };
const MIN_ZOOM = 1, MAX_ZOOM = 6;

function applyPlanTransform() {
  const wrap = document.getElementById('planWrap');
  if (!wrap) return;
  if (planView.s <= 1) { planView.s = 1; planView.tx = 0; planView.ty = 0; }
  wrap.style.transform = `translate(${planView.tx}px, ${planView.ty}px) scale(${planView.s})`;
  const lbl = document.getElementById('zoomLabel');
  if (lbl) lbl.textContent = Math.round(planView.s * 100) + '%';
}
function clampPlanPan() {
  const vp = document.getElementById('planViewport');
  if (!vp) return;
  const r = vp.getBoundingClientRect();
  if (planView.s <= 1) { planView.tx = 0; planView.ty = 0; return; }
  const minX = r.width  - r.width  * planView.s;
  const minY = r.height - r.height * planView.s;
  if (planView.tx > 0) planView.tx = 0;
  if (planView.tx < minX) planView.tx = minX;
  if (planView.ty > 0) planView.ty = 0;
  if (planView.ty < minY) planView.ty = minY;
}
function planZoom(factor, cx, cy) {
  const vp = document.getElementById('planViewport');
  if (!vp) return;
  const r = vp.getBoundingClientRect();
  if (cx == null) { cx = r.width / 2; cy = r.height / 2; }
  const newS = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, planView.s * factor));
  if (newS === planView.s) return;
  // Keep the point under (cx,cy) fixed
  const f = newS / planView.s;
  planView.tx = cx - f * (cx - planView.tx);
  planView.ty = cy - f * (cy - planView.ty);
  planView.s = newS;
  clampPlanPan();
  applyPlanTransform();
}
function planZoomReset() {
  planView = { s: 1, tx: 0, ty: 0 };
  applyPlanTransform();
}

function setupPlanZoomPan() {
  const vp = document.getElementById('planViewport');
  if (!vp || vp._planZoomBound) return;
  vp._planZoomBound = true;

  // ----- Wheel: zoom centered on cursor -----
  vp.addEventListener('wheel', (e) => {
    if (placeMode) return;
    e.preventDefault();
    const r = vp.getBoundingClientRect();
    const cx = e.clientX - r.left;
    const cy = e.clientY - r.top;
    const factor = e.deltaY < 0 ? 1.15 : 1/1.15;
    planZoom(factor, cx, cy);
  }, { passive: false });

  // ----- Unified Pointer Events: 1-pointer pan, 2-pointer pinch -----
  // Works for touch + mouse + stylus uniformly. iOS Safari requires
  // touch-action:none on the element (already set in CSS) so we own gestures.
  const pointers = new Map();             // pointerId → { x, y, sx, sy }
  let pinchPrevDist = 0;
  let panActive = false;
  let suppressClickUntil = 0;
  const PAN_THRESHOLD = 5;

  const isMarker = (el) => el && el.closest && el.closest('.plan-marker, .glass-marker');

  function pointersCenter() {
    let cx = 0, cy = 0, n = 0;
    pointers.forEach(p => { cx += p.x; cy += p.y; n++; });
    return n ? { x: cx / n, y: cy / n } : { x: 0, y: 0 };
  }
  function pointersDist() {
    if (pointers.size < 2) return 0;
    const arr = [...pointers.values()];
    return Math.hypot(arr[0].x - arr[1].x, arr[0].y - arr[1].y);
  }

  vp.addEventListener('pointerdown', (e) => {
    if (placeMode) return;
    // In edit mode, let markers handle their own drag — don't capture them here.
    const editMode = document.getElementById('editPositionMode')?.checked;
    if (editMode && isMarker(e.target)) return;

    pointers.set(e.pointerId, {
      x: e.clientX, y: e.clientY,
      sx: e.clientX, sy: e.clientY,
    });
    try { vp.setPointerCapture(e.pointerId); } catch(_) {}

    if (pointers.size === 2) {
      pinchPrevDist = pointersDist();
    }
  });

  vp.addEventListener('pointermove', (e) => {
    const p = pointers.get(e.pointerId);
    if (!p) return;
    const dx = e.clientX - p.x;
    const dy = e.clientY - p.y;
    p.x = e.clientX; p.y = e.clientY;

    if (pointers.size === 2) {
      // Pinch + pan together
      e.preventDefault();
      const r = vp.getBoundingClientRect();
      const c = pointersCenter();
      const cx = c.x - r.left, cy = c.y - r.top;
      const dist = pointersDist();
      if (pinchPrevDist > 0) {
        const factor = dist / pinchPrevDist;
        planZoom(factor, cx, cy);
      }
      pinchPrevDist = dist;
      panActive = true;
      return;
    }

    // Single pointer pan
    if (!panActive) {
      if (Math.hypot(e.clientX - p.sx, e.clientY - p.sy) < PAN_THRESHOLD) return;
      panActive = true;
      // At base zoom, auto-zoom on first drag so the gesture actually moves the map
      if (planView.s <= 1) {
        const r = vp.getBoundingClientRect();
        planZoom(1.8, p.sx - r.left, p.sy - r.top);
      }
    }
    e.preventDefault();
    planView.tx += dx;
    planView.ty += dy;
    clampPlanPan();
    applyPlanTransform();
  });

  function endPointer(e) {
    if (!pointers.has(e.pointerId)) return;
    pointers.delete(e.pointerId);
    try { vp.releasePointerCapture(e.pointerId); } catch(_) {}
    if (pointers.size < 2) pinchPrevDist = 0;
    if (pointers.size === 0) {
      if (panActive) suppressClickUntil = Date.now() + 350;
      panActive = false;
    }
  }
  vp.addEventListener('pointerup', endPointer);
  vp.addEventListener('pointercancel', endPointer);
  vp.addEventListener('pointerleave', (e) => {
    // Only end if we actually left (not just child transitions)
    if (e.target === vp) endPointer(e);
  });

  // Eat the synthetic click that fires after a drag so markers don't open
  vp.addEventListener('click', (e) => {
    if (Date.now() < suppressClickUntil) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  // Cursor hint for desktop
  vp.style.cursor = 'grab';
  vp.addEventListener('pointerdown', () => { vp.style.cursor = 'grabbing'; });
  vp.addEventListener('pointerup',   () => { vp.style.cursor = 'grab'; });

  // ----- Double-click / double-tap to reset -----
  vp.addEventListener('dblclick', (e) => {
    if (placeMode) return;
    if (isMarker(e.target)) return;
    planZoomReset();
  });
  let lastTap = 0;
  vp.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'touch') return;
    const now = Date.now();
    if (now - lastTap < 300 && !isMarker(e.target)) {
      planZoomReset();
    }
    lastTap = now;
  });
}

let dragState = null;
let placeMode = false;

function setupPlanInteractions() {
  setupPlanZoomPan();
  const wrap = document.getElementById('planWrap');
  const editMode = document.getElementById('editPositionMode').checked;
  wrap.classList.toggle('edit-mode', editMode);

  wrap.querySelectorAll('.plan-marker').forEach(m => {
    m.onpointerdown = (e) => {
      if (placeMode) return;
      e.stopPropagation();
    };
    m.onclick = (e) => {
      if (dragState && dragState.moved) { dragState = null; return; }
      if (placeMode) return;
      openUnit(m.dataset.unit);
    };
    m.onmousedown = (e) => {
      if (!editMode || placeMode) return;
      e.preventDefault();
      const rect = wrap.getBoundingClientRect();
      dragState = { id: m.dataset.unit, el: m, rect, moved: false };
      hidePlanTooltip();
    };
  });
}

document.addEventListener('mousemove', e => {
  if (!dragState) return;
  const { rect, el } = dragState;
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top)  / rect.height) * 100;
  if (x < 0 || x > 100 || y < 0 || y > 100) return;
  el.style.left = x + '%';
  el.style.top  = y + '%';
  dragState.x = x; dragState.y = y;
  dragState.moved = true;
});
document.addEventListener('mouseup', () => {
  if (dragState && dragState.moved && dragState.x != null) {
    if (dragState.glassPanel) {
      // Glass panel: store offset relative to SF marker so it moves with the SF
      const sfPos = dragState.sfPos || state.positions[dragState.unitKey] || { x: 50, y: 50 };
      const dx = dragState.x - sfPos.x;
      const dy = dragState.y - sfPos.y;
      if (!state.glassPanelOffsets) state.glassPanelOffsets = {};
      if (!state.glassPanelOffsets[dragState.unitKey]) state.glassPanelOffsets[dragState.unitKey] = {};
      state.glassPanelOffsets[dragState.unitKey][dragState.panelIdx] = { dx: dx, dy: dy };
      saveState(false);
      const _du = state.units.find(x => x.key === dragState.unitKey);
      const _p  = _du && _du.glassPanels && _du.glassPanels[dragState.panelIdx];
      toast(((_du ? _du.id : '?') + ' · ' + ((_p && _p.panel) || ('#' + (dragState.panelIdx + 1))) + ' ') + t('msg_pos_saved'));
      if (dragState.el) dragState.el.style.cursor = 'grab';
    } else {
      state.positions[dragState.id] = { x: dragState.x, y: dragState.y };
      saveState(false);
      { const _du = state.units.find(x=>x.key===dragState.id); toast(`${_du ? _du.id : dragState.id} ` + t('msg_pos_saved')); }
    }
  } else if (dragState && dragState.glassPanel && dragState.el) {
    dragState.el.style.cursor = 'grab';
  }
  setTimeout(() => dragState = null, 50);
});

function togglePlaceMode() {
  placeMode = !placeMode;
  const wrap = document.getElementById('planWrap');
  const btn = document.getElementById('placeBtn');
  wrap.classList.toggle('placing', placeMode);
  if (placeMode) {
    btn.classList.add('btn-primary');
    btn.textContent = t('place_cancel');
    toast(t('place_hint'));
  } else {
    btn.classList.remove('btn-primary');
    btn.textContent = t('tool_place');
  }
}

document.getElementById('planImg').addEventListener('click', e => {
  if (!placeMode) return;
  const rect = document.getElementById('planWrap').getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top)  / rect.height) * 100;
  // prompt for unit selection
  const unitIds = state.units.map(u=>u.id).join(', ');
  const id = prompt(t('prompt_place_unit').replace('{x}', x.toFixed(1)).replace('{y}', y.toFixed(1)).replace('{units}', unitIds));
  if (!id) return;
  const unit = state.units.find(u => u.id.toUpperCase() === id.trim().toUpperCase() && !state.positions[u.key]) || state.units.find(u => u.id.toUpperCase() === id.trim().toUpperCase());
  if (!unit) {
    if (confirm(t('confirm_unit_create').replace('{id}', id))) {
      {
        // Generate a unique key — if id exists already, append __N suffix
        const trimmedId = id.trim().toUpperCase();
        const existingKeys = state.units.filter(u => u.id === trimmedId).map(u => u.key);
        let newKey = trimmedId;
        if (existingKeys.length > 0) {
          let n = existingKeys.length + 1;
          newKey = trimmedId + '__' + n;
          while (state.units.some(u => u.key === newKey)) { n++; newKey = trimmedId + '__' + n; }
        }
        state.units.push({ key: newKey, id: trimmedId, type:'Storefront', zone:'—', level:'GF', status:'pending', date:'', louver:'no', note:'' });
        state.positions[newKey] = { x, y };
      }
      togglePlaceMode();
      saveState();
    }
    return;
  }
  state.positions[unit.key] = { x, y };
  togglePlaceMode();
  saveState();
});

document.getElementById('editPositionMode').addEventListener('change', () => {
  setupPlanInteractions();
  if (typeof mapGlassMode !== 'undefined' && mapGlassMode) renderGlassMarkers();
  toast(document.getElementById('editPositionMode').checked ? t('msg_edit_on') : t('msg_edit_off'));
});

// Inlined Level 2 plan so the file is fully self-contained when downloaded
const PLAN_L2_SRC = "data:image/png;base64,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R44FTrmsZ2VT1JArHpX18tqy3mT1hsFcMDbrDS1ILbEVi1emTcnCKdc5LL/72kL44yBJe6c58dZzfEUOdkxeOnjwWdxYx9g/keqVC+BpIOSm02q1Ui/ELi+17YeteqPd6uvX7TTudKh97eFwWgNe48qg3bppREQJO+34rq0QI4GogyoxWp00bTd0Eg3q7esUByF4nTrcSkjSylr/gm4M1O10DEJrrZyc94q6VJpEun9lL8je00fx2iL4E7GWOT/LhbBTHMWN0t2Mvat4GZPvZ1I+kHim2ddP+x3/W0ikU1MUhTK/0bWI1vQVGjVMSt1ORKnWDYx2nXrXDoOA1bZGadxQok5IqTqImX2nUyp3baOdUErbddKKKXU6Mvz6qBlQandp2s40Z6c90Ig2uEoITdorXVWU91pM6zKUViUuFf2QeUV6UFSsB+uK8qBU6BtsLwkwF+hBaX7qrytnAYFnA3hTwS/Jr3c6RLsJwRRtgO2q4+B37Qq04V2tnRqEk1MlknoVVZs4fsO50loxmorxtdpOwESst0mrmU3kRXKiTXulpm3OBO0quqkR7Tq9smi/LQxJAYEngJDOHZi1Va1S9xqJhoNCkJyS3qi32oM2IUq125RJQU5Cun7c5n7nN71ZxYOwq9avceSeRcxO9zqN0PkD7Wp59Q4BcqKhmQ5ov2lo126roQpyCgg8CaA569Vq1Vb9uul0bSCnBOQ8kPRBWrvjbJSbfWRTTk7aDdM2tt9Y36J6guSsdNX2TaV1HRCmUa/aHHgSIVGj0Ri0LSAnBqGNtpM2HCCnMWglgpwCAk9BYdaSSt0kaeN6RU4wa+UBsE+y6jXsEMnJGVxZYdMCKzZpqEnbAOI12+BzEhp3NBaDLasObILjLnVu4GbktHHxhEZqXbvA2o4gp4DAUwDkbOGyTSZoTkKvu2GJnMTvuqAi6zUwTJGcndDx71rMbLXCILm2iVdPbSe+k4GcErEGKYubvp10cDYK9zmRnB1I3ML5oUq1aQM5SXIlyCkg8BRIJK6Dzxm7QYJ68SYgkgkKUZJT7JhsJ4xoiZP1UNg32OeiEeYlcRyH2L+ZxnHqSkY1BB76ddVKIURIIbCVyryPsdKEKzafPebFYcvjsxzeSx+wgMCrghDTA8iqobEDiVlgqCqmArw0+WROnHGiGQfZQmCy51l8OI9hySofhKDKuBYi09A3pTKF/56GsxQkqtEsACauyXwUq6llaWqiE0NA4AkoD5zaN+WHbI6oI9uG790bW3uwa+6RoKaAwBOwhZwPGLrutC9uSzk5N4fCr4NLa0oLcgoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAj8gfh/Iu3sqURkZ9EAAAAASUVORK5CYII=";
// Cache the original Ground Floor inline plan src on first read; restoring it
// guarantees switching back to GF always returns to the exact same image and
// works offline / when the assets/ folder is missing.
let PLAN_GF_SRC = null;
function setLevel(lvl) {
  const img = document.getElementById('planImg');
  if (PLAN_GF_SRC === null) PLAN_GF_SRC = img.src;
  currentLevel = lvl;
  document.querySelectorAll('.level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === lvl));
  img.src = lvl === 'L2' ? PLAN_L2_SRC : PLAN_GF_SRC;
  renderPlan();
}

function renderKPIs() {
  const u = state.units;
  const installed = u.filter(x=>x.status==='installed').length;
  const inProg = u.filter(x=>x.status==='in-progress').length;
  const issues = u.filter(x=>x.status==='issue').length;
  const pending = u.filter(x=>x.status==='pending').length;
  const louvers = u.filter(x=>x.louver==='yes').length;
  const total = u.length;
  const pct = total ? Math.round((installed / total) * 100) : 0;
  document.getElementById('kpi-installed').textContent = installed;
  const _progEl = document.getElementById('kpi-progress'); if(_progEl) _progEl.textContent = inProg;
  document.getElementById('kpi-issues').textContent = issues;
  document.getElementById('kpi-pending').textContent = pending;
  document.getElementById('kpi-louvers').textContent = louvers;
  document.getElementById('kpi-percent').textContent = pct + '%';
  document.getElementById('kpi-percent-sub').textContent = t('kpi_percent_sub_dyn').replace('{installed}', installed).replace('{total}', total);
  const allPanels = u.flatMap(x => x.glassPanels || (x.glass ? [{ panel: x.panels||'', status: x.glass }] : []));
  const glassInstalled = allPanels.filter(p=>p.status==='installed').length;
  const giEl = document.getElementById('kpi-glass-installed'); if(giEl) giEl.textContent = glassInstalled;
  const giSub = document.getElementById('kpi-glass-installed-sub'); if(giSub) giSub.textContent = glassInstalled + ' / ' + allPanels.length + ' panels';
  if (typeof renderGlassChart === 'function') renderGlassChart();

  // tab counts
  document.getElementById('cnt-all').textContent = total;
  document.getElementById('cnt-GF').textContent  = u.filter(x=>(x.level||'GF')==='GF').length;
  document.getElementById('cnt-L2').textContent  = u.filter(x=>x.level==='L2').length;
}

function renderUnitGrid() {
  const grid = document.getElementById('unitGrid');
  let units = state.units;
  if (currentZone === 'GF') units = units.filter(u=>(u.level||'GF')==='GF');
  if (currentZone === 'L2') units = units.filter(u=>u.level==='L2');
  // Compute duplicate counts per display id
  const idCounts = {};
  state.units.forEach(u => { idCounts[u.id] = (idCounts[u.id] || 0) + 1; });
  // Per-id running index
  const idSeen = {};
  grid.innerHTML = units.map(u => {
    const planned = isPlanned(u);
    idSeen[u.id] = (idSeen[u.id] || 0) + 1;
    const dupBadge = idCounts[u.id] > 1 ? `<span class="dup-badge">${idSeen[u.id]}/${idCounts[u.id]}</span>` : '';
    if (glassCardFlipMode) {
      const panels = u.glassPanels || (u.glass ? [{panel: u.panels||'', status: u.glass}] : []);
      // Worst-status priority: issue > pending > ready > installed
      var worstGlass = '';
      if (panels.length) {
        var statuses = panels.map(function(p){ return p.status || 'unknown'; });
        if      (statuses.indexOf('issue')   >= 0) worstGlass = 'issue';
        else if (statuses.indexOf('pending') >= 0) worstGlass = 'pending';
        else if (statuses.indexOf('unknown') >= 0) worstGlass = 'pending';
        else if (statuses.indexOf('ready')   >= 0) worstGlass = 'ready';
        else if (statuses.every(function(s){return s==='installed';})) worstGlass = 'installed';
      }
      const glassRows = panels.length && panels.some(function(p){return p.panel || p.status;})
        ? panels.map(function(p) {
            var sc = p.status || 'unknown';
            var stLabel = ({installed:'✓',ready:'R',pending:'·',issue:'!',unknown:'?'})[sc] || '?';
            return '<div class="glass-flip-row">' + (p.panel || '?') +
              '<span class="gf-status ' + sc + '">' + stLabel + '</span></div>';
          }).join('')
        : '<div class="glass-flip-row" style="color:var(--text-dim);font-weight:400">—</div>';
      var cornerDot = worstGlass ? '<span class="gf-corner gfc-' + worstGlass + '" title="Worst glass status: ' + worstGlass + '"></span>' : '';
      var cls2 = 'unit-cell ' + u.status + (planned ? ' planned' : '') + ' glass-flip-card gfc-card-' + (worstGlass || 'none');
      return '<div class="' + cls2 + '" onclick="openUnit(\''+ u.key +'\')">' +
        cornerDot +
        '<div class="glass-flip-sf">' + u.id + dupBadge + '</div>' + glassRows + '</div>';
    }
    const cls = `unit-cell ${u.status}${planned ? ' planned' : ''}`;
    return `
    <div class="${cls}" onclick="openUnit('${u.key}')">
      ${u.louver === 'yes' ? '<span class="badge">L</span>' : ''}
      <div class="unit-id">${u.id}${dupBadge}</div>
      <div class="unit-meta">${u.date ? formatDate(u.date) : '—'}</div>
    </div>`;
  }).join('');
}

function renderTable() {
  let units = state.units.slice();
  if (currentFilter === 'planned') units = units.filter(u=>isPlanned(u));
  else if (currentFilter !== 'all') units = units.filter(u=>u.status===currentFilter && !isPlanned(u));
  // sort: installed first by date desc, then others
  units.sort((a,b)=>{
    if (a.date && b.date) return b.date.localeCompare(a.date);
    if (a.date) return -1;
    if (b.date) return 1;
    return a.id.localeCompare(b.id);
  });
  document.getElementById('tableBody').innerHTML = units.map(u => {
    const planned = isPlanned(u);
    const rowCls = planned ? ' class="planned-row"' : '';
    const plannedBadge = planned ? `<span class="planned-badge">${t('badge_planned')}</span>` : '';
    return `
    <tr${rowCls} onclick="openUnit('${u.key}')" style="cursor:pointer">
      <td><strong>${u.id}</strong>${u.level==='L2' ? ' <span style="font-size:9px;background:var(--purple);color:#fff;padding:1px 5px;border-radius:6px;vertical-align:middle">L2</span>' : ''}</td>
      <td>${u.type}<br><span style="color:var(--text-dim);font-size:11px">${u.zone}</span></td>
      <td><span class="status-dot ${u.status}"></span>${formatStatus(u.status)}${plannedBadge}</td>
      <td>${u.date ? formatDate(u.date) : '<span style="color:var(--text-dim)">—</span>'}</td>
      <td style="font-size:12px;color:var(--text-dim);max-width:240px">${u.note || ''}</td>
      <td style="min-width:120px">${formatGlassPanels(u)}</td>
    </tr>`;
  }).join('') || `<tr><td colspan="6" style="text-align:center;color:var(--text-dim);padding:24px">${t('no_units_match')}</td></tr>`;
}

function renderTimeline() {
  const tl = document.getElementById('timeline');
  // Group log entries by date, preserving original index for edit/delete
  const groups = new Map();
  state.log.forEach((l, i) => {
    if (!groups.has(l.date)) groups.set(l.date, []);
    groups.get(l.date).push({ l, i });
  });
  const dates = [...groups.keys()].sort((a, b) => b.localeCompare(a));
  // Dot color priority: issue > framing > louver > caulking
  const dotPriority = ['issue', 'framing', 'louver', 'caulking'];
  const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

  tl.innerHTML = dates.map(date => {
    const entries = groups.get(date);
    // Aggregate categories across the day to pick the dot color
    const allCats = new Set();
    entries.forEach(({ l }) => getCats(l).forEach(c => allCats.add(c)));
    const dotCat = dotPriority.find(c => allCats.has(c)) || 'framing';
    const anyPlanned = entries.some(({ l }) => isPlanned(l));
    const cls = `timeline-item ${dotCat}${anyPlanned ? ' planned' : ''}`;
    const badge = anyPlanned ? `<span class="planned-badge">${t('badge_planned')}</span>` : '';

    const entriesHtml = entries.map(({ l, i }) => {
      const cats = getCats(l);
      const tags = cats.map(c => `<span class="tag ${c}">${categoryLabel(c)}</span>`).join('');
      return `
      <div class="timeline-entry" data-log-idx="${i}" onclick="editLog(${i})" title="${esc(t('log_click_edit'))}">
        <button class="log-delete-btn" onclick="event.stopPropagation();deleteLog(${i})" title="${esc(t('log_delete'))}" aria-label="delete">×</button>
        <div class="timeline-content">${esc(l.content)}</div>
        <div class="timeline-tags">${tags}</div>
      </div>`;
    }).join('');

    return `
    <div class="${cls}">
      <div class="timeline-date">${formatDate(date)} · ${weekdayCN(date)}${badge}</div>
      ${entriesHtml}
    </div>`;
  }).join('');
}

function renderCharts() {
  // Trend chart - by date, count by category
  const dates = [...new Set(state.log.map(l=>l.date))].sort();
  const framing = dates.map(d => countCategoryOnDate(d, 'framing'));
  const louver  = dates.map(d => countCategoryOnDate(d, 'louver'));
  const caulk   = dates.map(d => countCategoryOnDate(d, 'caulking'));

  if (trendChart) trendChart.destroy();
  trendChart = new Chart(document.getElementById('trendChart'), {
    type: 'bar',
    data: {
      labels: dates.map(d => formatDate(d)),
      datasets: [
        { label:'Framing',  data: framing, backgroundColor: '#3fb950' },
        { label:'Louver',   data: louver,  backgroundColor: '#bc8cff' },
        { label:'Caulking', data: caulk,   backgroundColor: '#ff8c42' },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { stacked: true, ticks:{ color:'#8b949e' }, grid:{ color:'rgba(255,255,255,0.05)' } },
        y: { stacked: true, ticks:{ color:'#8b949e', stepSize:1 }, grid:{ color:'rgba(255,255,255,0.05)' } }
      }
    }
  });

  // Donut
  const counts = {
    installed: state.units.filter(u=>u.status==='installed').length,
    'in-progress': state.units.filter(u=>u.status==='in-progress').length,
    issue: state.units.filter(u=>u.status==='issue').length,
    pending: state.units.filter(u=>u.status==='pending').length,
  };
  if (donutChart) donutChart.destroy();
  donutChart = new Chart(document.getElementById('donutChart'), {
    type: 'doughnut',
    data: {
      labels: ['Installed','Ready','Issue','Pending'],
      datasets: [{
        data: [counts.installed, counts['in-progress'], counts.issue, counts.pending],
        backgroundColor: ['#3fb950','#d29922','#f85149','#4d5764'],
        borderColor: '#1a2028',
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: { position: 'bottom', labels: { color:'#e6edf3', boxWidth: 12, padding: 12 } }
      }
    }
  });
}

function renderGlassChart() {
  const u = state.units;
  const allPanels = u.flatMap(x => x.glassPanels || (x.glass ? [{ panel: x.panels||'', status: x.glass }] : []));
  const counts = [
    allPanels.filter(p=>p.status==='installed').length,
    allPanels.filter(p=>p.status==='ready').length,
    allPanels.filter(p=>p.status==='pending').length,
    allPanels.filter(p=>p.status==='issue').length,
    allPanels.filter(p=>!p.status||p.status==='').length,
  ];
  const ctx = document.getElementById('glassDonutChart');
  if (!ctx) return;
  if (window._glassChart) window._glassChart.destroy();
  window._glassChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Installed','Ready','Pending','Issue','Unknown'],
      datasets: [{
        data: counts,
        backgroundColor: ['#3fb950','#58a6ff','#4d5764','#f85149','#2d333b'],
        borderColor: '#1a2028',
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: { position:'bottom', labels:{ color:'#e6edf3', boxWidth:12, padding:12 } }
      }
    }
  });
}

/* -------- Helpers -------- */
// Return an array of categories for a log entry. Supports the legacy `category`
// (single string) and the new `categories` (array) fields. Always returns
// at least one item.
function getCats(l) {
  if (Array.isArray(l.categories) && l.categories.length) return l.categories;
  if (l.category) return [l.category];
  return ['framing'];
}
function countCategoryOnDate(date, cat) {
  return state.log.filter(l => l.date === date && getCats(l).includes(cat)).reduce((acc, l) => {
    if (cat === 'caulking') return acc + 1;
    // count tokens separated by ·
    return acc + (l.content.match(/[A-Za-z0-9.]+/g) || ['x']).length;
  }, 0);
}
function formatDate(d) {
  if (!d) return '';
  const [y, m, day] = d.split('-');
  return `${parseInt(m)}/${parseInt(day)}`;
}
function weekdayCN(d) {
  const dd = new Date(d + 'T00:00:00');
  return WEEKDAYS[currentLang][dd.getDay()];
}
function formatGlass(g) {
  if (!g) return '<span style="color:var(--text-dim);font-size:11px">—</span>';
  const map = { pending:['glass-badge glass-pending','Pending'], ready:['glass-badge glass-ready','Ready'], installed:['glass-badge glass-installed','Installed'], issue:['glass-badge glass-issue','Issue'] };
  const [cls,lbl] = map[g]||['glass-badge','?'];
  return `<span class="${cls}">${lbl}</span>`;
}

function formatGlassPanels(u) {
  const panels = u.glassPanels || (u.glass ? [{ panel: u.panels||'', status: u.glass }] : []);
  if (!panels.length) return '<span style="color:var(--text-dim);font-size:11px">—</span>';
  return `<div class="glass-panel-lines">${panels.map(p =>
    `<div class="glass-panel-line">${formatGlass(p.status||'')}${p.panel ? `<span class="panels-label" style="display:inline;margin:0 0 0 4px">${p.panel}</span>` : ''}${p.date ? `<span class="panels-label" style="display:inline;margin:0 0 0 4px;color:var(--text-dim)">${formatDate(p.date)}</span>` : ''}</div>`
  ).join('')}</div>`;
}

/* --- Glass panel list helpers (modal) --- */
function glassStatusOptions(selected) {
  const opts = [['','— Unknown —'],['pending','Pending'],['ready','Ready'],['installed','Installed'],['issue','Issue / Rework']];
  return opts.map(([v,l]) => `<option value="${v}"${selected===v?' selected':''}>${l}</option>`).join('');
}

function renderGlassPanelList(panels) {
  const list = document.getElementById('glass-panels-list');
  list.innerHTML = panels.map((p, i) => `
    <div class="glass-panel-row" data-idx="${i}">
      <input type="text" value="${p.panel||''}" placeholder="e.g. 1F-27" autocomplete="off">
      <select>${glassStatusOptions(p.status||'')}</select>
      <input type="date" value="${p.date||''}">
      <button type="button" class="btn-remove" onclick="removeGlassPanel(${i})" title="Remove">×</button>
    </div>`).join('');
}

function addGlassPanel() {
  const panels = readGlassPanels();
  panels.push({ panel: '1F-', status: '' });
  renderGlassPanelList(panels);
  // Auto-focus new input with cursor at end
  requestAnimationFrame(() => {
    const rows = document.querySelectorAll('#glass-panels-list .glass-panel-row');
    if (rows.length) {
      const inp = rows[rows.length-1].querySelector('input[type=text]');
      if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
    }
  });
}

function removeGlassPanel(idx) {
  const panels = readGlassPanels();
  if (panels.length <= 1) return; // keep at least one
  panels.splice(idx, 1);
  renderGlassPanelList(panels);
}

function readGlassPanels() {
  const rows = document.querySelectorAll('#glass-panels-list .glass-panel-row');
  return Array.from(rows).map(row => ({
    panel:  row.querySelector('input[type=text]').value.trim(),
    status: row.querySelector('select').value,
    date:   row.querySelector('input[type=date]').value
  }));
}
function formatStatus(s) {
  return { installed:t('status_installed'), 'in-progress':t('status_in_progress'), issue:t('status_issue'), pending:t('status_pending') }[s] || s;
}
function categoryLabel(c) {
  return { framing:'Framing', louver:'Louver', caulking:'Caulking', issue:'Issue' }[c] || c;
}

/* -------- Modals -------- */
function openUnit(id) {
  const u = state.units.find(x=>x.key===id);
  if (!u) return;
  editingUnitId = id;
  document.getElementById('modalTitle').textContent = t('edit_unit_title').replace('{id}', u.id);
  document.getElementById('m-id').value = u.id;
  document.getElementById('m-status').value = u.status;
  document.getElementById('m-date').value = u.date || '';
  document.getElementById('m-louver').value = u.louver;
  document.getElementById('m-note').value = u.note || '';
  // populate glass panels list
  let panels = u.glassPanels;
  if (!panels || !panels.length) {
    // migrate legacy string fields or default to 2 empty panels
    if (u.glass || u.panels) {
      panels = [{ panel: u.panels || '', status: u.glass || '' }];
      while (panels.length < 2) panels.push({ panel: '', status: '' });
    } else {
      panels = [{ panel: '1F-', status: '' }, { panel: '1F-', status: '' }];
    }
  }
  renderGlassPanelList(panels);
  document.getElementById('m-glass-note').value = u.glassNote || '';
  switchModalTab('framing');
  document.getElementById('unitModal').classList.add('show');
}

function switchModalTab(tab) {
  ['framing','glass'].forEach(t => {
    document.getElementById('tab-'+t).classList.toggle('active', t===tab);
    document.getElementById('panel-'+t).classList.toggle('active', t===tab);
  });
}
function closeModal() {
  document.getElementById('unitModal').classList.remove('show');
  editingUnitId = null;
}
function saveUnit() {
  if (!editingUnitId) return;
  const u = state.units.find(x=>x.key===editingUnitId);
  if (!u) return;

  // --- Snapshot OLD values for auto-log diffing ---
  const _oldId     = u.id;
  const _oldStatus = u.status;
  const _oldDate   = u.date || '';
  const _oldLouver = u.louver;
  const _oldNote   = u.note || '';
  const _oldGlassPanels = JSON.parse(JSON.stringify(u.glassPanels || []));

  // --- Manual ID rename ---
  const newId = (document.getElementById('m-id').value || '').trim();
  if (!newId) { toast('编号不能为空 / ID required'); return; }
  if (newId !== u.id) {
    const oldId = u.id;
    u.id = newId;
    toast(`已重命名 / Renamed: ${oldId} → ${newId}`);
  }

  u.status = document.getElementById('m-status').value;
  u.date   = document.getElementById('m-date').value;
  u.louver = document.getElementById('m-louver').value;
  u.glassPanels = readGlassPanels();
  u.glassNote   = document.getElementById('m-glass-note').value;
  u.note   = document.getElementById('m-note').value;

  // --- Auto-generate Daily Log entry from diff ---
  autoLogUnitChanges(u, {
    id: _oldId, status: _oldStatus, date: _oldDate,
    louver: _oldLouver, note: _oldNote, glassPanels: _oldGlassPanels
  });

  closeModal();
  saveState();
}

/* State-driven Daily Log sync.
   Instead of recording a "diff", we treat the daily log as a projection of the
   unit's CURRENT state on u.date. Every save:
     1) Sweep this unit out of every existing unit-kind auto entry
     2) Re-add it to u.date's framing/issue/louver entry if it currently belongs
   Effects:
   - Status reversal (installed → pending) removes the unit instead of stacking suffixes.
   - Same unit ID never appears twice in one entry.
   - Log date follows u.date (not "today").
   - Glass changes are NOT logged here — they're managed by the Glass Batch tool. */
function autoLogUnitChanges(u, old) {
  const oldId = (old && old.id) || u.id;
  removeUnitFromUnitLogs(oldId);
  if (oldId !== u.id) removeUnitFromUnitLogs(u.id);

  const date = u.date || new Date().toISOString().slice(0,10);

  if (u.status === 'installed') {
    upsertUnitLog(date, 'framing', u.id);
  } else if (u.status === 'issue') {
    upsertUnitLog(date, 'issue', u.id);
  }
  // pending / in-progress: no entry (the sweep above already cleaned any prior log)

  if (u.louver === 'yes') {
    upsertUnitLog(date, 'louver', u.id);
  }
}

/* Treat both new kind='unit' entries AND legacy auto entries (no kind set)
   as the same "unit-kind" bucket. New glass-batch entries use kind='glass'
   so this sweep doesn't touch them. */
function isUnitAutoEntry(l) {
  return l && l.auto === true && Array.isArray(l.categories) && (!l.kind || l.kind === 'unit');
}

function upsertUnitLog(date, category, unitId) {
  let entry = state.log.find(l =>
    isUnitAutoEntry(l) && l.date === date &&
    l.categories.length === 1 && l.categories[0] === category
  );
  if (!entry) {
    entry = {
      date: date,
      categories: [category],
      category: category,
      content: '',
      auto: true,
      kind: 'unit',
      autoUnits: {}
    };
    state.log.push(entry);
  }
  if (!entry.kind) entry.kind = 'unit';
  if (!entry.autoUnits) {
    // Legacy entry — migrate content tokens into the structured map
    entry.autoUnits = {};
    if (entry.content) {
      entry.content.split(' · ').forEach(tok => {
        const id = tok.split(' (')[0].trim();
        if (id) entry.autoUnits[id] = '';
      });
    }
  }
  entry.autoUnits[unitId] = '';
  entry.content = Object.keys(entry.autoUnits).join(' · ');
}

function removeUnitFromUnitLogs(unitId) {
  for (let i = state.log.length - 1; i >= 0; i--) {
    const l = state.log[i];
    if (!isUnitAutoEntry(l)) continue;
    // Migrate legacy entries lazily so removal works
    if (!l.autoUnits) {
      l.autoUnits = {};
      if (l.content) {
        l.content.split(' · ').forEach(tok => {
          const id = tok.split(' (')[0].trim();
          if (id) l.autoUnits[id] = '';
        });
      }
    }
    if (unitId in l.autoUnits) {
      delete l.autoUnits[unitId];
      const keys = Object.keys(l.autoUnits);
      if (keys.length === 0) {
        state.log.splice(i, 1);
      } else {
        l.content = keys.join(' · ');
      }
    }
  }
}

/* Glass-batch entries — separate kind='glass' so unit-modal sweeps leave them alone.
   Keys are "unitId panel" (e.g. "12A 1F-3") so the same unit can have multiple panels. */
function upsertGlassLog(date, category, unitId, panel, status) {
  let entry = state.log.find(l =>
    l && l.auto === true && l.kind === 'glass' && l.date === date &&
    Array.isArray(l.categories) && l.categories.length === 1 && l.categories[0] === category
  );
  if (!entry) {
    entry = {
      date: date,
      categories: [category],
      category: category,
      content: '',
      auto: true,
      kind: 'glass',
      autoUnits: {}
    };
    state.log.push(entry);
  }
  if (!entry.autoUnits) entry.autoUnits = {};
  const key = unitId + (panel ? ' ' + panel : '');
  entry.autoUnits[key] = (status && status !== 'installed') ? status : '';
  entry.content = Object.entries(entry.autoUnits)
    .map(([k, s]) => s ? `${k} (${s})` : k)
    .join(' · ');
}

let editingLogIdx = null;
function setLogCategoryCheckboxes(cats) {
  const set = new Set(cats);
  document.querySelectorAll('#l-categories input[type="checkbox"]').forEach(cb => {
    cb.checked = set.has(cb.value);
  });
}
function getLogCategoryCheckboxes() {
  return Array.from(document.querySelectorAll('#l-categories input[type="checkbox"]:checked')).map(cb => cb.value);
}
function openAddLog() {
  editingLogIdx = null;
  document.querySelector('#logModal h3').textContent = t('modal_add_log');
  document.getElementById('l-date').value = new Date().toISOString().slice(0,10);
  setLogCategoryCheckboxes(['framing']);
  document.getElementById('l-content').value = '';
  document.getElementById('logDeleteBtn').style.display = 'none';
  document.getElementById('logModal').classList.add('show');
}
function editLog(idx) {
  const entry = state.log[idx];
  if (!entry) return;
  editingLogIdx = idx;
  document.querySelector('#logModal h3').textContent = t('modal_edit_log');
  document.getElementById('l-date').value = entry.date || '';
  setLogCategoryCheckboxes(getCats(entry));
  document.getElementById('l-content').value = entry.content || '';
  document.getElementById('logDeleteBtn').style.display = '';
  document.getElementById('logModal').classList.add('show');
}
function deleteLog(idx) {
  const entry = state.log[idx];
  if (!entry) return;
  if (!confirm(t('confirm_log_delete').replace('{content}', entry.content))) return;
  state.log.splice(idx, 1);
  closeLogModal();
  saveState();
  toast(t('msg_log_deleted'));
}
function deleteLogFromModal() {
  if (editingLogIdx === null) return;
  deleteLog(editingLogIdx);
}
function closeLogModal() {
  document.getElementById('logModal').classList.remove('show');
  editingLogIdx = null;
}
function saveLog() {
  const cats = getLogCategoryCheckboxes();
  if (!cats.length) { toast(t('alert_pick_category')); return; }
  const entry = {
    date: document.getElementById('l-date').value,
    categories: cats,
    category: cats[0], // legacy compat
    content: document.getElementById('l-content').value.trim()
  };
  if (!entry.date || !entry.content) { toast(t('alert_fill_required')); return; }
  if (editingLogIdx !== null) {
    state.log[editingLogIdx] = entry;
  } else {
    state.log.push(entry);
  }
  closeLogModal();
  saveState();
}

/* -------- Import / Export / Reset -------- */
function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type:'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cooper_park_2_progress_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast(t('msg_exported'));
}
function importData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.units && data.log) {
        state = data;
        saveState();
        toast(t('msg_import_ok'));
      } else { toast(t('alert_invalid_format')); }
    } catch(err) { toast(t('alert_json_parse_fail')); }
  };
  reader.readAsText(file);
  e.target.value = '';
}
function resetData() {
  if (!confirm(t('confirm_reset'))) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(BASELINE_KEY);
  state = loadState();
  saveState(false);
  toast(t('msg_reset'));
}

/* ======================================================
   GLASS CARD FLIP (Unit Grid)
   ====================================================== */
let glassCardFlipMode = false;

function toggleCardFlip() {
  glassCardFlipMode = !glassCardFlipMode;
  renderUnitGrid();
  requestAnimationFrame(() => {
    document.querySelectorAll('#unitGrid .unit-cell').forEach(c => {
      c.classList.add('cell-flip-in');
      c.addEventListener('animationend', () => c.classList.remove('cell-flip-in'), { once: true });
    });
  });
  const btn = document.getElementById('glassFlipBtn');
  if (btn) btn.textContent = glassCardFlipMode ? '📋 Status View' : '🪟 Glass View';
}

/* ======================================================
   MAP GLASS MODE
   ====================================================== */
let mapGlassMode      = false;
let mapGlassBatchMode = false;
let selectedGlassPanels = [];

function toggleMapGlassMode() {
  mapGlassMode = !mapGlassMode;
  const wrap     = document.getElementById('planWrap');
  const btn      = document.getElementById('glassMapBtn');
  const batchBtn = document.getElementById('glassBatchBtn');
  if (mapGlassMode) {
    wrap.classList.add('glass-mode');
    if (btn) { btn.textContent = '🗺 SF View'; btn.classList.add('btn-primary'); }
    if (batchBtn) batchBtn.style.display = '';
    renderGlassMarkers();
  } else {
    wrap.classList.remove('glass-mode');
    wrap.querySelectorAll('.glass-marker').forEach(el => el.remove());
    if (btn) { btn.textContent = '🪟 Glass Mode'; btn.classList.remove('btn-primary'); }
    if (batchBtn) { batchBtn.style.display = 'none'; batchBtn.textContent = '☑ Batch Select'; batchBtn.classList.remove('btn-primary'); }
    mapGlassBatchMode = false;
    selectedGlassPanels = [];
    document.getElementById('glassBatchBar').style.display = 'none';
  }
}

function toggleGlassBatchMode() {
  mapGlassBatchMode = !mapGlassBatchMode;
  const btn = document.getElementById('glassBatchBtn');
  const bar = document.getElementById('glassBatchBar');
  if (mapGlassBatchMode) {
    if (btn) { btn.textContent = '✕ Cancel Batch'; btn.classList.add('btn-primary'); }
    bar.style.display = 'flex';
    selectedGlassPanels = [];
    document.getElementById('glassBatchCount').textContent = '0';
  } else {
    if (btn) { btn.textContent = '☑ Batch Select'; btn.classList.remove('btn-primary'); }
    bar.style.display = 'none';
    selectedGlassPanels = [];
  }
  renderGlassMarkers();
}

function getPanelOffsets(n, zone) {
  // Fan glass markers OUTWARD from the SF marker along the wall's outward normal.
  // Direction by unit zone: North=up, South=down, East=right, West=left.
  // First panel sits adjacent to SF marker (no overlap with the SF dot).
  const step = 2.4;
  let ax = 0, ay = -1; // default to North
  switch ((zone || 'North').toLowerCase()) {
    case 'north': ax =  0; ay = -1; break;
    case 'south': ax =  0; ay =  1; break;
    case 'east':  ax =  1; ay =  0; break;
    case 'west':  ax = -1; ay =  0; break;
  }
  return Array.from({length: n}, (_, i) => ({
    dx: ax * (i + 1) * step,
    dy: ay * (i + 1) * step
  }));
}

function renderGlassMarkers() {
  const wrap = document.getElementById('planWrap');
  wrap.querySelectorAll('.glass-marker').forEach(el => el.remove());
  if (!mapGlassMode) return;
  const editMode = document.getElementById('editPositionMode').checked;
  if (!state.glassPanelOffsets) state.glassPanelOffsets = {};
  state.units.forEach(u => {
    if ((u.level || 'GF') !== currentLevel) return;
    const pos    = state.positions[u.key] || { x:50, y:50 };
    const panels = u.glassPanels || (u.glass ? [{panel: u.panels||'', status: u.glass}] : []);
    if (!panels.length) return;
    const offsets = getPanelOffsets(panels.length, u.zone);
    const customMap = state.glassPanelOffsets[u.key] || {};
    panels.forEach((p, pi) => {
      const off   = customMap[pi] || offsets[pi];
      const sc    = p.status || 'unknown';
      const isSel = selectedGlassPanels.some(x => x.unitKey === u.key && x.panelIdx === pi);
      const el    = document.createElement('div');
      el.className = 'glass-marker gm-' + sc + (isSel ? ' selected' : '');
      el.style.left = (pos.x + off.dx) + '%';
      el.style.top  = (pos.y + off.dy) + '%';
      const label = p.panel ? p.panel.replace(/^1F-/i, '') : '?';
      el.textContent = label;
      el.title = u.id + ' · ' + (p.panel || '?') + ' · ' + sc + (p.date ? ' · ' + p.date : '');
      el.dataset.unitKey  = u.key;
      el.dataset.panelIdx = pi;
      el.onpointerdown = function(e) {
        if (placeMode) return;
        e.stopPropagation();
      };
      el.onclick = function(e) {
        e.stopPropagation();
        if (dragState && dragState.moved) { dragState = null; return; }
        if (mapGlassBatchMode) { toggleGlassPanelSelect(el, u.key, pi); return; }
        openUnit(u.key);
      };
      if (editMode) {
        el.style.cursor = 'grab';
        el.onmousedown = function(e) {
          if (mapGlassBatchMode) return;
          e.preventDefault();
          e.stopPropagation();
          const rect = wrap.getBoundingClientRect();
          dragState = {
            glassPanel: true,
            unitKey: u.key,
            panelIdx: pi,
            sfPos: pos,
            el: el,
            rect: rect,
            moved: false
          };
          el.style.cursor = 'grabbing';
          hidePlanTooltip();
        };
      }
      el.addEventListener('mouseenter', function() {
        const tt = document.getElementById('planTooltip');
        const stLabel = ({installed:'Installed',ready:'Ready',pending:'Pending',issue:'Issue',unknown:'Unknown'})[sc] || sc;
        tt.innerHTML = '<strong>' + (p.panel || '?') + '</strong>&nbsp;<span style="color:var(--text-dim)">(' + u.id + ')</span><br><span style="color:var(--text-dim)">' + stLabel + (p.date ? ' · ' + formatDate(p.date) : '') + '</span>';
        const rect     = el.getBoundingClientRect();
        const wrapRect = wrap.getBoundingClientRect();
        tt.style.left    = (rect.left - wrapRect.left + rect.width / 2) + 'px';
        tt.style.top     = (rect.top  - wrapRect.top) + 'px';
        tt.style.display = 'block';
      });
      el.addEventListener('mouseleave', hidePlanTooltip);
      wrap.appendChild(el);
    });
  });
}

function toggleGlassPanelSelect(el, unitKey, panelIdx) {
  const i = selectedGlassPanels.findIndex(function(x) { return x.unitKey === unitKey && x.panelIdx === panelIdx; });
  if (i >= 0) {
    selectedGlassPanels.splice(i, 1);
    el.classList.remove('selected');
  } else {
    selectedGlassPanels.push({unitKey: unitKey, panelIdx: panelIdx});
    el.classList.add('selected');
  }
  document.getElementById('glassBatchCount').textContent = selectedGlassPanels.length;
}

function applyGlassBatch() {
  const status = document.getElementById('glassBatchStatus').value;
  const date   = document.getElementById('glassBatchDate').value;
  if (!status && !date) { toast('请先选择状态或日期 / Select a status or date first'); return; }
  const count = selectedGlassPanels.length;
  if (!count) { toast('未选中任何玻璃 / No panels selected'); return; }
  const touched = []; // collect actual changes for auto-log
  selectedGlassPanels.forEach(function(item) {
    const u = state.units.find(function(x) { return x.key === item.unitKey; });
    if (!u || !u.glassPanels) return;
    const p = u.glassPanels[item.panelIdx];
    if (!p) return;
    const oldStatus = p.status || '';
    const oldDate   = p.date   || '';
    if (status) p.status = status;
    if (date)   p.date   = date;
    if ((status && status !== oldStatus) || (date && date !== oldDate)) {
      touched.push({ unitId: u.id, panel: p.panel || '' });
    }
  });
  // Auto-log: glass entries are kind='glass' so unit-modal saves don't sweep them away.
  // Log date follows the panel's date when the batch sets one, otherwise today.
  if (touched.length) {
    const logDate = date || new Date().toISOString().slice(0,10);
    const cat     = status === 'issue' ? 'issue' : 'framing';
    touched.forEach(function(t) {
      upsertGlassLog(logDate, cat, t.unitId, t.panel, status);
    });
  }
  selectedGlassPanels = [];
  saveState();
  renderGlassMarkers();
  renderKPIs();
  document.getElementById('glassBatchCount').textContent = '0';
  toast('已更新 ' + count + ' 块玻璃 / Updated ' + count + ' glass panel' + (count > 1 ? 's' : ''));
}

function clearGlassBatch() {
  selectedGlassPanels = [];
  document.getElementById('glassBatchCount').textContent = '0';
  renderGlassMarkers();
}

/* -------- Event bindings -------- */
document.getElementById('zoneTabs').addEventListener('click', e => {
  const tab = e.target.closest('.tab');
  if (!tab) return;
  document.querySelectorAll('#zoneTabs .tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  currentZone = tab.dataset.zone;
  renderUnitGrid();
});
document.getElementById('filters').addEventListener('click', e => {
  const chip = e.target.closest('.filter-chip');
  if (!chip) return;
  document.querySelectorAll('#filters .filter-chip').forEach(c=>c.classList.remove('active'));
  chip.classList.add('active');
  currentFilter = chip.dataset.filter;
  renderTable();
});
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => {
    if (e.target === m) m.classList.remove('show');
  });
});

/* boot */
function initApp() {
  // ---- CLOUD SYNC: kick off Firebase Auth + Realtime DB sync ----
  // Cloud-sync mounts a login gate. The app keeps booting underneath
  // (so when the user signs in, everything's already initialized).
  if (window.CloudSync && window.FIREBASE_CONFIG) {
    try { window.CloudSync.init(window.FIREBASE_CONFIG); }
    catch (e) { console.error('CloudSync init failed:', e); }
  } else if (!window.FIREBASE_CONFIG) {
    console.warn('CloudSync: firebase-config.js not loaded — running in local-only mode.');
  }
  // Expose render/toast on window so cloud-sync.js can call them
  window.render = render;
  window.toast  = toast;

  // Load state NOW that the entire <body> (including __embedded_state) is parsed.
  if (!state) state = loadState();

  // When bundled, ensure the initial GF plan src points to the blob URL too
  if (window.__resources && window.__resources.planGF) {
    const _img = document.getElementById('planImg');
    if (_img) _img.src = window.__resources.planGF;
  }
  _appReady = true;
  render();
  if (state._mergeNote) {
    setTimeout(() => toast(state._mergeNote + ' — see left margin / L2 tab'), 600);
    delete state._mergeNote;
  }
}

// Fetch the team's baseline snapshot before running initApp.
// localStorage / Firebase still win when they're newer; this just supplies
// the "fresh visitor" / "stale localStorage discarded" fallback.
async function bootstrap() {
  try {
    const res = await fetch('state.json', { cache: 'no-cache' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.units && data.log) {
        window._embeddedStateJson = data;
      }
    } else {
      console.warn('state.json fetch returned', res.status);
    }
  } catch (e) {
    console.warn('state.json fetch failed — falling back to inline embedded_state', e);
  }
  initApp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
