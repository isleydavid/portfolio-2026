"use client";
import { createContext, useContext, useState, useEffect } from "react";
import ptTranslations from "@/locales/pt.json";

type Language = "pt" | "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  // ponytail: pt entra estatico para o SSR servir conteudo, nao chaves cruas.
  // en/es continuam no import dinamico e so aparecem apos a hidratacao — se
  // precisarem ser indexados pelo Google, ai sim i18n routing (/en, /es).
  const [translations, setTranslations] = useState<Record<string, any>>(ptTranslations);

  // Load translations on language change
  useEffect(() => {
    if (language === "pt") {
      setTranslations(ptTranslations);
      return;
    }
    import(`@/locales/${language}.json`)
      .then((module) => setTranslations(module.default))
      .catch(() => setTranslations(ptTranslations));
  }, [language]);

  // Load language preference from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("portfolio-language") as Language;
      if (saved && ["pt", "en", "es"].includes(saved)) {
        setLanguageState(saved);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  // Translation function with nested key support
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
