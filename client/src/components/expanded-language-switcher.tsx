import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronDown, Globe, Search, X } from "lucide-react";
import { getLanguageByCode, type Language } from "@/data/expanded-languages";
import {
  getSiteLanguages,
  SITE_LOCALE_CODES,
} from "@/data/site-locales";
import { useLanguage, LanguageProvider } from "@/hooks/use-language";
import { useCopy } from "@/data/renewal-copy";
import { ensureTypographyAssets, getTypography } from "@/data/typography";
import { typographyIdForSiteLocale } from "@/data/site-locales";
import { LanguageFlags } from "@/components/language-flags";

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

function LanguageMark({
  code,
  size = "md",
  maxFlags,
}: {
  code: string;
  size?: "sm" | "md";
  maxFlags?: number;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 shrink-0">
      <LanguageFlags locale={code} size={size} max={maxFlags} />
      <span className="font-semibold tracking-wide text-[11px] text-gray-700">
        {code.toUpperCase()}
      </span>
    </span>
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
              <LanguageMark code={code} size="sm" />
              <span className="ms-2">{lang.nativeName}</span>
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
            <LanguageMark code={code} size="sm" />
            <span className="ms-1">{lang.nativeName}</span>
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
  const [sheet, setSheet] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(
    () => filterSiteLanguages(searchQuery),
    [searchQuery],
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const sync = () => setSheet(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    filtered.forEach((l) => prefetchLocaleFonts(l.code));
    const onDoc = (e: MouseEvent) => {
      if (sheet) return;
      if (!rootRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    if (sheet) document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => searchRef.current?.focus(), 30);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      window.clearTimeout(focusTimer);
    };
  }, [isOpen, filtered, sheet]);

  const handleLanguageSelect = (langCode: string) => {
    prefetchLocaleFonts(langCode);
    setLanguage(langCode);
    setIsOpen(false);
    setSearchQuery("");
  };

  const list = (
    <div
      className="max-h-[min(28rem,55dvh)] overflow-y-auto space-y-1 overscroll-contain"
      dir="ltr"
    >
      {filtered.map((lang) => (
        <button
          key={lang.code}
          type="button"
          dir="ltr"
          onMouseEnter={() => prefetchLocaleFonts(lang.code)}
          onClick={() => handleLanguageSelect(lang.code)}
          className={`w-full flex items-center gap-3 min-h-12 px-3 py-2.5 rounded-lg hover:bg-[#F8FCFE] transition-colors text-left touch-manipulation ${
            currentLanguage === lang.code
              ? "bg-[#E6F7FC] border border-[#00B3E4]/40"
              : "border border-transparent"
          }`}
        >
          <LanguageMark code={lang.code} />
          <div className="flex-1 min-w-0 text-left" dir="ltr">
            <div className="ws-lang-native text-sm font-medium text-gray-900 truncate">
              {lang.nativeName}
            </div>
            <div className="text-xs text-gray-500 truncate">{lang.name}</div>
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

  const panelInner = (
    <>
      <div className="relative mb-3">
        <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <Input
          ref={searchRef}
          placeholder={chrome.searchLanguages}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="ps-10 h-11 text-base"
          autoFocus={!sheet}
        />
      </div>
      {list}
      <div className="mt-3 pt-3 border-t border-[#E6F7FC] text-center text-xs text-gray-500">
        {SITE_LOCALE_CODES.length} {chrome.languagesCount}
      </div>
    </>
  );

  if (compact) {
    const trigger = (
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 min-h-11 min-w-11 h-11 px-2.5 sm:px-3 font-ui touch-manipulation"
        aria-label={chrome.chooseLanguage}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        data-testid="button-language-switcher"
      >
        <LanguageMark code={currentLanguage} size="sm" maxFlags={2} />
        <ChevronDown className="w-3.5 h-3.5 shrink-0" />
      </Button>
    );

    const desktopMenu = isOpen && !sheet && (
      <div
        dir="ltr"
        className="absolute top-12 end-0 z-50 w-[min(24rem,calc(100vw-1.5rem))] bg-white border border-[#E6F7FC] rounded-xl shadow-xl font-ui"
        role="listbox"
        aria-label={chrome.chooseLanguage}
      >
        <div className="p-3">{panelInner}</div>
      </div>
    );

    const mobileSheet =
      isOpen &&
      sheet &&
      typeof document !== "undefined" &&
      createPortal(
        <div className="fixed inset-0 z-[80] font-ui" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label={chrome.chooseLanguage}
            onClick={() => setIsOpen(false)}
          />
          <div
            dir="ltr"
            role="dialog"
            aria-modal="true"
            aria-label={chrome.chooseLanguage}
            className="absolute inset-x-0 bottom-0 max-h-[min(92dvh,40rem)] bg-white rounded-t-2xl shadow-2xl flex flex-col pb-[env(safe-area-inset-bottom)]"
          >
            <div className="flex items-center justify-between px-4 pt-3 pb-2">
              <p className="text-sm font-semibold text-[#201E1F]">
                {chrome.chooseLanguage}
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-full hover:bg-gray-100 touch-manipulation"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-4 pb-4 overflow-hidden flex-1">{panelInner}</div>
          </div>
        </div>,
        document.body,
      );

    return (
      <div className={`relative ${className}`} ref={rootRef} dir="ltr">
        {trigger}
        {desktopMenu}
        {mobileSheet}
      </div>
    );
  }

  return (
    <Card className={`w-full max-w-4xl mx-auto font-ui ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
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
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder={chrome.searchLanguages}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ps-10"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[28rem] overflow-y-auto">
            {filtered.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onMouseEnter={() => prefetchLocaleFonts(lang.code)}
                onClick={() => handleLanguageSelect(lang.code)}
                dir="ltr"
                className={`flex items-center gap-3 p-3 min-h-14 rounded-lg border transition-all hover:shadow-sm text-left touch-manipulation ${
                  currentLanguage === lang.code
                    ? "border-[#00B3E4] bg-[#E6F7FC] shadow-sm"
                    : "border-gray-200 hover:border-[#00B3E4]/40"
                }`}
              >
                <LanguageMark code={lang.code} />
                <div className="flex-1 min-w-0 text-left" dir="ltr">
                  <div className="ws-lang-native font-medium text-gray-900 truncate">
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
