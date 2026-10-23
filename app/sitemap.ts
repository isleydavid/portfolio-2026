import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const BASE = "https://www.davidlopezgiraldo.com";

// ponytail: derivado de lib/data para nao dessincronizar quando um projeto
// entra ou sai. Sitemap estatico exigiria lembrar de editar os dois.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE, lastModified, changeFrequency: "monthly", priority: 1 },
    ...projects
      .filter((p) => p.slug)
      .map((p) => ({
        url: `${BASE}/projetos/${p.slug}`,
        lastModified,
        changeFrequency: "yearly" as const,
        priority: 0.8,
      })),
  ];
}
