import type { Language } from '@/data/translations';

// Texts of the experience section in each language, one entry per job and degree of src/data/constants.ts.
export type JobId = 'aefe' | 'sedeics' | 'noceci' | 'cl20' | 'maori';
export type DegreeId = 'uva' | 'iserj';

interface ParcoursText {
      title: string;
      education: string;
      jobs: Record<JobId, { role: string; bullets: string[] }>;
      degrees: Record<DegreeId, { degree: string; note?: string }>;
}

export const PARCOURS: Record<Language, ParcoursText> = {
      en: {
            title: "Experience",
            education: "Education",
            jobs: {
                  aefe: {
                        role: "Responsable Vie scolaire",
                        bullets: [
                              "Student follow-up and contact with families, in a bilingual school of nearly a thousand students.",
                              "Organization of exams and certifications: bac, brevet, PIX.",
                              "Replacement of the paper student card with smart cards (students, parents, staff), then with MAGBO Access Control, in production since July 2026.",
                              "Tools and organization: pHARe (bullying case follow-up), CDI (school library) management, careers fair schedule.",
                        ],
                  },
                  sedeics: {
                        role: "IT Development Agent — Strategic Projects",
                        bullets: [
                              "In charge of technology for the executive board.",
                              "Leadership and delivery of the SEDEICS PDTIC, the IT master plan that every state secretariat had to submit.",
                              "Mapping of the secretariat's IT network.",
                        ],
                  },
                  noceci: {
                        role: "Managing Partner",
                        bullets: ["Travel agency: administrative and financial management, legal representation of the company."],
                  },
                  cl20: {
                        role: "Founder",
                        bullets: ["Language school (English, Spanish, French, Italian) created in the entrepreneurship program of Universidade Veiga de Almeida: business model, course offering, operations."],
                  },
                  maori: {
                        role: "Information Security Agent",
                        bullets: ["Reception and information security on the DCNS project, in a restricted-access environment."],
                  },
            },
            degrees: {
                  uva: { degree: "Bachelor's degree in Computer Science (Ciência da Computação)", note: "C.L. 2.0 project lead (2018)" },
                  iserj: { degree: "Technical diploma in computing" },
            },
      },
      pt: {
            title: "Trajetória",
            education: "Formação",
            jobs: {
                  aefe: {
                        role: "Responsable Vie scolaire",
                        bullets: [
                              "Acompanhamento dos alunos e contato com as famílias, numa escola bilíngue de quase mil alunos.",
                              "Organização dos exames e certificações: bac, brevet, PIX.",
                              "Troca da carteirinha de papel por cartões com chip (alunos, pais, funcionários) e depois pelo MAGBO Access Control, em produção desde julho de 2026.",
                              "Ferramentas e organização: pHARe (acompanhamento dos casos de bullying), gestão do CDI, planejamento do fórum das profissões.",
                        ],
                  },
                  sedeics: {
                        role: "Agente de Desenvolvimento de TI — Projetos Estratégicos",
                        bullets: [
                              "Responsável pela tecnologia junto à diretoria executiva.",
                              "Liderança e entrega do PDTIC da SEDEICS, o plano diretor de TI que cada secretaria do Estado tinha de entregar.",
                              "Mapeamento da rede de TI da secretaria.",
                        ],
                  },
                  noceci: {
                        role: "Sócio Administrador",
                        bullets: ["Agência de viagens: gestão administrativa e financeira, representação legal da empresa."],
                  },
                  cl20: {
                        role: "Fundador",
                        bullets: ["Escola de idiomas (inglês, espanhol, francês, italiano) criada no programa de empreendedorismo da Universidade Veiga de Almeida: modelo de negócio, oferta de cursos, funcionamento."],
                  },
                  maori: {
                        role: "Agente de segurança da informação",
                        bullets: ["Recepção e segurança da informação no projeto DCNS, num ambiente de acesso restrito."],
                  },
            },
            degrees: {
                  uva: { degree: "Bacharelado em Ciência da Computação", note: "Responsável pelo projeto C.L. 2.0 (2018)" },
                  iserj: { degree: "Diploma técnico em informática" },
            },
      },
      fr: {
            title: "Parcours",
            education: "Formation",
            jobs: {
                  aefe: {
                        role: "Responsable Vie scolaire",
                        bullets: [
                              "Suivi des élèves et lien avec les familles, dans un établissement bilingue de près de mille élèves.",
                              "Organisation des examens et certifications : bac, brevet, PIX.",
                              "Remplacement de la carte d'élève en papier par des cartes à puce (élèves, parents, personnel), puis par MAGBO Access Control, en production depuis juillet 2026.",
                              "Outils et organisation : pHARe (suivi des situations de harcèlement), gestion du CDI, planning du forum des métiers.",
                        ],
                  },
                  sedeics: {
                        role: "Agent de développement informatique, projets stratégiques",
                        bullets: [
                              "Responsable de la technologie auprès de la direction exécutive.",
                              "Pilotage et livraison du PDTIC de la SEDEICS, le schéma directeur informatique que chaque secrétariat de l'État devait remettre.",
                              "Cartographie du réseau informatique du secrétariat.",
                        ],
                  },
                  noceci: {
                        role: "Associé gérant",
                        bullets: ["Agence de voyages : gestion administrative et financière, représentation légale de l'entreprise."],
                  },
                  cl20: {
                        role: "Fondateur",
                        bullets: ["École de langues (anglais, espagnol, français, italien) créée dans le programme d'entrepreneuriat de l'Universidade Veiga de Almeida : modèle économique, offre de cours, fonctionnement."],
                  },
                  maori: {
                        role: "Agent de sécurité de l'information",
                        bullets: ["Accueil et sécurité de l'information sur le projet DCNS, dans un environnement à accès restreint."],
                  },
            },
            degrees: {
                  uva: { degree: "Licence en informatique (Ciência da Computação)", note: "Responsable du projet C.L. 2.0 (2018)" },
                  iserj: { degree: "Diplôme technique en informatique" },
            },
      },
};
