import { describe, expect, it } from 'vitest';
import { TRANSLATIONS } from '@/data/translations';

const languages = ['fr', 'pt', 'en'] as const;

// Since 31/10/2026 the two facts under the About section are words only, and the languages say what the CV says
// (public/cv/CV_Sammy_K_Magbo.pdf): French native, Portuguese bilingual, Swahili and Lingala fluent, English for
// technical reading.
const LEVELS = {
  fr: ['français (langue maternelle)', 'portugais (bilingue)', 'swahili et lingala (courant)', 'anglais (lecture technique)'],
  pt: ['francês (língua materna)', 'português (bilíngue)', 'suaíli e lingala (fluente)', 'inglês (leitura técnica)'],
  en: ['French (native)', 'Portuguese (bilingual)', 'Swahili and Lingala (fluent)', 'English (technical reading)'],
};

describe('the facts of the About section', () => {
  it('carry no figure, in any language', () => {
    for (const language of languages) {
      const { facts } = TRANSLATIONS[language].about;
      expect(`${facts.languages} ${facts.projects}`, language).not.toMatch(/\d/);
    }
  });

  it('give the languages at the levels of the CV', () => {
    for (const language of languages) {
      for (const level of LEVELS[language]) expect(TRANSLATIONS[language].about.facts.languages, language).toContain(level);
    }
  });
});
