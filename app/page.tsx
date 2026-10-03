"use client";
import Link from "next/link";
import { bio, experiences, projects, achievements, skills } from "@/lib/data";
import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-zinc-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-zinc-900">Isley Giraldo</Link>
          <div className="flex gap-6">
            <Link href="#trajetoria" className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300">Trajetória</Link>
            <Link href="#projetos" className="text-zinc-700 hover:text-zinc-900 transition-colors duration-300">Projetos</Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-zinc-500 text-xs uppercase tracking-wider mb-4">HI, I AM</p>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-2 leading-none text-zinc-900">
            {bio.name.split(' ')[0]} {bio.name.split(' ')[1]}
          </h1>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none text-zinc-900">
            {bio.name.split(' ').slice(2).join(' ')}
          </h1>
          {/* ponytail: placeholder image centralizada */}
          <div className="w-48 h-48 md:w-64 md:h-64 bg-zinc-100 rounded-full mx-auto mb-8"></div>
          <p className="text-zinc-600 text-lg mb-6">{bio.location}</p>
          <p className="text-xl md:text-2xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
            {bio.intro}
          </p>
        </div>
      </section>

      {/* Trajetória */}
      <section id="trajetoria" className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-zinc-900">Minha Trajetória</h2>
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-zinc-900">Meus Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Conquistas */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-zinc-900">Conquistas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {achievements.map((achievement, i) => (
              <AchievementCard key={i} {...achievement} />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-zinc-900">Sobre Mim</h2>
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

      {/* Footer */}
      <footer className="py-12 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-600">&copy; 2026 {bio.name}</p>
            <div className="flex gap-6">
              <a href={`mailto:${bio.email}`} className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
                Email
              </a>
              <a href="https://linkedin.com/in/isley-giraldo" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
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
  const imageList = images || (image ? [image] : []);
  const hasMultipleImages = imageList.length > 1;

  const CardWrapper = slug ? Link : "div";
  const wrapperProps = slug ? { href: `/projetos/${slug}` } : {};

  return (
    <CardWrapper {...wrapperProps} className="group cursor-pointer bg-zinc-50 rounded-xl hover:bg-zinc-100 hover:-translate-y-1 transition-all duration-300 ease-out border border-zinc-200 overflow-hidden block">
      {imageList.length > 0 && (
        <div className="w-full overflow-hidden bg-white relative" style={{ maxHeight: '300px' }}>
          <img src={imageList[currentImage]} alt={title} className="w-full h-auto object-contain" />
          {hasMultipleImages && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 px-3 py-2 rounded-full">
              {imageList.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(i);
                  }}
                  className={`w-2 h-2 rounded-full transition ${
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
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="text-xs bg-white text-zinc-700 px-2 py-1 rounded border border-zinc-200 group-hover:bg-zinc-50 transition-colors duration-300">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </CardWrapper>
  );
}

function AchievementCard({ title, description, metric }: {
  title: string;
  description: string;
  metric?: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl hover:bg-zinc-50 hover:scale-105 transition-all duration-300 ease-out border border-zinc-200">
      <h3 className="text-lg font-semibold mb-2 text-zinc-900">{title}</h3>
      <p className="text-zinc-600 text-sm mb-3">{description}</p>
      {metric && <p className="text-emerald-600 font-mono text-xs">{metric}</p>}
    </div>
  );
}
