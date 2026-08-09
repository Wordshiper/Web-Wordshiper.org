import photoJaedon from "@assets/leadership/jaedon-um.jpg";
import photoEunhee from "@assets/leadership/eunhee-kim.jpg";
import photoHyounggon from "@assets/leadership/hyounggon-kim.png";
import photoJeff from "@assets/leadership/jeff-chaus.jpg";

export type LeaderCopy = { name: string; role: string; bio: string };

export interface Leader {
  id: string;
  photo: string;
  /** CSS object-position for consistent face framing in the circle */
  objectPosition: string;
  /** Zoom face to match tighter headshots (1 = no zoom) */
  faceScale?: number;
  /** Locale → copy (falls back to en) */
  copy: Record<string, LeaderCopy>;
}

export const LEADERSHIP: Leader[] = [
  {
    id: "jaedon",
    photo: photoJaedon,
    objectPosition: "center 18%",
    faceScale: 1.12,
    copy: {
      en: {
        name: "Jaedon Um",
        role: "Founder & CEO",
        bio: "As an ordained pastor and IT director based in New York, he bridges faith and technology to advance global missions. He is devoted to the Wordshiper movement that helps believers live as worshipers of the Word through innovative digital platforms.",
      },
      ko: {
        name: "엄재돈",
        role: "Founder & CEO",
        bio: "뉴욕을 기반으로 활동하는 안수 목사이자 IT 디렉터로서, 신앙과 기술을 연결하여 세계 선교를 진전시키고 있습니다. 혁신적인 디지털 플랫폼을 통해 성도들이 말씀의 예배자로 살아가도록 돕는 워십퍼 (Wordshiper) 운동에 헌신하고 있습니다.",
      },
      es: {
        name: "Jaedon Um",
        role: "Founder & CEO",
        bio: "Como pastor ordenado y director de TI con sede en Nueva York, une la fe y la tecnología para avanzar las misiones globales. Se dedica al movimiento Wordshiper que ayuda a los creyentes a vivir como adoradores de la Palabra a través de plataformas digitales innovadoras.",
      },
      fr: {
        name: "Jaedon Um",
        role: "Founder & CEO",
        bio: "Pasteur ordonné et directeur informatique basé à New York, il relie la foi et la technologie pour faire progresser les missions mondiales. Il se consacre au mouvement Wordshiper qui aide les croyants à vivre comme adorateurs de la Parole grâce à des plateformes numériques innovantes.",
      },
      de: {
        name: "Jaedon Um",
        role: "Founder & CEO",
        bio: "Als ordinierter Pastor und IT-Direktor mit Sitz in New York verbindet er Glaube und Technologie, um die globale Mission voranzubringen. Er widmet sich der Wordshiper-Bewegung, die Gläubigen hilft, durch innovative digitale Plattformen als Anbeter des Wortes zu leben.",
      },
      ja: {
        name: "ジェドン・ウム",
        role: "Founder & CEO",
        bio: "ニューヨークを拠点とする按手を受けた牧師でありITディレクターとして、信仰とテクノロジーを結び、世界宣教を前進させています。革新的なデジタルプラットフォームを通して、聖徒が御言葉の礼拝者として生きるのを助けるWordshiper（ワーシッパー）運動に献身しています。",
      },
      zh: {
        name: "Jaedon Um",
        role: "Founder & CEO",
        bio: "作为常驻纽约的按立牧师与IT总监，他连接信仰与科技，推进全球宣教。他投身于敬拜者（Wordshiper）运动，通过创新数字平台帮助信徒活出圣道敬拜者的生命。",
      },
      "zh-TW": {
        name: "Jaedon Um",
        role: "Founder & CEO",
        bio: "作為常駐紐約的按立牧師與IT總監，他連接信仰與科技，推進全球宣教。他投身於敬拜者（Wordshiper）運動，透過創新數位平台幫助信徒活出聖道敬拜者的生命。",
      },
      ar: {
        name: "Jaedon Um",
        role: "Founder & CEO",
        bio: "بصفته قسًا مرسومًا ومدير تقنية معلومات مقيمًا في نيويورك، يربط بين الإيمان والتكنولوجيا لدفع الإرساليات العالمية. وهو مكرّس لحركة Wordshiper التي تساعد المؤمنين على العيش كعبّاد للكلمة عبر منصات رقمية مبتكرة.",
      },
      hi: {
        name: "Jaedon Um",
        role: "Founder & CEO",
        bio: "न्यूयॉर्क स्थित अभिषिक्त पास्टर और IT डायरेक्टर के रूप में वे विश्वास और तकनीक को जोड़कर वैश्विक मिशन को आगे बढ़ाते हैं। वे Wordshiper आंदोलन के लिए समर्पित हैं जो विश्वासियों को नवाचारी डिजिटल प्लेटफ़ॉर्म के माध्यम से वचन के उपासक के रूप में जीने में सहायता करता है।",
      },
      pt: {
        name: "Jaedon Um",
        role: "Founder & CEO",
        bio: "Como pastor ordenado e diretor de TI baseado em Nova York, une fé e tecnologia para avançar as missões globais. Dedica-se ao movimento Wordshiper que ajuda os crentes a viver como adoradores da Palavra por meio de plataformas digitais inovadoras.",
      },
      ru: {
        name: "Jaedon Um",
        role: "Founder & CEO",
        bio: "Как рукоположенный пастор и IT-директор из Нью-Йорка, он соединяет веру и технологии, чтобы продвигать всемирную миссию. Он посвящает себя движению Wordshiper, которое помогает верующим жить как поклонники Слова через инновационные цифровые платформы.",
      },
      it: {
        name: "Jaedon Um",
        role: "Founder & CEO",
        bio: "Come pastore ordinato e direttore IT con sede a New York, unisce fede e tecnologia per far avanzare le missioni globali. Si dedica al movimento Wordshiper che aiuta i credenti a vivere come adoratori della Parola attraverso piattaforme digitali innovative.",
      },
    },
  },
  {
    id: "eunhee",
    photo: photoEunhee,
    objectPosition: "center 20%",
    faceScale: 1.08,
    copy: {
      en: {
        name: "Eunhee Kim",
        role: "Co-Founder / CCO",
        bio: "She plans and edits the core content that underpins the Wordshiper Word movement worldwide. Leading brand, creative, and community experience, she prayerfully designs how Wordshiper’s message transforms people and invites them into a life of worship.",
      },
      ko: {
        name: "김은희",
        role: "Co-Founder / CCO",
        bio: "전 세계 워십퍼 말씀운동을 일으키는 근간이 되는 핵심 컨텐츠를 기획하고 편집하는 역할을 담당하고 있습니다. 브랜드·크리에이티브·커뮤니티 경험을 이끌며, Wordshiper의 메시지가 어떻게 사람들을 변화시키며, 예배자의 삶으로 초대하는지를 기도하며 설계합니다.",
      },
      es: {
        name: "Eunhee Kim",
        role: "Co-Founder / CCO",
        bio: "Planifica y edita el contenido central que sostiene el movimiento de la Palabra de Wordshiper en todo el mundo. Liderando la marca, lo creativo y la experiencia comunitaria, diseña en oración cómo el mensaje de Wordshiper transforma a las personas y las invita a una vida de adoración.",
      },
      fr: {
        name: "Eunhee Kim",
        role: "Co-Founder / CCO",
        bio: "Elle conçoit et édite le contenu central qui fonde le mouvement de la Parole Wordshiper dans le monde. En dirigeant la marque, la création et l’expérience communautaire, elle conçoit dans la prière comment le message de Wordshiper transforme les vies et invite à une vie d’adoration.",
      },
      de: {
        name: "Eunhee Kim",
        role: "Co-Founder / CCO",
        bio: "Sie plant und redigiert die Kerninhalte, die die weltweite Wordshiper-Wortbewegung tragen. Mit Verantwortung für Marke, Kreatives und Community-Erlebnis gestaltet sie betend, wie die Botschaft von Wordshiper Menschen verändert und in ein Leben der Anbetung einlädt.",
      },
      ja: {
        name: "キム・ウニ",
        role: "Co-Founder / CCO",
        bio: "世界のWordshiper御言葉運動を支える核となるコンテンツの企画・編集を担っています。ブランド・クリエイティブ・コミュニティ体験を率い、Wordshiperのメッセージが人々をどのように変え、礼拝者の生き方へと招くかを祈りつつ設計しています。",
      },
      zh: {
        name: "Eunhee Kim",
        role: "Co-Founder / CCO",
        bio: "她负责策划与编辑支撑全球敬拜者（Wordshiper）圣道运动的核心内容。带领品牌、创意与社群体验，她以祷告设计敬拜者（Wordshiper）的信息如何改变人，并邀请人进入敬拜的生命。",
      },
      "zh-TW": {
        name: "Eunhee Kim",
        role: "Co-Founder / CCO",
        bio: "她負責策劃與編輯支撐全球敬拜者（Wordshiper）聖道運動的核心內容。帶領品牌、創意與社群體驗，她以禱告設計敬拜者（Wordshiper）的信息如何改變人，並邀請人進入敬拜的生命。",
      },
      ar: {
        name: "Eunhee Kim",
        role: "Co-Founder / CCO",
        bio: "تخطط وتحرّر المحتوى الأساسي الذي يرتكز عليه حركة كلمة Wordshiper حول العالم. وتقود تجربة العلامة والإبداع والمجتمع، وتصمم بصلاة كيف تُغيّر رسالة Wordshiper الناس وتدعوهم إلى حياة العبادة.",
      },
      hi: {
        name: "Eunhee Kim",
        role: "Co-Founder / CCO",
        bio: "वे उस मूल सामग्री की योजना और संपादन करती हैं जो विश्वव्यापी Wordshiper वचन आंदोलन की नींव है। ब्रांड, रचनात्मकता और समुदाय अनुभव का नेतृत्व करते हुए वे प्रार्थनापूर्वक डिज़ाइन करती हैं कि Wordshiper का संदेश लोगों को कैसे बदलता है और उन्हें आराधना के जीवन में आमंत्रित करता है।",
      },
      pt: {
        name: "Eunhee Kim",
        role: "Co-Founder / CCO",
        bio: "Planeja e edita o conteúdo central que sustenta o movimento da Palavra Wordshiper no mundo. Liderando marca, criativo e experiência comunitária, ela projeta em oração como a mensagem do Wordshiper transforma pessoas e as convida a uma vida de adoração.",
      },
      ru: {
        name: "Eunhee Kim",
        role: "Co-Founder / CCO",
        bio: "Она планирует и редактирует ключевой контент, лежащий в основе всемирного движения Слова Wordshiper. Возглавляя бренд, креатив и общинный опыт, она с молитвой проектирует, как послание Wordshiper преображает людей и приглашает их к жизни поклонения.",
      },
      it: {
        name: "Eunhee Kim",
        role: "Co-Founder / CCO",
        bio: "Progetta e cura i contenuti essenziali che sostengono il movimento della Parola Wordshiper nel mondo. Guidando brand, creatività ed esperienza di comunità, progetta in preghiera come il messaggio di Wordshiper trasformi le persone e le inviti a una vita di adorazione.",
      },
    },
  },
  {
    id: "jeff",
    photo: photoJeff,
    objectPosition: "center 28%",
    faceScale: 1,
    copy: {
      en: {
        name: "Jeff Chaus",
        role: "Co-Founder / CFO",
        bio: "He is devoted to financial strategy and sustainability so that the ministry and impact company can faithfully expand the Word movement to Christians, Catholics, and Jewish communities worldwide.",
      },
      ko: {
        name: "Jeff Chaus",
        role: "Co-Founder / CFO",
        bio: "사역과 임팩트 법인이 전세계 기독교, 카톨릭 및 유대교인들 모두에게 말씀 운동을 정직하게 확장할 수 있도록 재무 전략과 지속가능성을 책임지며 헌신하고 있습니다.",
      },
      es: {
        name: "Jeff Chaus",
        role: "Co-Founder / CFO",
        bio: "Se dedica a la estrategia financiera y la sostenibilidad para que el ministerio y la empresa de impacto puedan expandir con integridad el movimiento de la Palabra a cristianos, católicos y comunidades judías en todo el mundo.",
      },
      fr: {
        name: "Jeff Chaus",
        role: "Co-Founder / CFO",
        bio: "Il se consacre à la stratégie financière et à la durabilité afin que le ministère et l’entreprise à impact puissent étendre avec intégrité le mouvement de la Parole aux chrétiens, catholiques et communautés juives du monde entier.",
      },
      de: {
        name: "Jeff Chaus",
        role: "Co-Founder / CFO",
        bio: "Er verantwortet Finanzstrategie und Nachhaltigkeit, damit das Ministry und das Impact-Unternehmen die Wortbewegung weltweit ehrlich zu Christen, Katholiken und jüdischen Gemeinschaften ausweiten können.",
      },
      ja: {
        name: "Jeff Chaus",
        role: "Co-Founder / CFO",
        bio: "ミニストリーとインパクト法人が、世界中のプロテスタント・カトリック・ユダヤのコミュニティへ御言葉の運動を誠実に広げられるよう、財務戦略と持続可能性を担い献身しています。",
      },
      zh: {
        name: "Jeff Chaus",
        role: "Co-Founder / CFO",
        bio: "他负责财务策略与可持续性，使事工与影响力公司能够诚实地将圣道运动扩展到全球基督教、天主教与犹太群体。",
      },
      "zh-TW": {
        name: "Jeff Chaus",
        role: "Co-Founder / CFO",
        bio: "他負責財務策略與可持續性，使事工與影響力公司能夠誠實地將聖道運動擴展到全球基督教、天主教與猶太群體。",
      },
      ar: {
        name: "Jeff Chaus",
        role: "Co-Founder / CFO",
        bio: "يكرّس نفسه لاستراتيجية المالية والاستدامة حتى تتمكن الخدمة وشركة الأثر من توسيع حركة الكلمة بأمانة لتشمل المسيحيين والكاثوليك والمجتمعات اليهودية في جميع أنحاء العالم.",
      },
      hi: {
        name: "Jeff Chaus",
        role: "Co-Founder / CFO",
        bio: "वे वित्तीय रणनीति और स्थिरता के लिए समर्पित हैं ताकि मंत्रालय और इंपैक्ट कंपनी विश्वभर के ईसाई, कैथोलिक और यहूदी समुदायों तक वचन आंदोलन को ईमानदारी से विस्तार दे सकें।",
      },
      pt: {
        name: "Jeff Chaus",
        role: "Co-Founder / CFO",
        bio: "Dedica-se à estratégia financeira e à sustentabilidade para que o ministério e a empresa de impacto possam expandir com integridade o movimento da Palavra a cristãos, católicos e comunidades judaicas em todo o mundo.",
      },
      ru: {
        name: "Jeff Chaus",
        role: "Co-Founder / CFO",
        bio: "Он отвечает за финансовую стратегию и устойчивость, чтобы служение и импакт-компания могли честно расширять движение Слова среди христиан, католиков и еврейских общин по всему миру.",
      },
      it: {
        name: "Jeff Chaus",
        role: "Co-Founder / CFO",
        bio: "Si dedica alla strategia finanziaria e alla sostenibilità affinché il ministero e la società di impatto possano espandere con integrità il movimento della Parola a cristiani, cattolici e comunità ebraiche in tutto il mondo.",
      },
    },
  },
  {
    id: "hyounggon",
    photo: photoHyounggon,
    objectPosition: "center 22%",
    faceScale: 1.05,
    copy: {
      en: {
        name: "HyoungGon Kim",
        role: "CTO",
        bio: "A specialist backend developer and programmer based in South Korea, he owns the technical architecture of the product and platform — including the infrastructure that brings Scripture within reach everywhere in the world.",
      },
      ko: {
        name: "김형곤",
        role: "CTO",
        bio: "South Korea에서 활동하는 백그라운드 전문 개발자 프로그래머로서 전 세계 어디서나 말씀을 닿게 하는 인프라까지, 제품과 플랫폼의 기술 아키텍처를 책임집니다.",
      },
      es: {
        name: "HyoungGon Kim",
        role: "CTO",
        bio: "Desarrollador backend especializado y programador con base en Corea del Sur, es responsable de la arquitectura técnica del producto y la plataforma, incluida la infraestructura que acerca las Escrituras a cualquier lugar del mundo.",
      },
      fr: {
        name: "HyoungGon Kim",
        role: "CTO",
        bio: "Développeur backend spécialisé et programmeur basé en Corée du Sud, il porte l’architecture technique du produit et de la plateforme — jusqu’à l’infrastructure qui rend l’Écriture accessible partout dans le monde.",
      },
      de: {
        name: "HyoungGon Kim",
        role: "CTO",
        bio: "Als spezialisierter Backend-Entwickler und Programmierer mit Sitz in Südkorea verantwortet er die technische Architektur von Produkt und Plattform — einschließlich der Infrastruktur, die die Schrift weltweit erreichbar macht.",
      },
      ja: {
        name: "キム・ヒョンゴン",
        role: "CTO",
        bio: "韓国を拠点とするバックエンド専門の開発者・プログラマーとして、世界のどこでも御言葉に届けるインフラまで、プロダクトとプラットフォームの技術アーキテクチャを担っています。",
      },
      zh: {
        name: "HyoungGon Kim",
        role: "CTO",
        bio: "作为驻韩国的后端专业开发者与程序员，他负责产品与平台的技术架构，包括让圣道在全球各地触手可及的基础设施。",
      },
      "zh-TW": {
        name: "HyoungGon Kim",
        role: "CTO",
        bio: "作為駐韓國的後端專業開發者與程序員，他負責產品與平台的技術架構，包括讓聖道在全球各地觸手可及的基礎設施。",
      },
      ar: {
        name: "HyoungGon Kim",
        role: "CTO",
        bio: "كمطوّر خلفية متخصص ومبرمج مقيم في كوريا الجنوبية، يتولى البنية التقنية للمنتج والمنصة — بما في ذلك البنية التحتية التي تجعل الكتاب المقدس في متناول اليد في كل مكان في العالم.",
      },
      hi: {
        name: "HyoungGon Kim",
        role: "CTO",
        bio: "दक्षिण कोरिया में आधारित विशेषज्ञ बैकएंड डेवलपर और प्रोग्रामर के रूप में वे उत्पाद व प्लेटफ़ॉर्म की तकनीकी आर्किटेक्चर के लिए ज़िम्मेदार हैं — उस इन्फ्रास्ट्रक्चर सहित जो दुनिया के किसी भी स्थान पर वचन को पहुँच योग्य बनाता है।",
      },
      pt: {
        name: "HyoungGon Kim",
        role: "CTO",
        bio: "Desenvolvedor backend especializado e programador baseado na Coreia do Sul, é responsável pela arquitetura técnica do produto e da plataforma — incluindo a infraestrutura que torna as Escrituras alcançáveis em qualquer lugar do mundo.",
      },
      ru: {
        name: "HyoungGon Kim",
        role: "CTO",
        bio: "Специализированный backend-разработчик и программист из Южной Кореи, он отвечает за техническую архитектуру продукта и платформы — включая инфраструктуру, которая делает Писание доступным повсюду в мире.",
      },
      it: {
        name: "HyoungGon Kim",
        role: "CTO",
        bio: "Sviluppatore backend specializzato e programmatore con base in Corea del Sud, è responsabile dell’architettura tecnica del prodotto e della piattaforma — inclusa l’infrastruttura che rende le Scritture raggiungibili ovunque nel mondo.",
      },
    },
  },
];

/** Map site language codes (incl. zh-TW) → leadership locale keys */
function resolveLeaderLocale(language: string): string {
  const raw = (language || "en").trim();
  if (raw === "zh-TW" || raw === "zh-Hant" || raw === "zh-HK") return "zh-TW";
  if (raw === "zh-Hans" || raw === "zh-CN") return "zh";
  if (raw in (LEADERSHIP[0]?.copy ?? {})) return raw;
  return "en";
}

export function getLeaderCopy(leader: Leader, language: string): LeaderCopy {
  const locale = resolveLeaderLocale(language);
  return leader.copy[locale] ?? leader.copy.en;
}
