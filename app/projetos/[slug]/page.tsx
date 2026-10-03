"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { projectDetails } from "@/lib/project-data";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectDetails[slug];
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-zinc-200">
        <nav className="container mx-auto px-6 py-4">
          <Link href="/" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
            ← Voltar
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 container mx-auto px-6">
        <p className="text-zinc-500 text-sm mb-2">{project.role} • {project.company}</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-zinc-900">{project.title}</h1>
        <p className="text-xl text-zinc-700 max-w-3xl">{project.description}</p>
      </section>

      {/* Strategy */}
      {project.strategy && (
        <section className="py-16 bg-zinc-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900">Strategy</h2>
            <div className="grid md:grid-cols-3 gap-8">
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900">{project.process.title}</h2>
            <p className="text-lg text-zinc-700 mb-12 max-w-4xl">{project.process.description}</p>
            <div className="grid md:grid-cols-2 gap-8">
              {project.process.images.map((image, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-zinc-200 bg-zinc-50">
                  <img src={image} alt={`Process ${i + 1}`} className="w-full h-auto" />
                  <div className="p-4 bg-white border-t border-zinc-200">
                    <p className="text-sm font-semibold text-zinc-900">
                      {slug === "legislativo-conectado"
                        ? (i === 0 ? "Squad Desenvolvimento (Scrum)" : "Squad Design (Kanban)")
                        : slug === "atlas-dashboard"
                        ? (i === 0 ? "Linear Board" : i === 1 ? "M4 Lab - PLD/AML Dashboard" : "M4 Lab - Comunicação COAF")
                        : `Board ${i + 1}`
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solution */}
      {project.solution && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900">Solution</h2>
            <div className="relative max-w-5xl mx-auto">
              {/* ponytail: carousel simples, CSS-only navigation */}
              <div className="rounded-xl overflow-hidden border border-zinc-200 bg-white">
                <div className="relative" style={{ maxHeight: '600px' }}>
                  <img
                    src={project.solution[currentSlide]}
                    alt={`${project.title} - ${currentSlide + 1}`}
                    className="w-full h-auto object-contain mx-auto"
                  />
                </div>
              </div>

              {project.solution.length > 1 && (
                <>
                  {/* Navigation arrows */}
                  <button
                    onClick={() => setCurrentSlide((prev) => prev === 0 ? project.solution!.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => prev === project.solution!.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
                  >
                    →
                  </button>

                  {/* Dots */}
                  <div className="flex justify-center gap-2 mt-6">
                    {project.solution.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-3 h-3 rounded-full transition ${
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-zinc-900">Insights</h2>
            <div className="grid md:grid-cols-2 gap-8">
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

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-zinc-200">
        <div className="container mx-auto px-6 text-center">
          <Link href="/#projetos" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
            ← Ver mais projetos
          </Link>
        </div>
      </footer>
    </main>
  );
}
