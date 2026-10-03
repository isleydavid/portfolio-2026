"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { projectDetails } from "@/lib/project-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectDetails[slug];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselInView, setCarouselInView] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const heroRef = useScrollReveal();
  const strategyRef = useScrollReveal();
  const processRef = useScrollReveal();
  const solutionRef = useScrollReveal();
  const insightsRef = useScrollReveal();

  const solutionCount = project?.solution?.length || 0;
  const hasMultipleSlides = solutionCount > 1;

  // Autoplay carousel when in view
  useEffect(() => {
    if (!hasMultipleSlides) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setCarouselInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, [hasMultipleSlides]);

  useEffect(() => {
    if (!carouselInView || !hasMultipleSlides) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === solutionCount - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [carouselInView, hasMultipleSlides, solutionCount]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-4">Projeto não encontrado</h1>
          <Link href="/" className="text-zinc-600 hover:text-zinc-900">
            ← Voltar para home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />

      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-zinc-200">
        <nav className="container mx-auto px-6 py-4" aria-label="Navegação">
          <Link href="/" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
            ← Voltar
          </Link>
        </nav>
      </header>

      <main id="main-content">

      {/* Hero */}
      <section ref={heroRef as any} className="pt-32 pb-16 container mx-auto px-6 reveal relative">
        {/* Foto David - aparece em TODOS os projetos */}
        <button
          onClick={() => setIsPhotoModalOpen(true)}
          className="absolute top-32 right-6 w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-zinc-200 hover:scale-105 transition-transform duration-300 cursor-pointer group"
          aria-label="Ver foto de David López Giraldo em tamanho maior"
        >
          <Image
            src="/david-cubo.jpg"
            alt="David López Giraldo - Product Manager"
            width={288}
            height={288}
            className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
            quality={95}
          />
        </button>

        <p className="text-zinc-500 text-sm mb-2">{project.role} • {project.company}</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-zinc-900">{project.title}</h1>
        <p className="text-xl text-zinc-700 max-w-3xl">{project.description}</p>
      </section>

      {/* Modal da Foto */}
      {isPhotoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div className="relative max-w-2xl w-full">
            {/* Botão Fechar */}
            <button
              onClick={() => setIsPhotoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-zinc-300 transition-colors duration-300 flex items-center gap-2 text-lg font-medium"
              aria-label="Fechar modal"
            >
              <span>Fechar</span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Foto em Alta Resolução */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/david-cubo.jpg"
                alt="David López Giraldo - Product Manager na Cubo Tecnologia"
                width={800}
                height={800}
                className="w-full h-auto"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      )}


      {/* Strategy */}
      {project.strategy && (
        <section className="py-16 bg-zinc-50">
          <div className="container mx-auto px-6">
            <h2 ref={strategyRef as any} className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 reveal">
              Strategy
            </h2>
            <div className="grid md:grid-cols-3 gap-8 stagger-children">
              {project.strategy.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-zinc-200">
                  <h3 className="text-xl font-semibold mb-3 text-zinc-900">{item.title}</h3>
                  <p className="text-zinc-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {project.process && (
        <section className="py-16 bg-white" aria-labelledby="process-heading">
          <div className="container mx-auto px-6">
            <h2 ref={processRef as any} id="process-heading" className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 reveal">
              {project.process.title}
            </h2>
            <p className="text-lg text-zinc-700 mb-12 max-w-4xl">{project.process.description}</p>
            <div className="grid md:grid-cols-2 gap-8">
              {project.process.images.map((image, i) => (
                <figure key={i} className="rounded-xl overflow-hidden border border-zinc-200 bg-zinc-50">
                  <Image
                    src={image}
                    alt={`Processo ${i + 1}: ${
                      slug === "legislativo-conectado"
                        ? (i === 0 ? "Squad Desenvolvimento usando Scrum" : "Squad Design usando Kanban")
                        : slug === "atlas-dashboard"
                        ? (i === 0 ? "Linear Board de gerenciamento" : i === 1 ? "Dashboard PLD/AML no M4 Lab" : "Comunicação COAF no M4 Lab")
                        : `Board de gerenciamento ${i + 1}`
                    }`}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <figcaption className="p-4 bg-white border-t border-zinc-200">
                    <p className="text-sm font-semibold text-zinc-900">
                      {slug === "legislativo-conectado"
                        ? (i === 0 ? "Squad Desenvolvimento (Scrum)" : "Squad Design (Kanban)")
                        : slug === "atlas-dashboard"
                        ? (i === 0 ? "Linear Board" : i === 1 ? "M4 Lab - PLD/AML Dashboard" : "M4 Lab - Comunicação COAF")
                        : `Board ${i + 1}`
                      }
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solution */}
      {project.solution && (
        <section className="py-16" aria-labelledby="solution-heading">
          <div className="container mx-auto px-6">
            <h2 ref={solutionRef as any} id="solution-heading" className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 reveal">
              Solution
            </h2>
            <div ref={carouselRef as any} className="relative max-w-5xl mx-auto reveal-scale" role="region" aria-label="Galeria de soluções do projeto" aria-live="polite">
              {/* ponytail: carousel simples, CSS-only navigation */}
              <div className="rounded-xl overflow-hidden border border-zinc-200 bg-white">
                <div className="relative" style={{ maxHeight: '600px' }}>
                  <Image
                    key={currentSlide}
                    src={project.solution[currentSlide]}
                    alt={`${project.title} - Solução ${currentSlide + 1} de ${project.solution.length}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain mx-auto carousel-image-enter"
                    priority={currentSlide === 0}
                  />
                </div>
              </div>

              {project.solution.length > 1 && (
                <>
                  {/* Navigation arrows */}
                  <button
                    onClick={() => setCurrentSlide((prev) => prev === 0 ? project.solution!.length - 1 : prev - 1)}
                    aria-label="Slide anterior"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition min-w-[48px] min-h-[48px] flex items-center justify-center"
                  >
                    <span aria-hidden="true">←</span>
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => prev === project.solution!.length - 1 ? 0 : prev + 1)}
                    aria-label="Próximo slide"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition min-w-[48px] min-h-[48px] flex items-center justify-center"
                  >
                    <span aria-hidden="true">→</span>
                  </button>

                  {/* Dots */}
                  <div className="flex justify-center gap-1.5 md:gap-2 mt-6" role="tablist" aria-label="Navegação de slides">
                    {project.solution.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        role="tab"
                        aria-selected={i === currentSlide}
                        aria-label={`Ir para slide ${i + 1} de ${project.solution?.length || 0}`}
                        className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition cursor-pointer ${
                          i === currentSlide ? "bg-zinc-900" : "bg-zinc-300"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Insights */}
      {project.insights && (
        <section className="py-16 bg-zinc-50">
          <div className="container mx-auto px-6">
            <h2 ref={insightsRef as any} className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900 reveal">
              Insights
            </h2>
            <div className="grid md:grid-cols-2 gap-8 stagger-children">
              {project.insights.map((insight, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border border-zinc-200">
                  <p className="text-4xl font-bold text-emerald-600 mb-4">{insight.metric}</p>
                  <p className="text-lg text-zinc-700">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      </main>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-zinc-200">
        <nav className="container mx-auto px-6 text-center" aria-label="Navegação do rodapé">
          <Link href="/#projetos" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
            ← Ver mais projetos
          </Link>
        </nav>
      </footer>

      <BackToTop />
    </div>
  );
}
