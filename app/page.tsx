"use client";
import Link from "next/link";
import Image from "next/image";
import { bio, experiences, projects, achievements, skills } from "@/lib/data";
import { useState, useEffect, useRef } from "react";
import { useScrollReveal, useParallax } from "@/hooks/useScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { BottomNav } from "@/components/BottomNav";
import { ProjectTag } from "@/components/ProjectTag";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-zinc-900">
      <ScrollProgress />

      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {/* Header - Simple top bar */}
      <header className="fixed top-0 w-full bg-zinc-900/20 backdrop-blur-md z-50 border-b border-zinc-400/30 shadow-lg">
        <nav className="container mx-auto px-6 py-4" aria-label="Navegação principal">
          <Link href="/" className="text-xl font-bold text-white">Isley Giraldo</Link>
        </nav>
      </header>

      <BottomNav />

      <main id="main-content">
        {/* Hero */}
        <HeroSection />

        {/* Trajetória */}
        <TrajetoriaSection />

        {/* Infinite Carousel */}
        <InfiniteCarousel />

        {/* Projetos */}
        <ProjetosSection />

        {/* Conquistas */}
        <ConquistasSection />

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos conversar sobre seu projeto?</h2>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Olá! Vi seu portfólio e gostaria de conversar sobre alguns projetos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:isley.giraldo@twinfo.io"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enviar Email
              </a>
              <a
                href="https://www.linkedin.com/in/davidlopezgiraldo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Conectar no LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Sobre Mim */}
        <section className="py-20 md:py-24 bg-white" aria-labelledby="sobre-heading">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 id="sobre-heading" className="text-4xl md:text-5xl font-bold mb-12 text-zinc-900">Sobre Mim</h2>
            <div className="space-y-6 text-zinc-700">
              <p className="text-lg leading-relaxed">
                Profissional com formação em Administração de Empresas e Análise e Desenvolvimento de Sistemas,
                especializado na construção e gestão de produtos digitais em ambientes B2B, B2G e iGaming.
              </p>
              <p className="leading-relaxed">
                Com experiência em liderança de squads multidisciplinares e aplicação de metodologias ágeis
                (Scrum, Kanban), atuo na interseção entre produto, design e tecnologia, utilizando IA generativa
                para otimizar processos de discovery, documentação e automação.
              </p>
              <div className="pt-6">
                <h3 className="text-2xl font-semibold mb-6 text-zinc-900">Formação</h3>
                <ul className="space-y-2 text-zinc-600">
                  {bio.education.map((edu, i) => (
                    <li key={i}>• {edu}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-semibold mb-6 text-zinc-900">Habilidades & Certificações</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skill, i) => (
                    <div key={i}>
                      <h4 className="font-semibold mb-2 text-zinc-900">{skill.category}</h4>
                      <ul className="space-y-1">
                        {skill.items.map((item, j) => (
                          <li key={j} className="text-zinc-600 text-sm">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-zinc-900 text-white border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Sobre */}
            <div>
              <h3 className="text-lg font-semibold mb-4">David López Giraldo</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Product Manager especializado em produtos digitais B2B, B2G e iGaming.
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>
                  <a href="#trajetoria" className="hover:text-white transition-colors duration-300">
                    Trajetória
                  </a>
                </li>
                <li>
                  <a href="#projetos" className="hover:text-white transition-colors duration-300">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="mailto:isley.giraldo@twinfo.io" className="hover:text-white transition-colors duration-300">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Conecte-se</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/davidlopezgiraldo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/davidlopezgiraldo_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@davidlopezgiraldo7612/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 text-center">
            <p className="text-zinc-500 text-sm">&copy; 2026 David López Giraldo. Todos os direitos reservados.</p>
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
  return (
    <div className="flex gap-6 items-start">
      <div className="text-zinc-500 font-mono text-sm w-20 flex-shrink-0">{year}</div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2 text-zinc-900">{title}</h3>
        <p className="text-zinc-600 mb-2 font-medium">
          {company} {current && <span className="ml-2 px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-xs font-medium">Atual</span>}
        </p>
        <p className="text-zinc-500 text-sm mb-2">{period}</p>
        {description && <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>}
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
  const [currentImage, setCurrentImage] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasMultipleImages]);

  // Auto-advance images when in view
  useEffect(() => {
    if (!isInView || !hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isInView, hasMultipleImages, imageCount]);

  const cardContent = (
    <>
      {imageList.length > 0 && (
        <div ref={cardRef as any} className="w-full overflow-hidden bg-white relative" style={{ maxHeight: '300px' }}>
          <Image
            key={currentImage}
            src={imageList[currentImage]}
            alt={`${title} - ${role} no ${company}`}
            width={400}
            height={300}
            className="w-full h-auto object-contain carousel-image-enter group-hover:brightness-110 group-hover:scale-105 transition-all duration-400"
          />
          {hasMultipleImages && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 bg-black/50 px-2 py-1.5 md:px-3 md:py-2 rounded-full" role="tablist" aria-label="Navegação de imagens do projeto">
              {imageList.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImage(i);
                  }}
                  role="tab"
                  aria-selected={i === currentImage}
                  aria-label={`Imagem ${i + 1} de ${imageList.length}`}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition cursor-pointer ${
                    i === currentImage ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-zinc-900 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-zinc-500 text-sm mb-3 font-medium">{role} • {company}</p>
        <p className="text-zinc-600 text-sm mb-4 leading-relaxed">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-2" role="list" aria-label="Tags do projeto">
            {tags.map((tag, i) => (
              <ProjectTag key={i} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </>
  );

  if (slug) {
    return (
      <Link
        href={`/projetos/${slug}`}
        className="group cursor-pointer bg-white rounded-xl hover:bg-white transition-all duration-400 ease-out overflow-hidden block shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-[1.02] hover:-translate-y-2"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      {cardContent}
    </div>
  );
}

function AchievementCard({ title, description, metric }: {
  title: string;
  description: string;
  metric?: string;
}) {
  return (
    <article className="bg-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-lg font-semibold mb-2 text-zinc-900">{title}</h3>
      <p className="text-zinc-600 text-sm mb-3 leading-relaxed">{description}</p>
      {metric && <p className="text-emerald-600 font-mono text-xs font-medium">{metric}</p>}
    </article>
  );
}

// Enhanced sections with scroll animations
function HeroSection() {
  const parallaxRef = useParallax();

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-black text-white relative overflow-hidden md:min-h-screen md:flex md:items-center animated-gradient-bg" aria-label="Introdução">
      {/* ponytail: background text repetitions - subtle, behind with parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 flex flex-col items-center justify-center gap-8 pointer-events-none select-none opacity-15 parallax-bg"
        aria-hidden="true"
      >
        <p className="text-8xl md:text-9xl font-bold text-zinc-600 whitespace-nowrap">DAVID LOPEZ</p>
        <p className="text-8xl md:text-9xl font-bold text-zinc-600 whitespace-nowrap">DAVID LOPEZ</p>
        <p className="text-8xl md:text-9xl font-bold text-zinc-600 whitespace-nowrap">DAVID LOPEZ</p>
        <p className="text-8xl md:text-9xl font-bold text-zinc-600 whitespace-nowrap">DAVID LOPEZ</p>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold mb-2 md:mb-4 leading-tight">
          HI, I AM
        </h1>
        <p className="text-4xl md:text-7xl lg:text-9xl font-bold mb-4 md:mb-6 leading-tight" aria-label="David López Giraldo">
          DAVID LÓPEZ GIRALDO
        </p>

        <div className="w-32 h-32 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-auto mb-4 md:mb-8 overflow-hidden rounded-full relative z-20">
          <Image
            src="/david-cubo.jpg"
            alt="David López Giraldo na Cubo - Product Manager"
            width={288}
            height={288}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <p className="text-zinc-300 text-sm md:text-lg mb-3 md:mb-6 relative z-10">{bio.location}</p>
        <p className="text-base md:text-xl lg:text-2xl text-zinc-200 max-w-2xl mx-auto leading-relaxed relative z-10 px-4">
          {bio.intro}
        </p>
      </div>
    </section>
  );
}

function TrajetoriaSection() {
  const headingRef = useScrollReveal();
  const timelineRef = useScrollReveal();

  return (
    <section id="trajetoria" className="py-20 md:py-28 bg-zinc-50" aria-labelledby="trajetoria-heading">
      <div className="container mx-auto px-6">
        <h2
          ref={headingRef as any}
          id="trajetoria-heading"
          className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 apple-fade"
        >
          Minha Trajetória
        </h2>
        <div
          ref={timelineRef as any}
          className="space-y-10 apple-stagger"
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

  return (
    <section id="projetos" className="py-20 md:py-28 bg-white" aria-labelledby="projetos-heading">
      <div className="container mx-auto px-6">
        <h2
          ref={headingRef as any}
          id="projetos-heading"
          className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 apple-clip"
        >
          Meus Projetos
        </h2>
        <div
          ref={gridRef as any}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 apple-stagger"
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

  return (
    <section className="py-20 md:py-28 bg-zinc-50" aria-labelledby="conquistas-heading">
      <div className="container mx-auto px-6">
        <h2
          ref={headingRef as any}
          id="conquistas-heading"
          className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 apple-scale"
        >
          Conquistas
        </h2>
        <div
          ref={gridRef as any}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 apple-stagger"
        >
          {achievements.map((achievement, i) => (
            <AchievementCard key={i} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}
