import type { RenewalCopy } from "@/data/renewal-copy";

const locale: RenewalCopy = {
  chrome: {
    home: "መነሻ",
    searchLanguages: "ቋንቋዎችን ፈልግ…",
    chooseLanguage: "ቋንቋዎዎን ይምረጡ",
    languagesCount: "ቋንቋዎችን",
    allRegions: "ሁሉም ክልሎች",
    all: "ሁሉም",
    heroSlidesAria: "የWordshiper መግቢያ ስላይዶች",
    slideSelectorAria: "ስላይድ መራጭ",
    lineageNumber: "የእርስዎ lineage ቁጥር",
    lineageEmailNote: "የማረጋገጫ ኢሜይል ልከናል — እባክዎ inboxዎን ይመልከቱዑ።",
  },
  nav: {
    product: "ፍሰት",
    routine: "ዕለታዊ ልማድ",
    movement: "እንቅስቃሴ",
    roadmap: "የመንገድ ካርታ",
    about: "ስለ",
    investors: "ባለሀብቶች",
    donate: "ለግሱ",
    preregister: "ቅድመ ምዝገባ",
    why: "ለምን",
    identity: "ማንነት",
  },
  hero: {
    badge: "Launching December 2026",
    slogan: "One verse a day. A life of worship.",
    declaration: "I am a Wordshiper.",
    cta1: "Join the first 1,000",
    cta2: "Why Wordshiper",
    lineageNote: "Pre-register and receive your lineage number",
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
        body: "Receive, hear, speak, and memorize one verse a day. Realign your day in fifteen minutes. Pass a verse and join the lineage as the Nth Wordshiper — then invite the next person with a Verse Card and your voice.",
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
    answer: "When even a single verse is planted deep in one heart, it becomes the power to overcome fear, pass through hardship, and turn scattered spiritual priorities back to God.",
    answerRef: "— Why Wordshiper began",
  },
  identity: {
    label: "What is Wordshiper",
    title: "A platform for a Word-centered life",
    definition: "An app that helps you meditate on and memorize one Scripture verse, repeat three short prayers each day, restore the spiritual · physical · emotional priorities of a scattered life, and live out your calling.",
    sub: "Word + Worshiper. A person who worships God by inscribing His Word and living it out.",
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
        d: "Pass a verse and join the lineage as the Nth Wordshiper — then invite the next person with a Verse Card and your voice.",
      },
    ],
    notOnly: "Location- and community-based channels connect you with fellow believers in your area. English by default, with dual/triple support across 24 languages. Scripture is not memorized alone — it is shared and kept alive together.",
    forWhom: "Sharing, donations, and channels become “paths for the gospel.” Wordshiper is not a mere app tool — it is a platform for a Word-centered life.",
  },
  mission: {
    label: "Mission",
    title: "Restore spiritual priorities.\nRecover the joy of walking with God.",
    body: "Wordshiper helps people worldwide inscribe and memorize one verse of God's Word each day — so that amid information overload and busyness, they can set spiritual priorities right and enjoy walking with God.",
    habits: [
      {
        t: "One verse a day",
        d: "Hear · speak · memorize",
      },
      {
        t: "Three short prayers",
        d: "Respond to God through the Word",
      },
      {
        t: "Realign the day",
        d: "Practice it as life's priority",
      },
    ],
    close: "This small habit changes one heart, restores one family's prayer, renews one community's worship — and finally becomes a Word movement flowing to the nations. That is Wordshiper's mission.",
  },
  vision: {
    label: "Vision",
    title: "A global movement of worship\nthrough the Word",
    body: "Wordshiper's vision is to raise Worshipers who worship God through His Word.",
    detail: "People worldwide receive the same verse, confess it in their own language and voice, and live it out where they stand — a global Scripture-memory movement whose worship flows into homes, churches, cities, and the nations.",
  },
  routine: {
    label: "Core routine",
    title: "Three times a day,\nfive minutes each",
    sub: "Each session is auto-triggered by the Walk planner alarm, so three times a day become a life rhythm. Receive in the morning, revisit at noon, confirm at night — until one verse soaks into your life.",
    alarmNote: "Walk planner alarm",
    principle: "Tiny Habits — five minutes each keeps it light enough to repeat daily, while securing both retention and spiritual depth.",
    sessions: [
      {
        time: "Morning · 5 min",
        when: "On waking · Walk planner alarm",
        items: [
          "Prayer 1 min — morning prayer",
          "Memorize 2 min — today's verse",
          "Meditate 2 min — apply the Word",
        ],
      },
      {
        time: "Noon · 5 min",
        when: "Before lunch · Walk planner alarm",
        items: [
          "Prayer 1 min — gratitude",
          "Review 2 min — repeat the morning verse",
          "Walk check 2 min — today's priorities",
        ],
      },
      {
        time: "Evening · 5 min",
        when: "Before sleep · Walk planner alarm",
        items: [
          "Prayer 1 min — daily reflection",
          "Confirm 2 min — Hide & Test",
          "Gratitude 2 min — today's thanks",
        ],
      },
    ],
    sum: "3 × 5 minutes = 15 minutes a day",
    sumSub: "Living each day by spiritual priorities",
    balance: [
      {
        t: "Spiritual priority",
        d: "Walk with God through Word, prayer, meditation",
      },
      {
        t: "Physical rhythm",
        d: "A daily cycle synced to waking, meals, and rest",
      },
      {
        t: "Emotional recovery",
        d: "Encouragement without condemnation; gratitude on record",
      },
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
        d: "Pass a verse and join the lineage as the Nth Wordshiper — then invite the next person with a Verse Card and your voice.",
      },
    ],
    tabs: [
      {
        t: "Receive",
        d: "Receive the Word — the Manna Moment the whole world shares",
      },
      {
        t: "Memorize",
        d: "Inscribe the Word — the 5-stage Hide & Test engine",
      },
      {
        t: "Pray",
        d: "Pray the Word — three short prayers a day",
      },
      {
        t: "Create",
        d: "Let the Word flow in your voice and cards",
      },
      {
        t: "Walk",
        d: "Walk by the Word — from calling to daily practice",
      },
    ],
    features: [
      {
        t: "Worvi — spiritual AI companion",
        d: "Never condemns a broken streak; invites you back to the Word with grace.",
      },
      {
        t: "Jog wheel — Scripture in 1.5s",
        d: "Reach the Bible in 1.5 seconds, even mid-worship. 31,112 verses offline.",
      },
      {
        t: "Verse Card — a flowing confession",
        d: "Pass a verse and a card is born — verse, lineage number, voice QR.",
      },
      {
        t: "24 languages",
        d: "Memorize in two or three languages alongside your mother tongue.",
      },
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
      {
        t: "Synchronicity",
        e: "Together, now",
        d: "“I am not alone” — the whole world receives the same verse at the same moment.",
      },
      {
        t: "Lineage",
        e: "Part of the flow",
        d: "“I belong to a greater stream” — join a lineage across generations, languages, and lands.",
      },
      {
        t: "Public Artifact",
        e: "A flowing confession",
        d: "“My confession flows into the world” — Verse Cards and your voice invite the next person.",
      },
    ],
    promise: "No shame. No noise. One verse. A life of worship.",
  },
  global: {
    label: "To the nations",
    title: "Worship that flows into homes,\nchurches, cities, and the nations",
    body: "We dream of people who remember the Word becoming true Wordshipers — doing justice, loving kindness, and walking humbly with God where they stand.",
    stats: [
      {
        n: "1.9B",
        d: "Christians worldwide — the people we long to serve",
      },
      {
        n: "24",
        d: "Languages — dual & triple memorization",
      },
      {
        n: "3",
        d: "Independent apps on one core (Wordshiper · Verbum · Pasuk)",
      },
    ],
    whitelabel: "On one core design system: Wordshiper (Protestant), Verbum (Catholic), Pasuk (Jewish) — each honoring its tradition in one movement of the Word.",
  },
  roadmap: {
    label: "Roadmap",
    title: "The movement has already begun",
    phases: [
      {
        t: "Phase 1 — MVP",
        d: "Core loop: receive · memorize · join the lineage",
      },
      {
        t: "Phase 2 — Routine",
        d: "Three daily sessions · Walk planner · Worvi",
      },
      {
        t: "Phase 3 — Launch",
        d: "December 2026 — seed community of the first 1,000",
      },
      {
        t: "Phase 4 — Expansion",
        d: "Voice Feed · channels · three white-label apps",
      },
    ],
  },
  cta: {
    title: "We are looking for the first 1,000\nto receive the first manna together",
    sub: "Pre-register and receive your lineage number. On launch day, everyone receives the first manna at the same moment.",
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
      {
        t: "Proven movement design",
        d: "Synchronicity, lineage, public artifacts — three engines redefined with spiritual meaning.",
      },
      {
        t: "A sustainable model",
        d: "Free forever for individuals. Pro Organization and voluntary giving sustain operations. No ads.",
      },
      {
        t: "Technology built to operate",
        d: "Global TTS cache structurally reduces voice costs at scale.",
      },
      {
        t: "White-label expansion",
        d: "One core engine enters Protestant, Catholic, and Jewish markets.",
      },
    ],
    teamTitle: "Leadership",
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
      {
        id: "what",
        label: "What is Wordshiper?",
      },
      {
        id: "mission",
        label: "Mission",
      },
      {
        id: "vision",
        label: "Vision",
      },
      {
        id: "identity",
        label: "Identity",
      },
      {
        id: "thesis",
        label: "Thesis",
      },
    ],
    what: {
      label: "What is Wordshiper?",
      title: "An app that writes the Word\non the heart — and resets the day",
      lead: "Wordshiper helps people worldwide inscribe and memorize one verse of God's Word each day — so that amid information overload and busyness, they can set spiritual priorities right and enjoy walking with God.",
      body: "We do not stop at helping users “memorize a verse.” Wordshiper offers a daily spiritual routine that leads you to hear, speak, memorize, pray, and practice one verse as the priority of life.",
    },
    mission: {
      label: "Mission",
      title: "So a small habit flows to the nations",
      lead: "Wordshiper helps people worldwide inscribe and memorize one verse of God's Word each day — so that amid information overload and busyness, they can set spiritual priorities right and enjoy walking with God.",
      habitsTitle: "Three daily habits",
      habits: [
        {
          t: "One verse a day",
          d: "Hear it, speak it, write it on the heart.",
        },
        {
          t: "Three short prayers",
          d: "Respond to God through the Word.",
        },
        {
          t: "Realign the day by the Word",
          d: "Reset life's priorities around Scripture.",
        },
      ],
      close: "This small habit changes one heart, restores one family's prayer, renews one community's worship — and finally becomes a Word movement flowing to the nations. That is Wordshiper's mission.",
    },
    vision: {
      label: "Vision",
      title: "Raise Worshipers through the Word",
      lead: "Wordshiper's vision is to raise Worshipers who worship God through His Word.",
      body: "We dream of people becoming true worshipers who please God in every place of life — through the small habit of hearing, speaking, remembering, and living out the Word.",
      close: "People worldwide receive the same verse, confess it in their own language and voice, and live it where they stand — a global Scripture-memory movement. That is our vision.",
    },
    identity: {
      label: "Identity",
      title: "Word + Worshiper",
      lead: "Wordshiper is not merely a Bible app.",
      body: "Wordshiper means a person who worships God by writing His Word on the heart and living it out.",
      word: "Word",
      wordD: "The living Word of God",
      worshiper: "Worshiper",
      worshiperD: "One who offers the heart before that Word and answers with a life",
      result: "So a Wordshiper is someone who remembers God through the Word, worships God with the Word, and walks with God according to the Word.",
    },
    thesis: {
      label: "Thesis",
      title: "One platform, three layers",
      lead: "Wordshiper is a Scripture memory app, a daily spiritual OS that realigns the day, and a global Scripture-memory movement — designed as one.",
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
          d: "Pass a verse and join the lineage as the Nth Wordshiper — then invite the next person with a Verse Card and your voice.",
        },
      ],
    },
    orgNote: "Wordshiper Ministry is a U.S. 501(c)(3) nonprofit. Individual use is free forever. Gifts and partnerships sustain the movement.",
  },
  footer: {
    tagline: "One verse a day. A life of worship.",
    legal: "© 2024 Wordshiper Ministry Inc. · Based in New York, U.S.A. · 501(c)(3) Nonprofit · EIN: 33-1561112",
    address: "5 Union Square West FRNT 1 #1299, New York, NY 10003, U.S.A.",
  },
};

export default locale;
