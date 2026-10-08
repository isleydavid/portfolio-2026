"use client";
import Link from "next/link";
import Image from "next/image";
import { bio, experiences, projects, achievements, skills } from "@/lib/data";
import { useState, useEffect, useRef } from "react";
import { useScrollReveal, useParallax } from "@/hooks/useScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { ProjectTag } from "@/components/ProjectTag";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";
import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-900">
      <ScrollProgress />

      <a href="#main-content" className="skip-link">
        {t("header.skipToContent")}
      </a>

      <Header />

      <main id="main-content">
        {/* Hero */}
        <HeroSection />

        {/* Infinite Carousel */}
        <InfiniteCarousel />

        {/* Sobre Mim */}
        <section id="sobre" className="py-12 md:py-16 bg-white" aria-labelledby="sobre-heading">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 id="sobre-heading" className="text-3xl md:text-4xl font-medium mb-8 text-zinc-900 uppercase tracking-[-0.02em]">{t("about.title")}</h2>
            <div className="space-y-6 text-zinc-700">
              <p className="text-base md:text-lg leading-relaxed">
                {t("about.intro1")}
              </p>
              <p className="text-base leading-relaxed">
                {t("about.intro2")}
              </p>
              <div className="pt-8">
                <h3 className="text-xl md:text-2xl font-medium mb-6 text-zinc-900">{t("about.education")}</h3>
                <ul className="space-y-3">
                  {bio.education.map((edu, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-600">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <h3 className="text-xl md:text-2xl font-medium mb-6 text-zinc-900">{t("about.skills")}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill, i) => (
                    <div key={i} className="bg-zinc-50 rounded-xl p-4 hover:bg-zinc-100 transition-colors duration-200">
                      <h4 className="font-medium mb-3 text-zinc-900 text-sm uppercase tracking-wider">{skill.category}</h4>
                      <ul className="space-y-2">
                        {skill.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-zinc-600 text-sm">
                            <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <ProjetosSection />

        {/* Conquistas */}
        <ConquistasSection />

        {/* Trajetória */}
        <TrajetoriaSection />
      </main>

      {/* CTA Section - Cinza/Azul/Branco/Preto */}
      <section className="py-12 md:py-20 bg-zinc-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Título CTA + Botão */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-4xl font-medium text-zinc-900 mb-6 md:mb-0 uppercase tracking-[-0.02em]">
                {t("cta.title")}
              </h2>
              <a
                href="mailto:idlopezgiraldo.dlg@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200 uppercase tracking-wider text-sm shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {t("cta.button")}
              </a>
            </div>

            {/* Ícones Cinza */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <a
                href="https://www.linkedin.com/in/davidlopezgiraldo/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-zinc-200 rounded-3xl flex items-center justify-center hover:bg-zinc-300 active:scale-95 transition-all duration-200 group shadow-sm hover:shadow-md"
              >
                <svg className="w-20 h-20 text-blue-600 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/davidlopezgiraldo_/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-zinc-200 rounded-3xl flex items-center justify-center hover:bg-zinc-300 transition-all duration-300 group"
              >
                <svg className="w-20 h-20 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@davidlopezgiraldo7612/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-zinc-200 rounded-3xl flex items-center justify-center hover:bg-zinc-300 transition-all duration-300 group"
              >
                <svg className="w-20 h-20 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a
                href="mailto:idlopezgiraldo.dlg@gmail.com"
                className="aspect-square bg-zinc-200 rounded-3xl flex items-center justify-center hover:bg-zinc-300 transition-all duration-300 group"
              >
                <svg className="w-20 h-20 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Links */}
            <div className="border-t border-zinc-300 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 md:mb-0">
                  <a href="#trajetoria" className="text-zinc-700 hover:text-zinc-900 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-zinc-900 after:transition-all">{t("footer.journey")}</a>
                  <a href="#projetos" className="text-zinc-700 hover:text-zinc-900 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-zinc-900 after:transition-all">{t("footer.projects")}</a>
                  <a href="mailto:idlopezgiraldo.dlg@gmail.com" className="text-zinc-700 hover:text-zinc-900 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-zinc-900 after:transition-all">{t("footer.contact")}</a>
                </div>
                <p className="text-zinc-500">{t("footer.copyright")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Links Simples */}
      <footer className="py-8 bg-white border-t border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 text-zinc-600 text-sm">
            <a
              href="https://www.linkedin.com/in/davidlopezgiraldo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <span className="hidden md:inline text-zinc-400">|</span>
            <a
              href="https://www.instagram.com/davidlopezgiraldo_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors duration-300"
            >
              Instagram
            </a>
            <span className="hidden md:inline text-zinc-400">|</span>
            <a
              href="https://www.youtube.com/@davidlopezgiraldo7612/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors duration-300"
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}

function TimelineItem({ year, period, title, company, description, current = false }: {
  year: string;
  period: string;
  title: string;
  company: string;
  description?: string;
  current?: boolean;
}) {
  const { t } = useLanguage();

  return (
    <div className="flex gap-4 md:gap-6 items-start">
      <div className="text-zinc-500 font-mono text-sm md:text-base w-16 md:w-20 flex-shrink-0">{year}</div>
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-zinc-900 leading-[1.2]">{title}</h3>
        <p className="text-zinc-600 text-sm md:text-base mb-2 font-medium">
          {company} {current && <span className="ml-2 px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-xs font-medium">{t("journey.current")}</span>}
        </p>
        <p className="text-zinc-500 text-sm md:text-base mb-2">{period}</p>
        {description && <p className="text-zinc-600 text-sm md:text-base leading-[1.5]">{description}</p>}
      </div>
    </div>
  );
}

function ProjectCard({ title, role, company, description, tags, image, images, slug }: {
  title: string;
  role: string;
  company: string;
  description: string;
  tags?: string[];
  image?: string;
  images?: string[];
  slug?: string;
}) {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageList = images || (image ? [image] : []);
  const imageCount = imageList.length;
  const hasMultipleImages = imageCount > 1;

  // Autoplay carousel when scrolling into view
  useEffect(() => {
    if (!hasMultipleImages) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (imageContainerRef.current) {
      observer.observe(imageContainerRef.current);
    }

    return () => observer.disconnect();
  }, [hasMultipleImages]);

  // Auto-advance images when in view
  useEffect(() => {
    if (!isInView || !hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView, hasMultipleImages, imageCount]);

  // Track mouse position for cursor following effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const content = (
    <div>
      {/* Image Container */}
      {imageList.length > 0 && (
        <div
          ref={imageContainerRef}
          className="w-full overflow-hidden relative aspect-[16/9] md:aspect-[4/3] rounded-xl md:rounded-2xl cursor-pointer group bg-zinc-100"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-zinc-200 animate-pulse" />
          )}

          <Image
            key={currentImage}
            src={imageList[currentImage]}
            alt={`${title}`}
            fill
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
          />

          {/* Overlay with Tags */}
          <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
            {/* Tags no topo */}
            {tags && tags.length > 0 && (
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white text-zinc-900 text-xs font-semibold uppercase tracking-wider rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Cursor Following "VIEW PROJECT" Button */}
            {isHovering && (
              <div
                className="absolute pointer-events-none z-20 transition-transform duration-100 ease-out"
                style={{
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-xl whitespace-nowrap">
                  <span className="text-zinc-900 font-semibold uppercase tracking-wider text-sm">{t("projects.viewProject")}</span>
                  <svg className="w-4 h-4 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Project Info - Always Visible */}
      <div className="pt-4 md:pt-6">
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-zinc-900 leading-[1.2]">{title}</h3>
        <p className="text-sm md:text-base text-zinc-600 leading-[1.5]">{description}</p>
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/projetos/${slug}`} prefetch={true} className="block active:scale-[0.99] transition-transform duration-100">
        {content}
      </Link>
    );
  }

  return content;
}

function AchievementCard({ title, description, metric }: {
  title: string;
  description: string;
  metric?: string;
}) {
  return (
    <article className="bg-white p-4 md:p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl md:text-2xl font-semibold mb-2 text-zinc-900 leading-[1.2]">{title}</h3>
      <p className="text-zinc-600 text-sm md:text-base mb-3 leading-[1.5]">{description}</p>
      {metric && <p className="text-emerald-600 font-mono text-xs font-medium">{metric}</p>}
    </article>
  );
}

// Enhanced sections with scroll animations
function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="h-screen md:h-[90vh] bg-white pt-12 md:pt-4 pb-6 md:pb-4 relative flex flex-col md:flex md:items-center md:justify-center" aria-label="Introdução">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl relative z-10 flex-1 flex flex-col md:grid md:grid-cols-[1.2fr_1fr] md:gap-12 lg:gap-16 md:items-center md:h-full">
        <div className="md:pr-8">
          {/* Título: Desktop reduzido, centralizado */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-zinc-900 mb-4 md:mb-3 leading-[1.0] tracking-[-0.02em] uppercase">
            {t("hero.greeting")}
            <span className="text-blue-600">.</span>
            <br />
            {t("hero.name")}
            <span className="text-red-500">.</span>
          </h1>

          {/* Parágrafo: Desktop compacto */}
          <p className="text-sm md:text-sm lg:text-base font-normal text-zinc-600 mb-5 md:mb-4 leading-[1.4]">
            {t("hero.bio")}
          </p>

          {/* Botão CTA - Desktop apenas */}
          <a
            href="mailto:idlopezgiraldo.dlg@gmail.com"
            className="hidden md:inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200 hover:gap-4 shadow-md hover:shadow-lg uppercase tracking-wider text-[13.7px]"
          >
            {t("cta.button")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Foto profissional com formas geométricas CONTIDAS */}
        {/* Desktop: grid col 2 | Mobile: relative abaixo */}
        <div className="relative w-52 md:w-full md:max-h-[65vh] h-auto mx-auto md:mx-0 mb-5 md:mb-0 flex items-center overflow-visible" aria-hidden="true">
          {/* Container com overflow-hidden para conter as formas */}
          <div className="relative w-full overflow-hidden rounded-xl md:rounded-2xl">
            {/* Formas geométricas DENTRO do container */}
            {/* Triângulo amarelo - posicionado dentro */}
            <div className="absolute z-0 top-0 right-0 w-0 h-0 border-l-[60px] md:border-l-[100px] border-l-transparent border-r-[60px] md:border-r-[100px] border-r-transparent border-b-[120px] md:border-b-[200px] border-b-yellow-400"></div>

            {/* Círculo azul - posicionado dentro */}
            <div className="absolute z-0 bottom-4 left-4 md:bottom-8 md:left-8 w-20 h-20 md:w-32 md:h-32 rounded-full bg-blue-500 opacity-70"></div>

            {/* Forma orgânica rosa/coral - posicionada dentro */}
            <div className="absolute z-0 bottom-16 left-16 md:bottom-24 md:left-24 w-24 h-24 md:w-36 md:h-36 rounded-full bg-red-400 opacity-50"></div>

            {/* Container da foto com borda laranja */}
            <div className="relative z-10 rounded-xl md:rounded-2xl overflow-hidden border-4 md:border-8 border-[#CC785C] bg-white shadow-xl md:shadow-2xl">
              <Image
                src="/david-office.png"
                alt="David López Giraldo no escritório"
                width={1024}
                height={768}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Botão CTA - Mobile apenas, depois da foto: Aeonik Fono Medium */}
      <div className="container mx-auto px-6 max-w-6xl md:hidden">
        <a
          href="mailto:idlopezgiraldo.dlg@gmail.com"
          className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200 hover:gap-4 shadow-md hover:shadow-lg uppercase tracking-wider text-[13.7px]"
        >
          {t("cta.button")}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function TrajetoriaSection() {
  const headingRef = useScrollReveal();
  const timelineRef = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="trajetoria" className="py-12 md:py-16 bg-zinc-50" aria-labelledby="trajetoria-heading">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2
          ref={headingRef as any}
          id="trajetoria-heading"
          className="text-3xl md:text-4xl font-medium mb-8 text-zinc-900 uppercase tracking-[-0.02em] apple-fade"
        >
          {t("journey.title")}
        </h2>
        <div
          ref={timelineRef as any}
          className="space-y-8 apple-stagger"
        >
          {experiences.map((exp, i) => (
            <TimelineItem key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjetosSection() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="projetos" className="py-12 md:py-16 bg-white" aria-labelledby="projetos-heading">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="mb-10 md:mb-12">
          <h2
            ref={headingRef as any}
            id="projetos-heading"
            className="text-3xl md:text-4xl font-medium mb-4 text-zinc-900 leading-[1.2] uppercase tracking-[-0.02em]"
          >
            {t("projects.title")}
          </h2>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-2xl">
              {t("projects.intro")}
            </p>
            <Link
              href="/#projetos"
              className="text-zinc-900 font-medium uppercase tracking-wider text-xs md:text-sm hover:text-blue-600 transition-colors whitespace-nowrap group"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-blue-600 after:transition-all">{t("projects.viewAll")}</span>
            </Link>
          </div>
        </div>

        {/* Projects Grid - 2 Columns Desktop, 1 Column Mobile */}
        <div
          ref={gridRef as any}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12"
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ConquistasSection() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="conquistas" className="py-12 md:py-16 bg-zinc-50" aria-labelledby="conquistas-heading">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2
          ref={headingRef as any}
          id="conquistas-heading"
          className="text-3xl md:text-4xl font-medium mb-8 text-zinc-900 apple-scale leading-[1.2] uppercase tracking-[-0.02em]"
        >
          {t("achievements.title")}
        </h2>
        <div
          ref={gridRef as any}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 apple-stagger"
        >
          {achievements.map((achievement, i) => (
            <AchievementCard key={i} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}
