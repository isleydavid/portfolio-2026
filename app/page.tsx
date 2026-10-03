"use client";
import Link from "next/link";
import Image from "next/image";
import { bio, experiences, projects, achievements, skills } from "@/lib/data";
import { useState, useEffect, useRef } from "react";
import { useScrollReveal, useParallax } from "@/hooks/useScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { BottomNav } from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
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

        {/* Projetos */}
        <ProjetosSection />

        {/* Conquistas */}
        <ConquistasSection />

        {/* Sobre Mim */}
        <section className="py-24 bg-white" aria-labelledby="sobre-heading">
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
      <footer className="py-12 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-600">&copy; 2026 {bio.name}</p>
            <nav aria-label="Links de contato">
              <ul className="flex gap-6 list-none m-0 p-0">
                <li>
                  <a href={`mailto:${bio.email}`} className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/isley-giraldo" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
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
      <div className="text-zinc-500 font-mono text-sm w-20">{year}</div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-1 text-zinc-900">{title}</h3>
        <p className="text-zinc-600 mb-2">
          {company} {current && <span className="text-emerald-600">(Atual)</span>}
        </p>
        <p className="text-zinc-500 text-sm mb-1">{period}</p>
        {description && <p className="text-zinc-600 text-sm">{description}</p>}
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
            className="w-full h-auto object-contain carousel-image-enter"
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
        <h3 className="text-xl font-semibold mb-2 text-zinc-900 group-hover:text-zinc-700 transition-colors duration-300">{title}</h3>
        <p className="text-zinc-600 text-sm mb-3">{role} • {company}</p>
        <p className="text-zinc-600 text-sm mb-4">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-2" role="list" aria-label="Tags do projeto">
            {tags.map((tag, i) => (
              <span key={i} role="listitem" className="text-xs bg-white text-zinc-700 px-2 py-1 rounded border border-zinc-200 group-hover:bg-zinc-50 transition-colors duration-300">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  if (slug) {
    return (
      <Link href={`/projetos/${slug}`} className="group cursor-pointer bg-zinc-50 rounded-xl hover:bg-zinc-100 motion-safe:hover:-translate-y-1 transition-all duration-300 ease-out border border-zinc-200 overflow-hidden block">
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="group bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden">
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
    <article className="bg-white p-6 rounded-xl hover:bg-zinc-50 motion-safe:hover:scale-105 transition-all duration-300 ease-out border border-zinc-200">
      <h3 className="text-lg font-semibold mb-2 text-zinc-900">{title}</h3>
      <p className="text-zinc-600 text-sm mb-3">{description}</p>
      {metric && <p className="text-emerald-600 font-mono text-xs">{metric}</p>}
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
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-3 md:mb-4 leading-snug tracking-wide">
          HI, I AM
        </h1>
        <p className="text-5xl md:text-7xl lg:text-9xl font-bold mb-2 leading-tight" aria-label="David López Giraldo">
          DAVID LÓPEZ
        </p>
        <p className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 md:mb-12 leading-tight">
          GIRALDO
        </p>

        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-auto mb-6 md:mb-8 overflow-hidden rounded-full relative z-20">
          <Image
            src="/david-cubo.jpg"
            alt="David López Giraldo na Cubo - Product Manager"
            width={288}
            height={288}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <p className="text-zinc-300 text-base md:text-lg mb-4 md:mb-6 relative z-10">{bio.location}</p>
        <p className="text-lg md:text-xl lg:text-2xl text-zinc-200 max-w-2xl mx-auto leading-relaxed relative z-10 px-4">
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
    <section id="trajetoria" className="py-24 bg-zinc-50" aria-labelledby="trajetoria-heading">
      <div className="container mx-auto px-6">
        <h2
          ref={headingRef as any}
          id="trajetoria-heading"
          className="text-4xl md:text-5xl font-bold mb-16 text-zinc-900 apple-fade"
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
    <section id="projetos" className="py-24 bg-white" aria-labelledby="projetos-heading">
      <div className="container mx-auto px-6">
        <h2
          ref={headingRef as any}
          id="projetos-heading"
          className="text-4xl md:text-5xl font-bold mb-16 text-zinc-900 apple-clip"
        >
          Meus Projetos
        </h2>
        <div
          ref={gridRef as any}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 apple-stagger"
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
    <section className="py-24 bg-zinc-50" aria-labelledby="conquistas-heading">
      <div className="container mx-auto px-6">
        <h2
          ref={headingRef as any}
          id="conquistas-heading"
          className="text-4xl md:text-5xl font-bold mb-16 text-zinc-900 apple-scale"
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
