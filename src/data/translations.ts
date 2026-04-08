export type Language = 'en' | 'pt' | 'es' | 'fr' | 'sw';

export const TRANSLATIONS = {
      en: {
                        exp: {
          "aefe": {
                    "role": "Vie Scolaire",
                    "bullets": [
                              "Multicultural and bilingual environment management across French educational institutions",
                              "School and academic organization, strategic communication with families",
                              "Preparation and coordination for international certifications (BAC, Brevet, PIX)"
                    ]
          },
          "sedeics": {
                    "role": "IT Development Agent — Strategic Projects",
                    "bullets": [
                              "Led the PDTIC (IT Master Plan) initiative for IT governance and system modernization",
                              "Managed cross-departmental technology infrastructure and data organization",
                              "Delivered strategic IT reports and digital transformation roadmaps"
                    ]
          },
          "noceci": {
                    "role": "Managing Partner",
                    "bullets": [
                              "Administrative leadership and legal representation",
                              "Management of human resources, financial operations, and technology stack",
                              "Strategic planning and business development"
                    ]
          },
          "cl20": {
                    "role": "Founder — C.L. 2.0 (Language Courses)",
                    "bullets": [
                              "University entrepreneurship project focused on multilingual education (English, Spanish, French, Italian)",
                              "Developed the business model, bilingual curriculum strategy, and operational framework",
                              "Bridged technology and language learning through academic-led initiatives"
                    ]
          },
          "maori": {
                    "role": "Agent — Information Security",
                    "bullets": [
                              "Customer service and information security support for the DCNS project",
                              "Operational execution in high-clearance environments"
                    ]
          }
},
            edu: {
          "uva": {
                    "degree": "Bachelor",
                    "field": "Computer Science",
                    "note": "Project Academic Manager (2018)"
          },
          "iserj": {
                    "degree": "Technical Diploma",
                    "field": "IT & Systems",
                    "note": ""
          }
},
            proj: {
          "magbo-studio": "Personal portfolio and engineering showcase. Built with React, TypeScript, GSAP animations, and Tailwind CSS on a dark premium design system.",
          "controle-de-acesso": "IoT-driven physical security and access control system for an educational institution. Features QR-based access, sector monitoring dashboards, and real-time tracking.",
          "ccc-cdi": "Full-stack access control and management system for the CDI organizational center. TypeScript frontend with real-time state management.",
          "french-lms": "Language learning management system for French education. Full-stack architecture with Spring Boot backend and React frontend.",
          "satisystem": "Systems development project (TCC) focused on process automation and institutional management. Built as a capstone project at ISERJ.",
          "the-talk": "A podcast platform for fashion content by Mijean Rochus. Sleek media interface with audio playback capabilities and modern design.",
          "magbo-studio-backend": "Spring Boot backend architecture for enterprise applications. Clean Architecture patterns, domain isolation, and strict persistence policies.",
          "floresta-unity": "Environmental simulation game built with Unity and C#. Explores ecological themes through interactive 3D experiences."
},
            ui: {
          "experience_badge": "02 — Experience",
          "experience_title": "Professional <span class=\"marker-orange\">Trajectory</span>",
          "education_badge": "Education",
          "work_badge": "03 — Selected Work",
          "work_title": "<span class=\"marker-blue\">Engineering</span> Logs",
          "skills_badge": "04 — Skills & Expertise",
          "skills_title": "Technical <span class=\"marker-red\">Arsenal</span>",
          "contact_badge": "05 — Initializing Connection",
          "contact_title": "Establish <span class=\"marker-turquoise\">Protocol</span>"
},
            about: {
                  section_label: '01 — About',
                  title: 'Technology, innovation, and <span class="marker-turquoise">strategic execution</span>.',
                  p1: 'I\'m a <span class="marker-blue">Computer Science graduate</span> with experience spanning <span class="marker-violet"> IT governance</span>, system modernization, and institutional-grade platform development. My work bridges <span class="marker-orange">public sector innovation</span> — from state-level IT master plans to <span class="marker-red">full-stack applications</span> serving educational networks.',
                  p2: 'Based in <span class="marker-green">Rio de Janeiro</span>, I operate across cultures and languages (French, Portuguese, English, Spanish, Italian) — managing <span class="marker-yellow">multicultural teams</span> and delivering projects where operational clarity and technical precision are non-negotiable.',
                  stats: { projects: 'Projects Shipped', languages: 'Languages Spoken', grad: 'B.Sc. Degree', cs: 'Computer Science', years: 'Years in Tech' }
            },
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
            meta: {
                  title: 'MAGBO STUDIO | Elite Software Architecture',
                  description: 'Specialized in Critical Infrastructure, GovTech & High-Security Systems. We architect institutional-grade platforms where failure is not an option.',
                  keywords: 'Software Architecture, Java, Spring Boot, React, Security, GovTech, Critical Infrastructure',
            },
            hero: {
                  status: 'SYSTEM OPERATIONAL // READY TO DEPLOY',
                  title_start: 'Sammy',
                  title_gradient: 'K Magbo',
                  title_middle: 'Innovator &',
                  title_end: 'Problem Solver.',
                  description: 'Professional with solid experience in technology, innovation, and project management. I integrate my background in Computer Science with practical experience in systems implementation, process modernization, and operational management. Elite Software Engineering & Security Architecture.',
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
                              title: 'PROTOCOLE: VOTE_GUARD',
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
                        meeting_manager: {
                              title: 'MEETING_MANAGER',
                              description: 'Time and attendance control system. A practical solution for managing meetings and tracking schedules.',
                              type: 'SaaS Application',
                              stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
                        },
                        the_talk_fashion: {
                              title: 'THE_TALK_FASHION',
                              description: 'A podcast website by Mijean Rochus focusing on fashion. Features a sleek design and media playback capabilities.',
                              type: 'Media Platform',
                              stack: ['React', 'Tailwind CSS', 'Vite', 'Frontend'],
                        },
                        satisystem: {
                              title: 'SATISYSTEM',
                              description: 'Final research project for Computer Science. Developed technical solutions and system implementations for academic excellence.',
                              type: 'Academic/AI',
                              stack: ['Java', 'Weka', 'AI Logic', 'Research'],
                        },
                  }
            },
            labs: {
                  title: 'MAGBO_LABS // TACTICAL_OPS',
                  view_source: 'SOURCE_CODE',
                  preview: 'DECLASSIFIED_PREVIEW',
                  items: {
                        media_ops: {
                              title: 'MEDIA_OPS // FREQUENCY_MOD',
                              tagline: 'High-fidelity synchronization between audio streams and DOM.',
                              description: 'DSP implementation via Web Audio API, leveraging Fast Fourier Transforms (FFT) for real-time spectrum visualization with sub-10ms latency.',
                              stack: ['React', 'Web Audio API', 'GSAP', 'Canvas'],
                        },
                        java_init: {
                              title: 'JAVA_INIT // KERNEL_01',
                              tagline: 'Reference architecture for mission-critical systems.',
                              description: 'Spring Boot operational core focused on resilience. Implements Clean Architecture, domain isolation, and strict persistence policies with PostgreSQL.',
                              stack: ['Spring Boot', 'Clean Arch', 'PostgreSQL', 'Docker'],
                        },
                        identity: {
                              title: 'IDENTITY_V1 // SELF_REF',
                              tagline: 'Recursive design system and tactical command interface.',
                              description: 'Development of the MAGBO STUDIO visual core. Focused on rendering performance, parametric typography, and state integrity via TypeScript.',
                              stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
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
                        vote_guard: 'VOTE_GUARD // DISTRIBUTED CONSENSUS & VOTING INTEGRITY PROTOCOL',
                        sector_watch: 'SECTOR_WATCH // PERIMETER VIGILANCE & IOT ACCESS CONTROL',
                        core_sync: 'CORE_SYNC // FULL-STACK MIGRATION & DATA SYNCHRONIZATION ORCHESTRATOR',
                        media_ops: 'MEDIA_OPS // DIGITAL SIGNAL PROCESSING & AUDIOVISUAL RENDERING',
                        java_init: 'JAVA_INIT // ROBUST BACKEND REFERENCE ARCHITECTURE',
                        meeting_manager: 'MEETING_MANAGER // TIME & ATTENDANCE CONTROL SAAS',
                        the_talk_fashion: 'THE_TALK_FASHION // FASHION PODCAST PLATFORM',
                  }
            },
            expertise: {
                  capabilities: 'OPERATIONAL_CAPABILITIES',
                  events: 'KEY_SYSTEM_EVENTS',
                  risk_level: 'EXPERTISE_LEVEL',
                  current_state: 'CURRENT STATE: ACTIVE',
                  list: {
                        backend: { title: 'Backend Java Development', description: 'REST API creation, Spring Boot application structuring, clear business logic.' },
                        integration: { title: 'System Integration & Logic', description: 'Front-back connection, workflow organization, data structuring.' },
                        ai: { title: 'AI Prototyping (Java)', description: 'Experimentation, model integration, applied technical approach.' },
                        logic: { title: 'Logical Analysis', description: 'Strong structural thinking and problem-solving beyond standard junior level.' },
                  },
                  history: {
                        stage1: { year: '2022-Present', event: 'Development Agency & Business', description: 'Development Agent at SEDEICS and Socio Administrator at Noceci Viagens. Managing IT projects and administrative operations.' },
                        stage2: { year: '2020-Present', event: 'Educational Support', description: 'Vie Scolaire at AEFE. Working in a multicultural and bilingual environment, supporting school management.' },
                        stage3: { year: '2018-2025', event: 'Academic Growth', description: 'Computer Science degree at Universidade Veiga de Almeida. Focus on software development and leadership.' },
                  }
            },
            radar: {
                  title: 'TECHNOLOGY_RADAR // SENSOR_ARRAY',
                  quadrants: {
                        adopt: 'ADOPT // PRODUCTION_READY',
                        trial: 'TRIAL // BETA_TESTING',
                        assess: 'ASSESS // OBSERVATION',
                        hold: 'HOLD // DEPRECATED',
                  },
                  items: {
                        react: { name: 'React 18', description: 'Standard library for component-based UI architecture.' },
                        ts: { name: 'TypeScript', description: 'Enforced type safety for critical systems.' },
                        node: { name: 'Node.js', description: 'Scalable backend runtime for real-time services.' },
                        go: { name: 'Go (Golang)', description: 'High-performance microservices and CLI tools.' },
                        tailwind: { name: 'Tailwind CSS', description: 'Utility-first styling for consistent design systems.' },
                        rust: { name: 'Rust', description: 'Evaluating for memory-safe system components.' },
                        wasm: { name: 'WebAssembly', description: 'High-computation modules in browser environments.' },
                        astro: { name: 'Astro', description: 'Content-focused deployments with partial hydration.' },
                        quantum: { name: 'Quantum Encryption', description: 'Monitoring post-quantum cryptography standards.' },
                        homomorphic: { name: 'Homomorphic Enc', description: 'Computation on encrypted data without decryption.' },
                        ai_agents: { name: 'Autonomous Agents', description: 'LLM-driven system orchestration.' },
                        php: { name: 'PHP Legacy', description: 'Security risks in legacy execution models.' },
                        jquery: { name: 'jQuery', description: 'Redundant with modern DOM APIs.' },
                        soap: { name: 'SOAP', description: 'Heavy XML payload; prefer REST/gRPC.' },
                  }
            },
            status: {
                  title: 'SYSTEM_STATUS // TRUST_CENTER',
                  uptime: 'SYSTEM UPTIME',
                  latency: 'GLOBAL LATENCY',
                  threats: 'THREATS BLOCKED',
                  services: {
                        exp: {
          "aefe": {
                    "role": "Vie Scolaire",
                    "bullets": [
                              "Gestión de ambiente multicultural y bilingüe en instituciones francesas",
                              "Organización escolar y académica, comunicación estratégica",
                              "Coordinación de certificaciones internacionales (BAC, Brevet)"
                    ]
          },
          "sedeics": {
                    "role": "Agente de Desarrollo IT — Proyectos Estratégicos",
                    "bullets": [
                              "Dirigió la iniciativa del Plan Maestro de TI para gobernanza y modernización",
                              "Gestionó la infraestructura tecnológica interdepartamental",
                              "Entregó hojas de ruta de transformación digital y reportes de TI"
                    ]
          },
          "noceci": {
                    "role": "Socio Administrador",
                    "bullets": [
                              "Liderazgo administrativo",
                              "Gestión de recursos humanos, finanzas y tecnología",
                              "Desarrollo de negocios"
                    ]
          },
          "cl20": {
                    "role": "Fundador — C.L. 2.0 (Cursos de Idiomas)",
                    "bullets": [
                              "Proyecto de emprendimiento enfocado en educación multilingüe",
                              "Desarrolló modelo de negocio y currículo",
                              "Unió tecnología y aprendizaje de idiomas"
                    ]
          },
          "maori": {
                    "role": "Agente — Seguridad de Información",
                    "bullets": [
                              "Atención al cliente y soporte para el proyecto DCNS",
                              "Ejecución en ambientes de alta seguridad"
                    ]
          }
},
            edu: {
          "uva": {
                    "degree": "Bachillerato",
                    "field": "Ciencias de la Computación",
                    "note": "Gerente Académico de Proyectos (2018)"
          },
          "iserj": {
                    "degree": "Diploma Técnico",
                    "field": "TI y Sistemas",
                    "note": ""
          }
},
            proj: {
          "magbo-studio": "Portafolio personal diseñado con React, TypeScript, Tailwind y GSAP.",
          "controle-de-acesso": "Control de seguridad IoT y acceso para centros educativos.",
          "ccc-cdi": "Sistema de gestión CDI y control de acceso Full-stack.",
          "french-lms": "Plataforma LMS para el aprendizaje de francés con Spring Boot.",
          "satisystem": "Sistema de recolección de puntos enfocado a escuelas.",
          "the-talk": "Plataforma de moda y podcast desarrollada para Mijean Rochus.",
          "magbo-studio-backend": "API para sistemas críticos usando Java y Spring Boot.",
          "floresta-unity": "Juego Unity C# sobre ecosistemas forestales."
},
            ui: {
          "experience_badge": "02 — Experiencia",
          "experience_title": "Trayectoria <span class=\"marker-orange\">Profesional</span>",
          "education_badge": "Educación",
          "work_badge": "03 — Proyectos Recientes",
          "work_title": "Registros de <span class=\"marker-blue\">Ingeniería</span>",
          "skills_badge": "04 — Habilidades",
          "skills_title": "Arsenal <span class=\"marker-red\">Técnico</span>",
          "contact_badge": "05 — Iniciando Conexión",
          "contact_title": "Establecer <span class=\"marker-turquoise\">Protocolo</span>"
},
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
                  title: 'ENCRYPTED CHANNEL',
                  subtitle: 'Direct line to command. E2E Encrypted.',
                  secure_channel: 'SECURE_CHANNEL_v4.0',
                  encryption_label: '256-BIT ENCRYPTION // ACTIVE',
                  link_active: 'LINK_ESTABLISHED',
                  identification: 'IDENTIFICATION_CODE (NAME)',
                  placeholders: {
                        id: 'ENTER_ID_CODE',
                        email: 'SECURE_EMAIL_ADDRESS',
                        briefing: 'MISSION_BRIEFING // OBJECTIVES',
                  },
                  email: 'CONTACT_VECTOR',
                  briefing: 'MISSION_BRIEFING',
                  button: {
                        initiate: 'INITIATE_HANDSHAKE',
                        encrypting: 'ENCRYPTING_PAYLOAD...',
                  },
                  success: {
                        title: 'TRANSMISSION_SUCCESSFUL',
                        message: 'Your encrypted packet has been received by our secure server. We will analyze the data and respond via secure channel.',
                        new: 'TRANSMIT_NEW_PACKET',
                  }
            },
            footer: {
                  locations_title: 'LOCATIONS',
                  location_hq: 'São Paulo, BR (HQ)',
                  location_remote: 'Remote Ops _Global',
                  legal_title: 'LEGAL',
                  legal_privacy: 'Privacy Protocol',
                  legal_terms: 'Terms of Engagement',
                  connect_title: 'CONNECT',
                  kernel_version: 'MAGBO_STUDIO_KERNEL_V1',
                  tagline: 'Elite software engineering and security architecture for critical systems. Building resilience where failure is not an option.',
                  copyright: '© 2026 MAGBO STUDIO. ALL RIGHTS RESERVED.',
                  secure_connection: 'SECURE_CONNECTION_ESTABLISHED',
                  innovate: 'INNOVATE ALWAYS',
                  cli_hint: '[CLI MODE: PRESS CTRL+~]',
            },
            surface: {
                  hero_line1: 'YOUR SYSTEMS',
                  hero_line2_accent: 'DESERVE',
                  hero_line2_end: 'MORE',
                  hero_line3: 'THAN A NORMAL',
                  hero_line4: 'INTERFACE.',
                  hero_cta: "LET'S TALK",
                  nav_menu: 'Menu',
                  nav_contact: 'Contact Us',
                  nav_home: 'Home',
                  nav_cv: 'My CV',
                  nav_capabilities: 'Capabilities',
                  nav_work: 'Work',
                  qr_placeholder: 'QR Code Space',
                  connect: 'Connect',
                  capabilities_label: '[ CAPABILITIES ]',
                  capabilities_title: 'BUILT',
                  capabilities_title_accent: 'DIFFERENT',
                  capabilities_slide1_label: '01 // Engineering',
                  capabilities_slide1_title: 'Full-Stack Architecture & Cloud Infrastructure',
                  capabilities_slide2_label: '02 // Motion',
                  capabilities_slide2_title: 'Immersive Web Experiences & Animations',
                  process_line1: 'WE BELIEVE',
                  process_line1_accent: 'IN A',
                  process_line2: 'PROCESS',
                  process_line3: 'THAT WORKS.',
                  cv_title: 'THE MIND',
                  cv_title_accent: 'BEHIND',
                  cv_title_end: 'THE CODE.',
                  cv_subtitle: 'I am Sammy K Magbo. A problem solver engineering elite software architectures.',
                  cv_experience: 'EXPERIENCE',
                  cv_exp1_title: 'Development Agent / IT Area',
                  cv_exp1_company: 'SEDEICS • 2022 - Present',
                  cv_exp1_desc: 'Leading IT project initiatives, process modernization, and administrative support for economic development.',
                  cv_exp2_title: 'Vie Scolaire',
                  cv_exp2_company: 'AEFE • 2020 - Present',
                  cv_exp2_desc: 'Managing school dynamics in a bilingual environment, coordinating with families and academic staff.',
                  cv_capabilities: 'CAPABILITIES',
                  cv_profile: 'PROFILE',
                  cv_education: 'Education',
                  cv_education_degree: 'B.Sc. Computer Engineering',
                  cv_education_focus: 'Focus on Distributed Systems',
                  cv_languages: 'Languages',
                  cv_lang_pt: 'Portuguese (Native)',
                  cv_lang_en: 'English (Basic to Intermediate)',
                  cv_lang_es: 'Spanish (Basic)',
                  cv_lang_fr: 'French (Fluent/Native)',
            },
            commands: {
                  placeholder: 'Type a command or search...',
                  no_results: 'No results found.',
                  nav_group: 'Navigation',
                  go_projects: 'Go to Projects',
                  initiate_contact: 'Initiate Contact Protocol',
                  system_group: 'System Actions',
                  download_cv: 'Download System Specs (CV)',
                  toggle_contrast: 'Toggle High Contrast',
                  contact_support: 'Contact Support',
            }
      },
      pt: {
                        exp: {
          "aefe": {
                    "role": "Vie Scolaire",
                    "bullets": [
                              "Gestão de ambiente multicultural e bilíngue em instituições de ensino francesas",
                              "Organização escolar e acadêmica, comunicação estratégica com as famílias",
                              "Preparação e coordenação para certificações internacionais (BAC, Brevet, PIX)"
                    ]
          },
          "sedeics": {
                    "role": "Agente de Desenvolvimento de TI — Projetos Estratégicos",
                    "bullets": [
                              "Liderou a iniciativa do PDTIC (Plano Diretor de TI) para governança e modernização de sistemas",
                              "Gerenciou infraestrutura tecnológica interdepartamental e organização de dados",
                              "Entregou relatórios estratégicos de TI e roteiros de transformação digital"
                    ]
          },
          "noceci": {
                    "role": "Sócio Administrador",
                    "bullets": [
                              "Liderança administrativa e representação legal",
                              "Gestão de recursos humanos, operações financeiras e stack tecnológico",
                              "Planejamento estratégico e desenvolvimento de negócios"
                    ]
          },
          "cl20": {
                    "role": "Fundador — C.L. 2.0 (Cursos de Idiomas)",
                    "bullets": [
                              "Projeto universitário de empreendedorismo focado em educação multilíngue (Inglês, Espanhol, Francês, Italiano)",
                              "Desenvolveu o modelo de negócio, currículo bilíngue e plano operacional",
                              "Conectou tecnologia e aprendizagem de idiomas através de iniciativas lideradas por acadêmicos"
                    ]
          },
          "maori": {
                    "role": "Agente — Segurança da Informação",
                    "bullets": [
                              "Atendimento ao cliente e suporte em segurança da informação para o projeto DCNS",
                              "Execução operacional em ambientes de alta confidencialidade"
                    ]
          }
},
            edu: {
          "uva": {
                    "degree": "Bacharelado",
                    "field": "Ciência da Computação",
                    "note": "Gerente Acadêmico de Projetos (2018)"
          },
          "iserj": {
                    "degree": "Diploma Técnico",
                    "field": "Sistemas e TI",
                    "note": ""
          }
},
            proj: {
          "magbo-studio": "Portfólio pessoal e showcase de engenharia. Construído com React, TypeScript, GSAP e Tailwind CSS em um sistema de design premium escuro.",
          "controle-de-acesso": "Sistema de controle de acesso e segurança física com base em IoT para uma instituição educacional. O sistema lê QR Code e provê dashboards por setor.",
          "ccc-cdi": "Sistema de gestão e controle de acesso full-stack para o centro organizacional CDI. Frontend TypeScript com gestão de estado em tempo real.",
          "french-lms": "Sistema de gestão de aprendizagem para o ensino de francês. Arquitetura full-stack com backend em Spring Boot e frontend em React.",
          "satisystem": "Projeto de desenvolvimento de sistemas (TCC) focado na automação de processos e gestão institucional e de pontuações.",
          "the-talk": "Uma plataforma de podcast para conteúdo de moda por Mijean Rochus. Interface estilística moderna com capacidades avançadas de áudio.",
          "magbo-studio-backend": "Arquitetura de backend Spring Boot para aplicações corporativas. Padrões Clean Architecture, isolamento de domínio e políticas de persistência.",
          "floresta-unity": "Jogo de simulação ambiental construído em Unity e C#. Explora temas ecológicos de forma interativa e complexa."
},
            ui: {
          "experience_badge": "02 — Experiência",
          "experience_title": "Trajetória <span class=\"marker-orange\">Profissional</span>",
          "education_badge": "Educação",
          "work_badge": "03 — Trabalhos Selecionados",
          "work_title": "Logs de <span class=\"marker-blue\">Engenharia</span>",
          "skills_badge": "04 — Habilidades e Expertise",
          "skills_title": "Arsenal <span class=\"marker-red\">Técnico</span>",
          "contact_badge": "05 — Iniciando Conexão",
          "contact_title": "Estabelecer <span class=\"marker-turquoise\">Protocolo</span>"
},
            about: {
                  section_label: '01 — Sobre',
                  title: 'Tecnologia, inovação e <span class="marker-turquoise">execução estratégica</span>.',
                  p1: 'Sou <span class="marker-blue">formado em Ciência da Computação</span> com experiência abrangendo <span class="marker-violet"> governança de TI</span>, modernização de sistemas e desenvolvimento de plataformas de nível institucional. Meu trabalho conecta <span class="marker-orange">a inovação no setor público</span> — desde planos de TI em nível estadual até <span class="marker-red">aplicações full-stack</span>.',
                  p2: 'Sediado no <span class="marker-green">Rio de Janeiro</span>, opero através de culturas e idiomas (Francês, Português, Inglês, Espanhol) — gerenciando <span class="marker-yellow">equipes multiculturais</span> e entregando projetos onde a clareza sempre é inegociável.',
                  stats: { projects: 'Projetos Entregues', languages: 'Idiomas Falados', grad: 'Graduação', cs: 'Ciência da Computação', years: 'Anos de Experiência' }
            },
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
            meta: {
                  title: 'MAGBO STUDIO | Arquitetura de Software de Elite',
                  description: 'Especializado em Infraestrutura Crítica, GovTech e Sistemas de Alta Segurança. Arquitetamos plataformas de nível institucional onde falhar não é uma opção.',
                  keywords: 'Arquitetura de Software, Java, Spring Boot, React, Segurança, GovTech, Infraestrutura Crítica',
            },
            hero: {
                  status: 'SISTEMA OPERACIONAL // PRONTO PARA DEPLOY',
                  title_start: 'Sammy',
                  title_gradient: 'K Magbo',
                  title_middle: 'Inovador e',
                  title_end: 'Solucionista.',
                  description: 'Sou um profissional com sólida experiência em tecnologia, inovação e gestão de projetos. Integro minha formação em Ciência da Computação a experiências práticas em implantação de sistemas, modernização de processos e gestão operacional. Engenharia de Software de Elite & Arquitetura de Segurança.',
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
                        meeting_manager: {
                              title: 'MEETING_MANAGER',
                              description: 'Sistema de controle de tempo e assistência. Uma solução prática para gerenciar reuniões e rastrear horários.',
                              type: 'SaaS Application',
                              stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
                        },
                        the_talk_fashion: {
                              title: 'THE_TALK_FASHION',
                              description: 'Site de podcast por Mijean Rochus focado em moda. Apresenta um design elegante e reprodução de mídia.',
                              type: 'Plataforma de Mídia',
                              stack: ['React', 'Tailwind CSS', 'Vite', 'Frontend'],
                        },
                        satisystem: {
                              title: 'SATISYSTEM',
                              description: 'Projeto de pesquisa final para Ciência da Computação. Desenvolveu soluções técnicas e implementações de sistemas para excelência acadêmica.',
                              type: 'Acadêmico/IA',
                              stack: ['Java', 'Weka', 'Lógica IA', 'Pesquisa'],
                        },
                  }
            },
            labs: {
                  title: 'MAGBO_LABS // OPS_TÁTICAS',
                  view_source: 'CÓDIGO FONTE',
                  preview: 'PREVIEW_DESCLASSIFICADO',
                  items: {
                        media_ops: {
                              title: 'MEDIA_OPS // FREQUENCY_MOD',
                              tagline: 'Sincronização de alta fidelidade entre streams de áudio e DOM.',
                              description: 'Implementação de DSP via Web Audio API, utilizando Transformadas Rápidas de Fourier (FFT) para visualização de espectro em tempo real com latência sub-10ms.',
                              stack: ['React', 'Web Audio API', 'GSAP', 'Canvas'],
                        },
                        java_init: {
                              title: 'JAVA_INIT // KERNEL_01',
                              tagline: 'Arquitetura de referência para sistemas de missão crítica.',
                              description: 'Núcleo operacional Spring Boot focado em resiliência. Implementa Clean Architecture, isolamento de domínio e políticas estritas de persistência com PostgreSQL.',
                              stack: ['Spring Boot', 'Clean Arch', 'PostgreSQL', 'Docker'],
                        },
                        identity: {
                              title: 'IDENTITY_V1 // SELF_REF',
                              tagline: 'Design system recursivo e interface de comando tático.',
                              description: 'Desenvolvimento do núcleo visual do MAGBO STUDIO. Focado em performance de renderização, tipografia paramétrica e integridade de estado via TypeScript.',
                              stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
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
                        vote_guard: 'VOTE_GUARD // PROTOCOLO DE CONSENSO DISTRIBUÍDO',
                        sector_watch: 'SECTOR_WATCH // VIGILÂNCIA DE PERÍMETRO IOT',
                        core_sync: 'CORE_SYNC // ORQUESTRADOR DE SINCRONIZAÇÃO DE DADOS',
                        media_ops: 'MEDIA_OPS // PROCESSAMENTO DE SINAL DIGITAL E RENDERIZAÇÃO AV',
                        java_init: 'JAVA_INIT // ARQUITETURA DE REFERÊNCIA BACKEND ROBUSTA',
                        meeting_manager: 'MEETING_MANAGER // CONTROLE DE TEMPO E ASSISTÊNCIA SAAS',
                        the_talk_fashion: 'THE_TALK_FASHION // PLATAFORMA DE PODCAST DE MODA',
                  }
            },
            expertise: {
                  capabilities: 'CAPACIDADES_OPERACIONAIS',
                  events: 'EVENTOS_CHAVE_SISTEMA',
                  risk_level: 'NÍVEL_EXPERTISE',
                  current_state: 'ESTADO ATUAL: ATIVO',
                  list: {
                        backend: { title: 'Desenvolvimento Backend Java', description: 'Criação de API REST, estruturação de aplicações Spring Boot, lógica de negócios clara.' },
                        integration: { title: 'Integração de Sistemas & Lógica', description: 'Conexão front-back, organização de fluxos, estruturação de dados.' },
                        ai: { title: 'Prototipagem de IA (Java)', description: 'Experimentação, integração de modelos, abordagem técnica aplicada.' },
                        logic: { title: 'Análise Lógica', description: 'Pensamento estrutural forte e resolução de problemas além do nível júnior padrão.' },
                  },
                  history: {
                        stage1: { year: '2022-Presente', event: 'Agente de Desenvolvimento e Negócios', description: 'Agente na SEDEICS e Sócio Administrador na Noceci Viagens. Gerenciando projetos de TI e operações administrativas.' },
                        stage2: { year: '2020-Presente', event: 'Apoio Educacional', description: 'Vie Scolaire na AEFE. Atuando em ambiente multicultural e bilíngue, apoiando a gestão escolar.' },
                        stage3: { year: '2018-2025', event: 'Crescimento Acadêmico', description: 'Graduação em Ciência da Computação na Universidade Veiga de Almeida. Foco em desenvolvimento de software e liderança.' },
                  }
            },
            radar: {
                  title: 'RADAR_TECNOLÓGICO // MATRIZ_SENSOR',
                  quadrants: {
                        adopt: 'ADOTAR // PRODUÇÃO',
                        trial: 'TESTAR // BETA',
                        assess: 'AVALIAR // OBSERVAÇÃO',
                        hold: 'RETER // DEPRECIADO',
                  },
                  items: {
                        react: { name: 'React 18', description: 'Biblioteca padrão para arquitetura de UI baseada em componentes.' },
                        ts: { name: 'TypeScript', description: 'Segurança de tipos imposta para sistemas críticos.' },
                        node: { name: 'Node.js', description: 'Runtime de backend escalável para serviços em tempo real.' },
                        go: { name: 'Go (Golang)', description: 'Microsserviços de alta performance e ferramentas CLI.' },
                        tailwind: { name: 'Tailwind CSS', description: 'Estilização utility-first para sistemas de design consistentes.' },
                        rust: { name: 'Rust', description: 'Avaliando para componentes de sistema seguros contra falhas de memória.' },
                        wasm: { name: 'WebAssembly', description: 'Módulos de alta computação em ambientes de navegador.' },
                        astro: { name: 'Astro', description: 'Implantações focadas em conteúdo com hidratação parcial.' },
                        quantum: { name: 'Criptografia Quântica', description: 'Monitorando padrões de criptografia pós-quântica.' },
                        homomorphic: { name: 'Cript. Homomórfica', description: 'Computação em dados criptografados sem descriptografia.' },
                        ai_agents: { name: 'Agentes Autônomos', description: 'Orquestração de sistemas impulsionada por LLM.' },
                        php: { name: 'PHP Legado', description: 'Riscos de segurança em modelos de execução legados.' },
                        jquery: { name: 'jQuery', description: 'Redundante com APIs modernas do DOM.' },
                        soap: { name: 'SOAP', description: 'Payload XML pesado; preferir REST/gRPC.' },
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
                  title: 'CANAL CRIPTOGRAFADO',
                  subtitle: 'Linha direta com o comando. Criptografia E2E.',
                  secure_channel: 'CANAL_SEGURO_v4.0',
                  encryption_label: 'CRIPTOGRAFIA 256-BIT // ATIVA',
                  link_active: 'LINK_ESTABELECIDO',
                  identification: 'CÓDIGO_IDENTIFICAÇÃO (NOME)',
                  placeholders: {
                        id: 'INSERIR_CÓDIGO_ID',
                        email: 'ENDEREÇO_EMAIL_SEGURO',
                        briefing: 'RESUMO_MISSÃO // OBJETIVOS',
                  },
                  email: 'VETOR_CONTATO',
                  briefing: 'RESUMO_MISSÃO',
                  button: {
                        initiate: 'INICIAR_HANDSHAKE',
                        encrypting: 'CRIPTOGRAFANDO_PAYLOAD...',
                  },
                  success: {
                        title: 'TRANSMISSÃO_BEM_SUCEDIDA',
                        message: 'Seu pacote criptografado foi recebido pelo nosso servidor seguro. Analisaremos os dados e responderemos via canal seguro.',
                        new: 'TRANSMITIR_NOVO_PACOTE',
                  }
            },
            footer: {
                  locations_title: 'LOCALIZAÇÃO',
                  location_hq: 'São Paulo, BR (HQ)',
                  location_remote: 'Ops Remotas _Global',
                  legal_title: 'LEGAL',
                  legal_privacy: 'Protocolo de Privacidade',
                  legal_terms: 'Termos de Engajamento',
                  connect_title: 'CONECTAR',
                  kernel_version: 'MAGBO_STUDIO_KERNEL_V1',
                  tagline: 'Engenharia de software de elite e arquitetura de segurança para sistemas críticos. Construindo resiliência onde falhar não é uma opção.',
                  copyright: '© 2026 MAGBO STUDIO. TODOS OS DIREITOS RESERVADOS.',
                  secure_connection: 'CONEXÃO_SEGURA_ESTABELECIDA',
                  innovate: 'INOVE SEMPRE',
                  cli_hint: '[MODO CLI: PRESSIONE CTRL+~]',
            },
            surface: {
                  hero_line1: 'SEUS SISTEMAS',
                  hero_line2_accent: 'MERECEM',
                  hero_line2_end: 'MAIS',
                  hero_line3: 'DO QUE UMA INTERFACE',
                  hero_line4: 'NORMAL.',
                  hero_cta: 'VAMOS FALAR',
                  nav_menu: 'Menu',
                  nav_contact: 'Contato',
                  nav_home: 'Início',
                  nav_cv: 'Meu CV',
                  nav_capabilities: 'Capacidades',
                  nav_work: 'Trabalho',
                  qr_placeholder: 'Espaço QR Code',
                  connect: 'Conectar',
                  capabilities_label: '[ CAPACIDADES ]',
                  capabilities_title: 'FEITO',
                  capabilities_title_accent: 'DIFERENTE',
                  capabilities_slide1_label: '01 // Engenharia',
                  capabilities_slide1_title: 'Arquitetura Full-Stack & Infraestrutura Cloud',
                  capabilities_slide2_label: '02 // Movimento',
                  capabilities_slide2_title: 'Experiências Web Imersivas & Animações',
                  process_line1: 'ACREDITAMOS',
                  process_line1_accent: 'EM UM',
                  process_line2: 'PROCESSO',
                  process_line3: 'QUE FUNCIONA.',
                  cv_title: 'A MENTE',
                  cv_title_accent: 'POR TRÁS',
                  cv_title_end: 'DO CÓDIGO.',
                  cv_subtitle: 'Sou Sammy K Magbo. Um solucionista que engenheira arquiteturas de software de elite.',
                  cv_experience: 'EXPERIÊNCIA',
                  cv_exp1_title: 'Agente de Desenvolvimento / Área de TI',
                  cv_exp1_company: 'SEDEICS • 2022 - Presente',
                  cv_exp1_desc: 'Liderando iniciativas de projetos de TI, modernização de processos e suporte administrativo ao desenvolvimento econômico.',
                  cv_exp2_title: 'Vie Scolaire',
                  cv_exp2_company: 'AEFE • 2020 - Presente',
                  cv_exp2_desc: 'Gerenciando dinâmica escolar em ambiente bilíngue, coordenando com famílias e corpo docente acadêmico.',
                  cv_capabilities: 'CAPACIDADES',
                  cv_profile: 'PERFIL',
                  cv_education: 'Formação',
                  cv_education_degree: 'B.Sc. Engenharia da Computação',
                  cv_education_focus: 'Foco em Sistemas Distribuídos',
                  cv_languages: 'Idiomas',
                  cv_lang_pt: 'Português (Nativo)',
                  cv_lang_en: 'Inglês (Básico ao Intermediário)',
                  cv_lang_es: 'Espanhol (Básico)',
                  cv_lang_fr: 'Francês (Fluente/Nativo)',
            },
            commands: {
                  placeholder: 'Digite um comando ou pesquise...',
                  no_results: 'Nenhum resultado encontrado.',
                  nav_group: 'Navegação',
                  go_projects: 'Ir para Projetos',
                  initiate_contact: 'Iniciar Protocolo de Contato',
                  system_group: 'Ações do Sistema',
                  download_cv: 'Baixar Especificações (CV)',
                  toggle_contrast: 'Alternar Alto Contraste',
                  contact_support: 'Suporte',
            }
      },
      es: {
            about: {
                  section_label: '01 — Sobre mí',
                  title: 'Tecnología, innovación y <span class="marker-turquoise">ejecución estratégica</span>.',
                  p1: 'Soy <span class="marker-blue">graduado en Ciencias de la Computación</span> con experiencia que abarca <span class="marker-violet"> gobernanza de TI</span>, modernización de sistemas y desarrollo de plataformas institucionales. Mi trabajo conecta <span class="marker-orange">la innovación en el sector público</span> — desde planes informáticos estatales hasta <span class="marker-red">aplicaciones full-stack</span>.',
                  p2: 'Basado en <span class="marker-green">Río de Janeiro</span>, trabajo con múltiples culturas e idiomas (Francés, Portugués, Inglés, Español) — gestionando <span class="marker-yellow">equipos multiculturales</span> y entregando proyectos con precisión innegociable.',
                  stats: { projects: 'Proyectos', languages: 'Idiomas Hablados', grad: 'Graduación', cs: 'Ciencias de la Computación', years: 'Años de Experiencia' }
            },
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
            meta: {
                  title: 'MAGBO STUDIO | Arquitectura de Software de Élite',
                  description: 'Especializado en Infraestructura Crítica, GovTech y Sistemas de Alta Seguridad. Arquitectamos plataformas de grado institucional donde fallar no es una opción.',
                  keywords: 'Arquitectura de Software, Java, Spring Boot, React, Seguridad, GovTech, Infraestructura Crítica',
            },
            hero: {
                  status: 'SISTEMA OPERATIVO // LISTO PARA DESPLIEGUE',
                  title_start: 'Sammy',
                  title_gradient: 'K Magbo',
                  title_middle: 'Innovador y',
                  title_end: 'Solucionador.',
                  description: 'Profesional con sólida experiencia en tecnología, innovación y gestión de proyectos. Integro mi formación en Ciencias de la Computación con experiencia práctica en implementación de sistemas, modernización de procesos y gestión operativa. Ingeniería de Software de Élite y Arquitectura de Seguridad.',
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
                        meeting_manager: {
                              title: 'MEETING_MANAGER',
                              description: 'Sistema de control de tiempo y asistencia. Una solución práctica para gestionar reuniones y rastrear horarios.',
                              type: 'Aplicación SaaS',
                              stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
                        },
                        the_talk_fashion: {
                              title: 'THE_TALK_FASHION',
                              description: 'Sitio de podcast por Mijean Rochus centrado en la moda. Cuenta con un diseño elegante y capacidades de reproducción de medios.',
                              type: 'Plataforma de Medios',
                              stack: ['React', 'Tailwind CSS', 'Vite', 'Frontend'],
                        },
                        satisystem: {
                              title: 'SATISYSTEM',
                              description: 'Proyecto de investigación final para Ciencias de la Computación. Desarrolló soluciones técnicas e implementaciones de sistemas para la excelencia académica.',
                              type: 'Académico/IA',
                              stack: ['Java', 'Weka', 'Lógica IA', 'Investigación'],
                        },
                  }
            },
            labs: {
                  title: 'MAGBO_LABS // OPS_TÁCTICAS',
                  view_source: 'CÓDIGO FUENTE',
                  preview: 'VISTA_DESCLASIFICADA',
                  items: {
                        media_ops: {
                              title: 'MEDIA_OPS // FREQUENCY_MOD',
                              tagline: 'Sincronización de alta fidelidad entre flujos de audio y DOM.',
                              description: 'Implementación de DSP vía Web Audio API, utilizando Transformadas Rápidas de Fourier (FFT) para visualización de espectro en tiempo real con latencia sub-10ms.',
                              stack: ['React', 'Web Audio API', 'GSAP', 'Canvas'],
                        },
                        java_init: {
                              title: 'JAVA_INIT // KERNEL_01',
                              tagline: 'Arquitectura de referencia para sistemas de misión crítica.',
                              description: 'Núcleo operativo Spring Boot enfocado en la resiliencia. Implementa Clean Architecture, aislamiento de dominio y políticas estrictas de persistencia con PostgreSQL.',
                              stack: ['Spring Boot', 'Clean Arch', 'PostgreSQL', 'Docker'],
                        },
                        identity: {
                              title: 'IDENTITY_V1 // SELF_REF',
                              tagline: 'Sistema de diseño recursivo e interfaz de comando táctico.',
                              description: 'Desarrollo del núcleo visual de MAGBO STUDIO. Enfocado en el rendimiento de renderizado, tipografía paramétrica e integridad de estado vía TypeScript.',
                              stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
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
                        vote_guard: 'VOTE_GUARD // PROTOCOLO DE CONSENSO DISTRIBUIDO',
                        sector_watch: 'SECTOR_WATCH // VIGILANCIA PERIMETRAL IOT',
                        core_sync: 'CORE_SYNC // ORQUESTADOR DE SINCRONIZACIÓN DE DATOS',
                        media_ops: 'MEDIA_OPS // PROCESAMIENTO DE SEÑALES DIGITALES',
                        java_init: 'JAVA_INIT // ARQUITECTURA DE REFERENCIA BACKEND ROBUSTA',
                        meeting_manager: 'MEETING_MANAGER // CONTROL DE TIEMPO Y ASISTENCIA SAAS',
                        the_talk_fashion: 'THE_TALK_FASHION // PLATAFORMA DE PODCAST DE MODA',
                  }
            },
            expertise: {
                  capabilities: 'CAPACIDADES_OPERATIVAS',
                  events: 'EVENTOS_CLAVE_SISTEMA',
                  risk_level: 'NIVEL_EXPERTISE',
                  current_state: 'ESTADO ACTUAL: ACTIVO',
                  list: {
                        backend: { title: 'Desarrollo Backend Java', description: 'Creación de API REST, estructuración de aplicaciones Spring Boot, lógica de negocios clara.' },
                        integration: { title: 'Integra. de Sistemas y Lógica', description: 'Conexión front-back, organización de flujos, estructuración de datos.' },
                        ai: { title: 'Prototipado de IA (Java)', description: 'Experimentación, integración de modelos, enfoque técnico aplicado.' },
                        logic: { title: 'Análisis Lógico', description: 'Pensamiento estructural fuerte y resolución de problemas más allá del nivel junior estándar.' },
                  },
                  history: {
                        stage1: { year: '2022-Presente', event: 'Agente de Desarrollo y Negocios', description: 'Agente en SEDEICS y Socio Administrador en Noceci Viagens. Gestionando proyectos de TI y operaciones administrativas.' },
                        stage2: { year: '2020-Presente', event: 'Apoyo Educativo', description: 'Vie Scolaire en AEFE. Trabajando en un entorno multicultural y bilingüe, apoyando la gestión escolar.' },
                        stage3: { year: '2018-2025', event: 'Crecimiento Académico', description: 'Grado en Ciencias de la Computación en la Universidad Veiga de Almeida. Enfoque en desarrollo de software y liderazgo.' },
                  }
            },
            radar: {
                  title: 'RADAR_TECNOLÓGICO // MATRIZ_SENSOR',
                  quadrants: {
                        adopt: 'ADOPTAR // PRODUCCIÓN',
                        trial: 'PROBAR // BETA',
                        assess: 'EVALUAR // OBSERVACIÓN',
                        hold: 'RETENER // DEPRECADO',
                  },
                  items: {
                        react: { name: 'React 18', description: 'Biblioteca estándar para arquitectura de UI basada en componentes.' },
                        ts: { name: 'TypeScript', description: 'Seguridad de tipos impuesta para sistemas críticos.' },
                        node: { name: 'Node.js', description: 'Runtime de backend escalable para servicios en tiempo real.' },
                        go: { name: 'Go (Golang)', description: 'Microservicios de alto rendimiento y herramientas CLI.' },
                        tailwind: { name: 'Tailwind CSS', description: 'Estilizado utility-first para sistemas de diseño consistentes.' },
                        rust: { name: 'Rust', description: 'Evaluando para componentes de sistema seguros contra fallos de memoria.' },
                        wasm: { name: 'WebAssembly', description: 'Módulos de alta computación en entornos de navegador.' },
                        astro: { name: 'Astro', description: 'Despliegues enfocados en contenido con hidratación parcial.' },
                        quantum: { name: 'Criptografía Cuántica', description: 'Monitoreando estándares de criptografía poscuántica.' },
                        homomorphic: { name: 'Cript. Homomórfica', description: 'Computación en datos encriptados sin desencriptación.' },
                        ai_agents: { name: 'Agentes Autónomos', description: 'Orquestación de sistemas impulsada por LLM.' },
                        php: { name: 'PHP Legado', description: 'Riesgos de seguridad en modelos de ejecución legados.' },
                        jquery: { name: 'jQuery', description: 'Redundante con APIs modernas del DOM.' },
                        soap: { name: 'SOAP', description: 'Payload XML pesado; preferir REST/gRPC.' },
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
                  title: 'CANAL ENCRIPTADO',
                  subtitle: 'Línea directa con el comando. Encriptación E2E.',
                  secure_channel: 'CANAL_SEGURO_v4.0',
                  encryption_label: 'ENCRIPTACIÓN 256-BIT // ACTIVA',
                  link_active: 'ENLACE_ESTABLECIDO',
                  identification: 'CÓDIGO_IDENTIFICACIÓN (NOMBRE)',
                  placeholders: {
                        id: 'INGRESAR_CÓDIGO_ID',
                        email: 'DIRECCIÓN_EMAIL_SEGURA',
                        briefing: 'RESUMEN_MISIÓN // OBJETIVOS',
                  },
                  email: 'VECTOR_CONTACTO',
                  briefing: 'RESUMEN_MISIÓN',
                  button: {
                        initiate: 'INICIAR_HANDSHAKE',
                        encrypting: 'ENCRIPTANDO_PAYLOAD...',
                  },
                  success: {
                        title: 'TRANSMISIÓN_EXITOSA',
                        message: 'Su paquete encriptado ha sido recibido por nuestro servidor seguro. Analizaremos los datos y responderemos vía canal seguro.',
                        new: 'TRANSMITIR_NUEVO_PAQUETE',
                  }
            },
            footer: {
                  locations_title: 'UBICACIONES',
                  location_hq: 'São Paulo, BR (HQ)',
                  location_remote: 'Ops Remotas _Global',
                  legal_title: 'LEGAL',
                  legal_privacy: 'Protocolo de Privacidad',
                  legal_terms: 'Términos de Compromiso',
                  connect_title: 'CONECTAR',
                  kernel_version: 'MAGBO_STUDIO_KERNEL_V1',
                  tagline: 'Ingeniería de software de élite y arquitectura de seguridad para sistemas críticos. Construyendo resiliencia donde fallar no es una opción.',
                  copyright: '© 2026 MAGBO STUDIO. TODOS LOS DERECHOS RESERVADOS.',
                  secure_connection: 'CONEXIÓN_SEGURA_ESTABLECIDA',
                  innovate: 'INNOVA SIEMPRE',
                  cli_hint: '[MODO CLI: PRESIONA CTRL+~]',
            },
            surface: {
                  hero_line1: 'TUS SISTEMAS',
                  hero_line2_accent: 'MERECEN',
                  hero_line2_end: 'MÁS',
                  hero_line3: 'QUE UNA INTERFAZ',
                  hero_line4: 'NORMAL.',
                  hero_cta: 'HABLEMOS',
                  nav_menu: 'Menú',
                  nav_contact: 'Contáctanos',
                  nav_home: 'Inicio',
                  nav_cv: 'Mi CV',
                  nav_capabilities: 'Capacidades',
                  nav_work: 'Trabajo',
                  qr_placeholder: 'Espacio QR Code',
                  connect: 'Conectar',
                  capabilities_label: '[ CAPACIDADES ]',
                  capabilities_title: 'HECHO',
                  capabilities_title_accent: 'DIFERENTE',
                  capabilities_slide1_label: '01 // Ingeniería',
                  capabilities_slide1_title: 'Arquitectura Full-Stack & Infraestructura Cloud',
                  capabilities_slide2_label: '02 // Movimiento',
                  capabilities_slide2_title: 'Experiencias Web Inmersivas & Animaciones',
                  process_line1: 'CREEMOS',
                  process_line1_accent: 'EN UN',
                  process_line2: 'PROCESO',
                  process_line3: 'QUE FUNCIONA.',
                  cv_title: 'LA MENTE',
                  cv_title_accent: 'DETRÁS',
                  cv_title_end: 'DEL CÓDIGO.',
                  cv_subtitle: 'Soy Sammy K Magbo. Un solucionador que diseña arquitecturas de software de élite.',
                  cv_experience: 'EXPERIENCIA',
                  cv_exp1_title: 'Agente de Desarrollo / Área de TI',
                  cv_exp1_company: 'SEDEICS • 2022 - Presente',
                  cv_exp1_desc: 'Liderando iniciativas de proyectos de TI, modernización de procesos y soporte administrativo al desarrollo económico.',
                  cv_exp2_title: 'Vie Scolaire',
                  cv_exp2_company: 'AEFE • 2020 - Presente',
                  cv_exp2_desc: 'Gestionando dinámicas escolares en un entorno bilingüe, coordinando con familias e pessoal acadêmico.',
                  cv_capabilities: 'CAPACIDADES',
                  cv_profile: 'PERFIL',
                  cv_education: 'Formación',
                  cv_education_degree: 'B.Sc. Ingeniería Informática',
                  cv_education_focus: 'Enfoque en Sistemas Distribuidos',
                  cv_languages: 'Idiomas',
                  cv_lang_pt: 'Portugués (Nativo)',
                  cv_lang_en: 'Inglés (Básico a Intermedio)',
                  cv_lang_es: 'Español (Básico)',
                  cv_lang_fr: 'Francés (Fluido/Nativo)',
            },
            commands: {
                  placeholder: 'Escribe un comando o busca...',
                  no_results: 'Sin resultados.',
                  nav_group: 'Navegación',
                  go_projects: 'Ir a Proyectos',
                  initiate_contact: 'Iniciar Protocolo de Contacto',
                  system_group: 'Acciones del Sistema',
                  download_cv: 'Descargar Especificaciones (CV)',
                  toggle_contrast: 'Alternar Alto Contraste',
                  contact_support: 'Soporte',
            }
      },
      fr: {
                        exp: {
          "aefe": {
                    "role": "Vie Scolaire",
                    "bullets": [
                              "Gestion globale pour environnement multiculturel et francophone",
                              "Organisation de la vie scolaire, communication avec les familles",
                              "Certifications internationales (BAC, Brevet)"
                    ]
          },
          "sedeics": {
                    "role": "Agent de Dév. Informatique — Projets Stratég.",
                    "bullets": [
                              "Mise en oeuvre du Master Plan Informatique pour la gouvernance des SI",
                              "Gestion des infrastructures interdépartementales",
                              "Elaboration de feuilles de route stratégiques et transformation digitale"
                    ]
          },
          "noceci": {
                    "role": "Gérant et Partenaire",
                    "bullets": [
                              "Leadership administratif et représentation légale",
                              "Gestion des RH, opérations financières, et de la pile technologique",
                              "Développement commercial"
                    ]
          },
          "cl20": {
                    "role": "Fondateur — C.L. 2.0",
                    "bullets": [
                              "Projet de création d'entreprise pour cours de langues",
                              "Développement du modèle économique",
                              "Intégration technologique avec l'éducation"
                    ]
          },
          "maori": {
                    "role": "Agent de Sécurité de l'information",
                    "bullets": [
                              "Opérations support et sécurité DCNS",
                              "Environnement à haute sécurité et clairance"
                    ]
          }
},
            edu: {
          "uva": {
                    "degree": "Licence",
                    "field": "Science Informatique",
                    "note": "Project Manager Académique (2018)"
          },
          "iserj": {
                    "degree": "Diplôme Technique",
                    "field": "Systèmes Informatiques",
                    "note": ""
          }
},
            proj: {
          "magbo-studio": "Portefeuille personnel en React/TypeScript.",
          "controle-de-acesso": "Système de sécurité physique basé sur l'IoT.",
          "ccc-cdi": "Contrôle d'accès du centre organisationnel CDI.",
          "french-lms": "Système LMS pour le Français par API.",
          "satisystem": "Automatisation de processus de l'institution.",
          "the-talk": "Plateforme multimédia / Podcast The Talk Fashion.",
          "magbo-studio-backend": "Architecture backend métier robuste en Spring Boot.",
          "floresta-unity": "Jeu Unity écologique interactif."
},
            ui: {
          "experience_badge": "02 — Expérience",
          "experience_title": "Parcours <span class=\"marker-orange\">Professionnel</span>",
          "education_badge": "Éducation",
          "work_badge": "03 — Projets Sélectionnés",
          "work_title": "Registres <span class=\"marker-blue\">Techniques</span>",
          "skills_badge": "04 — Compétences",
          "skills_title": "Arsenal <span class=\"marker-red\">Technologique</span>",
          "contact_badge": "05 — Connexion Initiale",
          "contact_title": "Établir <span class=\"marker-turquoise\">le Protocole</span>"
},
            about: {
                  section_label: '01 — À propos',
                  title: 'Technologie, innovation et <span class="marker-turquoise">exécution stratégique</span>.',
                  p1: 'Je suis un <span class="marker-blue">diplômé en Informatique</span> avec une expérience couvrant <span class="marker-violet"> la gouvernance informatique</span>, la modernisation de systèmes et le développement de plateformes de niveau institutionnel. Mon travail relie <span class="marker-orange">l\'innovation du secteur public</span> — des plans informatiques d\'état aux <span class="marker-red">applications full-stack</span>.',
                  p2: 'Basé à <span class="marker-green">Rio de Janeiro</span>, j\'opère à travers différentes cultures et langues (Français, Portugais, Anglais, Espagnol) — gérant des <span class="marker-yellow">équipes multiculturelles</span> et livrant des projets avec une précision non négociable.',
                  stats: { projects: 'Projets Livrés', languages: 'Langues Parlées', grad: 'Diplôme', cs: 'Informatique', years: 'Années d\'Expérience' }
            },
            nav: {
                  projects: 'PROJETS',
                  expertise: 'EXPERTISE',
                  tech_radar: 'RADAR_TECH',
                  status: 'STATUT',
                  intel: 'INTELLIGENCE',
                  contact: 'CONTACT',
                  labs: 'LABS',
                  archive: 'COFFRE',
            },
            meta: {
                  title: 'MAGBO STUDIO | Architecture Logicielle d\'Élite',
                  description: 'Spécialisé dans les Infrastructures Critiques, GovTech et Systèmes de Haute Sécurité. Nous architecturons des plateformes de niveau institutionnel où l\'échec n\'est pas une option.',
                  keywords: 'Architecture Logicielle, Java, Spring Boot, React, Sécurité, GovTech, Infrastructure Critique',
            },
            hero: {
                  status: 'SYSTÈME OPÉRATIONNEL // PRÊT POUR DÉPLOIEMENT',
                  title_start: 'Sammy',
                  title_gradient: 'K Magbo',
                  title_middle: 'Innovateur &',
                  title_end: 'Résolveur de Problèmes.',
                  description: 'Professionnel avec une solide expérience en technologie, innovation et gestion de projet. J\'intègre ma formation en informatique à des expériences pratiques dans la mise en œuvre de systèmes, la modernisation des processus et la gestion opérationnelle. Ingénierie Logicielle d\'Élite & Architecture de Sécurité.',
                  cta_primary: 'INITIER PROTOCOLE',
                  cta_secondary: 'VOIR DONNÉES CLASSIFIÉES',
                  stats: {
                        systems: 'Système Mission Critique',
                        uptime: 'Garantie de Disponibilité',
                        security: 'Données Compromises',
                        global: 'Portée Opérationnelle',
                  }
            },
            projects: {
                  title: 'JOURNAUX_CAS // CLASSIFIÉ',
                  restricted: 'Accès Restreint',
                  view_study: 'Voir l\'Étude de Cas',
                  list: {
                        vote_guard: {
                              title: 'PROTOCOLE: VOTE_GUARD',
                              description: 'Système de vote électronique critique et gestion d\'assemblées à haut risque. Implémente une logique de machine à états en temps réel pour les minuteurs, un contrôle strict du quorum, un mode "Conseil du Président" et une génération précise de rapports juridiques PDF.',
                              type: 'Gouvernance Critique',
                              stack: ['React', 'Logique d\'État', 'Gén. PDF', 'Temps Réel'],
                        },
                        sector_watch: {
                              title: 'SECTOR_WATCH',
                              description: 'Infrastructure de sécurité physique pour une institution éducative française. Fonctionne grâce à la logique de QR Code pour le contrôle d\'accès, un tableau de bord sectorisé pour la surveillance des flux et le suivi des étudiants en temps réel.',
                              type: 'Sécurité Physique',
                              stack: ['Logique IoT', 'QR Code', 'React', 'Tableau de Bord'],
                        },
                        core_sync: {
                              title: 'CORE_SYNC',
                              description: 'Synchronisation full-stack pour un centre de développement. Architecture hybride intégrant React Frontend et Spring Boot Backend, migrant la persistance locale vers des API robustes et sécurisées.',
                              type: 'Infra Fullstack',
                              stack: ['React', 'Spring Boot', 'Java', 'API Rest'],
                        },
                        media_ops: {
                              title: 'MEDIA_OPS',
                              description: 'Plateforme média haute performance. Intégration profonde avec l\'API Spotify, optimisation SEO technique et animations GSAP avancées avec physique magnétique et effets de parallaxe.',
                              type: 'UI Haute Performance',
                              stack: ['React', 'GSAP', 'Spotify API', 'Motion UX'],
                        },
                        meeting_manager: {
                              title: 'MEETING_MANAGER',
                              description: 'Système de contrôle du temps et des présences. Une solution pratique pour gérer les réunions et suivre les horaires.',
                              type: 'Application SaaS',
                              stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
                        },
                        the_talk_fashion: {
                              title: 'THE_TALK_FASHION',
                              description: 'Un site de podcast par Mijean Rochus axé sur la mode. Dispose d\'un design élégant et de capacités de lecture multimédia.',
                              type: 'Plateforme Média',
                              stack: ['React', 'Tailwind CSS', 'Vite', 'Frontend'],
                        },
                        satisystem: {
                              title: 'SATISYSTEM',
                              description: 'Projet de recherche final pour l\'informatique. Développé des solutions techniques et des implémentations de systèmes pour l\'excellence académique.',
                              type: 'Académique/IA',
                              stack: ['Java', 'Weka', 'Logique IA', 'Recherche'],
                        },
                  }
            },
            labs: {
                  title: 'MAGBO_LABS // OPS_TACTIQUES',
                  view_source: 'CODE SOURCE',
                  preview: 'APERÇU_DÉCLASSIFIÉ',
                  items: {
                        media_ops: {
                              title: 'MEDIA_OPS // FREQUENCY_MOD',
                              tagline: 'Synchronisation haute fidélité entre flux audio et DOM.',
                              description: 'Implémentation DSP via Web Audio API, utilisant la Transformée de Fourier Rapide (FFT) pour la visualisation spectrale en temps réel avec une latence inférieure à 10ms.',
                              stack: ['React', 'Web Audio API', 'GSAP', 'Canvas'],
                        },
                        java_init: {
                              title: 'JAVA_INIT // KERNEL_01',
                              tagline: 'Architecture de référence pour les systèmes critiques.',
                              description: 'Noyau opérationnel Spring Boot axé sur la résilience. Implémente une Clean Architecture, une isolation de domaine et des politiques de persistance strictes avec PostgreSQL.',
                              stack: ['Spring Boot', 'Clean Arch', 'PostgreSQL', 'Docker'],
                        },
                        identity: {
                              title: 'IDENTITY_V1 // SELF_REF',
                              tagline: 'Système de design récursif et interface de commande tactique.',
                              description: 'Développement du noyau visuel de MAGBO STUDIO. Axé sur la performance de rendu, la typographie paramétrique et l\'intégrité de l\'état via TypeScript.',
                              stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
                        },
                  }
            },
            archive: {
                  title: 'ARCHIVE COMPLÈTE DU PROJET // SAMMY K MAGBO',
                  subtitle: 'JOURNAL OPÉRATIONNEL & HISTORIQUE D\'INGÉNIERIE',
                  cols: {
                        year: 'ANNÉE',
                        project: 'NOM DE L\'OPÉRATION',
                        built_with: 'CONSTRUIT AVEC',
                        link: 'LIEN',
                  },
                  data: {
                        vote_guard: 'VOTE_GUARD // PROTOCOLE DE CONSENSUS DISTRIBUÉ',
                        sector_watch: 'SECTOR_WATCH // SURVEILLANCE PÉRIMÉTRIQUE IOT',
                        core_sync: 'CORE_SYNC // ORCHESTRATEUR DE SYNCHRONISATION DE DONNÉES',
                        media_ops: 'MEDIA_OPS // TRAITEMENT DU SIGNAL NUMÉRIQUE',
                        java_init: 'JAVA_INIT // ARCHITECTURE DE RÉFÉRENCE BACKEND ROBUSTE',
                        meeting_manager: 'MEETING_MANAGER // CONTRÔLE DU TEMPS ET DES PRÉSENCES SAAS',
                        the_talk_fashion: 'THE_TALK_FASHION // PLATEFORME DE PODCAST DE MODE',
                  }
            },
            expertise: {
                  capabilities: 'CAPACITÉS_OPÉRATIONNELLES',
                  events: 'ÉVÉNEMENTS_CLÉS',
                  risk_level: 'NIVEAU_EXPERTISE',
                  current_state: 'ÉTAT ACTUEL: ACTIF',
                  list: {
                        backend: { title: 'Développement Backend Java', description: 'Création d\'API REST, structuration d\'applications Spring Boot, logique métier claire.' },
                        integration: { title: 'Intégration & Logique', description: 'Connexion front-back, organisation de flux, structuration des données.' },
                        ai: { title: 'Prototypage IA en Java', description: 'Experimentation, intégration de modèles, approche technique appliquée.' },
                        logic: { title: 'Analyse Logique', description: 'Tu es plus fort en logique et en structure que la moyenne de ton niveau.' },
                  },
                  history: {
                        stage1: { year: '2022-Présent', event: 'Agence de Développement & Entreprise', description: 'Agent de Développement à la SEDEICS et Associé Administrateur chez Noceci Viagens. Gestion de projets informatiques et opérations administratives.' },
                        stage2: { year: '2020-Présent', event: 'Support Éducatif', description: 'Vie Scolaire à l\'AEFE. Travail dans un environnement multiculturel et bilingue, soutien à la gestion scolaire.' },
                        stage3: { year: '2018-2025', event: 'Croissance Académique', description: 'Diplôme en informatique à l\'Université Veiga de Almeida. Focus sur le développement logiciel et le leadership.' },
                  }
            },
            radar: {
                  title: 'RADAR_TECHNOLOGIQUE // TABLEAU_CAPTEURS',
                  quadrants: {
                        adopt: 'ADOPTER // PRÊT_POUR_PROD',
                        trial: 'ESSAYER // BETA_TEST',
                        assess: 'ÉVALUER // OBSERVATION',
                        hold: 'ATTENDRE // DÉPRÉCIÉ',
                  },
                  items: {
                        react: { name: 'React 18', description: 'Bibliothèque standard pour l\'architecture UI basée sur les composants.' },
                        ts: { name: 'TypeScript', description: 'Sécurité de type imposée pour les systèmes critiques.' },
                        node: { name: 'Node.js', description: 'Runtime backend évolutif pour les services temps réel.' },
                        go: { name: 'Go (Golang)', description: 'Microservices haute performance et outils CLI.' },
                        tailwind: { name: 'Tailwind CSS', description: 'Style utility-first pour des systèmes de design cohérents.' },
                        rust: { name: 'Rust', description: 'Évaluation pour des composants système sûrs pour la mémoire.' },
                        wasm: { name: 'WebAssembly', description: 'Modules de haute calcul en environnement navigateur.' },
                        astro: { name: 'Astro', description: 'Déploiements axés sur le contenu avec hydratation partielle.' },
                        quantum: { name: 'Chiffrement Quantique', description: 'Surveillance des normes de cryptographie post-quantique.' },
                        homomorphic: { name: 'Chiff. Homomorphe', description: 'Calcul sur données chiffrées sans déchiffrement.' },
                        ai_agents: { name: 'Agents Autonomes', description: 'Orchestration système pilotée par LLM.' },
                        php: { name: 'PHP Legacy', description: 'Risques de sécurité dans les modèles d\'exécution hérités.' },
                        jquery: { name: 'jQuery', description: 'Redondant avec les API DOM modernes.' },
                        soap: { name: 'SOAP', description: 'Charge utile XML lourde ; préférer REST/gRPC.' },
                  }
            },
            status: {
                  title: 'STATUT_SYSTÈME // CENTRE_CONFIANCE',
                  uptime: 'DISPONIBILITÉ SYSTÈME',
                  latency: 'LATENCE MONDIALE',
                  threats: 'MENACES BLOQUÉES',
                  services: {
                        api: 'PASSERELLE API',
                        portals: 'PORTAILS CLIENTS',
                        encryption: 'MODULES DE CRYPTAGE',
                  },
                  history: 'HISTORIQUE INCIDENTS',
                  operational: 'OPÉRATIONNEL',
                  secure: 'SÉCURISÉ',
                  maintenance: 'MAINTENANCE - CORRECTIF SÉCURITÉ',
                  resolved: 'RÉSOLU',
            },
            intel: {
                  title: 'BRIEFINGS_RENSEIGNEMENT',
                  subtitle: 'T.L.P. // AMBRE // BLANC',
                  access_btn: 'DEMANDER ACCÈS COMPLET',
                  read_more: 'LIRE BRIEFING',
                  disclosed: 'DIVULGUÉ LE',
            },
            contact: {
                  title: 'CANAL CHIFFRÉ',
                  subtitle: 'Ligne directe avec le commandement. Chiffrement E2E.',
                  secure_channel: 'CANAL_SÉCURISÉ_v4.0',
                  encryption_label: 'CHIFFREMENT 256-BIT // ACTIVE',
                  link_active: 'LIAISON_ÉTABLIE',
                  identification: 'CODE_IDENTIFICATION (NOM)',
                  placeholders: {
                        id: 'ENTRER_CODE_ID',
                        email: 'ADRESSE_EMAIL_SÉCURISÉE',
                        briefing: 'RÉSUMÉ_MISSION // OBJECTIFS',
                  },
                  email: 'VECTEUR_CONTACT',
                  briefing: 'RÉSUMÉ_MISSION',
                  button: {
                        initiate: 'INITIER_HANDSHAKE',
                        encrypting: 'CHIFFREMENT_PAYLOAD...',
                  },
                  success: {
                        title: 'TRANSMISSION_RÉUSSIE',
                        message: 'Votre paquet chiffré a été reçu par notre serveur sécurisé. Nous analyserons les données et répondrons via canal sécurisé.',
                        new: 'TRANSMETTRE_NOUVEAU_PAQUET',
                  }
            },
            footer: {
                  locations_title: 'LIEUX',
                  location_hq: 'São Paulo, BR (HQ)',
                  location_remote: 'Ops À Distance _Mondial',
                  legal_title: 'LÉGAL',
                  legal_privacy: 'Protocole de Confidentialité',
                  legal_terms: 'Termes d\'Engagement',
                  connect_title: 'CONNECTER',
                  kernel_version: 'MAGBO_STUDIO_KERNEL_V1',
                  tagline: 'Génie logiciel d\'élite et architecture de sécurité pour systèmes critiques. Construire la résilience là où l\'échec n\'est pas une option.',
                  copyright: '© 2026 MAGBO STUDIO. TOUS DROITS RÉSERVÉS.',
                  secure_connection: 'CONNEXION_SÉCURISÉE_ÉTABLIE',
                  innovate: 'INNOVER TOUJOURS',
                  cli_hint: '[MODE CLI : APPUYEZ SUR CTRL+~]',
            },
            surface: {
                  hero_line1: 'VOS SYSTÈMES',
                  hero_line2_accent: 'MÉRITENT',
                  hero_line2_end: 'PLUS',
                  hero_line3: "QU'UNE INTERFACE",
                  hero_line4: 'NORMALE.',
                  hero_cta: 'PARLONS',
                  nav_menu: 'Menu',
                  nav_contact: 'Contactez-nous',
                  nav_home: 'Accueil',
                  nav_cv: 'Mon CV',
                  nav_capabilities: 'Compétences',
                  nav_work: 'Travail',
                  qr_placeholder: 'Espace QR Code',
                  connect: 'Connexion',
                  capabilities_label: '[ COMPÉTENCES ]',
                  capabilities_title: 'CONÇU',
                  capabilities_title_accent: 'DIFFÉREMMENT',
                  capabilities_slide1_label: '01 // Ingénierie',
                  capabilities_slide1_title: 'Architecture Full-Stack & Infrastructure Cloud',
                  capabilities_slide2_label: '02 // Mouvement',
                  capabilities_slide2_title: 'Expériences Web Immersives & Animations',
                  process_line1: 'NOUS CROYONS',
                  process_line1_accent: 'EN UN',
                  process_line2: 'PROCESSUS',
                  process_line3: 'QUI FONCTIONNE.',
                  cv_title: "L'ESPRIT",
                  cv_title_accent: 'DERRIÈRE',
                  cv_title_end: 'LE CODE.',
                  cv_subtitle: 'Je suis Sammy K Magbo. Un résolveur de problèmes qui conçoit des architectures logicielles d\'élite.',
                  cv_experience: 'EXPÉRIENCE',
                  cv_exp1_title: 'Agent de Développement / Secteur TI',
                  cv_exp1_company: 'SEDEICS • 2022 - Présent',
                  cv_exp1_desc: 'Direction d\'initiatives de projets informatiques, modernisation des processus et soutien administratif au développement économique.',
                  cv_exp2_title: 'Vie Scolaire',
                  cv_exp2_company: 'AEFE • 2020 - Présent',
                  cv_exp2_desc: 'Gestion de la dynamique scolaire dans un environnement bilingue, coordination avec les familles et le personnel académique.',
                  cv_capabilities: 'COMPÉTENCES',
                  cv_profile: 'PROFIL',
                  cv_education: 'Formation',
                  cv_education_degree: 'B.Sc. Génie Informatique',
                  cv_education_focus: 'Spécialisation en Systèmes Distribués',
                  cv_languages: 'Langues',
                  cv_lang_pt: 'Portugais (Natif)',
                  cv_lang_en: 'Anglais (Basique à Intermédiaire)',
                  cv_lang_es: 'Espagnol (Basique)',
                  cv_lang_fr: 'Français (Courant/Natif)',
            },
            commands: {
                  placeholder: 'Tapez une commande ou recherchez...',
                  no_results: 'Aucun résultat trouvé.',
                  nav_group: 'Navigation',
                  go_projects: 'Aller aux Projets',
                  initiate_contact: 'Initier Protocole de Contact',
                  system_group: 'Actions Système',
                  download_cv: 'Télécharger Spécifications (CV)',
                  toggle_contrast: 'Basculer Haut Contraste',
                  contact_support: 'Support',
            }
      },
      sw: {
                        exp: {
          "aefe": {
                    "role": "Vie Scolaire",
                    "bullets": [
                              "Usimamizi wa mazingira mbalimbali kwa taasisi za Kifaransa",
                              "Mawasiliano ya kimkakati na familia",
                              "Maandalizi kwa vyeti vya kimataifa"
                    ]
          },
          "sedeics": {
                    "role": "Wakala wa Teknolojia — Miradi Mikuu",
                    "bullets": [
                              "Aliwezesha maendeleo ya mfumo mkuu wa IT (PDTIC)",
                              "Alisimamia miundombinu ya mfumo ya idara",
                              "Aliwasilisha ripoti za mageuzi ya kidijitali"
                    ]
          },
          "noceci": {
                    "role": "Mkurugenzi Mshiriki",
                    "bullets": [
                              "Uongozi wasimamizi na mamlaka ya kisheria",
                              "Usimamizi wa fedha, watu na teknolojia",
                              "Mipango ya kimkakati ya biashara"
                    ]
          },
          "cl20": {
                    "role": "Mwanzilishi",
                    "bullets": [
                              "Mradi wa elimu ya lugha za kigeni katika chuo kikuu",
                              "Aliunda mfumo wa kibiashara",
                              "Teknolojia iliyojumuishwa na mafunzo"
                    ]
          },
          "maori": {
                    "role": "Afisa wa Usalama wa Taarifa",
                    "bullets": [
                              "Usalama na uhakiki wa mradi wa DCNS",
                              "Utekelezaji kazi thabiti katika mazingira muhimu"
                    ]
          }
},
            edu: {
          "uva": {
                    "degree": "Shahada",
                    "field": "Sayansi ya Kompyuta",
                    "note": "Meneja Miradi ya Chuo (2018)"
          },
          "iserj": {
                    "degree": "Shahada Ndogo",
                    "field": "Teknolojia na Mifumo",
                    "note": ""
          }
},
            proj: {
          "magbo-studio": "Ukurasa binafsi. Imeundwa na React, TypeScript na muundo mzuri.",
          "controle-de-acesso": "Mfumo wa kudhibiti usalama kutumia IoT. Inajumuisha ufikiaji wa kutumia nambari ya QR.",
          "ccc-cdi": "Programu ya kusimamia upatikanaji wa shirika na CDI.",
          "french-lms": "Shule ya matumizi kwenye mtandao ya Kifaransa na Spring Boot.",
          "satisystem": "Matumizi ya kuandaa shughuli kwa otomatiki za wanafunzi.",
          "the-talk": "Sauti ya redio za mitindo kwa Mijean Rochus.",
          "magbo-studio-backend": "Seva kuu ya Java kwa mifumo thabiti.",
          "floresta-unity": "Mchezo rahisi wa kiikolojia kupitia Unity 3D."
},
            ui: {
          "experience_badge": "02 — Uzoefu",
          "experience_title": "Historia ya <span class=\"marker-orange\">Kikazi</span>",
          "education_badge": "Elimu",
          "work_badge": "03 — Kazi Bora",
          "work_title": "Mifumo na <span class=\"marker-blue\">Uhadi</span>",
          "skills_badge": "04 — Utaalamu",
          "skills_title": "Silaha <span class=\"marker-red\">Téknolojia</span>",
          "contact_badge": "05 — Anzisha Muunganisho",
          "contact_title": "Sanidi <span class=\"marker-turquoise\">Itifaki</span>"
},
            about: {
                  section_label: '01 — Kuhusu',
                  title: 'Teknolojia, ubunifu, na <span class="marker-turquoise">utekelezaji wa kimkakati</span>.',
                  p1: 'Mimi ni <span class="marker-blue">mhitimu wa Sayansi ya Kompyuta</span> nikiwa na uzoefu katika <span class="marker-violet"> usimamizi wa TEHAMA</span>, uboreshaji wa mifumo, na uundaji wa majukwaa makubwa. Kazi yangu inaunganisha <span class="marker-orange">ubunifu katika sekta ya umma</span> — kuanzia mipango mikuu hadi <span class="marker-red">programu kamili za kompyuta</span>.',
                  p2: 'Ninaishi <span class="marker-green">Rio de Janeiro</span>, na ninafanya kazi na tamaduni na lugha tofauti (Kifaransa, Kireno, Kiingereza, Kihispania) — nikisimamia <span class="marker-yellow">timu mbalimbali</span> na kuwasilisha miradi kwa usahihi usiokubali makosa.',
                  stats: { projects: 'Miradi', languages: 'Lugha', grad: 'Shahada', cs: 'Sayansi ya Kompyuta', years: 'Miaka ya Uzoefu' }
            },
            nav: {
                  projects: 'MIRADI',
                  expertise: 'UTAALAMU',
                  tech_radar: 'RADA_YA_TEKNOLOJIA',
                  status: 'HALI',
                  intel: 'UPELELEZI',
                  contact: 'MAWASILIANO',
                  labs: 'MAABARA',
                  archive: 'KUMBUKUMBU',
            },
            meta: {
                  title: 'MAGBO STUDIO | Usanifu Bora wa Programu',
                  description: 'Mbobezi katika Miundombinu Muhimu, GovTech na Mifumo yenye Usalama wa Juu. Tunajenga mifumo imara isiyokubali kufeli.',
                  keywords: 'Usanifu wa Programu, Java, Spring Boot, React, Usalama, GovTech, Miundombinu Muhimu',
            },
            hero: {
                  status: 'MFUMO UNAFANYAKAZI // TAYARI KUTUMIKA',
                  title_start: 'Sammy',
                  title_gradient: 'K Magbo',
                  title_middle: 'Mbunifu &',
                  title_end: 'Mtatuzi was Shida.',
                  description: 'Mtaalamu mwenye uzoefu wa kutosha katika teknolojia, ubunifu, na usimamizi wa miradi. Ninachanganya taaluma yangu ya Sayansi ya Kompyuta na uzoefu wa vitendo katika usanifishaji wa mifumo na usimamizi wa kiutendaji. Uhandisi Bora wa Programu & Usanifu wa Usalama.',
                  cta_primary: 'ANZISHA ITIFAKI',
                  cta_secondary: 'ANGALIA DATA ZA SIRI',
                  stats: {
                        systems: 'Mifumo Muhimu',
                        uptime: 'Hakikisho la Uptime',
                        security: 'Data Iliyodukuliwa',
                        global: 'Ufikiaji wa Kiutendaji',
                  }
            },
            projects: {
                  title: 'KUMBUKUMBU_ZA_KAZI // SIRI',
                  restricted: 'Ufikiaji Umezuiliwa',
                  view_study: 'Tazama Utafiti Kifani',
                  list: {
                        vote_guard: {
                              title: 'ITIFAKI: VOTE_GUARD',
                              description: 'Mfumo muhimu wa upigaji kura za kielektroniki. Hutumia mantiki ya wakati halisi kwa vipima muda na kutoa ripoti sahihi za PDF za kisheria.',
                              type: 'Utawala Muhimu',
                              stack: ['React', 'Lojiki ya Hali', 'PDF Gen', 'Wakati Halisi'],
                        },
                        sector_watch: {
                              title: 'SECTOR_WATCH',
                              description: 'Miundombinu ya usalama wa kimwili kwa taasisi ya elimu ya Kifaransa. Ina lojiki ya Msimbo wa QR, dashibodi ya kufuatilia wanafunzi kwa wakati halisi.',
                              type: 'Usalama wa Kimwili',
                              stack: ['Lojiki ya IoT', 'Msimbo wa QR', 'React', 'Dashibodi'],
                        },
                        core_sync: {
                              title: 'CORE_SYNC',
                              description: 'Usawazishaji wa Full-stack kwa kituo cha maendeleo. Kuunganisha Frontend ya React na Backend ya Spring Boot.',
                              type: 'Infra Fullstack',
                              stack: ['React', 'Spring Boot', 'Java', 'API Rest'],
                        },
                        media_ops: {
                              title: 'MEDIA_OPS',
                              description: 'Jukwaa la media lenye utendaji wa juu. Ujumuishaji wa kina na API ya Spotify na uhuishaji wa GSAP.',
                              type: 'UI ya Kasi',
                              stack: ['React', 'GSAP', 'Spotify API', 'Motion UX'],
                        },
                        meeting_manager: {
                              title: 'MEETING_MANAGER',
                              description: 'Mfumo wa udhibiti wa muda na mahudhurio. Suluhisho la vitendo la kusimamia mikutano.',
                              type: 'Programu ya SaaS',
                              stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
                        },
                        the_talk_fashion: {
                              title: 'THE_TALK_FASHION',
                              description: 'Tovuti ya podcast inayolenga mitindo. Ina muundo maridadi.',
                              type: 'Jukwaa la Media',
                              stack: ['React', 'Tailwind CSS', 'Vite', 'Frontend'],
                        },
                        satisystem: {
                              title: 'SATISYSTEM',
                              description: 'Mradi wa utafiti wa mwisho wa Sayansi ya Kompyuta.',
                              type: 'Masomo/AI',
                              stack: ['Java', 'Weka', 'Lojiki ya AI', 'Utafiti'],
                        },
                  }
            },
            labs: {
                  title: 'MAGBO_LABS // OPERESHENI_ZA_MBINU',
                  view_source: 'KODI YA CHANZO',
                  preview: 'HAKIKISHO_LA_SIRI',
                  items: {
                        media_ops: {
                              title: 'MEDIA_OPS // MOD_YA_MASAFA',
                              tagline: 'Usawazishaji wa hali ya juu kati ya sauti na DOM.',
                              description: 'Utekelezaji wa DSP kupitia API ya Sauti ya Wavuti.',
                              stack: ['React', 'Web Audio', 'GSAP', 'Canvas'],
                        },
                        java_init: {
                              title: 'JAVA_INIT // KERNEL_01',
                              tagline: 'Mkakati msingi wa mifumo muhimu.',
                              description: 'Msingi thabiti wa Spring Boot. Unatumia Clean Architecture.',
                              stack: ['Spring Boot', 'Clean Arch', 'PostgreSQL', 'Docker'],
                        },
                        identity: {
                              title: 'IDENTITY_V1 // SELF_REF',
                              tagline: 'Mfumo wa muundo wa kurudia na amri.',
                              description: 'Ukuzaji wa msingi wa kuona wa MAGBO STUDIO.',
                              stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
                        },
                  }
            },
            archive: {
                  title: 'KUMBUKUMBU KAMILI YA MIRADI // SAMMY K MAGBO',
                  subtitle: 'KUMBUKUMBU YA UENDESHAJI',
                  cols: {
                        year: 'MWAKA',
                        project: 'JINA LA OPERESHENI',
                        built_with: 'IMEJENGWA NA',
                        link: 'KIUNGO',
                  },
                  data: {
                        vote_guard: 'VOTE_GUARD // MAKUBALIANO YALIYOSAMBAZWA',
                        sector_watch: 'SECTOR_WATCH // ULINZI WA MIPAKA IOT',
                        core_sync: 'CORE_SYNC // MPANGILIAJI WA USAWAZISHAJI',
                        media_ops: 'MEDIA_OPS // UCHAKATAJI WA SAUTI NA PICHA',
                        java_init: 'JAVA_INIT // MSINGI IMARA WA BACKEND',
                        meeting_manager: 'MEETING_MANAGER // UDHIBITI WA MUDA',
                        the_talk_fashion: 'THE_TALK_FASHION // PODCAST YA MITINDO',
                  }
            },
            expertise: {
                  capabilities: 'UWEZO_WA_KIUTENDAJI',
                  events: 'MATUKIO_MUHIMU_YA_MFUMO',
                  risk_level: 'KIWANGO_CHA_UTAALAMU',
                  current_state: 'HALI YA SASA: INAFANYAKAZI',
                  list: {
                        backend: { title: 'Uendelezaji wa Backend Java', description: 'Uundaji wa REST API, upangaji wa Spring Boot, lojiki inayoeleweka.' },
                        integration: { title: 'Ujumuishaji wa Mifumo na Lojiki', description: 'Uunganishaji wa front-back, upangaji wa data.' },
                        ai: { title: 'Uundaji wa Mifano ya AI (Java)', description: 'Majaribio na ujumuishaji wa mifano ya AI.' },
                        logic: { title: 'Uchanganuzi wa Kimantiki', description: 'Kufikiri kimuundo kutatua shida.' },
                  },
                  history: {
                        stage1: { year: '2022-Mpaka sasa', event: 'Uendelezaji na Biashara', description: 'Wakala katika SEDEICS na Msimamizi katika Noceci Viagens.' },
                        stage2: { year: '2020-Mpaka sasa', event: 'Msaada wa Kielimu', description: 'Vie Scolaire katika AEFE.' },
                        stage3: { year: '2018-2025', event: 'Ukuaji wa Kitaaluma', description: 'Shahada ya Sayansi ya Kompyuta, Universidade Veiga de Almeida.' },
                  }
            },
            radar: {
                  title: 'RADA_YA_TEKNOLOJIA // MFUATILIO',
                  quadrants: {
                        adopt: 'TUMIA // TAYARI',
                        trial: 'JARIBU // BETA',
                        assess: 'TATHMINI // ANGALIZI',
                        hold: 'SITISHA // IMESHUSHWA',
                  },
                  items: {
                        react: { name: 'React 18', description: 'Maktaba kuu ya UI.' },
                        ts: { name: 'TypeScript', description: 'Usalama wa aina za data kwa mifumo muhimu.' },
                        node: { name: 'Node.js', description: 'Kukimbiza backend ya haraka na kubwa.' },
                        go: { name: 'Go (Golang)', description: 'Huduma ndogondogo zenye nguvu.' },
                        tailwind: { name: 'Tailwind CSS', description: 'Usanifu wa muundo unaoshikamana.' },
                        rust: { name: 'Rust', description: 'Tathmini ya vipengele salama vya kumbukumbu.' },
                        wasm: { name: 'WebAssembly', description: 'Moduli zenye nguvu kwenye vivinjari.' },
                        astro: { name: 'Astro', description: 'Matumizi yanayolenga maudhui.' },
                        quantum: { name: 'Criptografia ya Quantum', description: 'Ufuatiliaji wa viwango vipya vya usalama.' },
                        homomorphic: { name: 'Cript. Homomórfica', description: 'Uchakataji wa data iliyofichwa.' },
                        ai_agents: { name: 'Mawakala wa Kujiendesha', description: 'Usimamizi wa mfumo kwa njia ya LLM.' },
                        php: { name: 'PHP ya Zamani', description: 'Hatari za kiusalama kwa mifumo ya kale.' },
                        jquery: { name: 'jQuery', description: 'Zaidi ya lazima hewani mwa DOM ya leo.' },
                        soap: { name: 'SOAP', description: 'Mzigo mzito wa XML; ni bora REST/gRPC.' },
                  }
            },
            status: {
                  title: 'HALI_YA_MFUMO // KITUO_CHA_UAMINIFU',
                  uptime: 'MUDA WA UZIMA WA MFUMO',
                  latency: 'UCHELEWAJI',
                  threats: 'VITISHO VILIVYOZUILIWA',
                  services: {
                        api: 'API GATEWAY',
                        portals: 'MIPANGO YA WATEJA',
                        encryption: 'MODULI ZA USALAMA',
                  },
                  history: 'KUMBUKUMBU YA MATUKIO',
                  operational: 'INAENDELEA LEO',
                  secure: 'SALAMA',
                  maintenance: 'MATENGENEZO - USAFIRISHAJI',
                  resolved: 'IMETATULIWA',
            },
            intel: {
                  title: 'MAELEKEZO_YA_UPELELEZI',
                  subtitle: 'T.L.P. // AMBER // NYEUPE',
                  access_btn: 'OMBA UFIKIAJI KAMILI',
                  read_more: 'SOMA MAELEKEZO',
                  disclosed: 'IMEJULISHWA KWENYE',
            },
            contact: {
                  title: 'NJIA ILIYOFICHWA KIUSALAMA',
                  subtitle: 'Njia ya moja kwa moja ya mawasiliano. Imefungwa E2E.',
                  secure_channel: 'NJIA_SALAMA_v4.0',
                  encryption_label: 'USIMBAJI WA BITS-256 // UNAFANYA KAZI',
                  link_active: 'MAWASILIANO_YAMEUNGANISHWA',
                  identification: 'NENOSIRI_LA_KUJITAMBULISHA (JINA)',
                  placeholders: {
                        id: 'INGIZA_NENOSIRI',
                        email: 'BARUA_PEPE_SALAMA',
                        briefing: 'MAELEZO_YA_KAZI // MALENGO',
                  },
                  email: 'NJIA_YA_MAWASILIANO',
                  briefing: 'MAELEZO_YA_KAZI',
                  button: {
                        initiate: 'ANZISHA_MAWASILIANO',
                        encrypting: 'INASIMBA_DATA...',
                  },
                  success: {
                        title: 'USAFIRISHAJI_UMEFANIKIWA',
                        message: 'Ujumbe wako umepokelewa na seva yetu. Tutachunguza na kujibu kupitia njia salama.',
                        new: 'TUMA_UJUMBE_MPYA',
                  }
            },
            footer: {
                  locations_title: 'MAHALI',
                  location_hq: 'São Paulo, BR (Makao Makuu)',
                  location_remote: 'Matendo ya Mbali _Dunia Nzima',
                  legal_title: 'KISHERIA',
                  legal_privacy: 'Itifaki ya Usiri',
                  legal_terms: 'Masharti ya Matumizi',
                  connect_title: 'UNGANISHA',
                  kernel_version: 'MAGBO_STUDIO_KERNEL_V1',
                  tagline: 'Uhandisi bora wa programu na usanifu wa usalama kwa mifumo muhimu. Kujenga uvumilivu ambapo kufeli sio chaguo.',
                  copyright: '© 2026 MAGBO STUDIO. HAKI ZOTE ZIMEHIFADHIWA.',
                  secure_connection: 'CONEXÃO_SEGURA_ESTABELECIDA',
                  innovate: 'BUNI DAIMA',
                  cli_hint: '[MODI YA CLI: BONYEZA CTRL+~]',
            },
            surface: {
                  hero_line1: 'MIFUMO YAKO',
                  hero_line2_accent: 'INASTAHILI',
                  hero_line2_end: 'ZAIDI YA',
                  hero_line3: 'MUONEKANO',
                  hero_line4: 'WA KAWAIDA.',
                  hero_cta: "TUONGEE",
                  nav_menu: 'Menyu',
                  nav_contact: 'Wasiliana',
                  nav_home: 'Nyumbani',
                  nav_cv: 'Wasifu (CV)',
                  nav_capabilities: 'Uwezo',
                  nav_work: 'Kazi',
                  qr_placeholder: 'Sehemu ya Msimbo wa QR',
                  connect: 'Unganisha',
                  capabilities_label: '[ UWEZO WA KAZI ]',
                  capabilities_title: 'IMEJENGWA',
                  capabilities_title_accent: 'TOFAUTI',
                  capabilities_slide1_label: '01 // Uhandisi',
                  capabilities_slide1_title: 'Usanifu Kamili & Miundombinu ya Wingu',
                  capabilities_slide2_label: '02 // Picha Mnato',
                  capabilities_slide2_title: 'Uzoefu Kamili wa Uhuishaji wa Wavuti',
                  process_line1: 'TUNAAMINI',
                  process_line1_accent: 'KATIKA',
                  process_line2: 'MCHAKATO',
                  process_line3: 'UNAOFANYAKAZI.',
                  cv_title: 'AKILI',
                  cv_title_accent: 'NYUMA YA',
                  cv_title_end: 'KODI.',
                  cv_subtitle: 'Mimi ni Sammy K Magbo. Mtatua shida aliye na utaalamu wa uhandisi wa programu za kiwango cha juu.',
                  cv_experience: 'UZOEFU',
                  cv_exp1_title: 'Wakala wa Maendeleo / Usalama IT',
                  cv_exp1_company: 'SEDEICS • 2022 - Sasa',
                  cv_exp1_desc: 'Kuongoza miradi ya IT, kuboresha michakato na usimamizi wa maendeleo ya kiuchumi.',
                  cv_exp2_title: 'Vie Scolaire',
                  cv_exp2_company: 'AEFE • 2020 - Sasa',
                  cv_exp2_desc: 'Kusimamia hali ya shule za Kifaransa kwa lugha mbili, akishirikiana na familia.',
                  cv_capabilities: 'NYANJA ZA UWEZO',
                  cv_profile: 'OFA MTU',
                  cv_education: 'Masomo',
                  cv_education_degree: 'B.Sc. Uhandisi wa Kompyuta',
                  cv_education_focus: 'Zingatio Juu ya Mifumo Iliyosambazwa',
                  cv_languages: 'Lugha',
                  cv_lang_pt: 'Kireno (Asili)',
                  cv_lang_en: 'Kiingereza (Kuanzia hadi Kati)',
                  cv_lang_es: 'Kihispania (Kawaida)',
                  cv_lang_fr: 'Kifaransa (Ufasaha/Asili)',
            },
            commands: {
                  placeholder: 'Andika amri au tafuta...',
                  no_results: 'Hakuna matokeo yaliyopatikana.',
                  nav_group: 'Urambazaji',
                  go_projects: 'Nenda kwenye Miradi',
                  initiate_contact: 'Anzisha Mawasiliano',
                  system_group: 'Vitendo vya Mfumo',
                  download_cv: 'Pakua Wasifu Wangu',
                  toggle_contrast: 'Ubadilishaji wa Muonekano Mwanga',
                  contact_support: 'Msaada',
            }
      }
};
