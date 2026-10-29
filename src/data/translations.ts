export type Language = 'en' | 'pt' | 'fr';

export const TRANSLATIONS = {
      en: {
            about: {
                  title: "About",
                  lead: "I worked for fourteen years in Rio de Janeiro before coming to France.",
                  story: [
                        "In 2012, I started out as an information security agent. Four years later, I earned my technical diploma in computing at ISERJ. In 2018, I enrolled in a Computer Science degree at Universidade Veiga de Almeida.",
                        "In 2020, I joined the Lycée Molière, a school in the AEFE network, as head of student life. In 2022, I went to work for the Rio de Janeiro state government, first in the projects office, then in the IT team. I held both jobs at the same time. I finished my degree in 2025.",
                        "It was at the school, in my first week, that I found the problem I mention above.",
                  ],
                  peak: "I never let it go.",
                  closing: "Today I'm settling in Bordeaux. I'm looking for a permanent role (CDI) as a junior Java / Spring Boot backend developer. I want to travel the rest of this road with a team.",
                  facts: { languages: "working languages: French, Portuguese, technical English", projects: "public projects on GitHub" },
            },
            // labels of the fixed navigation only; the section ids stay about, experience, work, contact
            navbar: {
                  about: 'About',
                  experience: 'Experience',
                  work: 'Projects',
                  contact: 'Contact',
            },
            hero: {
                  h1_line1: 'I solve problems.',
                  h1_line2: 'Right now, in Java.',
                  lead_strong: 'Junior Java / Spring Boot backend developer',
                  lead_rest: ', settling in Bordeaux and looking for a permanent role (CDI). My latest problem: nearly a thousand students and a paper student card. The solution has been in production since July 2026.',
                  cta_project: 'See the project',
            },
      },
      pt: {
            about: {
                  title: "Sobre",
                  lead: "Trabalhei catorze anos no Rio de Janeiro antes de vir para a França.",
                  story: [
                        "Em 2012, comecei como agente de segurança da informação. Quatro anos depois, tirei meu diploma técnico em informática no ISERJ. Em 2018, entrei na graduação em Ciência da Computação da Universidade Veiga de Almeida.",
                        "Em 2020, fui para o Lycée Molière, uma escola da rede AEFE, como responsável pela vida escolar. Em 2022, passei a trabalhar no governo do Estado do Rio, primeiro no escritório de projetos, depois na equipe de TI. Mantive os dois cargos ao mesmo tempo. Terminei a graduação em 2025.",
                        "Foi na escola, na semana em que cheguei, que encontrei o problema de que falo acima.",
                  ],
                  peak: "Não larguei mais.",
                  closing: "Hoje, estou me mudando para Bordeaux. Procuro uma vaga em CDI como desenvolvedor backend Java / Spring Boot júnior. O resto do caminho, quero fazer em equipe.",
                  facts: { languages: "idiomas de trabalho: francês, português, inglês técnico", projects: "projetos públicos no GitHub" },
            },
            // labels of the fixed navigation only; the section ids stay about, experience, work, contact
            navbar: {
                  about: 'Sobre',
                  experience: 'Trajetória',
                  work: 'Projetos',
                  contact: 'Contato',
            },
            hero: {
                  h1_line1: 'Eu resolvo problemas.',
                  h1_line2: 'No momento, em Java.',
                  lead_strong: 'Desenvolvedor backend Java / Spring Boot júnior',
                  lead_rest: ', estou me mudando para Bordeaux e procuro uma vaga em CDI. Meu último problema: quase mil alunos e uma carteirinha de estudante em papel. A solução está em produção desde julho de 2026.',
                  cta_project: 'Ver o projeto',
            },
      },
      fr: {
            about: {
                  title: "À propos",
                  lead: "J'ai travaillé quatorze ans à Rio de Janeiro avant de venir en France.",
                  story: [
                        "En 2012, j'ai commencé comme agent de sûreté de l'information. Quatre ans plus tard, j'ai obtenu mon diplôme technique en informatique à l'ISERJ. En 2018, je me suis inscrit en informatique à l'Universidade Veiga de Almeida.",
                        "En 2020, je suis entré au Lycée Molière, un établissement du réseau AEFE, comme responsable de la vie scolaire. En 2022, j'ai rejoint le gouvernement de l'État de Rio, d'abord au bureau de projets, puis à l'équipe informatique. J'ai tenu les deux postes de front. J'ai obtenu mon diplôme en 2025.",
                        "C'est au lycée, la semaine de mon arrivée, que j'ai trouvé le problème dont je parle plus haut.",
                  ],
                  peak: "Je ne l'ai plus lâché.",
                  closing: "Aujourd'hui, je m'installe à Bordeaux. Je cherche un CDI de développeur backend Java / Spring Boot junior. La suite du chemin, je veux la faire en équipe.",
                  facts: { languages: "langues de travail : français, portugais, anglais technique", projects: "projets publics sur GitHub" },
            },
            // labels of the fixed navigation only; the section ids stay about, experience, work, contact
            navbar: {
                  about: 'À propos',
                  experience: 'Parcours',
                  work: 'Projets',
                  contact: 'Contact',
            },
            hero: {
                  h1_line1: 'Je résous des problèmes.',
                  h1_line2: 'En ce moment, en Java.',
                  lead_strong: 'Développeur backend Java / Spring Boot junior',
                  lead_rest: ', je m\'installe à Bordeaux et je cherche un CDI. Mon dernier problème : près de mille élèves et une carte d\'élève en papier. La solution tourne en production depuis juillet 2026.',
                  cta_project: 'Voir le projet',
            },
      },
};
