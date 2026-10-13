export type Language = 'en' | 'pt' | 'fr';

export const TRANSLATIONS = {
      en: {
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
          "work_badge": "03 — Selected Work",
          "work_title": "<span class=\"marker-blue\">Engineering</span> Logs",
          "skills_badge": "04 — Skills & Expertise",
          "skills_title": "Technical <span class=\"marker-red\">Arsenal</span>",
          "contact_badge": "05 — Initializing Connection",
},
            about: {
                  title: "About",
                  lead: "I worked for fourteen years in Rio de Janeiro before coming to France.",
                  story: [
                        "In 2012, I started out as an information security agent. Four years later, I earned my technical diploma in computing at ISERJ. In 2018, I enrolled in a Computer Science degree at Universidade Veiga de Almeida.",
                        "In 2020, I joined the Lycée Molière, a school in the AEFE network, as head of student life. In 2022, I went to work for the Rio de Janeiro state government, on IT governance and planning. I held both jobs at the same time. I finished my degree in 2025.",
                        "It was at the school, in my first week, that I found the problem I mention above.",
                  ],
                  peak: "I never let it go.",
                  closing: "Today I'm settling in Bordeaux. I'm looking for a permanent role (CDI) as a Java / Spring Boot backend developer. I want to travel the rest of this road with a team.",
                  facts: { languages: "working languages: French, Portuguese, technical English", projects: "public projects on GitHub" },
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
          "work_badge": "03 — Trabalhos Selecionados",
          "work_title": "Logs de <span class=\"marker-blue\">Engenharia</span>",
          "skills_badge": "04 — Habilidades e Expertise",
          "skills_title": "Arsenal <span class=\"marker-red\">Técnico</span>",
          "contact_badge": "05 — Iniciando Conexão",
},
            about: {
                  title: "Sobre",
                  lead: "Trabalhei catorze anos no Rio de Janeiro antes de vir para a França.",
                  story: [
                        "Em 2012, comecei como agente de segurança da informação. Quatro anos depois, tirei meu diploma técnico em informática no ISERJ. Em 2018, entrei na graduação em Ciência da Computação da Universidade Veiga de Almeida.",
                        "Em 2020, fui para o Lycée Molière, uma escola da rede AEFE, como responsável pela vida escolar. Em 2022, passei a trabalhar no governo do Estado do Rio, com governança e planejamento de TI. Mantive os dois cargos ao mesmo tempo. Terminei a graduação em 2025.",
                        "Foi na escola, na semana em que cheguei, que encontrei o problema de que falo acima.",
                  ],
                  peak: "Não larguei mais.",
                  closing: "Hoje, estou me mudando para Bordeaux. Procuro uma vaga em CDI como desenvolvedor backend Java / Spring Boot. O resto do caminho, quero fazer em equipe.",
                  facts: { languages: "idiomas de trabalho: francês, português, inglês técnico", projects: "projetos públicos no GitHub" },
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
          "work_badge": "03 — Projets Sélectionnés",
          "work_title": "Registres <span class=\"marker-blue\">Techniques</span>",
          "skills_badge": "04 — Compétences",
          "skills_title": "Arsenal <span class=\"marker-red\">Technologique</span>",
          "contact_badge": "05 — Connexion Initiale",
},
            about: {
                  title: "À propos",
                  lead: "J'ai travaillé quatorze ans à Rio de Janeiro avant de venir en France.",
                  story: [
                        "En 2012, j'ai commencé comme agent de sécurité de l'information. Quatre ans plus tard, j'ai obtenu mon diplôme technique en informatique à l'ISERJ. En 2018, je me suis inscrit en licence d'informatique à l'Universidade Veiga de Almeida.",
                        "En 2020, je suis entré au Lycée Molière, un établissement du réseau AEFE, comme responsable de la vie scolaire. En 2022, j'ai rejoint le gouvernement de l'État de Rio pour travailler sur la gouvernance et la planification de son informatique. J'ai tenu les deux postes de front. J'ai terminé ma licence en 2025.",
                        "C'est au lycée, la semaine de mon arrivée, que j'ai trouvé le problème dont je parle plus haut.",
                  ],
                  peak: "Je ne l'ai plus lâché.",
                  closing: "Aujourd'hui, je m'installe à Bordeaux. Je cherche un CDI de développeur backend Java / Spring Boot. La suite du chemin, je veux la faire en équipe.",
                  facts: { languages: "langues de travail : français, portugais, anglais technique", projects: "projets publics sur GitHub" },
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
