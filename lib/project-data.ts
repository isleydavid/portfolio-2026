export interface ProjectDetail {
  title: string;
  role: string;
  company: string;
  description: string;
  strategy?: {
    title: string;
    description: string;
  }[];
  process?: {
    title: string;
    description: string;
    images: string[];
  };
  solution?: string[];
  insights?: {
    metric: string;
    description: string;
  }[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  "legislativo-conectado": {
    title: "Legislativo Conectado",
    role: "Gerente de Produto",
    company: "Cubo Tecnologia",
    description: "SaaS B2B2G com 13 módulos integrados que transformou a participação cidadã em câmaras municipais e assembleias legislativas.",
    strategy: [
      {
        title: "Problema",
        description: "Câmaras municipais com processos burocráticos em papel, baixa participação cidadã e dificuldade de acompanhamento legislativo."
      },
      {
        title: "Solução",
        description: "Plataforma modular que digitaliza serviços legislativos: Portal do Cidadão, Monitor Legislativo, Enquetes, Audiências Públicas, Teleatendimento."
      },
      {
        title: "Approach",
        description: "Metodologia ágil com 2 squads multidisciplinares, aplicação de IA generativa em discovery e construção incremental de módulos."
      }
    ],
    process: {
      title: "Gestão de Demandas",
      description: "Gestão ágil de demandas utilizando Jira com fluxos separados: Squad de Desenvolvimento com Scrum board (10 itens pendentes, 1 em andamento, 3 em impedimento, code review, 44 em teste, aguardando validação e 13 concluídos) e Squad de Design com Kanban board (Ideias & Insights, Pronto para Design, Em Andamento, Bloqueado, Ajustes Design, Validação PO e Concluídos).",
      images: ["/projects/legislativo-jira-dev.png", "/projects/legislativo-jira-design.png"]
    },
    solution: [
      "/projects/legislativo-conectado.png",
      "/projects/legislativo-conectado-2.png"
    ],
    insights: [
      {
        metric: "6 prefeituras",
        description: "Implementação do zero até 6 municípios ativos utilizando a plataforma"
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
    description: "Plataforma omnichannel de gestão municipal em três camadas que elimina filas, papel e burocracia, transformando a relação entre cidadãos e governo.",
    strategy: [
      {
        title: "Problema",
        description: "Processos burocráticos dependentes de papel, filas presenciais intermináveis, lentidão no atendimento e dificuldade de acompanhamento de solicitações pelos cidadãos."
      },
      {
        title: "Solução",
        description: "Arquitetura de três camadas: App mobile para cidadãos com 600+ serviços, Portal do Servidor para análise e resposta de demandas, e Dashboard do Prefeito para monitoramento em tempo real."
      },
      {
        title: "Approach",
        description: "White-label customizável por município: nome do app alinhado à marca da cidade, cores da identidade visual e seleção de serviços ativos conforme necessidades locais."
      }
    ],
    solution: ["/projects/cidade-conectada.png", "/projects/cidade-conectada-2.png", "/projects/cidade-conectada-3.png"],
    insights: [
      {
        metric: "600+ serviços",
        description: "Catálogo completo de serviços municipais digitalizados disponíveis via app"
      },
      {
        metric: "4 cidades ativas",
        description: "João Pessoa, Campina Grande, Cabedelo e Feira de Santana utilizando a plataforma"
      },
      {
        metric: "Milhões de acessos",
        description: "Alto volume de interações registradas na plataforma desde o lançamento"
      },
      {
        metric: "100% paperless",
        description: "Eliminação total de papel e processos físicos nos serviços digitalizados"
      }
    ]
  },
  "dashboard-prefeito": {
    title: "Dashboard do Prefeito",
    role: "Gerente de Produto",
    company: "Cubo Tecnologia",
    description: "Dashboard executivo em tempo real com visão 360° de toda gestão municipal: solicitações, demandas geográficas, avaliações de serviços, performance de setores e indicadores de eficiência.",
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
    title: "Teleatendimento por Videochamada",
    role: "Gerente de Produto",
    company: "Cubo Tecnologia",
    description: "Sistema completo de teleatendimento com videochamada em tempo real, intérprete de Libras integrado, chat, gestão de filas e salas virtuais para atendimento municipal acessível e inclusivo.",
    strategy: [
      {
        title: "Problema",
        description: "Necessidade de atendimento remoto acessível para cidadãos com deficiência auditiva, gestão de múltiplas salas simultâneas e acompanhamento de histórico de atendimentos."
      },
      {
        title: "Solução",
        description: "Plataforma WebRTC com videochamada HD, intérprete de Libras integrado, chat em tempo real, sistema de filas inteligente, gestão de salas virtuais (AO VIVO, SUSPENSO) e histórico completo de atendimentos."
      },
      {
        title: "Approach",
        description: "Interface dividida em duas perspectivas: view do cidadão (iniciar/pausar atendimento, chat, documentos) e portal do servidor (múltiplas salas, fila de espera, avaliação de atendimento, documentos anexados)."
      }
    ],
    solution: [
      "/projects/teleatendimento-1.png",
      "/projects/teleatendimento-2.png",
      "/projects/teleatendimento-3.png",
      "/projects/teleatendimento-4.png"
    ],
    insights: [
      {
        metric: "WebRTC",
        description: "Videochamada em tempo real com baixa latência"
      },
      {
        metric: "Acessibilidade",
        description: "Intérprete de Libras integrado para inclusão de pessoas com deficiência auditiva"
      },
      {
        metric: "Gestão de Filas",
        description: "Sistema de salas virtuais com status (AO VIVO, SUSPENSO) e tempo estimado de espera"
      },
      {
        metric: "Histórico Completo",
        description: "Registro de conversas, avaliações, documentos anexados e timeline de atendimentos"
      }
    ]
  },
  "atlas-dashboard": {
    title: "Atlas Dashboard Financeiro",
    role: "Product Designer",
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
