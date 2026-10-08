"use client";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export function InfiniteCarousel() {
  // Duplicar projetos para scroll infinito
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <div className="w-full overflow-hidden bg-white py-8 md:py-12">
      <div className="relative">
        {/* Gradientes de fade nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Linha 1 - Scroll para direita */}
        <div className="flex gap-4 md:gap-6 mb-4 md:mb-6 animate-scroll-right-mobile md:animate-scroll-right hover:pause-animation">
          {duplicatedProjects.map((project, i) => (
            <div
              key={`row1-${i}`}
              className="flex-shrink-0 w-48 md:w-80 bg-white rounded-lg md:rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-400 overflow-hidden group cursor-pointer"
            >
              {project.images && project.images[0] && (
                <div className="w-full h-28 md:h-48 overflow-hidden bg-zinc-100">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={320}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-400"
                  />
                </div>
              )}
              <div className="p-3 md:p-5">
                <h4 className="font-semibold text-zinc-900 text-xs md:text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-zinc-500 text-[10px] md:text-xs">{project.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Linha 2 - Scroll para esquerda (mostra segunda imagem se disponível) */}
        <div className="flex gap-4 md:gap-6 animate-scroll-left-mobile md:animate-scroll-left hover:pause-animation">
          {duplicatedProjects.map((project, i) => {
            // Se tem segunda imagem, mostra ela. Senão, mostra a primeira
            const imageIndex = project.images && project.images[1] ? 1 : 0;
            const imageToShow = project.images && project.images[imageIndex];

            return (
              <div
                key={`row2-${i}`}
                className="flex-shrink-0 w-48 md:w-80 bg-white rounded-lg md:rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-400 overflow-hidden group cursor-pointer"
              >
                {imageToShow && (
                  <div className="w-full h-28 md:h-48 overflow-hidden bg-zinc-100">
                    <Image
                      src={imageToShow}
                      alt={project.title}
                      width={320}
                      height={192}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-400"
                    />
                  </div>
                )}
                <div className="p-3 md:p-5">
                  <h4 className="font-semibold text-zinc-900 text-xs md:text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-zinc-500 text-[10px] md:text-xs">{project.company}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
