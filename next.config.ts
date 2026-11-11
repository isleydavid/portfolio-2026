import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Os wireframes dos projetos sigilosos sao SVG. O site nao aceita upload:
    // todo SVG servido esta versionado em public/, entao a origem e o proprio
    // repositorio. A CSP abaixo sandboxa o arquivo servido mesmo assim.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
