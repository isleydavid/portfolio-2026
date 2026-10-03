"use client";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export function InfiniteCarousel() {
  // Duplicar projetos para scroll infinito
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-center text-zinc-900">Projetos em Destaque</h3>
      </div>

      <div className="relative">
        {/* Gradientes de fade nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Linha 1 - Scroll para direita */}
        <div className="flex gap-6 mb-6 animate-scroll-right hover:pause-animation">
          {duplicatedProjects.map((project, i) => (
            <div
              key={`row1-${i}`}
              className="flex-shrink-0 w-80 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-400 overflow-hidden group cursor-pointer"
            >
              {project.images && project.images[0] && (
                <div className="w-full h-48 overflow-hidden bg-zinc-100">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={320}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-400"
                  />
                </div>
              )}
              <div className="p-5">
                <h4 className="font-semibold text-zinc-900 text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-zinc-500 text-xs">{project.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Linha 2 - Scroll para esquerda */}
        <div className="flex gap-6 animate-scroll-left hover:pause-animation">
          {duplicatedProjects.map((project, i) => (
            <div
              key={`row2-${i}`}
              className="flex-shrink-0 w-80 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-400 overflow-hidden group cursor-pointer"
            >
              {project.images && project.images[0] && (
                <div className="w-full h-48 overflow-hidden bg-zinc-100">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={320}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-400"
                  />
                </div>
              )}
              <div className="p-5">
                <h4 className="font-semibold text-zinc-900 text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-zinc-500 text-xs">{project.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
