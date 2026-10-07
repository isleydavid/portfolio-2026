"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "pt" as const, flag: "🇧🇷", name: "Português" },
    { code: "en" as const, flag: "🇺🇸", name: "English" },
    { code: "es" as const, flag: "🇪🇸", name: "Español" },
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`text-2xl transition-all duration-300 hover:scale-125 ${
            language === lang.code
              ? "opacity-100 scale-110"
              : "opacity-50 hover:opacity-75"
          }`}
          title={lang.name}
          aria-label={`Switch to ${lang.name}`}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
}
