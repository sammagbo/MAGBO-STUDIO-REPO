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
    for (const project of projects) if (project.url) expect(project.url).toMatch(/^https:\/\/[^\s]+$/);
  });

  it('gives the French LMS no link: its code is private, and the old repository is archived', () => {
    expect(OTHERS.find(project => project.trace === 'lms')?.url).toBeUndefined();
  });

  it('ships every demo video within its size budget', () => {
    // only the posters come with the page (preload="none"): the featured video loads once it is on screen, and the
    // video of a card when its button is pressed
    const limits = { webm: 5_000_000, mp4: 6_000_000, poster: 120_000 };
    const demos = [FEATURED.video, ...CARDS.flatMap(card => (card.demo ? [card.demo] : []))];
    expect(demos.length).toBeGreaterThan(1);
    for (const demo of demos) {
      for (const kind of ['webm', 'mp4', 'poster'] as const) {
        const file = join(process.cwd(), 'public', demo[kind]);
        expect(existsSync(file), demo[kind]).toBe(true);
        expect(statSync(file).size, demo[kind]).toBeLessThanOrEqual(limits[kind]);
      }
    }
  });

  it('ships the screenshot of a card within its size budget', () => {
    const shots = CARDS.flatMap(card => (card.shot ? [card.shot.src] : []));
    expect(shots.length).toBeGreaterThan(0);
    for (const src of shots) {
      const file = join(process.cwd(), 'public', src);
      expect(existsSync(file), src).toBe(true);
      expect(statSync(file).size, src).toBeLessThanOrEqual(150_000);
    }
  });

  it('has every text in French, Portuguese and English', () => {
    for (const language of languages) {
      const texts = [
        PROJECTS_TEXT[language].title,
        ...PROJECTS_TEXT[language].lead,
        PROJECTS_TEXT[language].videoLabel,
        PROJECTS_TEXT[language].videoCaption,
        PROJECTS_TEXT[language].fullscreen,
        PROJECTS_TEXT[language].demo,
        ...projects.map(project => project.description[language]),
        ...CARDS.flatMap(card => (card.demo ? [card.demo.label[language], card.demo.caption[language]] : [])),
        ...CARDS.flatMap(card => (card.shot ? [card.shot.alt[language], card.shot.caption[language]] : [])),
        ...FEATURED.problems.flatMap(problem => [problem.title[language], problem.text[language]]),
      ];
      for (const text of texts) expect(text.trim()).not.toBe('');
    }
  });
});
