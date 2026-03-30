/**
 * MAGBO STUDIO — Centralized data constants.
 * Zero hardcoded strings in components.
 */

export const PROFILE = {
      name: 'Sam Magbo',
      role: 'Technology & Innovation Professional | Systems Implementation | Computer Science',
      location: 'Rio de Janeiro, BR',
      ops: 'Remote — Global',
      bio: 'Professional with solid experience in technology, innovation, and project management, working in both public and private sectors. I integrate my background in Computer Science with practical experience in systems implementation, process modernization, and operational management.',
} as const;

export const SKILLS = [
      'React', 'TypeScript', 'Java', 'Spring Boot', 'Node.js',
      'PostgreSQL', 'Docker', 'AWS', 'Zero-Trust', 'GSAP',
      'Next.js', 'Tailwind CSS', 'Three.js', 'REST APIs',
      'Project Management', 'Strategic Planning', 'Multilingual Communication',
] as const;





export const METRICS = {
      uptime: '99.99%',
      latency: '24ms',
      deploymentsThisMonth: 47,
      securityScore: 'A+',
      lastIncident: 'None (142 days)',
} as const;

export const INTEL_BRIEFINGS = [
      {
            id: 'intel-001',
            title: 'Zero-Trust Architecture in React SPAs',
            tlp: 'TLP:WHITE' as const,
            date: '2026-02-15',
            summary: 'Implementation patterns for zero-trust auth in single-page applications using token rotation and request signing.',
      },
      {
            id: 'intel-002',
            title: 'Supply Chain Attack Vectors in npm',
            tlp: 'TLP:AMBER' as const,
            date: '2026-01-28',
            summary: 'Analysis of recent supply chain compromises targeting popular npm packages and mitigation strategies.',
      },
      {
            id: 'intel-003',
            title: 'GSAP Performance Profiling at Scale',
            tlp: 'TLP:WHITE' as const,
            date: '2026-01-10',
            summary: 'Benchmarking GPU-accelerated GSAP timelines across 500+ DOM nodes with ScrollTrigger observers.',
      },
      {
            id: 'intel-004',
            title: 'Spring Boot Hardening Checklist',
            tlp: 'TLP:AMBER' as const,
            date: '2025-12-20',
            summary: 'Production hardening guide for Spring Boot APIs covering CORS, CSRF, rate limiting, and header security.',
      },
];
