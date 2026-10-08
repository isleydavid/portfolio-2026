export interface ProjectDetail {
  title: string;
  role: string;
  company: string;
  description: string;
  challenge?: string;
  strategy?: {
    title: string;
    description: string;
  }[];
  process?: {
    title: string;
    description: string;
    images: string[];
    stages?: {
      title: string;
      description: string;
    }[];
  };
  solution?: string[];
  mobileImages?: string[];
  insights?: {
    metric: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    photo?: string;
  };
  industry?: string;
  tags?: string[];
  liveUrl?: string;
}

export const projectDetails: Record<string, ProjectDetail> = {
  "legislativo-conectado": {
    title: "Legislativo Conectado",
    role: "Gerente de Produto",
    company: "Cubo Tecnologia",
    description: "Desenvolvemos uma plataforma integrada de 13 módulos que modernizou processos legislativos em assembleias estaduais. O Legislativo Conectado combina gestão parlamentar, participação cidadã e transparência administrativa em um único ecossistema — eliminando silos de informação e acelerando a tomada de decisão legislativa.",
    industry: "GovTech",
    tags: ["Product Management", "UX/UI Design", "Gestão Ágil", "Arquitetura de Sistemas"],
    challenge: "Para uma empresa que atua em mercados públicos, mapear necessidades do estado é essencial. O Legislativo Conectado não foi desenvolvido como um projeto isolado, mas como parte de um ecossistema integrado — alinhado com outras soluções governamentais e considerando a realidade operacional das assembleias. David especializa-se justamente nisso: desenhar produtos que funcionam em contextos multi-projeto e multi-stakeholder, onde cada módulo precisa conversar com infraestruturas existentes e futuras.",
    testimonial: {
      quote: "Ele não apenas entregou um produto robusto, mas entendeu profundamente as necessidades do estado e como o Legislativo Conectado se integra ao ecossistema maior de soluções públicas. A capacidade dele em navegar complexidade governamental e estruturar soluções escaláveis foi excepcional.",
      author: "Jonathan Veras",
      role: "CEO, Cubo Tecnologia",
      photo: "/jonathan-veras.png"
    },
    strategy: [
      {
        title: "Nossa Abordagem GovTech",
        description: "Para uma empresa que atua em mercados públicos, mapear necessidades do estado é essencial. O Legislativo Conectado não foi desenvolvido como um projeto isolado, mas como parte de um ecossistema integrado — alinhado com outras soluções governamentais e considerando a realidade operacional das assembleias."
      }
    ],
    process: {
      title: "Gestão de Demandas",
      description: "Coordenação ágil de dois squads — Desenvolvimento e Design — via Jira com fluxos especializados. Scrum board de dev prioriza código production-ready e code review antes de validação. Kanban de design mantém ideias fluindo do conceito até ajustes finais. Essa separação garante velocidade em design enquanto dev foca em estabilidade e qualidade.",
      images: ["/projects/legislativo-jira-dev.png", "/projects/legislativo-jira-design.png"],
      stages: [
        {
          title: "Discovery",
          description: "Mapeamento profundo da estrutura legislativa estadual: fluxos de votação, tramitação de matérias, dinâmicas entre poderes. Conversas diretas com gestores de assembleias validaram painpoints reais e oportunidades de simplificação alinhadas com prioridades estaduais."
        },
        {
          title: "Design",
          description: "David prototipou todo o sistema antes de envolver o time de design. Isso permitiu conversas estruturadas, reduzindo retrabalho e garantindo que cada interface refletisse processos legislativos reais. Iterações com stakeholders públicos asseguraram usabilidade para públicos muito diferentes — técnicos e não-técnicos."
        },
        {
          title: "Development",
          description: "Implementação de 13 módulos integrados com arquitetura pensada para escala estadual. LGPD compliance, segurança em nível governamental e interoperabilidade com sistemas existentes foram prioridades técnicas desde o início."
        },
        {
          title: "Launch",
          description: "Deploy em assembleias estaduais com suporte contínuo. Treinamento de servidores públicos e iterações rápidas garantiram adoção real e sustentável."
        }
      ]
    },
    solution: [
      "/projects/legislativo-conectado.png",
      "/projects/legislativo-conectado-2.png"
    ],
    insights: [
      {
        metric: "6 assembleias",
        description: "Implementação do zero até 6 assembleias estaduais ativamente utilizando a plataforma"
      },
      {
        metric: "2M+ cidadãos",
        description: "Alcance total da plataforma atendendo mais de 2 milhões de pessoas"
      },
      {
        metric: "13 módulos",
        description: "Produtos integrados via API cobrindo todo ciclo de participação legislativa"
      },
      {
        metric: "~15 pessoas",
        description: "2 squads multidisciplinares liderados com entregas contínuas"
      }
    ]
  },
  "cidade-conectada": {
    title: "Cidade Conectada",
    role: "Gerente de Projetos",
    company: "Cubo Tecnologia",
    description: "Uma plataforma municipal integrada que oferece mais de 600 serviços digitais aos cidadãos. O Cidade Conectada transforma burocracia em agilidade através de três pilares: aplicativo white-label para cidadãos, Portal do Servidor para gestão de solicitações e Dashboard do Prefeito para monitoramento executivo em tempo real. A plataforma elimina filas, reduz uso de papel, digitaliza processos e desburocratiza a relação entre cidadão e prefeitura — tudo acessível pela palma da mão.",
    industry: "GovTech",
    tags: ["Product Management", "White-label", "Omnichannel", "Mobile"],
    challenge: "Processos burocráticos dependentes de papel, filas presenciais intermináveis, lentidão no atendimento e dificuldade de acompanhamento de solicitações pelos cidadãos. Prefeituras enfrentavam sobrecarga em setores com alta demanda e ausência de transparência no status de processos.",
    testimonial: {
      quote: "O aplicativo é um marco para a gestão. São vários serviços disponibilizados para facilitar e dar transparência para os cidadãos.",
      author: "Cícero Lucena",
      role: "Prefeito de João Pessoa (PB)",
      photo: "/cicero-lucena.png"
    },
    strategy: [
      {
        title: "Aplicativo para o Cidadão",
        description: "Mais de 600 serviços disponíveis de forma simples e intuitiva. App customizável com nome, cores e identidade visual da prefeitura. Omnichannel: funciona em web e mobile."
      },
      {
        title: "Portal do Servidor",
        description: "Recebe, analisa e responde todas as solicitações do aplicativo. Centraliza fluxos de trabalho das secretarias em um único ponto de controle."
      },
      {
        title: "Dashboard do Prefeito",
        description: "Monitoramento em tempo real de todas as solicitações, desempenho das secretarias, métricas de satisfação e indicadores de gestão. Visão executiva que transforma dados em decisão."
      }
    ],
    process: {
      title: "Benefícios Realizados",
      description: "A plataforma elimina filas através de processos digitais que reduzem tempo de espera, remove papel com gestão totalmente digital, simplifica burocracia com interfaces pensadas para cidadãos não-técnicos, e garante transparência ao permitir que cidadãos acompanhem status de solicitações em tempo real.",
      images: [],
      stages: [
        {
          title: "Sem filas",
          description: "Processos digitais reduzem tempo de espera eliminando necessidade de deslocamento e atendimento presencial."
        },
        {
          title: "Sem papel",
          description: "Gestão totalmente digital elimina formulários físicos, protocolos impressos e arquivos mortos."
        },
        {
          title: "Sem burocracia",
          description: "Interfaces pensadas para cidadãos não-técnicos simplificam fluxos e reduzem barreiras de acesso."
        },
        {
          title: "Transparência",
          description: "Cidadãos acompanham status de solicitações em tempo real através do aplicativo."
        }
      ]
    },
    solution: ["/projects/cidade-conectada.png", "/projects/cidade-conectada-2.png", "/projects/cidade-conectada-3.png"],
    insights: [
      {
        metric: "600+ serviços",
        description: "Catálogo completo de serviços municipais digitalizados disponíveis via app"
      },
      {
        metric: "4 cidades em produção",
        description: "João Pessoa (PB), Campina Grande (PB), Cabedelo (PB) e Feira de Santana (BA)"
      },
      {
        metric: "100% paperless",
        description: "Eliminação total de papel e processos físicos nos serviços digitalizados"
      },
      {
        metric: "White-label",
        description: "App customizável com identidade visual, nome e serviços selecionados por município"
      }
    ]
  },
  "dashboard-prefeito": {
    title: "Dashboard do Prefeito",
    role: "Gerente de Produto",
    company: "Cubo Tecnologia",
    description: "Dashboard executivo em tempo real com visão 360° de toda gestão municipal: solicitações, demandas geográficas, avaliações de serviços, performance de setores e indicadores de eficiência.",
    testimonial: {
      quote: "O dashboard transformou completamente nossa capacidade de gestão. Temos visibilidade em tempo real de todas as solicitações e podemos tomar decisões baseadas em dados concretos para melhorar a vida dos cidadãos de João Pessoa.",
      author: "Cícero Lucena",
      role: "Prefeito de João Pessoa (PB)",
      photo: "/cicero-lucena.png"
    },
    strategy: [
      {
        title: "Problema",
        description: "Prefeitos sem visibilidade em tempo real das solicitações cidadãs, dificuldade de identificar setores sobrecarregados ou ineficientes, e ausência de dados geográficos para tomada de decisão estratégica."
      },
      {
        title: "Solução",
        description: "Dashboard com 5 abas: Solicitações (1.456.829 recebidas, status sem resposta/em atendimento/concluídas), Mapa de Demandas (geolocalização por bairro), Gráfico da Cidade (heatmap de intensidade), Avaliações (nota média 4.0, 85% positivas, 15% negativas) e Baixo Rendimento (criticidade por setor)."
      },
      {
        title: "Approach",
        description: "Interface executiva com filtro temporal (6 meses padrão), insights contextuais (serviço melhor avaliado, tempo de resposta rápida/moderada/lenta, demandas em atraso por setor), e alertas de eficiência (-18% queda em SEURB, 850 demandas atrasadas)."
      }
    ],
    solution: [
      "/projects/dashboard-prefeito-1.png",
      "/projects/dashboard-prefeito-2.png",
      "/projects/dashboard-prefeito-3.png",
      "/projects/dashboard-prefeito-4.png",
      "/projects/dashboard-prefeito-5.png"
    ],
    insights: [
      {
        metric: "1.456.829 solicitações",
        description: "Volume total recebido no período com split por status (sem resposta, em atendimento, concluídas)"
      },
      {
        metric: "Mapa de calor",
        description: "Geolocalização de demandas com heatmap de intensidade por bairro e região"
      },
      {
        metric: "85% satisfação",
        description: "Nota média 4.0 com 85% avaliações positivas e monitoramento de reclamações por setor"
      },
      {
        metric: "Alertas de eficiência",
        description: "850 demandas atrasadas, queda de -18% em SEURB, setor sobrecarregado identificado"
      }
    ]
  },
  "processo-eletronico": {
    title: "Processo Eletrônico",
    role: "Gerente de Produto",
    company: "Cubo Tecnologia",
    description: "Sistema de tramitação de processos administrativos digitais que elimina papel, automatiza workflows e centraliza toda comunicação oficial em uma plataforma única.",
    strategy: [
      {
        title: "Problema",
        description: "Processos administrativos dependentes de papel, tramitação lenta entre setores, dificuldade de acompanhamento, perda de documentos e ausência de padronização."
      },
      {
        title: "Solução",
        description: "Plataforma 100% paperless com inbox pessoal/setor, gestão de tipos e modelos de processo (Processos Administrativos, Protocolos, Circular, Atos Oficiais), despachos estruturados, timeline completa e tramitação interna automática."
      },
      {
        title: "Approach",
        description: "Administração centralizada de tipos e modelos customizáveis por prefeitura, inbox em aberto/caixa de saídas/inbox pessoal/favoritos/arquivados, e view detalhada com despachos, encaminhamentos e histórico completo."
      }
    ],
    solution: [
      "/projects/processo-eletronico-1.png",
      "/projects/processo-eletronico-2.png",
      "/projects/processo-eletronico-3.png"
    ],
    insights: [
      {
        metric: "100% paperless",
        description: "Eliminação total de papel em processos administrativos municipais"
      },
      {
        metric: "Tipos customizáveis",
        description: "Processos Administrativos (4), Protocolos (8), Circular (12), Atos Oficiais (4)"
      },
      {
        metric: "Inbox estruturado",
        description: "Em aberto (14), Caixa de saídas (34), Inbox pessoal (12), Favoritos (2), Arquivados (0)"
      },
      {
        metric: "Timeline completa",
        description: "Histórico de despachos, encaminhamentos, participantes e assinaturas digitais"
      }
    ]
  },
  "teleatendimento": {
    title: "Teleatendimento",
    role: "Gerente de Produto",
    company: "Cubo Tecnologia",
    industry: "GovTech",
    tags: ["Product Management", "WebRTC", "Acessibilidade", "Videochamada"],
    description: "Sistema completo de teleatendimento com videochamada em tempo real que revolucionou o atendimento municipal. Originalmente desenvolvido para atender uma necessidade pública, o produto foi adaptado para a realidade da população, oferecendo consultas médicas, atendimento Procon e outros serviços via aplicativo municipal — garantindo que nenhum cidadão saia sem ser atendido.",
    challenge: "O projeto surgiu de uma necessidade pública e de padrão para subir, mas seu uso teve que ser adaptado à população. O desafio foi criar uma solução que funcionasse para qualquer cidadão, em qualquer horário que o serviço estivesse disponível, com gestão inteligente de filas que garante atendimento para todos que entram — mesmo quando novas entradas são bloqueadas ao atingir capacidade, quem já entrou será atendido.",
    strategy: [
      {
        title: "Adaptação à População",
        description: "Sistema integrado ao aplicativo municipal permite acesso a qualquer hora que o serviço estiver disponível — como consulta médica ou atendimento Procon. O cidadão entra automaticamente em uma fila de atendimento com garantia de ser atendido."
      },
      {
        title: "Gestão Inteligente de Filas",
        description: "Sistema de controle interno de chamados que, ao atingir capacidade máxima, cancela novas entradas mas garante atendimento para todos que já estão na fila. Nenhum cidadão sai sem ser atendido."
      },
      {
        title: "Acessibilidade Premiada",
        description: "Integração com um dos únicos sistemas premiados a nível nacional de tradução de Libras. O intérprete de Libras está integrado diretamente ao sistema, tornando o atendimento acessível para cidadãos com deficiência auditiva."
      },
      {
        title: "Documentação Automática",
        description: "Ao finalizar o atendimento, documentos ou recomendações faladas ficam automaticamente registrados no arquivo para o cidadão acessar depois. Tudo integrado ao sistema municipal."
      }
    ],
    solution: [
      "/projects/teleatendimento-1.png",
      "/projects/teleatendimento-2.png",
      "/projects/teleatendimento-3.png",
      "/projects/teleatendimento-4.png"
    ],
    testimonial: {
      quote: "O teleatendimento transformou nosso atendimento ao cidadão. A integração com Libras e a garantia de que todos serão atendidos trouxe acessibilidade real para nossa população. É um exemplo de tecnologia a serviço da inclusão.",
      author: "Cícero Lucena",
      role: "Prefeito de João Pessoa (PB)",
      photo: "/cicero-lucena.png"
    },
    insights: [
      {
        metric: "Premiado nacionalmente",
        description: "Integração com sistema premiado de tradução de Libras a nível nacional"
      },
      {
        metric: "100% de atendimento",
        description: "Sistema de filas garante que nenhum cidadão sai sem ser atendido"
      },
      {
        metric: "Documentação automática",
        description: "Recomendações e documentos falados ficam registrados automaticamente no sistema"
      },
      {
        metric: "Múltiplos serviços",
        description: "Consultas médicas, Procon e outros serviços municipais via aplicativo"
      }
    ]
  },
  "chat-ia-municipal": {
    title: "Chat IA Municipal",
    role: "Product Manager",
    company: "Cubo Tecnologia",
    industry: "GovTech",
    tags: ["IA Generativa", "ChatBot", "NLP", "Context-Aware"],
    description: "Assistente inteligente contextualizado que permite cidadãos acessarem todo o ecossistema municipal através de conversação natural. Com o novo movimento comportamental de sempre procurar uma IA, desenvolvemos um chatbot que tem contexto completo da plataforma — onde tudo que o cidadão faria no aplicativo pode ser feito através de conversa.",
    challenge: "O desafio era criar uma experiência de IA que não fosse genérica, mas sim profundamente integrada ao sistema municipal. O cidadão precisava ter a mesma praticidade das IAs populares, porém no contexto específico do município — e com isso, o alcance do usuário para encontrar informações ou realizar ações seria até mais fácil do que navegar pela interface tradicional.",
    strategy: [
      {
        title: "IA Contextual ao Sistema",
        description: "Todo o fluxo disponível no aplicativo municipal está acessível via chat. O cidadão pode consultar projetos de lei, abrir denúncias, verificar agendas públicas, acompanhar solicitações — tudo por conversa natural. A IA tem contexto completo da plataforma e dados em tempo real."
      },
      {
        title: "Configuração de Agentes",
        description: "Camada robusta de configuração que permite definir tom e personalidade do agente, base de conhecimento (upload de documentos PDF), contexto institucional, escopo de atendimento, comportamento do modelo e escalada para humanos. Controle fino sobre como a IA se comunica com o cidadão."
      },
      {
        title: "Bloqueio de Assuntos Irrelevantes",
        description: "Sistema inteligente que bloqueia assuntos que não fazem sentido para o contexto municipal. A IA sabe identificar quando uma pergunta está fora do escopo e redireciona o cidadão de forma educada. Evita dispersão e mantém foco nos serviços municipais."
      },
      {
        title: "Adaptável a Qualquer Ecossistema",
        description: "A ferramenta foi arquitetada para funcionar tanto no Cidade Conectada quanto no Legislativo Conectado. Mesma tecnologia, contextos diferentes. Pode ser configurada para assistência ao cidadão, ao vereador, ou qualquer outro perfil dentro do ecossistema GovTech."
      },
      {
        title: "Histórico e Conversas Abertas",
        description: "Sistema completo de gestão de conversas com histórico persistente, categorização por assunto (Agenda, Denúncia, Vereador, Projeto de lei, Transporte público), possibilidade de retomar conversas anteriores e dashboard com métricas de uso e satisfação."
      }
    ],
    testimonial: {
      quote: "A IA transformou a forma como os cidadãos interagem com nossa cidade. Agora, ao invés de navegar por menus, eles simplesmente conversam e resolvem. É a praticidade das IAs modernas aplicada ao serviço público.",
      author: "Cícero Lucena",
      role: "Prefeito de João Pessoa (PB)",
      photo: "/cicero-lucena.png"
    },
    solution: [
      "/projects/chat-ia-1.png",
      "/projects/chat-ia-2.png",
      "/projects/chat-ia-3.png",
      "/projects/chat-ia-4.png"
    ],
    mobileImages: [
      "/projects/chat-ia-5.png",
      "/projects/chat-ia-6.png",
      "/projects/chat-ia-7.png",
      "/projects/chat-ia-8.png"
    ],
    insights: [
      {
        metric: "100% do sistema acessível",
        description: "Todo fluxo do app municipal disponível via conversa natural"
      },
      {
        metric: "Configuração granular",
        description: "6 camadas de configuração: tom, conhecimento, contexto, escopo, modelo e escalada"
      },
      {
        metric: "Multi-ecossistema",
        description: "Funciona em Cidade Conectada, Legislativo Conectado e qualquer contexto GovTech"
      },
      {
        metric: "Métricas completas",
        description: "458 interações, 76% aprovação, 59% adoção do chat, 734 tokens gastos"
      }
    ]
  },
  "atlas-dashboard": {
    title: "Atlas Dashboard Financeiro",
    role: "Product Manager",
    company: "BPX / Lifters",
    description: "Sistema financeiro altamente complexo com dados ao vivo e arquitetura rígida para operações de apostas esportivas e cassino.",
    strategy: [
      {
        title: "Problema",
        description: "Sistema financeiro legacy com dados em tempo real, estrutura técnica rígida e necessidade de coordenação entre múltiplas equipes."
      },
      {
        title: "Solução",
        description: "Coordenação de entrega de produto com equipe multidisciplinar, notificações push e WhatsApp, revisão de UI, configuração de permissões e integração com Altenar SDK."
      },
      {
        title: "Approach",
        description: "Trabalho colaborativo com Lucas, Felipe, Thiago, Luís e Davi utilizando documentação Altenar SDK Storybook como referência técnica."
      }
    ],
    process: {
      title: "Gestão de Demandas & Laboratório de Testes",
      description: "Gestão de demandas via Linear (Backlog: 18 itens, Todo: 25, Done: 14) com integração ao M4 Lab, um dashboard multi-módulo de análise do apostador criado por mim. O M4 Lab inclui Playground (Financeiro, Apostas Esportivas, Cassino, Perfil de Apostador), PLD/AML com visão operacional, alertas geradas, volume sob análise, SLA crítico em risco, prazo COAF (casos críticos, total a vencer, distribuição por prazo), comunicação COAF (fluxo regulatório, ROs submetidos, prontos para exportar) e gestão VIP.",
      images: ["/projects/atlas-linear.png", "/projects/atlas-m4lab-1.png", "/projects/atlas-m4lab-2.png"]
    },
    solution: ["/projects/atlas-dashboard.png"],
    insights: [
      {
        metric: "Real-time",
        description: "Sistema financeiro com dados ao vivo e atualização instantânea"
      },
      {
        metric: "M4 Lab",
        description: "Dashboard multi-módulo de análise criado do zero para testes e validação"
      },
      {
        metric: "PLD/AML",
        description: "Monitoramento de risco e compliance com prazo COAF e alertas"
      },
      {
        metric: "Alta complexidade",
        description: "Arquitetura técnica rígida e integrações críticas com Altenar SDK"
      }
    ]
  },
  "sistemas-pmerj": {
    title: "Sistemas PMERJ",
    role: "Product Owner / Scrum Master",
    company: "UBTech / Unipê",
    description: "Fábrica de software entregando sistemas críticos de comunicação criptografada e plataforma de Big Data para Polícia Militar do Rio de Janeiro.",
    strategy: [
      {
        title: "Problema",
        description: "Necessidade de comunicação segura e análise de dados em tempo real para operações policiais críticas."
      },
      {
        title: "Solução",
        description: "Suite de sistemas incluindo FeedFront, Cidadania Ativa, Dashboard de Monitoramento e plataforma de Big Data."
      },
      {
        title: "Approach",
        description: "Implantação de Scrum e Kanban, capacitação em Jira/Confluence, gestão direta com stakeholders da PMERJ."
      }
    ],
    insights: [
      {
        metric: "5 squads",
        description: "Fábrica com ~25 pessoas entre devs, QA e design"
      },
      {
        metric: "100% crítico",
        description: "Sistemas de comunicação criptografada para operações policiais"
      }
    ]
  }
};
