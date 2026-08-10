import type { ReactNode } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, Mail, MapPin, Award } from "lucide-react";
import SEO from "@/components/seo";
import Footer from "@/components/renewal-footer";
import ExpandedLanguageSwitcher from "@/components/expanded-language-switcher";
import { useLanguage } from "@/hooks/use-language";
import { useCopy } from "@/data/renewal-copy";
import { LEADERSHIP, getLeaderCopy } from "@/data/leadership";
import { brandDisplayForLanguage } from "@/data/brand";
import logoPrimary from "@assets/wordshiper_logo_lockup_primary_E_1786117649532.svg";

const CYAN = "#00B3E4";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-ui text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase mb-4"
      style={{ color: CYAN }}
    >
      {children}
    </p>
  );
}

export default function AboutPage() {
  const { t, currentLanguage } = useLanguage();
  const c = useCopy();
  const a = c.aboutPage;
  const nav = c.nav;
  const brandAlt = brandDisplayForLanguage(currentLanguage);

  return (
    <div className="min-h-screen bg-white font-ui">
      <SEO
        title="About Wordshiper — Mission, Vision & Identity"
        description="What Wordshiper is: Mission, Vision, Identity, and Product Thesis. One verse a day. A life of worship."
        url="https://www.wordshiper.org/about"
      />

      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#E6F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center" data-testid="link-logo-home">
            <img src={logoPrimary} alt={brandAlt} className="h-8 w-auto" width={180} height={40} />
          </Link>
          <div className="flex items-center gap-4">
            <ExpandedLanguageSwitcher compact />
            <Link
              href="/"
              className="hidden sm:inline-flex text-sm font-medium text-gray-600 hover:text-[#0090B8] transition-colors"
            >
              {c.chrome.home}
            </Link>
            <a
              href="/#preregister"
              className="px-4 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:opacity-90 transition-opacity"
              style={{ background: CYAN }}
            >
              {nav.preregister}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="pt-32 pb-16 px-4"
        style={{ background: "linear-gradient(180deg,#F8FCFE 0%,#FFFFFF 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img
              src={logoPrimary}
              alt={brandAlt}
              className="h-14 sm:h-16 w-auto"
              width={280}
              height={62}
            />
          </div>

          <h1 className="font-scripture text-4xl sm:text-5xl font-bold text-[#201E1F] mb-5 tracking-tight ws-text-balance">
            {a.title}
          </h1>

          <p className="font-scripture-italic text-xl sm:text-2xl text-[#003D4F] mb-8 ws-text-pretty">
            {a.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#E6F7FC] text-[#0090B8] rounded-full text-sm font-semibold">
            <Award className="w-4 h-4" />
            {t("about.nonprofitBadge")} · EIN 33-1561112
          </div>

          <nav
            aria-label="About sections"
            className="mt-12 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-gray-500"
          >
            {a.toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-[#0090B8] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* What is Wordshiper */}
      <section id="what" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>{a.what.label}</SectionLabel>
          <h2 className="font-scripture text-3xl sm:text-4xl font-bold text-[#201E1F] whitespace-pre-line ws-text-balance mb-8">
            {a.what.title}
          </h2>
          <p className="font-scripture text-xl sm:text-2xl leading-relaxed text-[#003D4F] ws-text-pretty mb-6">
            {a.what.lead}
          </p>
          <p className="font-ui text-lg leading-relaxed text-gray-600 ws-text-pretty">
            {a.what.body}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        id="mission"
        className="py-20 px-4 scroll-mt-20"
        style={{ background: "linear-gradient(135deg,#0C1519 0%,#16242B 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-white">
          <p
            className="font-ui text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase mb-4"
            style={{ color: "#2CC5F2" }}
          >
            {a.mission.label}
          </p>
          <h2 className="font-scripture text-3xl sm:text-4xl font-bold mb-8 ws-text-balance">
            {a.mission.title}
          </h2>
          <p className="font-scripture text-xl sm:text-2xl leading-relaxed text-[#ECEAE0] ws-text-pretty mb-12">
            {a.mission.lead}
          </p>

          <p className="font-ui text-sm font-semibold tracking-wide text-[#2CC5F2]/90 mb-5">
            {a.mission.habitsTitle}
          </p>
          <ul className="space-y-5 mb-12">
            {a.mission.habits.map((h) => (
              <li
                key={h.t}
                className="border-l-2 pl-5"
                style={{ borderColor: "rgba(44,197,242,0.45)" }}
              >
                <p className="font-scripture text-xl font-bold text-white">{h.t}</p>
                <p className="font-ui text-base text-[#ECEAE0]/75 mt-1">{h.d}</p>
              </li>
            ))}
          </ul>

          <p className="font-scripture-italic text-lg sm:text-xl leading-relaxed text-[#ECEAE0]/90 ws-text-pretty border-t border-white/15 pt-10">
            {a.mission.close}
          </p>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-20 px-4 bg-[#F8FCFE] scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>{a.vision.label}</SectionLabel>
          <h2 className="font-scripture text-3xl sm:text-4xl font-bold text-[#201E1F] ws-text-balance mb-8">
            {a.vision.title}
          </h2>
          <p className="font-scripture text-xl sm:text-2xl leading-relaxed text-[#003D4F] ws-text-pretty mb-6">
            {a.vision.lead}
          </p>
          <p className="font-ui text-lg leading-relaxed text-gray-600 ws-text-pretty mb-8">
            {a.vision.body}
          </p>
          <p className="font-scripture-italic text-lg sm:text-xl leading-relaxed text-[#003D4F] ws-text-pretty">
            {a.vision.close}
          </p>
        </div>
      </section>

      {/* Identity */}
      <section id="identity" className="py-20 px-4 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>{a.identity.label}</SectionLabel>
          <h2 className="font-scripture text-3xl sm:text-4xl font-bold text-[#201E1F] ws-text-balance mb-6">
            {a.identity.title}
          </h2>
          <p className="font-ui text-lg text-gray-600 mb-2">{a.identity.lead}</p>
          <p className="font-ui text-lg leading-relaxed text-gray-600 ws-text-pretty mb-12">
            {a.identity.body}
          </p>

          <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-6 items-start mb-12">
            <div className="text-center sm:text-left">
              <p className="font-scripture text-3xl font-bold" style={{ color: CYAN }}>
                {a.identity.word}
              </p>
              <p className="font-ui mt-2 text-gray-600">{a.identity.wordD}</p>
            </div>
            <p className="font-scripture text-3xl font-bold text-[#201E1F] text-center self-center">
              +
            </p>
            <div className="text-center sm:text-left">
              <p className="font-scripture text-3xl font-bold" style={{ color: CYAN }}>
                {a.identity.worshiper}
              </p>
              <p className="font-ui mt-2 text-gray-600">{a.identity.worshiperD}</p>
            </div>
          </div>

          <p className="font-scripture text-xl sm:text-2xl leading-relaxed text-[#003D4F] ws-text-pretty">
            {a.identity.result}
          </p>
        </div>
      </section>

      {/* Thesis */}
      <section id="thesis" className="py-20 px-4 bg-[#F8FCFE] scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>{a.thesis.label}</SectionLabel>
          <h2 className="font-scripture text-3xl sm:text-4xl font-bold text-[#201E1F] ws-text-balance mb-6">
            {a.thesis.title}
          </h2>
          <p className="font-ui text-lg leading-relaxed text-gray-600 ws-text-pretty mb-12">
            {a.thesis.lead}
          </p>

          <ol className="space-y-8">
            {a.thesis.layers.map((layer, i) => (
              <li key={layer.t} className="flex gap-5">
                <span
                  className="font-scripture flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white"
                  style={{ background: CYAN }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-scripture text-xl font-bold text-[#201E1F]">{layer.t}</p>
                  <p className="font-ui mt-2 text-gray-600 leading-relaxed ws-text-pretty">
                    {layer.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="font-ui mt-14 text-sm leading-relaxed text-gray-500 ws-text-pretty border-t border-[#E6F7FC] pt-8">
            {a.orgNote}
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <Users className="w-11 h-11 mx-auto mb-5" style={{ color: CYAN }} />
            <h2 className="font-scripture text-3xl sm:text-4xl font-bold text-[#201E1F]">
              {t("about.leadership.title")}
            </h2>
          </div>

          <div className="space-y-5">
            {LEADERSHIP.map((leader) => {
              const copy = getLeaderCopy(leader, currentLanguage);
              return (
                <Card key={leader.id} className="border border-[#E6F7FC] shadow-sm bg-white">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-5 sm:gap-6">
                      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-[#E6F7FC] bg-[#E6F7FC]">
                        <img
                          src={leader.photo}
                          alt={copy.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                          style={{
                            objectPosition: leader.objectPosition,
                            transform: `scale(${leader.faceScale ?? 1})`,
                            transformOrigin: "center 30%",
                          }}
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0 pt-0.5">
                        <h3 className="font-ui text-xl sm:text-2xl font-bold text-[#201E1F]">
                          {copy.name}
                        </h3>
                        <p className="font-ui text-[#0090B8] font-medium mt-1">{copy.role}</p>
                        <p className="font-ui text-gray-600 leading-relaxed mt-3 text-sm sm:text-base ws-text-pretty">
                          {copy.bio}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="py-20 px-4 bg-[#F8FCFE]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-11 h-11 mx-auto mb-5" style={{ color: CYAN }} />
            <h2 className="font-scripture text-3xl sm:text-4xl font-bold text-[#201E1F] mb-4">
              {t("about.getInvolved.title")}
            </h2>
            <p className="font-ui text-xl text-gray-500">{t("about.getInvolved.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border border-[#E6F7FC] shadow-sm bg-white" data-testid="card-download-app">
              <CardContent className="p-8">
                <BookOpen className="w-11 h-11 mx-auto mb-4" style={{ color: CYAN }} />
                <h3 className="font-ui font-semibold text-lg mb-2 text-[#201E1F]">
                  {t("about.downloadApp.title")}
                </h3>
                <p className="font-ui text-gray-500 text-sm">{t("about.downloadApp.subtitle")}</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-[#E6F7FC] shadow-sm bg-white" data-testid="card-support-mission">
              <CardContent className="p-8">
                <Heart className="w-11 h-11 mx-auto mb-4" style={{ color: CYAN }} />
                <h3 className="font-ui font-semibold text-lg mb-2 text-[#201E1F]">
                  {t("about.supportMission.title")}
                </h3>
                <p className="font-ui text-gray-500 text-sm">{t("about.supportMission.subtitle")}</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-[#E6F7FC] shadow-sm bg-white" data-testid="card-partner">
              <CardContent className="p-8">
                <Users className="w-11 h-11 mx-auto mb-4" style={{ color: CYAN }} />
                <h3 className="font-ui font-semibold text-lg mb-2 text-[#201E1F]">
                  {t("about.partnership.title")}
                </h3>
                <p className="font-ui text-gray-500 text-sm">{t("about.partnership.subtitle")}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-[#E6F7FC] bg-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="font-ui text-2xl font-bold text-[#201E1F] mb-6">
                  {t("about.contactInfo.title")}
                </h3>
                <div className="space-y-4 font-ui">
                  <div className="flex flex-wrap items-center justify-center gap-2 text-gray-700">
                    <Mail className="w-5 h-5" style={{ color: CYAN }} />
                    <span className="font-medium">{t("about.contactInfo.email")}:</span>
                    <a href="mailto:info@wordshiper.org" className="text-[#0090B8] hover:underline">
                      info@wordshiper.org
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5" style={{ color: CYAN }} />
                    <span className="font-medium">{t("about.contactInfo.website")}:</span>
                    <a href="https://www.wordshiper.org" className="text-[#0090B8] hover:underline">
                      www.wordshiper.org
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
