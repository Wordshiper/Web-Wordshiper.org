import { useState, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Clock, 
  Globe, 
  Users, 
  Heart, 
  Star, 
  BookOpen, 
  Headphones,
  Timer,
  Zap,
  CheckCircle,
  ArrowRight,
  Volume2,
  Sun,
  Coffee,
  Moon,
  UsersRound,
  Shield,
  Lightbulb,
  Smartphone,
  Trophy
} from "lucide-react";
import Navigation from "@/components/navigation";
import SEO from "@/components/seo";
import TTSDemo from "@/components/tts-demo";
import DonationSection from "@/components/donation-section";
import VolunteerSection from "@/components/volunteer-section";
import ExpandedLanguageSwitcher, { 
  GlobalReachShowcase, 
  LanguageBadges 
} from "@/components/expanded-language-switcher";
import { useLanguage } from "@/hooks/use-language";
import { useAuth } from "@/hooks/useAuth";
import { IPhoneDemoPopup } from "@/components/iphone-demo-popup";
import { RankingDashboard } from "@/components/ranking-dashboard";
import ImmersiveLoadingIntro from "@/components/immersive-loading-intro";
import Footer from "@/components/footer";
// 기독교 일러스트레이션들을 실제 사진으로 교체하여 제거함

export default function EnhancedRevolutionHome() {
  const { t } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const [showIPhoneDemo, setShowIPhoneDemo] = useState(false);
  const [showRankingDashboard, setShowRankingDashboard] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const dailyRoutine = [
    {
      icon: <Sun className="w-10 h-10" />,
      time: t('routine.morning.time'),
      title: t('routine.morning.title'),
      description: t('routine.morning.description'),
      color: "bg-yellow-50 border-yellow-200",
      textColor: "text-yellow-700"
    },
    {
      icon: <Coffee className="w-10 h-10" />,
      time: t('routine.lunch.time'),
      title: t('routine.lunch.title'),
      description: t('routine.lunch.description'),
      color: "bg-orange-50 border-orange-200",
      textColor: "text-orange-700"
    },
    {
      icon: <Moon className="w-10 h-10" />,
      time: t('routine.evening.time'),
      title: t('routine.evening.title'),
      description: t('routine.evening.description'),
      color: "bg-indigo-50 border-indigo-200",
      textColor: "text-indigo-700"
    }
  ];

  const targetAudience = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: t('audience.group1.title'),
      subtitle: t('audience.group1.subtitle'),
      description: t('audience.group1.description'),
      color: "bg-blue-50"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t('audience.group2.title'),
      subtitle: t('audience.group2.subtitle'),
      description: t('audience.group2.description'),
      color: "bg-green-50"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('audience.group3.title'),
      subtitle: t('audience.group3.subtitle'),
      description: t('audience.group3.description'),
      color: "bg-purple-50"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('audience.group4.title'),
      subtitle: t('audience.group4.subtitle'),
      description: t('audience.group4.description'),
      color: "bg-pink-50"
    }
  ];

  const familyImpact = [
    {
      icon: <UsersRound className="w-8 h-8" />,
      title: t('familyImpact.group1.title'),
      description: t('familyImpact.group1.description'),
      color: "text-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('familyImpact.group2.title'),
      description: t('familyImpact.group2.description'),
      color: "text-green-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('familyImpact.group3.title'),
      description: t('familyImpact.group3.description'),
      color: "text-purple-600"
    }
  ];

  // Show intro first
  if (showIntro) {
    return <ImmersiveLoadingIntro onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <SEO 
        title="Wordshiper - Bible Memorization Platform"
        description="Memorize Scripture. 15 Minutes a Day. A Life Transformed! Experience daily transformation with AI-powered Bible memorization in 24 languages. 아침·점심·저녁 5분, 말씀으로 변화되는 삶."
        url="https://www.wordshiper.org"
      />
      <Navigation />
      
      {/* Hero Section - 새로운 컨셉 */}
      <section id="home" className="relative pt-24 pb-16 overflow-hidden gradient-hero" role="banner">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-purple-600/8 to-pink-600/8"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-purple-200/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          {/* 추가 장식 요소 */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-lg">
              {t('hero.tagline')}
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            {t('hero.title1')}<br />
            {t('hero.title2')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>



          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => setShowIPhoneDemo(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 relative overflow-hidden group"
              data-testid="button-iphone-demo"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Smartphone className="w-5 h-5 mr-2 relative z-10 group-hover:animate-pulse" />
              <span className="relative z-10 font-semibold">{t('button.iphoneDemo')}</span>
            </Button>
            <Button 
              size="lg" 
              onClick={() => setShowRankingDashboard(true)}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 relative overflow-hidden group"
              data-testid="button-global-ranking"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Trophy className="w-5 h-5 mr-2 relative z-10 group-hover:animate-pulse" />
              <span className="relative z-10 font-semibold">{t('button.globalRanking')}</span>
            </Button>
            {!isAuthenticated && (
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 bg-white hover:border-purple-700 relative overflow-hidden group"
                onClick={() => {
                  if (window.location.hostname === 'localhost') {
                    alert('로그인 기능은 Replit 배포 환경에서만 사용 가능합니다.');
                  } else {
                    window.location.href = '/api/login';
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Users className="w-5 h-5 mr-2 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10 font-semibold">{t('nav.joinUs')}</span>
              </Button>
            )}
          </div>

          <LanguageBadges className="justify-center" />
        </div>
      </section>

      {/* Daily Routine Section - 아침, 점심, 저녁 */}
      <section id="routine" className="py-20 gradient-section" role="region" aria-label="Daily routine">
        <div className="max-w-6xl mx-auto px-4">

          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('routine.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('routine.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {dailyRoutine.map((routine, index) => (
              <Card key={index} className={`premium-card hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${routine.color} border-0`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md ${routine.textColor}`}>
                    {routine.icon}
                  </div>
                  <div className={`text-sm font-medium ${routine.textColor} mb-2`}>
                    {routine.time}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {routine.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {routine.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('audience.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('audience.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <Card key={index} className={`premium-card hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${audience.color} border-0`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    {audience.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {audience.title}
                  </h3>
                  <h4 className="text-md font-semibold text-gray-700 mb-3">
                    {audience.subtitle}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Family Impact Section */}
      <section className="py-20 gradient-section">
        <div className="max-w-6xl mx-auto px-4">

          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('family.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('family.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {familyImpact.map((impact, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${impact.color} bg-gray-50`}>
                  {impact.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {impact.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Preservation Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-200/20 via-transparent to-purple-200/20"></div>
        <div className="max-w-4xl mx-auto px-4 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full mb-6 shadow-lg">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('voicePreservation.title')}
            </h2>
            <p className="text-2xl md:text-3xl text-rose-600 font-semibold mb-6">
              {t('voicePreservation.subtitle')}
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t('voicePreservation.description')}
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-10 py-6 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              data-testid="button-preserve-voice"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Heart className="w-6 h-6 mr-3 relative z-10 group-hover:animate-pulse" />
              <span className="relative z-10 font-bold">{t('voicePreservation.cta')}</span>
            </Button>
          </div>
        </div>
      </section>

      {/* TTS Demo Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('tts.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('tts.subtitle')}
            </p>
          </div>
          <TTSDemo />
        </div>
      </section>

      {/* Global Reach Section */}  
      <section className="py-20 gradient-section">
        <div className="max-w-6xl mx-auto px-4">

          
          <GlobalReachShowcase />
          <div className="mt-16 text-center">
            <ExpandedLanguageSwitcher />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-purple-50/80 via-pink-50/80 to-blue-50/80 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/30 via-transparent to-pink-200/30"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">

          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('mission.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('mission.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 font-semibold">{t('cta.startNow')}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Button>
            <Link href="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 bg-white relative overflow-hidden group"
                data-testid="button-learn-more"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 font-semibold">{t('cta.learnMore')}</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 gradient-section">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('volunteer.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('volunteer.subtitle')}
            </p>
          </div>
          <VolunteerSection />
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('donation.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('donation.subtitle')}
            </p>
          </div>
          <DonationSection />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Demo Popups */}
      <IPhoneDemoPopup 
        isOpen={showIPhoneDemo} 
        onClose={() => setShowIPhoneDemo(false)} 
      />
      <RankingDashboard 
        isOpen={showRankingDashboard} 
        onClose={() => setShowRankingDashboard(false)} 
      />
    </div>
  );
}