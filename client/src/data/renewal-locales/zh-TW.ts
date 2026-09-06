import type { RenewalCopy } from "@/data/renewal-copy";

const locale: RenewalCopy = {
  chrome: {
    home: "首頁",
    searchLanguages: "搜尋語言…",
    chooseLanguage: "選擇你的語言",
    languagesCount: "種語言",
    allRegions: "全部地區",
    all: "全部",
    heroSlidesAria: "Wordshiper 介紹投影片",
    slideSelectorAria: "投影片選擇",
    lineageNumber: "你的譜系編號",
    lineageEmailNote: "我們已寄出確認郵件——請查看收件匣。",
    donatePreparingEyebrow: "即將推出",
    donatePreparingTitle: "奉獻功能準備中",
    donatePreparingBody:
      "奉獻連結目前正在準備中。\n" +
      "我們會在更安全、更順暢的奉獻體驗就緒後，\n" +
      "重新開放。",
    donatePreparingCta: "知道了",
    preregisterOpensEyebrow: "2026年\u00A012月\u00A01日開放",
    preregisterOpensTitle: "預登記於12月\u00A01日開啟",
    preregisterOpensBody:
      "譜系預登記將於2026年\u00A012月\u00A01日開啟。\n" +
      "當天，以最新技術全新打造的報名入口，\n" +
      "將迎接首批\u00A01,000位 Wordshiper。",
    preregisterOpensCta: "知道了",
  },
  nav: {
    product: "流轉",
    routine: "日常",
    movement: "運動",
    roadmap: "路線圖",
    about: "關於",
    investors: "投資者",
    donate: "奉獻",
    preregister: "預登記",
    why: "為何",
    identity: "身分",
  },
  hero: {
    badge: "將於\u00A02026年12月發布",
    slogan: "一天一節。敬拜的一生。",
    declaration: "我是 Wordshiper。",
    cta1: "加入首批\u00A01,000\u00A0人",
    cta2: "為何選擇 Wordshiper",
    lineageNote: "預登記即可獲得你的譜系編號",
    slides: [
      {
        label: "什麼是 Wordshiper？",
        title1: "背誦一節經文，",
        title2: "重整你的整天。",
        body: "一款幫助你默想並背誦一節聖經、每天重複三次短禱、恢復屬靈·身體·情感的優先次序，並活出呼召人生的應用程式。",
        visual: "home" as const,
      },
      {
        label: "獨特之處",
        title1: "你並不孤單。",
        title2: "這就是福音流淌的方式。",
        body: "基於位置與群體的頻道，把你與附近的同路人連結起來。25\u00A0種語言的雙語／三語支援。分享、奉獻與頻道成為福音的道路。Wordshiper 不只是工具——它是以神話語為中心的生活平台。",
        visual: "jog" as const,
      },
      {
        label: "三重身分",
        title1: "背誦應用 · 屬靈 OS ·",
        title2: "全球神話語運動",
        body: "每天領受、聆聽、開口、背誦一節經文。用十五分鐘重整一天。通過一節經文，以第\u00A0N\u00A0位 Wordshiper 加入譜系——再用 Verse\u00A0Card 與你的聲音邀請下一個人。",
        visual: "home" as const,
      },
    ],
  },
  why: {
    label: "為何是 Wordshiper",
    title: "連結從未如此緊密，\n心靈卻更加分散",
    lead:
      "我們活在資訊的洪流與不息的忙碌之中。\n" +
      "無數聲音每天搖動我們的心，人生的優先次序也輕易散落。",
    points: [
      {
        t: "噪音與匆忙",
        d: "人們更連結，卻更分散——消費更多資訊，卻在真理中停留的時間不斷縮短。",
      },
      {
        t: "敬拜的渴慕",
        d: "許多人渴望認識神，成為真正的敬拜者。然而在日常的速度與壓力下，他們難以記念神、與祂同行，並以生命敬拜。",
      },
      {
        t: "創立之問",
        d: "一個人如何能每天藉著神的話語記念神、與祂同行，並活出敬拜的人生？",
      },
    ],
    answer:
      "當一節經文深深種在一顆心裡，\n" +
      "那話語便成為勝過恐懼、穿越艱難的力量，\n" +
      "也把散落的屬靈優先次序重新轉回神那裡。\n\n" +
      "請把這話語作為產業留下——\n" +
      "留給你所愛的兒女，也留給你的父母。\n\n" +
      "我們要日復一日地被更新，\n" +
      "成為神所喜悅的敬拜者。",
    answerRef: "— Wordshiper 開始的原因",
  },
  identity: {
    label: "什麼是 Wordshiper",
    title: "以神話語為中心的\n生活平台",
    definition:
      "一款幫助你默想並背誦一節聖經、每天重複三次短禱、恢復散落人生的屬靈·身體·情感優先次序，並活出呼召的應用程式。",
    sub: "Word\u00A0+\u00A0Worshiper。藉著銘記並活出神的話語來敬拜神的人。",
    word: "Word",
    wordD: "神活潑的話語",
    worshiper: "Worshiper",
    worshiperD: "在那話語前獻上心靈，並以生命回應的人",
    result: "幫助人們成為銘記神話語的敬拜者——Wordshiper",
    layers: [
      {
        t: "聖經背誦應用",
        d: "幫助使用者每天領受、聆聽、開口並背誦一節經文。",
      },
      {
        t: "每日屬靈 OS",
        d: "藉著聖經、禱告與 Walk 規劃器，圍繞神的話語重整一天的優先次序。",
      },
      {
        t: "全球聖經背誦運動",
        d: "通過一節經文，以第\u00A0N\u00A0位 Wordshiper 加入譜系——再用 Verse\u00A0Card 與你的聲音邀請下一個人。",
      },
    ],
    notOnly:
      "基於位置與群體的頻道，把你與當地同路人連結起來。預設英語，並提供 25\u00A0種語言的雙語／三語支援。經文不是獨自背誦——而是一起分享、一起活著。",
    forWhom:
      "分享、奉獻與頻道成為「福音的道路」。Wordshiper 不只是應用工具——它是以神話語為中心的生活平台。",
  },
  mission: {
    label: "使命",
    title: "恢復屬靈優先次序。\n重獲與神同行的喜樂。",
    body: "Wordshiper 幫助世界各地的人每天銘記並背誦神話語的一節——好叫他們在資訊過載與忙碌中，擺正屬靈優先次序，並享受與神同行。",
    habits: [
      {
        t: "一天一節",
        d: "聽 · 說 · 背",
      },
      {
        t: "三次短禱",
        d: "藉著話語回應神",
      },
      {
        t: "重整一天",
        d: "把它實踐為人生的優先",
      },
    ],
    close:
      "這小小的習慣改變一顆心，恢復一個家庭的禱告，更新一個群體的敬拜——最終成為流向萬國的神話語運動。這就是 Wordshiper 的使命。",
  },
  vision: {
    label: "異象",
    title: "藉著神話語的\n全球敬拜運動",
    body: "Wordshiper 的異象，是興起藉著神話語敬拜神的 Worshiper。",
    detail:
      "世界各地的人領受同一節經文，用自己的語言與聲音告白，並在所處之地活出來——敬拜流入家庭、教會、城市與萬國的全球聖經背誦運動。",
  },
  routine: {
    label: "核心日常",
    title: "一天三次，\n每次五分鐘",
    sub: "每次會話由 Walk 規劃器鬧鐘自動觸發，使一天三次成為生命節奏。早晨領受，中午回顧，夜晚確認——直到一節經文滲入生命。",
    alarmNote: "Walk 規劃器鬧鐘",
    principle:
      "Tiny Habits——每次五分鐘輕到足以每天重複，同時兼顧記憶留存與屬靈深度。",
    sessions: [
      {
        time: "早晨 · 5 分鐘",
        when: "醒來時 · Walk 規劃器鬧鐘",
        items: [
          "禱告 1 分鐘 — 晨禱",
          "背誦 2 分鐘 — 今日經文",
          "默想 2 分鐘 — 應用話語",
        ],
      },
      {
        time: "中午 · 5 分鐘",
        when: "午餐前 · Walk 規劃器鬧鐘",
        items: [
          "禱告 1 分鐘 — 感恩",
          "複習 2 分鐘 — 重複早晨經文",
          "Walk 檢視 2 分鐘 — 今日優先",
        ],
      },
      {
        time: "晚上 · 5 分鐘",
        when: "睡前 · Walk 規劃器鬧鐘",
        items: [
          "禱告 1 分鐘 — 一日反思",
          "確認 2 分鐘 — Hide & Test",
          "感恩 2 分鐘 — 今日感謝",
        ],
      },
    ],
    sum: "3 × 5分鐘 = 一天15分鐘",
    sumSub: "按屬靈優先次序度過每一天",
    balance: [
      {
        t: "屬靈優先",
        d: "藉著話語、禱告、默想與神同行",
      },
      {
        t: "身體節奏",
        d: "與起床、用餐、休息同步的日循環",
      },
      {
        t: "情感恢復",
        d: "不定罪的鼓勵；把感恩記下來",
      },
    ],
  },
  product: {
    label: "產品身分",
    title: "一個平台，\n三層結構",
    sub: "聖經背誦應用、每日屬靈 OS、全球神話語運動——合而為一地設計。",
    thesis: [
      {
        t: "聖經背誦應用",
        d: "幫助使用者每天領受、聆聽、開口並背誦一節經文。",
      },
      {
        t: "每日屬靈作業系統",
        d: "藉著聖經、禱告與 Walk 規劃器，圍繞神的話語重整一天的優先次序。",
      },
      {
        t: "全球聖經背誦運動",
        d: "通過一節經文，以第\u00A0N\u00A0位 Wordshiper 加入譜系——再用 Verse\u00A0Card 與你的聲音邀請下一個人。",
      },
    ],
    tabs: [
      {
        t: "領受",
        d: "領受話語——全世界共享的 Manna\u00A0Moment",
      },
      {
        t: "背誦",
        d: "銘記話語——五階段 Hide\u00A0&\u00A0Test 引擎",
      },
      {
        t: "禱告",
        d: "用話語禱告——一天三次短禱",
      },
      {
        t: "創造",
        d: "讓話語在你的聲音與卡片中流淌",
      },
      {
        t: "Walk",
        d: "按話語而行——從呼召到每日實踐",
      },
    ],
    features: [
      {
        t: "Worvi — 屬靈 AI 同伴",
        d: "從不因中斷連續而定罪；以恩典邀請你回到話語。",
      },
      {
        t: "Jog 滾輪 — 1.5\u00A0秒讀經",
        d: "即使在敬拜中，也能在 1.5\u00A0秒內打開聖經。離線 31,112\u00A0節。",
      },
      {
        t: "Verse\u00A0Card — 流動的告白",
        d: "通過一節經文，卡片便誕生——經文、譜系編號、聲音 QR。",
      },
      {
        t: "25\u00A0種語言",
        d: "可在母語之外，以雙語或三語背誦。",
      },
    ],
    demoNote: "真實應用介面",
  },
  movement: {
    label: "運動",
    subtitle: "我們不是在做一個應用。\n我們在點燃一場運動。",
    title: "一節一節的\n屬靈譜系",
    lineageLead: "你是",
    lineageNum: "14,207",
    lineageTail: "位銘記這節經文的 Wordshiper",
    lineageSub: "這個數字不是分數。它標明你在神話語譜系中的位置——證明你並不孤單。",
    engines: [
      {
        t: "同步性",
        e: "此刻，一起",
        d: "「我並不孤單」——全世界在同一時刻領受同一節經文。",
      },
      {
        t: "譜系",
        e: "成為流淌的一部分",
        d: "「我屬於更宏大的河流」——加入跨越世代、語言與土地的譜系。",
      },
      {
        t: "公開成果",
        e: "流動的告白",
        d: "「我的告白流向世界」——Verse\u00A0Card 與你的聲音邀請下一個人。",
      },
    ],
    promise: "沒有羞恥。沒有噪音。一節經文。敬拜的一生。",
  },
  global: {
    label: "直到萬國",
    title: "流入家庭、教會、城市\n與萬國的敬拜",
    body: "我們夢想記念神話語的人成為真正的 Wordshiper——在所處之地行公義、好憐憫、謙卑與神同行。",
    stats: [
      {
        n: "1.9B",
        d: "全球基督徒\n我們渴望服事的人群",
      },
      {
        n: "25",
        d: "種語言\n雙語與三語背誦",
      },
      {
        n: "3",
        d: "同一核心上的獨立應用\nWordshiper · Verbum · Pasuk",
      },
    ],
    whitelabel:
      "在同一核心設計系統上：Wordshiper（新教）、Verbum（天主教）、Pasuk（猶太）——各自尊榮傳統，同屬一場神話語運動。",
  },
  roadmap: {
    label: "路線圖",
    title: "運動已經開始",
    phases: [
      {
        t: "Phase\u00A01 — MVP",
        d: "核心循環：領受 · 背誦 · 加入譜系",
      },
      {
        t: "Phase\u00A02 — Routine",
        d: "每日三次會話 · Walk 規劃器 · Worvi",
      },
      {
        t: "Phase\u00A03 — Launch",
        d: "2026年12月 — 首批\u00A01,000\u00A0人種子社群",
      },
      {
        t: "Phase\u00A04 — Expansion",
        d: "Voice\u00A0Feed · 頻道 · 三個白標應用",
      },
    ],
  },
  cta: {
    title: "我們正在尋找首批\u00A01,000\u00A0人\n一同領受第一份嗎哪",
    sub: "預登記即可獲得你的譜系編號。上線之日，所有人在同一時刻領受第一份嗎哪。",
    placeholder: "電子信箱",
    button: "預登記",
    success: "謝謝你！你已加入譜系。",
    successWithNumber: (n: number) =>
      `謝謝你！你是 Wordshiper #${n}。請查收郵件以確認你的譜系。`,
    error: "登記失敗。請再試一次。",
    declaration: "是的，我是 Wordshiper！",
  },
  donate: {
    eyebrow: "好叫一天一節抵達萬國",
    title: "與神話語運動同行",
    sub: "Wordshiper Ministry Inc. 是美國 501(c)(3) 非營利組織。你的奉獻推動全球聖經背誦與禱告節奏。",
    oneTime: "一次性",
    monthly: "每月",
    custom: "自訂金額",
    customPlaceholder: "輸入金額",
    give: "奉獻",
    processing: "連線中…",
    taxNote: "美國可抵稅 · EIN 33-1561112 · 收據由 Stripe 提供。",
    successTitle: "謝謝你",
    successSub: "你的奉獻幫助神話語的譜系繼續流淌。",
    error: "無法開始結帳。請寄信至 info@wordshiper.org。",
    backHome: "返回首頁",
  },
  investors: {
    navTitle: "投資者",
    title: "尋找夥伴，共同書寫神話語運動的\n下一章",
    sub: "Wordshiper 以 Wordshiper Ministry Inc.（501(c)(3)）與 Wordshiper PBC, Inc. 營運——共同守護永續性與使命。",
    points: [
      {
        t: "經過驗證的運動設計",
        d: "同步性·譜系·公開成果——以屬靈意義重塑三大引擎。",
      },
      {
        t: "永續模式",
        d: "個人永久免費。Pro\u00A0Organization 與自願奉獻維持營運。無廣告。",
      },
      {
        t: "為營運而建造的技術",
        d: "全球 TTS 快取從結構上降低規模化語音成本。",
      },
      {
        t: "白標擴展",
        d: "同一核心引擎進入新教、天主教與猶太市場。",
      },
    ],
    teamTitle: "領導團隊",
    team: [
      {
        n: "Jaedon Um",
        r: "CEO / Founder",
      },
      {
        n: "Eunhee Kim",
        r: "CCO",
      },
      {
        n: "Hyungon Kim",
        r: "CTO",
      },
    ],
    philosophy: "使命先於技術。話語先於介面。信任先於成長。",
    contactTitle: "索取 IR 資料與投資諮詢",
    contactSub: "可按請求提供商業計畫、財務預測與產品演示。",
    contactBtn: "聯絡我們",
    backHome: "返回首頁",
  },
  aboutPage: {
    title: "關於 Wordshiper",
    subtitle: "好叫一天一節，成為敬拜的一生。",
    toc: [
      {
        id: "what",
        label: "什麼是 Wordshiper？",
      },
      {
        id: "mission",
        label: "使命",
      },
      {
        id: "vision",
        label: "異象",
      },
      {
        id: "identity",
        label: "身分",
      },
      {
        id: "thesis",
        label: "主張",
      },
    ],
    what: {
      label: "什麼是 Wordshiper？",
      title: "把話語寫在心上，\n並重整一天的應用",
      lead: "Wordshiper 幫助世界各地的人每天銘記並背誦神話語的一節——好叫他們在資訊過載與忙碌中，擺正屬靈優先次序，並享受與神同行。",
      body: "我們不止於幫助使用者「背一節經文」。Wordshiper 提供每日屬靈日常，引導你聆聽、開口、背誦、禱告，並把一節經文實踐為人生優先。",
    },
    mission: {
      label: "使命",
      title: "好叫小小習慣\n流向萬國",
      lead: "Wordshiper 幫助世界各地的人每天銘記並背誦神話語的一節——好叫他們在資訊過載與忙碌中，擺正屬靈優先次序，並享受與神同行。",
      habitsTitle: "三項每日習慣",
      habits: [
        {
          t: "一天一節",
          d: "聽它、說它、寫在心上。",
        },
        {
          t: "三次短禱",
          d: "藉著話語回應神。",
        },
        {
          t: "按話語重整一天",
          d: "圍繞聖經重置人生優先。",
        },
      ],
      close:
        "這小小的習慣改變一顆心，恢復一個家庭的禱告，更新一個群體的敬拜——最終成為流向萬國的神話語運動。這就是 Wordshiper 的使命。",
    },
    vision: {
      label: "異象",
      title: "藉著神話語\n興起 Worshiper",
      lead: "Wordshiper 的異象，是興起藉著神話語敬拜神的 Worshiper。",
      body: "我們夢想人們藉著聽、說、記、活出話語的小小習慣——在人生各處成為討神喜悅的真正敬拜者。",
      close:
        "世界各地的人領受同一節經文，用自己的語言與聲音告白，並在所處之地活出來——全球聖經背誦運動。這就是我們的異象。",
    },
    identity: {
      label: "身分",
      title: "Word\u00A0+\u00A0Worshiper",
      lead: "Wordshiper 不只是一款聖經應用。",
      body: "Wordshiper 意味著：把神的話語寫在心上並活出來，以此敬拜神的人。",
      word: "Word",
      wordD: "神活潑的話語",
      worshiper: "Worshiper",
      worshiperD: "在那話語前獻上心靈，並以生命回應的人",
      result:
        "因此 Wordshiper 是藉著話語記念神、用話語敬拜神、並按話語與神同行的人。",
    },
    thesis: {
      label: "主張",
      title: "一個平台，\n三層結構",
      lead: "Wordshiper 是聖經背誦應用、重整一天的每日屬靈 OS，以及全球聖經背誦運動——合而為一地設計。",
      layers: [
        {
          t: "聖經背誦應用",
          d: "幫助你每天領受、聆聽、開口並背誦一節經文。",
        },
        {
          t: "每日屬靈 OS",
          d: "藉著聖經、禱告與 Walk 規劃器，圍繞神的話語重整一天的優先次序。",
        },
        {
          t: "全球聖經背誦運動",
          d: "通過一節經文，以第\u00A0N\u00A0位 Wordshiper 加入譜系——再用 Verse\u00A0Card 與你的聲音邀請下一個人。",
        },
      ],
    },
    orgNote:
      "Wordshiper Ministry 是美國 501(c)(3) 非營利組織。個人使用永久免費。奉獻與夥伴關係支撐這場運動。",
  },
  footer: {
    tagline: "一天一節。敬拜的一生。",
    legal:
      "© 2024 Wordshiper Ministry Inc. · Based in New York, U.S.A. · 501(c)(3) Nonprofit · EIN: 33-1561112",
    address: "5 Union Square West FRNT 1 #1299, New York, NY 10003, U.S.A.",
  },
};

export default locale;
