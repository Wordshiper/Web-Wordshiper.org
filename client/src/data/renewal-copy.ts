import { useLanguage } from "@/hooks/use-language";

/**
 * Site narrative from Master Plan Opening:
 * Cover → Why → Mission → Vision → Identity → Product Thesis → Movement
 */
const copy = {
  ko: {
    nav: {
      product: "흐름",
      routine: "루틴",
      movement: "무브먼트",
      roadmap: "로드맵",
      about: "소개",
      investors: "투자자",
      donate: "후원",
      preregister: "사전등록",
      why: "왜",
      identity: "정체성",
    },
    hero: {
      badge: "2026년\u00A012월 정식\u00A0출시",
      slogan: "하루\u00A0한\u00A0구절, 예배자의 삶으로.",
      declaration: "나는 Wordshiper입니다.",
      cta1: "첫\u00A01,000명 사전등록",
      cta2: "왜 Wordshiper인가",
      lineageNote: "사전등록하시면 계보\u00A0번호가 부여됩니다",
      slides: [
        {
          label: "Wordshiper란",
          title1: "한 구절을 암송하고,",
          title2: "하루를 말씀으로 바로 세우는 앱",
          body: "한\u00A0구절의 성경 말씀을 묵상하며 암송하고, 하루 세\u00A0번의 짧은 기도를 매일 반복하며, 흐트러진 삶의 영적·신체적·정서적 우선순위를 바로 세우고 소명의 삶을 살도록 돕는 앱입니다.",
          visual: "home" as const,
        },
        {
          label: "무엇이 다른가",
          title1: "혼자가 아닙니다.",
          title2: "복음이 흘러가는 길입니다",
          body: "위치·공동체 기반 채널로 내 지역의 같은 신앙 동료와 연결되고, 24개 언어 듀얼/트리플로 말씀을 새깁니다. 공유·후원·채널은 복음이 흘러가는 길이 됩니다. Wordshiper는 도구가 아니라 말씀 중심 삶의 플랫폼입니다.",
          visual: "jog" as const,
        },
        {
          label: "3중 정체성",
          title1: "암송 앱 · 영적 OS ·",
          title2: "글로벌 말씀 운동",
          body: "매일 한\u00A0구절을 받고 듣고 말하고 암송합니다. 15분 루틴으로 하루를 재정렬합니다. 암송을 통과하면 N번째 Wordshiper로 계보에 합류하고, Verse\u00A0Card와 목소리로 다음 사람을 초대합니다.",
          visual: "home" as const,
        },
      ],
    },
    why: {
      label: "Why Wordshiper",
      title: "더 많이 연결되어 있지만,\n더 깊이 흩어진 시대",
      lead: "우리는 넘치는 정보의 홍수와 끊임없는 분주함 속에서 살아갑니다. 매일 수많은 소리와 메시지가 마음을 흔들고, 삶의 우선순위는 쉽게 흐트러집니다.",
      points: [
        {
          t: "정보와 분주함",
          d: "사람들은 더 많이 연결되어 있지만 더 깊이 흩어지고, 더 많은 정보를 소비하지만 참된 진리 안에 머무는 시간은 점점 줄어듭니다.",
        },
        {
          t: "예배의 갈망",
          d: "많은 이들이 하나님을 알고 진실한 예배자가 되기를 소망합니다. 그러나 일상의 속도와 압박 속에서 어떻게 하나님을 기억하고 동행하며 경배할지 어려움을 느낍니다.",
        },
        {
          t: "시작의 질문",
          d: "어떻게 하면 한 사람이 매일 하나님의 말씀으로 하나님을 기억하고, 동행하며, 경배하는 삶을 살아갈 수 있을까?",
        },
      ],
      answer:
        "단\u00A0한\u00A0구절의 말씀도 한 사람의 마음에 깊이 심기면, 그 말씀은 두려움을 이기게 하고, 고난을 지나가게 하며, 흐트러진 영적 우선순위를 다시 하나님께로 돌이키는 능력이 됩니다.",
      answerRef: "— Wordshiper가 시작된 이유",
    },
    identity: {
      label: "Wordshiper란",
      title: "말씀 중심의 삶을 위한 플랫폼",
      definition:
        "한\u00A0구절의 성경 말씀을 묵상하며 암송하고, 하루 세\u00A0번의 짧은 기도를 매일 반복하며, 흐트러진 삶의 영적·신체적·정서적 우선순위를 바로 세우도록 돕고 소명의 삶을 살도록 돕는 앱입니다.",
      sub: "Word\u00A0+\u00A0Worshiper. 하나님의 말씀을 마음에 새기고 삶으로 살아냄으로 하나님을 경배하는 사람을 의미합니다.",
      word: "Word",
      wordD: "하나님의 살아\u00A0있는 말씀",
      worshiper: "Worshiper",
      worshiperD: "그 말씀 앞에 마음을 드리고, 삶으로 응답하는 예배자",
      result: "말씀을 새기는 예배자(Wordshiper)로 살아가도록 돕습니다",
      layers: [
        {
          t: "Scripture Memory App",
          d: "매일 한\u00A0구절을 받고, 듣고, 말하고, 암송하도록 돕습니다.",
        },
        {
          t: "Daily Spiritual OS",
          d: "말씀·기도·Walk 플래너로 하루의 우선순위를 하나님 말씀 중심으로 재정렬합니다.",
        },
        {
          t: "Global Scripture Memory Movement",
          d: "암송을 통과하면 N번째 Wordshiper로 계보에 합류하고, Verse\u00A0Card와 목소리로 다음 사람을 초대합니다.",
        },
      ],
      notOnly:
        "위치·공동체 기반 채널로 내 지역의 같은 신앙 동료와 연결되고, 영어를 기본으로 24개 언어 듀얼/트리플을 지원합니다. 말씀은 혼자 암송하는 것이 아니라 함께 나누며 살아 움직입니다.",
      forWhom:
        "공유·후원·채널 시스템은 ‘복음이 흘러가는 길’이 됩니다. Wordshiper는 단순한 앱 도구가 아니라 말씀 중심의 삶을 위한 플랫폼입니다.",
    },
    mission: {
      label: "Mission",
      title: "영적 우선순위를 바로 세우고\n하나님과 동행하는 기쁨을",
      body: "Wordshiper는 전\u00A0세계 사람들이 매일 하나님의 말씀 한\u00A0구절을 마음에 새기고 암송함으로, 넘치는 정보와 분주한 삶 속에서도 영적 우선순위를 바로 세우고 하나님과 동행하는 기쁨을 누리도록 돕습니다.",
      habits: [
        { t: "하루 한 구절", d: "듣고 · 말하고 · 암송합니다" },
        { t: "하루 세 번의 짧은 기도", d: "말씀으로 하나님께 응답합니다" },
        { t: "말씀으로 하루를 정렬", d: "삶의 우선순위로 실천합니다" },
      ],
      close:
        "이 작은 습관이 한 사람의 마음을 바꾸고, 한 가정의 기도를 회복시키며, 한 공동체의 예배를 새롭게 하고, 마침내 열방으로 흘러가는 말씀 운동이 되도록 돕는 것이 Wordshiper의 사명입니다.",
    },
    vision: {
      label: "Vision",
      title: "말씀으로 하나님을 경배하는\n글로벌 무브먼트",
      body: "Wordshiper의 비전은 하나님의 말씀인 Word를 통해 하나님을 경배하는 Worshiper를 세우는 것입니다.",
      detail:
        "전\u00A0세계 사람들이 같은 말씀을 받고, 각자의 언어와 목소리로 그 말씀을 고백하며, 삶의 자리에서 그 말씀을 살아내는 글로벌 말씀\u00A0암송 무브먼트입니다. 그 예배의 삶이 가정과 교회와 도시와 열방으로 흘러갑니다.",
    },
    routine: {
      label: "핵심 루틴",
      title: "하루 세\u00A0번, 각\u00A05분",
      sub: "각 세션은 Walk 탭의 플래너 알람으로 자동 호출되어, 하루 세\u00A0번이 생활 루틴으로 자리잡습니다. 아침에 받고, 점심에 되새기고, 저녁에 확인하는 반복으로 한\u00A0구절이 삶에 스며듭니다.",
      alarmNote: "Walk 플래너 알람",
      principle:
        "Tiny Habits 원칙 — 각 세션 5분으로 부담 없이 매일 반복 가능하면서도, 리텐션과 영적 깊이를 동시에 확보합니다.",
      sessions: [
        {
          time: "아침\u00A05분",
          when: "기상 시 · Walk 플래너 알람",
          items: ["기도 1분 — 아침 기도", "말씀 암송 2분 — 오늘의 한\u00A0구절", "묵상 2분 — 말씀 적용 묵상"],
        },
        {
          time: "점심\u00A05분",
          when: "식사 전 · Walk 플래너 알람",
          items: ["기도 1분 — 감사 기도", "암송 복습 2분 — 아침 구절 반복", "Walk 점검 2분 — 오늘의 우선순위 확인"],
        },
        {
          time: "저녁\u00A05분",
          when: "취침 전 · Walk 플래너 알람",
          items: ["기도 1분 — 하루 회고 기도", "암송 확인 2분 — Hide\u00A0&\u00A0Test", "감사 기록 2분 — 오늘의 감사"],
        },
      ],
      sum: "하루 3회\u00A0×\u00A05분\u00A0=\u00A015분",
      sumSub: "영적 우선순위로 하루를 살다",
      balance: [
        { t: "영적 우선순위", d: "말씀·기도·묵상으로 하나님과 동행" },
        { t: "신체적 리듬", d: "기상·식사·취침에 맞춘 하루의 사이클" },
        { t: "정서적 회복", d: "정죄 없는 격려와 감사의 기록" },
      ],
    },
    product: {
      label: "제품 정체성",
      title: "세 겹으로 설계된 하나의 플랫폼",
      sub: "암송 앱이면서, 하루를 재정렬하는 영적 OS이며, 동시에 글로벌 말씀 암송 무브먼트입니다.",
      thesis: [
        {
          t: "Scripture Memory App",
          d: "사용자가 매일 한\u00A0구절을 받고, 듣고, 말하고, 암송하도록 돕습니다.",
        },
        {
          t: "Daily Spiritual Operating System",
          d: "말씀·기도·Walk 플래너로 하루의 우선순위를 하나님 말씀 중심으로 재정렬합니다.",
        },
        {
          t: "Global Scripture Memory Movement",
          d: "암송을 통과하면 N번째 Wordshiper로 계보에 합류하고, Verse\u00A0Card와 목소리로 다음 사람을 초대합니다.",
        },
      ],
      tabs: [
        { t: "Receive", d: "말씀을 받습니다 — 전\u00A0세계가 같은 순간 같은 구절을 받는 Manna\u00A0Moment" },
        { t: "Memorize", d: "말씀을 마음에 새깁니다 — 5단계 Hide\u00A0&\u00A0Test 암송 엔진" },
        { t: "Pray", d: "말씀으로 기도합니다 — 하루 세\u00A0번의 짧은 기도" },
        { t: "Create", d: "말씀을 나의 목소리와 카드로 흘려보냅니다" },
        { t: "Walk", d: "말씀대로 하나님과 동행합니다 — 사명에서 일일 실천까지" },
      ],
      features: [
        { t: "Worvi — 영적 AI\u00A0동반자", d: "루틴이 끊어져도 정죄하지 않고, 은혜와 회복으로 다시 말씀 앞으로 초대합니다." },
        { t: "조그 휠 — 1.5초 성경 도달", d: "예배 중에도 단\u00A01.5초 만에 본문에 도달. 31,111절을 오프라인에서도 읽고 검색합니다." },
        { t: "Verse\u00A0Card — 흘러가는 고백", d: "암송을 통과하면 구절·계보\u00A0번호·목소리 QR이 담긴 카드가 세상으로 흘러갑니다." },
        { t: "24개 언어", d: "모국어와 함께 두세 언어로 말씀을 암송할 수 있습니다." },
      ],
      demoNote: "실제 앱 화면",
    },
    movement: {
      label: "Movement",
      subtitle: "우리는 앱을 만들지 않습니다.\n우리는 운동을 일으킵니다.",
      title: "한\u00A0구절이 이어지는 영적 계보",
      lineageLead: "당신은",
      lineageNum: "14,207",
      lineageTail: "번째로 이 구절을 마음에 새긴 Wordshiper입니다",
      lineageSub: "이 숫자는 점수가 아닙니다. 말씀의 계보 안에서 나의 위치를 보여주는 표지이며, 내가 혼자가 아니라는 증거입니다.",
      engines: [
        { t: "동시성", e: "Synchronicity", d: "\u201c나는 혼자가 아니다\u201d — 전\u00A0세계가 같은 순간 같은 말씀을 받습니다." },
        { t: "계보", e: "Lineage", d: "\u201c나는 거대한 흐름의 일부다\u201d — 세대·언어·지역을 잇는 말씀의 계보에 합류합니다." },
        { t: "공개 결과물", e: "Public Artifact", d: "\u201c나의 고백이 세상으로 흘러간다\u201d — Verse\u00A0Card와 목소리가 다음 사람을 부릅니다." },
      ],
      promise: "No shame. No noise. One verse. A life of worship.",
    },
    global: {
      label: "열방으로",
      title: "예배의 삶이 가정·교회·도시·열방으로",
      body: "말씀을 기억하는 사람들이 삶의 자리에서 공의를 행하고, 인자를 사랑하며, 겸손히 하나님과 동행하는 진실한 Wordshiper로 세워지기를 꿈꿉니다.",
      stats: [
        { n: "19억", d: "전\u00A0세계 기독교 인구 — 우리가 섬기고자 하는 사람들" },
        { n: "24", d: "지원 언어 — 듀얼·트리플 언어 암송" },
        { n: "3", d: "하나의 코어로 세워지는 독립\u00A0앱 (Wordshiper · Verbum · Pasuk)" },
      ],
      whitelabel:
        "하나의 코어 디자인 시스템 위에 개신교(Wordshiper), 천주교(Verbum), 유대교(Pasuk) — 각 전통의 정통성을 지키며 같은 말씀 운동을 이룹니다.",
    },
    roadmap: {
      label: "로드맵",
      title: "운동은 이미 시작되었습니다",
      phases: [
        { t: "Phase\u00A01 — MVP", d: "핵심 루프: 말씀 수신 · 암송 · 계보 합류" },
        { t: "Phase\u00A02 — 루틴", d: "하루 3회 루틴 · Walk 플래너 · Worvi" },
        { t: "Phase\u00A03 — 정식 출시", d: "2026년\u00A012월 — 첫\u00A01,000명의 씨앗 공동체" },
        { t: "Phase\u00A04 — 확장", d: "Voice\u00A0Feed · 채널 · 화이트라벨 3앱" },
      ],
    },
    cta: {
      title: "첫 만나를 함께 받을 1,000명을 찾습니다",
      sub: "사전등록하시면 계보\u00A0번호가 부여됩니다. 출시일, 전원이 같은 시각에 첫 만나를 받습니다.",
      placeholder: "이메일 주소",
      button: "사전등록하기",
      success: "감사합니다! 계보에 합류하셨습니다.",
      successWithNumber: (n: number) =>
        `감사합니다! 당신은 ${n}번째로 이 구절을 마음에 새길 Wordshiper입니다. 이메일을 확인해 주세요.`,
      error: "등록에 실패했습니다. 다시 시도해주세요.",
      declaration: "Yes, I am a Wordshiper!",
    },
    donate: {
      eyebrow: "하루 한 구절이 열방으로 흘러가도록",
      title: "말씀 운동에 동참해 주세요",
      sub: "Wordshiper Ministry Inc.는 미국 501(c)(3) 비영리 사역입니다. 여러분의 후원은 성경 암송·기도 루틴을 전 세계에 전하는 일에 쓰입니다.",
      oneTime: "일시 후원",
      monthly: "매월 후원",
      custom: "다른 금액",
      customPlaceholder: "금액 입력",
      give: "후원하기",
      processing: "연결 중…",
      taxNote: "미국 세법상 공제 가능 기부입니다 · EIN 33-1561112 · 영수증은 Stripe에서 제공됩니다.",
      successTitle: "감사드립니다",
      successSub: "당신의 후원이 말씀의 계보를 이어갑니다.",
      error: "결제 연결에 실패했습니다. info@wordshiper.org로 문의해 주세요.",
      backHome: "홈으로",
    },
    investors: {
      navTitle: "투자자",
      title: "말씀 운동의 다음 장을\n함께 쓰실 분을 찾습니다",
      sub: "Wordshiper는 501(c)(3) 비영리 사역(Wordshiper Ministry Inc.)과 임팩트 법인(Wordshiper PBC, Inc.)의 이중 구조로 운영됩니다.",
      points: [
        { t: "검증된 무브먼트 설계", d: "동시성·계보·공개 결과물 — 3대 엔진을 영적 의미로 재정의한 제품 설계." },
        { t: "지속 가능한 모델", d: "개인은 영구 무료. Pro\u00A0Organization과 자발적 후원이 운영을 지탱합니다. 광고는 없습니다." },
        { t: "운영 가능성의 기술", d: "TTS 글로벌 캐시로 음성 비용을 구조적으로 절감합니다." },
        { t: "화이트라벨 확장성", d: "하나의 코어로 개신교·천주교·유대교 3개 시장에 진입합니다." },
      ],
      teamTitle: "리더십",
      team: [
        { n: "Jaedon Um", r: "CEO / Founder" },
        { n: "Eunhee Kim", r: "CCO" },
        { n: "Hyungon Kim", r: "CTO" },
      ],
      philosophy: "Mission before technology. Word before interface. Trust before growth.",
      contactTitle: "IR 자료 요청 및 투자 문의",
      contactSub: "상세한 사업 계획서, 재무 전망, 제품 데모는 문의 주시면 제공해 드립니다.",
      contactBtn: "투자 문의하기",
      backHome: "홈으로 돌아가기",
    },
    aboutPage: {
      title: "Wordshiper 소개",
      subtitle: "하루 한 구절이, 예배자의 삶으로 이어지도록.",
      toc: [
        { id: "what", label: "Wordshiper란?" },
        { id: "mission", label: "Mission" },
        { id: "vision", label: "Vision" },
        { id: "identity", label: "Identity" },
        { id: "thesis", label: "Thesis" },
      ],
      what: {
        label: "Wordshiper란?",
        title: "말씀을 마음에 새기고,\n하루를 다시 세우는 앱",
        lead:
          "Wordshiper는 전\u00A0세계 사람들이 매일 하나님의 말씀 한\u00A0구절을 마음에 새기고 암송함으로, 넘치는 정보와 분주한 삶 속에서도 영적 우선순위를 바로 세우고 하나님과 동행하는 기쁨을 누리도록 돕습니다.",
        body:
          "우리는 사용자가 성경 구절을 ‘외우는 것’에서 멈추지 않도록 돕습니다. Wordshiper는 한\u00A0구절의 말씀을 듣고, 말하고, 암송하고, 기도하고, 삶의 우선순위로 실천하도록 이끄는 매일의 영적 루틴을 제공합니다.",
      },
      mission: {
        label: "Mission",
        title: "작은 습관이 열방으로 흘러가도록",
        lead:
          "Wordshiper는 전\u00A0세계 사람들이 매일 하나님의 말씀 한\u00A0구절을 마음에 새기고 암송함으로, 넘치는 정보와 분주한 삶 속에서도 영적 우선순위를 바로 세우고 하나님과 동행하는 기쁨을 누리도록 돕습니다.",
        habitsTitle: "매일의 세 가지 습관",
        habits: [
          { t: "하루 한 구절", d: "말씀을 듣고, 말하고, 마음에 새깁니다." },
          { t: "하루 세 번의 짧은 기도", d: "말씀으로 하나님께 응답합니다." },
          {
            t: "하루를 말씀으로 정렬",
            d: "삶의 우선순위를 말씀 중심으로 다시 세웁니다.",
          },
        ],
        close:
          "이 작은 습관이 한 사람의 마음을 바꾸고, 한 가정의 기도를 회복시키며, 한 공동체의 예배를 새롭게 하고, 마침내 열방으로 흘러가는 말씀 운동이 되도록 돕는 것이 Wordshiper의 사명입니다.",
      },
      vision: {
        label: "Vision",
        title: "Word로 Worshiper를 세웁니다",
        lead:
          "Wordshiper의 비전은 하나님의 말씀인 Word를 통해 하나님을 경배하는 Worshiper를 세우는 것입니다.",
        body:
          "우리는 사람들이 말씀을 듣고, 말하고, 기억하고, 살아내는 작은 습관을 통해, 삶의 모든 자리에서 하나님을 기쁘시게 하는 진실한 경배자로 세워지기를 꿈꿉니다.",
        close:
          "전\u00A0세계 사람들이 같은 말씀을 받고, 각자의 언어와 목소리로 그 말씀을 고백하며, 삶의 자리에서 그 말씀을 살아내는 글로벌 말씀\u00A0암송 무브먼트 — 그것이 우리의 비전입니다.",
      },
      identity: {
        label: "Identity",
        title: "Word + Worshiper",
        lead: "Wordshiper는 단지 성경 앱이 아닙니다.",
        body:
          "Wordshiper는 하나님의 말씀을 마음에 새기고 삶으로 살아냄으로 하나님을 경배하는 사람을 의미합니다.",
        word: "Word",
        wordD: "하나님의 살아\u00A0있는 말씀",
        worshiper: "Worshiper",
        worshiperD: "그 말씀 앞에 마음을 드리고, 삶으로 응답하는 예배자",
        result:
          "따라서 Wordshiper는 말씀을 통해 하나님을 기억하고, 말씀으로 하나님을 경배하며, 말씀대로 하나님과 동행하는 사람입니다.",
      },
      thesis: {
        label: "Thesis",
        title: "하나의 플랫폼, 세 겹의 정체성",
        lead:
          "Wordshiper는 암송 앱이면서, 하루를 재정렬하는 영적 OS이며, 동시에 글로벌 말씀 암송 무브먼트입니다.",
        layers: [
          {
            t: "Scripture Memory App",
            d: "매일 한\u00A0구절을 받고, 듣고, 말하고, 암송하도록 돕습니다.",
          },
          {
            t: "Daily Spiritual OS",
            d: "말씀·기도·Walk 플래너로 하루의 우선순위를 하나님 말씀 중심으로 다시 세웁니다.",
          },
          {
            t: "Global Scripture Memory Movement",
            d: "암송을 통과하면 N번째 Wordshiper로 계보에 합류하고, Verse\u00A0Card와 목소리로 다음 사람을 초대합니다.",
          },
        ],
      },
      orgNote:
        "Wordshiper Ministry는 미국 501(c)(3) 비영리 사역입니다. 개인 사용은 영원히 무료이며, 후원과 파트너십이 이 운동을 지탱합니다.",
    },
    footer: {
      tagline: "하루\u00A0한\u00A0구절, 예배자의 삶으로.",
      legal: "© 2024 Wordshiper Ministry Inc. · 미국 뉴욕 기반 · 501(c)(3) Nonprofit · EIN: 33-1561112",
      address: "5 Union Square West FRNT 1 #1299, New York, NY 10003, U.S.A.",
    },
  },
  en: {
    nav: {
      product: "Flow",
      routine: "Routine",
      movement: "Movement",
      roadmap: "Roadmap",
      about: "About",
      investors: "Investors",
      donate: "Donate",
      preregister: "Pre-register",
      why: "Why",
      identity: "Identity",
    },
    hero: {
      badge: "Launching December\u00A02026",
      slogan: "One\u00A0verse a day. A life of worship.",
      declaration: "I am a Wordshiper.",
      cta1: "Join the first\u00A01,000",
      cta2: "Why Wordshiper",
      lineageNote: "Pre-register and receive your lineage\u00A0number",
      slides: [
        {
          label: "What is Wordshiper?",
          title1: "Memorize one verse.",
          title2: "Realign your whole day.",
          body: "An app that helps you meditate on and memorize one Scripture verse, repeat three short prayers each day, restore spiritual · physical · emotional priorities, and live a life of calling.",
          visual: "home" as const,
        },
        {
          label: "What makes it different",
          title1: "You are not alone.",
          title2: "This is how the gospel flows.",
          body: "Location- and community-based channels connect you with fellow believers nearby. Dual/triple support across 24 languages. Sharing, giving, and channels become paths for the gospel. Wordshiper is not a mere tool — it is a platform for a Word-centered life.",
          visual: "jog" as const,
        },
        {
          label: "Triple identity",
          title1: "Memory app · Spiritual OS ·",
          title2: "Global Word movement",
          body: "Receive, hear, speak, and memorize one verse a day. Realign your day in fifteen minutes. Pass a verse and join the lineage as the Nth Wordshiper — then invite the next person with a Verse\u00A0Card and your voice.",
          visual: "home" as const,
        },
      ],
    },
    why: {
      label: "Why Wordshiper",
      title: "More connected than ever,\nyet more deeply scattered",
      lead: "We live in a flood of information and relentless busyness. Countless voices shake our hearts every day, and life's priorities scatter easily.",
      points: [
        {
          t: "Noise and hurry",
          d: "People are more connected yet more deeply scattered — consuming more information while time in truth keeps shrinking.",
        },
        {
          t: "A longing to worship",
          d: "Many want to know God and become true worshipers. Yet under the speed and pressure of daily life, they struggle to remember God, walk with Him, and worship with their lives.",
        },
        {
          t: "The founding question",
          d: "How can one person, every day, remember God through His Word, walk with Him, and live a life of worship?",
        },
      ],
      answer:
        "When even a single verse is planted deep in one heart, it becomes the power to overcome fear, pass through hardship, and turn scattered spiritual priorities back to God.",
      answerRef: "— Why Wordshiper began",
    },
    identity: {
      label: "What is Wordshiper",
      title: "A platform for a Word-centered life",
      definition:
        "An app that helps you meditate on and memorize one Scripture verse, repeat three short prayers each day, restore the spiritual · physical · emotional priorities of a scattered life, and live out your calling.",
      sub: "Word\u00A0+\u00A0Worshiper. A person who worships God by inscribing His Word and living it out.",
      word: "Word",
      wordD: "The living Word of God",
      worshiper: "Worshiper",
      worshiperD: "One who offers the heart before that Word and answers with a life",
      result: "Helping people live as worshipers who inscribe the Word — Wordshipers",
      layers: [
        {
          t: "Scripture Memory App",
          d: "Helps users receive, hear, speak, and memorize one verse each day.",
        },
        {
          t: "Daily Spiritual OS",
          d: "Realigns the day's priorities around God's Word through Scripture, prayer, and the Walk planner.",
        },
        {
          t: "Global Scripture Memory Movement",
          d: "Pass a verse and join the lineage as the Nth Wordshiper — then invite the next person with a Verse\u00A0Card and your voice.",
        },
      ],
      notOnly:
        "Location- and community-based channels connect you with fellow believers in your area. English by default, with dual/triple support across 24 languages. Scripture is not memorized alone — it is shared and kept alive together.",
      forWhom:
        "Sharing, donations, and channels become “paths for the gospel.” Wordshiper is not a mere app tool — it is a platform for a Word-centered life.",
    },
    mission: {
      label: "Mission",
      title: "Restore spiritual priorities.\nRecover the joy of walking with God.",
      body: "Wordshiper helps people worldwide inscribe and memorize one verse of God's Word each day — so that amid information overload and busyness, they can set spiritual priorities right and enjoy walking with God.",
      habits: [
        { t: "One verse a day", d: "Hear · speak · memorize" },
        { t: "Three short prayers", d: "Respond to God through the Word" },
        { t: "Realign the day", d: "Practice it as life's priority" },
      ],
      close:
        "This small habit changes one heart, restores one family's prayer, renews one community's worship — and finally becomes a Word movement flowing to the nations. That is Wordshiper's mission.",
    },
    vision: {
      label: "Vision",
      title: "A global movement of worship\nthrough the Word",
      body: "Wordshiper's vision is to raise Worshipers who worship God through His Word.",
      detail:
        "People worldwide receive the same verse, confess it in their own language and voice, and live it out where they stand — a global Scripture-memory movement whose worship flows into homes, churches, cities, and the nations.",
    },
    routine: {
      label: "Core routine",
      title: "Three times a day,\nfive minutes each",
      sub: "Each session is auto-triggered by the Walk planner alarm, so three times a day become a life rhythm. Receive in the morning, revisit at noon, confirm at night — until one verse soaks into your life.",
      alarmNote: "Walk planner alarm",
      principle:
        "Tiny Habits — five minutes each keeps it light enough to repeat daily, while securing both retention and spiritual depth.",
      sessions: [
        {
          time: "Morning\u00A0·\u00A05\u00A0min",
          when: "On waking · Walk planner alarm",
          items: ["Prayer 1\u00A0min — morning prayer", "Memorize 2\u00A0min — today's verse", "Meditate 2\u00A0min — apply the Word"],
        },
        {
          time: "Noon\u00A0·\u00A05\u00A0min",
          when: "Before lunch · Walk planner alarm",
          items: ["Prayer 1\u00A0min — gratitude", "Review 2\u00A0min — repeat the morning verse", "Walk check 2\u00A0min — today's priorities"],
        },
        {
          time: "Evening\u00A0·\u00A05\u00A0min",
          when: "Before sleep · Walk planner alarm",
          items: ["Prayer 1\u00A0min — daily reflection", "Confirm 2\u00A0min — Hide\u00A0&\u00A0Test", "Gratitude 2\u00A0min — today's thanks"],
        },
      ],
      sum: "3\u00A0×\u00A05 minutes\u00A0=\u00A015 minutes a day",
      sumSub: "Living each day by spiritual priorities",
      balance: [
        { t: "Spiritual priority", d: "Walk with God through Word, prayer, meditation" },
        { t: "Physical rhythm", d: "A daily cycle synced to waking, meals, and rest" },
        { t: "Emotional recovery", d: "Encouragement without condemnation; gratitude on record" },
      ],
    },
    product: {
      label: "Product identity",
      title: "One platform, three layers",
      sub: "A Scripture memory app, a daily spiritual OS, and a global Word movement — designed as one.",
      thesis: [
        {
          t: "Scripture Memory App",
          d: "Helps users receive, hear, speak, and memorize one verse each day.",
        },
        {
          t: "Daily Spiritual Operating System",
          d: "Realigns the day's priorities around God's Word through Scripture, prayer, and the Walk planner.",
        },
        {
          t: "Global Scripture Memory Movement",
          d: "Pass a verse and join the lineage as the Nth Wordshiper — then invite the next person with a Verse\u00A0Card and your voice.",
        },
      ],
      tabs: [
        { t: "Receive", d: "Receive the Word — the Manna\u00A0Moment the whole world shares" },
        { t: "Memorize", d: "Inscribe the Word — the 5-stage Hide\u00A0&\u00A0Test engine" },
        { t: "Pray", d: "Pray the Word — three short prayers a day" },
        { t: "Create", d: "Let the Word flow in your voice and cards" },
        { t: "Walk", d: "Walk by the Word — from calling to daily practice" },
      ],
      features: [
        { t: "Worvi — spiritual AI companion", d: "Never condemns a broken streak; invites you back to the Word with grace." },
        { t: "Jog wheel — Scripture in 1.5s", d: "Reach the Bible in 1.5\u00A0seconds, even mid-worship. 31,112 verses offline." },
        { t: "Verse\u00A0Card — a flowing confession", d: "Pass a verse and a card is born — verse, lineage number, voice QR." },
        { t: "24 languages", d: "Memorize in two or three languages alongside your mother tongue." },
      ],
      demoNote: "Actual app screens",
    },
    movement: {
      label: "Movement",
      subtitle: "We are not building an app.\nWe are igniting a movement.",
      title: "A spiritual lineage, verse by verse",
      lineageLead: "You are the",
      lineageNum: "14,207",
      lineageTail: "th Wordshiper to inscribe this verse",
      lineageSub: "This number is not a score. It marks your place in the lineage of the Word — proof you are not alone.",
      engines: [
        { t: "Synchronicity", e: "Together, now", d: "\u201cI am not alone\u201d — the whole world receives the same verse at the same moment." },
        { t: "Lineage", e: "Part of the flow", d: "\u201cI belong to a greater stream\u201d — join a lineage across generations, languages, and lands." },
        { t: "Public Artifact", e: "A flowing confession", d: "\u201cMy confession flows into the world\u201d — Verse\u00A0Cards and your voice invite the next person." },
      ],
      promise: "No shame. No noise. One\u00A0verse. A life of worship.",
    },
    global: {
      label: "To the nations",
      title: "Worship that flows into homes,\nchurches, cities, and the nations",
      body: "We dream of people who remember the Word becoming true Wordshipers — doing justice, loving kindness, and walking humbly with God where they stand.",
      stats: [
        { n: "1.9B", d: "Christians worldwide — the people we long to serve" },
        { n: "24", d: "Languages — dual & triple memorization" },
        { n: "3", d: "Independent apps on one core (Wordshiper · Verbum · Pasuk)" },
      ],
      whitelabel:
        "On one core design system: Wordshiper (Protestant), Verbum (Catholic), Pasuk (Jewish) — each honoring its tradition in one movement of the Word.",
    },
    roadmap: {
      label: "Roadmap",
      title: "The movement has already begun",
      phases: [
        { t: "Phase\u00A01 — MVP", d: "Core loop: receive · memorize · join the lineage" },
        { t: "Phase\u00A02 — Routine", d: "Three daily sessions · Walk planner · Worvi" },
        { t: "Phase\u00A03 — Launch", d: "December\u00A02026 — seed community of the first\u00A01,000" },
        { t: "Phase\u00A04 — Expansion", d: "Voice\u00A0Feed · channels · three white-label apps" },
      ],
    },
    cta: {
      title: "We are looking for the first\u00A01,000\nto receive the first manna together",
      sub: "Pre-register and receive your lineage\u00A0number. On launch day, everyone receives the first manna at the same moment.",
      placeholder: "Email address",
      button: "Pre-register",
      success: "Thank you! You have joined the lineage.",
      successWithNumber: (n: number) =>
        `Thank you! You are Wordshiper #${n}. Please check your email for your lineage confirmation.`,
      error: "Registration failed. Please try again.",
      declaration: "Yes, I am a Wordshiper!",
    },
    donate: {
      eyebrow: "So one verse a day can reach the nations",
      title: "Partner with the Word movement",
      sub: "Wordshiper Ministry Inc. is a U.S. 501(c)(3) nonprofit. Your gift fuels Scripture memorization and prayer rhythms worldwide.",
      oneTime: "One-time",
      monthly: "Monthly",
      custom: "Custom amount",
      customPlaceholder: "Enter amount",
      give: "Give",
      processing: "Connecting…",
      taxNote: "Tax-deductible in the U.S. · EIN 33-1561112 · Receipts provided by Stripe.",
      successTitle: "Thank you",
      successSub: "Your gift helps the lineage of the Word keep flowing.",
      error: "Could not start checkout. Please email info@wordshiper.org.",
      backHome: "Back home",
    },
    investors: {
      navTitle: "Investors",
      title: "Seeking partners to write\nthe next chapter of the Word movement",
      sub: "Wordshiper operates as Wordshiper Ministry Inc. (501(c)(3)) and Wordshiper PBC, Inc. — protecting sustainability and mission together.",
      points: [
        { t: "Proven movement design", d: "Synchronicity, lineage, public artifacts — three engines redefined with spiritual meaning." },
        { t: "A sustainable model", d: "Free forever for individuals. Pro\u00A0Organization and voluntary giving sustain operations. No ads." },
        { t: "Technology built to operate", d: "Global TTS cache structurally reduces voice costs at scale." },
        { t: "White-label expansion", d: "One core engine enters Protestant, Catholic, and Jewish markets." },
      ],
      teamTitle: "Leadership",
      team: [
        { n: "Jaedon Um", r: "CEO / Founder" },
        { n: "Eunhee Kim", r: "CCO" },
        { n: "Hyungon Kim", r: "CTO" },
      ],
      philosophy: "Mission before technology. Word before interface. Trust before growth.",
      contactTitle: "Request IR materials & investment inquiries",
      contactSub: "Business plan, financial projections, and product demo available on request.",
      contactBtn: "Contact us",
      backHome: "Back to home",
    },
    aboutPage: {
      title: "About Wordshiper",
      subtitle: "So one verse a day becomes a life of worship.",
      toc: [
        { id: "what", label: "What is Wordshiper?" },
        { id: "mission", label: "Mission" },
        { id: "vision", label: "Vision" },
        { id: "identity", label: "Identity" },
        { id: "thesis", label: "Thesis" },
      ],
      what: {
        label: "What is Wordshiper?",
        title: "An app that writes the Word\non the heart — and resets the day",
        lead:
          "Wordshiper helps people worldwide inscribe and memorize one verse of God's Word each day — so that amid information overload and busyness, they can set spiritual priorities right and enjoy walking with God.",
        body:
          "We do not stop at helping users “memorize a verse.” Wordshiper offers a daily spiritual routine that leads you to hear, speak, memorize, pray, and practice one verse as the priority of life.",
      },
      mission: {
        label: "Mission",
        title: "So a small habit flows to the nations",
        lead:
          "Wordshiper helps people worldwide inscribe and memorize one verse of God's Word each day — so that amid information overload and busyness, they can set spiritual priorities right and enjoy walking with God.",
        habitsTitle: "Three daily habits",
        habits: [
          { t: "One verse a day", d: "Hear it, speak it, write it on the heart." },
          { t: "Three short prayers", d: "Respond to God through the Word." },
          {
            t: "Realign the day by the Word",
            d: "Reset life's priorities around Scripture.",
          },
        ],
        close:
          "This small habit changes one heart, restores one family's prayer, renews one community's worship — and finally becomes a Word movement flowing to the nations. That is Wordshiper's mission.",
      },
      vision: {
        label: "Vision",
        title: "Raise Worshipers through the Word",
        lead:
          "Wordshiper's vision is to raise Worshipers who worship God through His Word.",
        body:
          "We dream of people becoming true worshipers who please God in every place of life — through the small habit of hearing, speaking, remembering, and living out the Word.",
        close:
          "People worldwide receive the same verse, confess it in their own language and voice, and live it where they stand — a global Scripture-memory movement. That is our vision.",
      },
      identity: {
        label: "Identity",
        title: "Word + Worshiper",
        lead: "Wordshiper is not merely a Bible app.",
        body:
          "Wordshiper means a person who worships God by writing His Word on the heart and living it out.",
        word: "Word",
        wordD: "The living Word of God",
        worshiper: "Worshiper",
        worshiperD: "One who offers the heart before that Word and answers with a life",
        result:
          "So a Wordshiper is someone who remembers God through the Word, worships God with the Word, and walks with God according to the Word.",
      },
      thesis: {
        label: "Thesis",
        title: "One platform, three layers",
        lead:
          "Wordshiper is a Scripture memory app, a daily spiritual OS that realigns the day, and a global Scripture-memory movement — designed as one.",
        layers: [
          {
            t: "Scripture Memory App",
            d: "Helps you receive, hear, speak, and memorize one verse each day.",
          },
          {
            t: "Daily Spiritual OS",
            d: "Realigns the day's priorities around God's Word through Scripture, prayer, and the Walk planner.",
          },
          {
            t: "Global Scripture Memory Movement",
            d: "Pass a verse and join the lineage as the Nth Wordshiper — then invite the next person with a Verse\u00A0Card and your voice.",
          },
        ],
      },
      orgNote:
        "Wordshiper Ministry is a U.S. 501(c)(3) nonprofit. Individual use is free forever. Gifts and partnerships sustain the movement.",
    },
    footer: {
      tagline: "One\u00A0verse a day. A life of worship.",
      legal: "© 2024 Wordshiper Ministry Inc. · Based in New York, U.S.A. · 501(c)(3) Nonprofit · EIN: 33-1561112",
      address: "5 Union Square West FRNT 1 #1299, New York, NY 10003, U.S.A.",
    },
  },
};

export type RenewalCopy = typeof copy.en;

export function useCopy(): RenewalCopy {
  const { currentLanguage } = useLanguage();
  return (currentLanguage === "ko" ? copy.ko : copy.en) as RenewalCopy;
}
