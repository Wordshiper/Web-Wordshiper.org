import type { RenewalCopy } from "@/data/renewal-copy";

const locale: RenewalCopy = {
  chrome: {
    home: "Nyumbani",
    searchLanguages: "Tafuta lugha…",
    chooseLanguage: "Chagua lugha yako",
    languagesCount: "lugha",
    allRegions: "Mikoa yote",
    all: "Zote",
    heroSlidesAria: "Slaidi za utangulizi za Wordshiper",
    slideSelectorAria: "Kichaguaji cha slaidi",
    lineageNumber: "Nambari yako ya lineage",
    lineageEmailNote: "Tumekutumia barua pepe ya uthibitisho — tafadhali angalia kikasha chako.",
  },
  nav: {
    product: "Mtiririko",
    routine: "Ratiba",
    movement: "Harakati",
    roadmap: "Ramani ya njia",
    about: "Kuhusu",
    investors: "Wawekezaji",
    donate: "Changia",
    preregister: "Jisajili mapema",
    why: "Kwa nini",
    identity: "Utambulisho",
  },
  hero: {
    badge: "Itazinduliwa Desemba\u00A02026",
    slogan: "Aya\u00A0moja kwa siku. Maisha ya ibada.",
    declaration: "Mimi ni Wordshiper.",
    cta1: "Jiunge na\u00A01,000\u00A0wa kwanza",
    cta2: "Kwa nini Wordshiper",
    lineageNote: "Jisajili mapema na upokee nambari yako ya lineage",
    slides: [
      {
        label: "Wordshiper ni nini?",
        title1: "Hifadhi aya moja.",
        title2: "Panga upya siku yako yote.",
        body: "Programu inayokusaidia kutafakari na kuhifadhi aya moja ya Maandiko, kurudia sala tatu fupi kila siku, kurejesha vipaumbele vya kiroho · kimwili · kihisia, na kuishi maisha ya wito.",
        visual: "home" as const,
      },
      {
        label: "Kinachofanya iwe tofauti",
        title1: "Si peke yako.",
        title2: "Hivi ndivyo injili inavyotiririka.",
        body: "Vituo vinavyotegemea mahali na jamii vinakuunganisha na waumini wenzako karibu. Msaada wa dual/triple katika lugha 24. Kushiriki, kutoa, na vituo vinakuwa njia za injili. Wordshiper si chombo tu — ni jukwaa la maisha yanayozingatia Neno.",
        visual: "jog" as const,
      },
      {
        label: "Utambulisho wa mara tatu",
        title1: "Programu ya kumbukumbu · Spiritual OS ·",
        title2: "Harakati ya kimataifa ya Neno",
        body: "Pokea, sikia, sema, na uhifadhi aya moja kwa siku. Panga upya siku yako katika dakika kumi na tano. Pitisha aya na ujiunge na lineage kama Wordshiper wa N — kisha mwalike mtu anayefuata kwa Verse\u00A0Card na sauti yako.",
        visual: "home" as const,
      },
    ],
  },
  why: {
    label: "Kwa nini Wordshiper",
    title: "Tumeunganishwa zaidi kuliko hapo awali,\nlakini tumetawanyika zaidi",
    lead: "Tunaishi katika mafuriko ya habari na shughuli zisizoisha. Sauti nyingi zinatikisa mioyo yetu kila siku, na vipaumbele vya maisha hutawanyika kwa urahisi.",
    points: [
      {
        t: "Kelele na haraka",
        d: "Watu wameunganishwa zaidi lakini wametawanyika zaidi — wanatumia habari nyingi zaidi huku muda katika ukweli ukipungua.",
      },
      {
        t: "Tamaa ya kuabudu",
        d: "Wengi wanataka kumjua Mungu na kuwa waabudu wa kweli. Hata hivyo chini ya kasi na shinikizo la maisha ya kila siku, wanashindwa kumkumbuka Mungu, kutembea Naye, na kuabudu kwa maisha yao.",
      },
      {
        t: "Swali la kuanzisha",
        d: "Je, mtu mmoja, kila siku, anawezaje kumkumbuka Mungu kupitia Neno Lake, kutembea Naye, na kuishi maisha ya ibada?",
      },
    ],
    answer:
      "Hata aya moja ikipandwa kwa undani katika moyo mmoja, inakuwa nguvu ya kushinda hofu, kupita magumu, na kugeuza vipaumbele vya kiroho vilivyotawanyika kurudi kwa Mungu.",
    answerRef: "— Kwa nini Wordshiper ilianza",
  },
  identity: {
    label: "Wordshiper ni nini",
    title: "Jukwaa la maisha\nyanayozingatia Neno",
    definition:
      "Programu inayokusaidia kutafakari na kuhifadhi aya moja ya Maandiko, kurudia sala tatu fupi kila siku, kurejesha vipaumbele vya kiroho · kimwili · kihisia vya maisha yaliyotawanyika, na kuishi wito wako.",
    sub: "Word\u00A0+\u00A0Worshiper. Mtu anayemwabudu Mungu kwa kuandika Neno Lake na kuliishi.",
    word: "Word",
    wordD: "Neno hai la Mungu",
    worshiper: "Worshiper",
    worshiperD: "Anayetoa moyo mbele ya Neno hilo na kujibu kwa maisha",
    result: "Kuwasaidia watu kuishi kama waabudu wanaoandika Neno — Wordshipers",
    layers: [
      {
        t: "Scripture Memory App",
        d: "Inawasaidia watumiaji kupokea, kusikia, kusema, na kuhifadhi aya moja kila siku.",
      },
      {
        t: "Daily Spiritual OS",
        d: "Inapanga upya vipaumbele vya siku kuzunguka Neno la Mungu kupitia Maandiko, sala, na Walk planner.",
      },
      {
        t: "Global Scripture Memory Movement",
        d: "Pitisha aya na ujiunge na lineage kama Wordshiper wa N — kisha mwalike mtu anayefuata kwa Verse\u00A0Card na sauti yako.",
      },
    ],
    notOnly:
      "Vituo vinavyotegemea mahali na jamii vinakuunganisha na waumini wenzako katika eneo lako. Kiingereza kwa chaguo-msingi, na msaada wa dual/triple katika lugha 24. Maandiko hayahifadhiwi peke yake — yanashirikiwa na kuwekwa hai pamoja.",
    forWhom:
      "Kushiriki, michango, na vituo vinakuwa “njia za injili.” Wordshiper si chombo cha programu tu — ni jukwaa la maisha yanayozingatia Neno.",
  },
  mission: {
    label: "Dhamira",
    title: "Rejesha vipaumbele vya kiroho.\nPata tena furaha ya kutembea na Mungu.",
    body: "Wordshiper inawasaidia watu duniani kote kuandika na kuhifadhi aya moja ya Neno la Mungu kila siku — ili katikati ya mzigo wa habari na shughuli, waweze kuweka vipaumbele vya kiroho sawa na kufurahia kutembea na Mungu.",
    habits: [
      { t: "Aya moja kwa siku", d: "Sikia · sema · hifadhi" },
      { t: "Sala tatu fupi", d: "Mjibu Mungu kupitia Neno" },
      { t: "Panga upya siku", d: "Ifanye kama kipaumbele cha maisha" },
    ],
    close:
      "Tabia hii ndogo inabadilisha moyo mmoja, inarejesha sala ya familia moja, inafanya upya ibada ya jamii moja — na hatimaye inakuwa harakati ya Neno inayotiririka kwa mataifa. Hiyo ndiyo dhamira ya Wordshiper.",
  },
  vision: {
    label: "Maono",
    title: "Harakati ya kimataifa ya ibada\nkupitia Neno",
    body: "Maono ya Wordshiper ni kulea Worshipers wanaomwabudu Mungu kupitia Neno Lake.",
    detail:
      "Watu duniani kote wanapokea aya ile ile, wanaikiri kwa lugha na sauti yao wenyewe, na wanaiishi pale walipo — harakati ya kimataifa ya kuhifadhi Maandiko ambayo ibada yake inatiririka katika nyumba, makanisa, miji, na mataifa.",
  },
  routine: {
    label: "Ratiba kuu",
    title: "Mara tatu kwa siku,\ndakika tano kila moja",
    sub: "Kila kikao kinawashwa kiotomatiki na kengele ya Walk planner, hivyo mara tatu kwa siku zinakuwa mdundo wa maisha. Pokea asubuhi, rejea adhuhuri, thibitisha usiku — hadi aya moja izingie katika maisha yako.",
    alarmNote: "Kengele ya Walk planner",
    principle:
      "Tiny Habits — dakika tano kila moja huifanya iwe nyepesi kurudiwa kila siku, huku ikilinda uhifadhi na kina cha kiroho.",
    sessions: [
      {
        time: "Asubuhi\u00A0·\u00A05\u00A0dak",
        when: "Unapoamka · Kengele ya Walk planner",
        items: [
          "Sala 1\u00A0dak — sala ya asubuhi",
          "Hifadhi 2\u00A0dak — aya ya leo",
          "Tafakari 2\u00A0dak — tumia Neno",
        ],
      },
      {
        time: "Adhuhuri\u00A0·\u00A05\u00A0dak",
        when: "Kabla ya chakula cha mchana · Kengele ya Walk planner",
        items: [
          "Sala 1\u00A0dak — shukrani",
          "Pitia 2\u00A0dak — rudia aya ya asubuhi",
          "Walk check 2\u00A0dak — vipaumbele vya leo",
        ],
      },
      {
        time: "Jioni\u00A0·\u00A05\u00A0dak",
        when: "Kabla ya kulala · Kengele ya Walk planner",
        items: [
          "Sala 1\u00A0dak — tafakari ya siku",
          "Thibitisha 2\u00A0dak — Hide\u00A0&\u00A0Test",
          "Shukrani 2\u00A0dak — shukrani za leo",
        ],
      },
    ],
    sum: "3\u00A0×\u00A05 dakika\u00A0=\u00A0dakika 15 kwa siku",
    sumSub: "Kuishi kila siku kwa vipaumbele vya kiroho",
    balance: [
      { t: "Kipaumbele cha kiroho", d: "Tembea na Mungu kupitia Neno, sala, tafakari" },
      { t: "Mdundo wa kimwili", d: "Mzunguko wa kila siku unaolingana na kuamka, milo, na pumziko" },
      { t: "Uponyaji wa kihisia", d: "Tia moyo bila kuhukumu; shukrani zimeandikwa" },
    ],
  },
  product: {
    label: "Utambulisho wa bidhaa",
    title: "Jukwaa moja,\ntabaka tatu",
    sub: "Programu ya kuhifadhi Maandiko, Spiritual OS ya kila siku, na harakati ya kimataifa ya Neno — zimeundwa kama kitu kimoja.",
    thesis: [
      {
        t: "Scripture Memory App",
        d: "Inawasaidia watumiaji kupokea, kusikia, kusema, na kuhifadhi aya moja kila siku.",
      },
      {
        t: "Daily Spiritual Operating System",
        d: "Inapanga upya vipaumbele vya siku kuzunguka Neno la Mungu kupitia Maandiko, sala, na Walk planner.",
      },
      {
        t: "Global Scripture Memory Movement",
        d: "Pitisha aya na ujiunge na lineage kama Wordshiper wa N — kisha mwalike mtu anayefuata kwa Verse\u00A0Card na sauti yako.",
      },
    ],
    tabs: [
      { t: "Pokea", d: "Pokea Neno — Manna\u00A0Moment ambayo dunia nzima inashiriki" },
      { t: "Hifadhi", d: "Andika Neno — injini ya hatua 5 ya Hide\u00A0&\u00A0Test" },
      { t: "Sala", d: "Omba Neno — sala tatu fupi kwa siku" },
      { t: "Unda", d: "Acha Neno litiririke katika sauti yako na kadi" },
      { t: "Walk", d: "Tembea kwa Neno — kutoka wito hadi mazoezi ya kila siku" },
    ],
    features: [
      { t: "Worvi — mwandani wa kiroho wa AI", d: "Haikuhukumu kamwe streak iliyovunjika; inakualika kurudi kwa Neno kwa neema." },
      { t: "Jog wheel — Maandiko katika sekunde 1.5", d: "Fikia Biblia katika sekunde 1.5\u00A0, hata katikati ya ibada. Aya 31,112 nje ya mtandao." },
      { t: "Verse\u00A0Card — ungamo linalotiririka", d: "Pitisha aya na kadi inazaliwa — aya, nambari ya lineage, voice QR." },
      { t: "Lugha 24", d: "Hifadhi katika lugha mbili au tatu pamoja na lugha yako mama." },
    ],
    demoNote: "Skrini halisi za programu",
  },
  movement: {
    label: "Harakati",
    subtitle: "Hatujengi programu.\nTunawasha harakati.",
    title: "Lineage ya kiroho,\naya kwa aya",
    lineageLead: "Wewe ni",
    lineageNum: "14,207",
    lineageTail: "Wordshiper kuandika aya hii",
    lineageSub: "Nambari hii si alama. Inaonyesha mahali pako katika lineage ya Neno — uthibitisho kwamba si peke yako.",
    engines: [
      { t: "Synchronicity", e: "Pamoja, sasa", d: "\u201cSiko peke yangu\u201d — dunia nzima inapokea aya ile ile wakati ule ule." },
      { t: "Lineage", e: "Sehemu ya mtiririko", d: "\u201cNiko katika mto mkubwa zaidi\u201d — jiunge na lineage katika vizazi, lugha, na nchi." },
      { t: "Public Artifact", e: "Ungamo linalotiririka", d: "\u201cUngamo langu linatiririka ulimwenguni\u201d — Verse\u00A0Cards na sauti yako zinawalika mtu anayefuata." },
    ],
    promise: "Hakuna aibu. Hakuna kelele. Aya\u00A0moja. Maisha ya ibada.",
  },
  global: {
    label: "Kwa mataifa",
    title: "Ibada inayotiririka katika nyumba,\nmakanisa, miji, na mataifa",
    body: "Tunaota watu wanaokumbuka Neno kuwa Wordshipers wa kweli — wakifanya haki, wakipenda fadhili, na kutembea kwa unyenyekevu na Mungu pale walipo.",
    stats: [
      { n: "1.9B", d: "Wakristo duniani kote — watu tunaotamani kuwahudumia" },
      { n: "24", d: "Lugha — uhifadhi wa dual na triple" },
      { n: "3", d: "Programu huru kwenye msingi mmoja (Wordshiper · Verbum · Pasuk)" },
    ],
    whitelabel:
      "Kwenye core design system moja: Wordshiper (Protestant), Verbum (Catholic), Pasuk (Jewish) — kila moja inaheshimu mila yake katika harakati moja ya Neno.",
  },
  roadmap: {
    label: "Ramani ya njia",
    title: "Harakati tayari imeanza",
    phases: [
      { t: "Phase\u00A01 — MVP", d: "Mzunguko mkuu: pokea · hifadhi · jiunge na lineage" },
      { t: "Phase\u00A02 — Routine", d: "Vikao vitatu vya kila siku · Walk planner · Worvi" },
      { t: "Phase\u00A03 — Launch", d: "Desemba\u00A02026 — jamii mbegu ya\u00A01,000\u00A0wa kwanza" },
      { t: "Phase\u00A04 — Expansion", d: "Voice\u00A0Feed · vituo · programu tatu za white-label" },
    ],
  },
  cta: {
    title: "Tunatafuta\u00A01,000\u00A0wa kwanza\nkupokea manna ya kwanza pamoja",
    sub: "Jisajili mapema na upokee nambari yako ya lineage. Siku ya uzinduzi, kila mtu anapokea manna ya kwanza wakati ule ule.",
    placeholder: "Anwani ya barua pepe",
    button: "Jisajili mapema",
    success: "Asante! Umejiunga na lineage.",
    successWithNumber: (n: number) =>
      `Asante! Wewe ni Wordshiper #${n}. Tafadhali angalia barua pepe yako kwa uthibitisho wa lineage.`,
    error: "Usajili umeshindikana. Tafadhali jaribu tena.",
    declaration: "Ndiyo, mimi ni Wordshiper!",
  },
  donate: {
    eyebrow: "Ili aya moja kwa siku ifike mataifa",
    title: "Shirikiana na harakati ya Neno",
    sub: "Wordshiper Ministry Inc. ni shirika lisilo la faida la U.S. 501(c)(3). Zawadi yako inachochea uhifadhi wa Maandiko na midundo ya sala duniani kote.",
    oneTime: "Mara moja",
    monthly: "Kila mwezi",
    custom: "Kiasi maalum",
    customPlaceholder: "Weka kiasi",
    give: "Toa",
    processing: "Inaunganisha…",
    taxNote: "Inakatwa kodi nchini U.S. · EIN 33-1561112 · Risiti zinatolewa na Stripe.",
    successTitle: "Asante",
    successSub: "Zawadi yako inasaidia lineage ya Neno kuendelea kutiririka.",
    error: "Imeshindikana kuanza malipo. Tafadhali tuma barua pepe info@wordshiper.org.",
    backHome: "Rudi nyumbani",
  },
  investors: {
    navTitle: "Wawekezaji",
    title: "Tunatafuta washirika kuandika\nsura inayofuata ya harakati ya Neno",
    sub: "Wordshiper inafanya kazi kama Wordshiper Ministry Inc. (501(c)(3)) na Wordshiper PBC, Inc. — ikilinda uendelevu na dhamira pamoja.",
    points: [
      { t: "Ubunifu wa harakati uliothibitishwa", d: "Synchronicity, lineage, public artifacts — injini tatu zilizofafanuliwa upya kwa maana ya kiroho." },
      { t: "Mfano endelevu", d: "Bure milele kwa watu binafsi. Pro\u00A0Organization na utoaji wa hiari vinadumisha uendeshaji. Hakuna matangazo." },
      { t: "Teknolojia iliyojengwa kufanya kazi", d: "Cache ya TTS ya kimataifa inapunguza gharama za sauti kwa kiwango kikubwa." },
      { t: "Upanuzi wa white-label", d: "Injini moja kuu inaingia masoko ya Protestant, Catholic, na Jewish." },
    ],
    teamTitle: "Uongozi",
    team: [
      { n: "Jaedon Um", r: "CEO / Founder" },
      { n: "Eunhee Kim", r: "CCO" },
      { n: "Hyungon Kim", r: "CTO" },
    ],
    philosophy: "Dhamira kabla ya teknolojia. Neno kabla ya kiolesura. Imani kabla ya ukuaji.",
    contactTitle: "Omba nyenzo za IR na maswali ya uwekezaji",
    contactSub: "Mpango wa biashara, makadirio ya fedha, na onyesho la bidhaa vinapatikana kwa ombi.",
    contactBtn: "Wasiliana nasi",
    backHome: "Rudi nyumbani",
  },
  aboutPage: {
    title: "Kuhusu Wordshiper",
    subtitle: "Ili aya moja kwa siku iwe maisha ya ibada.",
    toc: [
      { id: "what", label: "Wordshiper ni nini?" },
      { id: "mission", label: "Dhamira" },
      { id: "vision", label: "Maono" },
      { id: "identity", label: "Utambulisho" },
      { id: "thesis", label: "Nadharia" },
    ],
    what: {
      label: "Wordshiper ni nini?",
      title: "Programu inayoandika Neno\nkwenye moyo — na kuweka upya siku",
      lead:
        "Wordshiper inawasaidia watu duniani kote kuandika na kuhifadhi aya moja ya Neno la Mungu kila siku — ili katikati ya mzigo wa habari na shughuli, waweze kuweka vipaumbele vya kiroho sawa na kufurahia kutembea na Mungu.",
      body:
        "Hatujisimamishi tu katika kuwasaidia watumiaji “kuhifadhi aya.” Wordshiper inatoa ratiba ya kiroho ya kila siku inayokuongoza kusikia, kusema, kuhifadhi, kusali, na kufanya mazoezi ya aya moja kama kipaumbele cha maisha.",
    },
    mission: {
      label: "Dhamira",
      title: "Ili tabia ndogo\nitiririke kwa mataifa",
      lead:
        "Wordshiper inawasaidia watu duniani kote kuandika na kuhifadhi aya moja ya Neno la Mungu kila siku — ili katikati ya mzigo wa habari na shughuli, waweze kuweka vipaumbele vya kiroho sawa na kufurahia kutembea na Mungu.",
      habitsTitle: "Tabia tatu za kila siku",
      habits: [
        { t: "Aya moja kwa siku", d: "Isikie, iseme, iandike moyoni." },
        { t: "Sala tatu fupi", d: "Mjibu Mungu kupitia Neno." },
        {
          t: "Panga upya siku kwa Neno",
          d: "Weka upya vipaumbele vya maisha kuzunguka Maandiko.",
        },
      ],
      close:
        "Tabia hii ndogo inabadilisha moyo mmoja, inarejesha sala ya familia moja, inafanya upya ibada ya jamii moja — na hatimaye inakuwa harakati ya Neno inayotiririka kwa mataifa. Hiyo ndiyo dhamira ya Wordshiper.",
    },
    vision: {
      label: "Maono",
      title: "Lea Worshipers\nkupitia Neno",
      lead:
        "Maono ya Wordshiper ni kulea Worshipers wanaomwabudu Mungu kupitia Neno Lake.",
      body:
        "Tunaota watu kuwa waabudu wa kweli wanaompendeza Mungu katika kila mahali pa maisha — kupitia tabia ndogo ya kusikia, kusema, kukumbuka, na kuishi Neno.",
      close:
        "Watu duniani kote wanapokea aya ile ile, wanaikiri kwa lugha na sauti yao wenyewe, na wanaiishi pale walipo — harakati ya kimataifa ya kuhifadhi Maandiko. Hiyo ndiyo maono yetu.",
    },
    identity: {
      label: "Utambulisho",
      title: "Word\u00A0+\u00A0Worshiper",
      lead: "Wordshiper si programu ya Biblia tu.",
      body:
        "Wordshiper inamaanisha mtu anayemwabudu Mungu kwa kuandika Neno Lake moyoni na kuliishi.",
      word: "Word",
      wordD: "Neno hai la Mungu",
      worshiper: "Worshiper",
      worshiperD: "Anayetoa moyo mbele ya Neno hilo na kujibu kwa maisha",
      result:
        "Kwa hivyo Wordshiper ni mtu anayemkumbuka Mungu kupitia Neno, anayemwabudu Mungu kwa Neno, na anayetembea na Mungu kulingana na Neno.",
    },
    thesis: {
      label: "Nadharia",
      title: "Jukwaa moja,\ntabaka tatu",
      lead:
        "Wordshiper ni programu ya kuhifadhi Maandiko, Spiritual OS ya kila siku inayopanga upya siku, na harakati ya kimataifa ya kuhifadhi Maandiko — zimeundwa kama kitu kimoja.",
      layers: [
        {
          t: "Scripture Memory App",
          d: "Inakusaidia kupokea, kusikia, kusema, na kuhifadhi aya moja kila siku.",
        },
        {
          t: "Daily Spiritual OS",
          d: "Inapanga upya vipaumbele vya siku kuzunguka Neno la Mungu kupitia Maandiko, sala, na Walk planner.",
        },
        {
          t: "Global Scripture Memory Movement",
          d: "Pitisha aya na ujiunge na lineage kama Wordshiper wa N — kisha mwalike mtu anayefuata kwa Verse\u00A0Card na sauti yako.",
        },
      ],
    },
    orgNote:
      "Wordshiper Ministry ni shirika lisilo la faida la U.S. 501(c)(3). Matumizi ya mtu binafsi ni bure milele. Zawadi na ushirikiano vinadumisha harakati.",
  },
  footer: {
    tagline: "Aya\u00A0moja kwa siku. Maisha ya ibada.",
    legal: "© 2024 Wordshiper Ministry Inc. · Based in New York, U.S.A. · 501(c)(3) Nonprofit · EIN: 33-1561112",
    address: "5 Union Square West FRNT 1 #1299, New York, NY 10003, U.S.A.",
  },
};

export default locale;
