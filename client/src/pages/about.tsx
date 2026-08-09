import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Heart, Users, BookOpen, Mail, MapPin, Award, Target } from "lucide-react";
import SEO from "@/components/seo";
import Footer from "@/components/renewal-footer";
import ExpandedLanguageSwitcher from "@/components/expanded-language-switcher";
import { useLanguage } from "@/hooks/use-language";
import { useCopy } from "@/data/renewal-copy";
import logoPrimary from "@assets/wordshiper_logo_lockup_primary_E_1786117649532.svg";

const CYAN = "#00B3E4";

export default function AboutPage() {
  const { t, currentLanguage } = useLanguage();
  const nav = useCopy().nav;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Wordshiper - Our Mission & Story"
        description="Learn about Wordshiper Ministry, a 501(c)(3) nonprofit dedicated to Bible memorization. Our mission: 15 Minutes. One Verse. A Life of Worship."
        url="https://www.wordshiper.org/about"
      />

      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#E6F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center" data-testid="link-logo-home">
            <img src={logoPrimary} alt="Wordshiper" className="h-8 w-auto" width={180} height={40} />
          </Link>
          <div className="flex items-center gap-4">
            <ExpandedLanguageSwitcher compact />
            <Link
              href="/"
              className="hidden sm:inline-flex text-sm font-medium text-gray-600 hover:text-[#0090B8] transition-colors"
            >
              {currentLanguage === "ko" ? "홈" : "Home"}
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

      {/* Hero — brand mark + clear space */}
      <section className="pt-32 pb-20 px-4" style={{ background: "linear-gradient(180deg,#F8FCFE 0%,#FFFFFF 100%)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <img
              src={logoPrimary}
              alt="Wordshiper"
              className="h-16 sm:h-20 w-auto"
              width={320}
              height={71}
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#201E1F] mb-6 tracking-tight ws-text-balance">
            {t("about.title")}
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed ws-text-pretty">
            {t("about.subtitle")}
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#E6F7FC] text-[#0090B8] rounded-full text-sm font-semibold">
            <Award className="w-4 h-4" />
            {t("about.nonprofitBadge")} · EIN 33-1561112
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg,#0C1519 0%,#16242B 100%)" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <Target className="w-14 h-14 mx-auto mb-8" style={{ color: "#2CC5F2" }} />
          <h2 className="text-3xl md:text-4xl font-bold mb-8 ws-text-balance">{t("about.mission.title")}</h2>
          <p className="font-scripture text-2xl md:text-3xl leading-relaxed text-[#ECEAE0] ws-text-pretty">
            {t("about.mission.tagline")}
          </p>
          <div className="mt-12 pt-8 border-t border-white/15">
            <p className="text-lg md:text-xl leading-relaxed text-[#ECEAE0]/80 ws-text-pretty">
              {t("about.mission.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Globe className="w-11 h-11 mx-auto mb-5" style={{ color: CYAN }} />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1F]">{t("about.whoWeAre.title")}</h2>
          </div>

          <div className="max-w-none text-gray-600">
            <p className="text-lg leading-relaxed mb-6 ws-text-pretty">
              <strong className="text-[#201E1F]">{t("about.whoWeAre.orgName")}</strong>
              {t("about.whoWeAre.description1")}
            </p>
            <p className="text-lg leading-relaxed mb-6 ws-text-pretty">{t("about.whoWeAre.description2")}</p>
            <div className="bg-[#F8FCFE] border-l-4 border-[#00B3E4] p-8 my-8 rounded-r-2xl">
              <p className="text-xl font-semibold text-[#201E1F] mb-4">{t("about.whoWeAre.appTitle")}</p>
              <ul className="space-y-2 text-gray-600">
                <li>• {t("about.whoWeAre.feature1")}</li>
                <li>• {t("about.whoWeAre.feature2")}</li>
                <li>• {t("about.whoWeAre.feature3")}</li>
                <li>• {t("about.whoWeAre.feature4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 bg-[#F8FCFE]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <Users className="w-11 h-11 mx-auto mb-5" style={{ color: CYAN }} />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1F]">{t("about.leadership.title")}</h2>
          </div>

          <Card className="border border-[#E6F7FC] shadow-sm bg-white">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white"
                    style={{ background: CYAN }}
                  >
                    <Users className="w-10 h-10" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#201E1F] mb-2">{t("about.leadership.name")}</h3>
                  <p className="text-[#0090B8] font-medium mb-4">{t("about.leadership.role")}</p>
                  <p className="text-gray-600 leading-relaxed ws-text-pretty">{t("about.leadership.bio")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Get involved */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-11 h-11 mx-auto mb-5" style={{ color: CYAN }} />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1F] mb-4">{t("about.getInvolved.title")}</h2>
            <p className="text-xl text-gray-500">{t("about.getInvolved.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border border-[#E6F7FC] shadow-sm bg-[#F8FCFE]" data-testid="card-download-app">
              <CardContent className="p-8">
                <BookOpen className="w-11 h-11 mx-auto mb-4" style={{ color: CYAN }} />
                <h3 className="font-semibold text-lg mb-2 text-[#201E1F]">{t("about.downloadApp.title")}</h3>
                <p className="text-gray-500 text-sm">{t("about.downloadApp.subtitle")}</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-[#E6F7FC] shadow-sm bg-[#F8FCFE]" data-testid="card-support-mission">
              <CardContent className="p-8">
                <Heart className="w-11 h-11 mx-auto mb-4" style={{ color: CYAN }} />
                <h3 className="font-semibold text-lg mb-2 text-[#201E1F]">{t("about.supportMission.title")}</h3>
                <p className="text-gray-500 text-sm">{t("about.supportMission.subtitle")}</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-[#E6F7FC] shadow-sm bg-[#F8FCFE]" data-testid="card-partner">
              <CardContent className="p-8">
                <Users className="w-11 h-11 mx-auto mb-4" style={{ color: CYAN }} />
                <h3 className="font-semibold text-lg mb-2 text-[#201E1F]">{t("about.partnership.title")}</h3>
                <p className="text-gray-500 text-sm">{t("about.partnership.subtitle")}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-[#E6F7FC] bg-[#F8FCFE]">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#201E1F] mb-6">{t("about.contactInfo.title")}</h3>
                <div className="space-y-4">
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
