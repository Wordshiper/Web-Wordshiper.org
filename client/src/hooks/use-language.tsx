import { useState, createContext, useContext, useEffect } from "react";
import { expandedLanguages } from "@/data/expanded-languages";
import { getTranslation } from "@/data/translations";
import { applyTypographyToDocument } from "@/data/typography";

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
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("wordshiper-language-v2");
    if (saved && expandedLanguages.find((lang) => lang.code === saved)) {
      setCurrentLanguage(saved);
    }
  }, []);

  useEffect(() => {
    applyTypographyToDocument(currentLanguage);
  }, [currentLanguage]);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem("wordshiper-language-v2", lang);
  };

  const t = (key: string) => getTranslation(key, currentLanguage);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
