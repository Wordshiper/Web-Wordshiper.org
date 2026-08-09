import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  Volume2
} from "lucide-react";
import Navigation from "@/components/navigation";
import TTSDemo from "@/components/tts-demo";
import DonationSection from "@/components/donation-section";
import VolunteerSection from "@/components/volunteer-section";
import NewsletterSection from "@/components/newsletter-section";
import ExpandedLanguageSwitcher, { 
  GlobalReachShowcase, 
  LanguageBadges 
} from "@/components/expanded-language-switcher";
import { useLanguage } from "@/hooks/use-language";
import { useAuth } from "@/hooks/useAuth";

export default function RevolutionHome() {
  const { t } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const [currentSection, setCurrentSection] = useState('hero');

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    revolution: useRef<HTMLDivElement>(null),
    demo: useRef<HTMLDivElement>(null),
    global: useRef<HTMLDivElement>(null),
    volunteer: useRef<HTMLDivElement>(null),
    donate: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setCurrentSection(section);
  };

  const revolutionSteps = [
    {
      icon: <Timer className="w-8 h-8" />,
      title: "15분 투자",
      description: "하루 단 15분으로 시작하는 성경 암송",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "AI 음성 학습",
      description: "95개 언어 AI 음성으로 정확한 발음과 암송",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "습관 형성",
      description: "꾸준한 반복으로 평생 기억에 남는 말씀",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "영적 성장",
      description: "말씀으로 변화되는 삶과 깊어지는 믿음",
      color: "bg-pink-50 border-pink-200"
    }
  ];

  const impactStats = [
    { number: "15분", label: "Daily Investment", color: "text-blue-600" },
    { number: "95개", label: "Languages", color: "text-green-600" },
    { number: "365일", label: "Consistency", color: "text-purple-600" },
    { number: "∞", label: "Eternal Impact", color: "text-pink-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section - Revolution Theme */}
      <section ref={sectionRefs.hero} className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-lg">
              ✨ {t('hero.tagline')} ✨
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            매일 15분으로<br />
            당신의 삶을 혁명하세요
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection('demo')}
            >
              <Play className="w-5 h-5 mr-2" />
              15분 혁명 체험하기
            </Button>
            {!isAuthenticated && (
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg"
                onClick={() => window.location.href = '/api/login'}
              >
                <Users className="w-5 h-5 mr-2" />
                혁명에 참여하기
              </Button>
            )}
          </div>

          <LanguageBadges className="justify-center" />
        </div>
      </section>

      {/* Revolution Process Section */}
      <section ref={sectionRefs.revolution} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              15분 성경암송 혁명 과정
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              작은 습관이 만드는 큰 변화. 하루 15분으로 시작하는 영적 성장의 여정입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {revolutionSteps.map((step, index) => (
              <Card key={index} className={`${step.color} border-2 hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TTS Demo Section */}
      <section ref={sectionRefs.demo} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI 음성으로 성경 암송 체험
            </h2>
            <p className="text-xl text-gray-600">
              95개 언어 AI 음성 기술로 정확한 발음과 자연스러운 암송을 경험하세요
            </p>
          </div>
          <TTSDemo />
        </div>
      </section>

      {/* Global Reach Section */}
      <section ref={sectionRefs.global} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <GlobalReachShowcase />
          <div className="mt-16 text-center">
            <ExpandedLanguageSwitcher />
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section ref={sectionRefs.volunteer} className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              15분 혁명에 동참하세요
            </h2>
            <p className="text-xl text-gray-600">
              전 세계 성경 암송 사역에 함께 참여하여 하나님의 말씀을 전파해주세요
            </p>
          </div>
          <VolunteerSection />
        </div>
      </section>

      {/* Donation Section */}
      <section ref={sectionRefs.donate} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              혁명을 후원해주세요
            </h2>
            <p className="text-xl text-gray-600">
              더 많은 사람들이 15분 성경암송 혁명을 경험할 수 있도록 도와주세요
            </p>
          </div>
          <DonationSection />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            15분 혁명 소식 받기
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            성경 암송 팁, 새로운 기능, 전 세계 사역 소식을 받아보세요
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Wordshiper</h3>
            <p className="text-gray-400">{t('hero.tagline')}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
              홈
            </a>
            <a href="#demo" className="text-gray-400 hover:text-white transition-colors">
              체험하기
            </a>
            <a href="#volunteer" className="text-gray-400 hover:text-white transition-colors">
              참여하기
            </a>
            <a href="#donate" className="text-gray-400 hover:text-white transition-colors">
              후원하기
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2024 Wordshiper. 하나님의 말씀으로 세상을 변화시키는 사역
          </div>
        </div>
      </footer>
    </div>
  );
}