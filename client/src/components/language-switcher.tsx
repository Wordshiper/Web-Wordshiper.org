import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { languages, Language, getPopularLanguages, searchLanguages } from "@/data/languages";
import { useLanguage } from "@/hooks/use-language";

interface LanguageSwitcherProps {
  className?: string;
  compact?: boolean;
}


export default function LanguageSwitcher({ className = "", compact = false }: LanguageSwitcherProps) {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLanguages = searchQuery 
    ? searchLanguages(searchQuery)
    : getPopularLanguages();

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  if (compact) {
    return (
      <div className={`relative ${className}`}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 border-gray-300 hover:border-primary transition-colors"
        >
          <span className="text-lg">{currentLang.flag}</span>
          <span className="hidden sm:inline font-medium">{currentLang.code.toUpperCase()}</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Button>

        {isOpen && (
          <Card className="absolute top-full right-0 mt-2 w-72 z-50 shadow-lg border-gray-200">
            <CardContent className="p-4">
              <div className="mb-3">
                <Input
                  placeholder={t('language.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-sm"
                />
              </div>
              <div className="max-h-48 overflow-y-auto space-y-1">
                {filteredLanguages.slice(0, 15).map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left hover:bg-gray-100 transition-colors ${
                      currentLanguage === lang.code ? 'bg-primary text-white' : ''
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{lang.name}</div>
                      <div className="text-xs opacity-70 truncate">{lang.nativeName}</div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="text-xs text-gray-500 text-center">
                  {languages.length}+ languages supported
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <Select value={currentLanguage} onValueChange={setLanguage}>
        <SelectTrigger className="w-full">
          <SelectValue>
            <div className="flex items-center space-x-2">
              <span className="text-lg">{currentLang.flag}</span>
              <span>{currentLang.name}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="max-h-60">
          {getPopularLanguages().map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <div className="flex items-center space-x-2">
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
                <span className="text-sm text-gray-500">({lang.nativeName})</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

// Language badge component for showing available languages
export function LanguageBadges({ className = "" }: { className?: string }) {
  const { setLanguage } = useLanguage();
  const popularLanguages = getPopularLanguages().slice(0, 12);

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {popularLanguages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm transition-colors"
        >
          <span className="text-base">{lang.flag}</span>
          <span>{lang.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}

// Global reach showcase component
export function GlobalReachShowcase({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  const regions = [
    { name: 'North America', flags: ['🇺🇸', '🇨🇦', '🇲🇽'], count: 15 },
    { name: 'Europe', flags: ['🇬🇧', '🇫🇷', '🇩🇪', '🇪🇸', '🇮🇹'], count: 25 },
    { name: 'Asia Pacific', flags: ['🇯🇵', '🇰🇷', '🇨🇳', '🇮🇳', '🇹🇭'], count: 18 },
    { name: 'Middle East & Africa', flags: ['🇸🇦', '🇪🇬', '🇿🇦', '🇰🇪'], count: 12 },
    { name: 'Latin America', flags: ['🇧🇷', '🇦🇷', '🇨🇴', '🇨🇱'], count: 10 }
  ];

  return (
    <div className={`bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Global Ministry Reach
        </h3>
        <p className="text-gray-600">
          Spreading God's Word across 80+ languages and 150+ countries
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regions.map((region, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-900">{region.name}</h4>
              <span className="text-sm text-primary font-medium">{region.count} languages</span>
            </div>
            <div className="flex space-x-1">
              {region.flags.map((flag, flagIndex) => (
                <span key={flagIndex} className="text-2xl">{flag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-sm">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-gray-700">
            New languages added monthly through community contributions
          </span>
        </div>
      </div>
    </div>
  );
}