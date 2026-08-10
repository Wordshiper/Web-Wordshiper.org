import type { RenewalCopy } from "@/data/renewal-copy";

const locale: RenewalCopy = {
  chrome: {
    home: "Pangunahin",
    searchLanguages: "Maghanap ng wika…",
    chooseLanguage: "Piliin ang iyong wika",
    languagesCount: "mga wika",
    allRegions: "Lahat ng rehiyon",
    all: "Lahat",
    heroSlidesAria: "Mga intro slide ng Wordshiper",
    slideSelectorAria: "Tagapili ng slide",
    lineageNumber: "Ang iyong numero sa angkan",
    lineageEmailNote: "Nagpadala kami ng email ng kumpirmasyon — pakitingnan ang iyong inbox.",
    donatePreparingEyebrow: "Malapit na",
    donatePreparingTitle: "Inihahanda ang pagbibigay",
    donatePreparingBody:
      "Kasalukuyang inihahanda ang link ng donasyon.\n" +
      "Muli naming bubuksan ito kapag mayroon na kaming\n" +
      "mas ligtas at mas maayos na karanasan sa pagbibigay.",
    donatePreparingCta: "Naintindihan",
    preregisterOpensEyebrow: "Bubukas Disyembre\u00A01, 2026",
    preregisterOpensTitle: "Bubukas ang pre-registration Disyembre\u00A01",
    preregisterOpensBody:
      "Bubukas ang pre-registration sa angkan sa Disyembre\u00A01, 2026.\n" +
      "Sa araw na iyon, isang bagong gawang daloy ng pag-sign up\n" +
      "ang tatanggap sa unang\u00A01,000 Wordshiper.",
    preregisterOpensCta: "Naintindihan",
  },
  nav: {
    product: "Daloy",
    routine: "Routine",
    movement: "Kilusan",
    roadmap: "Roadmap",
    about: "Tungkol",
    investors: "Mga mamumuhunan",
    donate: "Mag-donate",
    preregister: "Pre-register",
    why: "Bakit",
    identity: "Pagkakakilanlan",
  },
  hero: {
    badge: "Ilulunsad Disyembre\u00A02026",
    slogan: "Isang\u00A0talata bawat araw. Isang buhay ng pagsamba.",
    declaration: "Ako ay isang Wordshiper.",
    cta1: "Sumali sa unang\u00A01,000",
    cta2: "Bakit Wordshiper",
    lineageNote: "Mag-pre-register at matanggap ang iyong numero\u00A0sa\u00A0angkan",
    slides: [
      {
        label: "Ano ang Wordshiper?",
        title1: "Isaulo ang isang talata.",
        title2: "Iayos muli ang buong araw mo.",
        body: "Isang app na tumutulong sa iyo sa pagninilay at pagsasaulo ng isang talata ng Kasulatan, ulitin ang tatlong maikling panalangin araw-araw, ibalik ang espirituwal · pisikal · emosyonal na priyoridad, at mamuhay sa isang buhay ng bokasyon.",
        visual: "home" as const,
      },
      {
        label: "Ano ang nagpapakaiba",
        title1: "Hindi ka nag-iisa.",
        title2: "Ganito dumadaloy ang ebanghelyo.",
        body: "Ang mga channel batay sa lokasyon at komunidad ay nag-uugnay sa iyo sa kapwa mananampalataya sa malapit. Suporta sa dalawa o tatlong wika mula sa 24 na wika. Ang pagbabahagi, pagbibigay, at mga channel ay nagiging landas para sa ebanghelyo. Ang Wordshiper ay hindi simpleng kasangkapan — ito ay plataporma para sa buhay na nakasentro sa Salita.",
        visual: "jog" as const,
      },
      {
        label: "Tatlong pagkakakilanlan",
        title1: "App ng pagsasaulo · Espirituwal na OS ·",
        title2: "Pandaigdigang kilusan ng Salita",
        body: "Tanggapin, pakinggan, bigkasin, at isaulo ang isang talata bawat araw. Iayos muli ang araw mo sa labinlimang minuto. Lampasan ang isang talata at sumali sa angkan bilang ika-N na Wordshiper — pagkatapos ay anyayahan ang susunod na tao gamit ang Verse\u00A0Card at ang iyong tinig.",
        visual: "home" as const,
      },
    ],
  },
  why: {
    label: "Bakit Wordshiper",
    title: "Mas konektado kaysa kailanman,\nngunit mas malalim na nakakalat",
    lead:
      "Nabubuhay tayo sa baha ng impormasyon at walang humpay na pagmamadali.\n" +
      "Maraming tinig ang gumugulo sa ating puso araw-araw, at madaling magkawatak-watak ang mga priyoridad ng buhay.",
    points: [
      {
        t: "Ingay at pagmamadali",
        d: "Mas konektado ang mga tao ngunit mas malalim na nakakalat — mas maraming impormasyon ang kinokonsumo habang lumiliit ang oras sa katotohanan.",
      },
      {
        t: "Pagnanais na sumamba",
        d: "Marami ang nais makilala ang Diyos at maging tunay na mananamba. Ngunit sa bilis at presyon ng pang-araw-araw na buhay, nahihirapan silang alalahanin ang Diyos, lumakad kasama Niya, at sumamba sa kanilang buhay.",
      },
      {
        t: "Ang tanong sa pagsisimula",
        d: "Paano maaaring isang tao, araw-araw, alalahanin ang Diyos sa pamamagitan ng Kanyang Salita, lumakad kasama Niya, at mamuhay ng buhay ng pagsamba?",
      },
    ],
    answer:
      "Kapag ang isang talata ng Kasulatan ay naitanim nang malalim sa puso,\n" +
      "ang Salitang iyon ay nagiging lakas upang madaig ang takot, malampasan ang hirap,\n" +
      "at maibalik sa Diyos ang nakakalat na espirituwal na priyoridad.\n\n" +
      "Iwan mo ito bilang pamana ng Salita —\n" +
      "sa iyong mga minamahal na anak, at sa iyong mga magulang.\n\n" +
      "Araw-araw tayong binabago,\n" +
      "bilang mga mananamba na kinalulugdan ng Diyos.",
    answerRef: "— Bakit nagsimula ang Wordshiper",
  },
  identity: {
    label: "Ano ang Wordshiper",
    title: "Isang plataporma para sa buhay\nna nakasentro sa Salita",
    definition:
      "Isang app na tumutulong sa iyo magmuni at isaulo ang isang talata ng Kasulatan, ulitin ang tatlong maikling panalangin araw-araw, ibalik ang espirituwal · pisikal · emosyonal na priyoridad ng nakakalat na buhay, at isabuhay ang iyong bokasyon.",
    sub: "Word\u00A0+\u00A0Worshiper. Isang taong sumasamba sa Diyos sa pamamagitan ng pagsulat ng Kanyang Salita at pagsasabuhay nito.",
    word: "Word",
    wordD: "Ang buhay na Salita ng Diyos",
    worshiper: "Worshiper",
    worshiperD: "Isang nag-aalay ng puso sa harap ng Salitang iyon at sumasagot sa pamamagitan ng buhay",
    result: "Tumutulong sa mga tao mamuhay bilang mga mananambang nagsusulat ng Salita — mga Wordshiper",
    layers: [
      {
        t: "App ng pagsasaulo ng Kasulatan",
        d: "Tumutulong sa mga user tanggapin, pakinggan, bigkasin, at isaulo ang isang talata araw-araw.",
      },
      {
        t: "Araw-araw na espirituwal na OS",
        d: "Muling inaayos ang mga priyoridad ng araw sa paligid ng Salita ng Diyos sa pamamagitan ng Kasulatan, panalangin, at tagaplano ng Walk.",
      },
      {
        t: "Pandaigdigang kilusan ng Salita",
        d: "Lampasan ang isang talata at sumali sa angkan bilang ika-N na Wordshiper — pagkatapos ay anyayahan ang susunod na tao gamit ang Verse\u00A0Card at ang iyong tinig.",
      },
    ],
    notOnly:
      "Ang mga channel batay sa lokasyon at komunidad ay nag-uugnay sa iyo sa kapwa mananampalataya sa iyong lugar. Ingles bilang default, na may suporta sa dalawa o tatlong wika mula sa 24 na wika. Ang Kasulatan ay hindi inisaulo nang mag-isa — ito ay ibinabahagi at pinananatiling buhay nang sama-sama.",
    forWhom:
      "Ang pagbabahagi, mga donasyon, at mga channel ay nagiging “mga landas para sa ebanghelyo.” Ang Wordshiper ay hindi simpleng kasangkapan ng app — ito ay plataporma para sa buhay na nakasentro sa Salita.",
  },
  mission: {
    label: "Misyon",
    title: "Ibalik ang espirituwal na priyoridad.\nMabawi ang kagalakan ng paglakad kasama ang Diyos.",
    body: "Tinutulungan ng Wordshiper ang mga tao sa buong mundo na isulat at isaulo ang isang talata ng Salita ng Diyos araw-araw — upang sa gitna ng sobrang impormasyon at pagmamadali, maituwid nila ang espirituwal na priyoridad at matamasa ang paglakad kasama ang Diyos.",
    habits: [
      { t: "Isang talata bawat araw", d: "Pakinggan · bigkasin · isaulo" },
      { t: "Tatlong maikling panalangin", d: "Tumugon sa Diyos sa pamamagitan ng Salita" },
      { t: "Iayos muli ang araw", d: "Isabuhay bilang priyoridad ng buhay" },
    ],
    close:
      "Ang maliit na ugaliing ito ay nagbabago ng isang puso, nagbabalik ng panalangin ng isang pamilya, nagpapanibago ng pagsamba ng isang komunidad — at sa wakas ay nagiging kilusan ng Salita na dumadaloy sa mga bansa. Iyan ang misyon ng Wordshiper.",
  },
  vision: {
    label: "Bisyon",
    title: "Isang pandaigdigang kilusan ng pagsamba\nsa pamamagitan ng Salita",
    body: "Ang bisyon ng Wordshiper ay palakihin ang mga Worshiper na sumasamba sa Diyos sa pamamagitan ng Kanyang Salita.",
    detail:
      "Ang mga tao sa buong mundo ay tumatanggap ng parehong talata, ipinahahayag ito sa sarili nilang wika at tinig, at isinasabuhay kung nasaan sila — isang pandaigdigang kilusan ng pagsasaulo ng Kasulatan na ang pagsamba ay dumadaloy sa mga tahanan, simbahan, lungsod, at mga bansa.",
  },
  routine: {
    label: "Pangunahing routine",
    title: "Tatlong beses sa isang araw,\nlimang minuto bawat isa",
    sub: "Bawat sesyon ay awtomatikong pinapaandar ng alarma ng tagaplano ng Walk, kaya ang tatlong beses sa isang araw ay nagiging ritmo ng buhay. Tumanggap sa umaga, balikan sa tanghali, kumpirmahin sa gabi — hanggang ang isang talata ay tumagos sa iyong buhay.",
    alarmNote: "Alarma ng tagaplano ng Walk",
    principle:
      "Tiny Habits — limang minuto bawat isa ay sapat na magaan upang ulitin araw-araw, habang sinisiguro ang pagpapanatili at espirituwal na lalim.",
    sessions: [
      {
        time: "Umaga\u00A0·\u00A05\u00A0min",
        when: "Pagkagising · Alarma ng tagaplano ng Walk",
        items: [
          "Panalangin 1\u00A0min — panalangin sa umaga",
          "Isaulo 2\u00A0min — talata ngayon",
          "Magmuni 2\u00A0min — ilapat ang Salita",
        ],
      },
      {
        time: "Tanghali\u00A0·\u00A05\u00A0min",
        when: "Bago ang tanghalian · Alarma ng tagaplano ng Walk",
        items: [
          "Panalangin 1\u00A0min — pasasalamat",
          "Balikan 2\u00A0min — ulitin ang talata sa umaga",
          "Pagsusuri ng Walk 2\u00A0min — mga priyoridad ngayon",
        ],
      },
      {
        time: "Gabi\u00A0·\u00A05\u00A0min",
        when: "Bago matulog · Alarma ng tagaplano ng Walk",
        items: [
          "Panalangin 1\u00A0min — pagninilay sa araw",
          "Kumpirmahin 2\u00A0min — Hide\u00A0&\u00A0Test",
          "Pasasalamat 2\u00A0min — pasasalamat ngayon",
        ],
      },
    ],
    sum: "3\u00A0×\u00A05 minuto\u00A0=\u00A015 minuto sa isang araw",
    sumSub: "Mamuhay araw-araw ayon sa espirituwal na priyoridad",
    balance: [
      { t: "Espirituwal na priyoridad", d: "Lumakad kasama ang Diyos sa pamamagitan ng Salita, panalangin, pagninilay" },
      { t: "Pisikal na ritmo", d: "Araw-araw na siklo na nakaayon sa paggising, pagkain, at pahinga" },
      { t: "Emosyonal na paggaling", d: "Pampalakas-loob na walang hatol; pasasalamat na naitala" },
    ],
  },
  product: {
    label: "Pagkakakilanlan ng produkto",
    title: "Isang plataporma,\ntatlong antas",
    sub: "Isang app ng pagsasaulo ng Kasulatan, isang araw-araw na espirituwal na OS, at isang pandaigdigang kilusan ng Salita — dinisenyo bilang isa.",
    thesis: [
      {
        t: "App ng pagsasaulo ng Kasulatan",
        d: "Tumutulong sa mga user tanggapin, pakinggan, bigkasin, at isaulo ang isang talata araw-araw.",
      },
      {
        t: "Araw-araw na espirituwal na operating system",
        d: "Muling inaayos ang mga priyoridad ng araw sa paligid ng Salita ng Diyos sa pamamagitan ng Kasulatan, panalangin, at tagaplano ng Walk.",
      },
      {
        t: "Pandaigdigang kilusan ng Salita",
        d: "Lampasan ang isang talata at sumali sa angkan bilang ika-N na Wordshiper — pagkatapos ay anyayahan ang susunod na tao gamit ang Verse\u00A0Card at ang iyong tinig.",
      },
    ],
    tabs: [
      { t: "Tanggapin", d: "Tanggapin ang Salita — ang Manna\u00A0Moment na ibinabahagi ng buong mundo" },
      { t: "Isaulo", d: "Isulat ang Salita — ang 5-yugtong Hide\u00A0&\u00A0Test engine" },
      { t: "Manalangin", d: "Ipanalangin ang Salita — tatlong maikling panalangin sa isang araw" },
      { t: "Lumikha", d: "Hayaan ang Salita dumaloy sa iyong tinig at mga card" },
      { t: "Walk", d: "Lumakad ayon sa Salita — mula sa bokasyon hanggang araw-araw na pagsasanay" },
    ],
    features: [
      { t: "Worvi — espirituwal na AI companion", d: "Hindi kailanman humahatol kapag naputol ang iyong araw-araw na gawi; inaanyayahan kang bumalik sa Salita nang may biyaya." },
      { t: "Gulong ng Jog — Kasulatan sa 1.5s", d: "Abutin ang Bibliya sa 1.5\u00A0segundo, kahit sa gitna ng pagsamba. 31,112 talata kahit walang internet." },
      { t: "Verse\u00A0Card — dumadaloy na pagpapahayag", d: "Lampasan ang isang talata at isisilang ang isang card — talata, numero sa angkan, QR ng tinig." },
      { t: "24 na wika", d: "Isaulo sa dalawa o tatlong wika kasama ang iyong inang wika." },
    ],
    demoNote: "Tunay na mga screen ng app",
  },
  movement: {
    label: "Kilusan",
    subtitle: "Hindi kami gumagawa ng app.\nNagsisindi kami ng kilusan.",
    title: "Isang espirituwal na angkan,\ntalata sa talata",
    lineageLead: "Ikaw ang",
    lineageNum: "14,207",
    lineageTail: " na Wordshiper na nagsulat ng talatang ito",
    lineageSub: "Ang numerong ito ay hindi puntos. Minamarkahan nito ang iyong lugar sa angkan ng Salita — patunay na hindi ka nag-iisa.",
    engines: [
      { t: "Pagkakasabay", e: "Magkasama, ngayon", d: "\u201cHindi ako nag-iisa\u201d — ang buong mundo ay tumatanggap ng parehong talata sa parehong sandali." },
      { t: "Angkan", e: "Bahagi ng daloy", d: "\u201cKabilang ako sa mas malaking agos\u201d — sumali sa angkan sa iba't ibang henerasyon, wika, at lupain." },
      { t: "Pampublikong likha", e: "Dumadaloy na pagpapahayag", d: "\u201cAng aking pagpapahayag ay dumadaloy sa mundo\u201d — ang Verse\u00A0Cards at ang iyong tinig ay nag-aanyaya sa susunod na tao." },
    ],
    promise: "Walang kahihiyan. Walang ingay. Isang\u00A0talata. Isang buhay ng pagsamba.",
  },
  global: {
    label: "Sa mga bansa",
    title: "Pagsambang dumadaloy sa mga tahanan,\nsimbahan, lungsod, at mga bansa",
    body: "Nangarap kami ng mga taong naaalala ang Salita na maging tunay na Wordshiper — gumagawa ng katarungan, umiibig sa kabaitan, at lumalakad nang mapagkumbaba kasama ang Diyos kung nasaan sila.",
    stats: [
      { n: "1.9B", d: "Mga Kristiyano sa buong mundo\nang mga taong nais naming paglingkuran" },
      { n: "24", d: "Mga wika\ndual at triple na pagsasaulo" },
      { n: "3", d: "Malayang app sa iisang core\nWordshiper · Verbum · Pasuk" },
    ],
    whitelabel:
      "Sa iisang pangunahing sistema ng disenyo: Wordshiper (Protestante), Verbum (Katoliko), Pasuk (Judio) — bawat isa ay gumagalang sa tradisyon nito sa iisang kilusan ng Salita.",
  },
  roadmap: {
    label: "Roadmap",
    title: "Nagsimula na ang kilusan",
    phases: [
      { t: "Phase\u00A01 — MVP", d: "Pangunahing loop: tanggapin · isaulo · sumali sa angkan" },
      { t: "Phase\u00A02 — Routine", d: "Tatlong araw-araw na sesyon · tagaplano ng Walk · Worvi" },
      { t: "Phase\u00A03 — Paglulunsad", d: "Disyembre\u00A02026 — binhing komunidad ng unang\u00A01,000" },
      { t: "Phase\u00A04 — Pagpapalawak", d: "Voice\u00A0Feed · mga channel · tatlong white-label app" },
    ],
  },
  cta: {
    title: "Naghahanap kami ng unang\u00A01,000\nupang sama-samang tanggapin ang unang manna",
    sub: "Mag-pre-register at matanggap ang iyong numero\u00A0sa\u00A0angkan. Sa araw ng paglulunsad, lahat ay tumatanggap ng unang manna sa parehong sandali.",
    placeholder: "Email address",
    button: "Pre-register",
    success: "Salamat! Sumali ka na sa angkan.",
    successWithNumber: (n: number) =>
      `Salamat! Ikaw ang Wordshiper #${n}. Pakitingnan ang iyong email para sa kumpirmasyon ng angkan.`,
    error: "Nabigo ang pagpaparehistro. Pakisubukan muli.",
    declaration: "Oo, ako ay isang Wordshiper!",
  },
  donate: {
    eyebrow: "Upang ang isang talata bawat araw ay makarating sa mga bansa",
    title: "Makipagtulungan sa kilusan ng Salita",
    sub: "Ang Wordshiper Ministry Inc. ay isang U.S. 501(c)(3) na organisasyong di-pangkalakal. Ang iyong handog ay nagpapasigla sa pagsasaulo ng Kasulatan at mga ritmo ng panalangin sa buong mundo.",
    oneTime: "Isang beses",
    monthly: "Buwanan",
    custom: "Custom na halaga",
    customPlaceholder: "Ilagay ang halaga",
    give: "Magbigay",
    processing: "Kumokonekta…",
    taxNote: "Mababawas sa buwis sa U.S. · EIN 33-1561112 · Mga resibo ay ibinibigay ng Stripe.",
    successTitle: "Salamat",
    successSub: "Ang iyong handog ay tumutulong panatilihing dumadaloy ang angkan ng Salita.",
    error: "Hindi masimulan ang pagbabayad. Mangyaring mag-email sa info@wordshiper.org.",
    backHome: "Bumalik sa pangunahin",
  },
  investors: {
    navTitle: "Mga mamumuhunan",
    title: "Naghahanap ng mga kasosyo upang isulat\nang susunod na kabanata ng kilusan ng Salita",
    sub: "Ang Wordshiper ay gumagana bilang Wordshiper Ministry Inc. (501(c)(3)) at Wordshiper PBC, Inc. — pinoprotektahan ang pagpapanatili at misyon nang sama-sama.",
    points: [
      { t: "Napatunayang disenyo ng kilusan", d: "Pagkakasabay, angkan, pampublikong bunga — tatlong engine na muling tinukoy nang may espirituwal na kahulugan." },
      { t: "Isang napapanatiling modelo", d: "Libre magpakailanman para sa mga indibidwal. Ang Pro\u00A0Organization at boluntaryong pagbibigay ang nagpapanatili ng operasyon. Walang patalastas." },
      { t: "Teknolohiyang ginawa upang gumana", d: "Ang pandaigdigang TTS cache ay istrukturang nagbabawas ng gastos sa boses sa malaking sukat." },
      { t: "Pagpapalawak na white-label", d: "Isang pangunahing engine ang pumapasok sa merkado ng mga Protestante, Katoliko, at Judio." },
    ],
    teamTitle: "Pamumuno",
    team: [
      { n: "Jaedon Um", r: "CEO / Founder" },
      { n: "Eunhee Kim", r: "CCO" },
      { n: "Hyungon Kim", r: "CTO" },
    ],
    philosophy: "Misyon bago ang teknolohiya. Salita bago ang interface. Tiwala bago ang paglaki.",
    contactTitle: "Humiling ng mga materyal na IR at mga katanungan sa pamumuhunan",
    contactSub: "Plano ng negosyo, mga pagtataya sa pananalapi, at demo ng produkto ay makukuha kapag hiniling.",
    contactBtn: "Makipag-ugnayan sa amin",
    backHome: "Bumalik sa pangunahin",
  },
  aboutPage: {
    title: "Tungkol sa Wordshiper",
    subtitle: "Upang ang isang talata bawat araw ay maging buhay ng pagsamba.",
    toc: [
      { id: "what", label: "Ano ang Wordshiper?" },
      { id: "mission", label: "Misyon" },
      { id: "vision", label: "Bisyon" },
      { id: "identity", label: "Pagkakakilanlan" },
      { id: "thesis", label: "Thesis" },
    ],
    what: {
      label: "Ano ang Wordshiper?",
      title: "Isang app na sumusulat ng Salita\nsa puso — at nire-reset ang araw",
      lead:
        "Tinutulungan ng Wordshiper ang mga tao sa buong mundo na isulat at isaulo ang isang talata ng Salita ng Diyos araw-araw — upang sa gitna ng sobrang impormasyon at pagmamadali, maituwid nila ang espirituwal na priyoridad at matamasa ang paglakad kasama ang Diyos.",
      body:
        "Hindi kami tumitigil sa pagtulong sa mga user na “isaulo ang isang talata.” Nag-aalok ang Wordshiper ng araw-araw na espirituwal na routine na humahantong sa iyo upang pakinggan, bigkasin, isaulo, manalangin, at isabuhay ang isang talata bilang priyoridad ng buhay.",
    },
    mission: {
      label: "Misyon",
      title: "Upang ang maliit na ugaliin\nay dumaloy sa mga bansa",
      lead:
        "Tinutulungan ng Wordshiper ang mga tao sa buong mundo na isulat at isaulo ang isang talata ng Salita ng Diyos araw-araw — upang sa gitna ng sobrang impormasyon at pagmamadali, maituwid nila ang espirituwal na priyoridad at matamasa ang paglakad kasama ang Diyos.",
      habitsTitle: "Tatlong araw-araw na ugaliin",
      habits: [
        { t: "Isang talata bawat araw", d: "Pakinggan, bigkasin, isulat sa puso." },
        { t: "Tatlong maikling panalangin", d: "Tumugon sa Diyos sa pamamagitan ng Salita." },
        {
          t: "Iayos muli ang araw ayon sa Salita",
          d: "I-reset ang mga priyoridad ng buhay sa paligid ng Kasulatan.",
        },
      ],
      close:
        "Ang maliit na ugaliing ito ay nagbabago ng isang puso, nagbabalik ng panalangin ng isang pamilya, nagpapanibago ng pagsamba ng isang komunidad — at sa wakas ay nagiging kilusan ng Salita na dumadaloy sa mga bansa. Iyan ang misyon ng Wordshiper.",
    },
    vision: {
      label: "Bisyon",
      title: "Palakihin ang mga Worshiper\nsa pamamagitan ng Salita",
      lead:
        "Ang bisyon ng Wordshiper ay palakihin ang mga Worshiper na sumasamba sa Diyos sa pamamagitan ng Kanyang Salita.",
      body:
        "Nangarap kami na ang mga tao ay maging tunay na mananamba na nagpapasaya sa Diyos sa bawat lugar ng buhay — sa pamamagitan ng maliit na ugaliin ng pakikinig, pagbigkas, pag-alala, at pagsasabuhay ng Salita.",
      close:
        "Ang mga tao sa buong mundo ay tumatanggap ng parehong talata, ipinahahayag ito sa sarili nilang wika at tinig, at isinasabuhay kung nasaan sila — isang pandaigdigang kilusan ng pagsasaulo ng Kasulatan. Iyan ang aming bisyon.",
    },
    identity: {
      label: "Pagkakakilanlan",
      title: "Word\u00A0+\u00A0Worshiper",
      lead: "Ang Wordshiper ay hindi simpleng app ng Bibliya.",
      body:
        "Ang Wordshiper ay nangangahulugang isang taong sumasamba sa Diyos sa pamamagitan ng pagsulat ng Kanyang Salita sa puso at pagsasabuhay nito.",
      word: "Word",
      wordD: "Ang buhay na Salita ng Diyos",
      worshiper: "Worshiper",
      worshiperD: "Isang nag-aalay ng puso sa harap ng Salitang iyon at sumasagot sa pamamagitan ng buhay",
      result:
        "Kaya ang Wordshiper ay isang taong naaalala ang Diyos sa pamamagitan ng Salita, sumasamba sa Diyos gamit ang Salita, at lumalakad kasama ang Diyos ayon sa Salita.",
    },
    thesis: {
      label: "Thesis",
      title: "Isang plataporma,\ntatlong antas",
      lead:
        "Ang Wordshiper ay isang app ng pagsasaulo ng Kasulatan, isang araw-araw na espirituwal na OS na muling inaayos ang araw, at isang pandaigdigang kilusan ng pagsasaulo ng Kasulatan — dinisenyo bilang isa.",
      layers: [
        {
          t: "App ng pagsasaulo ng Kasulatan",
          d: "Tumutulong sa iyo tanggapin, pakinggan, bigkasin, at isaulo ang isang talata araw-araw.",
        },
        {
          t: "Araw-araw na espirituwal na OS",
          d: "Muling inaayos ang mga priyoridad ng araw sa paligid ng Salita ng Diyos sa pamamagitan ng Kasulatan, panalangin, at tagaplano ng Walk.",
        },
        {
          t: "Pandaigdigang kilusan ng Salita",
          d: "Lampasan ang isang talata at sumali sa angkan bilang ika-N na Wordshiper — pagkatapos ay anyayahan ang susunod na tao gamit ang Verse\u00A0Card at ang iyong tinig.",
        },
      ],
    },
    orgNote:
      "Ang Wordshiper Ministry ay isang U.S. 501(c)(3) na organisasyong di-pangkalakal. Libre magpakailanman ang indibidwal na paggamit. Ang mga handog at pakikipagtulungan ang nagpapanatili ng kilusan.",
  },
  footer: {
    tagline: "Isang\u00A0talata bawat araw. Isang buhay ng pagsamba.",
    legal: "© 2024 Wordshiper Ministry Inc. · Based in New York, U.S.A. · 501(c)(3) Nonprofit · EIN: 33-1561112",
    address: "5 Union Square West FRNT 1 #1299, New York, NY 10003, U.S.A.",
  },
};

export default locale;
