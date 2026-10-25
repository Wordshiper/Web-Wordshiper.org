/** Live Givebutter campaign. Amounts are chosen on Givebutter, not on this site. */
export const GIVEBUTTER_CAMPAIGN_URL =
  "https://givebutter.com/fund-scripture-tools-for-1000-people-sm1vce";

export const CAMPAIGN_GOAL_USD = "$70,000";

export interface CampaignPanel {
  src: string;
  alt: string;
}

const EN_PANELS: CampaignPanel[] = [
  {
    src: "/campaign/en/01-one-verse.jpg",
    alt: "One verse can lift a weary heart. “The grass withers, the flower fades, but the word of our God will stand forever.” Isaiah 40:8 (ESV).",
  },
  {
    src: "/campaign/en/02-what-is.jpg",
    alt: "What is Wordshiper? Word plus Worshiper. A 15-minute daily rhythm.",
  },
  {
    src: "/campaign/en/03-budget.jpg",
    alt: "Where your gift goes. Proposed 12-month development budget of $70,000.",
  },
  {
    src: "/campaign/en/04-launch.jpg",
    alt: "Help launch Wordshiper. Development goal $70,000. Jaedon and Eunhee. Checkout note: tips to Givebutter and processing fees are optional; select Other and enter $0 for no tip.",
  },
];

const KO_PANELS: CampaignPanel[] = [
  {
    src: "/campaign/ko/01-one-verse.jpg",
    alt: "말씀 한 구절이 지친 마음을 일으킵니다. “풀은 마르고 꽃은 시드나 우리 하나님의 말씀은 영원히 서리라 하라” 이사야 40:8 (개역개정).",
  },
  {
    src: "/campaign/ko/02-what-is.jpg",
    alt: "워십퍼는 어떤 앱인가요? 말씀과 예배자. 15분의 혁명.",
  },
  {
    src: "/campaign/ko/03-budget.jpg",
    alt: "후원금은 이렇게 사용됩니다. 12개월 개발 예산 계획 총 7만 달러.",
  },
  {
    src: "/campaign/ko/04-launch.jpg",
    alt: "워십퍼의 시작을 함께해 주세요. 개발 모금 목표 7만 달러. Jaedon과 Eunhee.",
  },
];

export function campaignPanels(language: string): {
  hero: CampaignPanel | null;
  panels: CampaignPanel[];
} {
  if (language === "ko") {
    return { hero: null, panels: KO_PANELS };
  }
  return {
    hero: {
      src: "/campaign/en/hero.jpg",
      alt: "Help build Wordshiper. One verse a day. A life of worship. Android, iOS, and web app.",
    },
    panels: EN_PANELS,
  };
}
