import type { Language } from '@/data/translations';

// Texts of the contact section in each language. The links and the CV come from PROFILE in src/data/constants.ts; the e-mail
// address and the phone number stay off the site.
interface ContactText {
      title: string;
      lead: string;
      languages: string;
      cv: string;
      cvLink: string;
      basedIn: string;
      city: string;
}

export const CONTACT: Record<Language, ContactText> = {
      en: {
            title: "Contact",
            lead: "For a job or a project, message me on LinkedIn.",
            languages: "I reply in French or Portuguese.",
            cv: "CV",
            cvLink: "PDF, in French",
            basedIn: "Based in",
            city: "Bordeaux, France",
      },
      pt: {
            title: "Contato",
            lead: "Para uma vaga ou um projeto, me escreva no LinkedIn.",
            languages: "Respondo em francês ou português.",
            cv: "Currículo",
            cvLink: "PDF, em francês",
            basedIn: "Baseado em",
            city: "Bordeaux, França",
      },
      fr: {
            title: "Contact",
            lead: "Pour un poste ou un projet, écrivez-moi sur LinkedIn.",
            languages: "Je réponds en français ou en portugais.",
            cv: "CV",
            cvLink: "PDF, en français",
            basedIn: "Basé à",
            city: "Bordeaux, France",
      },
};
