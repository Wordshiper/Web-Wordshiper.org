import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { LanguageBadges } from "@/components/language-switcher";
import { Heart, Globe, Users, BookOpen } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Ministry Badge */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-8 shadow-sm">
            <Heart className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">{t('hero.tagline')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {t('hero.title1')}
            </span>
            <br />
            <span className="text-gray-900">{t('hero.title2')}</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            {t('hero.description')}
          </p>

          {/* Bible Verse */}
          <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 mb-10 max-w-4xl mx-auto shadow-sm">
            <blockquote className="text-lg md:text-xl text-gray-800 italic mb-4 leading-relaxed">
              "{t('mission.verse')}"
            </blockquote>
            <cite className="text-base font-semibold text-primary">
              {t('mission.reference')}
            </cite>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              onClick={() => scrollToSection('demo')}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              {t('hero.tryDemo')}
            </Button>
            <Button 
              onClick={() => scrollToSection('donate')}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" />
              {t('hero.supportMinistry')}
            </Button>
          </div>

          {/* Global Language Support */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">Available in 50+ languages worldwide</span>
            </div>
            
            <LanguageBadges className="justify-center" />
          </div>

          {/* Ministry Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-gray-600">Languages</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-primary mb-2">380+</div>
              <div className="text-sm text-gray-600">AI Voices</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('mission.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-gray-500">
          <span className="text-sm">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}