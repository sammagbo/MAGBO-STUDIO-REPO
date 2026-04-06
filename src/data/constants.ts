/**
 * MAGBO STUDIO — Centralized data constants.
 * Real profile data sourced from LinkedIn + GitHub. Clean, recruiter-friendly.
 */

export const PROFILE = {
      name: 'Sam Magbo',
      role: 'Technology & Innovation Professional',
      tagline: 'Systems Implementation · Project Management · Computer Science',
      location: 'Rio de Janeiro, BR',
      ops: 'Multisectoral · Multilingual',
      bio: 'Technology and innovation professional with solid experience across public and private sectors. I combine a Computer Science background with multilingual fluency to manage multicultural environments and deliver impactful projects — from IT governance frameworks and system modernization to full-stack platforms and IoT security solutions.',
      email: 'sammagbo@gmail.com',
      linkedin: 'https://www.linkedin.com/in/sam-magbo-02086555/',
      github: 'https://github.com/sammagbo',
} as const;

export const SKILLS = {
      frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GSAP', 'Three.js'],
      backend: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'PostgreSQL'],
      infrastructure: ['Docker', 'AWS', 'CI/CD', 'Nginx', 'Vercel'],
      other: ['IT Governance', 'Project Management', 'Strategic Planning', 'Multilingual (FR/PT/EN/ES)'],
} as const;

export const SKILLS_FLAT = [
      'React', 'TypeScript', 'Java', 'Spring Boot', 'Node.js',
      'PostgreSQL', 'Docker', 'AWS', 'Next.js', 'GSAP',
      'Tailwind CSS', 'REST APIs', 'IT Governance', 'CI/CD',
] as const;

// ── Experience ──

export interface Experience {
      id: string;
      role: string;
      company: string;
      location: string;
      period: string;
      type: 'full-time' | 'contract' | 'freelance' | 'entrepreneurship';
      bullets: string[];
}

export const EXPERIENCE: Experience[] = [
      {
            id: 'aefe',
            role: 'Vie Scolaire',
            company: 'AEFE — Agence pour l\'enseignement français à l\'étranger',
            location: 'Rio de Janeiro, BR',
            period: 'Sep 2020 — Present',
            type: 'full-time',
            bullets: [
                  'Multicultural and bilingual environment management across French educational institutions',
                  'School and academic organization, strategic communication with families',
                  'Preparation and coordination for international certifications (BAC, Brevet, PIX)',
            ],
      },
      {
            id: 'sedeics',
            role: 'IT Development Agent — Strategic Projects',
            company: 'Governo do Estado do Rio de Janeiro (SEDEICS)',
            location: 'Rio de Janeiro, BR',
            period: 'May 2022 — Jan 2026',
            type: 'contract',
            bullets: [
                  'Led the PDTIC (IT Master Plan) initiative for IT governance and system modernization',
                  'Managed cross-departmental technology infrastructure and data organization',
                  'Delivered strategic IT reports and digital transformation roadmaps',
            ],
      },
      {
            id: 'noceci',
            role: 'Managing Partner',
            company: 'Noceci-Viagens',
            location: 'Rio de Janeiro, BR',
            period: 'Apr 2022 — Aug 2025',
            type: 'entrepreneurship',
            bullets: [
                  'Administrative leadership and legal representation',
                  'Management of human resources, financial operations, and technology stack',
                  'Strategic planning and business development',
            ],
      },
      {
            id: 'cl20',
            role: 'Coordinator — Language Programs (C.L. 2.0)',
            company: 'Universidade Veiga de Almeida',
            location: 'Rio de Janeiro, BR',
            period: 'Jan 2018 — Sep 2020',
            type: 'freelance',
            bullets: [
                  'Managed multilingual education programs (English, Spanish, French, Italian)',
                  'Developed bilingual education strategies and curriculum frameworks',
                  'Coordinated academic projects linking technology and language learning',
            ],
      },
      {
            id: 'maori',
            role: 'Agent — Information Security',
            company: 'MAORI do Brasil',
            location: 'Rio de Janeiro, BR',
            period: 'Apr 2012 — May 2017',
            type: 'full-time',
            bullets: [
                  'Customer service and information security support for the DCNS project',
                  'Operational execution in high-clearance environments',
            ],
      },
];

// ── Education ──

export interface Education {
      id: string;
      degree: string;
      field: string;
      institution: string;
      period: string;
      note?: string;
}

export const EDUCATION: Education[] = [
      {
            id: 'uva',
            degree: 'B.Sc.',
            field: 'Computer Science',
            institution: 'Universidade Veiga de Almeida',
            period: '2018 — 2025',
            note: 'Project Academic Manager (2018)',
      },
      {
            id: 'iserj',
            degree: 'Technical Diploma',
            field: 'IT & Systems',
            institution: 'ISERJ',
            period: 'Completed',
      },
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
            id: 'magbo-studio',
            name: 'MAGBO Studio',
            description: 'Personal portfolio and engineering showcase. Built with React, TypeScript, GSAP animations, and Tailwind CSS on a dark premium design system.',
            stack: ['React', 'TypeScript', 'GSAP', 'Tailwind CSS'],
            github: 'https://github.com/sammagbo/MAGBO-STUDIO-REPO',
            live: 'https://sammagbo.github.io/MAGBO-STUDIO-REPO/',
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
            id: 'satisystem',
            name: 'SatiSystem',
            description: 'Systems development project (TCC) focused on process automation and institutional management. Built as a capstone project at ISERJ.',
            stack: ['PHP', 'MySQL', 'JavaScript'],
            language: 'PHP',
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
