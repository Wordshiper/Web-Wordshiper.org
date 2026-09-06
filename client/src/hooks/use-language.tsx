import { useState, createContext, useContext, useEffect, type ReactNode } from "react";
import { getTranslation } from "@/data/translations";
import { applyTypographyToDocument } from "@/data/typography";
import {
  detectBrowserLocale,
  getSiteLanguages,
  isSiteLocale,
  normalizeSiteLocale,
} from "@/data/site-locales";

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * Decision order on first paint:
 * 1. Saved picker choice (localStorage)
 * 2. Browser / OS language list (navigator.languages → navigator.language)
 * 3. English
 *
 * Windows, macOS, iOS, and Android all surface their UI language through
 * the browser's navigator APIs — there is no separate mobile-app bridge.
 */
function readInitialLanguage(): string {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("wordshiper-language-v2");
  if (saved && isSiteLocale(saved)) {
    return normalizeSiteLocale(saved);
  }
  return detectBrowserLocale();
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState(readInitialLanguage);

  // Spec v4.0 dual-font + dir/lang on every locale change (all pages)
  useEffect(() => {
    const locale = normalizeSiteLocale(currentLanguage);
    applyTypographyToDocument(locale);
    localStorage.setItem("wordshiper-language-v2", locale);
  }, [currentLanguage]);

  const setLanguage = (lang: string) => {
    const locale = isSiteLocale(lang) ? normalizeSiteLocale(lang) : "en";
    setCurrentLanguage(locale);
  };

  const t = (key: string) => getTranslation(key, currentLanguage);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Site-supported languages for pickers (25). */
export function useSiteLanguages() {
  return getSiteLanguages();
}
