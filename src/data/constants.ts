/**
 * MAGBO STUDIO — Centralized data constants.
 * Real profile data sourced from LinkedIn + GitHub. Clean, recruiter-friendly.
 */

import type { DegreeId, JobId } from '@/data/parcours';

// Shown in the contact section. The e-mail address and the phone number stay off the site, and out of the CV.
export const PROFILE = {
      name: 'Sammy K. Magbo',
      linkedin: 'https://www.linkedin.com/in/sammagbo/',
      github: 'https://github.com/sammagbo',
      cv: '/cv/CV_Sammy_K_Magbo.pdf',
} as const;

// Public projects in the commit trace (src/data/commit-trace.json); constants.test.ts keeps the two in step.
export const PUBLIC_PROJECTS = 12;

// ── Experience ──
// Language-neutral data; the role and bullets of each job live in src/data/parcours.ts.

export interface Experience {
      id: JobId;
      company: string;
      location: string;
      period: string;
}

export const EXPERIENCE: Experience[] = [
      { id: 'aefe', company: 'Lycée Molière (AEFE)', location: 'Rio de Janeiro, BR', period: '09/2020 — 09/2026' },
      { id: 'sedeics', company: 'Governo do Estado do Rio de Janeiro (SEDEICS)', location: 'Rio de Janeiro, BR', period: '05/2022 — 01/2026' },
      { id: 'noceci', company: 'Noceci-Viagens', location: 'Rio de Janeiro, BR', period: '04/2022 — 08/2025' },
      { id: 'cl20', company: 'C.L. 2.0', location: 'Rio de Janeiro, BR', period: '01/2018 — 09/2020' },
      { id: 'maori', company: 'MAORI do Brasil', location: 'Rio de Janeiro, BR', period: '04/2012 — 05/2017' },
];

// ── Education ──
// Language-neutral data; the degree and note live in src/data/parcours.ts.

export interface Education {
      id: DegreeId;
      institution: string;
      period: string;
}

export const EDUCATION: Education[] = [
      { id: 'uva', institution: 'Universidade Veiga de Almeida', period: '2018 — 2025' },
      { id: 'iserj', institution: 'ISERJ', period: '2016' },
];
