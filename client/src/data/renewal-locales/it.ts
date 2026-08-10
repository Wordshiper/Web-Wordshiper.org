import type { RenewalCopy } from "@/data/renewal-copy";

const locale: RenewalCopy = {
  chrome: {
    home: "Inizio",
    searchLanguages: "Cerca lingue…",
    chooseLanguage: "Scegli la lingua",
    languagesCount: "lingue",
    allRegions: "Tutte le regioni",
    all: "Tutte",
    heroSlidesAria: "Slide introduttive di Wordshiper",
    slideSelectorAria: "Selettore slide",
    lineageNumber: "Il tuo numero di lineage",
    lineageEmailNote: "Ti abbiamo inviato un’email di conferma — controlla la posta in arrivo.",
  },
  nav: {
    product: "Flow",
    routine: "Routine",
    movement: "Movimento",
    roadmap: "Roadmap",
    about: "Chi siamo",
    investors: "Investitori",
    donate: "Dona",
    preregister: "Pre-registrati",
    why: "Perché",
    identity: "Identità",
  },
  hero: {
    badge: "Lancio dicembre\u00A02026",
    slogan: "Un\u00A0versetto al giorno. Una vita di adorazione.",
    declaration: "Io sono un Wordshiper.",
    cta1: "Unisciti ai primi\u00A01.000",
    cta2: "Perché Wordshiper",
    lineageNote: "Pre-registrati e ricevi il tuo numero di lineage",
    slides: [
      {
        label: "Che cos’è Wordshiper?",
        title1: "Memorizza un versetto.",
        title2: "Riallinea tutta la giornata.",
        body: "Un’app che ti aiuta a meditare e memorizzare un versetto della Scrittura, ripetere tre brevi preghiere ogni giorno, ripristinare le priorità spirituali · fisiche · emotive e vivere una vita di chiamata.",
        visual: "home" as const,
      },
      {
        label: "Cosa lo rende diverso",
        title1: "Non sei solo.",
        title2: "Così scorre il Vangelo.",
        body: "Canali basati su luogo e comunità ti collegano a credenti vicini. Supporto duale/triplo in 24 lingue. Condivisione, dono e canali diventano vie per il Vangelo. Wordshiper non è un semplice strumento — è una piattaforma per una vita centrata sulla Parola.",
        visual: "jog" as const,
      },
      {
        label: "Triplice identità",
        title1: "Memory app · Spiritual OS ·",
        title2: "Movimento globale della Parola",
        body: "Ricevi, ascolta, parla e memorizza un versetto al giorno. Riallinea la giornata in quindici minuti. Supera un versetto e unisciti al lineage come N-esimo Wordshiper — poi invita la persona successiva con una Verse\u00A0Card e la tua voce.",
        visual: "home" as const,
      },
    ],
  },
  why: {
    label: "Perché Wordshiper",
    title: "Più connessi che mai,\neppure più profondamente dispersi",
    lead: "Viviamo in un diluvio di informazioni e in una fretta incessante. Innumerevoli voci scuotono il nostro cuore ogni giorno, e le priorità della vita si disperdono facilmente.",
    points: [
      {
        t: "Rumore e fretta",
        d: "Le persone sono più connesse eppure più profondamente disperse — consumano più informazioni mentre il tempo nella verità continua a restringersi.",
      },
      {
        t: "Desiderio di adorare",
        d: "Molti vogliono conoscere Dio e diventare veri adoratori. Eppure sotto la velocità e la pressione della vita quotidiana faticano a ricordare Dio, camminare con Lui e adorare con la vita.",
      },
      {
        t: "La domanda fondante",
        d: "Come può una persona, ogni giorno, ricordare Dio attraverso la Sua Parola, camminare con Lui e vivere una vita di adorazione?",
      },
    ],
    answer:
      "Quando anche un solo versetto è piantato in profondità in un cuore, diventa la forza per superare la paura, attraversare la prova e riportare a Dio le priorità spirituali disperse.",
    answerRef: "— Perché nacque Wordshiper",
  },
  identity: {
    label: "Che cos’è Wordshiper",
    title: "Una piattaforma per una\nvita centrata sulla Parola",
    definition:
      "Un’app che ti aiuta a meditare e memorizzare un versetto della Scrittura, ripetere tre brevi preghiere ogni giorno, ripristinare le priorità spirituali · fisiche · emotive di una vita dispersa e vivere la tua chiamata.",
    sub: "Word\u00A0+\u00A0Worshiper. Una persona che adora Dio iscrivendo la Sua Parola e vivendola.",
    word: "Word",
    wordD: "La Parola vivente di Dio",
    worshiper: "Worshiper",
    worshiperD: "Chi offre il cuore davanti a quella Parola e risponde con la vita",
    result: "Aiutare le persone a vivere come adoratori che iscrivono la Parola — Wordshipers",
    layers: [
      {
        t: "Scripture Memory App",
        d: "Aiuta gli utenti a ricevere, ascoltare, parlare e memorizzare un versetto ogni giorno.",
      },
      {
        t: "Daily Spiritual OS",
        d: "Riallinea le priorità della giornata intorno alla Parola di Dio attraverso Scrittura, preghiera e il planner Walk.",
      },
      {
        t: "Global Scripture Memory Movement",
        d: "Supera un versetto e unisciti al lineage come N-esimo Wordshiper — poi invita la persona successiva con una Verse\u00A0Card e la tua voce.",
      },
    ],
    notOnly:
      "Canali basati su luogo e comunità ti collegano a credenti nella tua zona. Inglese per impostazione predefinita, con supporto duale/triplo in 24 lingue. La Scrittura non si memorizza da soli — si condivide e si tiene viva insieme.",
    forWhom:
      "Condivisione, donazioni e canali diventano «vie per il Vangelo». Wordshiper non è un semplice strumento-app — è una piattaforma per una vita centrata sulla Parola.",
  },
  mission: {
    label: "Missione",
    title: "Ripristinare le priorità spirituali.\nRitrovare la gioia di camminare con Dio.",
    body: "Wordshiper aiuta le persone in tutto il mondo a iscrivere e memorizzare ogni giorno un versetto della Parola di Dio — così che, in mezzo al sovraccarico di informazioni e alla fretta, possano mettere a posto le priorità spirituali e gioire nel camminare con Dio.",
    habits: [
      {
        t: "Un versetto al giorno",
        d: "Ascoltare · parlare · memorizzare",
      },
      {
        t: "Tre brevi preghiere",
        d: "Rispondere a Dio attraverso la Parola",
      },
      {
        t: "Riallineare la giornata",
        d: "Praticarla come priorità di vita",
      },
    ],
    close:
      "Questa piccola abitudine cambia un cuore, ripristina la preghiera di una famiglia, rinnova l’adorazione di una comunità — e infine diventa un movimento della Parola che scorre verso le nazioni. Questa è la missione di Wordshiper.",
  },
  vision: {
    label: "Visione",
    title: "Un movimento globale di adorazione\nattraverso la Parola",
    body: "La visione di Wordshiper è suscitare Worshipers che adorano Dio attraverso la Sua Parola.",
    detail:
      "Persone in tutto il mondo ricevono lo stesso versetto, lo confessano nella propria lingua e voce, e lo vivono dove si trovano — un movimento globale di memorizzazione della Scrittura la cui adorazione scorre in case, chiese, città e nazioni.",
  },
  routine: {
    label: "Routine centrale",
    title: "Tre volte al giorno,\ncinque minuti ciascuna",
    sub: "Ogni sessione è attivata automaticamente dall’allarme del planner Walk, così tre volte al giorno diventano un ritmo di vita. Ricevi al mattino, rivisita a mezzogiorno, conferma la sera — finché un versetto non imbeve la tua vita.",
    alarmNote: "Allarme del planner Walk",
    principle:
      "Tiny Habits — cinque minuti ciascuna restano leggeri da ripetere ogni giorno, garantendo al tempo stesso ritenzione e profondità spirituale.",
    sessions: [
      {
        time: "Mattina\u00A0·\u00A05\u00A0min",
        when: "Al risveglio · Allarme del planner Walk",
        items: [
          "Preghiera 1\u00A0min — preghiera del mattino",
          "Memorizza 2\u00A0min — versetto di oggi",
          "Medita 2\u00A0min — applica la Parola",
        ],
      },
      {
        time: "Mezzogiorno\u00A0·\u00A05\u00A0min",
        when: "Prima di pranzo · Allarme del planner Walk",
        items: [
          "Preghiera 1\u00A0min — gratitudine",
          "Ripasso 2\u00A0min — ripeti il versetto del mattino",
          "Walk check 2\u00A0min — priorità di oggi",
        ],
      },
      {
        time: "Sera\u00A0·\u00A05\u00A0min",
        when: "Prima di dormire · Allarme del planner Walk",
        items: [
          "Preghiera 1\u00A0min — riflessione sul giorno",
          "Conferma 2\u00A0min — Hide\u00A0&\u00A0Test",
          "Gratitudine 2\u00A0min — grazie di oggi",
        ],
      },
    ],
    sum: "3\u00A0×\u00A05 minuti\u00A0=\u00A015 minuti al giorno",
    sumSub: "Vivere ogni giorno secondo priorità spirituali",
    balance: [
      {
        t: "Priorità spirituale",
        d: "Camminare con Dio attraverso Parola, preghiera, meditazione",
      },
      {
        t: "Ritmo fisico",
        d: "Un ciclo giornaliero sincronizzato con risveglio, pasti e riposo",
      },
      {
        t: "Recupero emotivo",
        d: "Incoraggiamento senza condanna; gratitudine registrata",
      },
    ],
  },
  product: {
    label: "Identità del prodotto",
    title: "Una piattaforma,\ntre livelli",
    sub: "Un’app di memorizzazione della Scrittura, un OS spirituale quotidiano e un movimento globale della Parola — progettati come uno.",
    thesis: [
      {
        t: "Scripture Memory App",
        d: "Aiuta gli utenti a ricevere, ascoltare, parlare e memorizzare un versetto ogni giorno.",
      },
      {
        t: "Daily Spiritual Operating System",
        d: "Riallinea le priorità della giornata intorno alla Parola di Dio attraverso Scrittura, preghiera e il planner Walk.",
      },
      {
        t: "Global Scripture Memory Movement",
        d: "Supera un versetto e unisciti al lineage come N-esimo Wordshiper — poi invita la persona successiva con una Verse\u00A0Card e la tua voce.",
      },
    ],
    tabs: [
      {
        t: "Ricevi",
        d: "Ricevi la Parola — il Manna\u00A0Moment che il mondo intero condivide",
      },
      {
        t: "Memorizza",
        d: "Iscrivi la Parola — il motore Hide\u00A0&\u00A0Test a 5 stadi",
      },
      {
        t: "Prega",
        d: "Prega la Parola — tre brevi preghiere al giorno",
      },
      {
        t: "Crea",
        d: "Lascia scorrere la Parola nella tua voce e nelle card",
      },
      {
        t: "Walk",
        d: "Cammina secondo la Parola — dalla chiamata alla pratica quotidiana",
      },
    ],
    features: [
      {
        t: "Worvi — compagno AI spirituale",
        d: "Non condanna mai una serie interrotta; ti invita di nuovo alla Parola con grazia.",
      },
      {
        t: "Jog wheel — Scrittura in 1,5\u00A0s",
        d: "Raggiungi la Bibbia in 1,5\u00A0secondi, anche a metà adorazione. 31.112 versetti offline.",
      },
      {
        t: "Verse\u00A0Card — una confessione che scorre",
        d: "Supera un versetto e nasce una card — versetto, numero di lineage, QR della voce.",
      },
      {
        t: "24 lingue",
        d: "Memorizza in due o tre lingue insieme alla tua lingua madre.",
      },
    ],
    demoNote: "Schermate reali dell’app",
  },
  movement: {
    label: "Movimento",
    subtitle: "Non stiamo costruendo un’app.\nStiamo accendendo un movimento.",
    title: "Un lineage spirituale,\nversetto dopo versetto",
    lineageLead: "Sei il",
    lineageNum: "14.207",
    lineageTail: "° Wordshiper a iscrivere questo versetto",
    lineageSub:
      "Questo numero non è un punteggio. Segna il tuo posto nel lineage della Parola — prova che non sei solo.",
    engines: [
      {
        t: "Synchronicity",
        e: "Insieme, ora",
        d: "«Non sono solo» — il mondo intero riceve lo stesso versetto nello stesso momento.",
      },
      {
        t: "Lineage",
        e: "Parte del flusso",
        d: "«Appartengo a un flusso più grande» — unisciti a un lineage attraverso generazioni, lingue e terre.",
      },
      {
        t: "Public Artifact",
        e: "Una confessione che scorre",
        d: "«La mia confessione scorre nel mondo» — Verse\u00A0Card e la tua voce invitano la persona successiva.",
      },
    ],
    promise: "Nessuna vergogna. Nessun rumore. Un\u00A0versetto. Una vita di adorazione.",
  },
  global: {
    label: "Alle nazioni",
    title: "Adorazione che scorre in case,\nchiese, città e nazioni",
    body: "Sogniamo persone che ricordano la Parola e diventano veri Wordshipers — facendo giustizia, amando la bontà e camminando umilmente con Dio dove si trovano.",
    stats: [
      {
        n: "1,9\u00A0mld",
        d: "Cristiani nel mondo — le persone che desideriamo servire",
      },
      {
        n: "24",
        d: "Lingue — memorizzazione duale e tripla",
      },
      {
        n: "3",
        d: "App indipendenti su un unico nucleo (Wordshiper · Verbum · Pasuk)",
      },
    ],
    whitelabel:
      "Su un unico design system: Wordshiper (protestante), Verbum (cattolico), Pasuk (ebraico) — ciascuna onora la propria tradizione in un unico movimento della Parola.",
  },
  roadmap: {
    label: "Roadmap",
    title: "Il movimento è già iniziato",
    phases: [
      {
        t: "Fase\u00A01 — MVP",
        d: "Loop centrale: ricevi · memorizza · unisciti al lineage",
      },
      {
        t: "Fase\u00A02 — Routine",
        d: "Tre sessioni giornaliere · planner Walk · Worvi",
      },
      {
        t: "Fase\u00A03 — Lancio",
        d: "Dicembre\u00A02026 — comunità seme dei primi\u00A01.000",
      },
      {
        t: "Fase\u00A04 — Espansione",
        d: "Voice\u00A0Feed · canali · tre app white-label",
      },
    ],
  },
  cta: {
    title: "Cerchiamo i primi\u00A01.000\nper ricevere insieme la prima manna",
    sub: "Pre-registrati e ricevi il tuo numero di lineage. Il giorno del lancio, tutti ricevono la prima manna nello stesso momento.",
    placeholder: "Indirizzo email",
    button: "Pre-registrati",
    success: "Grazie! Ti sei unito al lineage.",
    successWithNumber: (n: number) =>
      `Grazie! Sei Wordshiper #${n}. Controlla la tua email per la conferma del lineage.`,
    error: "Registrazione non riuscita. Riprova.",
    declaration: "Sì, io sono un Wordshiper!",
  },
  donate: {
    eyebrow: "Perché un versetto al giorno raggiunga le nazioni",
    title: "Diventa partner del movimento della Parola",
    sub: "Wordshiper Ministry Inc. è una nonprofit 501(c)(3) negli Stati Uniti. Il tuo dono alimenta la memorizzazione della Scrittura e i ritmi di preghiera in tutto il mondo.",
    oneTime: "Una tantum",
    monthly: "Mensile",
    custom: "Importo personalizzato",
    customPlaceholder: "Inserisci l’importo",
    give: "Dona",
    processing: "Connessione…",
    taxNote: "Deducibile fiscalmente negli USA · EIN 33-1561112 · Ricevute fornite da Stripe.",
    successTitle: "Grazie",
    successSub: "Il tuo dono aiuta il lineage della Parola a continuare a scorrere.",
    error: "Impossibile avviare il checkout. Scrivi a info@wordshiper.org.",
    backHome: "Torna alla home",
  },
  investors: {
    navTitle: "Investitori",
    title: "Cerchiamo partner per scrivere\nil prossimo capitolo del movimento della Parola",
    sub: "Wordshiper opera come Wordshiper Ministry Inc. (501(c)(3)) e Wordshiper PBC, Inc. — proteggendo insieme sostenibilità e missione.",
    points: [
      {
        t: "Design di movimento collaudato",
        d: "Synchronicity, lineage, public artifacts — tre motori ridefiniti con significato spirituale.",
      },
      {
        t: "Un modello sostenibile",
        d: "Gratis per sempre per i singoli. Pro\u00A0Organization e doni volontari sostengono le operazioni. Niente pubblicità.",
      },
      {
        t: "Tecnologia costruita per operare",
        d: "La cache TTS globale riduce strutturalmente i costi vocali su scala.",
      },
      {
        t: "Espansione white-label",
        d: "Un unico motore centrale entra nei mercati protestante, cattolico ed ebraico.",
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
    philosophy: "Missione prima della tecnologia. Parola prima dell’interfaccia. Fiducia prima della crescita.",
    contactTitle: "Richiedi materiali IR e informazioni sugli investimenti",
    contactSub: "Business plan, proiezioni finanziarie e demo del prodotto disponibili su richiesta.",
    contactBtn: "Contattaci",
    backHome: "Torna alla home",
  },
  aboutPage: {
    title: "Chi è Wordshiper",
    subtitle: "Perché un versetto al giorno diventi una vita di adorazione.",
    toc: [
      {
        id: "what",
        label: "Che cos’è Wordshiper?",
      },
      {
        id: "mission",
        label: "Missione",
      },
      {
        id: "vision",
        label: "Visione",
      },
      {
        id: "identity",
        label: "Identità",
      },
      {
        id: "thesis",
        label: "Tesi",
      },
    ],
    what: {
      label: "Che cos’è Wordshiper?",
      title: "Un’app che scrive la Parola\nsul cuore — e resetta la giornata",
      lead: "Wordshiper aiuta le persone in tutto il mondo a iscrivere e memorizzare ogni giorno un versetto della Parola di Dio — così che, in mezzo al sovraccarico di informazioni e alla fretta, possano mettere a posto le priorità spirituali e gioire nel camminare con Dio.",
      body: "Non ci fermiamo ad aiutare gli utenti a «memorizzare un versetto». Wordshiper offre una routine spirituale quotidiana che ti porta ad ascoltare, parlare, memorizzare, pregare e praticare un versetto come priorità di vita.",
    },
    mission: {
      label: "Missione",
      title: "Perché una piccola abitudine\nscorra fino alle nazioni",
      lead: "Wordshiper aiuta le persone in tutto il mondo a iscrivere e memorizzare ogni giorno un versetto della Parola di Dio — così che, in mezzo al sovraccarico di informazioni e alla fretta, possano mettere a posto le priorità spirituali e gioire nel camminare con Dio.",
      habitsTitle: "Tre abitudini quotidiane",
      habits: [
        {
          t: "Un versetto al giorno",
          d: "Ascoltalo, parlarlo, scrivilo sul cuore.",
        },
        {
          t: "Tre brevi preghiere",
          d: "Rispondi a Dio attraverso la Parola.",
        },
        {
          t: "Riallinea la giornata secondo la Parola",
          d: "Resetta le priorità di vita intorno alla Scrittura.",
        },
      ],
      close:
        "Questa piccola abitudine cambia un cuore, ripristina la preghiera di una famiglia, rinnova l’adorazione di una comunità — e infine diventa un movimento della Parola che scorre verso le nazioni. Questa è la missione di Wordshiper.",
    },
    vision: {
      label: "Visione",
      title: "Suscitare Worshipers\nattraverso la Parola",
      lead: "La visione di Wordshiper è suscitare Worshipers che adorano Dio attraverso la Sua Parola.",
      body: "Sogniamo persone che diventino veri adoratori che piacciono a Dio in ogni luogo della vita — attraverso la piccola abitudine di ascoltare, parlare, ricordare e vivere la Parola.",
      close:
        "Persone in tutto il mondo ricevono lo stesso versetto, lo confessano nella propria lingua e voce, e lo vivono dove si trovano — un movimento globale di memorizzazione della Scrittura. Questa è la nostra visione.",
    },
    identity: {
      label: "Identità",
      title: "Word\u00A0+\u00A0Worshiper",
      lead: "Wordshiper non è soltanto un’app biblica.",
      body: "Wordshiper significa una persona che adora Dio scrivendo la Sua Parola sul cuore e vivendola.",
      word: "Word",
      wordD: "La Parola vivente di Dio",
      worshiper: "Worshiper",
      worshiperD: "Chi offre il cuore davanti a quella Parola e risponde con la vita",
      result:
        "Un Wordshiper è qualcuno che ricorda Dio attraverso la Parola, adora Dio con la Parola e cammina con Dio secondo la Parola.",
    },
    thesis: {
      label: "Tesi",
      title: "Una piattaforma,\ntre livelli",
      lead: "Wordshiper è un’app di memorizzazione della Scrittura, un OS spirituale quotidiano che riallinea la giornata, e un movimento globale di memorizzazione della Scrittura — progettati come uno.",
      layers: [
        {
          t: "Scripture Memory App",
          d: "Ti aiuta a ricevere, ascoltare, parlare e memorizzare un versetto ogni giorno.",
        },
        {
          t: "Daily Spiritual OS",
          d: "Riallinea le priorità della giornata intorno alla Parola di Dio attraverso Scrittura, preghiera e il planner Walk.",
        },
        {
          t: "Global Scripture Memory Movement",
          d: "Supera un versetto e unisciti al lineage come N-esimo Wordshiper — poi invita la persona successiva con una Verse\u00A0Card e la tua voce.",
        },
      ],
    },
    orgNote:
      "Wordshiper Ministry è una nonprofit 501(c)(3) negli Stati Uniti. L’uso individuale è gratis per sempre. Doni e partnership sostengono il movimento.",
  },
  footer: {
    tagline: "Un\u00A0versetto al giorno. Una vita di adorazione.",
    legal:
      "© 2024 Wordshiper Ministry Inc. · Con sede a New York, U.S.A. · 501(c)(3) Nonprofit · EIN: 33-1561112",
    address: "5 Union Square West FRNT 1 #1299, New York, NY 10003, U.S.A.",
  },
};

export default locale;
