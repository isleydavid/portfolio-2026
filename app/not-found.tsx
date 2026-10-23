"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

// Mesma UI que vivia dentro da pagina de projeto. Agora que o notFound() do
// servidor devolve 404 de verdade, ela precisa morar aqui — senao o Next cai
// na pagina 404 crua, sem marca e sem traducao.
export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-zinc-900 mb-4">
          {t("projectDetail.notFound")}
        </h1>
        <Link href="/" className="text-zinc-600 hover:text-zinc-900">
          {t("projectDetail.backHome")}
        </Link>
      </div>
    </div>
  );
}
