import { Card, CardContent } from "@/components/ui/card";
import { Globe, Heart, Users, BookOpen, Mail, MapPin, Award, Target } from "lucide-react";
import Navigation from "@/components/navigation";
import SEO from "@/components/seo";
import Footer from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";
import wordshiperLogoEn from "@assets/Wordshiper-Logo-E-900_1760638357069.png";
import wordshiperLogoKo from "@assets/wordshiper-logo-K-900_1760639053286.png";

export default function AboutPage() {
  const { t, currentLanguage } = useLanguage();
  
  const wordshiperLogo = currentLanguage === 'ko' ? wordshiperLogoKo : wordshiperLogoEn;

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="About Wordshiper - Our Mission & Story"
        description="Learn about Wordshiper Ministry, a 501(c)(3) nonprofit dedicated to Bible memorization. Our mission: 15 Minutes. One Verse. A Life of Worship."
        url="https://www.wordshiper.org/about"
      />
      <Navigation />
      
      {/* Hero Section - Elegant & Minimalist */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-12">
            <img 
              src={wordshiperLogo} 
              alt="Wordshiper Logo" 
              className="w-40 h-40 opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            {t('about.title')}
          </h1>
          
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-light">
            {t('about.subtitle')}
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            <Award className="w-4 h-4" />
            {t('about.nonprofitBadge')} • EIN: 33-1561112
          </div>
        </div>
      </section>

      {/* Mission Statement - Clean & Impactful */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Target className="w-16 h-16 mx-auto mb-8 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            {t('about.mission.title')}
          </h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed opacity-95">
            {t('about.mission.tagline')}
          </p>
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg md:text-xl leading-relaxed font-light opacity-90">
              {t('about.mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are - Refined */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Globe className="w-12 h-12 mx-auto mb-6 text-blue-600" />
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              {t('about.whoWeAre.title')}
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              <strong className="text-gray-900">{t('about.whoWeAre.orgName')}</strong>{t('about.whoWeAre.description1')}
            </p>
            <p className="text-lg leading-relaxed mb-6">
              {t('about.whoWeAre.description2')}
            </p>
            <div className="bg-gray-50 border-l-4 border-blue-600 p-8 my-8">
              <p className="text-xl font-medium text-gray-900 mb-4">{t('about.whoWeAre.appTitle')}</p>
              <ul className="space-y-2 text-gray-600">
                <li>• {t('about.whoWeAre.feature1')}</li>
                <li>• {t('about.whoWeAre.feature2')}</li>
                <li>• {t('about.whoWeAre.feature3')}</li>
                <li>• {t('about.whoWeAre.feature4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section - Humble & Concise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Users className="w-12 h-12 mx-auto mb-6 text-blue-600" />
            <h2 className="text-4xl font-light text-gray-900">
              {t('about.leadership.title')}
            </h2>
          </div>

          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    {t('about.leadership.name')}
                  </h3>
                  <p className="text-blue-600 mb-4">
                    {t('about.leadership.role')}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {t('about.leadership.bio')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section - Modern */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 mx-auto mb-6 text-purple-600" />
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              {t('about.getInvolved.title')}
            </h2>
            <p className="text-xl text-gray-500">
              {t('about.getInvolved.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-0 shadow-md hover:shadow-xl transition-shadow bg-white" data-testid="card-download-app">
              <CardContent className="p-8">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-medium text-lg mb-2 text-gray-900">
                  {t('about.downloadApp.title')}
                </h3>
                <p className="text-gray-500 text-sm">
                  {t('about.downloadApp.subtitle')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-xl transition-shadow bg-white" data-testid="card-support-mission">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-medium text-lg mb-2 text-gray-900">
                  {t('about.supportMission.title')}
                </h3>
                <p className="text-gray-500 text-sm">
                  {t('about.supportMission.subtitle')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md hover:shadow-xl transition-shadow bg-white" data-testid="card-partner">
              <CardContent className="p-8">
                <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="font-medium text-lg mb-2 text-gray-900">
                  {t('about.partnership.title')}
                </h3>
                <p className="text-gray-500 text-sm">
                  {t('about.partnership.subtitle')}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">
                  {t('about.contactInfo.title')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{t('about.contactInfo.email')}:</span>
                    <a href="mailto:info@wordshiper.org" className="text-blue-600 hover:underline">
                      info@wordshiper.org
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{t('about.contactInfo.website')}:</span>
                    <a href="https://www.wordshiper.org" className="text-blue-600 hover:underline">
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
