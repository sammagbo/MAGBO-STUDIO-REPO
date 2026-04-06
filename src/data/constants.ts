/**
 * MAGBO STUDIO — Centralized data constants.
 * Real project data from GitHub. Clean, recruiter-friendly.
 */

export const PROFILE = {
      name: 'Sammy K Magbo',
      role: 'Software Engineer & Security Architect',
      location: 'Rio de Janeiro, BR',
      ops: 'Remote — Global',
      bio: 'I build resilient software for critical environments. With a Computer Science background and hands-on experience in systems implementation, process modernization, and operational management across public and private sectors, I focus on crafting architectures that are as secure as they are scalable.',
      email: 'sammagbo@gmail.com',
      linkedin: 'https://www.linkedin.com/in/sam-magbo-02086555/',
      github: 'https://github.com/sammagbo',
} as const;

export const SKILLS = {
      frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GSAP', 'Three.js'],
      backend: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'PostgreSQL'],
      infrastructure: ['Docker', 'AWS', 'CI/CD', 'Nginx', 'Vercel'],
      other: ['Zero-Trust Architecture', 'Security Architecture', 'Project Management', 'Multilingual (FR/PT/EN/ES)'],
} as const;

export const SKILLS_FLAT = [
      'React', 'TypeScript', 'Java', 'Spring Boot', 'Node.js',
      'PostgreSQL', 'Docker', 'AWS', 'Next.js', 'GSAP',
      'Tailwind CSS', 'REST APIs', 'Security Architecture', 'CI/CD',
] as const;

export interface Project {
      id: string;
      name: string;
      description: string;
      stack: string[];
      github: string;
      live?: string;
      language: string;
}

export const PROJECTS: Project[] = [
      {
            id: 'magbo-studio',
            name: 'MAGBO Studio',
            description: 'Personal portfolio and engineering showcase. Built with React, TypeScript, GSAP animations, and Tailwind CSS on a dark premium design system.',
            stack: ['React', 'TypeScript', 'GSAP', 'Tailwind CSS'],
            github: 'https://github.com/sammagbo/MAGBO-STUDIO-REPO',
            language: 'TypeScript',
      },
      {
            id: 'controle-de-acesso',
            name: 'Controle de Acesso',
            description: 'IoT-driven physical security and access control system for an educational institution. Features QR-based access, sector monitoring dashboards, and real-time tracking.',
            stack: ['JavaScript', 'IoT', 'QR Code', 'Dashboard'],
            github: 'https://github.com/sammagbo/Controle-de-Acesso',
            live: 'https://sammagbo.github.io/controle-de-acesso',
            language: 'JavaScript',
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
            id: 'french-lms',
            name: 'French LMS',
            description: 'Language learning management system for French education. Full-stack architecture with Spring Boot backend and React frontend.',
            stack: ['TypeScript', 'React', 'Spring Boot', 'Vercel'],
            github: 'https://github.com/sammagbo/french-lms-web',
            live: 'https://french-lms-cl83.vercel.app',
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
            id: 'magbo-studio-backend',
            name: 'Magbo Studio Backend',
            description: 'Spring Boot backend architecture for enterprise applications. Clean Architecture patterns, domain isolation, and strict persistence policies.',
            stack: ['Java', 'Spring Boot', 'Clean Arch', 'PostgreSQL'],
            github: 'https://github.com/sammagbo/magbo-studio',
            language: 'Java',
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
