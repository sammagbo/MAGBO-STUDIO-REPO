import { describe, expect, it } from 'vitest';
import traceJson from '@/data/commit-trace.json';
import { PUBLIC_PROJECTS } from '@/data/constants';

describe('PUBLIC_PROJECTS', () => {
  it('matches the projects in the commit trace', () => {
    expect(PUBLIC_PROJECTS).toBe(traceJson.projects.length);
  });
});
