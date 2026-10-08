"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: "pt" as const, flag: "🇧🇷", name: "Português" },
    { code: "en" as const, flag: "🇺🇸", name: "English" },
    { code: "es" as const, flag: "🇪🇸", name: "Español" },
  ];

  const menuItems = [
    { href: "/#sobre", label: "about.title" },
    { href: "/#projetos", label: "projects.title" },
    { href: "/#trajetoria", label: "journey.title" },
    { href: "/#conquistas", label: "achievements.title" },
    { href: "mailto:idlopezgiraldo.dlg@gmail.com", label: "footer.contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile: absolute (não fixed) | Desktop: normal flow */}
      <header className="absolute md:relative top-0 w-full bg-transparent md:bg-white z-50 md:z-auto">
        <nav className="container mx-auto px-6 py-3 md:py-6 flex items-center justify-end">
          {/* Menu Hamburguer - em ambos mobile e desktop */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-zinc-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Menu Slide-in */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"
              aria-label="Fechar menu"
            >
              <svg
                className="w-6 h-6 text-zinc-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="space-y-6 mb-8">
            {menuItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-lg font-medium text-zinc-900 hover:text-blue-600 transition-colors uppercase tracking-wider"
              >
                {t(item.label)}
              </a>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="border-t border-zinc-200 pt-6 mb-8">
            <p className="text-sm font-semibold text-zinc-500 mb-4 uppercase tracking-wider">
              Language
            </p>
            <div className="flex gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setMenuOpen(false);
                  }}
                  className={`text-3xl transition-all duration-200 hover:scale-110 ${
                    language === lang.code
                      ? "opacity-100 scale-110"
                      : "opacity-40 hover:opacity-70"
                  }`}
                  title={lang.name}
                  aria-label={`Switch to ${lang.name}`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="mailto:idlopezgiraldo.dlg@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors uppercase tracking-wider"
          >
            {t("cta.button")}
          </a>
        </div>
      </div>
    </>
  );
}
