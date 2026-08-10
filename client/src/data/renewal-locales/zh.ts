import type { RenewalCopy } from "@/data/renewal-copy";

const locale: RenewalCopy = {
  chrome: {
    home: "首页",
    searchLanguages: "搜索语言…",
    chooseLanguage: "选择你的语言",
    languagesCount: "种语言",
    allRegions: "全部地区",
    all: "全部",
    heroSlidesAria: "Wordshiper 介绍幻灯片",
    slideSelectorAria: "幻灯片选择",
    lineageNumber: "你的谱系编号",
    lineageEmailNote: "我们已发送确认邮件——请查收收件箱。",
    donatePreparingEyebrow: "即将推出",
    donatePreparingTitle: "奉献功能准备中",
    donatePreparingBody:
      "奉献链接目前正在准备中。\n" +
      "我们会在更安全、更顺畅的奉献体验就绪后，\n" +
      "重新开放。",
    donatePreparingCta: "知道了",
    preregisterOpensEyebrow: "2026年\u00A012月\u00A01日开放",
    preregisterOpensTitle: "预登记于12月\u00A01日开启",
    preregisterOpensBody:
      "谱系预登记将于2026年\u00A012月\u00A01日开启。\n" +
      "当天，以最新技术全新打造的报名入口，\n" +
      "将迎接首批\u00A01,000位 Wordshiper。",
    preregisterOpensCta: "知道了",
  },
  nav: {
    product: "流转",
    routine: "日常",
    movement: "运动",
    roadmap: "路线图",
    about: "关于",
    investors: "投资者",
    donate: "奉献",
    preregister: "预登记",
    why: "为何",
    identity: "身份",
  },
  hero: {
    badge: "将于\u00A02026年12月发布",
    slogan: "一天一节。敬拜的一生。",
    declaration: "我是 Wordshiper。",
    cta1: "加入首批\u00A01,000\u00A0人",
    cta2: "为何选择 Wordshiper",
    lineageNote: "预登记即可获得你的谱系编号",
    slides: [
      {
        label: "什么是 Wordshiper？",
        title1: "背诵一节经文，",
        title2: "重整你的整天。",
        body: "一款帮助你默想并背诵一节圣经、每天重复三次短祷、恢复属灵·身体·情感的优先次序，并活出呼召人生的应用。",
        visual: "home" as const,
      },
      {
        label: "独特之处",
        title1: "你并不孤单。",
        title2: "这就是福音流淌的方式。",
        body: "基于位置与群体的频道，把你与附近的同路人连接起来。24\u00A0种语言的双语／三语支持。分享、奉献与频道成为福音的道路。Wordshiper 不只是工具——它是以神话语为中心的生活平台。",
        visual: "jog" as const,
      },
      {
        label: "三重身份",
        title1: "背诵应用 · 属灵 OS ·",
        title2: "全球神话语运动",
        body: "每天领受、聆听、开口、背诵一节经文。用十五分钟重整一天。通过一节经文，以第\u00A0N\u00A0位 Wordshiper 加入谱系——再用 Verse\u00A0Card 与你的声音邀请下一个人。",
        visual: "home" as const,
      },
    ],
  },
  why: {
    label: "为何是 Wordshiper",
    title: "连接从未如此紧密，\n心灵却更加分散",
    lead:
      "我们活在信息的洪流与不息的忙碌之中。\n" +
      "无数声音每天摇动我们的心，人生的优先次序也轻易散落。",
    points: [
      {
        t: "噪音与匆忙",
        d: "人们更连接，却更分散——消费更多信息，却在真理中停留的时间不断缩短。",
      },
      {
        t: "敬拜的渴慕",
        d: "许多人渴望认识神，成为真正的敬拜者。然而在日常的速度与压力下，他们难以记念神、与祂同行，并以生命敬拜。",
      },
      {
        t: "创立之问",
        d: "一个人如何能每天藉着神的话语记念神、与祂同行，并活出敬拜的人生？",
      },
    ],
    answer:
      "当一节经文深深种在一颗心里，\n" +
      "那话语便成为胜过恐惧、穿越艰难的力量，\n" +
      "也把散落的属灵优先次序重新转回神那里。\n\n" +
      "请把这话语作为产业留下——\n" +
      "留给你所爱的儿女，也留给你的父母。\n\n" +
      "我们要日复一日地被更新，\n" +
      "成为神所喜悦的敬拜者。",
    answerRef: "— Wordshiper 开始的原因",
  },
  identity: {
    label: "什么是 Wordshiper",
    title: "以神话语为中心的\n生活平台",
    definition:
      "一款帮助你默想并背诵一节圣经、每天重复三次短祷、恢复散落人生的属灵·身体·情感优先次序，并活出呼召的应用。",
    sub: "Word\u00A0+\u00A0Worshiper。藉着铭记并活出神的话语来敬拜神的人。",
    word: "Word",
    wordD: "神活泼的话语",
    worshiper: "Worshiper",
    worshiperD: "在那话语前献上心灵，并以生命回应的人",
    result: "帮助人们成为铭记神话语的敬拜者——Wordshiper",
    layers: [
      {
        t: "圣经背诵应用",
        d: "帮助用户每天领受、聆听、开口并背诵一节经文。",
      },
      {
        t: "每日属灵 OS",
        d: "藉着圣经、祷告与 Walk 规划器，围绕神的话语重整一天的优先次序。",
      },
      {
        t: "全球圣经背诵运动",
        d: "通过一节经文，以第\u00A0N\u00A0位 Wordshiper 加入谱系——再用 Verse\u00A0Card 与你的声音邀请下一个人。",
      },
    ],
    notOnly:
      "基于位置与群体的频道，把你与当地同路人连接起来。默认英语，并提供 24\u00A0种语言的双语／三语支持。经文不是独自背诵——而是一起分享、一起活着。",
    forWhom:
      "分享、奉献与频道成为“福音的道路”。Wordshiper 不只是应用工具——它是以神话语为中心的生活平台。",
  },
  mission: {
    label: "使命",
    title: "恢复属灵优先次序。\n重获与神同行的喜乐。",
    body: "Wordshiper 帮助世界各地的人每天铭记并背诵神话语的一节——好叫他们在信息过载与忙碌中，摆正属灵优先次序，并享受与神同行。",
    habits: [
      {
        t: "一天一节",
        d: "听 · 说 · 背",
      },
      {
        t: "三次短祷",
        d: "藉着话语回应神",
      },
      {
        t: "重整一天",
        d: "把它实践为人生的优先",
      },
    ],
    close:
      "这小小的习惯改变一颗心，恢复一个家庭的祷告，更新一个群体的敬拜——最终成为流向万国的神话语运动。这就是 Wordshiper 的使命。",
  },
  vision: {
    label: "异象",
    title: "藉着神话语的\n全球敬拜运动",
    body: "Wordshiper 的异象，是兴起藉着神话语敬拜神的 Worshiper。",
    detail:
      "世界各地的人领受同一节经文，用自己的语言与声音告白，并在所处之地活出来——敬拜流入家庭、教会、城市与万国的全球圣经背诵运动。",
  },
  routine: {
    label: "核心日常",
    title: "一天三次，\n每次五分钟",
    sub: "每次会话由 Walk 规划器闹钟自动触发，使一天三次成为生命节奏。早晨领受，中午回顾，夜晚确认——直到一节经文渗入生命。",
    alarmNote: "Walk 规划器闹钟",
    principle:
      "Tiny Habits——每次五分钟轻到足以每天重复，同时兼顾记忆留存与属灵深度。",
    sessions: [
      {
        time: "早晨 · 5 分钟",
        when: "醒来时 · Walk 规划器闹钟",
        items: [
          "祷告 1 分钟 — 晨祷",
          "背诵 2 分钟 — 今日经文",
          "默想 2 分钟 — 应用话语",
        ],
      },
      {
        time: "中午 · 5 分钟",
        when: "午餐前 · Walk 规划器闹钟",
        items: [
          "祷告 1 分钟 — 感恩",
          "复习 2 分钟 — 重复早晨经文",
          "Walk 检视 2 分钟 — 今日优先",
        ],
      },
      {
        time: "晚上 · 5 分钟",
        when: "睡前 · Walk 规划器闹钟",
        items: [
          "祷告 1 分钟 — 一日反思",
          "确认 2 分钟 — Hide & Test",
          "感恩 2 分钟 — 今日感谢",
        ],
      },
    ],
    sum: "3 × 5分钟 = 一天15分钟",
    sumSub: "按属灵优先次序度过每一天",
    balance: [
      {
        t: "属灵优先",
        d: "藉着话语、祷告、默想与神同行",
      },
      {
        t: "身体节奏",
        d: "与起床、用餐、休息同步的日循环",
      },
      {
        t: "情感恢复",
        d: "不定罪的鼓励；把感恩记下来",
      },
    ],
  },
  product: {
    label: "产品身份",
    title: "一个平台，\n三层结构",
    sub: "圣经背诵应用、每日属灵 OS、全球神话语运动——合而为一地设计。",
    thesis: [
      {
        t: "圣经背诵应用",
        d: "帮助用户每天领受、聆听、开口并背诵一节经文。",
      },
      {
        t: "每日属灵操作系统",
        d: "藉着圣经、祷告与 Walk 规划器，围绕神的话语重整一天的优先次序。",
      },
      {
        t: "全球圣经背诵运动",
        d: "通过一节经文，以第\u00A0N\u00A0位 Wordshiper 加入谱系——再用 Verse\u00A0Card 与你的声音邀请下一个人。",
      },
    ],
    tabs: [
      {
        t: "领受",
        d: "领受话语——全世界共享的 Manna\u00A0Moment",
      },
      {
        t: "背诵",
        d: "铭记话语——五阶段 Hide\u00A0&\u00A0Test 引擎",
      },
      {
        t: "祷告",
        d: "用话语祷告——一天三次短祷",
      },
      {
        t: "创造",
        d: "让话语在你的声音与卡片中流淌",
      },
      {
        t: "Walk",
        d: "按话语而行——从呼召到每日实践",
      },
    ],
    features: [
      {
        t: "Worvi — 属灵 AI 同伴",
        d: "从不因中断连续而定罪；以恩典邀请你回到话语。",
      },
      {
        t: "Jog 滚轮 — 1.5\u00A0秒读经",
        d: "即使在敬拜中，也能在 1.5\u00A0秒内打开圣经。离线 31,112\u00A0节。",
      },
      {
        t: "Verse\u00A0Card — 流动的告白",
        d: "通过一节经文，卡片便诞生——经文、谱系编号、声音 QR。",
      },
      {
        t: "24\u00A0种语言",
        d: "可在母语之外，以双语或三语背诵。",
      },
    ],
    demoNote: "真实应用界面",
  },
  movement: {
    label: "运动",
    subtitle: "我们不是在做一个应用。\n我们在点燃一场运动。",
    title: "一节一节的\n属灵谱系",
    lineageLead: "你是",
    lineageNum: "14,207",
    lineageTail: "位铭记这节经文的 Wordshiper",
    lineageSub: "这个数字不是分数。它标明你在神话语谱系中的位置——证明你并不孤单。",
    engines: [
      {
        t: "同步性",
        e: "此刻，一起",
        d: "“我并不孤单”——全世界在同一时刻领受同一节经文。",
      },
      {
        t: "谱系",
        e: "成为流淌的一部分",
        d: "“我属于更宏大的河流”——加入跨越世代、语言与土地的谱系。",
      },
      {
        t: "公开成果",
        e: "流动的告白",
        d: "“我的告白流向世界”——Verse\u00A0Card 与你的声音邀请下一个人。",
      },
    ],
    promise: "没有羞耻。没有噪音。一节经文。敬拜的一生。",
  },
  global: {
    label: "直到万国",
    title: "流入家庭、教会、城市\n与万国的敬拜",
    body: "我们梦想记念神话语的人成为真正的 Wordshiper——在所处之地行公义、好怜悯、谦卑与神同行。",
    stats: [
      {
        n: "1.9B",
        d: "全球基督徒\n我们渴望服事的人群",
      },
      {
        n: "24",
        d: "种语言\n双语与三语背诵",
      },
      {
        n: "3",
        d: "同一核心上的独立应用\nWordshiper · Verbum · Pasuk",
      },
    ],
    whitelabel:
      "在同一核心设计系统上：Wordshiper（新教）、Verbum（天主教）、Pasuk（犹太）——各自尊荣传统，同属一场神话语运动。",
  },
  roadmap: {
    label: "路线图",
    title: "运动已经开始",
    phases: [
      {
        t: "Phase\u00A01 — MVP",
        d: "核心循环：领受 · 背诵 · 加入谱系",
      },
      {
        t: "Phase\u00A02 — Routine",
        d: "每日三次会话 · Walk 规划器 · Worvi",
      },
      {
        t: "Phase\u00A03 — Launch",
        d: "2026年12月 — 首批\u00A01,000\u00A0人种子社群",
      },
      {
        t: "Phase\u00A04 — Expansion",
        d: "Voice\u00A0Feed · 频道 · 三个白标应用",
      },
    ],
  },
  cta: {
    title: "我们正在寻找首批\u00A01,000\u00A0人\n一同领受第一份吗哪",
    sub: "预登记即可获得你的谱系编号。上线之日，所有人在同一时刻领受第一份吗哪。",
    placeholder: "电子邮箱",
    button: "预登记",
    success: "谢谢你！你已加入谱系。",
    successWithNumber: (n: number) =>
      `谢谢你！你是 Wordshiper #${n}。请查收邮件以确认你的谱系。`,
    error: "登记失败。请再试一次。",
    declaration: "是的，我是 Wordshiper！",
  },
  donate: {
    eyebrow: "好叫一天一节抵达万国",
    title: "与神话语运动同行",
    sub: "Wordshiper Ministry Inc. 是美国 501(c)(3) 非营利组织。你的奉献推动全球圣经背诵与祷告节奏。",
    oneTime: "一次性",
    monthly: "每月",
    custom: "自定义金额",
    customPlaceholder: "输入金额",
    give: "奉献",
    processing: "连接中…",
    taxNote: "美国可抵税 · EIN 33-1561112 · 收据由 Stripe 提供。",
    successTitle: "谢谢你",
    successSub: "你的奉献帮助神话语的谱系继续流淌。",
    error: "无法开始结账。请发送邮件至 info@wordshiper.org。",
    backHome: "返回首页",
  },
  investors: {
    navTitle: "投资者",
    title: "寻找伙伴，共同书写神话语运动的\n下一章",
    sub: "Wordshiper 以 Wordshiper Ministry Inc.（501(c)(3)）与 Wordshiper PBC, Inc. 运营——共同守护可持续性与使命。",
    points: [
      {
        t: "经过验证的运动设计",
        d: "同步性·谱系·公开成果——以属灵意义重塑三大引擎。",
      },
      {
        t: "可持续模式",
        d: "个人永久免费。Pro\u00A0Organization 与自愿奉献维持运营。无广告。",
      },
      {
        t: "为运营而建造的技术",
        d: "全球 TTS 缓存从结构上降低规模化语音成本。",
      },
      {
        t: "白标扩展",
        d: "同一核心引擎进入新教、天主教与犹太市场。",
      },
    ],
    teamTitle: "领导团队",
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
    philosophy: "使命先于技术。话语先于界面。信任先于增长。",
    contactTitle: "索取 IR 资料与投资咨询",
    contactSub: "可按请求提供商业计划、财务预测与产品演示。",
    contactBtn: "联系我们",
    backHome: "返回首页",
  },
  aboutPage: {
    title: "关于 Wordshiper",
    subtitle: "好叫一天一节，成为敬拜的一生。",
    toc: [
      {
        id: "what",
        label: "什么是 Wordshiper？",
      },
      {
        id: "mission",
        label: "使命",
      },
      {
        id: "vision",
        label: "异象",
      },
      {
        id: "identity",
        label: "身份",
      },
      {
        id: "thesis",
        label: "主张",
      },
    ],
    what: {
      label: "什么是 Wordshiper？",
      title: "把话语写在心上，\n并重整一天的应用",
      lead: "Wordshiper 帮助世界各地的人每天铭记并背诵神话语的一节——好叫他们在信息过载与忙碌中，摆正属灵优先次序，并享受与神同行。",
      body: "我们不止于帮助用户“背一节经文”。Wordshiper 提供每日属灵日常，引导你聆听、开口、背诵、祷告，并把一节经文实践为人生优先。",
    },
    mission: {
      label: "使命",
      title: "好叫小小习惯\n流向万国",
      lead: "Wordshiper 帮助世界各地的人每天铭记并背诵神话语的一节——好叫他们在信息过载与忙碌中，摆正属灵优先次序，并享受与神同行。",
      habitsTitle: "三项每日习惯",
      habits: [
        {
          t: "一天一节",
          d: "听它、说它、写在心上。",
        },
        {
          t: "三次短祷",
          d: "藉着话语回应神。",
        },
        {
          t: "按话语重整一天",
          d: "围绕圣经重置人生优先。",
        },
      ],
      close:
        "这小小的习惯改变一颗心，恢复一个家庭的祷告，更新一个群体的敬拜——最终成为流向万国的神话语运动。这就是 Wordshiper 的使命。",
    },
    vision: {
      label: "异象",
      title: "藉着神话语\n兴起 Worshiper",
      lead: "Wordshiper 的异象，是兴起藉着神话语敬拜神的 Worshiper。",
      body: "我们梦想人们藉着听、说、记、活出话语的小小习惯——在人生各处成为讨神喜悦的真正敬拜者。",
      close:
        "世界各地的人领受同一节经文，用自己的语言与声音告白，并在所处之地活出来——全球圣经背诵运动。这就是我们的异象。",
    },
    identity: {
      label: "身份",
      title: "Word\u00A0+\u00A0Worshiper",
      lead: "Wordshiper 不只是一款圣经应用。",
      body: "Wordshiper 意味着：把神的话语写在心上并活出来，以此敬拜神的人。",
      word: "Word",
      wordD: "神活泼的话语",
      worshiper: "Worshiper",
      worshiperD: "在那话语前献上心灵，并以生命回应的人",
      result:
        "因此 Wordshiper 是藉着话语记念神、用话语敬拜神、并按话语与神同行的人。",
    },
    thesis: {
      label: "主张",
      title: "一个平台，\n三层结构",
      lead: "Wordshiper 是圣经背诵应用、重整一天的每日属灵 OS，以及全球圣经背诵运动——合而为一地设计。",
      layers: [
        {
          t: "圣经背诵应用",
          d: "帮助你每天领受、聆听、开口并背诵一节经文。",
        },
        {
          t: "每日属灵 OS",
          d: "藉着圣经、祷告与 Walk 规划器，围绕神的话语重整一天的优先次序。",
        },
        {
          t: "全球圣经背诵运动",
          d: "通过一节经文，以第\u00A0N\u00A0位 Wordshiper 加入谱系——再用 Verse\u00A0Card 与你的声音邀请下一个人。",
        },
      ],
    },
    orgNote:
      "Wordshiper Ministry 是美国 501(c)(3) 非营利组织。个人使用永久免费。奉献与伙伴关系支撑这场运动。",
  },
  footer: {
    tagline: "一天一节。敬拜的一生。",
    legal:
      "© 2024 Wordshiper Ministry Inc. · Based in New York, U.S.A. · 501(c)(3) Nonprofit · EIN: 33-1561112",
    address: "5 Union Square West FRNT 1 #1299, New York, NY 10003, U.S.A.",
  },
};

export default locale;
