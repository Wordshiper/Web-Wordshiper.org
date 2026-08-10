import type { RenewalCopy } from "@/data/renewal-copy";

const locale: RenewalCopy = {
  chrome: {
    home: "Beranda",
    searchLanguages: "Cari bahasa…",
    chooseLanguage: "Pilih bahasa Anda",
    languagesCount: "bahasa",
    allRegions: "Semua wilayah",
    all: "Semua",
    heroSlidesAria: "Slide pengantar Wordshiper",
    slideSelectorAria: "Pemilih slide",
    lineageNumber: "Nomor garis keturunan Anda",
    lineageEmailNote: "Kami telah mengirim email konfirmasi — silakan periksa kotak masuk Anda.",
    donatePreparingEyebrow: "Segera hadir",
    donatePreparingTitle: "Donasi sedang disiapkan",
    donatePreparingBody:
      "Tautan donasi sedang disiapkan.\n" +
      "Kami akan membukanya kembali begitu kami punya\n" +
      "pengalaman memberi yang lebih aman dan lancar.",
    donatePreparingCta: "Mengerti",
    preregisterOpensEyebrow: "Dibuka 1\u00A0Desember\u00A02026",
    preregisterOpensTitle: "Pra-daftar dibuka 1\u00A0Desember",
    preregisterOpensBody:
      "Pra-daftar garis keturunan dibuka pada 1\u00A0Desember\u00A02026.\n" +
      "Hari itu, alur pendaftaran yang baru dibangun dengan teknologi terbaru\n" +
      "akan menyambut\u00A01.000 Wordshiper pertama.",
    preregisterOpensCta: "Mengerti",
  },
  nav: {
    product: "Aliran",
    routine: "Rutinitas",
    movement: "Gerakan",
    roadmap: "Peta jalan",
    about: "Tentang",
    investors: "Investor",
    donate: "Donasi",
    preregister: "Pra-daftar",
    why: "Mengapa",
    identity: "Identitas",
  },
  hero: {
    badge: "Peluncuran Desember\u00A02026",
    slogan: "Satu\u00A0ayat sehari. Hidup penyembahan.",
    declaration: "Saya adalah Wordshiper.",
    cta1: "Bergabung dengan\u00A01.000 pertama",
    cta2: "Mengapa Wordshiper",
    lineageNote: "Pra-daftar dan terima nomor garis\u00A0keturunan Anda",
    slides: [
      {
        label: "Apa itu Wordshiper?",
        title1: "Hafalkan satu ayat.",
        title2: "Susun ulang hari Anda.",
        body: "Aplikasi yang membantu Anda merenungkan dan menghafal satu ayat Kitab Suci, mengulang tiga doa singkat setiap hari, memulihkan prioritas rohani · jasmani · emosional, dan hidup dalam panggilan.",
        visual: "home" as const,
      },
      {
        label: "Apa yang membuatnya berbeda",
        title1: "Anda tidak sendirian.",
        title2: "Beginilah injil mengalir.",
        body: "Saluran berbasis lokasi dan komunitas menghubungkan Anda dengan sesama orang percaya di dekat Anda. Dukungan ganda/tiga bahasa di 24 bahasa. Berbagi, memberi, dan saluran menjadi jalur injil. Wordshiper bukan sekadar alat — ini adalah platform untuk hidup yang berpusat pada Firman.",
        visual: "jog" as const,
      },
      {
        label: "Identitas tiga lapisan",
        title1: "Aplikasi hafalan · OS rohani ·",
        title2: "Gerakan Firman global",
        body: "Terima, dengar, ucapkan, dan hafalkan satu ayat sehari. Susun ulang hari Anda dalam lima belas menit. Lulus satu ayat dan bergabung dalam garis keturunan sebagai Wordshiper ke-N — lalu undang orang berikutnya dengan Verse\u00A0Card dan suara Anda.",
        visual: "home" as const,
      },
    ],
  },
  why: {
    label: "Mengapa Wordshiper",
    title: "Lebih terhubung dari sebelumnya,\nnamun lebih dalam tercerai-berai",
    lead:
      "Kita hidup dalam banjir informasi dan kesibukan yang tak henti.\n" +
      "Suara tanpa jumlah mengguncang hati kita setiap hari, dan prioritas hidup mudah tercerai-berai.",
    points: [
      {
        t: "Kebisingan dan tergesa-gesa",
        d: "Orang lebih terhubung namun lebih dalam tercerai-berai — mengonsumsi lebih banyak informasi sementara waktu dalam kebenaran terus menyusut.",
      },
      {
        t: "Kerinduan untuk menyembah",
        d: "Banyak yang ingin mengenal Allah dan menjadi penyembah sejati. Namun di bawah kecepatan dan tekanan hidup sehari-hari, mereka kesulitan mengingat Allah, berjalan bersama-Nya, dan menyembah dengan hidup mereka.",
      },
      {
        t: "Pertanyaan pendirian",
        d: "Bagaimana satu orang, setiap hari, dapat mengingat Allah melalui Firman-Nya, berjalan bersama-Nya, dan hidup dalam penyembahan?",
      },
    ],
    answer:
      "Ketika satu ayat Kitab Suci ditanam dalam-dalam di sebuah hati,\n" +
      "Firman itu menjadi kuasa untuk mengalahkan ketakutan, untuk melewati kesulitan,\n" +
      "dan untuk mengarahkan prioritas rohani yang tercerai-berai kembali kepada Allah.\n\n" +
      "Wariskanlah itu sebagai pusaka Firman —\n" +
      "kepada anak-anak terkasih Anda, dan kepada orang tua Anda.\n\n" +
      "Hari demi hari kita akan dibarui\n" +
      "menjadi penyembah yang berkenan kepada Allah.",
    answerRef: "— Mengapa Wordshiper dimulai",
  },
  identity: {
    label: "Apa itu Wordshiper",
    title: "Platform untuk hidup\nyang berpusat pada Firman",
    definition:
      "Aplikasi yang membantu Anda merenungkan dan menghafal satu ayat Kitab Suci, mengulang tiga doa singkat setiap hari, memulihkan prioritas rohani · jasmani · emosional dari hidup yang tercerai-berai, dan menjalani panggilan Anda.",
    sub: "Word\u00A0+\u00A0Worshiper. Seseorang yang menyembah Allah dengan menuliskan Firman-Nya dan menghidupinya.",
    word: "Word",
    wordD: "Firman Allah yang hidup",
    worshiper: "Worshiper",
    worshiperD: "Yang mempersembahkan hati di hadapan Firman itu dan menjawab dengan hidup",
    result: "Membantu orang hidup sebagai penyembah yang menuliskan Firman — Wordshipers",
    layers: [
      {
        t: "Aplikasi Hafalan Kitab Suci",
        d: "Membantu pengguna menerima, mendengar, mengucapkan, dan menghafal satu ayat setiap hari.",
      },
      {
        t: "OS Rohani Harian",
        d: "Menyusun ulang prioritas hari seputar Firman Allah melalui Kitab Suci, doa, dan perencana Walk.",
      },
      {
        t: "Gerakan Hafalan Kitab Suci Global",
        d: "Lulus satu ayat dan bergabung dalam garis keturunan sebagai Wordshiper ke-N — lalu undang orang berikutnya dengan Verse\u00A0Card dan suara Anda.",
      },
    ],
    notOnly:
      "Saluran berbasis lokasi dan komunitas menghubungkan Anda dengan sesama orang percaya di wilayah Anda. Bahasa Inggris secara bawaan, dengan dukungan ganda/tiga bahasa di 24 bahasa. Kitab Suci tidak dihafal sendirian — dibagikan dan dijaga hidup bersama.",
    forWhom:
      "Berbagi, donasi, dan saluran menjadi «jalur injil». Wordshiper bukan sekadar alat aplikasi — ini adalah platform untuk hidup yang berpusat pada Firman.",
  },
  mission: {
    label: "Misi",
    title: "Pulihkan prioritas rohani.\nPulihkan sukacita berjalan bersama Allah.",
    body: "Wordshiper membantu orang di seluruh dunia menuliskan dan menghafal satu ayat Firman Allah setiap hari — agar di tengah kelebihan informasi dan kesibukan, mereka dapat menetapkan prioritas rohani dengan benar dan menikmati berjalan bersama Allah.",
    habits: [
      { t: "Satu ayat sehari", d: "Dengar · ucapkan · hafalkan" },
      { t: "Tiga doa singkat", d: "Tanggapi Allah melalui Firman" },
      { t: "Susun ulang hari", d: "Praktikkan sebagai prioritas hidup" },
    ],
    close:
      "Kebiasaan kecil ini mengubah satu hati, memulihkan doa satu keluarga, memperbarui penyembahan satu komunitas — dan akhirnya menjadi gerakan Firman yang mengalir ke bangsa-bangsa. Itulah misi Wordshiper.",
  },
  vision: {
    label: "Visi",
    title: "Gerakan penyembahan global\nmelalui Firman",
    body: "Visi Wordshiper adalah membangkitkan Penyembah yang menyembah Allah melalui Firman-Nya.",
    detail:
      "Orang di seluruh dunia menerima ayat yang sama, mengakuinya dalam bahasa dan suara mereka sendiri, dan menghidupinya di tempat mereka berdiri — gerakan hafalan Kitab Suci global yang penyembahannya mengalir ke rumah, gereja, kota, dan bangsa-bangsa.",
  },
  routine: {
    label: "Rutinitas inti",
    title: "Tiga kali sehari,\nlima menit setiap kali",
    sub: "Setiap sesi dipicu otomatis oleh alarm perencana Walk, sehingga tiga kali sehari menjadi ritme hidup. Terima di pagi hari, tinjau di siang hari, tegaskan di malam hari — hingga satu ayat meresap ke dalam hidup Anda.",
    alarmNote: "Alarm perencana Walk",
    principle:
      "Tiny Habits — lima menit setiap kali membuatnya cukup ringan untuk diulang setiap hari, sambil menjaga retensi dan kedalaman rohani.",
    sessions: [
      {
        time: "Pagi\u00A0·\u00A05\u00A0menit",
        when: "Saat bangun · Alarm perencana Walk",
        items: [
          "Doa 1\u00A0menit — doa pagi",
          "Hafalan 2\u00A0menit — ayat hari ini",
          "Renungan 2\u00A0menit — terapkan Firman",
        ],
      },
      {
        time: "Siang\u00A0·\u00A05\u00A0menit",
        when: "Sebelum makan siang · Alarm perencana Walk",
        items: [
          "Doa 1\u00A0menit — syukur",
          "Ulangan 2\u00A0menit — ulangi ayat pagi",
          "Cek Walk 2\u00A0menit — prioritas hari ini",
        ],
      },
      {
        time: "Malam\u00A0·\u00A05\u00A0menit",
        when: "Sebelum tidur · Alarm perencana Walk",
        items: [
          "Doa 1\u00A0menit — refleksi harian",
          "Tegaskan 2\u00A0menit — Hide\u00A0&\u00A0Test",
          "Syukur 2\u00A0menit — ucapan terima kasih hari ini",
        ],
      },
    ],
    sum: "3\u00A0×\u00A05 menit\u00A0=\u00A015 menit sehari",
    sumSub: "Menjalani setiap hari dengan prioritas rohani",
    balance: [
      { t: "Prioritas rohani", d: "Berjalan bersama Allah melalui Firman, doa, renungan" },
      { t: "Ritme jasmani", d: "Siklus harian yang selaras dengan bangun, makan, dan istirahat" },
      { t: "Pemulihan emosional", d: "Dorongan tanpa penghukuman; syukur tercatat" },
    ],
  },
  product: {
    label: "Identitas produk",
    title: "Satu platform,\ntiga lapisan",
    sub: "Aplikasi hafalan Kitab Suci, OS rohani harian, dan gerakan Firman global — dirancang sebagai satu.",
    thesis: [
      {
        t: "Aplikasi Hafalan Kitab Suci",
        d: "Membantu pengguna menerima, mendengar, mengucapkan, dan menghafal satu ayat setiap hari.",
      },
      {
        t: "Sistem Operasi Rohani Harian",
        d: "Menyusun ulang prioritas hari seputar Firman Allah melalui Kitab Suci, doa, dan perencana Walk.",
      },
      {
        t: "Gerakan Hafalan Kitab Suci Global",
        d: "Lulus satu ayat dan bergabung dalam garis keturunan sebagai Wordshiper ke-N — lalu undang orang berikutnya dengan Verse\u00A0Card dan suara Anda.",
      },
    ],
    tabs: [
      { t: "Terima", d: "Terima Firman — Manna\u00A0Moment yang dibagikan seluruh dunia" },
      { t: "Hafalkan", d: "Tuliskan Firman — mesin Hide\u00A0&\u00A0Test 5 tahap" },
      { t: "Berdoa", d: "Doakan Firman — tiga doa singkat sehari" },
      { t: "Ciptakan", d: "Biarkan Firman mengalir dalam suara dan kartu Anda" },
      { t: "Berjalan", d: "Berjalan menurut Firman — dari panggilan ke praktik harian" },
    ],
    features: [
      {
        t: "Worvi — teman AI rohani",
        d: "Tidak pernah menghukum rangkaian yang terputus; mengundang Anda kembali ke Firman dengan kasih karunia.",
      },
      {
        t: "Roda jog — Kitab Suci dalam 1,5 dtk",
        d: "Jangkau Alkitab dalam 1,5\u00A0detik, bahkan di tengah penyembahan. 31.112 ayat tersedia luring.",
      },
      {
        t: "Verse\u00A0Card — pengakuan yang mengalir",
        d: "Lulus satu ayat dan sebuah kartu lahir — ayat, nomor garis keturunan, QR suara.",
      },
      {
        t: "24 bahasa",
        d: "Hafalkan dalam dua atau tiga bahasa bersama bahasa ibu Anda.",
      },
    ],
    demoNote: "Layar aplikasi sebenarnya",
  },
  movement: {
    label: "Gerakan",
    subtitle: "Kami tidak sedang membangun aplikasi.\nKami sedang menyalakan gerakan.",
    title: "Garis keturunan rohani,\nayat demi ayat",
    lineageLead: "Anda adalah Wordshiper nomor",
    lineageNum: "14,207",
    lineageTail: " yang menuliskan ayat ini",
    lineageSub: "Angka ini bukan skor. Ini menandai tempat Anda dalam garis keturunan Firman — bukti bahwa Anda tidak sendirian.",
    engines: [
      {
        t: "Sinkronisitas",
        e: "Bersama, sekarang",
        d: "«Saya tidak sendirian» — seluruh dunia menerima ayat yang sama pada saat yang sama.",
      },
      {
        t: "Garis keturunan",
        e: "Bagian dari aliran",
        d: "«Saya bagian dari arus yang lebih besar» — bergabung dalam garis keturunan lintas generasi, bahasa, dan tanah.",
      },
      {
        t: "Artefak Publik",
        e: "Pengakuan yang mengalir",
        d: "«Pengakuan saya mengalir ke dunia» — Verse\u00A0Cards dan suara Anda mengundang orang berikutnya.",
      },
    ],
    promise: "Tanpa malu. Tanpa kebisingan. Satu\u00A0ayat. Hidup penyembahan.",
  },
  global: {
    label: "Ke bangsa-bangsa",
    title: "Penyembahan yang mengalir ke rumah,\ngereja, kota, dan bangsa-bangsa",
    body: "Kami bermimpi orang yang mengingat Firman menjadi Wordshipers sejati — melakukan keadilan, mengasihi belas kasihan, dan berjalan dengan rendah hati bersama Allah di tempat mereka berdiri.",
    stats: [
      { n: "1.9B", d: "Orang Kristen di seluruh dunia\nmereka yang kami rindukan untuk dilayani" },
      { n: "24", d: "Bahasa\nhafalan ganda & tiga" },
      { n: "3", d: "Aplikasi independen pada satu inti\nWordshiper · Verbum · Pasuk" },
    ],
    whitelabel:
      "Pada satu sistem desain inti: Wordshiper (Protestan), Verbum (Katolik), Pasuk (Yahudi) — masing-masing menghormati tradisinya dalam satu gerakan Firman.",
  },
  roadmap: {
    label: "Peta jalan",
    title: "Gerakan telah dimulai",
    phases: [
      { t: "Phase\u00A01 — MVP", d: "Loop inti: terima · hafalkan · bergabung dalam garis keturunan" },
      { t: "Phase\u00A02 — Rutinitas", d: "Tiga sesi harian · perencana Walk · Worvi" },
      { t: "Phase\u00A03 — Peluncuran", d: "Desember\u00A02026 — komunitas benih\u00A01.000 pertama" },
      { t: "Phase\u00A04 — Perluasan", d: "Voice\u00A0Feed · saluran · tiga aplikasi white-label" },
    ],
  },
  cta: {
    title: "Kami mencari\u00A01.000 pertama\nuntuk menerima manna pertama bersama",
    sub: "Pra-daftar dan terima nomor garis\u00A0keturunan Anda. Pada hari peluncuran, semua orang menerima manna pertama pada saat yang sama.",
    placeholder: "Alamat email",
    button: "Pra-daftar",
    success: "Terima kasih! Anda telah bergabung dalam garis keturunan.",
    successWithNumber: (n: number) =>
      `Terima kasih! Anda adalah Wordshiper #${n}. Silakan periksa email untuk konfirmasi garis keturunan Anda.`,
    error: "Pendaftaran gagal. Silakan coba lagi.",
    declaration: "Ya, saya adalah Wordshiper!",
  },
  donate: {
    eyebrow: "Agar satu ayat sehari dapat menjangkau bangsa-bangsa",
    title: "Bermitra dengan gerakan Firman",
    sub: "Wordshiper Ministry Inc. adalah organisasi nirlaba 501(c)(3) AS. Pemberian Anda mendorong hafalan Kitab Suci dan ritme doa di seluruh dunia.",
    oneTime: "Sekali",
    monthly: "Bulanan",
    custom: "Jumlah khusus",
    customPlaceholder: "Masukkan jumlah",
    give: "Beri",
    processing: "Menghubungkan…",
    taxNote: "Dapat dikurangi pajak di AS · EIN 33-1561112 · Tanda terima disediakan oleh Stripe.",
    successTitle: "Terima kasih",
    successSub: "Pemberian Anda membantu garis keturunan Firman terus mengalir.",
    error: "Tidak dapat memulai pembayaran. Silakan email info@wordshiper.org.",
    backHome: "Kembali ke beranda",
  },
  investors: {
    navTitle: "Investor",
    title: "Mencari mitra untuk menulis\nbab berikutnya dari gerakan Firman",
    sub: "Wordshiper beroperasi sebagai Wordshiper Ministry Inc. (501(c)(3)) dan Wordshiper PBC, Inc. — melindungi keberlanjutan dan misi bersama.",
    points: [
      {
        t: "Desain gerakan yang terbukti",
        d: "Sinkronisitas, garis keturunan, artefak publik — tiga mesin didefinisikan ulang dengan makna rohani.",
      },
      {
        t: "Model yang berkelanjutan",
        d: "Gratis selamanya untuk individu. Pro\u00A0Organization dan pemberian sukarela menopang operasi. Tanpa iklan.",
      },
      {
        t: "Teknologi dibangun untuk beroperasi",
        d: "Cache TTS global secara struktural mengurangi biaya suara pada skala.",
      },
      {
        t: "Perluasan white-label",
        d: "Satu mesin inti memasuki pasar Protestan, Katolik, dan Yahudi.",
      },
    ],
    teamTitle: "Kepemimpinan",
    team: [
      { n: "Jaedon Um", r: "CEO / Founder" },
      { n: "Eunhee Kim", r: "CCO" },
      { n: "Hyungon Kim", r: "CTO" },
    ],
    philosophy: "Misi sebelum teknologi. Firman sebelum antarmuka. Kepercayaan sebelum pertumbuhan.",
    contactTitle: "Minta materi IR & pertanyaan investasi",
    contactSub: "Rencana bisnis, proyeksi keuangan, dan demo produk tersedia atas permintaan.",
    contactBtn: "Hubungi kami",
    backHome: "Kembali ke beranda",
  },
  aboutPage: {
    title: "Tentang Wordshiper",
    subtitle: "Agar satu ayat sehari menjadi hidup penyembahan.",
    toc: [
      { id: "what", label: "Apa itu Wordshiper?" },
      { id: "mission", label: "Misi" },
      { id: "vision", label: "Visi" },
      { id: "identity", label: "Identitas" },
      { id: "thesis", label: "Tesis" },
    ],
    what: {
      label: "Apa itu Wordshiper?",
      title: "Aplikasi yang menuliskan Firman\ndi hati — dan mengatur ulang hari",
      lead: "Wordshiper membantu orang di seluruh dunia menuliskan dan menghafal satu ayat Firman Allah setiap hari — agar di tengah kelebihan informasi dan kesibukan, mereka dapat menetapkan prioritas rohani dengan benar dan menikmati berjalan bersama Allah.",
      body: "Kami tidak berhenti di membantu pengguna «menghafal satu ayat». Wordshiper menawarkan rutinitas rohani harian yang membawa Anda mendengar, mengucapkan, menghafal, berdoa, dan mempraktikkan satu ayat sebagai prioritas hidup.",
    },
    mission: {
      label: "Misi",
      title: "Agar kebiasaan kecil\nmengalir ke bangsa-bangsa",
      lead: "Wordshiper membantu orang di seluruh dunia menuliskan dan menghafal satu ayat Firman Allah setiap hari — agar di tengah kelebihan informasi dan kesibukan, mereka dapat menetapkan prioritas rohani dengan benar dan menikmati berjalan bersama Allah.",
      habitsTitle: "Tiga kebiasaan harian",
      habits: [
        { t: "Satu ayat sehari", d: "Dengar, ucapkan, tuliskan di hati." },
        { t: "Tiga doa singkat", d: "Tanggapi Allah melalui Firman." },
        {
          t: "Susun ulang hari dengan Firman",
          d: "Atur ulang prioritas hidup seputar Kitab Suci.",
        },
      ],
      close:
        "Kebiasaan kecil ini mengubah satu hati, memulihkan doa satu keluarga, memperbarui penyembahan satu komunitas — dan akhirnya menjadi gerakan Firman yang mengalir ke bangsa-bangsa. Itulah misi Wordshiper.",
    },
    vision: {
      label: "Visi",
      title: "Bangkitkan Penyembah\nmelalui Firman",
      lead: "Visi Wordshiper adalah membangkitkan Penyembah yang menyembah Allah melalui Firman-Nya.",
      body: "Kami bermimpi orang menjadi penyembah sejati yang berkenan kepada Allah di setiap tempat hidup — melalui kebiasaan kecil mendengar, mengucapkan, mengingat, dan menghidupi Firman.",
      close:
        "Orang di seluruh dunia menerima ayat yang sama, mengakuinya dalam bahasa dan suara mereka sendiri, dan menghidupinya di tempat mereka berdiri — gerakan hafalan Kitab Suci global. Itulah visi kami.",
    },
    identity: {
      label: "Identitas",
      title: "Word\u00A0+\u00A0Worshiper",
      lead: "Wordshiper bukan sekadar aplikasi Alkitab.",
      body: "Wordshiper berarti seseorang yang menyembah Allah dengan menuliskan Firman-Nya di hati dan menghidupinya.",
      word: "Word",
      wordD: "Firman Allah yang hidup",
      worshiper: "Worshiper",
      worshiperD: "Yang mempersembahkan hati di hadapan Firman itu dan menjawab dengan hidup",
      result:
        "Jadi Wordshiper adalah seseorang yang mengingat Allah melalui Firman, menyembah Allah dengan Firman, dan berjalan bersama Allah menurut Firman.",
    },
    thesis: {
      label: "Tesis",
      title: "Satu platform,\ntiga lapisan",
      lead: "Wordshiper adalah aplikasi hafalan Kitab Suci, OS rohani harian yang menyusun ulang hari, dan gerakan hafalan Kitab Suci global — dirancang sebagai satu.",
      layers: [
        {
          t: "Aplikasi Hafalan Kitab Suci",
          d: "Membantu Anda menerima, mendengar, mengucapkan, dan menghafal satu ayat setiap hari.",
        },
        {
          t: "OS Rohani Harian",
          d: "Menyusun ulang prioritas hari seputar Firman Allah melalui Kitab Suci, doa, dan perencana Walk.",
        },
        {
          t: "Gerakan Hafalan Kitab Suci Global",
          d: "Lulus satu ayat dan bergabung dalam garis keturunan sebagai Wordshiper ke-N — lalu undang orang berikutnya dengan Verse\u00A0Card dan suara Anda.",
        },
      ],
    },
    orgNote:
      "Wordshiper Ministry adalah organisasi nirlaba 501(c)(3) AS. Penggunaan individu gratis selamanya. Pemberian dan kemitraan menopang gerakan.",
  },
  footer: {
    tagline: "Satu\u00A0ayat sehari. Hidup penyembahan.",
    legal:
      "© 2024 Wordshiper Ministry Inc. · Based in New York, U.S.A. · 501(c)(3) Nonprofit · EIN: 33-1561112",
    address: "5 Union Square West FRNT 1 #1299, New York, NY 10003, U.S.A.",
  },
};

export default locale;
