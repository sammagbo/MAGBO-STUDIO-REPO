export type Language = 'en' | 'pt' | 'fr';

export const TRANSLATIONS = {
      en: {
                        exp: {
          "aefe": {
                    "role": "Responsable Vie scolaire",
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
          "controle-de-acesso": "Production access control and meal-entitlement system for a French international school. Spring Boot backend integrating Hikvision face and card terminals, with an Electron desktop client. Deployed on Docker; 900+ students, 190+ automated tests.",
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
},
            about: {
                  section_label: '01 — About',
                  title: 'Technology, innovation, and <span class="marker-turquoise">strategic execution</span>.',
                  p1: 'I\'m a <span class="marker-blue">Computer Science graduate</span> with experience spanning <span class="marker-violet"> IT governance</span>, system modernization, and institutional-grade platform development. My work bridges <span class="marker-orange">public sector innovation</span> — from state-level IT master plans to <span class="marker-red">full-stack applications</span> serving educational networks.',
                  p2: 'Settling in <span class="marker-green">Bordeaux</span>, I operate across cultures and languages (French, Portuguese, technical English) — managing <span class="marker-yellow">multicultural teams</span> and delivering projects where operational clarity and technical precision are non-negotiable.',
                  stats: { projects: 'Public Projects', languages: 'Working Languages', grad: 'B.Sc. Degree', cs: 'Computer Science' }
            },
            // labels of the fixed navigation only; the section ids stay about, experience, work, skills, contact
            navbar: {
                  about: 'About',
                  experience: 'Experience',
                  work: 'Projects',
                  skills: 'Skills',
                  contact: 'Contact',
            },
            hero: {
                  h1_line1: 'I solve problems.',
                  h1_line2: 'Right now, in Java.',
                  lead_strong: 'Java / Spring Boot backend developer',
                  lead_rest: ', settling in Bordeaux and looking for a permanent role (CDI). My latest problem: nearly a thousand students and a paper student card. The solution has been in production since July 2026.',
                  cta_project: 'See the project',
            },
      },
      pt: {
                        exp: {
          "aefe": {
                    "role": "Responsable Vie scolaire",
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
          "controle-de-acesso": "Sistema de controle de acesso e gestão de refeições em produção para uma escola internacional francesa. Backend Spring Boot integrado a terminais Hikvision de reconhecimento facial e cartão, com cliente desktop em Electron. Implantado em Docker; mais de 900 alunos e 190 testes automatizados.",
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
},
            about: {
                  section_label: '01 — Sobre',
                  title: 'Tecnologia, inovação e <span class="marker-turquoise">execução estratégica</span>.',
                  p1: 'Sou <span class="marker-blue">formado em Ciência da Computação</span> com experiência abrangendo <span class="marker-violet"> governança de TI</span>, modernização de sistemas e desenvolvimento de plataformas de nível institucional. Meu trabalho conecta <span class="marker-orange">a inovação no setor público</span> — desde planos de TI em nível estadual até <span class="marker-red">aplicações full-stack</span>.',
                  p2: 'De mudança para <span class="marker-green">Bordeaux</span>, opero através de culturas e idiomas (francês, português, inglês técnico) — gerenciando <span class="marker-yellow">equipes multiculturais</span> e entregando projetos onde a clareza sempre é inegociável.',
                  stats: { projects: 'Projetos Públicos', languages: 'Idiomas de Trabalho', grad: 'Graduação', cs: 'Ciência da Computação' }
            },
            // labels of the fixed navigation only; the section ids stay about, experience, work, skills, contact
            navbar: {
                  about: 'Sobre',
                  experience: 'Trajetória',
                  work: 'Projetos',
                  skills: 'Competências',
                  contact: 'Contato',
            },
            hero: {
                  h1_line1: 'Eu resolvo problemas.',
                  h1_line2: 'No momento, em Java.',
                  lead_strong: 'Desenvolvedor backend Java / Spring Boot',
                  lead_rest: ', estou me mudando para Bordeaux e procuro uma vaga em CDI. Meu último problema: quase mil alunos e uma carteirinha de estudante em papel. A solução está em produção desde julho de 2026.',
                  cta_project: 'Ver o projeto',
            },
      },
      fr: {
                        exp: {
          "aefe": {
                    "role": "Responsable Vie scolaire",
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
          "controle-de-acesso": "Système de contrôle d'accès et de gestion des repas en production pour un établissement scolaire français à l'étranger. Backend Spring Boot intégré à des terminaux Hikvision (reconnaissance faciale et badge), avec un client de bureau Electron. Déployé sous Docker ; plus de 900 élèves et 190 tests automatisés.",
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
},
            about: {
                  section_label: '01 — À propos',
                  title: 'Technologie, innovation et <span class="marker-turquoise">exécution stratégique</span>.',
                  p1: 'Je suis un <span class="marker-blue">diplômé en Informatique</span> avec une expérience couvrant <span class="marker-violet"> la gouvernance informatique</span>, la modernisation de systèmes et le développement de plateformes de niveau institutionnel. Mon travail relie <span class="marker-orange">l\'innovation du secteur public</span> — des plans informatiques d\'état aux <span class="marker-red">applications full-stack</span>.',
                  p2: 'En train de m\'installer à <span class="marker-green">Bordeaux</span>, j\'opère à travers différentes cultures et langues (français, portugais, anglais technique) — gérant des <span class="marker-yellow">équipes multiculturelles</span> et livrant des projets avec une précision non négociable.',
                  stats: { projects: 'Projets Publics', languages: 'Langues de Travail', grad: 'Diplôme', cs: 'Informatique' }
            },
            // labels of the fixed navigation only; the section ids stay about, experience, work, skills, contact
            navbar: {
                  about: 'À propos',
                  experience: 'Parcours',
                  work: 'Projets',
                  skills: 'Compétences',
                  contact: 'Contact',
            },
            hero: {
                  h1_line1: 'Je résous des problèmes.',
                  h1_line2: 'En ce moment, en Java.',
                  lead_strong: 'Développeur backend Java / Spring Boot',
                  lead_rest: ', je m\'installe à Bordeaux et je cherche un CDI. Mon dernier problème : près de mille élèves et une carte d\'élève en papier. La solution tourne en production depuis juillet 2026.',
                  cta_project: 'Voir le projet',
            },
      },
};
