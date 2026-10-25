const STORAGE_KEY = 'qge_store_manager_ios_v2';

const DEFAULT_NAV_TABS = [
  { id: 'home', icon: '🏪', label: '門市總覽', desc: '今日店務簡報、KPI 與四大模板', enabled: true, locked: false },
  { id: 'repair', icon: '🛠️', label: '維修AI', desc: 'iOS panic-full 重啟報告與維修百科', enabled: true, locked: false },
  { id: 'highlights', icon: '📌', label: '工作重點', desc: '早晚班交接、業績與維修客訴紀錄', enabled: true, locked: false },
  { id: 'assistant', icon: '✨', label: '店長助理', desc: 'AI 語音對話幕僚與快速交辦', enabled: true, locked: false },
  { id: 'tasks', icon: '☑️', label: '店務待辦', desc: '急件追蹤、盤點與排班進度拉桿', enabled: true, locked: false },
  { id: 'settings', icon: '⚙️', label: '設定', desc: '導覽列自訂、分店名稱與備份設定', enabled: true, locked: true }
];

const DEFAULT_DEVICE_MODELS = [
  // iPhone 18 / 17 系列
  { name: 'iPhone 18 Pro Max', group: '🔥 最新旗艦與新世代機型', notes: '次世代 2nm 晶片與雙面快拆設計；支援電誘導電池脫膠、高階感壓按鍵排線與 iOS 27 原廠零件修復助理配對', isCustom: false },
  { name: 'iPhone 18 Pro', group: '🔥 最新旗艦與新世代機型', notes: '全螢幕下感測器與雙層高密度主機板設計，拆螢幕與後蓋皆須控溫避免傷及邊框排線', isCustom: false },
  { name: 'iPhone 17 Pro Max', group: '🔥 最新旗艦與新世代機型', notes: '雙面拆機結構、高密度電池導電解膠拆卸、注意相機控制鍵 (Camera Control) 感壓排線與 iOS 27 維修助理配對', isCustom: false },
  { name: 'iPhone 17 Pro', group: '🔥 最新旗艦與新世代機型', notes: '雙層高密度主機板散熱均溫板設計，拆螢幕與後蓋皆須控溫避免傷及邊框排線', isCustom: false },
  { name: 'iPhone 17 Air / Slim', group: '🔥 最新旗艦與新世代機型', notes: '超薄機身結構，拆螢幕吸盤拉力需減半，尾插與開機排線高度整合', isCustom: false },
  { name: 'iPhone 17', group: '🔥 最新旗艦與新世代機型', notes: '支援電誘導脫膠電池技術，若遇 3 分鐘重啟優先檢查 Type-C 尾插排線 prs0/mic1', isCustom: false },
  // iPhone 16 系列
  { name: 'iPhone 16 Pro Max', group: '📱 iPhone 16 全系列', notes: '金屬外殼電池散熱設計；常見維修：右側「相機控制鍵」感壓排線受損、Type-C 尾插 prs0 重啟', isCustom: false },
  { name: 'iPhone 16 Pro', group: '📱 iPhone 16 全系列', notes: '雙面可拆結構（換電池建議由後玻璃進入）；支援 iOS 18/27 零件修復助理免移植配對', isCustom: false },
  { name: 'iPhone 16 Plus', group: '📱 iPhone 16 全系列', notes: '採用 9V 低壓電誘導拆電池膠（勿硬撬）；背蓋無線充整合閃光燈 mic2 溫控排線', isCustom: false },
  { name: 'iPhone 16', group: '📱 iPhone 16 全系列', notes: '直列雙鏡頭模組，若摔破背蓋造成 3 分鐘重啟多為無線充/閃光燈排線 mic2 斷線', isCustom: false },
  { name: 'iPhone 16e', group: '📱 iPhone 16 全系列', notes: '單鏡頭高CP值機型，Face ID 與聽筒感光排線整合度高，拆螢幕注意上方排線位置', isCustom: false },
  // iPhone 15 系列
  { name: 'iPhone 15 Pro Max', group: '📱 iPhone 15 全系列', notes: '首代鈦金屬外框 + 獨立可拆後玻璃；高發通病：摔破背蓋傷到無線充閃光排線 (mic2) 導致 180 秒重啟、5倍潛望鏡防手震異音', isCustom: false },
  { name: 'iPhone 15 Pro', group: '📱 iPhone 15 全系列', notes: 'Type-C 尾插排線含氣壓計 (prs0) 與主麥克風 (mic1)；重摔常見雙層主板中層掉點無服務', isCustom: false },
  { name: 'iPhone 15 Plus', group: '📱 iPhone 15 全系列', notes: '拆後蓋時注意右側中框無線充排線極短，掀開角度不可超過 45 度以免拉斷觸發重啟', isCustom: false },
  { name: 'iPhone 15', group: '📱 iPhone 15 全系列', notes: '改用 Type-C 充電孔，尾插進水或插劣質線易造成充電 IC 或尾插排線 prs0 異常', isCustom: false },
  // iPhone 14 系列
  { name: 'iPhone 14 Pro Max', group: '📱 iPhone 14 全系列', notes: '高發通病：螢幕上方靈動島區域受潮導致聽筒感光排線 (AOP PANIC) 卡白蘋果、少數 120Hz 綠屏/白屏', isCustom: false },
  { name: 'iPhone 14 Pro', group: '📱 iPhone 14 全系列', notes: '由正面拆螢幕進入（後玻璃與中框一體）；拆螢幕時注意左側顯示排線與上方距離感應排線', isCustom: false },
  { name: 'iPhone 14 Plus', group: '📱 iPhone 14 全系列', notes: '採用前後雙拆結構（換後玻璃超快速），注意背蓋無線充排線整合閃光燈溫控 (mic2)', isCustom: false },
  { name: 'iPhone 14', group: '📱 iPhone 14 全系列', notes: '內部改為中框鋁板支撐，換電池需從正面拆螢幕，換背蓋則直接拆後玻璃即可', isCustom: false },
  // iPhone 13 / 12 系列
  { name: 'iPhone 13 Pro Max', group: '📱 iPhone 13 / 12 系列', notes: '🔥 門市最高發通病：120Hz ProMotion 螢幕無故全白屏/全綠屏（可原螢幕精密飛線修復或換總成）', isCustom: false },
  { name: 'iPhone 13 Pro', group: '📱 iPhone 13 / 12 系列', notes: '🔥 高發通病：120Hz 白屏/綠屏通病、後鏡頭 3X 長焦/微距對焦抖動、摔機中層無服務', isCustom: false },
  { name: 'iPhone 13 / 13 mini', group: '📱 iPhone 13 / 12 系列', notes: '螢幕排線位於左下角極薄處，加熱拆螢幕時刀片切勿深入左下角超過 2mm！', isCustom: false },
  { name: 'iPhone 12 Pro Max', group: '📱 iPhone 13 / 12 系列', notes: '常見故障：後鏡頭防手震磁鐵老化抖動、尾插 prs0 重啟、摔機雙層主板邊框斷線無基頻/Wi-Fi反灰', isCustom: false },
  { name: 'iPhone 12 / 12 Pro / 12 mini', group: '📱 iPhone 13 / 12 系列', notes: '🔥 經典通病：聽筒無聲（講電話要開擴音）、重摔導致雙層主機板中層掉點「沒有服務」', isCustom: false },
  // iPhone 11 / X / SE / 經典系列
  { name: 'iPhone 11 Pro Max / 11 Pro', group: '📱 iPhone 11 / X / SE / 經典系列', notes: '雙條電池排線設計（換電池需確認雙扣皆扣緊，否則必跳 TG0B 每 3 分鐘重啟）', isCustom: false },
  { name: 'iPhone 11', group: '📱 iPhone 11 / X / SE / 經典系列', notes: 'LCD 螢幕機型，常見觸控斷觸、尾插排線老化導致 TG0B/prs0 重啟、Face ID 點陣受潮', isCustom: false },
  { name: 'iPhone XS Max / XS / XR / X', group: '📱 iPhone 11 / X / SE / 經典系列', notes: '尾插排線與電池 SWI 訊號連動，若跳 TG0B 重啟除了查電池座，也常是尾插排線拉低所致', isCustom: false },
  { name: 'iPhone SE3 / SE2 / 8 Plus / 8', group: '📱 iPhone 11 / X / SE / 經典系列', notes: 'Touch ID 指紋排線與螢幕相連，拆螢幕切勿扯斷 Home 鍵排線；SE2/8 換電池注意電池座兩側 SWI 小針腳極易被壓歪！', isCustom: false },
  // iPad 系列
  { name: 'iPad Pro M4 / M2 / M1 (11吋/13吋)', group: '📟 iPad / Apple Watch 系列', notes: 'Type-C 尾插充電孔模組耗損率高、機身面積大拆螢幕需均勻控溫 65°C 避免傷及四邊 Face ID 排線', isCustom: false },
  { name: 'iPad Air 6 / 5 / 4 & iPad mini 6 / 7', group: '📟 iPad / Apple Watch 系列', notes: '電源鍵整合 Touch ID 指紋辨識（不可隨意更換否則無指紋）、常見插不進電或充電 IC 損壞', isCustom: false },
  { name: 'iPad 10 / 9 / 8 / 7 (教育與家用款)', group: '📟 iPad / Apple Watch 系列', notes: 'iPad 7~9 採用外屏觸控玻璃與內液晶分離設計（單換外玻璃CP值高）；iPad 9 常有 CPU 虛焊白蘋果通病', isCustom: false }
];

const DEFAULT_DATA = {
  theme: 'light',
  viewportMode: 'frame',
  reportFormat: 'line',
  navTabs: JSON.parse(JSON.stringify(DEFAULT_NAV_TABS)),
  deviceModels: JSON.parse(JSON.stringify(DEFAULT_DEVICE_MODELS)),
  settings: {
    storeName: 'Q哥 門市',
    managerName: '店長',
    aiProvider: 'auto', // 'auto' | 'builtin' | 'gemini' | 'openai'
    geminiKey: '',
    geminiModel: 'gemini-2.5-flash',
    openaiKey: '',
    openaiModel: 'gpt-4o-mini',
    ttsEnabled: false
  },
  highlights: [
    {
      id: 'hl-1',
      title: '早會布達：iPhone 16 保護貼包膜搭售與維修健檢推動',
      category: '早晚班交接與人事',
      pinned: true,
      createdAt: '今日 10:30',
      points: [
        '早會布達本月重點：新機與二手機成交時，主動推薦「防窺保護貼 + 鏡頭貼 + 快充頭」高毛利套餐',
        '所有進店維修（換電池/換螢幕）客人，一律主動提供免費全機健檢與清潔服務，提升顧客好評率',
        '提醒晚班同仁結帳前務必再次核對二手機收購切結書與證件影本是否齊全'
      ],
      decision: '每筆維修與購機單皆須落實配件搭售開口，晚班交接時檢視今日配件搭售率',
      actionItem: '晚班交接前抽查 2 位門市同仁的新機配件搭售與二手機收購話術',
      actionConverted: false
    },
    {
      id: 'hl-2',
      title: 'VIP 客訴與特殊維修案件追蹤：iPhone 15 Pro Max 主機板檢測',
      category: '維修與客訴處理',
      pinned: true,
      createdAt: '今日 13:20',
      points: [
        '客人王先生反映手機偶發性重開機，已由駐店工程師進行電流與主機板深度檢測',
        '現場已先提供代用機給客人使用，並清楚說明檢測時程與保固條款，客人情緒穩定',
        '預計今日 17:00 前工程師會確認最終維修報價'
      ],
      decision: '由店長親自追蹤完修品質，取機時贈送一張高透光玻璃貼作為貼心補償',
      actionItem: '今日 17:30 前去電王先生回報檢測結果與確認維修報價',
      actionConverted: false
    },
    {
      id: 'hl-3',
      title: '本週二手機收購機況抽檢與熱門維修料件盤點',
      category: '二手機收購與庫存',
      pinned: true,
      createdAt: '昨日 19:40',
      points: [
        '完成門市高單價二手機展示櫃盤點（iPhone 14 Pro / 15 Pro 系列共 18 台），序號與機況等級皆相符',
        'iPhone 12 / 13 原廠級與認證電池庫存僅剩 4 顆，週末維修需求高需提前向總部調貨',
        '二手機收購檢測提醒同仁務必詳查 Face ID、原彩顯示與相機微距對焦功能'
      ],
      decision: '立即向總部/鄰近分店申請調撥 iPhone 12~14 常用電池與螢幕料件',
      actionItem: '送出本週維修料件補貨申請單並更新門市二手機現貨價目牌',
      actionConverted: false
    },
    {
      id: 'hl-4',
      title: '門市月度業績進度檢討與 Google 五星好評推進',
      category: '門市業績與促銷',
      pinned: false,
      createdAt: '10/23 15:00',
      points: [
        '目前門市本月業績達成率達 88%，二手機銷售表現亮眼，配件毛利仍有 12% 成長空間',
        '完修取機與購機客人邀請填寫 Google 門市五星好評，本週已新增 26 則真實好評'
      ],
      decision: '週末尖峰時段加強「舊機換新機高價折抵」立牌引導與現場估價服務',
      actionItem: '',
      actionConverted: false
    }
  ],
  tasks: [
    {
      id: 'task-1',
      title: '追蹤 VIP 王先生 iPhone 15 Pro Max 維修進度並回電報價',
      priority: 'high',
      category: '維修與客訴追蹤',
      due: '今日 17:30',
      progress: 60,
      completed: false,
      notes: '與維修工程師確認主機板檢測結果，取機時記得安排贈送保護貼'
    },
    {
      id: 'task-2',
      title: '晚班交接前完成高單價二手機展示櫃與收購機盤點',
      priority: 'high',
      category: '盤點與叫貨調度',
      due: '今日 21:00',
      progress: 40,
      completed: false,
      notes: '核對 POS 系統庫存數量、IMEI 序號與收購切結書檔案'
    },
    {
      id: 'task-3',
      title: '核對門市每日營收結帳報表並於 LINE 群組回報區經理',
      priority: 'medium',
      category: '店務營運與結帳',
      due: '今日打烊前',
      progress: 50,
      completed: false,
      notes: '可使用本 APP「📲 產出 LINE 交接/回報日報」功能一鍵複製貼上'
    },
    {
      id: 'task-4',
      title: '排定下週門市人員早晚班表與新人二手機估價 SOP 抽測',
      priority: 'medium',
      category: '人員排班與訓練',
      due: '明日 18:00',
      progress: 30,
      completed: false,
      notes: '注意週末促銷檔期需安排雙維修工程師與資深銷售支援'
    },
    {
      id: 'task-5',
      title: '完成總部最新促銷活動海報上架與門市環境陳列拍照回傳',
      priority: 'low',
      category: '總部回報事項',
      due: '已完成',
      progress: 100,
      completed: true,
      notes: '已上傳至總部店務回報群組'
    }
  ],
  messages: [
    {
      id: 'msg-welcome',
      role: 'assistant',
      text: '店長您好！我是專為 **Q哥 門市店長** 打造的智慧店務幕僚 **iAssist** 👑\n\n我能協助您高效掌管門市大小事：\n1️⃣ **記錄店務與交接重點**：直接語音或打字說「幫我記錄早會重點：...」或「記錄維修客訴重點：...」，我會自動分類為業績、維修客訴、二手機庫存或早晚班交接。\n2️⃣ **追蹤門市急件待辦**：對我說「幫我新增高優先待辦：下午五點前確認 iPhone 15 維修進度並回電客人」。\n3️⃣ **一鍵產出 LINE 店長日報**：隨時點擊「📲 產出給區經理/群組的日報」，自動排版好今日重點與待辦，直接複製貼上 LINE 群組！',
      time: '剛剛',
      actionBadge: ''
    }
  ]
};

const STORE_TEMPLATES = {
  shift: {
    title: '早晚班交接與門市重點布達',
    category: '早晚班交接與人事',
    pinned: true,
    points: [
      '今日門市主推方案：二手機搭配高透/防窺保護貼與快充組加購優惠',
      '早班未結維修單共 __ 件，已清楚標註於維修交接櫃並告知晚班工程師',
      '門市收銀機零用金與高單價配件櫃交接清點無誤'
    ],
    decision: '請晚班同仁持續落實進店招呼與完修五星好評引導',
    actionItem: '晚班打烊前完成收購二手機入庫登錄與每日結帳報表回傳'
  },
  repair: {
    title: '特殊維修案件 / 客訴處理追蹤紀錄',
    category: '維修與客訴處理',
    pinned: true,
    points: [
      '客戶機型與問題：iPhone __ （故障現象：__）',
      '現場檢測與處理狀況：已由工程師初步檢測，並向客戶說明報價與保固範圍',
      '客戶溝通結果：已提供妥善方案，客戶同意維修時程'
    ],
    decision: '完修後由店長親自複檢全機功能（Face ID / 觸控 / 相機 / 氣密），確保零返修',
    actionItem: '完修後第一時間致電客戶通知取機，並於三天後進行滿意度關懷追蹤'
  },
  tradein: {
    title: '二手機收購審核與門市料件庫存盤點',
    category: '二手機收購與庫存',
    pinned: true,
    points: [
      '今日高單價二手機收購共 __ 台，皆已完成外觀分級、電池健康度檢測與序號核對',
      '完成門市二手機展示櫃每日清點，實機數量與 POS 系統庫存一致',
      '維修部常用電池與螢幕總成庫存檢查，缺料項目已列入叫貨清單'
    ],
    decision: '嚴格執行二手機收購 SOP 與證件切結書查驗，熱門機型優先整理上架銷售',
    actionItem: '向總部申請補充本週短缺之維修電池與保護貼型號'
  },
  sales: {
    title: '門市業績達成率與配件包膜搭售檢討',
    category: '門市業績與促銷',
    pinned: true,
    points: [
      '本日新機/二手機銷售台數 __ 台，整體毛利達成進度穩健',
      '配件與包膜搭售率達 __%，針對未搭售案件與同仁進行話術微調與演練',
      '門號攜碼與舊換新折抵詢問度高，主動引導客人進行現場免費估價'
    ],
    decision: '強化維修取機客人的「保護貼換新 + 鏡頭貼」順手加購推薦',
    actionItem: '更新門市促銷立牌並於明日早會表揚今日配件搭售表現優秀同仁'
  }
};

class iAssistApp {
  constructor() {
    this.state = this.loadState();
    this.currentTab = 'home';
    this.highlightFilter = 'all';
    this.taskFilter = 'all';
    this.reportFormat = this.state.reportFormat || 'line';
    this.recognition = null;
    this.isListening = false;
    this.voiceTarget = 'chat';
    this.init();
  }

  loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return JSON.parse(JSON.stringify(DEFAULT_DATA));
      const parsed = JSON.parse(raw);
      const savedTabs = Array.isArray(parsed.navTabs) && parsed.navTabs.length ? parsed.navTabs : null;
      let mergedNavTabs = JSON.parse(JSON.stringify(DEFAULT_NAV_TABS));
      if (savedTabs) {
        const savedIds = new Set(savedTabs.map((t) => t.id));
        mergedNavTabs = [
          ...savedTabs,
          ...DEFAULT_NAV_TABS.filter((d) => !savedIds.has(d.id))
        ];
      }
      const savedModels = Array.isArray(parsed.deviceModels) && parsed.deviceModels.length ? parsed.deviceModels : null;
      let mergedModels = JSON.parse(JSON.stringify(DEFAULT_DEVICE_MODELS));
      if (savedModels) {
        const customModels = savedModels.filter((m) => m && m.isCustom);
        const existingNames = new Set(mergedModels.map((m) => m.name));
        customModels.forEach((cm) => {
          if (!existingNames.has(cm.name)) {
            mergedModels.unshift(cm);
            existingNames.add(cm.name);
          }
        });
      }
      return {
        ...JSON.parse(JSON.stringify(DEFAULT_DATA)),
        ...parsed,
        navTabs: mergedNavTabs,
        deviceModels: mergedModels,
        settings: { ...DEFAULT_DATA.settings, ...(parsed.settings || {}) }
      };
    } catch (e) {
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }

  init() {
    this.applyTheme();
    this.setViewportMode(this.state.viewportMode || 'frame', false);
    this.updateClock();
    setInterval(() => this.updateClock(), 15000);
    this.setupSpeechRecognition();
    this.populateSettingsUI();
    this.renderAll();

    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  }

  updateClock() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const clockEl = document.getElementById('ios-clock');
    if (clockEl) clockEl.textContent = `${hh}:${mm}`;

    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const subEl = document.getElementById('nav-date-subtitle');
    if (subEl) {
      const storeName = this.state.settings.storeName || 'Q哥 門市';
      subEl.textContent = `${now.getMonth() + 1}月${now.getDate()}日 ${weekdays[now.getDay()]} · ${storeName}`;
    }
  }

  showToast(message) {
    const toast = document.getElementById('ios-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  /* ================= THEME & VIEWPORT ================= */
  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
    const btn = document.getElementById('btn-desktop-theme');
    if (btn) {
      btn.textContent = this.state.theme === 'dark' ? '☀️ 淺色模式' : '🌙 深色模式';
    }
  }

  toggleTheme() {
    this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.saveState();
    this.applyTheme();
    this.showToast(this.state.theme === 'dark' ? '已切換至 iOS 深色模式' : '已切換至 iOS 淺色模式');
  }

  setViewportMode(mode, persist = true) {
    this.state.viewportMode = mode;
    const stage = document.getElementById('app-stage');
    const btnFrame = document.getElementById('btn-frame-mode');
    const btnFull = document.getElementById('btn-full-mode');
    if (mode === 'fullscreen') {
      stage?.classList.add('fullscreen-mode');
      btnFull?.classList.add('active');
      btnFrame?.classList.remove('active');
    } else {
      stage?.classList.remove('fullscreen-mode');
      btnFrame?.classList.add('active');
      btnFull?.classList.remove('active');
    }
    if (persist) this.saveState();
  }

  /* ================= NAVIGATION ================= */
  switchTab(tabName) {
    this.currentTab = tabName;
    document.querySelectorAll('.tab-view').forEach((el) => el.classList.remove('active'));
    document.getElementById(`view-${tabName}`)?.classList.add('active');

    document.querySelectorAll('.tab-item').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });

    const titleMap = {
      home: '門市總覽',
      repair: 'iOS 維修專用 AI',
      highlights: '店務工作重點',
      assistant: 'AI 店長幕僚',
      tasks: '店務待辦追蹤',
      settings: '店長設定'
    };
    const titleEl = document.getElementById('nav-main-title');
    if (titleEl) titleEl.textContent = titleMap[tabName] || 'Q哥店長助理';

    const actionsEl = document.getElementById('nav-header-actions');
    if (actionsEl) {
      if (tabName === 'repair') {
        actionsEl.innerHTML = `
          <button class="mini-btn" onclick="app.TriggerRepairGuide('restart_180s')">🔁 3分鐘重啟表</button>
          <button class="ios-pill-btn" onclick="app.analyzeRepairIssue()">🔍 立即診斷</button>
        `;
      } else if (tabName === 'highlights') {
        actionsEl.innerHTML = `
          <button class="mini-btn" onclick="app.openReportModal('line')">📲 LINE 日報</button>
          <button class="ios-pill-btn" onclick="app.openHighlightModal()">＋ 記重點</button>
        `;
      } else if (tabName === 'tasks') {
        actionsEl.innerHTML = `
          <button class="ios-pill-btn" onclick="app.openTaskModal()">＋ 新增店務</button>
        `;
      } else if (tabName === 'assistant') {
        actionsEl.innerHTML = `
          <button class="mini-btn" onclick="app.clearChatHistory()">🧹 重置對話</button>
        `;
        setTimeout(() => this.scrollChatToBottom(), 50);
      } else {
        actionsEl.innerHTML = `
          <button class="ios-pill-btn" onclick="app.openHighlightModal()">＋ 記店務重點</button>
          <button class="ios-icon-btn" onclick="app.openTaskModal()" title="新增店務待辦">＋</button>
        `;
      }
    }

    const contentEl = document.getElementById('ios-content');
    if (contentEl && tabName !== 'assistant') {
      contentEl.scrollTop = 0;
    }
  }

  setTaskFilterFromHome(filter) {
    this.switchTab('tasks');
    this.setTaskFilter(filter);
  }

  /* ================= RENDER ALL ================= */
  renderAll() {
    this.updateClock();
    this.updateHeaderBadge();
    this.renderTabBar();
    this.renderNavCustomizer();
    this.renderHome();
    this.renderHighlights();
    this.renderTasks();
    this.renderChat();
    this.updateAIModeBadge();
    this.initRepairViewIfEmpty();
  }

  /* ================= BOTTOM NAV BAR CUSTOMIZER ================= */
  renderTabBar() {
    const bar = document.getElementById('ios-tab-bar');
    if (!bar) return;
    const tabs = Array.isArray(this.state.navTabs) ? this.state.navTabs : DEFAULT_NAV_TABS;
    const visibleTabs = tabs.filter((t) => t.enabled || t.locked);
    bar.style.gridTemplateColumns = `repeat(${visibleTabs.length}, 1fr)`;

    bar.innerHTML = visibleTabs
      .map(
        (t) => `
        <button class="tab-item ${this.currentTab === t.id ? 'active' : ''}" data-tab="${t.id}" onclick="app.switchTab('${t.id}')">
          <span class="tab-icon">${this.escapeHTML(t.icon)}</span>
          <span class="tab-label">${this.escapeHTML(t.label)}</span>
        </button>
      `
      )
      .join('');
  }

  renderNavCustomizer() {
    const container = document.getElementById('nav-customizer-list');
    if (!container) return;
    const tabs = Array.isArray(this.state.navTabs) ? this.state.navTabs : DEFAULT_NAV_TABS;

    container.innerHTML = tabs
      .map(
        (t, idx) => `
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;border-radius:12px;background:var(--ios-bg);border:1px solid var(--ios-separator);opacity:${
          t.enabled || t.locked ? '1' : '0.55'
        };">
          <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0;">
            <input
              type="checkbox"
              ${t.enabled || t.locked ? 'checked' : ''}
              ${t.locked ? 'disabled' : ''}
              onchange="app.toggleNavTab('${t.id}')"
              style="width:19px;height:19px;accent-color:var(--ios-blue);cursor:${t.locked ? 'not-allowed' : 'pointer'};flex-shrink:0;"
            />
            <span style="font-size:20px;flex-shrink:0;">${this.escapeHTML(t.icon)}</span>
            <div style="flex:1;min-width:0;">
              <div style="display:flex;align-items:center;gap:6px;">
                <input
                  type="text"
                  value="${this.escapeHTML(t.label)}"
                  onchange="app.updateNavTabLabel('${t.id}', this.value)"
                  style="font-size:13.5px;font-weight:700;color:var(--ios-text);background:transparent;border:1px dashed var(--ios-separator);border-radius:6px;padding:2px 6px;width:96px;"
                  title="點擊可自訂下方顯示名稱"
                />
                ${
                  t.locked
                    ? '<span class="badge" style="font-size:10.5px;background:rgba(120,120,128,0.15);color:var(--ios-text-secondary);">🔒 必顯</span>'
                    : ''
                }
              </div>
              <div style="font-size:11.5px;color:var(--ios-text-secondary);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                ${this.escapeHTML(t.desc || '')}
              </div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:4px;flex-shrink:0;">
            <button
              class="mini-btn"
              style="padding:4px 8px;"
              ${idx === 0 ? 'disabled style="opacity:0.3;padding:4px 8px;"' : ''}
              onclick="app.moveNavTab(${idx}, -1)"
              title="往前移"
            >▲</button>
            <button
              class="mini-btn"
              style="padding:4px 8px;"
              ${idx === tabs.length - 1 ? 'disabled style="opacity:0.3;padding:4px 8px;"' : ''}
              onclick="app.moveNavTab(${idx}, 1)"
              title="往後移"
            >▼</button>
          </div>
        </div>
      `
      )
      .join('');
  }

  toggleNavTab(tabId) {
    const tab = this.state.navTabs.find((t) => t.id === tabId);
    if (!tab || tab.locked) return;

    const enabledCount = this.state.navTabs.filter((t) => !t.locked && t.enabled).length;
    if (tab.enabled && enabledCount <= 1) {
      this.showToast('⚠️ 除「設定」外，至少需保留 1 個顯示項目');
      this.renderNavCustomizer();
      return;
    }

    tab.enabled = !tab.enabled;
    this.saveState();
    this.renderTabBar();
    this.renderNavCustomizer();
    this.showToast(tab.enabled ? `✅ 已在下方導覽列顯示「${tab.label}」` : `🙈 已隱藏「${tab.label}」`);
  }

  moveNavTab(index, direction) {
    const tabs = this.state.navTabs;
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= tabs.length) return;
    const temp = tabs[index];
    tabs[index] = tabs[targetIndex];
    tabs[targetIndex] = temp;
    this.saveState();
    this.renderTabBar();
    this.renderNavCustomizer();
    this.showToast('↕️ 已更新下方導覽列順序');
  }

  updateNavTabLabel(tabId, newLabel) {
    const cleaned = (newLabel || '').trim();
    if (!cleaned) return;
    const tab = this.state.navTabs.find((t) => t.id === tabId);
    if (!tab) return;
    tab.label = cleaned.slice(0, 6);
    this.saveState();
    this.renderTabBar();
    this.renderNavCustomizer();
    this.showToast(`✏️ 已將導覽標籤更新為「${tab.label}」`);
  }

  applyNavPreset(preset) {
    this.state.navTabs = JSON.parse(JSON.stringify(DEFAULT_NAV_TABS));
    if (preset === 'manager') {
      const keep = new Set(['home', 'highlights', 'tasks', 'settings']);
      this.state.navTabs.forEach((t) => {
        if (!t.locked) t.enabled = keep.has(t.id);
      });
      this.showToast('👑 已套用「店務精簡版 (4項)」導覽列');
    } else if (preset === 'repair') {
      const keep = new Set(['home', 'repair', 'assistant', 'settings']);
      this.state.navTabs.forEach((t) => {
        if (!t.locked) t.enabled = keep.has(t.id);
      });
      this.showToast('🛠️ 已套用「維修櫃檯版 (4項)」導覽列');
    } else {
      this.showToast('🌟 已恢復「全部顯示 (6項)」導覽列');
    }
    this.saveState();
    this.renderTabBar();
    this.renderNavCustomizer();
  }

  updateHeaderBadge() {
    const badge = document.getElementById('header-store-badge');
    if (badge) {
      const storeName = this.state.settings.storeName || 'Q哥 門市';
      const managerName = this.state.settings.managerName || '店長';
      badge.textContent = `👑 ${storeName}・${managerName}`;
    }
  }

  getActiveAIEngineName() {
    const { aiProvider, geminiKey, openaiKey } = this.state.settings;
    if (aiProvider === 'builtin') return '內建店長引擎';
    if (aiProvider === 'gemini' && geminiKey.trim()) return 'Gemini AI 引擎';
    if (aiProvider === 'openai' && openaiKey.trim()) return 'OpenAI 引擎';
    if (aiProvider === 'auto') {
      if (geminiKey.trim()) return 'Gemini AI 引擎';
      if (openaiKey.trim()) return 'OpenAI 引擎';
    }
    return '內建店長智慧引擎';
  }

  updateAIModeBadge() {
    const badge = document.getElementById('home-ai-mode-badge');
    if (badge) badge.textContent = this.getActiveAIEngineName();
  }

  /* ================= HOME / DASHBOARD ================= */
  renderHome() {
    const pendingTasks = this.state.tasks.filter((t) => !t.completed);
    const highTasks = pendingTasks.filter((t) => t.priority === 'high');
    const totalTasks = this.state.tasks.length;
    const avgProgress = totalTasks
      ? Math.round(this.state.tasks.reduce((acc, t) => acc + (t.completed ? 100 : Number(t.progress || 0)), 0) / totalTasks)
      : 0;
    const pinnedHighlights = this.state.highlights.filter((h) => h.pinned);

    document.getElementById('stat-pending-tasks').textContent = pendingTasks.length;
    const highEl = document.getElementById('stat-high-tasks');
    if (highEl) highEl.textContent = highTasks.length;
    document.getElementById('stat-avg-progress').textContent = `${avgProgress}%`;
    document.getElementById('stat-highlights-count').textContent = this.state.highlights.length;

    const storeName = this.state.settings.storeName || 'Q哥 門市';
    const topHighlight = this.state.highlights[0];
    let briefingHTML = `<strong>${this.escapeHTML(storeName)}店長您好：</strong>目前門市有 <strong>${
      pendingTasks.length
    } 項待辦店務</strong>（含 <span style="color:var(--ios-red);font-weight:700;">${
      highTasks.length
    } 件急件/客訴維修追蹤</span>），今日店務執行率為 <strong>${avgProgress}%</strong>。`;
    if (topHighlight) {
      briefingHTML += `<br><br>📌 <strong>最新交接/店務重點：</strong>「${this.escapeHTML(topHighlight.title)}」${
        topHighlight.decision ? `<br>💡 <em>店長決策：${this.escapeHTML(topHighlight.decision)}</em>` : ''
      }`;
    }
    document.getElementById('home-ai-briefing').innerHTML = briefingHTML;

    // Render top 2 highlights on Home
    const homeHlContainer = document.getElementById('home-highlights-list');
    const previewHighlights = (pinnedHighlights.length ? pinnedHighlights : this.state.highlights).slice(0, 2);
    if (!previewHighlights.length) {
      homeHlContainer.innerHTML = `<div class="empty-state">尚無門市工作重點紀錄，可點擊上方「Q哥店長快速模板」立即建立！</div>`;
    } else {
      homeHlContainer.innerHTML = previewHighlights.map((h) => this.buildHighlightCardHTML(h, true)).join('');
    }

    // Render top 3 priority tasks on Home
    const homeTaskContainer = document.getElementById('home-tasks-list');
    const previewTasks = [...pendingTasks]
      .sort((a, b) => {
        const order = { high: 0, medium: 1, low: 2 };
        return (order[a.priority] ?? 1) - (order[b.priority] ?? 1);
      })
      .slice(0, 3);

    if (!previewTasks.length) {
      homeTaskContainer.innerHTML = `<div class="empty-state">🎉 太棒了！目前門市所有待辦與交接事項皆已完成。</div>`;
    } else {
      homeTaskContainer.innerHTML = previewTasks.map((t) => this.buildTaskItemHTML(t)).join('');
    }
  }

  speakBriefing() {
    const el = document.getElementById('home-ai-briefing');
    if (!el) return;
    this.speakText(el.innerText);
  }

  /* ================= WORK HIGHLIGHTS (工作重點紀錄) ================= */
  openHighlightWithTemplate(templateKey) {
    const tpl = STORE_TEMPLATES[templateKey];
    if (!tpl) return;
    const modal = document.getElementById('modal-highlight');
    document.getElementById('modal-highlight-title').textContent = '套用店長模板：新增重點';
    document.getElementById('hl-id').value = '';
    document.getElementById('hl-title').value = tpl.title;
    document.getElementById('hl-category').value = tpl.category;
    document.getElementById('hl-pinned').value = String(Boolean(tpl.pinned));
    document.getElementById('hl-points').value = tpl.points.map((p) => `• ${p}`).join('\n');
    document.getElementById('hl-decision').value = tpl.decision;
    document.getElementById('hl-action').value = tpl.actionItem;
    modal.classList.add('open');
    this.showToast(`⚡ 已帶入「${tpl.category}」店長專屬模板`);
  }

  setHighlightFilter(filter) {
    this.highlightFilter = filter;
    const buttons = document.querySelectorAll('#highlight-filter-segments [data-hl-filter]');
    buttons.forEach((btn) => {
      const val = btn.getAttribute('data-hl-filter');
      if (val === filter) {
        btn.style.background = 'var(--ios-blue)';
        btn.style.color = '#fff';
      } else {
        btn.style.background = 'var(--ios-card)';
        btn.style.color = 'var(--ios-text)';
      }
    });
    this.renderHighlights();
  }

  buildHighlightCardHTML(h, compact = false) {
    const pointsHTML = (h.points || [])
      .slice(0, compact ? 2 : 12)
      .map((pt) => `<li>${this.escapeHTML(pt)}</li>`)
      .join('');

    return `
      <div class="highlight-card ${h.pinned ? 'pinned' : ''}">
        <div class="highlight-header">
          <div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;flex-wrap:wrap;">
              <span class="badge badge-category">${this.escapeHTML(h.category || '門市重點')}</span>
              <span class="badge badge-date">${this.escapeHTML(h.createdAt || '剛剛')}</span>
              ${h.pinned ? '<span class="badge" style="background:rgba(255,107,0,0.15);color:#ff6b00;">📌 核心交接重點</span>' : ''}
            </div>
            <div class="highlight-title">${this.escapeHTML(h.title)}</div>
          </div>
          <button class="task-actions-btn" onclick="app.togglePinHighlight('${h.id}')" title="切換釘選">
            ${h.pinned ? '📌' : '📍'}
          </button>
        </div>

        <ul class="highlight-points">
          ${pointsHTML}
        </ul>

        ${
          h.decision
            ? `<div class="highlight-decision-box"><strong>💡 店長決策/交接結論：</strong>${this.escapeHTML(h.decision)}</div>`
            : ''
        }

        <div class="highlight-action-box">
          <div style="font-size:12px;color:var(--ios-text-secondary);flex:1;">
            ${
              h.actionItem
                ? `<strong>🚀 下一步店務行動：</strong>${this.escapeHTML(h.actionItem)}`
                : '<span>尚無綁定下一步待辦</span>'
            }
          </div>
          <div style="display:flex;gap:6px;">
            ${
              h.actionItem && !h.actionConverted
                ? `<button class="mini-btn" onclick="app.convertHighlightActionToTask('${h.id}')">⚡ 轉為店務待辦</button>`
                : h.actionConverted
                ? `<span class="badge" style="background:rgba(52,199,89,0.15);color:var(--ios-green);">✓ 已轉待辦</span>`
                : ''
            }
            <button class="mini-btn" onclick="app.copySingleHighlight('${h.id}')">📋 複製</button>
            <button class="mini-btn" onclick="app.openHighlightModal('${h.id}')">編輯</button>
            ${
              !compact
                ? `<button class="mini-btn danger" onclick="app.deleteHighlight('${h.id}')">刪除</button>`
                : ''
            }
          </div>
        </div>
      </div>
    `;
  }

  renderHighlights() {
    const container = document.getElementById('highlights-list-container');
    if (!container) return;
    const query = (document.getElementById('highlight-search')?.value || '').trim().toLowerCase();

    const filtered = this.state.highlights.filter((h) => {
      if (this.highlightFilter === 'pinned' && !h.pinned) return false;
      if (this.highlightFilter !== 'all' && this.highlightFilter !== 'pinned' && h.category !== this.highlightFilter) {
        return false;
      }
      if (query) {
        const hay = `${h.title} ${h.category} ${(h.points || []).join(' ')} ${h.decision || ''} ${h.actionItem || ''}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });

    if (!filtered.length) {
      container.innerHTML = `<div class="empty-state">找不到符合條件的門市工作重點紀錄。</div>`;
      return;
    }

    container.innerHTML = filtered.map((h) => this.buildHighlightCardHTML(h, false)).join('');
  }

  togglePinHighlight(id) {
    const item = this.state.highlights.find((h) => h.id === id);
    if (!item) return;
    item.pinned = !item.pinned;
    this.saveState();
    this.renderAll();
    this.showToast(item.pinned ? '📌 已釘選至門市核心重點' : '已取消釘選');
  }

  convertHighlightActionToTask(id) {
    const item = this.state.highlights.find((h) => h.id === id);
    if (!item || !item.actionItem) return;

    let taskCategory = '店務營運與結帳';
    if (item.category.includes('維修') || item.category.includes('客訴')) taskCategory = '維修與客訴追蹤';
    else if (item.category.includes('二手機') || item.category.includes('庫存')) taskCategory = '盤點與叫貨調度';
    else if (item.category.includes('交接') || item.category.includes('人事')) taskCategory = '人員排班與訓練';
    else if (item.category.includes('總部')) taskCategory = '總部回報事項';

    const newTask = {
      id: 'task-' + Date.now(),
      title: item.actionItem,
      priority: 'high',
      category: taskCategory,
      due: '今日交接前',
      progress: 0,
      completed: false,
      notes: `轉自店務工作重點：「${item.title}」`
    };
    this.state.tasks.unshift(newTask);
    item.actionConverted = true;
    this.saveState();
    this.renderAll();
    this.showToast('⚡ 已將下一步行動加入「急件店務待辦」！');
  }

  copySingleHighlight(id) {
    const h = this.state.highlights.find((item) => item.id === id);
    if (!h) return;
    const storeName = this.state.settings.storeName || 'Q哥 門市';
    const text = [
      `👑【${storeName}・${h.category}】${h.title} (${h.createdAt})`,
      ...(h.points || []).map((p) => `• ${p}`),
      h.decision ? `💡 店長決策/結論：${h.decision}` : '',
      h.actionItem ? `🚀 下一步行動：${h.actionItem}` : ''
    ]
      .filter(Boolean)
      .join('\n');

    navigator.clipboard?.writeText(text);
    this.showToast('📋 已複製該篇店務重點，可直接貼至門市群組！');
  }

  deleteHighlight(id) {
    this.state.highlights = this.state.highlights.filter((h) => h.id !== id);
    this.saveState();
    this.renderAll();
    this.showToast('🗑️ 已刪除該筆工作重點');
  }

  openHighlightModal(editId = null) {
    const modal = document.getElementById('modal-highlight');
    const titleEl = document.getElementById('modal-highlight-title');
    if (editId) {
      const h = this.state.highlights.find((x) => x.id === editId);
      if (!h) return;
      titleEl.textContent = '編輯門市工作重點';
      document.getElementById('hl-id').value = h.id;
      document.getElementById('hl-title').value = h.title;
      document.getElementById('hl-category').value = h.category || '門市業績與促銷';
      document.getElementById('hl-pinned').value = String(Boolean(h.pinned));
      document.getElementById('hl-points').value = (h.points || []).join('\n');
      document.getElementById('hl-decision').value = h.decision || '';
      document.getElementById('hl-action').value = h.actionItem || '';
    } else {
      titleEl.textContent = '新增門市工作重點';
      document.getElementById('hl-id').value = '';
      document.getElementById('hl-title').value = '';
      document.getElementById('hl-category').value = '門市業績與促銷';
      document.getElementById('hl-pinned').value = 'true';
      document.getElementById('hl-points').value = '';
      document.getElementById('hl-decision').value = '';
      document.getElementById('hl-action').value = '';
    }
    modal.classList.add('open');
  }

  saveHighlightFromModal() {
    const id = document.getElementById('hl-id').value;
    const title = document.getElementById('hl-title').value.trim();
    const category = document.getElementById('hl-category').value;
    const pinned = document.getElementById('hl-pinned').value === 'true';
    const rawPoints = document.getElementById('hl-points').value.trim();
    const decision = document.getElementById('hl-decision').value.trim();
    const actionItem = document.getElementById('hl-action').value.trim();

    if (!title || !rawPoints) {
      this.showToast('⚠️ 請填寫重點標題與至少一項核心內容');
      return;
    }

    const points = rawPoints
      .split(/\n+/)
      .map((s) => s.replace(/^[•\-\*]\s*/, '').trim())
      .filter(Boolean);

    if (id) {
      const existing = this.state.highlights.find((h) => h.id === id);
      if (existing) {
        existing.title = title;
        existing.category = category;
        existing.pinned = pinned;
        existing.points = points;
        existing.decision = decision;
        existing.actionItem = actionItem;
      }
    } else {
      const now = new Date();
      const timeStr = `今日 ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      this.state.highlights.unshift({
        id: 'hl-' + Date.now(),
        title,
        category,
        pinned,
        createdAt: timeStr,
        points,
        decision,
        actionItem,
        actionConverted: false
      });
    }

    this.saveState();
    this.closeModal('modal-highlight');
    this.renderAll();
    this.showToast('✅ 已儲存門市工作重點！');
  }

  /* Smart Extract Raw Note into Q哥 Store Highlight */
  async smartExtractHighlight() {
    const textarea = document.getElementById('quick-highlight-raw');
    const raw = (textarea?.value || '').trim();
    if (!raw) {
      this.showToast('⚠️ 請先輸入或語音口述一段門市工作內容');
      return;
    }

    const parsed = this.parseRawTextToHighlight(raw);
    this.state.highlights.unshift(parsed);
    textarea.value = '';
    this.saveState();
    this.renderAll();
    this.showToast(`✨ 已自動歸類至【${parsed.category}】並提煉決策與行動！`);
  }

  parseRawTextToHighlight(rawText) {
    const cleaned = rawText
      .replace(/^(幫我記錄工作重點|記錄工作重點|幫我記錄早會重點|記錄早會重點|工作重點|記重點)[：:，,\s]*/i, '')
      .trim();
    const clauses = cleaned
      .split(/[。；;\n]+/)
      .map((s) => s.trim())
      .filter(Boolean);

    // Smart Q哥 Store Category Detection
    let category = '門市業績與促銷';
    if (/維修|客訴|換電池|螢幕|主機板|保固|工程師|返修|報價/.test(cleaned)) {
      category = '維修與客訴處理';
    } else if (/二手機|收購|盤點|庫存|料件|展示機|調貨|切結書|IMEI/i.test(cleaned)) {
      category = '二手機收購與庫存';
    } else if (/早會|晚班|交接|排班|話術|新人|同仁|訓練|遲到/.test(cleaned)) {
      category = '早晚班交接與人事';
    } else if (/總部|區經理|公告|月會|週會|政策/.test(cleaned)) {
      category = '總部會議與公告';
    }

    let decision = '';
    let actionItem = '';
    const points = [];

    clauses.forEach((clause) => {
      const subParts = clause.split(/[，,]/).map((s) => s.trim()).filter(Boolean);
      subParts.forEach((part) => {
        if (/^(決議|決定|結論|確定|拍板|規定|要求)/.test(part) && !decision) {
          decision = part.replace(/^(決議|決定|結論)[：:\s]*/, '');
        } else if (/^(下一步|後續|待辦|需要|需在|預計|晚班前|打烊前|抽查)/.test(part) && !actionItem) {
          actionItem = part.replace(/^(下一步|後續|待辦)[：:\s]*/, '');
        }
      });
      points.push(clause);
    });

    const firstSegment = (clauses[0] || cleaned).split(/[，,]/)[0].trim();
    const title = firstSegment.length > 24 ? firstSegment.slice(0, 24) + '...' : firstSegment || '門市重點速記';

    const now = new Date();
    const timeStr = `今日 ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    return {
      id: 'hl-' + Date.now(),
      title,
      category,
      pinned: true,
      createdAt: timeStr,
      points: points.length ? points : [cleaned],
      decision,
      actionItem,
      actionConverted: false
    };
  }

  /* ================= TASKS (店務待辦事項追蹤) ================= */
  setTaskFilter(filter) {
    this.taskFilter = filter;
    const buttons = document.querySelectorAll('#task-filter-segments .segment-btn');
    buttons.forEach((btn) => {
      const txt = btn.textContent;
      const isMatch =
        (filter === 'all' && txt === '全部') ||
        (filter === 'active' && txt === '進行中') ||
        (filter === 'high' && txt.includes('高優先')) ||
        (filter === 'completed' && txt.includes('已完成'));
      btn.classList.toggle('active', isMatch);
    });
    this.renderTasks();
  }

  buildTaskItemHTML(t) {
    const priorityMap = {
      high: { label: '🔴 急件/高優先', cls: 'badge-high' },
      medium: { label: '🟠 中優先', cls: 'badge-medium' },
      low: { label: '🔵 例行店務', cls: 'badge-low' }
    };
    const pInfo = priorityMap[t.priority] || priorityMap.medium;
    const pct = t.completed ? 100 : Number(t.progress || 0);

    return `
      <div class="task-item ${t.completed ? 'completed' : ''}">
        <div class="task-main-row">
          <button class="ios-checkbox" onclick="app.toggleTaskComplete('${t.id}')" title="完成勾選">✓</button>
          <div class="task-body">
            <div class="task-title">${this.escapeHTML(t.title)}</div>
            ${t.notes ? `<div class="task-notes">${this.escapeHTML(t.notes)}</div>` : ''}
            <div class="task-meta">
              <span class="badge ${pInfo.cls}">${pInfo.label}</span>
              <span class="badge badge-category">${this.escapeHTML(t.category || '店務營運與結帳')}</span>
              ${t.due ? `<span class="badge badge-date">⏰ ${this.escapeHTML(t.due)}</span>` : ''}
            </div>
          </div>
          <div style="display:flex;gap:4px;">
            <button class="task-actions-btn" onclick="app.openTaskModal('${t.id}')" title="編輯">✏️</button>
            <button class="task-actions-btn" onclick="app.deleteTask('${t.id}')" title="刪除">🗑️</button>
          </div>
        </div>
        <div class="task-progress-row">
          <span style="font-size:11px;color:var(--ios-text-tertiary);">店務進度</span>
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            value="${pct}"
            oninput="app.updateTaskProgress('${t.id}', this.value)"
          />
          <span class="task-progress-label">${pct}%</span>
        </div>
      </div>
    `;
  }

  renderTasks() {
    const container = document.getElementById('tasks-list-container');
    if (!container) return;
    const query = (document.getElementById('task-search')?.value || '').trim().toLowerCase();

    const filtered = this.state.tasks.filter((t) => {
      if (this.taskFilter === 'active' && t.completed) return false;
      if (this.taskFilter === 'high' && (t.priority !== 'high' || t.completed)) return false;
      if (this.taskFilter === 'completed' && !t.completed) return false;
      if (query) {
        const hay = `${t.title} ${t.notes || ''} ${t.category || ''}`.toLowerCase();
        if (!hay.includes(query)) return false;
      }
      return true;
    });

    if (!filtered.length) {
      container.innerHTML = `<div class="empty-state">目前沒有符合篩選條件的店務待辦事項。</div>`;
      return;
    }

    container.innerHTML = filtered.map((t) => this.buildTaskItemHTML(t)).join('');
  }

  toggleTaskComplete(id) {
    const t = this.state.tasks.find((x) => x.id === id);
    if (!t) return;
    t.completed = !t.completed;
    t.progress = t.completed ? 100 : Math.min(t.progress || 0, 90);
    this.saveState();
    this.renderAll();
    this.showToast(t.completed ? '🎉 已完成該項店務！' : '已將店務設為進行中');
  }

  updateTaskProgress(id, value) {
    const t = this.state.tasks.find((x) => x.id === id);
    if (!t) return;
    const pct = Number(value);
    t.progress = pct;
    t.completed = pct >= 100;
    this.saveState();
    this.renderAll();
  }

  deleteTask(id) {
    this.state.tasks = this.state.tasks.filter((t) => t.id !== id);
    this.saveState();
    this.renderAll();
    this.showToast('🗑️ 已刪除該筆店務待辦');
  }

  openTaskModal(editId = null) {
    const modal = document.getElementById('modal-task');
    const titleEl = document.getElementById('modal-task-title');
    if (editId) {
      const t = this.state.tasks.find((x) => x.id === editId);
      if (!t) return;
      titleEl.textContent = '編輯店務待辦任務';
      document.getElementById('task-id').value = t.id;
      document.getElementById('task-title-input').value = t.title;
      document.getElementById('task-priority-input').value = t.priority || 'medium';
      document.getElementById('task-category-input').value = t.category || '店務營運與結帳';
      document.getElementById('task-due-input').value = t.due || '';
      document.getElementById('task-progress-input').value = t.progress ?? 0;
      document.getElementById('task-notes-input').value = t.notes || '';
    } else {
      titleEl.textContent = '新增店務待辦任務';
      document.getElementById('task-id').value = '';
      document.getElementById('task-title-input').value = '';
      document.getElementById('task-priority-input').value = 'high';
      document.getElementById('task-category-input').value = '維修與客訴追蹤';
      document.getElementById('task-due-input').value = '今日晚班交接前';
      document.getElementById('task-progress-input').value = 0;
      document.getElementById('task-notes-input').value = '';
    }
    modal.classList.add('open');
  }

  saveTaskFromModal() {
    const id = document.getElementById('task-id').value;
    const title = document.getElementById('task-title-input').value.trim();
    const priority = document.getElementById('task-priority-input').value;
    const category = document.getElementById('task-category-input').value;
    const due = document.getElementById('task-due-input').value.trim();
    const progress = Math.min(100, Math.max(0, Number(document.getElementById('task-progress-input').value || 0)));
    const notes = document.getElementById('task-notes-input').value.trim();

    if (!title) {
      this.showToast('⚠️ 請輸入店務任務名稱');
      return;
    }

    if (id) {
      const existing = this.state.tasks.find((t) => t.id === id);
      if (existing) {
        existing.title = title;
        existing.priority = priority;
        existing.category = category;
        existing.due = due;
        existing.progress = progress;
        existing.completed = progress >= 100;
        existing.notes = notes;
      }
    } else {
      this.state.tasks.unshift({
        id: 'task-' + Date.now(),
        title,
        priority,
        category,
        due: due || '今日交接前',
        progress,
        completed: progress >= 100,
        notes
      });
    }

    this.saveState();
    this.closeModal('modal-task');
    this.renderAll();
    this.showToast('✅ 已儲存店務待辦任務！');
  }

  /* ================= AI STORE MANAGER ASSISTANT & VOICE ================= */
  renderChat() {
    const container = document.getElementById('chat-messages');
    if (!container) return;

    container.innerHTML = this.state.messages
      .map(
        (m) => `
      <div class="msg-row ${m.role}">
        <div class="msg-bubble">${this.formatMessageHTML(m.text)}</div>
        ${m.actionBadge ? `<div class="msg-action-card">✨ ${this.escapeHTML(m.actionBadge)}</div>` : ''}
        <div class="msg-meta">
          <span>${m.role === 'user' ? '店長' : 'Q哥店長 AI 幕僚'}</span>
          <span>•</span>
          <span>${this.escapeHTML(m.time || '剛剛')}</span>
          ${
            m.role === 'assistant'
              ? `<button style="border:none;background:none;color:var(--ios-blue);cursor:pointer;font-size:11px;" onclick="app.speakText(${JSON.stringify(
                  m.text
                ).replace(/"/g, '&quot;')})">🔊 朗讀</button>`
              : ''
          }
        </div>
      </div>
    `
      )
      .join('');

    this.scrollChatToBottom();
  }

  scrollChatToBottom() {
    const container = document.getElementById('chat-messages');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }

  sendQuickPrompt(text) {
    this.switchTab('assistant');
    const input = document.getElementById('chat-input');
    if (input) {
      input.value = text;
      this.handleSendChat();
    }
  }

  async handleSendChat() {
    const input = document.getElementById('chat-input');
    const text = (input?.value || '').trim();
    if (!text) return;
    input.value = '';

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    this.state.messages.push({
      id: 'msg-' + Date.now(),
      role: 'user',
      text,
      time: timeStr
    });
    this.saveState();
    this.renderChat();

    // Direct store manager command detection
    let localActionBadge = '';
    if (/(記錄工作重點|記工作重點|記錄早會重點|記錄店務重點|新增工作重點|記重點|會議重點)/.test(text)) {
      const hl = this.parseRawTextToHighlight(text);
      this.state.highlights.unshift(hl);
      localActionBadge = `已歸檔至【${hl.category}】：「${hl.title}」`;
    } else if (/(新增待辦|新增高優先待辦|新增任務|提醒我|加入待辦)/.test(text)) {
      const cleanedTask = text
        .replace(/^.*?(新增高優先待辦|新增待辦|新增任務|提醒我|加入待辦)[：:，,\s]*/i, '')
        .trim();
      const isHigh = /高優先|急件|緊急|客訴|VIP/i.test(text);
      let taskCategory = '店務營運與結帳';
      if (/維修|客訴|報價|回電|主機板|電池|螢幕/.test(text)) taskCategory = '維修與客訴追蹤';
      else if (/盤點|二手機|庫存|叫貨|調貨/.test(text)) taskCategory = '盤點與叫貨調度';
      else if (/排班|早會|晚班|話術|新人/.test(text)) taskCategory = '人員排班與訓練';

      const newTask = {
        id: 'task-' + Date.now(),
        title: cleanedTask || text,
        priority: isHigh ? 'high' : 'medium',
        category: taskCategory,
        due: /明天/.test(text) ? '明日交接前' : '今日晚班前',
        progress: 0,
        completed: false,
        notes: '由店長語音/對話助理快速建立'
      };
      this.state.tasks.unshift(newTask);
      localActionBadge = `已新增【${taskCategory}】待辦：「${newTask.title}」`;
    }

    const replyText = await this.generateAIResponse(text, localActionBadge);

    this.state.messages.push({
      id: 'msg-' + (Date.now() + 1),
      role: 'assistant',
      text: replyText,
      time: timeStr,
      actionBadge: localActionBadge
    });

    this.saveState();
    this.renderAll();

    if (this.state.settings.ttsEnabled) {
      this.speakText(replyText);
    }
  }

  async generateAIResponse(userText, localActionBadge) {
    const { storeName, managerName, aiProvider, geminiKey, geminiModel, openaiKey, openaiModel } = this.state.settings;
    const useGemini =
      (aiProvider === 'gemini' || (aiProvider === 'auto' && geminiKey.trim())) && geminiKey.trim().length > 5;
    const useOpenAI =
      !useGemini &&
      (aiProvider === 'openai' || (aiProvider === 'auto' && openaiKey.trim())) &&
      openaiKey.trim().length > 5;

    const contextSummary = this.buildWorkspaceContextForLLM();
    const systemPrompt = `你是台灣知名 3C 連鎖品牌「Q哥」（專營 iPhone/手機現場維修、二手機高價收購與買賣、新機門號銷售、保護貼包膜配件）的專屬「門市店長 AI 幕僚」。使用者是「${
      storeName || 'Q哥門市'
    }」的「${
      managerName || '店長'
    }」。請一律使用繁體中文（台灣）回答，熟悉門市早晚班交接、二手機收購盤點、維修客訴追蹤、配件搭售毛利與回報區經理的實務需求，條理分明、專業貼心。`;

    if (useGemini) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${
          geminiModel || 'gemini-2.5-flash'
        }:generateContent?key=${encodeURIComponent(geminiKey.trim())}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text: `${systemPrompt}\n\n【目前門市工作資料庫】\n${contextSummary}\n\n${
                      localActionBadge ? `【系統已自動執行】：${localActionBadge}\n\n` : ''
                    }【店長指令】：${userText}`
                  }
                ]
              }
            ]
          })
        });
        const data = await res.json();
        const candidate = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (candidate) return candidate.trim();
      } catch (err) {
        console.warn('Gemini API fallback to builtin:', err);
      }
    }

    if (useOpenAI) {
      try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openaiKey.trim()}`
          },
          body: JSON.stringify({
            model: openaiModel || 'gpt-4o-mini',
            messages: [
              {
                role: 'system',
                content: `${systemPrompt}\n\n目前門市工作資料：\n${contextSummary}`
              },
              { role: 'user', content: userText }
            ]
          })
        });
        const data = await res.json();
        const reply = data?.choices?.[0]?.message?.content;
        if (reply) return reply.trim();
      } catch (err) {
        console.warn('OpenAI API fallback to builtin:', err);
      }
    }

    return this.generateBuiltinSmartReply(userText, localActionBadge);
  }

  buildWorkspaceContextForLLM() {
    const tasksText = this.state.tasks
      .map(
        (t) =>
          `- [${t.completed ? '已完成' : `進行中 ${t.progress}%`}] (${t.category} / ${t.priority}) ${t.title} (期限:${t.due})`
      )
      .join('\n');
    const hlText = this.state.highlights
      .map(
        (h) =>
          `- 【${h.category}】${h.title}：${(h.points || []).join('；')} | 決策：${h.decision || '無'} | 下一步：${
            h.actionItem || '無'
          }`
      )
      .join('\n');
    return `門市待辦事項：\n${tasksText || '無'}\n\n門市工作重點紀錄：\n${hlText || '無'}`;
  }

  generateBuiltinSmartReply(userText, localActionBadge) {
    if (localActionBadge && localActionBadge.includes('已歸檔至')) {
      const latest = this.state.highlights[0];
      return `報告店長！我已經幫您將這筆店務重點結構化並歸檔至 **「${latest.category}」** 📌\n\n**重點標題**：${
        latest.title
      }\n**重點條列**：\n${latest.points.map((p) => `• ${p}`).join('\n')}${
        latest.decision ? `\n💡 **店長決策**：${latest.decision}` : ''
      }${
        latest.actionItem
          ? `\n🚀 **下一步店務行動**：${latest.actionItem}\n（可於「工作重點」頁面點擊 **⚡ 轉為店務待辦** 交辦執行）`
          : ''
      }`;
    }

    if (localActionBadge && localActionBadge.includes('待辦')) {
      const latestTask = this.state.tasks[0];
      return `報告店長！已為您新增門市待辦事項 ✅\n\n• **店務內容**：${latestTask.title}\n• **分類**：${
        latestTask.category
      }\n• **優先級**：${
        latestTask.priority === 'high' ? '🔴 急件 / 高優先' : '🟠 中優先'
      }\n• **預計期限**：${latestTask.due}`;
    }

    if (/(日報|週報|交接|回報|區經理|群組|整理|總結)/.test(userText)) {
      return this.generateLineReport();
    }

    if (
      /(panic|prs0|pr00|tg0b|tg0v|mic1|mic2|mic4|thermalmonitord|aop|nand|nvme|baseband|i2c|重啟|重開機|白蘋果|無服務|白屏|綠屏|未知部件|face\s*id|泡水|進水)/i.test(
        userText
      )
    ) {
      const diag = this.getPanicDiagnosticMatch(userText, 'iPhone 門市檢測機');
      return `🛠️ **【Q哥 iOS 維修專用 AI 診斷報告】**\n\n🚨 **故障判讀**：${diag.code}\n🎯 **鎖定部位**：${
        diag.part
      }\n📊 **完修評估**：${diag.probability}\n\n🔧 **工程師排查 SOP**：\n${diag.sop.join(
        '\n'
      )}\n\n💬 **店長對客報價話術**：\n${diag.script}\n\n💰 **完修搭售建議**：${diag.upsell}`;
    }

    if (/(高優先|急件|待辦|客訴|維修|盤點|未完成)/.test(userText)) {
      const pending = this.state.tasks.filter((t) => !t.completed);
      const high = pending.filter((t) => t.priority === 'high');
      if (!pending.length) {
        return '🎉 報告店長，目前門市所有待辦店務與維修追蹤皆已結案！';
      }
      return `報告店長，為您盤點目前門市 **${pending.length} 項未完成店務**（含 **${
        high.length
      } 件急件/高優先**）：\n\n${pending
        .map(
          (t, i) =>
            `${i + 1}. ${t.priority === 'high' ? '🔴' : '🟠'} **【${t.category}】${t.title}**（進度 ${
              t.progress
            }%｜期限：${t.due}）`
        )
        .join('\n')}\n\n💡 **店務建議**：建議優先處理「${
        (high[0] || pending[0]).title
      }」，確保客訴滿意度與晚班交接順暢！`;
    }

    return `收到您的指令：「${userText}」👑\n\n目前門市共有 **${
      this.state.highlights.length
    } 筆店務工作重點** 與 **${
      this.state.tasks.filter((t) => !t.completed).length
    } 項進行中待辦**。\n\n店長您可以直接對我說：\n• 「幫我記錄早會重點：今日主推二手機搭保護貼套餐，決議每筆維修主動做電池健檢，下一步晚班前抽查話術」\n• 「幫我新增高優先待辦：17:30 前回電 VIP 王先生確認 iPhone 15 Pro Max 主機板維修報價」\n• 「請幫我產出給區經理與門市群組的 LINE 交接日報」`;
  }

  clearChatHistory() {
    this.state.messages = [DEFAULT_DATA.messages[0]];
    this.saveState();
    this.renderChat();
    this.showToast('🧹 已重置店長助理對話紀錄');
  }

  /* ================= SPEECH RECOGNITION & TTS ================= */
  setupSpeechRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) return;

    this.recognition = new SpeechRec();
    this.recognition.lang = 'zh-TW';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.recognition.onstart = () => {
      this.isListening = true;
      document.getElementById('dynamic-island')?.classList.add('voice-active');
      document.getElementById('btn-chat-voice')?.classList.add('listening');
      this.showToast('🎙️ 店長請開始說話（支援繁體中文店務語音辨識）...');
    };

    this.recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript || '';
      if (!transcript) return;
      if (this.voiceTarget === 'quickHighlight') {
        const box = document.getElementById('quick-highlight-raw');
        if (box) box.value = (box.value ? box.value + '；' : '') + transcript;
        this.showToast('✨ 已將語音轉為文字，點擊「AI 自動提煉店務重點」即可存檔！');
      } else if (this.voiceTarget === 'repair') {
        const box = document.getElementById('panic-log-input');
        if (box) {
          box.value = transcript;
          this.analyzeRepairIssue();
        }
      } else {
        const input = document.getElementById('chat-input');
        if (input) {
          input.value = transcript;
          this.handleSendChat();
        }
      }
    };

    this.recognition.onerror = () => {
      this.stopVoiceUI();
      this.showToast('⚠️ 語音辨識未偵測到聲音或麥克風權限未開啟');
    };

    this.recognition.onend = () => {
      this.stopVoiceUI();
    };
  }

  stopVoiceUI() {
    this.isListening = false;
    document.getElementById('dynamic-island')?.classList.remove('voice-active');
    document.getElementById('btn-chat-voice')?.classList.remove('listening');
  }

  toggleVoiceInput(target = 'chat') {
    this.voiceTarget = target;
    if (!this.recognition) {
      this.showToast('💡 您可使用 Safari / Chrome 語音辨識，或直接點擊 iPhone 鍵盤右下角麥克風聽寫');
      return;
    }
    if (this.isListening) {
      this.recognition.stop();
    } else {
      try {
        this.recognition.start();
      } catch (e) {
        this.recognition.stop();
      }
    }
  }

  speakText(text) {
    if (!('speechSynthesis' in window)) {
      this.showToast('⚠️ 此裝置不支援語音朗讀');
      return;
    }
    window.speechSynthesis.cancel();
    const clean = text.replace(/[*#_`~>-]/g, '');
    const utter = new SpeechSynthesisUtterance(clean);
    utter.lang = 'zh-TW';
    utter.rate = 1.05;

    const island = document.getElementById('dynamic-island');
    const statusText = document.getElementById('island-status-text');
    utter.onstart = () => {
      if (statusText) statusText.textContent = '播報店務中...';
      island?.classList.add('voice-active');
    };
    utter.onend = () => {
      if (statusText) statusText.textContent = '店長語音助理...';
      island?.classList.remove('voice-active');
    };
    window.speechSynthesis.speak(utter);
  }

  /* ================= Q哥 iOS REPAIR AI & PANIC LOG ANALYZER ================= */
  getDeviceModels() {
    if (!Array.isArray(this.state.deviceModels) || !this.state.deviceModels.length) {
      this.state.deviceModels = JSON.parse(JSON.stringify(DEFAULT_DEVICE_MODELS));
    }
    return this.state.deviceModels;
  }

  getSelectedModelObj(deviceName) {
    const models = this.getDeviceModels();
    const target = deviceName || document.getElementById('repair-device-model')?.value;
    return models.find((m) => m.name === target) || models[0];
  }

  renderRepairDeviceModels(selectedValue = null) {
    const sel = document.getElementById('repair-device-model');
    if (!sel) return;
    const currentVal = selectedValue || sel.value || 'iPhone 16 Pro / 16 Pro Max';
    const models = this.getDeviceModels();

    const groups = {};
    models.forEach((m) => {
      const g = m.isCustom ? '⭐ 門市自訂新增機型' : m.group || '其他 Apple 機型';
      if (!groups[g]) groups[g] = [];
      groups[g].push(m);
    });

    sel.innerHTML = Object.entries(groups)
      .map(
        ([groupName, items]) => `
        <optgroup label="${this.escapeHTML(groupName)}">
          ${items
            .map(
              (item) =>
                `<option value="${this.escapeHTML(item.name)}" ${
                  item.name === currentVal ? 'selected' : ''
                }>${this.escapeHTML(item.name)}</option>`
            )
            .join('')}
        </optgroup>
      `
      )
      .join('');

    this.updateModelKnownIssueBanner();
  }

  updateModelKnownIssueBanner() {
    const banner = document.getElementById('model-known-issue-banner');
    if (!banner) return;
    const modelObj = this.getSelectedModelObj();
    if (modelObj && modelObj.notes) {
      banner.style.display = 'block';
      banner.innerHTML = `<strong>💡 【${this.escapeHTML(modelObj.name)}】門市通病與拆修提醒：</strong>${this.escapeHTML(
        modelObj.notes
      )}`;
    } else {
      banner.style.display = 'none';
    }
  }

  onRepairModelChange() {
    this.updateModelKnownIssueBanner();
    const modelObj = this.getSelectedModelObj();
    if (this._lastDiag && modelObj) {
      this._lastDiag.device = modelObj.name;
      this.renderDiagnosticCard(this._lastDiag);
    }
    if (modelObj) {
      this.showToast(`📱 已切換檢測機型：${modelObj.name}`);
    }
  }

  openAddModelModal() {
    const modal = document.getElementById('modal-add-model');
    if (!modal) return;
    const nameEl = document.getElementById('new-model-name');
    const notesEl = document.getElementById('new-model-notes');
    if (nameEl) nameEl.value = '';
    if (notesEl) notesEl.value = '';
    this.renderCustomModelsManageList();
    modal.classList.add('open');
  }

  renderCustomModelsManageList() {
    const container = document.getElementById('custom-models-manage-list');
    if (!container) return;
    const models = this.getDeviceModels();
    const customList = models.filter((m) => m.isCustom);

    if (!customList.length) {
      container.innerHTML = `<div style="font-size:12px;color:var(--ios-text-secondary);padding:8px 10px;background:var(--ios-bg);border-radius:10px;">目前尚無自訂新增機型（系統已內建 ${models.length} 款全世代 iPhone / iPad 機型，您可隨時在此無限擴充新機型！）</div>`;
      return;
    }

    container.innerHTML = customList
      .map(
        (m) => `
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 10px;background:var(--ios-bg);border:1px solid var(--ios-separator);border-radius:10px;">
          <div style="min-width:0;flex:1;">
            <div style="font-size:13px;font-weight:700;color:var(--ios-text);">⭐ ${this.escapeHTML(m.name)} <span class="badge" style="font-size:10px;">${this.escapeHTML(m.group)}</span></div>
            <div style="font-size:11.5px;color:var(--ios-text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${this.escapeHTML(
              m.notes || '無特別備註'
            )}</div>
          </div>
          <button class="mini-btn danger" onclick="app.deleteCustomModel('${this.escapeHTML(m.name)}')">刪除</button>
        </div>
      `
      )
      .join('');
  }

  saveNewDeviceModel() {
    const nameInput = document.getElementById('new-model-name');
    const groupInput = document.getElementById('new-model-group');
    const notesInput = document.getElementById('new-model-notes');

    const name = (nameInput?.value || '').trim();
    const group = groupInput?.value || '自訂新款 iPhone 系列';
    const notes =
      (notesInput?.value || '').trim() ||
      '門市自訂機型：拆修前請先檢測全機功能（Face ID、原彩、氣密防水膠與電池健康度），並調閱最新 panic-full 日誌。';

    if (!name) {
      this.showToast('⚠️ 請輸入要新增的 iPhone 或 iPad 機型名稱');
      return;
    }

    const models = this.getDeviceModels();
    const existing = models.find((m) => m.name.toLowerCase() === name.toLowerCase());
    if (existing) {
      existing.group = group;
      existing.notes = notes;
      existing.isCustom = true;
    } else {
      models.unshift({
        name,
        group,
        notes,
        isCustom: true
      });
    }

    this.saveState();
    this.renderRepairDeviceModels(name);
    this.renderCustomModelsManageList();
    this.onRepairModelChange();
    this.closeModals();
    this.showToast(`✅ 已成功新增並切換至「${name}」！`);
  }

  deleteCustomModel(modelName) {
    this.state.deviceModels = this.getDeviceModels().filter((m) => !(m.isCustom && m.name === modelName));
    this.saveState();
    this.renderRepairDeviceModels();
    this.renderCustomModelsManageList();
    this.showToast(`🗑️ 已移除自訂機型「${modelName}」`);
  }

  initRepairViewIfEmpty() {
    this.renderRepairDeviceModels();
    const out = document.getElementById('repair-diag-output');
    if (out && !out.innerHTML.trim()) {
      this.TriggerRepairGuide('restart_180s', false);
    }
  }

  clearRepairInput() {
    const box = document.getElementById('panic-log-input');
    if (box) box.value = '';
    this.showToast('🧹 已清空檢測輸入欄');
  }

  TriggerPanicCode(codeStr) {
    const box = document.getElementById('panic-log-input');
    if (box) {
      box.value = `userspace watchdog timeout: no successful checkins from thermalmonitord in 180 seconds\n${codeStr}`;
    }
    this.analyzeRepairIssue();
  }

  TriggerRepairGuide(guideKey, showToastMsg = true) {
    const device = document.getElementById('repair-device-model')?.value || 'iPhone 全系列';
    const guides = {
      restart_180s: {
        code: '180秒 / 3分鐘定時重啟 (thermalmonitord)',
        device,
        part: '尾插排線 / 開機閃光燈排線 / 電池 SWI 通訊 / 無線充線圈',
        probability: '92% 為外配排線溫控或氣壓計/麥克風通訊中斷',
        rootCause:
          'iOS 系統每 180 秒由 thermalmonitord 巡檢全機溫控、氣壓計與麥克風感測器。只要任一感測器無回應（如 prs0、TG0B、mic1、mic2），系統即觸發看門狗保護強制重啟。',
        sop: [
          '1️⃣ 【看代碼秒鎖定】：進入「設定 ➔ 隱私權與安全性 ➔ 分析與改進 ➔ 分析資料」，開啟最新一筆 panic-full，搜尋「Missing sensor(s)」或「thermalmonitord」。',
          '2️⃣ 【代碼對應零件】：prs0 = 尾插排線；TG0B/TG0V = 電池或充電IC；mic1 = 尾插排線；mic2/mic4 = 開機閃光燈排線。',
          '3️⃣ 【交叉測試】：先外掛一條良品原廠級尾插排線或開機排線，插電計時超過 3 分半鐘不重啟即可秒殺結案！'
        ],
        script:
          '「先生/小姐您好，我們透過 Apple 原廠底層重啟日誌 (panic-full) 幫您精準抓出原因了！這不是主機板報銷，而是機身內部的『溫控/氣壓感測排線』受潮或老化導致系統每 3 分鐘自動保護重啟。我們幫您更換對應排線並做全機氣密與清潔即可完修，資料完全不會不見！」',
        upsell: '完修交機時建議搭配「防塵網高透玻璃貼」或「快充組」，防止尾插孔再次受潮或進灰塵。'
      },
      unknown_part: {
        code: '更換電池/螢幕跳「未知部件」與維修歷程說明',
        device,
        part: '電池加密排線 (BMS) / 螢幕加密 IC / iOS 18 零件修復助理',
        probability: 'Apple 原廠序號綁定機制（非零件故障）',
        rootCause:
          '自 iPhone XS / 11 起，電池、螢幕與前相機皆綁定主機板加密序號。iOS 18 起支援「維修助理 (Repair Assistant)」可針對部分原廠拆機件進行配對，或透過電芯移植保留 100% 健康度顯示。',
        sop: [
          '1️⃣ 【區分客戶需求】：詢問客人重視「CP值高、蓄電正常即可（標準認證電池）」還是「需要特定健康度顯示 / 原廠診斷配對方案」。',
          '2️⃣ 【iOS 18 檢查】：若系統為 iOS 18 以上且使用對應排線，可進入「設定 ➔ 一般 ➔ 關於本機 ➔ 零件與維修歷程」檢查是否可執行重新啟動並完成修復配置。',
          '3️⃣ 【耗電實測】：更換後測試充電電流與待機電流，確認無漏電即可安心交機。'
        ],
        script:
          '「跟您說明一下，蘋果為了綁定原廠序號，只要非回原廠直營店更換，系統都會顯示部件提示，這就像汽車去外廠保養一樣，完全不影響電池實際容量、快充速度與安全性！而且我們 Q哥 提供完整門市保固，現場幫您換好不用像原廠留機等好幾天，資料也都幫您完整保留！」',
        upsell: '換電池客人對手機續航最敏感，順勢推薦「20W/30W PD 認證快充頭 + 編織快充線」保護新電池壽命。'
      },
      face_id: {
        code: 'Face ID 失效（無法啟用 / 移高一點移低一點）',
        device,
        part: '點陣投影器 (Dot Projector) / 泛光感應元件 (Flood Illuminator) / 聽筒排線',
        probability: '85% 為螢幕上方進水受潮或摔機震傷點陣/泛光模組',
        rootCause:
          '1. 若直接顯示「Face ID 無法使用」：多為泛光感應元件（綁在聽筒排線上）或點陣投影加密 IC 損壞。\n2. 若可進設定但一直循環「將 iPhone 移高一點/移低一點」：100% 為點陣投影器老化或紅外線鏡頭對位偏移。',
        sop: [
          '1️⃣ 【先測人像模式】：打開相機切換至「前鏡頭人像模式」，若背景無虛化效果，代表點陣投影器未工作。',
          '2️⃣ 【檢測儀讀取】：使用維修檢測儀讀取點陣與聽筒感光數據，確認是否熔斷或 I2C 斷線。',
          '3️⃣ 【免拆焊排線修復】：使用新一代免拆焊點陣修復排線讀寫加密數據，對位封裝後即可恢復秒解鎖。'
        ],
        script:
          '「您的 Face ID 模組因為螢幕上方邊緣微幅受潮（或撞擊），導致裡面的紅外線點陣晶片啟動保護。回原廠通常只能整台換新機或換整組超高價模組，我們 Q哥 工程師可以直接針對原本的加密晶片做精密修復，幫您省下超過一半以上的費用，修好後行動支付跟解鎖都跟原本一模一樣！」',
        upsell: 'Face ID 最怕聽筒處進水，完修強烈建議貼上「帶聽筒防塵網的滿版防窺/高透玻璃貼」！'
      },
      no_service: {
        code: '摔機後「無服務 / 搜尋中 / 數據機韌體空白」',
        device,
        part: '雙層主機板中層錫球掉點 / 基頻電源 IC / 射頻功放',
        probability: '90% 為重摔導致雙層主機板上下層中框斷線',
        rootCause:
          'iPhone X 至 iPhone 16 均採用雙層堆疊主機板（上層邏輯板 + 下層射頻板）。重摔時中層邊框焊點極易斷裂，導致「關於本機 ➔ 數據機韌體 (Modem Firmware)」變成空白，或撥號 *#06# 不跳出 IMEI。',
        sop: [
          '1️⃣ 【秒判讀指標】：進入「設定 ➔ 一般 ➔ 關於本機」拉到底部看「數據機韌體」是否有數字；若空白則為基頻未工作。',
          '2️⃣ 【檢查 Wi-Fi 與藍牙】：若連 Wi-Fi 也反灰無法開啟，常伴隨中層大幅掉點。',
          '3️⃣ 【工程師中層重植】：上加熱台將上下層主機板分離、補點飛線並重新植錫貼合，即可恢復滿格訊號。'
        ],
        script:
          '「這台手機因為受到撞擊，雙層主機板中間連接訊號的焊點鬆脫了（我們看關於本機的數據機韌體已經空白）。這屬於高階主機板手工修復，我們工程師會幫您把雙層主機板重新植錫接合，不用換整塊主機板，資料也能完整保住！」',
        upsell: '摔出主機板問題的客人，交機時務必推薦「氣囊防摔手機殼 + 鏡頭保護貼」，避免二次重摔。'
      },
      screen_white_green: {
        code: 'iPhone 13 Pro / 14 Pro 滿屏白屏・綠屏閃爍',
        device,
        part: 'OLED 螢幕底部 COP 排線供電線路阻抗異常 (120Hz ProMotion)',
        probability: '95% 為 13 Pro / 13 Pro Max / 14 Pro 通病（觸控與聲音正常，僅畫面全白或全綠）',
        rootCause:
          '120Hz ProMotion 螢幕底部軟排線長期高溫運作下，測試點電壓訊號損耗，導致螢幕瞬間全白或全綠（但電話進來會響、盲按有震動）。',
        sop: [
          '1️⃣ 【外觀與壓傷檢查】：先在強光下仔細檢查螢幕四角有無內爆裂痕、液晶漏液黑斑或嚴重受潮（若有內爆則無法飛線，需換螢幕總成）。',
          '2️⃣ 【方案二選一報價】：向客戶提供「A方案：原螢幕精密飛線修復（高CP值、保留原彩與120Hz）」與「B方案：直接更換全新螢幕總成（最穩定）」。'
        ],
        script:
          '「這是 13 Pro / 14 Pro 系列 120Hz 螢幕非常常見的通病，您的觸控跟主機板其實都是好的！我們提供兩種方案給您選：如果原螢幕沒有摔裂內傷，我們可以嘗試幫您做『原螢幕精密線路修復』，幫您省下大筆換螢幕費用；同時也會清楚跟您說明保固範圍，讓您最划算！」',
        upsell: '完修後搭配「抗藍光或高透滿版保護貼」，強化螢幕邊框緩衝保護。'
      },
      water_damage: {
        code: '泡水 / 進水受潮機 門市第一時間接件 SOP',
        device,
        part: '全機主機板除潮 / 螢幕背光與排線腐蝕檢測',
        probability: '黃金救援期 24 小時內（嚴禁插電與嘗試開機！）',
        rootCause:
          '液體進入機身後，電池供電瞬間會在主機板 BGA 晶片底部、螢幕排線與 Face ID 模組產生電化學電解腐蝕，插電充電會直接燒穿主供電線路。',
        sop: [
          '1️⃣ 【立即斷電】：接件第一秒若還開著機，立即強制關機，絕不插充電線測試！',
          '2️⃣ 【店長免責簽認】：先向客人清楚說明「泡水機內部受潮具不可逆風險，拆機清潔除潮後可能會有原本未顯現的隱性故障（如 Face ID、螢幕背光或觸控異常）」，請客人簽名確認後再拆機。',
          '3️⃣ 【主機板超音波除水與風乾】：拆下電池、螢幕與所有排線，針對腐蝕點除錫清潔，優先以「保資料開機備份」為第一目標。'
        ],
        script:
          '「手機進水最怕通電造成二次短路！您現在送來非常及時，我們工程師會立刻幫您斷電拆機做主機板專業除水與防鏽處理。因為液體可能已經滲入細微排線，拆機清潔前我先跟您說明泡水機的檢測流程與注意事項，我們第一優先先幫您把手機救活、把珍貴的照片與 LINE 資料保住！」',
        upsell: '若成功救活或客人決定舊換新，可同步介紹門市「高CP值二手機現貨」作為備用機或主力機替換方案。'
      }
    };

    const g = guides[guideKey] || guides.restart_180s;
    this._lastDiag = g;
    this.renderDiagnosticCard(g);
    if (showToastMsg) {
      this.showToast(`📚 已載入「${g.code}」診斷與話術`);
    }
  }

  async analyzeRepairIssue() {
    const raw = (document.getElementById('panic-log-input')?.value || '').trim();
    const device = document.getElementById('repair-device-model')?.value || 'iPhone 15 / 15 Pro 系列';
    if (!raw) {
      this.showToast('⚠️ 請貼上 panic-full 重啟代碼或輸入維修故障問題');
      return;
    }

    const diag = this.getPanicDiagnosticMatch(raw, device);
    this._lastDiag = diag;
    this.renderDiagnosticCard(diag);
    this.showToast('🔍 已完成 iOS 故障根因診斷與店長報價話術生成！');

    // If real Gemini / OpenAI API is configured, fetch live expert supplement
    const { aiProvider, geminiKey, geminiModel, openaiKey, openaiModel } = this.state.settings;
    const useGemini =
      (aiProvider === 'gemini' || (aiProvider === 'auto' && geminiKey.trim())) && geminiKey.trim().length > 5;
    const useOpenAI =
      !useGemini &&
      (aiProvider === 'openai' || (aiProvider === 'auto' && openaiKey.trim())) &&
      openaiKey.trim().length > 5;

    if (useGemini || useOpenAI) {
      const extraBox = document.getElementById('diag-llm-extra');
      if (extraBox) {
        extraBox.style.display = 'block';
        extraBox.innerHTML = '⏳ 正在呼叫雲端 AI 維修專家模型進行深度補充分析...';
      }
      const prompt = `你是 Q哥 iPhone 資深主機板維修總工程師與門市店長顧問。機型：${device}。故障或 panic-full 內容：${raw}。請用繁體中文補充：1. 此機型最需要注意的拆修細節與通病 2. 給店長的一句話精準報價成交建議（120字內）。`;
      try {
        const extraReply = await this.generateAIResponse(prompt, '');
        if (extraBox) {
          extraBox.innerHTML = `<strong>✨ 雲端 AI 專家深度補充：</strong><br>${this.formatMessageHTML(extraReply)}`;
        }
      } catch (e) {}
    }
  }

  getPanicDiagnosticMatch(raw, device) {
    const text = raw.toLowerCase();

    if (/prs0|pr00|barometer|氣壓/.test(text)) {
      return {
        code: 'Missing sensor(s): prs0 / pr00（尾插氣壓計異常・3分鐘重啟）',
        device,
        part: '⚡ 尾插充電排線 (Charging Port Flex) 或尾插座受潮',
        probability: '96% 更換原廠拆機級尾插排線即可秒殺完修',
        rootCause:
          'panic-full 報告中的「prs0」代表氣壓感測器 (Barometer)，該感測器位於底部「尾插排線」上。當尾插孔進水受潮、摔機震裂或換過劣質副廠尾插（無氣壓計晶片）時，thermalmonitord 每 180 秒讀取不到 prs0 訊號就會強制重啟。',
        sop: [
          '1️⃣ 【外掛測試】：不用拆尾插，先打開螢幕，在主機板尾插座直接扣上一條良品「原廠級尾插排線」開機測試。',
          '2️⃣ 【計時驗證】：開機計時超過 3 分 30 秒不重啟，即 100% 確診為尾插排線損壞。',
          '3️⃣ 【檢查座子】：若換新尾插仍報 prs0，檢查主機板尾插座 J5700 是否有受潮發霉或虛焊。'
        ],
        script:
          '「先生/小姐您好，我們看過手機底層的蘋果重啟報告 (代碼 prs0)，抓出兇手是底部『充電尾插排線上的氣壓感測器』受潮異常！這不是主機板大問題，我們現場幫您更換一條帶完整感測晶片的高品質尾插排線，就不會再每 3 分鐘重開機了，而且充電也會變得很順暢！」',
        upsell: '既然尾插受潮或老化，完修取機時可順手搭售「PD 快充線 + 防塵塞/防摔殼」，提升客單價！'
      };
    }

    if (/tg0b|tg0v|swi|battery|電池/.test(text)) {
      return {
        code: 'Missing sensor(s): TG0B / TG0V（電池溫控數據線 SWI 異常・3分鐘重啟）',
        device,
        part: '🔋 電池排線扣座 / 電池本體 / 尾插連動或充電 IC (Tigris/Hydra)',
        probability: '90% 為電池未扣緊、電池排線折損或電池座假焊',
        rootCause:
          '「TG0B / TG0V」代表電池溫度與數據感測 (Battery Temperature / Voltage Sensor)。當系統讀取不到電池電量百分比（常伴隨電量跳 1% 或卡在某個數字）時，每 180 秒必定重啟。',
        sop: [
          '1️⃣ 【檢查電池座】：拆機先檢查電池扣是否鬆脫、主機板電池座兩側數據小針腳有無內縮或變形（常見於換電池時壓歪電池座）。',
          '2️⃣ 【更換良品電池】：換一顆良品電池測試是否顯示正常健康度與百分比。',
          '3️⃣ 【注意尾插連動】：部分機型（如 iPhone X~13）尾插排線短路也會拉低電池 SWI 訊號，可拔除尾插單獨用電池開機測試。'
        ],
        script:
          '「我們從重啟報告看到代碼 TG0B，這代表手機偵測不到電池的溫控安全訊號，所以蘋果系統啟動每 3 分鐘斷電保護。我們工程師先幫您檢測電池扣座與電池健康狀態，更換新電池或修復座子後就能馬上恢復穩定！」',
        upsell: '建議同步檢查充電頭是否為劣質副廠頭，推薦加購「Q哥 BSMI 認證快充頭」保護電池 IC。'
      };
    }

    if (/mic1/.test(text)) {
      return {
        code: 'Missing sensor(s): mic1（底部主麥克風溫控異常・3分鐘重啟）',
        device,
        part: '🎙️ 底部尾插排線 (Charging Port Flex - 整合 mic1)',
        probability: '95% 為尾插排線破損或受潮',
        rootCause:
          'iPhone 12~16 系列的「mic1」位於底部尾插排線上，內含溫控回報機制。若尾插排線在拆機時被撬傷、或底部喇叭孔進水，就會跳 mic1 導致 3 分鐘重啟（常伴隨講電話對方聽不到聲音或語音備忘錄無法錄音）。',
        sop: [
          '1️⃣ 【驗證錄音功能】：打開內建「語音備忘錄」測試是否無法點擊錄音或無波形。',
          '2️⃣ 【外掛尾插排線】：扣上新尾插排線開機測試超過 3 分鐘，確認不重啟且錄音正常即可更換完修。'
        ],
        script:
          '「報告裡面的 mic1 代表手機底部的麥克風與溫控排線受損（它跟充電尾插是做在同一條排線上的）。我們直接幫您更換整條尾插麥克風排線，一次解決重開機跟通話收音問題！」',
        upsell: '搭配門市清潔服務與手機殼/保護貼套餐加購。'
      };
    }

    if (/mic2|mic4|power flex|開機排|閃光燈/.test(text)) {
      return {
        code: 'Missing sensor(s): mic2 / mic4（開機鍵/閃光燈排線異常・3分鐘重啟）',
        device,
        part: '📸 後置閃光燈 / 電源開機音量排線 (Power & Flash Flex)',
        probability: '95% 為開機閃光燈排線折傷或後鏡頭處受潮',
        rootCause:
          '「mic2 / mic4」為後置降噪麥克風與溫控感測器，整合在「電源開機與閃光燈排線（或無線充線圈排線總成）」上。非常常見於「摔破背蓋玻璃」或「拆換電池/後殼時不小心劃傷排線」後出現每 3 分鐘重啟。',
        sop: [
          '1️⃣ 【檢查閃光燈與後錄音】：測試手電筒是否打不開，或用後鏡頭錄影是否沒有聲音。',
          '2️⃣ 【外掛開機/閃光燈排線】：拔除原機閃光燈開機排線，外接一條良品排線開機計時超過 180 秒即可確診。'
        ],
        script:
          '「這台重啟代碼是 mic2，位置在手機背面上方的『閃光燈與電源感應排線』。通常是背蓋撞擊或受潮傷到這條細排線，導致系統每 3 分鐘自動重開機。我們換掉這條排線就能徹底解決，不用動到主機板晶片！」',
        upsell: '若客人背蓋有裂痕，務必建議一併處理背蓋並加裝「軍規防摔殼 + 藍寶石鏡頭貼」防止水氣再從鏡頭縫滲入。'
      };
    }

    if (/aop panic|als|prox|flood|感光|聽筒/.test(text)) {
      return {
        code: 'AOP PANIC / als / prox（聽筒感光排線・環境光/距離感應器崩潰）',
        device,
        part: '👂 螢幕上方聽筒感光排線 (Front Sensor / Earpiece Flex)',
        probability: '92% 拔除聽筒排線即可正常開機不重啟',
        rootCause:
          'AOP (Always-On Processor) 負責管理距離感應器 (prox)、環境光感應 (als)、泛光感應元件 (Flood) 與氣壓計。最常見於螢幕上方聽筒處進水（如擦酒精、淋雨），導致聽筒排線短路引發白蘋果重啟或每幾分鐘重啟。',
        sop: [
          '1️⃣ 【一秒驗證法】：拆開螢幕，先單獨「拔掉聽筒感光排線扣」，只扣螢幕顯示排線開機。若瞬間順利進系統且不再重啟，100% 鎖定為聽筒感光排線問題！',
          '2️⃣ 【保 Face ID 修復】：若原機有 Face ID，需將原排線上的「泛光感應元件 (Flood Illuminator) / 環境光晶片」移植到新排線上，才不會丟失 Face ID。'
        ],
        script:
          '「我們檢測出是螢幕上方『聽筒與距離感光排線』微幅受潮短路（代碼 AOP PANIC），才會害手機一直卡白蘋果或重開機。我們可以單獨幫您修復這條排線，如果原本 Face ID 是正常的，工程師也會幫您把加密晶片移植過去保留臉部解鎖！」',
        upsell: '聽筒進水 90% 是因為沒貼防塵網保護貼或常拿酒精噴螢幕，完修必推「Q哥聽筒防塵滿版玻璃貼」！'
      };
    }

    if (/nand|nvme|ans2|apfs|4013|硬碟/.test(text)) {
      return {
        code: 'NAND / nvme / ans2 Panic（硬碟虛焊或供電異常・白蘋果重啟）',
        device,
        part: '💾 主機板 NAND Flash 硬碟晶片或 2.5V/0.9V 硬碟供電電容',
        probability: '88% 為主機板硬碟底腳虛焊、供電濾波電容短路或容量全滿崩潰',
        rootCause:
          '重啟報告出現「ans2 / nvme / nand」代表主機板無法正常讀寫硬碟。輕則系統儲存空間塞爆導致白蘋果重啟，重則摔機導致硬碟焊點脫落或供電電容微短路。',
        sop: [
          '1️⃣ 【先問客人容量】：先詢問客人重啟前手機容量是否已經滿到跳「儲存空間幾乎已滿」（若是，可嘗試愛思/iTunes 保資料刷機或刪除大型快取）。',
          '2️⃣ 【量測硬碟供電】：工程師量測硬碟周邊 PP2V5_NAND、PP0V9_NAND 阻值是否正常。',
          '3️⃣ 【資料優先原則】：涉及 NAND 問題務必先告知客人「一旦見系統立即優先備份 iCloud / 電腦資料」。'
        ],
        script:
          '「報告顯示代號 nvme/NAND，這代表手機裡面的『儲存硬碟晶片』有讀取中斷的狀況。只要手機還能進畫面，我們第一時間先幫您把重要照片跟 LINE 搶救備份出來，再由主機板工程師幫您做硬碟線路修復！」',
        upsell: '若客戶原機為 64G/128G 常塞爆，可推薦「主機板硬碟擴容升級」或「門市高容量 256G/512G 二手機舊換新折抵」！'
      };
    }

    if (/baseband|mav20|ice19|無服務|沒有服務|數據機|搜尋中/.test(text)) {
      return {
        code: 'Baseband 基頻異常 / 雙層主機板中層掉點（無服務・偶發重啟）',
        device,
        part: '📶 雙層主機板中層焊點 / 基頻 CPU / 射頻功放 IC',
        probability: '90% 為摔機造成雙層主機板上下層斷線',
        rootCause:
          '當雙層主機板中層焊點因摔機產生裂痕時，上層 CPU 無法與下層射頻基頻板穩定通訊，不僅會出現「沒有服務 / SIM 卡無效 / 數據機韌體空白」，也會在待機時因基頻超時而自動重啟。',
        sop: [
          '1️⃣ 【檢查關於本機】：查看「設定 ➔ 一般 ➔ 關於本機 ➔ 數據機韌體」是否空白，或撥號輸入 *#06# 是否不跳條碼。',
          '2️⃣ 【主機板中層重植】：由主機板工程師進行雙層板分層、掉點補線與重新植錫貼合。'
        ],
        script:
          '「這台手機是因為撞擊造成雙層主機板中間負責收訊的焊點斷開了，所以既會跳『沒有服務』又會偶爾重開機。我們工程師專門處理這種雙層主機板重植修復，不用換整塊主機板，修好後收訊跟原本一樣穩定，資料也都還在！」',
        upsell: '重摔修復後務必搭配「四角氣囊防摔殼 + 滿版保護貼」組合價。'
      };
    }

    if (/i2c0|i2c1|i2c2|sep panic|socd|watchdog/.test(text)) {
      return {
        code: 'I2C 總線卡死 / Watchdog 超時重啟（外配排線或加密通訊拉低）',
        device,
        part: '🔌 聽筒排線 / 尾插排線 / 無線充排線 / 音訊或充電 IC',
        probability: '85% 可透過「最小系統拔排線法」抓出短路外配',
        rootCause:
          'I2C 總線負責連接主機板與各大外配（螢幕觸控、聽筒感光、尾插、無線充、相機）。當其中一條外配排線受潮把 I2C 電壓拉低，CPU 就會卡死觸發 Watchdog 超時重啟。',
        sop: [
          '1️⃣ 【最小系統開機法】：將尾插排線、聽筒感光排線、後鏡頭、無線充排線全部拔開，只留「主機板 + 螢幕 + 電池 + 開機鍵」開機測試。',
          '2️⃣ 【逐一插回排查】：若裸機不重啟，再一條一條把外配扣回去，扣到哪一條開始重啟就是哪一條排線損壞！'
        ],
        script:
          '「重啟報告顯示系統匯流排 (I2C/Watchdog) 被某個周邊排線拖慢了。我們工程師會用『最小系統交叉檢測法』，幫您把排線一條條單獨測試，抓出是哪一條排線老化，精準換掉故障零件，不讓您花冤枉錢！」',
        upsell: '提供全機免費清潔與電池健康度檢測，視機況推薦保護貼或電池加購優惠。'
      };
    }

    // General smart fallback for any custom repair description
    return {
      code: `AI 綜合維修診斷：${raw.slice(0, 28)}`,
      device,
      part: '🔍 外配排線（尾插/聽筒/開機排）➔ 電池供電 ➔ 主機板檢測',
      probability: '建議先執行「分析資料 panic-full 代碼比對」與「外配最小系統測試」',
      rootCause: `針對您輸入的狀況（「${raw}」），在 ${device} 門市維修實務上，凡遇到定時重啟、卡白蘋果或功能異常，80% 以上可先從外配排線（尾插 prs0/mic1、開機排 mic2、聽筒 AOP、電池 TG0B）排除，剩餘 20% 則為主機板供電或雙層板中層問題。`,
      sop: [
        '1️⃣ 【先調閱分析資料】：若手機可進系統，先至「設定 ➔ 隱私權與安全性 ➔ 分析與改進 ➔ 分析資料」，找最新日期的 panic-full 或 ResetCounter。',
        '2️⃣ 【詢問前因】：必ず詢問客人「故障前是否有摔機、進水受潮、或近期曾在別處換過電池/螢幕/後殼」。',
        '3️⃣ 【外掛良品排線交叉測試】：依序排除電池、尾插排線與聽筒感光排線，確認電流正常後再報價。'
      ],
      script:
        '「先生/小姐您好，我們先幫您免費調閱手機底層的檢測紀錄，並由工程師用良品零件做交叉測試，15~20 分鐘內先幫您確認是單純『排線/電池老化』還是『主機板問題』，確認好確切費用跟您報價同意後我們才會動工，請放心！」',
      upsell: '利用等待檢測的 15 分鐘，主動幫客人檢查螢幕保護貼是否破損、電池健康度是否低於 80%，順勢引導套餐搭售。'
    };
  }

  renderDiagnosticCard(d) {
    const container = document.getElementById('repair-diag-output');
    if (!container) return;

    const modelObj = this.getSelectedModelObj(d.device);
    const modelNoteHTML =
      modelObj && modelObj.notes
        ? `<div style="font-size:12px;color:var(--ios-text);line-height:1.45;margin-bottom:10px;background:rgba(0,122,255,0.09);border:1px solid rgba(0,122,255,0.22);padding:8px 11px;border-radius:10px;">
            <strong style="color:var(--ios-blue);">📱 【${this.escapeHTML(modelObj.name)}】專屬通病與拆修提醒：</strong><br>${this.escapeHTML(
            modelObj.notes
          )}
          </div>`
        : '';

    const sopHTML = (d.sop || [])
      .map((step) => `<li style="margin-bottom:5px;line-height:1.45;">${this.escapeHTML(step)}</li>`)
      .join('');

    container.innerHTML = `
      <div class="diag-result-card">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
          <span class="diag-section-tag" style="background:rgba(255,59,48,0.14);color:var(--ios-red);">🚨 診斷結果：${this.escapeHTML(
            d.code
          )}</span>
          <span class="badge badge-category">${this.escapeHTML(d.device)}</span>
        </div>

        <div style="font-size:13.5px;font-weight:700;color:var(--ios-text);margin-bottom:6px;">
          🎯 優先鎖定部位：<span style="color:#ff6b00;">${this.escapeHTML(d.part)}</span>
        </div>
        <div style="font-size:12px;color:var(--ios-green);font-weight:600;margin-bottom:8px;">
          📊 實務完修評估：${this.escapeHTML(d.probability)}
        </div>

        ${modelNoteHTML}

        <div style="font-size:12.5px;color:var(--ios-text-secondary);line-height:1.5;margin-bottom:10px;background:var(--ios-bg);padding:9px 11px;border-radius:10px;">
          <strong>🧠 故障原理解析：</strong><br>${this.escapeHTML(d.rootCause)}
        </div>

        <div style="margin-bottom:10px;">
          <span class="diag-section-tag" style="background:rgba(0,122,255,0.14);color:var(--ios-blue);">🔧 工程師標準排查 SOP</span>
          <ul style="list-style:none;font-size:12.5px;color:var(--ios-text);padding-left:2px;">
            ${sopHTML}
          </ul>
        </div>

        <div style="background:rgba(255,149,0,0.1);border-left:3.5px solid #ff6b00;padding:9px 11px;border-radius:8px;margin-bottom:10px;">
          <div style="font-size:12px;font-weight:700;color:#ff6b00;margin-bottom:3px;">💬 Q哥店長對客接待與報價話術（可直接照念）：</div>
          <div style="font-size:12.5px;color:var(--ios-text);line-height:1.5;">${this.escapeHTML(d.script)}</div>
        </div>

        <div style="background:rgba(52,199,89,0.1);padding:8px 11px;border-radius:8px;font-size:12px;color:var(--ios-text);margin-bottom:10px;">
          <strong style="color:var(--ios-green);">💰 完修交機・配件搭售切入點：</strong>${this.escapeHTML(d.upsell)}
        </div>

        <div id="diag-llm-extra" style="display:none;background:var(--ai-soft-bg);padding:9px 11px;border-radius:8px;font-size:12.5px;color:var(--ios-text);margin-bottom:10px;"></div>

        <div style="display:flex;gap:6px;flex-wrap:wrap;padding-top:8px;border-top:0.5px solid var(--ios-separator);">
          <button class="mini-btn" onclick="app.saveDiagToHighlight()">📌 存入維修工作重點</button>
          <button class="mini-btn" style="background:rgba(255,59,48,0.12);color:var(--ios-red);" onclick="app.saveDiagToTask()">🔴 建立急件維修待辦</button>
          <button class="mini-btn" onclick="app.copyDiagResult()">📋 複製診斷與話術</button>
        </div>
      </div>
    `;
  }

  saveDiagToHighlight() {
    const d = this._lastDiag;
    if (!d) return;
    const now = new Date();
    const timeStr = `今日 ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    this.state.highlights.unshift({
      id: 'hl-' + Date.now(),
      title: `【維修診斷】${d.device} - ${d.code.slice(0, 18)}`,
      category: '維修與客訴處理',
      pinned: true,
      createdAt: timeStr,
      points: [
        `鎖定故障部位：${d.part}`,
        ...d.sop.map((s) => s.replace(/^[1-9]️⃣\s*/, ''))
      ],
      decision: `對客報價與完修後搭售：${d.upsell}`,
      actionItem: `追蹤 ${d.device} (${d.part.slice(0, 12)}) 完修測試與通知客人取機`,
      actionConverted: false
    });
    this.saveState();
    this.renderAll();
    this.showToast('📌 已將此筆維修診斷存入「維修與客訴處理」工作重點！');
  }

  saveDiagToTask() {
    const d = this._lastDiag;
    if (!d) return;
    this.state.tasks.unshift({
      id: 'task-' + Date.now(),
      title: `維修追蹤：${d.device} (${d.code.slice(0, 20)})`,
      priority: 'high',
      category: '維修與客訴追蹤',
      due: '今日完修回電',
      progress: 20,
      completed: false,
      notes: `鎖定部位：${d.part}｜完修提醒：${d.upsell}`
    });
    this.saveState();
    this.renderAll();
    this.showToast('🔴 已建立「急件維修追蹤」待辦任務！');
  }

  copyDiagResult() {
    const d = this._lastDiag;
    if (!d) return;
    const text = [
      `🛠️【Q哥 iOS 維修診斷報告】`,
      `機型：${d.device}`,
      `故障代碼/項目：${d.code}`,
      `鎖定部位：${d.part}`,
      `排查步驟：\n${d.sop.join('\n')}`,
      `💬 對客報價話術：${d.script}`,
      `💰 配件搭售建議：${d.upsell}`
    ].join('\n');
    navigator.clipboard?.writeText(text);
    this.showToast('📋 已複製完整維修診斷與對客報價話術！');
  }

  generateLineReport() {
    const now = new Date();
    const dateStr = `${now.getMonth() + 1}/${now.getDate()}`;
    const storeName = this.state.settings.storeName || 'Q哥 門市';
    const managerName = this.state.settings.managerName || '店長';
    const activeTasks = this.state.tasks.filter((t) => !t.completed);
    const completedTasks = this.state.tasks.filter((t) => t.completed);

    const lines = [
      `👑【${storeName}・店務與交接日報 (${dateStr})】`,
      `回報人：${managerName}`,
      `━━━━━━━━━━━━━━`,
      `📌 一、今日門市重點與交接事項：`
    ];

    this.state.highlights.forEach((h, idx) => {
      lines.push(`\n${idx + 1}️⃣ 【${h.category}】${h.title}`);
      (h.points || []).forEach((pt) => lines.push(`  • ${pt}`));
      if (h.decision) lines.push(`  💡 決策/結論：${h.decision}`);
      if (h.actionItem) lines.push(`  🚀 下一步：${h.actionItem}`);
    });

    lines.push(`\n━━━━━━━━━━━━━━`, `🔥 二、待追蹤店務與急件 (${activeTasks.length} 項)：`);
    if (!activeTasks.length) {
      lines.push(`  • 今日待辦店務皆已全數完成！`);
    } else {
      activeTasks.forEach((t) => {
        const icon = t.priority === 'high' ? '🔴[急件]' : '🟠[待辦]';
        lines.push(`  ${icon} ${t.title}（進度 ${t.progress}%｜${t.due}）`);
      });
    }

    lines.push(`\n✅ 三、今日已完成店務 (${completedTasks.length} 項)：`);
    if (!completedTasks.length) {
      lines.push(`  • 持續推進中`);
    } else {
      completedTasks.forEach((t) => {
        lines.push(`  ✓ ${t.title}`);
      });
    }

    return lines.join('\n');
  }

  generateWeeklyReport() {
    const now = new Date();
    const dateStr = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
    const storeName = this.state.settings.storeName || 'Q哥 門市';
    const managerName = this.state.settings.managerName || '店長';
    const completedTasks = this.state.tasks.filter((t) => t.completed);
    const activeTasks = this.state.tasks.filter((t) => !t.completed);

    const categories = ['門市業績與促銷', '維修與客訴處理', '二手機收購與庫存', '早晚班交接與人事', '總部會議與公告'];
    const lines = [
      `# 📊 ${storeName}・店長營運週報 (${dateStr})`,
      `負責店長：${managerName}`,
      ''
    ];

    categories.forEach((cat) => {
      const items = this.state.highlights.filter((h) => h.category === cat);
      if (!items.length) return;
      lines.push(`## 📌 ${cat} (${items.length} 筆)`);
      items.forEach((h) => {
        lines.push(`### • ${h.title} (${h.createdAt})`);
        (h.points || []).forEach((pt) => lines.push(`  - ${pt}`));
        if (h.decision) lines.push(`  - 💡 **店長決策**：${h.decision}`);
        if (h.actionItem) lines.push(`  - 🚀 **後續行動**：${h.actionItem}`);
      });
      lines.push('');
    });

    lines.push(`## 🎯 下階段重點待辦追蹤 (${activeTasks.length} 項)`);
    activeTasks.forEach((t) => {
      lines.push(`- [${t.priority === 'high' ? '急件' : '一般'} / ${t.category}] ${t.title} (進度 ${t.progress}%｜期限：${t.due})`);
    });

    lines.push('', `## ✅ 本週已完成事項 (${completedTasks.length} 項)`);
    completedTasks.forEach((t) => {
      lines.push(`- [x] [${t.category}] ${t.title}`);
    });

    return lines.join('\n');
  }

  openReportModal(format = 'line') {
    this.switchReportFormat(format);
    document.getElementById('modal-report')?.classList.add('open');
  }

  switchReportFormat(format) {
    this.reportFormat = format;
    document.getElementById('btn-rep-line')?.classList.toggle('active', format === 'line');
    document.getElementById('btn-rep-weekly')?.classList.toggle('active', format === 'weekly');

    const box = document.getElementById('report-output-textarea');
    if (box) {
      box.value = format === 'line' ? this.generateLineReport() : this.generateWeeklyReport();
    }
  }

  copyReportText() {
    const box = document.getElementById('report-output-textarea');
    if (!box) return;
    navigator.clipboard?.writeText(box.value);
    this.showToast('📋 已複製店長報告！可直接貼上至 Q哥 LINE 群組');
  }

  /* ================= SETTINGS & BACKUP ================= */
  populateSettingsUI() {
    const s = this.state.settings;
    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.value = val ?? '';
    };
    setVal('setting-store-name', s.storeName || 'Q哥 門市');
    setVal('setting-manager-name', s.managerName || '店長');
    setVal('setting-ai-provider', s.aiProvider || 'auto');
    setVal('setting-gemini-key', s.geminiKey || '');
    setVal('setting-gemini-model', s.geminiModel || 'gemini-2.5-flash');
    setVal('setting-openai-key', s.openaiKey || '');
    setVal('setting-openai-model', s.openaiModel || 'gpt-4o-mini');
    const ttsEl = document.getElementById('setting-tts-enabled');
    if (ttsEl) ttsEl.checked = Boolean(s.ttsEnabled);
  }

  saveSettingsFromUI() {
    this.state.settings = {
      storeName: document.getElementById('setting-store-name')?.value.trim() || 'Q哥 門市',
      managerName: document.getElementById('setting-manager-name')?.value.trim() || '店長',
      aiProvider: document.getElementById('setting-ai-provider')?.value || 'auto',
      geminiKey: document.getElementById('setting-gemini-key')?.value || '',
      geminiModel: document.getElementById('setting-gemini-model')?.value || 'gemini-2.5-flash',
      openaiKey: document.getElementById('setting-openai-key')?.value || '',
      openaiModel: document.getElementById('setting-openai-model')?.value || 'gpt-4o-mini',
      ttsEnabled: Boolean(document.getElementById('setting-tts-enabled')?.checked)
    };
    this.saveState();
    this.renderAll();
    this.showToast('⚙️ 已更新 Q哥門市與店長助理設定');
  }

  exportDataJSON() {
    const blob = new Blob([JSON.stringify(this.state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Q哥店長助理備份-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast('📤 已匯出門市資料備份 (.json)');
  }

  importDataJSON(event) {
    const file = event.target?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported && Array.isArray(imported.tasks) && Array.isArray(imported.highlights)) {
          this.state = {
            ...JSON.parse(JSON.stringify(DEFAULT_DATA)),
            ...imported
          };
          this.saveState();
          this.applyTheme();
          this.populateSettingsUI();
          this.renderAll();
          this.showToast('📥 已成功還原門市資料備份！');
        } else {
          this.showToast('⚠️ 備份檔案格式不正確');
        }
      } catch (err) {
        this.showToast('⚠️ 無法解析 JSON 檔案');
      }
    };
    reader.readAsText(file);
  }

  resetDemoData() {
    this.state = JSON.parse(JSON.stringify(DEFAULT_DATA));
    this.saveState();
    this.applyTheme();
    this.populateSettingsUI();
    this.renderAll();
    this.showToast('🔄 已重置為 Q哥店長預設範例資料');
  }

  /* ================= HELPERS ================= */
  closeModal(modalId) {
    document.getElementById(modalId)?.classList.remove('open');
  }

  escapeHTML(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  formatMessageHTML(str) {
    const escaped = this.escapeHTML(str);
    return escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }
}

window.app = new iAssistApp();
