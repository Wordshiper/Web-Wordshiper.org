import type { RenewalCopy } from "@/data/renewal-copy";

const locale: RenewalCopy = {
  chrome: {
    home: "Startseite",
    searchLanguages: "Sprachen suchen…",
    chooseLanguage: "Sprache wählen",
    languagesCount: "Sprachen",
    allRegions: "Alle Regionen",
    all: "Alle",
    heroSlidesAria: "Wordshiper-Einführungsfolien",
    slideSelectorAria: "Folienauswahl",
    lineageNumber: "Deine Lineage-Nummer",
    lineageEmailNote: "Wir haben eine Bestätigungs-E-Mail gesendet — bitte prüfe deinen Posteingang.",
  },
  nav: {
    product: "Flow",
    routine: "Routine",
    movement: "Bewegung",
    roadmap: "Roadmap",
    about: "Über uns",
    investors: "Investoren",
    donate: "Spenden",
    preregister: "Vorregistrieren",
    why: "Warum",
    identity: "Identität",
  },
  hero: {
    badge: "Start im Dezember\u00A02026",
    slogan: "Ein\u00A0Vers am Tag. Ein Leben der Anbetung.",
    declaration: "Ich bin ein Wordshiper.",
    cta1: "Zu den ersten\u00A01.000 gehören",
    cta2: "Warum Wordshiper",
    lineageNote: "Vorregistrieren und deine Lineage-Nummer erhalten",
    slides: [
      {
        label: "Was ist Wordshiper?",
        title1: "Einen Vers auswendig lernen.",
        title2: "Den ganzen Tag neu ausrichten.",
        body: "Eine App, die dir hilft, einen Schriftvers zu meditieren und auswendig zu lernen, drei kurze Gebete täglich zu wiederholen, geistliche · körperliche · emotionale Prioritäten wiederherzustellen und ein Leben der Berufung zu führen.",
        visual: "home" as const,
      },
      {
        label: "Was es anders macht",
        title1: "Du bist nicht allein.",
        title2: "So fließt das Evangelium.",
        body: "Standort- und gemeinschaftsbasierte Kanäle verbinden dich mit Gläubigen in deiner Nähe. Dual-/Triple-Unterstützung in 24 Sprachen. Teilen, Geben und Kanäle werden Wege für das Evangelium. Wordshiper ist kein bloßes Werkzeug — es ist eine Plattform für ein wortzentriertes Leben.",
        visual: "jog" as const,
      },
      {
        label: "Dreifache Identität",
        title1: "Memory-App · Spiritual OS ·",
        title2: "Globale Wort-Bewegung",
        body: "Jeden Tag einen Vers empfangen, hören, sprechen und auswendig lernen. In fünfzehn Minuten den Tag neu ausrichten. Einen Vers bestehen und als N-ter Wordshiper der Lineage beitreten — dann die nächste Person mit einer Verse\u00A0Card und deiner Stimme einladen.",
        visual: "home" as const,
      },
    ],
  },
  why: {
    label: "Warum Wordshiper",
    title: "Verbundener denn je,\nund doch tiefer zerstreut",
    lead: "Wir leben in einer Flut von Informationen und unermüdlicher Hast. Unzählige Stimmen erschüttern täglich unser Herz, und die Prioritäten des Lebens zerstreuen sich leicht.",
    points: [
      {
        t: "Lärm und Eile",
        d: "Menschen sind vernetzter und zugleich tiefer zerstreut — sie konsumieren mehr Information, während die Zeit in der Wahrheit schrumpft.",
      },
      {
        t: "Sehnsucht nach Anbetung",
        d: "Viele wollen Gott kennen und echte Anbeter werden. Doch unter Tempo und Druck des Alltags fällt es schwer, Gott zu gedenken, mit Ihm zu gehen und mit dem Leben anzubeten.",
      },
      {
        t: "Die Gründungsfrage",
        d: "Wie kann ein Mensch jeden Tag Gott durch Sein Wort gedenken, mit Ihm gehen und ein Leben der Anbetung führen?",
      },
    ],
    answer:
      "Wenn auch nur ein einziger Vers tief in ein Herz gepflanzt wird, wird er zur Kraft, Furcht zu überwinden, durch Not hindurchzugehen und zerstreute geistliche Prioritäten wieder zu Gott zu wenden.",
    answerRef: "— Warum Wordshiper begann",
  },
  identity: {
    label: "Was ist Wordshiper",
    title: "Eine Plattform für ein wortzentriertes Leben",
    definition:
      "Eine App, die dir hilft, einen Schriftvers zu meditieren und auswendig zu lernen, drei kurze Gebete täglich zu wiederholen, die geistlichen · körperlichen · emotionalen Prioritäten eines zerstreuten Lebens wiederherzustellen und deine Berufung zu leben.",
    sub: "Word\u00A0+\u00A0Worshiper. Ein Mensch, der Gott anbetet, indem er Sein Wort einschreibt und auslebt.",
    word: "Word",
    wordD: "Das lebendige Wort Gottes",
    worshiper: "Worshiper",
    worshiperD: "Einer, der vor diesem Wort das Herz darbringt und mit dem Leben antwortet",
    result: "Menschen helfen, als Anbeter zu leben, die das Wort einschreiben — Wordshipers",
    layers: [
      {
        t: "Scripture Memory App",
        d: "Hilft Nutzern, jeden Tag einen Vers zu empfangen, zu hören, zu sprechen und auswendig zu lernen.",
      },
      {
        t: "Daily Spiritual OS",
        d: "Richtet die Prioritäten des Tages durch Schrift, Gebet und den Walk-Planner um Gottes Wort neu aus.",
      },
      {
        t: "Global Scripture Memory Movement",
        d: "Bestehe einen Vers und tritt als N-ter Wordshiper der Lineage bei — dann lade die nächste Person mit einer Verse\u00A0Card und deiner Stimme ein.",
      },
    ],
    notOnly:
      "Standort- und gemeinschaftsbasierte Kanäle verbinden dich mit Gläubigen in deiner Nähe. Englisch als Standard, mit Dual-/Triple-Unterstützung in 24 Sprachen. Schrift wird nicht allein auswendig gelernt — sie wird geteilt und gemeinsam lebendig gehalten.",
    forWhom:
      "Teilen, Spenden und Kanäle werden „Wege für das Evangelium“. Wordshiper ist kein bloßes App-Werkzeug — es ist eine Plattform für ein wortzentriertes Leben.",
  },
  mission: {
    label: "Mission",
    title: "Geistliche Prioritäten wiederherstellen.\nDie Freude am Gehen mit Gott zurückgewinnen.",
    body: "Wordshiper hilft Menschen weltweit, jeden Tag einen Vers des Wortes Gottes einzuschreiben und auswendig zu lernen — damit sie mitten in Informationsflut und Hast geistliche Prioritäten richtig setzen und das Gehen mit Gott genießen können.",
    habits: [
      {
        t: "Ein Vers am Tag",
        d: "Hören · sprechen · auswendig lernen",
      },
      {
        t: "Drei kurze Gebete",
        d: "Gott durch das Wort antworten",
      },
      {
        t: "Den Tag neu ausrichten",
        d: "Als Lebenspriorität praktizieren",
      },
    ],
    close:
      "Diese kleine Gewohnheit verändert ein Herz, stellt das Gebet einer Familie wieder her, erneuert die Anbetung einer Gemeinde — und wird schließlich zu einer Wort-Bewegung, die zu den Nationen fließt. Das ist Wordshipers Mission.",
  },
  vision: {
    label: "Vision",
    title: "Eine globale Bewegung der Anbetung\ndurch das Wort",
    body: "Wordshipers Vision ist es, Anbeter zu erwecken, die Gott durch Sein Wort anbeten.",
    detail:
      "Menschen weltweit empfangen denselben Vers, bekennen ihn in ihrer eigenen Sprache und Stimme und leben ihn dort, wo sie stehen — eine globale Schrift-Gedächtnis-Bewegung, deren Anbetung in Häuser, Gemeinden, Städte und Nationen fließt.",
  },
  routine: {
    label: "Kernroutine",
    title: "Dreimal am Tag,\nje fünf Minuten",
    sub: "Jede Einheit wird automatisch durch den Walk-Planner-Alarm ausgelöst, sodass dreimal am Tag zum Lebensrhythmus wird. Morgens empfangen, mittags wiederholen, abends bestätigen — bis ein Vers in dein Leben einsinkt.",
    alarmNote: "Walk-Planner-Alarm",
    principle:
      "Tiny Habits — je fünf Minuten bleiben leicht genug für den Alltag und sichern zugleich Retention und geistliche Tiefe.",
    sessions: [
      {
        time: "Morgen\u00A0·\u00A05\u00A0Min",
        when: "Beim Aufwachen · Walk-Planner-Alarm",
        items: [
          "Gebet 1\u00A0Min — Morgengebet",
          "Auswendig 2\u00A0Min — heutiger Vers",
          "Meditation 2\u00A0Min — das Wort anwenden",
        ],
      },
      {
        time: "Mittag\u00A0·\u00A05\u00A0Min",
        when: "Vor dem Mittagessen · Walk-Planner-Alarm",
        items: [
          "Gebet 1\u00A0Min — Dankbarkeit",
          "Wiederholung 2\u00A0Min — Morgenvers wiederholen",
          "Walk-Check 2\u00A0Min — heutige Prioritäten",
        ],
      },
      {
        time: "Abend\u00A0·\u00A05\u00A0Min",
        when: "Vor dem Schlafen · Walk-Planner-Alarm",
        items: [
          "Gebet 1\u00A0Min — Tagesrückblick",
          "Bestätigen 2\u00A0Min — Hide\u00A0&\u00A0Test",
          "Dank 2\u00A0Min — heutiger Dank",
        ],
      },
    ],
    sum: "3\u00A0×\u00A05 Minuten\u00A0=\u00A015 Minuten am Tag",
    sumSub: "Jeden Tag nach geistlichen Prioritäten leben",
    balance: [
      {
        t: "Geistliche Priorität",
        d: "Mit Gott gehen durch Wort, Gebet, Meditation",
      },
      {
        t: "Körperlicher Rhythmus",
        d: "Ein Tageszyklus im Takt von Aufwachen, Mahlzeiten und Ruhe",
      },
      {
        t: "Emotionale Erholung",
        d: "Ermutigung ohne Verurteilung; Dankbarkeit aufzeichnen",
      },
    ],
  },
  product: {
    label: "Produktidentität",
    title: "Eine Plattform, drei Ebenen",
    sub: "Eine Scripture-Memory-App, ein tägliches Spiritual OS und eine globale Wort-Bewegung — als eines gestaltet.",
    thesis: [
      {
        t: "Scripture Memory App",
        d: "Hilft Nutzern, jeden Tag einen Vers zu empfangen, zu hören, zu sprechen und auswendig zu lernen.",
      },
      {
        t: "Daily Spiritual Operating System",
        d: "Richtet die Prioritäten des Tages durch Schrift, Gebet und den Walk-Planner um Gottes Wort neu aus.",
      },
      {
        t: "Global Scripture Memory Movement",
        d: "Bestehe einen Vers und tritt als N-ter Wordshiper der Lineage bei — dann lade die nächste Person mit einer Verse\u00A0Card und deiner Stimme ein.",
      },
    ],
    tabs: [
      {
        t: "Empfangen",
        d: "Das Wort empfangen — der Manna\u00A0Moment, den die ganze Welt teilt",
      },
      {
        t: "Auswendig lernen",
        d: "Das Wort einschreiben — die 5-stufige Hide\u00A0&\u00A0Test-Engine",
      },
      {
        t: "Beten",
        d: "Das Wort beten — drei kurze Gebete am Tag",
      },
      {
        t: "Schaffen",
        d: "Das Wort in Stimme und Karten fließen lassen",
      },
      {
        t: "Walk",
        d: "Nach dem Wort gehen — von der Berufung zur täglichen Praxis",
      },
    ],
    features: [
      {
        t: "Worvi — geistlicher KI-Begleiter",
        d: "Verurteilt nie eine unterbrochene Serie; lädt dich mit Gnade zurück zum Wort ein.",
      },
      {
        t: "Jog-Wheel — Schrift in 1,5\u00A0s",
        d: "In 1,5\u00A0Sekunden zur Bibel — selbst mitten in der Anbetung. 31.112 Verse offline.",
      },
      {
        t: "Verse\u00A0Card — ein fließendes Bekenntnis",
        d: "Bestehe einen Vers und eine Karte entsteht — Vers, Lineage-Nummer, Stimmen-QR.",
      },
      {
        t: "24 Sprachen",
        d: "In zwei oder drei Sprachen auswendig lernen — neben deiner Muttersprache.",
      },
    ],
    demoNote: "Echte App-Bildschirme",
  },
  movement: {
    label: "Bewegung",
    subtitle: "Wir bauen keine App.\nWir entzünden eine Bewegung.",
    title: "Eine geistliche Lineage, Vers für Vers",
    lineageLead: "Du bist der",
    lineageNum: "14.207",
    lineageTail: ". Wordshiper, der diesen Vers einschreibt",
    lineageSub:
      "Diese Zahl ist kein Score. Sie markiert deinen Platz in der Lineage des Wortes — Beweis, dass du nicht allein bist.",
    engines: [
      {
        t: "Synchronicity",
        e: "Gemeinsam, jetzt",
        d: "„Ich bin nicht allein“ — die ganze Welt empfängt denselben Vers im selben Moment.",
      },
      {
        t: "Lineage",
        e: "Teil des Stroms",
        d: "„Ich gehöre zu einem größeren Fluss“ — tritt einer Lineage über Generationen, Sprachen und Länder bei.",
      },
      {
        t: "Public Artifact",
        e: "Ein fließendes Bekenntnis",
        d: "„Mein Bekenntnis fließt in die Welt“ — Verse\u00A0Cards und deine Stimme laden die nächste Person ein.",
      },
    ],
    promise: "Keine Scham. Kein Lärm. Ein\u00A0Vers. Ein Leben der Anbetung.",
  },
  global: {
    label: "Zu den Nationen",
    title: "Anbetung, die in Häuser,\nGemeinden, Städte und Nationen fließt",
    body: "Wir träumen von Menschen, die das Wort erinnern und echte Wordshipers werden — die Recht tun, Güte lieben und demütig mit Gott gehen, wo sie stehen.",
    stats: [
      {
        n: "1,9\u00A0Mrd.",
        d: "Christen weltweit — die Menschen, denen wir dienen wollen",
      },
      {
        n: "24",
        d: "Sprachen — Dual- & Triple-Auswendiglernen",
      },
      {
        n: "3",
        d: "Unabhängige Apps auf einem Kern (Wordshiper · Verbum · Pasuk)",
      },
    ],
    whitelabel:
      "Auf einem Kern-Designsystem: Wordshiper (protestantisch), Verbum (katholisch), Pasuk (jüdisch) — jede Tradition ehren, in einer Bewegung des Wortes.",
  },
  roadmap: {
    label: "Roadmap",
    title: "Die Bewegung hat bereits begonnen",
    phases: [
      {
        t: "Phase\u00A01 — MVP",
        d: "Kernschleife: empfangen · auswendig lernen · der Lineage beitreten",
      },
      {
        t: "Phase\u00A02 — Routine",
        d: "Drei tägliche Einheiten · Walk-Planner · Worvi",
      },
      {
        t: "Phase\u00A03 — Launch",
        d: "Dezember\u00A02026 — Saatgemeinde der ersten\u00A01.000",
      },
      {
        t: "Phase\u00A04 — Expansion",
        d: "Voice\u00A0Feed · Kanäle · drei White-Label-Apps",
      },
    ],
  },
  cta: {
    title: "Wir suchen die ersten\u00A01.000,\ndie das erste Manna gemeinsam empfangen",
    sub: "Vorregistrieren und deine Lineage-Nummer erhalten. Am Launch-Tag empfängt jeder das erste Manna im selben Moment.",
    placeholder: "E-Mail-Adresse",
    button: "Vorregistrieren",
    success: "Danke! Du bist der Lineage beigetreten.",
    successWithNumber: (n: number) =>
      `Danke! Du bist Wordshiper #${n}. Bitte prüfe deine E-Mail zur Bestätigung deiner Lineage-Nummer.`,
    error: "Registrierung fehlgeschlagen. Bitte versuche es erneut.",
    declaration: "Ja, ich bin ein Wordshiper!",
  },
  donate: {
    eyebrow: "Damit ein Vers am Tag die Nationen erreicht",
    title: "Partner der Wort-Bewegung werden",
    sub: "Wordshiper Ministry Inc. ist eine US-amerikanische 501(c)(3)-Nonprofit. Deine Gabe nährt Schriftauswendiglernen und Gebetsrhythmen weltweit.",
    oneTime: "Einmalig",
    monthly: "Monatlich",
    custom: "Eigener Betrag",
    customPlaceholder: "Betrag eingeben",
    give: "Spenden",
    processing: "Verbinden…",
    taxNote: "In den USA steuerlich absetzbar · EIN 33-1561112 · Quittungen über Stripe.",
    successTitle: "Danke",
    successSub: "Deine Gabe hilft der Lineage des Wortes, weiter zu fließen.",
    error: "Checkout konnte nicht gestartet werden. Bitte schreibe an info@wordshiper.org.",
    backHome: "Zur Startseite",
  },
  investors: {
    navTitle: "Investoren",
    title: "Partner gesucht, die das nächste Kapitel\nder Wort-Bewegung mitschreiben",
    sub: "Wordshiper arbeitet als Wordshiper Ministry Inc. (501(c)(3)) und Wordshiper PBC, Inc. — Nachhaltigkeit und Mission gemeinsam schützen.",
    points: [
      {
        t: "Erprobtes Bewegungsdesign",
        d: "Synchronicity, Lineage, Public Artifacts — drei Motoren mit geistlicher Bedeutung neu gefasst.",
      },
      {
        t: "Ein nachhaltiges Modell",
        d: "Für Einzelpersonen für immer kostenlos. Pro\u00A0Organization und freiwilliges Geben tragen den Betrieb. Keine Werbung.",
      },
      {
        t: "Technologie, die skaliert",
        d: "Globaler TTS-Cache senkt Sprachkosten strukturell im großen Maßstab.",
      },
      {
        t: "White-Label-Expansion",
        d: "Eine Kern-Engine für protestantische, katholische und jüdische Märkte.",
      },
    ],
    teamTitle: "Führung",
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
    philosophy: "Mission vor Technologie. Wort vor Interface. Vertrauen vor Wachstum.",
    contactTitle: "IR-Unterlagen & Investitionsanfragen",
    contactSub: "Businessplan, Finanzprognosen und Produktdemo auf Anfrage.",
    contactBtn: "Kontakt",
    backHome: "Zur Startseite",
  },
  aboutPage: {
    title: "Über Wordshiper",
    subtitle: "Damit ein Vers am Tag ein Leben der Anbetung wird.",
    toc: [
      {
        id: "what",
        label: "Was ist Wordshiper?",
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
        label: "Identität",
      },
      {
        id: "thesis",
        label: "These",
      },
    ],
    what: {
      label: "Was ist Wordshiper?",
      title: "Eine App, die das Wort\nins Herz schreibt — und den Tag neu setzt",
      lead: "Wordshiper hilft Menschen weltweit, jeden Tag einen Vers des Wortes Gottes einzuschreiben und auswendig zu lernen — damit sie mitten in Informationsflut und Hast geistliche Prioritäten richtig setzen und das Gehen mit Gott genießen können.",
      body: "Wir bleiben nicht dabei stehen, Nutzern zu helfen, „einen Vers auswendig zu lernen“. Wordshiper bietet eine tägliche geistliche Routine, die dich führt, einen Vers zu hören, zu sprechen, auswendig zu lernen, zu beten und als Lebenspriorität zu praktizieren.",
    },
    mission: {
      label: "Mission",
      title: "Damit eine kleine Gewohnheit zu den Nationen fließt",
      lead: "Wordshiper hilft Menschen weltweit, jeden Tag einen Vers des Wortes Gottes einzuschreiben und auswendig zu lernen — damit sie mitten in Informationsflut und Hast geistliche Prioritäten richtig setzen und das Gehen mit Gott genießen können.",
      habitsTitle: "Drei tägliche Gewohnheiten",
      habits: [
        {
          t: "Ein Vers am Tag",
          d: "Hören, sprechen, ins Herz schreiben.",
        },
        {
          t: "Drei kurze Gebete",
          d: "Gott durch das Wort antworten.",
        },
        {
          t: "Den Tag am Wort neu ausrichten",
          d: "Lebensprioritäten um die Schrift neu setzen.",
        },
      ],
      close:
        "Diese kleine Gewohnheit verändert ein Herz, stellt das Gebet einer Familie wieder her, erneuert die Anbetung einer Gemeinde — und wird schließlich zu einer Wort-Bewegung, die zu den Nationen fließt. Das ist Wordshipers Mission.",
    },
    vision: {
      label: "Vision",
      title: "Anbeter durch das Wort erwecken",
      lead: "Wordshipers Vision ist es, Anbeter zu erwecken, die Gott durch Sein Wort anbeten.",
      body: "Wir träumen von Menschen, die in jedem Lebensbereich echte Anbeter werden, die Gott gefallen — durch die kleine Gewohnheit, das Wort zu hören, zu sprechen, zu erinnern und zu leben.",
      close:
        "Menschen weltweit empfangen denselben Vers, bekennen ihn in ihrer eigenen Sprache und Stimme und leben ihn, wo sie stehen — eine globale Schrift-Gedächtnis-Bewegung. Das ist unsere Vision.",
    },
    identity: {
      label: "Identität",
      title: "Word + Worshiper",
      lead: "Wordshiper ist nicht bloß eine Bibel-App.",
      body: "Wordshiper meint einen Menschen, der Gott anbetet, indem er Sein Wort ins Herz schreibt und auslebt.",
      word: "Word",
      wordD: "Das lebendige Wort Gottes",
      worshiper: "Worshiper",
      worshiperD: "Einer, der vor diesem Wort das Herz darbringt und mit dem Leben antwortet",
      result:
        "Ein Wordshiper ist jemand, der Gott durch das Wort gedenkt, Gott mit dem Wort anbetet und mit Gott nach dem Wort geht.",
    },
    thesis: {
      label: "These",
      title: "Eine Plattform, drei Ebenen",
      lead: "Wordshiper ist eine Scripture-Memory-App, ein tägliches Spiritual OS, das den Tag neu ausrichtet, und eine globale Schrift-Gedächtnis-Bewegung — als eines gestaltet.",
      layers: [
        {
          t: "Scripture Memory App",
          d: "Hilft dir, jeden Tag einen Vers zu empfangen, zu hören, zu sprechen und auswendig zu lernen.",
        },
        {
          t: "Daily Spiritual OS",
          d: "Richtet die Prioritäten des Tages durch Schrift, Gebet und den Walk-Planner um Gottes Wort neu aus.",
        },
        {
          t: "Global Scripture Memory Movement",
          d: "Bestehe einen Vers und tritt als N-ter Wordshiper der Lineage bei — dann lade die nächste Person mit einer Verse\u00A0Card und deiner Stimme ein.",
        },
      ],
    },
    orgNote:
      "Wordshiper Ministry ist eine US-amerikanische 501(c)(3)-Nonprofit. Individuelle Nutzung ist für immer kostenlos. Gaben und Partnerschaften tragen die Bewegung.",
  },
  footer: {
    tagline: "Ein\u00A0Vers am Tag. Ein Leben der Anbetung.",
    legal:
      "© 2024 Wordshiper Ministry Inc. · Sitz in New York, U.S.A. · 501(c)(3) Nonprofit · EIN: 33-1561112",
    address: "5 Union Square West FRNT 1 #1299, New York, NY 10003, U.S.A.",
  },
};

export default locale;
