import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectDetails } from "@/lib/project-data";
import { projects } from "@/lib/data";
import ProjectView from "./ProjectView";

// Pre-renderiza as 8 rotas no build em vez de resolver sob demanda.
export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/projetos/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projectDetails[slug];
  if (!project) return {};

  const title = `${project.title} — ${project.role} | David López Giraldo`;
  // Limite pratico do snippet do Google; corta em palavra inteira.
  const description =
    project.description.length > 155
      ? project.description.slice(0, 155).replace(/\s+\S*$/, "") + "…"
      : project.description;
  // Primeira imagem do projeto vira o preview social da pagina.
  const image = projects.find((p) => p.slug === slug)?.images?.[0];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function Page(props: PageProps<"/projetos/[slug]">) {
  const { slug } = await props.params;
  // notFound() devolve 404 de verdade. Antes a pagina respondia 200 com um
  // aviso de "nao encontrado", o que o Google le como soft 404 e indexa.
  if (!projectDetails[slug]) notFound();

  return <ProjectView slug={slug} />;
}
