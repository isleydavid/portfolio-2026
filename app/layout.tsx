import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

// ponytail: Inter styled as Aeonik until real fonts added to /public/fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "David López Giraldo - Product Manager & UX Leader",
  description: "Product Manager especializado em produtos digitais B2B, B2G e iGaming. Experiência em liderança de squads, metodologias ágeis e IA generativa.",
  metadataBase: new URL("https://www.davidlopezgiraldo.com"),
  openGraph: {
    title: "David López Giraldo - Product Manager & UX Leader",
    description: "Product Manager especializado em produtos digitais B2B, B2G e iGaming.",
    type: "website",
    // ponytail: foto que ja existe no site. 1024x768 contra os 1200x630 ideais,
    // entao as redes cortam um pouco em cima e embaixo. Para um card proprio,
    // app/opengraph-image.tsx com ImageResponse gera no tamanho exato.
    images: ["/david-office.png"],
  },
  // Sem isso o Next emite summary, que mostra miniatura quadrada.
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

// Alimenta painel de conhecimento e resultado rico. sameAs sao os perfis que
// ja estao linkados no rodape.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David López Giraldo",
  jobTitle: "Product Manager & UX Leader",
  url: "https://www.davidlopezgiraldo.com",
  image: "https://www.davidlopezgiraldo.com/david-office.png",
  email: "idlopezgiraldo.dlg@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "João Pessoa", addressCountry: "BR" },
  sameAs: [
    "https://www.linkedin.com/in/davidlopezgiraldo/",
    "https://www.instagram.com/davidlopezgiraldo_/",
    "https://www.youtube.com/@davidlopezgiraldo7612/featured",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
