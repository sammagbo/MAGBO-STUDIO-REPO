import type { Language } from '@/data/translations';

// Texts of the contact section in each language. The links come from PROFILE in src/data/constants.ts; the e-mail address stays off the site.
interface ContactText {
      title: string;
      lead: string;
      languages: string;
      basedIn: string;
      city: string;
}

export const CONTACT: Record<Language, ContactText> = {
      en: {
            title: "Contact",
            lead: "For a job or a project, message me on LinkedIn.",
            languages: "I reply in French, Portuguese or English.",
            basedIn: "Based in",
            city: "Bordeaux, France",
      },
      pt: {
            title: "Contato",
            lead: "Para uma vaga ou um projeto, me escreva no LinkedIn.",
            languages: "Respondo em francês, português ou inglês.",
            basedIn: "Baseado em",
            city: "Bordeaux, França",
      },
      fr: {
            title: "Contact",
            lead: "Pour un poste ou un projet, écrivez-moi sur LinkedIn.",
            languages: "Je réponds en français, en portugais ou en anglais.",
            basedIn: "Basé à",
            city: "Bordeaux, France",
      },
};
