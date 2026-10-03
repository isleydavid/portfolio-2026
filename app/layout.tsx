import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
