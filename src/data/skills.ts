import type { Language } from '@/data/translations';

// The skills section: each tool with the projects where it is used, checked against the public repositories.
// The technical tools are presented as being learned; management is work experience.
type Text = Record<Language, string>;
type Label = string | Text;

interface SkillItem {
      name: Label;
      where: Label;
}

interface SkillGroup {
      label: Text;
      items: SkillItem[];
}

export const pick = (label: Label, language: Language): string => (typeof label === 'string' ? label : label[language]);

export const SKILLS_TEXT: Record<Language, { title: string; lead: string }> = {
      en: {
            title: "Skills",
            lead: "I learn the technical tools by building my projects, listed next to each one. Management is something I practice at work.",
      },
      pt: {
            title: "Competências",
            lead: "Aprendo as ferramentas técnicas construindo meus projetos, que aparecem ao lado de cada uma. A gestão, pratico no trabalho.",
      },
      fr: {
            title: "Compétences",
            lead: "J'apprends les outils techniques en construisant mes projets, indiqués à côté de chacun. La gestion, je la pratique au travail.",
      },
};

const JAVA_PROJECTS = "MAGBO Access Control · pHARe · MeetingManager · CDI Manager";

export const SKILL_GROUPS: SkillGroup[] = [
      {
            label: { en: "Backend", pt: "Backend", fr: "Backend" },
            items: [
                  { name: "Java", where: JAVA_PROJECTS },
                  { name: "Spring Boot", where: JAVA_PROJECTS },
                  { name: "JPA / Hibernate", where: JAVA_PROJECTS },
                  { name: "Spring Security", where: "MAGBO Access Control · MeetingManager" },
                  { name: { en: "REST API", pt: "API REST", fr: "API REST" }, where: "MAGBO Access Control · pHARe · MeetingManager" },
                  { name: "PostgreSQL", where: "MAGBO Access Control · pHARe · MeetingManager · French LMS" },
                  { name: "JUnit", where: "MAGBO Access Control" },
                  { name: "Maven", where: JAVA_PROJECTS },
                  { name: "Node.js", where: "French LMS · pHARe" },
            ],
      },
      {
            label: { en: "Infrastructure", pt: "Infraestrutura", fr: "Infrastructure" },
            items: [
                  { name: "Docker", where: "MAGBO Access Control · MeetingManager · French LMS" },
                  { name: "Nginx", where: "MAGBO Access Control" },
                  { name: "GitHub Actions", where: "sammagbo.com · French LMS · Carnet de lecture" },
                  { name: "Vercel", where: "sammagbo.com · MeetingManager" },
            ],
      },
      {
            label: { en: "Frontend", pt: "Frontend", fr: "Frontend" },
            items: [
                  { name: "React", where: "MAGBO Access Control · MeetingManager · French LMS · Carnet de lecture · sammagbo.com" },
                  { name: "TypeScript", where: "MeetingManager · French LMS · Carnet de lecture · sammagbo.com" },
                  { name: "Next.js", where: "French LMS" },
                  { name: "Tailwind CSS", where: "MeetingManager · French LMS · Carnet de lecture · sammagbo.com" },
                  { name: "GSAP", where: "sammagbo.com · MeetingManager · Carnet de lecture" },
            ],
      },
      {
            label: { en: "Management", pt: "Gestão", fr: "Gestion" },
            items: [
                  {
                        name: { en: "IT governance", pt: "Governança de TI", fr: "Gouvernance informatique" },
                        where: { en: "SEDEICS: IT master plan", pt: "SEDEICS: plano diretor de TI", fr: "SEDEICS : schéma directeur informatique" },
                  },
                  {
                        name: { en: "Project management", pt: "Gestão de projetos", fr: "Gestion de projet" },
                        where: "SEDEICS · MAGBO Access Control · C.L. 2.0",
                  },
            ],
      },
];
