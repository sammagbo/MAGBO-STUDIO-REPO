export type Language = 'en' | 'pt' | 'es';

export const TRANSLATIONS = {
      en: {
            nav: {
                  projects: 'PROJECTS',
                  expertise: 'EXPERTISE',
                  tech_radar: 'TECH_RADAR',
                  status: 'STATUS',
                  intel: 'INTELLIGENCE',
                  contact: 'CONTACT',
                  labs: 'LABS',
                  archive: 'VAULT',
            },
            hero: {
                  status: 'SYSTEM OPERATIONAL // READY TO DEPLOY',
                  title_start: 'Sammy',
                  title_gradient: 'K Magbo',
                  title_middle: 'Innovator &',
                  title_end: 'Problem Solver.',
                  description: 'I am an innovator and problem solver. I find technical solutions for your problems. Elite Software Engineering & Security Architecture.',
                  cta_primary: 'INITIATE PROTOCOL',
                  cta_secondary: 'VIEW CLASSIFIED DATA',
                  stats: {
                        systems: 'Mission Critical System',
                        uptime: 'Uptime Guarantee',
                        security: 'Compromised Data',
                        global: 'Operations Reach',
                  }
            },
            projects: {
                  title: 'CASE_LOGS // CLASSIFIED',
                  restricted: 'Restricted Access',
                  view_study: 'View Case Study',
                  list: {
                        vote_guard: {
                              title: 'PROTOCOL: VOTE_GUARD',
                              description: 'Critical electronic voting system and high-stakes assembly management. Implements real-time state machine logic for timers, strict quorum control, President\'s Counsel mode, and precise legal PDF report generation.',
                              type: 'Critical Governance',
                              stack: ['React', 'State Logic', 'PDF Gen', 'Real-time'],
                        },
                        sector_watch: {
                              title: 'SECTOR_WATCH',
                              description: 'Physical security infrastructure for a French educational institution. Features QR Code logic for access control, sector-based dashboard for flow monitoring, and real-time student tracking.',
                              type: 'Physical Security',
                              stack: ['IoT Logic', 'QR Code', 'React', 'Dashboard'],
                        },
                        core_sync: {
                              title: 'CORE_SYNC',
                              description: 'Full-stack synchronization for a development center. Hybrid architecture integrating React Frontend with Spring Boot Backend, migrating local persistence to robust and secure APIs.',
                              type: 'Fullstack Infra',
                              stack: ['React', 'Spring Boot', 'Java', 'API Rest'],
                        },
                        media_ops: {
                              title: 'MEDIA_OPS',
                              description: 'High-performance media platform. Deep integration with Spotify API, technical SEO optimization, and advanced GSAP animations with magnetic physics and parallax effects.',
                              type: 'High Performance UI',
                              stack: ['React', 'GSAP', 'Spotify API', 'Motion UX'],
                        },
                  }
            },
            labs: {
                  title: 'MAGBO_LABS // TACTICAL_OPS',
                  view_source: 'SOURCE_CODE',
                  preview: 'DECLASSIFIED_PREVIEW',
                  items: {
                        media_ops: {
                              title: 'MEDIA_OPS',
                              tagline: 'High-fidelity audio interface with advanced motion UI.',
                              description: 'Experimental podcast platform pushing the boundaries of Web Audio API and GSAP animations.',
                              stack: ['React', 'GSAP', 'Spotify API'],
                        },
                        java_init: {
                              title: 'JAVA_INIT',
                              tagline: 'Core backend architecture and API structuring.',
                              description: 'Deep dive into Spring Boot internals and exploring the limits of RESTful API design patterns.',
                              stack: ['Java', 'Spring Boot', 'Maven'],
                        },
                        identity: {
                              title: 'IDENTITY_V1',
                              tagline: 'Self-referential secure portfolio architecture.',
                              description: 'The recursive architecture of this very site, designed as a study in secure UI principles.',
                              stack: ['React', 'Tailwind', 'Security UI'],
                        },
                  }
            },
            archive: {
                  title: 'FULL PROJECT ARCHIVE // SAMMY K MAGBO',
                  subtitle: 'OPERATIONAL LOG & ENGINEERING HISTORY',
                  cols: {
                        year: 'YEAR',
                        project: 'OPERATION NAME',
                        built_with: 'BUILT WITH',
                        link: 'LINK',
                  },
                  data: {
                        vote_guard: 'PROTOCOL: VOTE_GUARD (MeetingManager)',
                        sector_watch: 'SECTOR_WATCH (Access Control System)',
                        core_sync: 'CORE_SYNC (CDI Integration)',
                        media_ops: 'MEDIA_OPS (The Talk)',
                        java_init: 'JAVA_INIT (Spring Boot Portfolio)',
                  }
            },
            expertise: {
                  capabilities: 'OPERATIONAL_CAPABILITIES',
                  events: 'KEY_SYSTEM_EVENTS',
                  risk_level: 'RISK_LEVEL',
                  current_state: 'CURRENT STATE: ACTIVE',
            },
            radar: {
                  title: 'TECHNOLOGY_RADAR // SENSOR_ARRAY',
                  quadrants: {
                        adopt: 'ADOPT // PRODUCTION_READY',
                        trial: 'TRIAL // BETA_TESTING',
                        assess: 'ASSESS // OBSERVATION',
                        hold: 'HOLD // DEPRECATED',
                  }
            },
            status: {
                  title: 'SYSTEM_STATUS // TRUST_CENTER',
                  uptime: 'SYSTEM UPTIME',
                  latency: 'GLOBAL LATENCY',
                  threats: 'THREATS BLOCKED',
                  services: {
                        api: 'API GATEWAY',
                        portals: 'CLIENT PORTALS',
                        encryption: 'ENCRYPTION MODULES',
                  },
                  history: 'INCIDENT HISTORY',
                  operational: 'OPERATIONAL',
                  secure: 'SECURE',
                  maintenance: 'MAINTENANCE - SECURITY PATCHING',
                  resolved: 'RESOLVED',
            },
            intel: {
                  title: 'INTELLIGENCE_BRIEFINGS',
                  subtitle: 'T.L.P. // AMBER // WHITE',
                  access_btn: 'REQUEST FULL ACCESS',
                  read_more: 'READ BRIEFING',
                  disclosed: 'DISCLOSED ON',
            },
            contact: {
                  title: 'Initiate Secure Protocol',
                  subtitle: 'Target: MAGBO_HQ // Encryption Level: AES-256',
                  secure_channel: 'SECURE_CHANNEL_V1.4',
                  identification: 'Identification (Name)',
                  email: 'Institutional Email',
                  briefing: 'Project Briefing',
                  placeholders: {
                        id: 'ENTER IDENTIFIER...',
                        email: 'USER@AGENCY.GOV',
                        briefing: 'DESCRIBE MISSION OBJECTIVES AND TECHNICAL REQUIREMENTS...',
                  },
                  button: {
                        encrypting: 'ENCRYPTING DATA_PACKETS...',
                        initiate: 'INITIATE COMMUNICATION',
                  },
                  success: {
                        title: 'Protocol Initiated',
                        message: 'Transmission successful. Our team will decrypt your briefing and establish a secure uplink shortly.',
                        new: 'Start New Transmission',
                  },
                  encryption_label: 'ENCRYPTION: AES-256-GCM',
                  link_active: 'LINK ACTIVE',
            }
      },
      pt: {
            nav: {
                  projects: 'PROJETOS',
                  expertise: 'EXPERTISE',
                  tech_radar: 'RADAR_TEC',
                  status: 'STATUS',
                  intel: 'INTELIGÊNCIA',
                  contact: 'CONTATO',
                  labs: 'LABS',
                  archive: 'VAULT',
            },
            hero: {
                  status: 'SISTEMA OPERACIONAL // PRONTO PARA DEPLOY',
                  title_start: 'Sammy',
                  title_gradient: 'K Magbo',
                  title_middle: 'Inovador e',
                  title_end: 'Solucionista.',
                  description: 'Sou inovador e solucionista. Encontro soluções tecnológicas para o seu problema. Engenharia de Software de Elite & Arquitetura de Segurança.',
                  cta_primary: 'INICIAR PROTOCOLO',
                  cta_secondary: 'VER DADOS CLASSIFICADOS',
                  stats: {
                        systems: 'Sistemas Críticos',
                        uptime: 'Garantia de Uptime',
                        security: 'Dados Comprometidos',
                        global: 'Alcance Operacional',
                  }
            },
            projects: {
                  title: 'REGISTROS_CASOS // CONFIDENCIAL',
                  restricted: 'Acesso Restrito',
                  view_study: 'Ver Estudo de Caso',
                  list: {
                        vote_guard: {
                              title: 'PROTOCOLO: VOTE_GUARD',
                              description: 'Sistema crítico de votação eletrônica e gestão de assembleias de alto risco. Implementa lógica de máquina de estados em tempo real para timers, controle estrito de quórum, modo "President\'s Counsel" e geração precisa de relatórios legais em PDF.',
                              type: 'Governança Crítica',
                              stack: ['React', 'Lógica Estado', 'Ger. PDF', 'Tempo Real'],
                        },
                        sector_watch: {
                              title: 'SECTOR_WATCH',
                              description: 'Infraestrutura de segurança física para instituição de ensino francesa. Controle de acesso via lógica de QR Code, dashboard setorizado para monitoramento de fluxo e rastreamento de alunos em tempo real.',
                              type: 'Segurança Física',
                              stack: ['Lógica IoT', 'QR Code', 'React', 'Dashboard'],
                        },
                        core_sync: {
                              title: 'CORE_SYNC',
                              description: 'Sincronização Full-stack para centro de desenvolvimento. Arquitetura híbrida integrando Frontend React com Backend Spring Boot, migrando persistência local para APIs robustas e seguras.',
                              type: 'Infra Fullstack',
                              stack: ['React', 'Spring Boot', 'Java', 'API Rest'],
                        },
                        media_ops: {
                              title: 'MEDIA_OPS',
                              description: 'Plataforma de mídia de alta performance visual. Integração profunda com Spotify API, otimização de SEO técnico e animações avançadas (GSAP) com física magnética e parallax.',
                              type: 'UI Alta Performance',
                              stack: ['React', 'GSAP', 'Spotify API', 'Motion UX'],
                        },
                  }
            },
            labs: {
                  title: 'MAGBO_LABS // OPS_TÁTICAS',
                  view_source: 'CÓDIGO FONTE',
                  preview: 'PREVIEW_DESCLASSIFICADO',
                  items: {
                        media_ops: {
                              title: 'MEDIA_OPS',
                              tagline: 'Interface de áudio de alta fidelidade com UI motion avançada.',
                              description: 'Plataforma experimental de podcast explorando os limites da Web Audio API e animações GSAP.',
                              stack: ['React', 'GSAP', 'Spotify API'],
                        },
                        java_init: {
                              title: 'JAVA_INIT',
                              tagline: 'Arquitetura core backend e estruturação de API.',
                              description: 'Mergulho profundo nos internos do Spring Boot e exploração de padrões de design de API RESTful.',
                              stack: ['Java', 'Spring Boot', 'Maven'],
                        },
                        identity: {
                              title: 'IDENTITY_V1',
                              tagline: 'Arquitetura de portfólio seguro autorreferencial.',
                              description: 'A arquitetura recursiva deste próprio site, projetada como estudo em princípios de UI segura.',
                              stack: ['React', 'Tailwind', 'Security UI'],
                        },
                  }
            },
            archive: {
                  title: 'ARQUIVO DE PROJETOS COMPLETO // SAMMY K MAGBO',
                  subtitle: 'LOG OPERACIONAL & HISTÓRICO DE ENGENHARIA',
                  cols: {
                        year: 'ANO',
                        project: 'NOME DA OPERAÇÃO',
                        built_with: 'CONSTRUÍDO COM',
                        link: 'LINK',
                  },
                  data: {
                        vote_guard: 'PROTOCOLO: VOTE_GUARD (MeetingManager)',
                        sector_watch: 'SECTOR_WATCH (Sistema de Controle de Acesso)',
                        core_sync: 'CORE_SYNC (Integração CDI)',
                        media_ops: 'MEDIA_OPS (The Talk)',
                        java_init: 'JAVA_INIT (Portfólio Spring Boot)',
                  }
            },
            expertise: {
                  capabilities: 'CAPACIDADES_OPERACIONAIS',
                  events: 'EVENTOS_CHAVE_SISTEMA',
                  risk_level: 'NÍVEL_RISCO',
                  current_state: 'ESTADO ATUAL: ATIVO',
            },
            radar: {
                  title: 'RADAR_TECNOLÓGICO // MATRIZ_SENSOR',
                  quadrants: {
                        adopt: 'ADOTAR // PRODUÇÃO',
                        trial: 'TESTAR // BETA',
                        assess: 'AVALIAR // OBSERVAÇÃO',
                        hold: 'RETER // DEPRECIADO',
                  }
            },
            status: {
                  title: 'STATUS_SISTEMA // CENTRO_CONFIANÇA',
                  uptime: 'UPTIME SISTEMA',
                  latency: 'LATÊNCIA GLOBAL',
                  threats: 'AMEAÇAS BLOQUEADAS',
                  services: {
                        api: 'GATEWAY API',
                        portals: 'PORTAIS CLIENTE',
                        encryption: 'MÓDULOS CRIPTOGRAFIA',
                  },
                  history: 'HISTÓRICO INCIDENTES',
                  operational: 'OPERACIONAL',
                  secure: 'SEGURO',
                  maintenance: 'MANUTENÇÃO - PATCH SEGURANÇA',
                  resolved: 'RESOLVIDO',
            },
            intel: {
                  title: 'BRIEFINGS_INTELIGÊNCIA',
                  subtitle: 'T.L.P. // AMBER // WHITE',
                  access_btn: 'SOLICITAR ACESSO TOTAL',
                  read_more: 'LER BRIEFING',
                  disclosed: 'DIVULGADO EM',
            },
            contact: {
                  title: 'Iniciar Protocolo Seguro',
                  subtitle: 'Alvo: MAGBO_HQ // Nível Criptografia: AES-256',
                  secure_channel: 'CANAL_SEGURO_V1.4',
                  identification: 'Identificação (Nome)',
                  email: 'Email Institucional',
                  briefing: 'Briefing do Projeto',
                  placeholders: {
                        id: 'INSERIR IDENTIFICADOR...',
                        email: 'USUARIO@AGENCIA.GOV',
                        briefing: 'DESCREVA OBJETIVOS DA MISSÃO E REQUISITOS TÉCNICOS...',
                  },
                  button: {
                        encrypting: 'CRIPTOGRAFANDO PACOTES...',
                        initiate: 'INICIAR COMUNICAÇÃO',
                  },
                  success: {
                        title: 'Protocolo Iniciado',
                        message: 'Transmissão com sucesso. Nossa equipe descriptografará seu briefing e estabelecerá um link seguro em breve.',
                        new: 'Iniciar Nova Transmissão',
                  },
                  encryption_label: 'CRIPTOGRAFIA: AES-256-GCM',
                  link_active: 'LINK ATIVO',
            }
      },
      es: {
            nav: {
                  projects: 'PROYECTOS',
                  expertise: 'EXPERTISE',
                  tech_radar: 'RADAR_TEC',
                  status: 'ESTADO',
                  intel: 'INTELIGENCIA',
                  contact: 'CONTACTO',
                  labs: 'LABS',
                  archive: 'VAULT',
            },
            hero: {
                  status: 'SISTEMA OPERATIVO // LISTO PARA DESPLIEGUE',
                  title_start: 'Sammy',
                  title_gradient: 'K Magbo',
                  title_middle: 'Innovador y',
                  title_end: 'Solucionador.',
                  description: 'Soy innovador y solucionador. Encuentro soluciones tecnológicas para su problema. Ingeniería de Software de Élite y Arquitectura de Seguridad.',
                  cta_primary: 'INICIAR PROTOCOLO',
                  cta_secondary: 'VER DATOS CLASIFICADOS',
                  stats: {
                        systems: 'Sistemas Críticos',
                        uptime: 'Garantía de Uptime',
                        security: 'Datos Comprometidos',
                        global: 'Alcance Operativo',
                  }
            },
            projects: {
                  title: 'REGISTRO_CASOS // CONFIDENCIAL',
                  restricted: 'Acceso Restringido',
                  view_study: 'Ver Estudio de Caso',
                  list: {
                        vote_guard: {
                              title: 'PROTOCOLO: VOTE_GUARD',
                              description: 'Sistema crítico de votación electrónica y gestión de asambleas de alto riesgo. Implementa lógica de máquina de estados en tiempo real para temporizadores, control estricto de quórum, modo "President\'s Counsel" y generación precisa de informes legales en PDF.',
                              type: 'Gobernanza Crítica',
                              stack: ['React', 'Lógica Estado', 'Gen. PDF', 'Tiempo Real'],
                        },
                        sector_watch: {
                              title: 'SECTOR_WATCH',
                              description: 'Infraestructura de seguridad física para institución educativa francesa. Cuenta con lógica de código QR para control de acceso, tablero sectorizado para monitoreo de flujo y seguimiento de estudiantes en tiempo real.',
                              type: 'Seguridad Física',
                              stack: ['Lógica IoT', 'QR Code', 'React', 'Dashboard'],
                        },
                        core_sync: {
                              title: 'CORE_SYNC',
                              description: 'Sincronización Full-stack para centro de desarrollo. Arquitectura híbrida integrando Frontend React con Backend Spring Boot, migrando persistencia local a APIs robustas y seguras.',
                              type: 'Infra Fullstack',
                              stack: ['React', 'Spring Boot', 'Java', 'API Rest'],
                        },
                        media_ops: {
                              title: 'MEDIA_OPS',
                              description: 'Plataforma de medios de alto rendimiento visual. Integración profunda con Spotify API, optimización de SEO técnico y animaciones avanzadas (GSAP) con física magnética y efectos de paralaje.',
                              type: 'UI Alto Rendimiento',
                              stack: ['React', 'GSAP', 'Spotify API', 'Motion UX'],
                        },
                  }
            },
            labs: {
                  title: 'MAGBO_LABS // OPS_TÁCTICAS',
                  view_source: 'CÓDIGO FUENTE',
                  preview: 'VISTA_DESCLASIFICADA',
                  items: {
                        media_ops: {
                              title: 'MEDIA_OPS',
                              tagline: 'Interfaz de audio de alta fidelidad con UI motion avanzada.',
                              description: 'Plataforma experimental de podcast explorando los límites de Web Audio API y animaciones GSAP.',
                              stack: ['React', 'GSAP', 'Spotify API'],
                        },
                        java_init: {
                              title: 'JAVA_INIT',
                              tagline: 'Arquitectura core backend y estructuración de API.',
                              description: 'Inmersión profunda en los internos de Spring Boot y exploración de patrones de diseño de API RESTful.',
                              stack: ['Java', 'Spring Boot', 'Maven'],
                        },
                        identity: {
                              title: 'IDENTITY_V1',
                              tagline: 'Arquitectura de portafolio seguro autorreferencial.',
                              description: 'La arquitectura recursiva de este propio sitio, diseñada como estudio en principios de UI segura.',
                              stack: ['React', 'Tailwind', 'Security UI'],
                        },
                  }
            },
            archive: {
                  title: 'ARCHIVO DE PROYECTOS COMPLETO // SAMMY K MAGBO',
                  subtitle: 'LOG OPERATIVO & HISTORIAL DE INGENIERÍA',
                  cols: {
                        year: 'AÑO',
                        project: 'NOMBRE DE OPERACIÓN',
                        built_with: 'CONSTRUÍDO CON',
                        link: 'ENLACE',
                  },
                  data: {
                        vote_guard: 'PROTOCOLO: VOTE_GUARD (MeetingManager)',
                        sector_watch: 'SECTOR_WATCH (Sistema de Control de Acceso)',
                        core_sync: 'CORE_SYNC (Integración CDI)',
                        media_ops: 'MEDIA_OPS (The Talk)',
                        java_init: 'JAVA_INIT (Portafolio Spring Boot)',
                  }
            },
            expertise: {
                  capabilities: 'CAPACIDADES_OPERATIVAS',
                  events: 'EVENTOS_CLAVE_SISTEMA',
                  risk_level: 'NIVEL_RIESGO',
                  current_state: 'ESTADO ACTUAL: ACTIVO',
            },
            radar: {
                  title: 'RADAR_TECNOLÓGICO // MATRIZ_SENSOR',
                  quadrants: {
                        adopt: 'ADOPTAR // PRODUCCIÓN',
                        trial: 'PROBAR // BETA',
                        assess: 'EVALUAR // OBSERVACIÓN',
                        hold: 'RETENER // DEPRECADO',
                  }
            },
            status: {
                  title: 'ESTADO_SISTEMA // CENTRO_CONFIANZA',
                  uptime: 'TIEMPO ACTIVIDAD',
                  latency: 'LATENCIA GLOBAL',
                  threats: 'AMENAZAS BLOQUEADAS',
                  services: {
                        api: 'GATEWAY API',
                        portals: 'PORTALES CLIENTE',
                        encryption: 'MÓDULOS ENCRIPTACIÓN',
                  },
                  history: 'HISTORIAL INCIDENTES',
                  operational: 'OPERATIVO',
                  secure: 'SEGURO',
                  maintenance: 'MANTENIMIENTO - PARCHE SEGURIDAD',
                  resolved: 'RESUELTO',
            },
            intel: {
                  title: 'BRIEFINGS_INTELIGENCIA',
                  subtitle: 'T.L.P. // AMBER // WHITE',
                  access_btn: 'SOLICITAR ACCESO TOTAL',
                  read_more: 'LEER BRIEFING',
                  disclosed: 'DIVULGADO EM',
            },
            contact: {
                  title: 'Iniciar Protocolo Seguro',
                  subtitle: 'Objetivo: MAGBO_HQ // Nivel Encriptación: AES-256',
                  secure_channel: 'CANAL_SEGURO_V1.4',
                  identification: 'Identificación (Nombre)',
                  email: 'Email Institucional',
                  briefing: 'Briefing del Proyecto',
                  placeholders: {
                        id: 'INSERTAR IDENTIFICADOR...',
                        email: 'USUARIO@AGENCIA.GOV',
                        briefing: 'DESCRIBA OBJETIVOS DE LA MISIÓN Y REQUISITOS TÉCNICOS...',
                  },
                  button: {
                        encrypting: 'ENCRIPTANDO PAQUETES...',
                        initiate: 'INICIAR COMUNICACIÓN',
                  },
                  success: {
                        title: 'Protocolo Iniciado',
                        message: 'Transmisión exitosa. Nuestro equipo desencriptará su briefing y establecerá un enlace seguro en breve.',
                        new: 'Iniciar Nova Transmissão',
                  },
                  encryption_label: 'ENCRIPTACIÓN: AES-256-GCM',
                  link_active: 'ENLACE ACTIVO',
            }
      }
};
