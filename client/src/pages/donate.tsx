import { Link } from "wouter";
import { useCopy } from "@/data/renewal-copy";
import { useLanguage } from "@/hooks/use-language";
import { brandDisplayForLanguage } from "@/data/brand";
import {
  CAMPAIGN_GOAL_USD,
  GIVEBUTTER_CAMPAIGN_URL,
  campaignPanels,
} from "@/data/donation-campaign";
import ExpandedLanguageSwitcher from "@/components/expanded-language-switcher";
import SiteHeader from "@/components/site-header";
import SEO from "@/components/seo";
import Footer from "@/components/renewal-footer";
import { ArrowLeft, ExternalLink, Heart } from "lucide-react";

const CYAN = "#00B3E4";

function GiveLink({
  label,
  className,
  testId,
}: {
  label: string;
  className: string;
  testId?: string;
}) {
  return (
    <a
      href={GIVEBUTTER_CAMPAIGN_URL}
      target="_blank"
      rel="noopener noreferrer"
      dir="ltr"
      className={className}
      style={{ background: CYAN }}
      data-testid={testId}
    >
      <Heart className="w-5 h-5" />
      {label}
      <ExternalLink className="w-4 h-4 opacity-80" />
    </a>
  );
}

export default function DonatePage() {
  const copy = useCopy();
  const d = copy.donate;
  const { currentLanguage } = useLanguage();
  const brandAlt = brandDisplayForLanguage(currentLanguage);
  const story = campaignPanels(currentLanguage);
  const ko = currentLanguage === "ko";

  return (
    <div className="min-h-screen bg-white font-ui">
      <SEO
        title={`${brandAlt} — ${d.title}`}
        description={d.sub}
        url="https://www.wordshiper.org/donation"
      />

      <SiteHeader>
        <ExpandedLanguageSwitcher compact />
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#0090B8] whitespace-nowrap"
        >
          <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" /> {d.backHome}
        </Link>
      </SiteHeader>

      <main className="pt-[calc(4.75rem+env(safe-area-inset-top))] pb-28">
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, #E6F7FC 0%, #FFFFFF 55%, #F8FCFE 100%)",
            }}
          />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="font-scripture-italic text-xl sm:text-2xl text-[#003D4F] ws-text-pretty">
              {d.eyebrow}
            </p>
            <h1 className="font-scripture mt-4 text-3xl sm:text-5xl font-bold text-[#201E1F] tracking-tight ws-text-balance">
              {d.title}
            </h1>
            <p
              className="mt-5 text-lg text-gray-600 leading-relaxed ws-text-pretty"
              dir={ko ? undefined : "ltr"}
            >
              {ko
                ? "말씀 암송·기도·나눔을 위한 앱을 함께 시작합니다. 개발 모금 목표는 12개월 US $70,000입니다."
                : `Help launch Scripture tools for 1,000 people. Proposed 12-month goal: ${CAMPAIGN_GOAL_USD}.`}
            </p>
            <GiveLink
              label={d.give}
              testId="button-donate-submit"
              className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 min-h-12 rounded-full text-white font-bold text-lg shadow-lg hover:opacity-95 transition-opacity touch-manipulation"
            />
            <p className="mt-4 text-sm text-gray-500 ws-text-pretty" dir="auto">
              {d.taxNote
                .replace(/Stripe\./g, "\u2068Givebutter.\u2069")
                .replace(/Stripe/g, "\u2068Givebutter\u2069")}
            </p>
          </div>
        </section>

        <section className="mt-12 max-w-xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-3xl border border-[#E6F7FC] bg-[#F8FCFE] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-start"
            dir={ko ? undefined : "ltr"}
          >
            <img
              src="/campaign/qr.png"
              alt={ko ? "Givebutter 후원 QR" : "Givebutter donation QR code"}
              width={160}
              height={160}
              className="w-36 h-36 sm:w-40 sm:h-40 bg-white rounded-xl p-2"
            />
            <div>
              <p className="font-semibold text-[#201E1F]">
                {ko ? "QR로 후원하기" : "Give with this QR"}
              </p>
              <a
                href={GIVEBUTTER_CAMPAIGN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-[#0090B8] hover:underline"
              >
                {ko ? "Givebutter에서 후원 열기" : "Open the Givebutter campaign"}
              </a>
            </div>
          </div>
        </section>

        <section className="mt-14 max-w-3xl mx-auto px-4 sm:px-6 space-y-8" aria-label={d.title}>
          {story.hero && (
            <img
              src={story.hero.src}
              alt={story.hero.alt}
              className="w-full h-auto rounded-2xl shadow-sm"
              loading="eager"
            />
          )}
          {story.panels.map((panel) => (
            <img
              key={panel.src}
              src={panel.src}
              alt={panel.alt}
              className="w-full h-auto rounded-2xl shadow-sm mx-auto max-w-xl block"
              loading="lazy"
            />
          ))}
        </section>
      </main>

      <div
        dir="ltr"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E6F7FC] bg-white/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]"
      >
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-[#003D4F] min-w-0">
            {ko ? "개발 모금 목표" : "Development goal"}{" "}
            <span className="text-[#0090B8]">{CAMPAIGN_GOAL_USD}</span>
          </p>
          <GiveLink
            label={d.give}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 min-h-11 rounded-full text-white font-bold shadow-md hover:opacity-95 touch-manipulation"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
