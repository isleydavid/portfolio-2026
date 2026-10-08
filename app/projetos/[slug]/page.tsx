"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { projectDetails } from "@/lib/project-data";
import { projects } from "@/lib/data";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectDetails[slug];
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const { t } = useLanguage();

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-4">{t("projectDetail.notFound")}</h1>
          <Link href="/" className="text-zinc-600 hover:text-zinc-900">{t("projectDetail.backHome")}</Link>
        </div>
      </div>
    );
  }

  const metadata = {
    industry: project.industry || "Tecnologia",
    services: project.tags || ["Product Management", "UX/UI", "Desenvolvimento"],
    year: "2025-2026"
  };

  const testimonial = {
    quote: project.testimonial?.quote || "A plataforma transformou completamente nossa gestão. O impacto foi extraordinário, superando todas as nossas expectativas de modernização.",
    author: project.testimonial?.author || "Cliente",
    role: project.testimonial?.role || "Gestão",
    company: project.company,
    photo: project.testimonial?.photo || "/david-cubo.jpg"
  };

  const processStages = project.process?.stages || project.strategy || [
    { title: "Discovery", description: "Análise profunda das necessidades e objetivos do projeto, mapeamento de stakeholders e levantamento de requisitos técnicos e de negócio." },
    { title: "Design", description: "Criação de interfaces e experiências centradas no usuário, com foco em acessibilidade, usabilidade e alinhamento com as diretrizes da plataforma." },
    { title: "Development", description: "Implementação técnica com as melhores práticas de engenharia, testes automatizados, revisão de código e integração contínua." },
    { title: "Launch", description: "Deploy coordenado, monitoramento de métricas em tempo real, coleta de feedback dos usuários e ajustes incrementais." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />

      <main className="pt-16 md:pt-20">
        {/* 1. Título + CTA + Metadata */}
        <section className="container mx-auto px-6 py-12 md:py-16">
          <div className="max-w-4xl">
            {/* Título */}
            <h1 className="text-3xl md:text-5xl font-medium text-zinc-900 mb-6 md:mb-8 break-words uppercase tracking-[-0.02em] leading-[1.1]">
              {project.title}
            </h1>

            {/* CTA Button (se aplicável) */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg mb-8 uppercase tracking-wider text-sm"
              >
                {t("projectDetail.viewLive")}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {/* Metadata - Snowhouse Style */}
            <div className="space-y-6 mb-10">
              {/* INDUSTRY */}
              <div>
                <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">{t("projectDetail.industry")}</h3>
                <p className="text-sm text-zinc-700">{metadata.industry}</p>
              </div>

              {/* SERVICES */}
              <div>
                <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">{t("projectDetail.services")}</h3>
                <div className="flex flex-wrap gap-2">
                  {metadata.services.map((service, i) => (
                    <span key={i} className="px-3 py-1.5 bg-red-500 text-white rounded text-xs font-medium uppercase tracking-wider">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Overview */}
            <div className="space-y-6 text-zinc-700">
              <p className="text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
              {project.challenge && (
                <p className="text-base leading-relaxed">
                  <strong className="font-medium text-zinc-900">Desafio:</strong> {project.challenge}
                </p>
              )}
              {project.solution && project.solution[0] && (
                <p className="text-base leading-relaxed">
                  {project.solution[0]}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* 6. Grid Gallery 3x3 */}
        {project.solution && Array.isArray(project.solution) && project.solution.length > 0 && (
          <section className="container mx-auto px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {project.solution.map((image, i) => (
                <div key={i} className="bg-zinc-100 rounded-xl overflow-hidden group">
                  <Image
                    src={image}
                    alt={`${project.title} - Screenshot ${i + 1}`}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Testimonial - Snowhouse Style */}
        <section className="py-12 md:py-16 bg-zinc-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Quote */}
              <blockquote className="text-base md:text-lg text-zinc-900 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info - Foto ao lado do nome */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200 flex-shrink-0">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-zinc-900 uppercase text-sm tracking-wide">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-zinc-600 uppercase tracking-wider">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Process Stages */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 mb-10 text-center uppercase tracking-[-0.02em]">
              {t("projectDetail.process")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {processStages.map((stage, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-medium mx-auto mb-4 shadow-md">
                    {i + 1}
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-zinc-900 mb-2">{stage.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8.5 Process Images/Screenshots */}
        {project.process && project.process.images && project.process.images.length > 0 && (
          <section className="py-12 md:py-16 bg-zinc-50">
            <div className="container mx-auto px-6">
              <h3 className="text-2xl md:text-3xl font-medium text-zinc-900 mb-6 text-center uppercase tracking-[-0.02em]">
                {project.process.title || "Gestão de Demandas"}
              </h3>
              {project.process.description && (
                <p className="text-zinc-600 text-center mb-10 max-w-4xl mx-auto leading-relaxed text-sm md:text-base">
                  {project.process.description}
                </p>
              )}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                {project.process.images.map((image, i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                    <Image
                      src={image}
                      alt={`Processo ${i + 1}`}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 9. Outros Projetos */}
        <section className="py-12 md:py-16 bg-zinc-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 mb-10 uppercase tracking-[-0.02em]">Outros Projetos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects
                .filter(p => p.slug && p.slug !== slug)
                .slice(0, 3)
                .map((otherProject, i) => (
                  <Link
                    key={i}
                    href={`/projetos/${otherProject.slug}`}
                    prefetch={true}
                    className="group block bg-white rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-100 transition-all duration-300"
                  >
                    {/* Imagem */}
                    <div className="aspect-video bg-zinc-100 overflow-hidden">
                      {otherProject.images && otherProject.images[0] ? (
                        <Image
                          src={otherProject.images[0]}
                          alt={otherProject.title}
                          width={600}
                          height={400}
                          loading="lazy"
                          className="w-full h-full object-contain group-hover:brightness-110 group-hover:scale-105 transition-all duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-zinc-100 flex items-center justify-center">
                          <span className="text-zinc-300 font-medium text-2xl">{otherProject.title.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    {/* Conteúdo */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                        {otherProject.title}
                      </h3>
                      <p className="text-zinc-500 text-sm mb-3 font-medium">
                        {otherProject.role} • {otherProject.company}
                      </p>
                      <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3">
                        {otherProject.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section - Igual Home */}
      <section className="py-20 md:py-32 bg-zinc-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Título CTA + Botão */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 bg-white rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 md:mb-0">
                EXCITED? LET'S GET MOVING.
              </h2>
              <a
                href="mailto:idlopezgiraldo.dlg@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                SCHEDULE A CALL
              </a>
            </div>

            {/* Ícones Redes Sociais */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <a
                href="https://www.linkedin.com/in/davidlopezgiraldo/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-zinc-200 rounded-3xl flex items-center justify-center hover:bg-zinc-300 transition-all duration-300 group"
              >
                <svg className="w-20 h-20 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
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
                  <a href="/#trajetoria" className="text-zinc-700 hover:text-zinc-900 transition-colors font-medium">TRAJETÓRIA</a>
                  <a href="/#projetos" className="text-zinc-700 hover:text-zinc-900 transition-colors font-medium">PROJETOS</a>
                  <a href="mailto:idlopezgiraldo.dlg@gmail.com" className="text-zinc-700 hover:text-zinc-900 transition-colors font-medium">CONTATO</a>
                </div>
                <p className="text-zinc-500">© 2026 David López Giraldo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer com Links */}
      <footer className="py-8 bg-white border-t border-zinc-200">
        <div className="container mx-auto px-6">
          <nav className="text-center mb-6">
            <Link href="/#projetos" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
              ← Ver mais projetos
            </Link>
          </nav>

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

      {/* Modal Foto David */}
      {isPhotoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div className="relative max-w-2xl w-full">
            <button
              onClick={() => setIsPhotoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-zinc-300 transition-colors flex items-center gap-2"
            >
              <span>Fechar</span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <Image
                src="/david-cubo.jpg"
                alt="David López Giraldo"
                width={800}
                height={800}
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
