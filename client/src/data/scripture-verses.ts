export interface ScriptureVerse {
  id: string;
  reference: string;
  translations: {
    [languageCode: string]: {
      text: string;
      reference: string;
    };
  };
}

export const scriptureVerses: ScriptureVerse[] = [
  {
    id: "psalm119-11",
    reference: "Psalm 119:11",
    translations: {
      "en": {
        text: "Your word I have hidden in my heart, that I might not sin against You.",
        reference: "Psalm 119:11"
      },
      "ko": {
        text: "내가 주께 범죄하지 아니하려 하여 주의 말씀을 내 마음에 두었나이다.",
        reference: "시편 119:11"
      },
      "es": {
        text: "En mi corazón he guardado tus dichos, para no pecar contra ti.",
        reference: "Salmo 119:11"
      },
      "fr": {
        text: "Je serre ta parole dans mon cœur, afin de ne pas pécher contre toi.",
        reference: "Psaume 119:11"
      },
      "de": {
        text: "Ich bewahre dein Wort in meinem Herzen, damit ich nicht gegen dich sündige.",
        reference: "Psalm 119:11"
      },
      "ja": {
        text: "あなたに罪を犯さないため、私は心にあなたのことばを蓄えました。",
        reference: "詩篇 119:11"
      },
      "zh": {
        text: "我将你的话藏在心里，免得我得罪你。",
        reference: "诗篇 119:11"
      },
      "ar": {
        text: "خبأت كلامك في قلبي لكيلا أخطئ إليك.",
        reference: "مزمور 119:11"
      },
      "hi": {
        text: "मैंने तेरे वचन को अपने हृदय में छुपा रखा है, ताकि मैं तेरे विरुद्ध पाप न करूं।",
        reference: "भजन संहिता 119:11"
      },
      "pt": {
        text: "Escondi a tua palavra no meu coração, para eu não pecar contra ti.",
        reference: "Salmo 119:11"
      },
      "ru": {
        text: "В сердце моём сокрыл я слово Твоё, чтобы не грешить пред Тобою.",
        reference: "Псалом 119:11"
      },
      "it": {
        text: "Ho conservato la tua parola nel mio cuore per non peccare contro di te.",
        reference: "Salmo 119:11"
      }
    }
  },
  {
    id: "john3-16",
    reference: "John 3:16",
    translations: {
      "en": {
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        reference: "John 3:16"
      },
      "ko": {
        text: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라.",
        reference: "요한복음 3:16"
      },
      "es": {
        text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
        reference: "Juan 3:16"
      },
      "fr": {
        text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.",
        reference: "Jean 3:16"
      },
      "de": {
        text: "Denn also hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab, damit alle, die an ihn glauben, nicht verloren werden, sondern das ewige Leben haben.",
        reference: "Johannes 3:16"
      },
      "ja": {
        text: "神は、実に、そのひとり子をお与えになったほどに世を愛された。それは御子を信じる者が、一人として滅びることなく、永遠のいのちを持つためである。",
        reference: "ヨハネ 3:16"
      },
      "zh": {
        text: "神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不致灭亡，反得永生。",
        reference: "约翰福音 3:16"
      },
      "ar": {
        text: "لأنه هكذا أحب الله العالم حتى بذل ابنه الوحيد، لكي لا يهلك كل من يؤمن به، بل تكون له الحياة الأبدية.",
        reference: "يوحنا 3:16"
      }
    }
  },
  {
    id: "philippians4-13",
    reference: "Philippians 4:13",
    translations: {
      "en": {
        text: "I can do all things through Christ who strengthens me.",
        reference: "Philippians 4:13"
      },
      "ko": {
        text: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라.",
        reference: "빌립보서 4:13"
      },
      "es": {
        text: "Todo lo puedo en Cristo que me fortalece.",
        reference: "Filipenses 4:13"
      },
      "fr": {
        text: "Je puis tout par celui qui me fortifie.",
        reference: "Philippiens 4:13"
      },
      "de": {
        text: "Ich vermag alles durch den, der mich mächtig macht.",
        reference: "Philipper 4:13"
      },
      "ja": {
        text: "私を強くしてくださる方によって、私はどんなことでもできるのです。",
        reference: "ピリピ 4:13"
      },
      "zh": {
        text: "我靠着那加给我力量的，凡事都能做。",
        reference: "腓立比书 4:13"
      }
    }
  },
  {
    id: "romans8-28",
    reference: "Romans 8:28",
    translations: {
      "en": {
        text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        reference: "Romans 8:28"
      },
      "ko": {
        text: "우리가 알거니와 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라.",
        reference: "로마서 8:28"
      },
      "es": {
        text: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.",
        reference: "Romanos 8:28"
      },
      "fr": {
        text: "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein.",
        reference: "Romains 8:28"
      }
    }
  },
  {
    id: "jeremiah29-11",
    reference: "Jeremiah 29:11",
    translations: {
      "en": {
        text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, to give you hope and a future.",
        reference: "Jeremiah 29:11"
      },
      "ko": {
        text: "여호와의 말씀이니라 너희를 향한 나의 생각을 내가 아나니 평안이요 재앙이 아니니라 너희에게 미래와 희망을 주는 것이니라.",
        reference: "예레미야 29:11"
      },
      "es": {
        text: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.",
        reference: "Jeremías 29:11"
      }
    }
  },
  {
    id: "matthew28-19-20",
    reference: "Matthew 28:19-20",
    translations: {
      "en": {
        text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you.",
        reference: "Matthew 28:19-20"
      },
      "ko": {
        text: "그러므로 너희는 가서 모든 민족을 제자로 삼아 아버지와 아들과 성령의 이름으로 세례를 베풀고 내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라.",
        reference: "마태복음 28:19-20"
      },
      "es": {
        text: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado.",
        reference: "Mateo 28:19-20"
      }
    }
  },
  {
    id: "isaiah40-31",
    reference: "Isaiah 40:31",
    translations: {
      "en": {
        text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
        reference: "Isaiah 40:31"
      },
      "ko": {
        text: "오직 여호와를 앙망하는 자는 새 힘을 얻으리니 독수리가 날개치며 올라감 같을 것이요 달음박질하여도 곤비하지 아니하겠고 걸어가도 피곤하지 아니하리로다.",
        reference: "이사야 40:31"
      },
      "es": {
        text: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.",
        reference: "Isaías 40:31"
      }
    }
  },
  {
    id: "proverbs3-5-6",
    reference: "Proverbs 3:5-6",
    translations: {
      "en": {
        text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        reference: "Proverbs 3:5-6"
      },
      "ko": {
        text: "너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라 너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라.",
        reference: "잠언 3:5-6"
      },
      "es": {
        text: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.",
        reference: "Proverbios 3:5-6"
      }
    }
  }
];

export const getVerseByLanguage = (verseId: string, languageCode: string) => {
  const verse = scriptureVerses.find(v => v.id === verseId);
  if (!verse) return null;
  
  return verse.translations[languageCode] || verse.translations['en'];
};

export const getRandomVerse = () => {
  const randomIndex = Math.floor(Math.random() * scriptureVerses.length);
  return scriptureVerses[randomIndex];
};

export const getVersesByLanguage = (languageCode: string) => {
  return scriptureVerses.filter(verse => 
    verse.translations[languageCode] !== undefined
  );
};