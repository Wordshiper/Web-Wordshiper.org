import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronDown, Globe, Search } from "lucide-react";
import { getLanguageByCode, type Language } from "@/data/expanded-languages";
import { getSiteLanguages, SITE_LOCALE_CODES } from "@/data/site-locales";
import { useLanguage, LanguageProvider } from "@/hooks/use-language";
import { useCopy } from "@/data/renewal-copy";

export { LanguageProvider };

interface ExpandedLanguageSwitcherProps {
  compact?: boolean;
  className?: string;
}

function filterSiteLanguages(query: string): Language[] {
  const all = getSiteLanguages();
  const q = query.trim().toLowerCase();
  if (!q) return all;
  return all.filter(
    (lang) =>
      lang.name.toLowerCase().includes(q) ||
      lang.nativeName.toLowerCase().includes(q) ||
      lang.code.toLowerCase().includes(q) ||
      lang.region.toLowerCase().includes(q),
  );
}

/** Legacy exports kept for unused revolution pages (not in App router). */
export function GlobalReachShowcase({ className = "" }: { className?: string }) {
  const chrome = useCopy().chrome;
  const featured = SITE_LOCALE_CODES.slice(0, 12);
  return (
    <div className={`text-center font-ui ${className}`}>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {featured.map((code) => {
          const lang = getLanguageByCode(code);
          return lang ? (
            <Badge key={code} variant="outline" className="px-3 py-2 text-sm">
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </Badge>
          ) : null;
        })}
      </div>
      <p className="text-sm text-gray-500">
        {SITE_LOCALE_CODES.length} {chrome.languagesCount}
      </p>
    </div>
  );
}

export function LanguageBadges({ className = "" }: { className?: string }) {
  const popular = SITE_LOCALE_CODES.slice(0, 10);
  return (
    <div className={`flex flex-wrap gap-2 font-ui ${className}`}>
      {popular.map((code) => {
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

export default function ExpandedLanguageSwitcher({
  compact = false,
  className = "",
}: ExpandedLanguageSwitcherProps) {
  const { currentLanguage, setLanguage } = useLanguage();
  const chrome = useCopy().chrome;
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = getLanguageByCode(currentLanguage);
  const filtered = useMemo(
    () => filterSiteLanguages(searchQuery),
    [searchQuery],
  );

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
          className="flex items-center space-x-2 h-8 px-3 font-ui"
          aria-label={chrome.chooseLanguage}
        >
          <span className="text-lg">{currentLang?.flag || "🌐"}</span>
          <span className="hidden sm:inline text-xs">
            {(currentLang?.code || currentLanguage).toUpperCase()}
          </span>
          <ChevronDown className="w-3 h-3" />
        </Button>

        {isOpen && (
          <div className="absolute top-10 right-0 z-50 w-80 bg-white border border-gray-200 rounded-lg shadow-lg font-ui">
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder={chrome.searchLanguages}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="max-h-72 overflow-y-auto space-y-1">
                {filtered.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors ${
                      currentLanguage === lang.code
                        ? "bg-primary/10 border border-primary"
                        : ""
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-gray-900">
                        {lang.name}
                      </div>
                      <div className="text-xs text-gray-500">{lang.nativeName}</div>
                    </div>
                    {currentLanguage === lang.code && (
                      <Check className="w-4 h-4 text-primary" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 text-center text-xs text-gray-500">
                {SITE_LOCALE_CODES.length} {chrome.languagesCount}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Card className={`w-full max-w-4xl mx-auto font-ui ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Globe className="w-6 h-6" />
          <span>{chrome.chooseLanguage}</span>
          <Badge variant="secondary">
            {SITE_LOCALE_CODES.length} {chrome.languagesCount}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder={chrome.searchLanguages}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
            {filtered.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleLanguageSelect(lang.code)}
                className={`flex items-center space-x-3 p-4 rounded-lg border transition-all hover:shadow-md ${
                  currentLanguage === lang.code
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-gray-200 hover:border-gray-300"
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
        </div>
      </CardContent>
    </Card>
  );
}
