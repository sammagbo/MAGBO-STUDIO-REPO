import { describe, expect, it } from 'vitest';
import { DIAGRAMS } from '@/data/diagrams';
import { FEATURED } from '@/data/projects';

const languages = ['fr', 'pt', 'en'] as const;

describe('the diagrams of the two problems', () => {
  it('draws one diagram per problem of MAGBO Access Control', () => {
    expect(FEATURED.problems.map(problem => problem.diagram)).toEqual(['meals', 'clock']);
  });

  it('has every word in French, Portuguese and English', () => {
    for (const language of languages) {
      for (const [key, value] of Object.entries(DIAGRAMS[language])) expect(value, `${language}.${key}`).toMatch(/\S/);
    }
  });

  it('shows the same times as the text beside it', () => {
    const clock = FEATURED.problems.find(problem => problem.diagram === 'clock')!;
    for (const language of languages) {
      expect(clock.text[language], language).toContain(DIAGRAMS[language].passTime);
      expect(clock.text[language], language).toContain(DIAGRAMS[language].wrongTime);
    }
  });

  it('writes no figure the text does not give', () => {
    const meals = FEATURED.problems.find(problem => problem.diagram === 'meals')!;
    for (const language of languages) expect(Object.values(DIAGRAMS[language]).join(' ')).not.toMatch(/\d{3,}/);
    expect(meals.text.fr).toMatch(/repas jamais pris/);
  });
});
