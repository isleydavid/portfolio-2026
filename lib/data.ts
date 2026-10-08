export interface Experience {
  year: string;
  period: string;
  title: string;
  company: string;
  description?: string;
  current?: boolean;
}

export interface Project {
  title: string;
  role: string;
  company: string;
  description: string;
  tags?: string[];
  image?: string;
  images?: string[];
  slug?: string;
  category?: "ux-ui" | "dev" | "b2g" | "b2b" | "produto" | "agile";
}

export interface Achievement {
  title: string;
  description: string;
  metric?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const experiences: Experience[] = [
  {
    year: "2026",
    period: "jun/2026 – atual",
    title: "Product Manager",
    company: "Lifters / BPX",
    description: "Gestão de produto na plataforma web Orion para Vai de Bet e BetPix. Padronização de fluxos, CMS backoffice, responsividade, coordenação Atlas/Sportsbook.",
    current: true
  },
  {
    year: "2025",
    period: "ago/2025 – atual",
    title: "Gerente de Produto",
    company: "Cubo Tecnologia — Legislativo Conectado",
    description: "SaaS B2B2G do zero até 6 prefeituras ativas com 2M+ cidadãos. 13 produtos integrados via API.",
    current: true
  },
  {
    year: "2023",
    period: "jan/2023 – ago/2025",
    title: "Gerente de Projetos Ágeis / Scrum Master",
    company: "Cubo Tecnologia — Legislativo Conectado",
    description: "Liderança de 2 squads multidisciplinares (~15 pessoas). Aplicação de IA generativa em discovery e PRDs."
  },
  {
    year: "2022",
    period: "ago/2022 – abr/2023",
    title: "Product Owner",
    company: "UBTech Office / Unipê — PMERJ",
    description: "Fábrica com 5 squads (~25 pessoas) entregando sistemas críticos para Polícia Militar."
  },
  {
    year: "2022",
    period: "jan/2022 – ago/2022",
    title: "Scrum Master",
    company: "UBTech Office / Unipê — PMERJ",
    description: "Implantação de Scrum e Kanban em projetos estratégicos."
  }
];

export const projects: Project[] = [
  {
    title: "Legislativo Conectado",
    role: "Gerente de Produto",
    company: "Cubo Tecnologia",
    description: "SaaS B2B2G com 13 módulos integrados: Portal do Cidadão, Monitor Legislativo, Enquetes, Audiências Públicas, Teleatendimento, Dashboards. Do zero até 6 prefeituras e 2M+ cidadãos.",
    tags: ["SaaS", "B2G", "Product Management", "APIs"],
    images: ["/projects/legislativo-conectado.png", "/projects/legislativo-conectado-2.png"],
    slug: "legislativo-conectado"
  },
  {
    title: "Cidade Conectada",
    role: "Gerente de Projetos",
    company: "Cubo Tecnologia",
    description: "Plataforma municipal com 600+ serviços digitais. Aplicativo white-label para cidadãos, Portal do Servidor e Dashboard do Prefeito.",
    tags: ["GovTech", "White-label", "Mobile"],
    slug: "cidade-conectada",
    images: ["/projects/cidade-conectada.png", "/projects/cidade-conectada-2.png", "/projects/cidade-conectada-3.png"]
  },
  {
    title: "Dashboard do Prefeito",
    role: "Gerente de Produto",
    company: "Cubo Tecnologia",
    description: "Dashboard executivo em tempo real com monitoramento completo de solicitações, mapa de demandas, gráfico da cidade, avaliações e baixo rendimento por setor.",
    tags: ["Dashboard", "Analytics", "Real-time"],
    slug: "dashboard-prefeito",
    images: ["/projects/dashboard-prefeito-1.png", "/projects/dashboard-prefeito-2.png", "/projects/dashboard-prefeito-3.png"]
  },
  {
    title: "Processo Eletrônico",
    role: "Gerente de Produto",
    company: "Cubo Tecnologia",
    description: "Sistema completo de tramitação de processos administrativos digitais eliminando papel. Gestão de tipos, modelos, inbox pessoal/setor, despachos e timeline.",
    tags: ["GovTech", "Workflow", "Paperless"],
    slug: "processo-eletronico",
    images: ["/projects/processo-eletronico-1.png", "/projects/processo-eletronico-2.png", "/projects/processo-eletronico-3.png"]
  },
  {
    title: "Teleatendimento",
    role: "Gerente de Produto",
    company: "Cubo Tecnologia",
    description: "Sistema de teleatendimento com videochamada, Libras premiado nacionalmente, gestão de filas inteligente e documentação automática integrada ao app municipal.",
    tags: ["WebRTC", "Acessibilidade", "Real-time"],
    slug: "teleatendimento",
    images: ["/projects/teleatendimento-1.png", "/projects/teleatendimento-2.png", "/projects/teleatendimento-4.png"]
  },
  {
    title: "Chat IA Municipal",
    role: "Product Manager",
    company: "Cubo Tecnologia",
    description: "Assistente IA contextual que permite cidadãos acessarem todo ecossistema municipal via conversa. Configuração de agentes, bloqueio de assuntos irrelevantes e adaptável a qualquer contexto GovTech.",
    tags: ["IA Generativa", "ChatBot", "NLP"],
    slug: "chat-ia-municipal",
    images: [
      "/projects/chat-ia-1.png",
      "/projects/chat-ia-2.png",
      "/projects/chat-ia-3.png",
      "/projects/chat-ia-4.png",
      "/projects/chat-ia-5.png",
      "/projects/chat-ia-6.png",
      "/projects/chat-ia-7.png",
      "/projects/chat-ia-8.png"
    ]
  },
  {
    title: "Atlas Dashboard Financeiro",
    role: "Product Manager",
    company: "BPX / Lifters",
    description: "Sistema financeiro complexo com dados ao vivo e estrutura rígida para operações de apostas. Coordenação de entrega multidisciplinar.",
    tags: ["Fintech", "Real-time", "Dashboard"],
    slug: "atlas-dashboard",
    images: ["/projects/atlas-dashboard.png", "/projects/atlas-m4lab-1.png"]
  },
  {
    title: "Sistemas PMERJ",
    role: "Product Owner / Scrum Master",
    company: "UBTech / Unipê",
    description: "Comunicação criptografada e plataforma de Big Data com dashboards analíticos para Polícia Militar. 5 squads, ~25 pessoas.",
    tags: ["GovTech", "Big Data", "Segurança"],
    slug: "sistemas-pmerj"
  }
];

export const achievements: Achievement[] = [
  {
    title: "SaaS do Zero",
    description: "Construção completa de plataforma SaaS B2B2G",
    metric: "6 prefeituras ativas / 2M+ cidadãos"
  },
  {
    title: "Liderança Multidisciplinar",
    description: "Gestão de squads ágeis de desenvolvimento e design",
    metric: "2 squads / ~15 pessoas"
  },
  {
    title: "IA em Produto",
    description: "Aplicação de IA generativa (Claude, ChatGPT, Copilot)",
    metric: "Discovery, PRDs, automação de processos"
  },
  {
    title: "Escala em GovTech",
    description: "Fábrica de software para sistemas críticos governamentais",
    metric: "5 squads / ~25 pessoas"
  }
];

export const skills: Skill[] = [
  {
    category: "Gestão de Produto",
    items: ["Product Management", "Discovery", "PRDs", "Roadmapping", "Stakeholder Management"]
  },
  {
    category: "Agilidade",
    items: ["Scrum", "Kanban", "Métricas de Fluxo", "Lead Time", "Cycle Time", "Jira", "Linear"]
  },
  {
    category: "UX/UI",
    items: ["Figma", "User Research", "Prototyping", "Responsive Design", "Design Systems"]
  },
  {
    category: "IA Generativa",
    items: ["Claude", "ChatGPT", "GitHub Copilot", "Prompt Engineering"]
  },
  {
    category: "Certificações",
    items: ["SFC", "SFPC", "Yellow Belt Lean Seis Sigma", "Dashboard de Gestão", "APF"]
  },
  {
    category: "Idiomas",
    items: ["Espanhol (nativo)", "Português (fluente)", "Inglês (intermediário)"]
  }
];

export const bio = {
  name: "Isley David López Giraldo",
  location: "João Pessoa, Brasil",
  email: "idlopezgiraldo.dlg@gmail.com",
  title: "Product Manager & Gerente de Produto",
  intro: "Product Manager e Gerente de Produto com experiência em plataformas B2B e B2G. Especialista em metodologias ágeis, liderança de squads multidisciplinares e aplicação de IA generativa em discovery e automação de processos.",
  education: [
    "Análise e Desenvolvimento de Sistemas — UNIPÊ (2022–2023)",
    "Bacharelado em Administração de Empresas — UNIPÊ (2016–2020)"
  ]
};
