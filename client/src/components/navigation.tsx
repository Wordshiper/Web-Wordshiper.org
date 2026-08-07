import { useState } from "react";
import { Link } from "wouter";
import wordshiperLogoEn from "@assets/Wordshiper-Logo-E-450_1760638357068.png";
import wordshiperLogoKo from "@assets/wordshiper-logo-K-450_1760639053287.png";
import ExpandedLanguageSwitcher from "@/components/expanded-language-switcher";
import { useLanguage } from "@/hooks/use-language";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { User, LogOut, Home, BookOpen, Globe, Heart, Users, Sparkles } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, currentLanguage } = useLanguage();
  const { user, isAuthenticated, isLoading } = useAuth();
  
  const wordshiperLogo = currentLanguage === 'ko' ? wordshiperLogoKo : wordshiperLogoEn;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gradient-to-r from-white/90 via-white/95 to-white/90 border-b border-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-purple-50/20 to-pink-50/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center group">
            <img 
              src={wordshiperLogo} 
              alt="Wordshiper Logo" 
              className="h-16 logo-animate drop-shadow-lg"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-blue-50"
              aria-label="Navigate to home section"
              data-testid="nav-button-home"
            >
              {t('nav.home')}
            </button>
            
            <button 
              onClick={() => scrollToSection('demo')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-purple-50"
              aria-label="Navigate to demo section"
              data-testid="nav-button-demo"
            >
              {t('nav.tryDemo')}
            </button>
            
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-green-50"
              aria-label="Navigate to features section"
              data-testid="nav-button-features"
            >
              {t('nav.features')}
            </button>
            
            <Link 
              href="/about"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-indigo-50"
              data-testid="nav-link-about"
              aria-label="Navigate to About page"
            >
              About
            </Link>
            
            <button 
              onClick={() => scrollToSection('donate')}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-pink-50"
              aria-label="Navigate to donate section"
              data-testid="nav-button-donate"
            >
              {t('nav.donate')}
            </button>
            {!isLoading && (
              <>
                {isAuthenticated && user ? (
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {(user as any)?.profileImageUrl ? (
                        <img 
                          src={(user as any).profileImageUrl} 
                          alt="Profile" 
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <User className="w-8 h-8 p-1 bg-gray-100 rounded-full" />
                      )}
                      <span className="text-sm font-medium text-gray-700">
                        {(user as any)?.firstName || (user as any)?.email}
                      </span>
                    </div>
                    <Button
                      onClick={() => window.location.href = '/api/logout'}
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-1 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => window.location.href = '/api/login'}
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold relative overflow-hidden group border-2 border-blue-500/30 hover:border-white/40"
                    aria-label="Log in to your account"
                    data-testid="button-login"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center space-x-2">
                      <span className="drop-shadow-sm">{t('nav.login')}</span>
                      <div className="w-5 h-5 border-2 border-white/80 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500 drop-shadow-sm">
                        <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      </div>
                    </span>
                  </Button>
                )}
              </>
            )}
            
            {/* Language Switcher */}
            <ExpandedLanguageSwitcher compact={true} />
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ExpandedLanguageSwitcher compact={true} />
            <button
              className="text-gray-700 hover:text-primary p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('demo')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                {t('nav.tryDemo')}
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                {t('nav.features')}
              </button>
              <Link 
                href="/about"
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
                data-testid="mobile-nav-link-about"
              >
                About
              </Link>
              <button 
                onClick={() => scrollToSection('donate')}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
              >
                {t('nav.donate')}
              </button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}