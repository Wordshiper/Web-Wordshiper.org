import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ChevronDown, Globe, Search, Users, MapPin } from "lucide-react";
import { expandedLanguages, getRegions, getLanguagesByRegion, searchLanguages, getLanguageByCode, type Language } from "@/data/expanded-languages";
import { useLanguage, LanguageProvider } from "@/hooks/use-language";

export { LanguageProvider };

interface ExpandedLanguageSwitcherProps {
  compact?: boolean;
  className?: string;
}


export default function ExpandedLanguageSwitcher({ compact = false, className = "" }: ExpandedLanguageSwitcherProps) {
  const { currentLanguage, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = getLanguageByCode(currentLanguage);
  const regions = getRegions();

  const getFilteredLanguages = () => {
    let filtered = expandedLanguages;
    
    if (selectedRegion !== "all") {
      filtered = getLanguagesByRegion(selectedRegion);
    }
    
    if (searchQuery) {
      filtered = searchLanguages(searchQuery).filter(lang => 
        selectedRegion === "all" || lang.region === selectedRegion
      );
    }
    
    return filtered;
  };

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  if (compact) {
    return (
      <div className={`relative ${className}`}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 h-8 px-3"
        >
          <span className="text-lg">{currentLang?.flag || '🌐'}</span>
          <span className="hidden sm:inline text-xs">{currentLang?.code.toUpperCase() || 'KO'}</span>
          <ChevronDown className="w-3 h-3" />
        </Button>

        {isOpen && (
          <div className="absolute top-10 right-0 z-50 w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search languages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Tabs value={selectedRegion} onValueChange={setSelectedRegion} className="w-full">
                <TabsList className="grid w-full grid-cols-6 h-auto text-xs">
                  <TabsTrigger value="all" className="text-xs px-2 py-1">All</TabsTrigger>
                  <TabsTrigger value="Asia" className="text-xs px-2 py-1">Asia</TabsTrigger>
                  <TabsTrigger value="Europe" className="text-xs px-2 py-1">Europe</TabsTrigger>
                  <TabsTrigger value="Africa" className="text-xs px-2 py-1">Africa</TabsTrigger>
                  <TabsTrigger value="Americas" className="text-xs px-2 py-1">Americas</TabsTrigger>
                  <TabsTrigger value="Oceania" className="text-xs px-2 py-1">Oceania</TabsTrigger>
                </TabsList>
              </Tabs>
              


              <div className="mt-4 max-h-64 overflow-y-auto space-y-1">
                {getFilteredLanguages().slice(0, 20).map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors ${
                      currentLanguage === lang.code ? 'bg-primary/10 border border-primary' : ''
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-gray-900">{lang.name}</div>
                      <div className="text-xs text-gray-500">{lang.nativeName}</div>
                    </div>
                    {currentLanguage === lang.code && (
                      <Check className="w-4 h-4 text-primary" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-center text-xs text-gray-500">
                  {expandedLanguages.length} languages supported
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Full language switcher for main pages
  return (
    <Card className={`w-full max-w-4xl mx-auto ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Globe className="w-6 h-6" />
          <span>Choose Your Language</span>
          <Badge variant="secondary">{expandedLanguages.length} languages</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search languages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
            {getFilteredLanguages().map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`flex items-center space-x-3 p-4 rounded-lg border transition-all hover:shadow-md ${
                  currentLanguage === lang.code 
                    ? 'border-primary bg-primary/5 shadow-md' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <div className="flex-1 text-left">
                  <div className="font-medium text-gray-900">{lang.name}</div>
                  <div className="text-sm text-gray-600">{lang.nativeName}</div>
                  <div className="text-xs text-gray-500">{lang.region}</div>
                </div>
                {currentLanguage === lang.code && (
                  <Check className="w-5 h-5 text-primary" />
                )}
              </button>
            ))}
          </div>

          {getFilteredLanguages().length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No languages found matching your search.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function GlobalReachShowcase({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  const featuredLanguages = [
    'ko', 'en', 'zh', 'es', 'hi', 'ar', 'pt', 'ru', 'ja', 'fr', 'de', 'it'
  ];

  return (
    <div className={`text-center ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Global Bible Memorization Revolution
      </h3>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {featuredLanguages.map((code) => {
          const lang = getLanguageByCode(code);
          return lang ? (
            <Badge key={code} variant="outline" className="px-3 py-2 text-sm">
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </Badge>
          ) : null;
        })}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">{expandedLanguages.length}</div>
          <div className="text-sm text-gray-600">Languages</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">{getRegions().length}</div>
          <div className="text-sm text-gray-600">Regions</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">195+</div>
          <div className="text-sm text-gray-600">Countries</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">24/7</div>
          <div className="text-sm text-gray-600">Available</div>
        </div>
      </div>
    </div>
  );
}

export function LanguageBadges({ className = "" }: { className?: string }) {
  const popularLanguages = ['ko', 'en', 'zh', 'es', 'hi', 'ar', 'pt', 'ru', 'ja', 'fr'];
  
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {popularLanguages.map((code) => {
        const lang = getLanguageByCode(code);
        return lang ? (
          <Badge key={code} variant="secondary" className="text-xs">
            {lang.flag} {lang.name}
          </Badge>
        ) : null;
      })}
    </div>
  );
}