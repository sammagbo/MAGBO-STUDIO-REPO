import { SKILL_GROUPS, pick } from '@/data/skills';

/**
 * SAMMY_DATA — Terminal-specific profile and skills data.
 * English-only (Unix convention). The skills are the tools of the skills section, from src/data/skills.ts.
 */

export const SAMMY_DATA = {
      name: 'Sammy K Magbo',
      role: 'Junior AI Fullstack Engineer & Security Architect',
      clearance: 'Level 5 — Full Access',
      base: 'Bordeaux, France',
      ops: 'Remote — Global',
      focus: 'Critical Infrastructure & GovTech',
      skills: SKILL_GROUPS.filter((group) => group.label.en !== 'Management').flatMap((group) => group.items.map((item) => pick(item.name, 'en'))),
};
