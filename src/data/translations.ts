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
                  title_start: 'Building',
                  title_gradient: 'Critical Systems',
                  title_middle: 'Where Failure Is',
                  title_end: 'Not An Option.',
                  description: 'Elite Software Engineering & Security Architecture. We architect institutional-grade platforms, secure environments, and high-scale solutions for government and enterprise sectors.',
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
                              description: 'High-stakes electronic voting system with real-time state machine logic, quorum control, and cryptographic audit trails for executive decision making.',
                              type: 'Critical Safety',
                              stack: ['React', 'State Machine', 'PDF Gen', 'Real-time'],
                        },
                        access_alpha: {
                              title: 'ACCESS_CONTROL_ALPHA',
                              description: 'Physical security infrastructure for educational institutions. Features sector-based monitoring, QR Code scanning, and student tracking.',
                              type: 'GovTech',
                              stack: ['IoT Integration', 'Tablet Ops', 'Analytics'],
                        },
                        data_nexus: {
                              title: 'DATA_SYNC_NEXUS',
                              description: 'Full-stack integration module synchronizing legacy systems with modern React frontends via Spring Boot, ensuring data persistence and integrity.',
                              type: 'High Scale',
                              stack: ['Spring Boot', 'React', 'REST API', 'PostgreSQL'],
                        },
                        media_ops: {
                              title: 'MEDIA_OPS_VECTOR',
                              description: 'High-performance media distribution platform with Spotify integration, advanced GSAP motion graphics, and SEO optimization for maximum reach.',
                              type: 'High Scale',
                              stack: ['Next.js', 'GSAP', 'Spotify API', 'SEO'],
                        },
                        java_core: {
                              title: 'BACKEND_CORE_INIT',
                              description: 'Robust backend infrastructure initiative focusing on clean architecture, Maven configuration, and scalable RESTful services.',
                              type: 'Infrastructure',
                              stack: ['Java', 'Maven', 'Spring Boot', 'Clean Arch'],
                        },
                        magbo_kernel: {
                              title: 'MAGBO_HQ_KERNEL',
                              description: 'The secure, elite portfolio system you are currently navigating. Designed for authority, performance, and global operations.',
                              type: 'Identity',
                              stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
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
                  title_start: 'Construindo',
                  title_gradient: 'Sistemas Críticos',
                  title_middle: 'Onde Falhar',
                  title_end: 'Não É Opção.',
                  description: 'Engenharia de Software de Elite & Arquitetura de Segurança. Arquitetamos plataformas institucionais, ambientes seguros e soluções de alta escala para governo e grandes empresas.',
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
                              description: 'Sistema de votação eletrônica de alto risco com lógica de máquina de estados em tempo real, controle de quórum e trilhas de auditoria criptográfica.',
                              type: 'Segurança Crítica',
                              stack: ['React', 'Máquina de Estados', 'Ger. PDF', 'Tempo Real'],
                        },
                        access_alpha: {
                              title: 'CONTROLE_ACESSO_ALPHA',
                              description: 'Infraestrutura de segurança física para instituições de ensino. Monitoramento por setor, escaneamento de QR Code e rastreamento de alunos.',
                              type: 'GovTech',
                              stack: ['Integração IoT', 'Ops Tablet', 'Analytics'],
                        },
                        data_nexus: {
                              title: 'NEXUS_SINCRONIA_DADOS',
                              description: 'Módulo de integração full-stack sincronizando sistemas legados com frontends React via Spring Boot, garantindo persistência e integridade.',
                              type: 'Alta Escala',
                              stack: ['Spring Boot', 'React', 'API REST', 'PostgreSQL'],
                        },
                        media_ops: {
                              title: 'VETOR_OPS_MÍDIA',
                              description: 'Plataforma de distribuição de mídia de alta performance com integração Spotify, motion graphics avançados GSAP e otimização SEO.',
                              type: 'Alta Escala',
                              stack: ['Next.js', 'GSAP', 'Spotify API', 'SEO'],
                        },
                        java_core: {
                              title: 'INICIATIVA_CORE_BACKEND',
                              description: 'Iniciativa robusta de infraestrutura backend focada em arquitetura limpa, configuração Maven e serviços RESTful escaláveis.',
                              type: 'Infraestrutura',
                              stack: ['Java', 'Maven', 'Spring Boot', 'Clean Check'],
                        },
                        magbo_kernel: {
                              title: 'KERNEL_MAGBO_HQ',
                              description: 'O sistema de portfólio seguro e de elite que você está navegando. Projetado para autoridade, performance e operações globais.',
                              type: 'Identidade',
                              stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
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
                  title_start: 'Construyendo',
                  title_gradient: 'Sistemas Críticos',
                  title_middle: 'Donde Fallar',
                  title_end: 'No Es Opción.',
                  description: 'Ingeniería de Software de Élite y Arquitectura de Seguridad. Arquitectamos plataformas institucionales, entornos seguros y soluciones de alta escala para gobierno y grandes empresas.',
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
                              description: 'Sistema de votación electrónica de alto riesgo con lógica de máquina de estados en tiempo real, control de quórum y pistas de auditoría criptográfica.',
                              type: 'Seguridad Crítica',
                              stack: ['React', 'Máquina Estados', 'Gen. PDF', 'Tiempo Real'],
                        },
                        access_alpha: {
                              title: 'CONTROL_ACCESO_ALPHA',
                              description: 'Infraestructura de seguridad física para instituciones educativas. Monitoreo por sector, escaneo de códigos QR y seguimiento de estudiantes.',
                              type: 'GovTech',
                              stack: ['Integración IoT', 'Tablet Ops', 'Analytics'],
                        },
                        data_nexus: {
                              title: 'NEXUS_SINCRONIA_DATOS',
                              description: 'Módulo de integración full-stack sincronizando sistemas heredados con frontends React vía Spring Boot, asegurando persistencia e integridad.',
                              type: 'Alta Escala',
                              stack: ['Spring Boot', 'React', 'API REST', 'PostgreSQL'],
                        },
                        media_ops: {
                              title: 'VECTOR_OPS_MEDIA',
                              description: 'Plataforma de distribución de medios de alto rendimiento con integración Spotify, gráficos de movimiento avanzados GSAP y optimización SEO.',
                              type: 'Alta Escala',
                              stack: ['Next.js', 'GSAP', 'Spotify API', 'SEO'],
                        },
                        java_core: {
                              title: 'INICIATIVA_CORE_BACKEND',
                              description: 'Iniciativa robusta de infraestructura backend centrada en arquitectura limpia, configuración Maven y servicios RESTful escalables.',
                              type: 'Infraestructura',
                              stack: ['Java', 'Maven', 'Spring Boot', 'Clean Arch'],
                        },
                        magbo_kernel: {
                              title: 'KERNEL_MAGBO_HQ',
                              description: 'El sistema de portafolio seguro y de élite que está navegando. Diseñado para autoridad, rendimiento y operaciones globales.',
                              type: 'Identidad',
                              stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
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
                        built_with: 'CONSTRUIDO CON',
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
                  disclosed: 'DIVULGADO EN',
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
                        new: 'Iniciar Nueva Transmisión',
                  },
                  encryption_label: 'ENCRIPTACIÓN: AES-256-GCM',
                  link_active: 'ENLACE ACTIVO',
            }
      }
};
