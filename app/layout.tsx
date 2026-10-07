import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isley Giraldo - Product Manager & UX Leader",
  description: "Product Manager especializado em produtos digitais B2B, B2G e iGaming. Experiência em liderança de squads, metodologias ágeis e IA generativa.",
  metadataBase: new URL("https://isleygiraldo.com"),
  openGraph: {
    title: "Isley Giraldo - Product Manager & UX Leader",
    description: "Product Manager especializado em produtos digitais B2B, B2G e iGaming.",
    type: "website",
  },
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
