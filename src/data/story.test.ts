import { describe, expect, it } from 'vitest';
import { STORY } from '@/data/story';

const languages = ['fr', 'pt', 'en'] as const;

describe('STORY', () => {
  it('tells the same five steps in French, Portuguese and English', () => {
    for (const language of languages) {
      expect(STORY[language].steps).toHaveLength(5);
      for (const step of STORY[language].steps) expect(step, language).toMatch(/\S/);
    }
  });

  it('has every word of the picture in each language', () => {
    for (const language of languages) {
      for (const [key, value] of Object.entries(STORY[language])) {
        if (key !== 'steps') expect(value, `${language}.${key}`).toMatch(/\S/);
      }
    }
  });
});
