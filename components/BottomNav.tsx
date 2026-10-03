"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function BottomNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "trajetoria") setActiveSection("trajetoria");
            else if (id === "projetos") setActiveSection("projetos");
            else if (id === "main-content") setActiveSection("home");
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("#main-content, #trajetoria, #projetos");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    {
      id: "home",
      label: "Início",
      href: "/",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      ),
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:isley.giraldo@twinfo.io",
      isEmail: true,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      id: "search",
      label: "Busca",
      href: "#",
      isButton: true,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      ),
    },
    {
      id: "projetos",
      label: "Projetos",
      href: "#projetos",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      ),
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 md:hidden bg-zinc-900/10 backdrop-blur-2xl z-50 border-t border-white/20 shadow-[0_-4px_30px_rgba(0,0,0,0.15)] rounded-t-3xl"
      aria-label="Navegação inferior"
    >
      <ul className="flex justify-around items-center list-none m-0 p-0 py-2 px-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const className = `flex flex-col items-center gap-0.5 px-6 py-2 rounded-2xl transition-all duration-300 ${
            isActive
              ? "text-blue-500 bg-blue-500/20 backdrop-blur-sm scale-105"
              : "text-white/80 hover:text-white active:scale-95"
          }`;

          if (item.isEmail) {
            return (
              <li key={item.id}>
                <a href={item.href} className={className} aria-label={item.label}>
                  <svg
                    className={`w-6 h-6 transition-all duration-300 ${
                      isActive ? "scale-110" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                  <span className="text-[10px] font-medium">{item.label}</span>
                </a>
              </li>
            );
          }

          if (item.isButton) {
            return (
              <li key={item.id}>
                <button className={className} aria-label={item.label}>
                  <svg
                    className={`w-6 h-6 transition-all duration-300 ${
                      isActive ? "scale-110" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                  <span className="text-[10px] font-medium">{item.label}</span>
                </button>
              </li>
            );
          }

          return (
            <li key={item.id}>
              <Link href={item.href} className={className} aria-label={item.label}>
                <svg
                  className={`w-6 h-6 transition-all duration-300 ${
                    isActive ? "scale-110" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
