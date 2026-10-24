"use client";
import { createContext, useContext, useState, useEffect } from "react";
import ptTranslations from "@/locales/pt.json";

type Language = "pt" | "en" | "es";
// Os locales sao JSON aninhado de profundidade livre.
type Translations = { [key: string]: string | Translations };

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
  // Guardamos o que ja foi carregado e derivamos o idioma atual, em vez de
  // chamar setState sincrono dentro do efeito. De quebra, trocar de idioma e
  // voltar nao refaz o import.
  const [loaded, setLoaded] = useState<Partial<Record<Language, Translations>>>({
    pt: ptTranslations,
  });
  const translations = loaded[language] ?? ptTranslations;

  useEffect(() => {
    if (loaded[language]) return;
    import(`@/locales/${language}.json`)
      .then((module) => setLoaded((prev) => ({ ...prev, [language]: module.default })))
      .catch(() => {}); // sem o locale, o ?? acima ja cai em pt
  }, [language, loaded]);

  useEffect(() => {
    // localStorage nao existe no servidor; ler durante o render quebraria a
    // hidratacao. Efeito no mount e o caminho correto aqui.
    const saved = localStorage.getItem("portfolio-language") as Language;
    if (saved && ["pt", "en", "es"].includes(saved)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(saved);
    }
  }, []);

  // O layout e server component e nasce com lang="pt-BR". Sem isto, trocar o
  // idioma deixaria o atributo mentindo sobre o conteudo — leitor de tela e
  // buscador leem o lang, nao o texto.
  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  // Translation function with nested key support
  const t = (key: string): string => {
    let value: string | Translations | undefined = translations;
    for (const k of key.split(".")) {
      if (typeof value !== "object") return key;
      value = value[k];
    }
    return typeof value === "string" ? value : key;
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
