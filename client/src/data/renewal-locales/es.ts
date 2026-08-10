import type { RenewalCopy } from "@/data/renewal-copy";

const locale: RenewalCopy = {
  chrome: {
    home: "Inicio",
    searchLanguages: "Buscar idiomas…",
    chooseLanguage: "Elige tu idioma",
    languagesCount: "idiomas",
    allRegions: "Todas las regiones",
    all: "Todos",
    heroSlidesAria: "Diapositivas de presentación de Wordshiper",
    slideSelectorAria: "Selector de diapositivas",
    lineageNumber: "Tu número de linaje",
    lineageEmailNote: "Te enviamos un correo de confirmación — revisa tu bandeja de entrada.",
  },
  nav: {
    product: "Flujo",
    routine: "Rutina",
    movement: "Movimiento",
    roadmap: "Hoja de ruta",
    about: "Acerca de",
    investors: "Inversores",
    donate: "Donar",
    preregister: "Prerregistro",
    why: "Por qué",
    identity: "Identidad",
  },
  hero: {
    badge: "Lanzamiento en diciembre\u00A0de\u00A02026",
    slogan: "Un\u00A0versículo al día. Una vida de adoración.",
    declaration: "Soy un Wordshiper.",
    cta1: "Únete a los primeros\u00A01.000",
    cta2: "Por qué Wordshiper",
    lineageNote: "Preregístrate y recibe tu número\u00A0de\u00A0linaje",
    slides: [
      {
        label: "¿Qué es Wordshiper?",
        title1: "Memoriza un versículo.",
        title2: "Reordena todo tu día.",
        body: "Una app que te ayuda a meditar y memorizar un versículo de las Escrituras, repetir tres oraciones breves cada día, restaurar las prioridades espirituales · físicas · emocionales y vivir una vida de llamado.",
        visual: "home" as const,
      },
      {
        label: "Qué lo hace diferente",
        title1: "No estás solo.",
        title2: "Así fluye el evangelio.",
        body: "Canales basados en ubicación y comunidad te conectan con creyentes cercanos. Soporte dual/triple en 24 idiomas. Compartir, dar y los canales se vuelven caminos para el evangelio. Wordshiper no es una mera herramienta — es una plataforma para una vida centrada en la Palabra.",
        visual: "jog" as const,
      },
      {
        label: "Identidad triple",
        title1: "App de memoria · SO espiritual ·",
        title2: "Movimiento global de la Palabra",
        body: "Recibe, oye, habla y memoriza un versículo al día. Reordena tu día en quince minutos. Pasa un versículo y únete al linaje como el N.º Wordshiper — luego invita a la siguiente persona con una Verse\u00A0Card y tu voz.",
        visual: "home" as const,
      },
    ],
  },
  why: {
    label: "Por qué Wordshiper",
    title: "Más conectados que nunca,\ny más profundamente dispersos",
    lead: "Vivimos en un diluvio de información y una prisa sin tregua. Incontables voces sacuden nuestros corazones cada día, y las prioridades de la vida se dispersan con facilidad.",
    points: [
      {
        t: "Ruido y prisa",
        d: "Las personas están más conectadas y, a la vez, más profundamente dispersas — consumen más información mientras el tiempo en la verdad sigue encogiéndose.",
      },
      {
        t: "Un anhelo de adorar",
        d: "Muchos quieren conocer a Dios y ser verdaderos adoradores. Sin embargo, bajo la velocidad y la presión de la vida diaria, les cuesta recordar a Dios, caminar con Él y adorar con sus vidas.",
      },
      {
        t: "La pregunta fundacional",
        d: "¿Cómo puede una persona, cada día, recordar a Dios por Su Palabra, caminar con Él y vivir una vida de adoración?",
      },
    ],
    answer:
      "Cuando siquiera un solo versículo se planta profundo en un corazón, se convierte en poder para vencer el miedo, atravesar la dificultad y volver a Dios las prioridades espirituales dispersas.",
    answerRef: "— Por qué nació Wordshiper",
  },
  identity: {
    label: "Qué es Wordshiper",
    title: "Una plataforma para una vida centrada en la Palabra",
    definition:
      "Una app que te ayuda a meditar y memorizar un versículo de las Escrituras, repetir tres oraciones breves cada día, restaurar las prioridades espirituales · físicas · emocionales de una vida dispersa y vivir tu llamado.",
    sub: "Word\u00A0+\u00A0Worshiper. Una persona que adora a Dios inscribiendo Su Palabra y viviéndola.",
    word: "Word",
    wordD: "La Palabra viva de Dios",
    worshiper: "Worshiper",
    worshiperD: "Quien ofrece el corazón ante esa Palabra y responde con una vida",
    result: "Ayudar a las personas a vivir como adoradores que inscriben la Palabra — Wordshipers",
    layers: [
      {
        t: "Scripture Memory App",
        d: "Ayuda a recibir, oír, hablar y memorizar un versículo cada día.",
      },
      {
        t: "Daily Spiritual OS",
        d: "Reordena las prioridades del día en torno a la Palabra de Dios mediante Escritura, oración y el planificador Walk.",
      },
      {
        t: "Global Scripture Memory Movement",
        d: "Pasa un versículo y únete al linaje como el N.º Wordshiper — luego invita a la siguiente persona con una Verse\u00A0Card y tu voz.",
      },
    ],
    notOnly:
      "Canales basados en ubicación y comunidad te conectan con creyentes de tu zona. Inglés por defecto, con soporte dual/triple en 24 idiomas. La Escritura no se memoriza en solitario — se comparte y se mantiene viva juntos.",
    forWhom:
      "Compartir, donaciones y canales se vuelven “caminos para el evangelio”. Wordshiper no es una mera herramienta de app — es una plataforma para una vida centrada en la Palabra.",
  },
  mission: {
    label: "Misión",
    title: "Restaurar las prioridades espirituales.\nRecuperar el gozo de caminar con Dios.",
    body: "Wordshiper ayuda a personas en todo el mundo a inscribir y memorizar un versículo de la Palabra de Dios cada día — para que, en medio de la sobrecarga de información y la prisa, puedan ordenar las prioridades espirituales y gozar de caminar con Dios.",
    habits: [
      {
        t: "Un versículo al día",
        d: "Oír · hablar · memorizar",
      },
      {
        t: "Tres oraciones breves",
        d: "Responder a Dios a través de la Palabra",
      },
      {
        t: "Reordenar el día",
        d: "Practicarlo como prioridad de vida",
      },
    ],
    close:
      "Este pequeño hábito cambia un corazón, restaura la oración de una familia, renueva la adoración de una comunidad — y finalmente se vuelve un movimiento de la Palabra que fluye hacia las naciones. Esa es la misión de Wordshiper.",
  },
  vision: {
    label: "Visión",
    title: "Un movimiento global de adoración\na través de la Palabra",
    body: "La visión de Wordshiper es levantar Worshipers que adoran a Dios a través de Su Palabra.",
    detail:
      "Personas en todo el mundo reciben el mismo versículo, lo confiesan en su propio idioma y voz, y lo viven donde están — un movimiento global de memoria de las Escrituras cuya adoración fluye hacia hogares, iglesias, ciudades y las naciones.",
  },
  routine: {
    label: "Rutina central",
    title: "Tres veces al día,\ncinco minutos cada una",
    sub: "Cada sesión se activa automáticamente con la alarma del planificador Walk, de modo que tres veces al día se vuelven ritmo de vida. Recibe por la mañana, revisita al mediodía, confirma por la noche — hasta que un versículo impregne tu vida.",
    alarmNote: "Alarma del planificador Walk",
    principle:
      "Tiny Habits — cinco minutos cada vez lo mantienen lo bastante ligero para repetirlo a diario, asegurando retención y profundidad espiritual.",
    sessions: [
      {
        time: "Mañana · 5 min",
        when: "Al despertar · Alarma del planificador Walk",
        items: [
          "Oración 1 min — oración de la mañana",
          "Memorizar 2 min — el versículo de hoy",
          "Meditar 2 min — aplicar la Palabra",
        ],
      },
      {
        time: "Mediodía · 5 min",
        when: "Antes del almuerzo · Alarma del planificador Walk",
        items: [
          "Oración 1 min — gratitud",
          "Repasar 2 min — repetir el versículo de la mañana",
          "Chequeo Walk 2 min — prioridades de hoy",
        ],
      },
      {
        time: "Noche · 5 min",
        when: "Antes de dormir · Alarma del planificador Walk",
        items: [
          "Oración 1 min — reflexión del día",
          "Confirmar 2 min — Hide & Test",
          "Gratitud 2 min — agradecimientos de hoy",
        ],
      },
    ],
    sum: "3 × 5 minutos = 15 minutos al día",
    sumSub: "Vivir cada día según prioridades espirituales",
    balance: [
      {
        t: "Prioridad espiritual",
        d: "Caminar con Dios mediante Palabra, oración y meditación",
      },
      {
        t: "Ritmo físico",
        d: "Un ciclo diario sincronizado con despertar, comidas y descanso",
      },
      {
        t: "Recuperación emocional",
        d: "Ánimo sin condena; gratitud registrada",
      },
    ],
  },
  product: {
    label: "Identidad del producto",
    title: "Una plataforma, tres capas",
    sub: "Una app de memoria de Escritura, un SO espiritual diario y un movimiento global de la Palabra — diseñados como uno.",
    thesis: [
      {
        t: "Scripture Memory App",
        d: "Ayuda a recibir, oír, hablar y memorizar un versículo cada día.",
      },
      {
        t: "Daily Spiritual Operating System",
        d: "Reordena las prioridades del día en torno a la Palabra de Dios mediante Escritura, oración y el planificador Walk.",
      },
      {
        t: "Global Scripture Memory Movement",
        d: "Pasa un versículo y únete al linaje como el N.º Wordshiper — luego invita a la siguiente persona con una Verse\u00A0Card y tu voz.",
      },
    ],
    tabs: [
      {
        t: "Recibir",
        d: "Recibe la Palabra — el Manna\u00A0Moment que el mundo entero comparte",
      },
      {
        t: "Memorizar",
        d: "Inscribe la Palabra — el motor Hide & Test de 5 etapas",
      },
      {
        t: "Orar",
        d: "Ora la Palabra — tres oraciones breves al día",
      },
      {
        t: "Crear",
        d: "Deja fluir la Palabra en tu voz y tus tarjetas",
      },
      {
        t: "Walk",
        d: "Camina por la Palabra — del llamado a la práctica diaria",
      },
    ],
    features: [
      {
        t: "Worvi — compañero espiritual con IA",
        d: "Nunca condena una racha rota; te invita de vuelta a la Palabra con gracia.",
      },
      {
        t: "Rueda Jog — Escritura en 1,5 s",
        d: "Llega a la Biblia en 1,5 segundos, incluso en medio de la adoración. 31.112 versículos sin conexión.",
      },
      {
        t: "Verse\u00A0Card — una confesión que fluye",
        d: "Pasa un versículo y nace una tarjeta — versículo, número de linaje, QR de voz.",
      },
      {
        t: "24 idiomas",
        d: "Memoriza en dos o tres idiomas junto a tu lengua materna.",
      },
    ],
    demoNote: "Pantallas reales de la app",
  },
  movement: {
    label: "Movimiento",
    subtitle: "No estamos construyendo una app.\nEstamos encendiendo un movimiento.",
    title: "Un linaje espiritual, versículo a versículo",
    lineageLead: "Eres el",
    lineageNum: "14.207",
    lineageTail: ".º Wordshiper en inscribir este versículo",
    lineageSub:
      "Este número no es un puntaje. Marca tu lugar en el linaje de la Palabra — prueba de que no estás solo.",
    engines: [
      {
        t: "Synchronicity",
        e: "Juntos, ahora",
        d: "“No estoy solo” — el mundo entero recibe el mismo versículo en el mismo momento.",
      },
      {
        t: "Lineage",
        e: "Parte del flujo",
        d: "“Pertenezco a una corriente mayor” — únete a un linaje a través de generaciones, idiomas y tierras.",
      },
      {
        t: "Public Artifact",
        e: "Una confesión que fluye",
        d: "“Mi confesión fluye al mundo” — Verse\u00A0Cards y tu voz invitan a la siguiente persona.",
      },
    ],
    promise: "Sin vergüenza. Sin ruido. Un\u00A0versículo. Una vida de adoración.",
  },
  global: {
    label: "Hacia las naciones",
    title: "Adoración que fluye a hogares,\niglesias, ciudades y las naciones",
    body: "Soñamos con personas que recuerdan la Palabra volviéndose verdaderos Wordshipers — haciendo justicia, amando la misericordia y caminando humildemente con Dios donde están.",
    stats: [
      {
        n: "1.9B",
        d: "Cristianos en el mundo — el pueblo al que anhelamos servir",
      },
      {
        n: "24",
        d: "Idiomas — memorización dual y triple",
      },
      {
        n: "3",
        d: "Apps independientes sobre un mismo núcleo (Wordshiper · Verbum · Pasuk)",
      },
    ],
    whitelabel:
      "Sobre un mismo sistema de diseño central: Wordshiper (protestante), Verbum (católico), Pasuk (judío) — cada uno honrando su tradición en un solo movimiento de la Palabra.",
  },
  roadmap: {
    label: "Hoja de ruta",
    title: "El movimiento ya ha comenzado",
    phases: [
      {
        t: "Phase\u00A01 — MVP",
        d: "Bucle central: recibir · memorizar · unirse al linaje",
      },
      {
        t: "Phase\u00A02 — Routine",
        d: "Tres sesiones diarias · Planificador Walk · Worvi",
      },
      {
        t: "Phase\u00A03 — Launch",
        d: "Diciembre\u00A0de\u00A02026 — comunidad semilla de los primeros\u00A01.000",
      },
      {
        t: "Phase\u00A04 — Expansion",
        d: "Voice\u00A0Feed · canales · tres apps white-label",
      },
    ],
  },
  cta: {
    title: "Buscamos a los primeros\u00A01.000\npara recibir juntos el primer maná",
    sub: "Preregístrate y recibe tu número\u00A0de\u00A0linaje. El día del lanzamiento, todos reciben el primer maná en el mismo instante.",
    placeholder: "Correo electrónico",
    button: "Prerregistro",
    success: "¡Gracias! Te has unido al linaje.",
    successWithNumber: (n: number) =>
      `¡Gracias! Eres Wordshiper #${n}. Revisa tu correo para la confirmación de linaje.`,
    error: "El registro falló. Inténtalo de nuevo.",
    declaration: "¡Sí, soy un Wordshiper!",
  },
  donate: {
    eyebrow: "Para que un versículo al día alcance las naciones",
    title: "Sé socio del movimiento de la Palabra",
    sub: "Wordshiper Ministry Inc. es una organización sin fines de lucro 501(c)(3) de EE. UU. Tu ofrenda impulsa la memorización de Escritura y ritmos de oración en todo el mundo.",
    oneTime: "Una vez",
    monthly: "Mensual",
    custom: "Monto personalizado",
    customPlaceholder: "Ingresa el monto",
    give: "Donar",
    processing: "Conectando…",
    taxNote: "Deducible de impuestos en EE. UU. · EIN 33-1561112 · Recibos emitidos por Stripe.",
    successTitle: "Gracias",
    successSub: "Tu ofrenda ayuda a que el linaje de la Palabra siga fluyendo.",
    error: "No se pudo iniciar el pago. Escribe a info@wordshiper.org.",
    backHome: "Volver al inicio",
  },
  investors: {
    navTitle: "Inversores",
    title: "Buscamos socios para escribir\nel próximo capítulo del movimiento de la Palabra",
    sub: "Wordshiper opera como Wordshiper Ministry Inc. (501(c)(3)) y Wordshiper PBC, Inc. — protegiendo juntos la sostenibilidad y la misión.",
    points: [
      {
        t: "Diseño de movimiento probado",
        d: "Synchronicity, lineage, public artifacts — tres motores redefinidos con significado espiritual.",
      },
      {
        t: "Un modelo sostenible",
        d: "Gratis para siempre para individuos. Pro\u00A0Organization y ofrendas voluntarias sostienen la operación. Sin anuncios.",
      },
      {
        t: "Tecnología hecha para operar",
        d: "La caché global de TTS reduce estructuralmente los costos de voz a escala.",
      },
      {
        t: "Expansión white-label",
        d: "Un motor central entra a los mercados protestante, católico y judío.",
      },
    ],
    teamTitle: "Liderazgo",
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
    philosophy: "Misión antes que tecnología. Palabra antes que interfaz. Confianza antes que crecimiento.",
    contactTitle: "Solicitar materiales IR e consultas de inversión",
    contactSub: "Plan de negocio, proyecciones financieras y demo del producto disponibles a solicitud.",
    contactBtn: "Contáctanos",
    backHome: "Volver al inicio",
  },
  aboutPage: {
    title: "Acerca de Wordshiper",
    subtitle: "Para que un versículo al día se vuelva una vida de adoración.",
    toc: [
      {
        id: "what",
        label: "¿Qué es Wordshiper?",
      },
      {
        id: "mission",
        label: "Misión",
      },
      {
        id: "vision",
        label: "Visión",
      },
      {
        id: "identity",
        label: "Identidad",
      },
      {
        id: "thesis",
        label: "Tesis",
      },
    ],
    what: {
      label: "¿Qué es Wordshiper?",
      title: "Una app que escribe la Palabra\nen el corazón — y reinicia el día",
      lead: "Wordshiper ayuda a personas en todo el mundo a inscribir y memorizar un versículo de la Palabra de Dios cada día — para que, en medio de la sobrecarga de información y la prisa, puedan ordenar las prioridades espirituales y gozar de caminar con Dios.",
      body: "No nos detenemos en ayudar a “memorizar un versículo”. Wordshiper ofrece una rutina espiritual diaria que te lleva a oír, hablar, memorizar, orar y practicar un versículo como prioridad de vida.",
    },
    mission: {
      label: "Misión",
      title: "Para que un pequeño hábito fluya a las naciones",
      lead: "Wordshiper ayuda a personas en todo el mundo a inscribir y memorizar un versículo de la Palabra de Dios cada día — para que, en medio de la sobrecarga de información y la prisa, puedan ordenar las prioridades espirituales y gozar de caminar con Dios.",
      habitsTitle: "Tres hábitos diarios",
      habits: [
        {
          t: "Un versículo al día",
          d: "Óyelo, háblalo, escríbelo en el corazón.",
        },
        {
          t: "Tres oraciones breves",
          d: "Responde a Dios a través de la Palabra.",
        },
        {
          t: "Reordena el día por la Palabra",
          d: "Reinicia las prioridades de vida en torno a la Escritura.",
        },
      ],
      close:
        "Este pequeño hábito cambia un corazón, restaura la oración de una familia, renueva la adoración de una comunidad — y finalmente se vuelve un movimiento de la Palabra que fluye hacia las naciones. Esa es la misión de Wordshiper.",
    },
    vision: {
      label: "Visión",
      title: "Levantar Worshipers a través de la Palabra",
      lead: "La visión de Wordshiper es levantar Worshipers que adoran a Dios a través de Su Palabra.",
      body: "Soñamos con personas que se vuelven verdaderos adoradores que agradan a Dios en cada lugar de la vida — mediante el pequeño hábito de oír, hablar, recordar y vivir la Palabra.",
      close:
        "Personas en todo el mundo reciben el mismo versículo, lo confiesan en su propio idioma y voz, y lo viven donde están — un movimiento global de memoria de las Escrituras. Esa es nuestra visión.",
    },
    identity: {
      label: "Identidad",
      title: "Word + Worshiper",
      lead: "Wordshiper no es meramente una app de Biblia.",
      body: "Wordshiper significa una persona que adora a Dios escribiendo Su Palabra en el corazón y viviéndola.",
      word: "Word",
      wordD: "La Palabra viva de Dios",
      worshiper: "Worshiper",
      worshiperD: "Quien ofrece el corazón ante esa Palabra y responde con una vida",
      result:
        "Así, un Wordshiper es alguien que recuerda a Dios por la Palabra, adora a Dios con la Palabra y camina con Dios según la Palabra.",
    },
    thesis: {
      label: "Tesis",
      title: "Una plataforma, tres capas",
      lead: "Wordshiper es una app de memoria de Escritura, un SO espiritual diario que reordena el día y un movimiento global de memoria de las Escrituras — diseñados como uno.",
      layers: [
        {
          t: "Scripture Memory App",
          d: "Te ayuda a recibir, oír, hablar y memorizar un versículo cada día.",
        },
        {
          t: "Daily Spiritual OS",
          d: "Reordena las prioridades del día en torno a la Palabra de Dios mediante Escritura, oración y el planificador Walk.",
        },
        {
          t: "Global Scripture Memory Movement",
          d: "Pasa un versículo y únete al linaje como el N.º Wordshiper — luego invita a la siguiente persona con una Verse\u00A0Card y tu voz.",
        },
      ],
    },
    orgNote:
      "Wordshiper Ministry es una organización sin fines de lucro 501(c)(3) de EE. UU. El uso individual es gratis para siempre. Ofrendas y alianzas sostienen el movimiento.",
  },
  footer: {
    tagline: "Un\u00A0versículo al día. Una vida de adoración.",
    legal:
      "© 2024 Wordshiper Ministry Inc. · Based in New York, U.S.A. · 501(c)(3) Nonprofit · EIN: 33-1561112",
    address: "5 Union Square West FRNT 1 #1299, New York, NY 10003, U.S.A.",
  },
};

export default locale;
