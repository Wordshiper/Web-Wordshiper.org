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
 * 2. Device / browser UI language (navigator.language) — not country/geo
 * 3. English, when that language is not one of the 25 site locales
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
