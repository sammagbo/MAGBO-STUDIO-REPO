import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import traceJson from '@/data/commit-trace.json';
import { CARDS, FEATURED, OTHERS, PROJECTS_TEXT } from '@/data/projects';

const projects = [FEATURED, ...CARDS, ...OTHERS];
const keys = traceJson.projects.map(project => project.key);
const languages = ['fr', 'pt', 'en'] as const;

describe('the projects section', () => {
  it('points every project at a project of the commit trace', () => {
    for (const project of projects) expect(keys).toContain(project.trace);
  });

  it('shows each project once', () => {
    expect(new Set(projects.map(project => project.trace)).size).toBe(projects.length);
  });

  it('links to https addresses only', () => {
    for (const project of projects) expect(project.url).toMatch(/^https:\/\/[^\s]+$/);
  });

  it('ships the demo video of the featured project, light enough for the page', () => {
    const limits = { webm: 1_200_000, mp4: 1_500_000, poster: 120_000 };
    for (const [kind, url] of Object.entries(FEATURED.video)) {
      const file = join(process.cwd(), 'public', url);
      expect(existsSync(file), url).toBe(true);
      expect(statSync(file).size, url).toBeLessThanOrEqual(limits[kind as keyof typeof limits]);
    }
  });

  it('has every text in French, Portuguese and English', () => {
    for (const language of languages) {
      const texts = [
        PROJECTS_TEXT[language].title,
        ...PROJECTS_TEXT[language].lead,
        PROJECTS_TEXT[language].videoLabel,
        PROJECTS_TEXT[language].videoCaption,
        ...projects.map(project => project.description[language]),
        ...FEATURED.problems.flatMap(problem => [problem.title[language], problem.text[language]]),
      ];
      for (const text of texts) expect(text.trim()).not.toBe('');
    }
  });
});
