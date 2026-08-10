import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronDown, Globe, Search } from "lucide-react";
import { getLanguageByCode, type Language } from "@/data/expanded-languages";
import { getSiteLanguages, SITE_LOCALE_CODES } from "@/data/site-locales";
import { useLanguage, LanguageProvider } from "@/hooks/use-language";
import { useCopy } from "@/data/renewal-copy";
import { ensureTypographyAssets, getTypography } from "@/data/typography";
import { typographyIdForSiteLocale } from "@/data/site-locales";

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

/** Prefetch locale fonts so switching feels instant. */
function prefetchLocaleFonts(code: string) {
  try {
    ensureTypographyAssets(getTypography(typographyIdForSiteLocale(code)));
  } catch {
    /* ignore */
  }
}

/** Legacy exports kept for unused revolution pages (not in App router). */
export function GlobalReachShowcase({ className = "" }: { className?: string }) {
  const chrome = useCopy().chrome;
  return (
    <div className={`text-center font-ui ${className}`}>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {SITE_LOCALE_CODES.map((code) => {
          const lang = getLanguageByCode(code);
          return lang ? (
            <Badge key={code} variant="outline" className="px-3 py-2 text-sm">
              <span className="mr-2">{lang.flag}</span>
              {lang.nativeName}
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
  return (
    <div className={`flex flex-wrap gap-2 font-ui ${className}`}>
      {SITE_LOCALE_CODES.map((code) => {
        const lang = getLanguageByCode(code);
        return lang ? (
          <Badge key={code} variant="secondary" className="text-xs">
            {lang.flag} {lang.nativeName}
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
  const rootRef = useRef<HTMLDivElement>(null);

  const currentLang = getLanguageByCode(currentLanguage);
  const filtered = useMemo(() => {
    const list = filterSiteLanguages(searchQuery);
    // Current language first, then by English name
    return [...list].sort((a, b) => {
      if (a.code === currentLanguage) return -1;
      if (b.code === currentLanguage) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [searchQuery, currentLanguage]);

  useEffect(() => {
    if (!isOpen) return;
    // Prefetch fonts for visible locales
    filtered.forEach((l) => prefetchLocaleFonts(l.code));
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [isOpen, filtered]);

  const handleLanguageSelect = (langCode: string) => {
    prefetchLocaleFonts(langCode);
    setLanguage(langCode);
    setIsOpen(false);
    setSearchQuery("");
  };

  const list = (
    <div className="max-h-[min(28rem,70vh)] overflow-y-auto space-y-1 overscroll-contain">
      {filtered.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onMouseEnter={() => prefetchLocaleFonts(lang.code)}
          onClick={() => handleLanguageSelect(lang.code)}
          className={`w-full flex items-center space-x-3 p-2.5 rounded-lg hover:bg-[#F8FCFE] transition-colors text-left ${
            currentLanguage === lang.code
              ? "bg-[#E6F7FC] border border-[#00B3E4]/40"
              : "border border-transparent"
          }`}
        >
          <span className="text-lg shrink-0">{lang.flag}</span>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 truncate">
              {lang.nativeName}
            </div>
            <div className="text-xs text-gray-500 truncate">
              {lang.name} · {lang.code.toUpperCase()}
            </div>
          </div>
          {currentLanguage === lang.code && (
            <Check className="w-4 h-4 text-[#0090B8] shrink-0" />
          )}
        </button>
      ))}
      {filtered.length === 0 && (
        <p className="text-center text-sm text-gray-500 py-6">—</p>
      )}
    </div>
  );

  if (compact) {
    return (
      <div className={`relative ${className}`} ref={rootRef}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 h-8 px-3 font-ui"
          aria-label={chrome.chooseLanguage}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="text-lg">{currentLang?.flag || "🌐"}</span>
          <span className="hidden sm:inline text-xs font-semibold tracking-wide">
            {(currentLang?.code || currentLanguage).toUpperCase()}
          </span>
          <ChevronDown className="w-3 h-3" />
        </Button>

        {isOpen && (
          <div
            className="absolute top-10 right-0 z-50 w-[22rem] max-w-[calc(100vw-1.5rem)] bg-white border border-[#E6F7FC] rounded-xl shadow-xl font-ui"
            role="listbox"
            aria-label={chrome.chooseLanguage}
          >
            <div className="p-3">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder={chrome.searchLanguages}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-9"
                  autoFocus
                />
              </div>
              {list}
              <div className="mt-3 pt-3 border-t border-[#E6F7FC] text-center text-xs text-gray-500">
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
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder={chrome.searchLanguages}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[28rem] overflow-y-auto">
            {filtered.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onMouseEnter={() => prefetchLocaleFonts(lang.code)}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`flex items-center space-x-3 p-3 rounded-lg border transition-all hover:shadow-sm text-left ${
                  currentLanguage === lang.code
                    ? "border-[#00B3E4] bg-[#E6F7FC] shadow-sm"
                    : "border-gray-200 hover:border-[#00B3E4]/40"
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 truncate">
                    {lang.nativeName}
                  </div>
                  <div className="text-sm text-gray-600 truncate">{lang.name}</div>
                </div>
                {currentLanguage === lang.code && (
                  <Check className="w-5 h-5 text-[#0090B8]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
