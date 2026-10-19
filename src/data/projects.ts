import type { Language } from '@/data/translations';

// The projects section, checked against the public repositories in October 2026.
// Commit counts and dates are not written here: the section reads them from src/data/commit-trace.json,
// which the commit-trace robot refreshes. `trace` is the key of the project in that file.
type Text = Record<Language, string>;

interface ProjectsText {
      title: string;
      lead: string[];
      stack: string;
      status: string;
      problems: string;
      videoLabel: string;
      videoCaption: string;
      fullscreen: string;
      goLive: (date: string) => string;
      first: (date: string) => string;
      last: (date: string, commits: string) => string;
      commits: (n: number, formatted: string) => string;
      code: string;
      site: string;
      client: string;
      others: string;
      all: string;
}

interface FeaturedProject {
      trace: string;
      name: string;
      url: string;
      stack: string[];
      description: Text;
      problems: { title: Text; text: Text }[];
      // served from public/video; the WebM comes first, the MP4 is for browsers without VP9
      video: { webm: string; mp4: string; poster: string };
}

interface ProjectCard {
      trace: string;
      name: string;
      url: string;
      link: 'code' | 'site';
      client?: boolean;
      stack: string[];
      description: Text;
}

interface OtherProject {
      trace: string;
      name: string;
      url: string;
      stack: string;
      description: Text;
}

export const PROJECTS_TEXT: Record<Language, ProjectsText> = {
      en: {
            title: "Projects",
            lead: [
                  "Under each project you can see its public history: one line per commit, taller when the commit touches more files.",
                  "I write a good part of the code with AI assistants, mostly Claude. I define the problem and make the calls, then I check the result before keeping it.",
            ],
            stack: "Technologies",
            status: "In production",
            problems: "Two problems solved",
            videoLabel: "MAGBO Access Control demo: a school day, from the 7:28 a.m. login to the 5 p.m. closing, with the gate, the library, the cafeteria and the safety head count, then the week in numbers.",
            videoCaption: "Demo on a local instance, with fictional students and a simulated day.",
            fullscreen: "Watch full screen",
            goLive: (date) => `went live, ${date}`,
            first: (date) => `${date}, first commit`,
            last: (date, commits) => `${date}, last commit · ${commits}`,
            commits: (n, formatted) => `${formatted} ${n === 1 ? "commit" : "commits"}`,
            code: "Source code on GitHub",
            site: "Visit the site",
            client: "Client project",
            others: "Other projects",
            all: "All public repositories on GitHub",
      },
      pt: {
            title: "Projetos",
            lead: [
                  "Embaixo de cada projeto aparece o histórico público dele: um traço por commit, mais alto quando o commit mexe em mais arquivos.",
                  "Escrevo boa parte do código com assistentes de IA, principalmente o Claude. Sou eu que defino o problema e tomo as decisões, e depois confiro o resultado antes de aceitá-lo.",
            ],
            stack: "Tecnologias",
            status: "Em produção",
            problems: "Dois problemas resolvidos",
            videoLabel: "Demonstração do MAGBO Access Control: um dia na escola, do login às 7h28 ao fechamento das 17h, com o portão, a biblioteca, a cantina e a contagem de segurança, e depois a semana em números.",
            videoCaption: "Demonstração numa instância local, com alunos fictícios e um dia simulado.",
            fullscreen: "Ver em tela cheia",
            goLive: (date) => `entrada em produção, ${date}`,
            first: (date) => `${date}, primeiro commit`,
            last: (date, commits) => `${date}, último commit · ${commits}`,
            commits: (n, formatted) => `${formatted} ${n === 1 ? "commit" : "commits"}`,
            code: "Código-fonte no GitHub",
            site: "Ver o site",
            client: "Projeto de cliente",
            others: "Outros projetos",
            all: "Todos os repositórios públicos no GitHub",
      },
      fr: {
            title: "Projets",
            lead: [
                  "Sous chaque projet, la trace montre son historique public : un trait par commit, plus haut quand le commit touche plus de fichiers.",
                  "J'écris une bonne partie du code avec des assistants IA, surtout Claude. C'est moi qui pose le problème et qui tranche, puis je vérifie le résultat avant de le garder.",
            ],
            stack: "Technologies",
            status: "En production",
            problems: "Deux problèmes réglés",
            videoLabel: "Démonstration de MAGBO Access Control\u00a0: une journée au lycée, de la connexion à 7\u00a0h\u00a028 à la clôture de 17\u00a0h, avec le portail, le CDI, la cantine et le PPMS, puis la semaine en chiffres.",
            videoCaption: "Démonstration sur une instance locale, avec des élèves fictifs et une journée simulée.",
            fullscreen: "Voir en plein écran",
            goLive: (date) => `mise en production, ${date}`,
            first: (date) => `${date}, premier commit`,
            last: (date, commits) => `${date}, dernier commit · ${commits}`,
            commits: (n, formatted) => `${formatted} ${n === 1 ? "commit" : "commits"}`,
            code: "Code source sur GitHub",
            site: "Voir le site",
            client: "Projet client",
            others: "Autres projets",
            all: "Tous les dépôts publics sur GitHub",
      },
};

export const FEATURED: FeaturedProject = {
      trace: "magbo",
      name: "MAGBO Access Control",
      url: "https://github.com/sammagbo/Controle-de-Acesso",
      stack: ["Java 17", "Spring Boot 3", "Spring Security", "PostgreSQL", "JUnit", "Docker", "React", "Electron"],
      video: {
            webm: "/video/magbo-access-control.webm",
            mp4: "/video/magbo-access-control.mp4",
            poster: "/video/magbo-access-control-poster.webp",
      },
      description: {
            en: "I built this access and meal control system for the school where I worked, in Rio de Janeiro. Hikvision terminals recognize a face or a badge, whichever each person prefers. The Spring Boot server receives each pass, checks the rule for that place (cafeteria, gate or library) and records it. The team sees each pass arrive live on a desktop app.",
            pt: "Construí este sistema de controle de acesso e de refeições para a escola onde eu trabalhava, no Rio de Janeiro. Os terminais Hikvision reconhecem o rosto ou o crachá, à escolha de cada um. O servidor Spring Boot recebe a passagem, confere a regra do local (cantina, portão ou biblioteca) e registra. A equipe vê as passagens chegarem ao vivo num aplicativo de desktop.",
            fr: "J'ai construit ce système de contrôle d'accès et de repas pour le lycée où je travaillais, à Rio de Janeiro. Les terminaux Hikvision reconnaissent le visage ou le badge, au choix de chacun. Le serveur Spring Boot reçoit le passage, vérifie la règle du lieu (cantine, portail ou CDI) et l'enregistre. L'équipe voit les passages arriver en direct sur une application de bureau.",
      },
      problems: [
            {
                  title: { en: "Meals counted by mistake", pt: "Refeições contadas por engano", fr: "Des repas comptés à tort" },
                  text: {
                        en: "The terminal sent the student's ID even when it refused entry. The system then counted meals nobody ate. I split actual passes and refused attempts into two separate tables.",
                        pt: "O terminal enviava o número do aluno mesmo quando recusava a passagem. O sistema contava então refeições que nunca aconteceram. Separei as passagens efetivas e as tentativas recusadas em duas tabelas.",
                        fr: "Le terminal envoyait l'identifiant de l'élève même quand il lui refusait le passage. Le système comptait alors des repas jamais pris. J'ai rangé les passages effectifs et les tentatives refusées dans deux tables séparées.",
                  },
            },
            {
                  title: { en: "The time of the pass", pt: "A hora da passagem", fr: "L'heure du passage" },
                  text: {
                        en: "I fixed four clock errors. One came from a Docker container left on UTC: a pass at 14:26 was recorded at 17:26. Since then, every decision is judged by the time of the pass, never by the time it is processed.",
                        pt: "Corrigi quatro erros de relógio. Um vinha de um contêiner Docker que ficou em UTC: uma passagem às 14h26 era gravada às 17h26. Desde então, toda decisão se julga pela hora da passagem, nunca pela hora do processamento.",
                        fr: "J'ai corrigé quatre erreurs d'horloge. L'une venait d'un conteneur Docker resté en UTC : un passage à 14 h 26 s'enregistrait à 17 h 26. Depuis, une décision se juge à l'heure du passage, jamais à l'heure du traitement.",
                  },
            },
      ],
};

export const CARDS: ProjectCard[] = [
      {
            trace: "meeting",
            name: "MeetingManager",
            url: "https://github.com/sammagbo/Controle-de-tempo-e-Assistencia",
            link: "code",
            stack: ["Java 21", "Spring Boot 4", "Spring Security", "Flyway", "PostgreSQL", "React", "PWA"],
            description: {
                  en: "The app installs from the browser and works offline. It times each part of a meeting and counts attendance. The report comes out as a PDF, and the whole history exports to Excel. I replaced Supabase with a Spring Boot 4 API on PostgreSQL.",
                  pt: "O aplicativo se instala pelo navegador e funciona offline. Ele cronometra cada parte de uma reunião e conta os presentes. O relatório sai em PDF, e todo o histórico pode ser exportado para Excel. Troquei o Supabase por uma API Spring Boot 4 com PostgreSQL.",
                  fr: "L'application s'installe depuis le navigateur et marche hors ligne. Elle minute chaque partie d'une réunion et compte l'assistance. Le rapport sort en PDF, et tout l'historique s'exporte en Excel. J'ai remplacé Supabase par une API Spring Boot 4 avec PostgreSQL.",
            },
      },
      {
            trace: "phare",
            name: "pHARe",
            url: "https://github.com/sammagbo/phare-project",
            link: "code",
            stack: ["Java 17", "Spring Boot 3", "PostgreSQL", "Node.js", "Express", "PWA"],
            description: {
                  en: "pHARe is France's national anti-bullying program for schools. This tool helps a school's pHARe team follow cases and assign interviews during meetings. If the server does not answer, it keeps working in the browser.",
                  pt: "O pHARe é o programa nacional francês de combate ao bullying nas escolas. Esta ferramenta ajuda a equipe pHARe de uma escola a acompanhar os casos e a distribuir as entrevistas durante as reuniões. Se o servidor não responde, ela continua funcionando no navegador.",
                  fr: "pHARe est le programme national de lutte contre le harcèlement à l'école. Cet outil aide l'équipe pHARe d'un lycée à suivre les situations et à répartir les entretiens pendant les réunions. Si le serveur ne répond pas, il continue en local.",
            },
      },
      {
            trace: "talk",
            name: "The Talk",
            url: "https://www.thetalkfashion.com/",
            link: "site",
            client: true,
            stack: ["React 18", "Vite", "Tailwind CSS", "GSAP", "Sanity", "Vercel"],
            description: {
                  en: "This editorial site covers fashion, lifestyle and culture in three languages. Every episode comes as video and audio, and all the content comes from Sanity. A Next.js version is in pre-production.",
                  pt: "Este site editorial fala de moda, lifestyle e cultura, em três línguas. Cada episódio existe em vídeo e em áudio, e todo o conteúdo vem do Sanity. Uma versão em Next.js está em pré-produção.",
                  fr: "Ce site éditorial parle de mode, de lifestyle et de culture, en trois langues. Chaque épisode existe en vidéo et en audio, et tout le contenu vient de Sanity. Une version Next.js est en préproduction.",
            },
      },
];

export const OTHERS: OtherProject[] = [
      {
            trace: "lms",
            name: "French LMS",
            url: "https://github.com/sammagbo/french-lms",
            stack: "NestJS, Prisma, PostgreSQL, Next.js",
            description: {
                  en: "A platform to learn French, with online lessons and graded assignments",
                  pt: "Plataforma para aprender francês, com aulas online e tarefas corrigidas",
                  fr: "Plateforme pour apprendre le français, avec des cours en ligne et des devoirs corrigés",
            },
      },
      {
            trace: "carnet",
            name: "Carnet de lecture",
            url: "https://github.com/sammagbo/ccc_cdi",
            stack: "React, TypeScript, Zustand",
            description: {
                  en: "Prototype for a school library: a book catalog and reading quizzes",
                  pt: "Protótipo para a biblioteca de uma escola: catálogo de livros e quizzes de leitura",
                  fr: "Prototype pour un CDI : un catalogue de livres et des quiz de lecture",
            },
      },
      {
            trace: "cdi",
            name: "CDI Manager",
            url: "https://github.com/sammagbo/CDI",
            stack: "Spring Boot, Electron",
            description: {
                  en: "Logs visits to the school library, as a desktop app",
                  pt: "Registro das passagens na biblioteca da escola, em aplicativo de desktop",
                  fr: "Suivi des passages au CDI, en application de bureau",
            },
      },
      {
            trace: "site",
            name: "sammagbo.com",
            url: "https://github.com/sammagbo/MAGBO-STUDIO-REPO",
            stack: "React, TypeScript, Vite",
            description: {
                  en: "The site you are reading. A GitHub Actions bot updates this history twice a day",
                  pt: "O site que você está lendo. Um robô do GitHub Actions atualiza esse histórico duas vezes por dia",
                  fr: "Le site que vous lisez. Un robot GitHub Actions met la trace à jour deux fois par jour",
            },
      },
];
