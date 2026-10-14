/**
 * MAGBO STUDIO — Centralized data constants.
 * Real profile data sourced from LinkedIn + GitHub. Clean, recruiter-friendly.
 */

import type { DegreeId, JobId } from '@/data/parcours';

// Shown in the contact section. The e-mail address stays off the site.
export const PROFILE = {
      name: 'Sammy K. Magbo',
      linkedin: 'https://www.linkedin.com/in/sammagbo/',
      github: 'https://github.com/sammagbo',
} as const;

// Public projects in the commit trace (src/data/commit-trace.json); constants.test.ts keeps the two in step.
export const PUBLIC_PROJECTS = 12;

export const SKILLS = {
      frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GSAP', 'Three.js'],
      backend: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'PostgreSQL'],
      infrastructure: ['Docker', 'AWS', 'CI/CD', 'Nginx', 'Vercel'],
      other: ['IT Governance', 'Project Management', 'Strategic Planning', 'Multilingual (FR/PT/EN)'],
} as const;

export const SKILLS_FLAT = [
      'Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Docker',
      'CI/CD', 'AWS', 'TypeScript', 'React', 'Next.js',
      'Node.js', 'Tailwind CSS', 'GSAP', 'IT Governance',
] as const;

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

// ── Projects ──

export interface Project {
      id: string;
      name: string;
      description: string;
      stack: string[];
      github?: string;
      live?: string;
      language: string;
}

export const PROJECTS: Project[] = [
      {
            id: 'controle-de-acesso',
            name: 'MAGBO Access Control',
            description: 'Production access control and meal-entitlement system for a French international school. Spring Boot backend integrating Hikvision face and card terminals, with an Electron desktop client. Deployed on Docker; 900+ students, 190+ automated tests.',
            stack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Docker', 'Electron'],
            github: 'https://github.com/sammagbo/Controle-de-Acesso',
            language: 'Java',
      },
      {
            id: 'magbo-studio-backend',
            name: 'Magbo Studio Backend',
            description: 'Spring Boot backend architecture for enterprise applications. Clean Architecture patterns, domain isolation, and strict persistence policies.',
            stack: ['Java', 'Spring Boot', 'Clean Arch', 'PostgreSQL'],
            github: 'https://github.com/sammagbo/magbo-studio',
            language: 'Java',
      },
      {
            id: 'french-lms',
            name: 'French LMS',
            description: 'Language learning management system for French education. Full-stack architecture with Spring Boot backend and React frontend.',
            stack: ['TypeScript', 'React', 'Spring Boot', 'Vercel'],
            github: 'https://github.com/sammagbo/french-lms-web',
            live: 'https://french-lms-cl83.vercel.app',
            language: 'TypeScript',
      },
      {
            id: 'ccc-cdi',
            name: 'CCC CDI Platform',
            description: 'Full-stack access control and management system for the CDI organizational center. TypeScript frontend with real-time state management.',
            stack: ['TypeScript', 'React', 'State Management'],
            github: 'https://github.com/sammagbo/ccc_cdi',
            language: 'TypeScript',
      },
      {
            id: 'magbo-studio',
            name: 'MAGBO Studio',
            description: 'Personal portfolio and engineering showcase. Built with React, TypeScript, GSAP animations, and Tailwind CSS on a dark premium design system.',
            stack: ['React', 'TypeScript', 'GSAP', 'Tailwind CSS'],
            github: 'https://github.com/sammagbo/MAGBO-STUDIO-REPO',
            live: 'https://www.sammagbo.com',
            language: 'TypeScript',
      },
      {
            id: 'the-talk',
            name: 'The Talk Fashion',
            description: 'A podcast platform for fashion content by Mijean Rochus. Sleek media interface with audio playback capabilities and modern design.',
            stack: ['React', 'JavaScript', 'Vite', 'Tailwind CSS'],
            github: 'https://github.com/sammagbo/the-talk',
            live: 'https://www.thetalkfashion.com/',
            language: 'JavaScript',
      },
      {
            id: 'satisystem',
            name: 'SatiSystem',
            description: 'Systems development project (TCC) focused on process automation and institutional management. Built as a capstone project at ISERJ.',
            stack: ['PHP', 'MySQL', 'JavaScript'],
            language: 'PHP',
      },
      {
            id: 'floresta-unity',
            name: 'Floresta Unity',
            description: 'Environmental simulation game built with Unity and C#. Explores ecological themes through interactive 3D experiences.',
            stack: ['C#', 'Unity', '3D', 'Game Dev'],
            github: 'https://github.com/sammagbo/Floresta_Unity',
            language: 'C#',
      },
];
