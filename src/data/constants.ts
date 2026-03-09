/**
 * MAGBO STUDIO — Centralized data constants.
 * Zero hardcoded strings in components.
 */

export const PROFILE = {
      name: 'Sammy K Magbo',
      role: 'Prompt Engineer',
      location: 'São Paulo, BR',
      ops: 'Remote — Global',
      bio: 'I design and build critical software systems where security is not optional. From governance platforms to real-time monitoring, I architect solutions that operate under pressure — with zero compromise on code quality, performance, or user experience.',
} as const;

export const SKILLS = [
      'React', 'TypeScript', 'Java', 'Spring Boot', 'Node.js',
      'PostgreSQL', 'Docker', 'AWS', 'Zero-Trust', 'GSAP',
      'Next.js', 'Tailwind CSS', 'Three.js', 'REST APIs',
] as const;

export interface Project {
      id: string;
      codename: string;
      sector: string;
      description: string;
      stack: string[];
      status: string;
      link?: string;
}

export const PROJECTS: Project[] = [
      {
            id: 'vote-guard',
            codename: 'PROTOCOL: VOTE_GUARD',
            sector: 'Critical Governance',
            description: 'Electronic voting system with real-time state machine logic, strict quorum control, council mode, and automated legal PDF report generation.',
            stack: ['React', 'State Logic', 'PDF Gen', 'TypeScript'],
            status: 'DEPLOYED',
      },
      {
            id: 'sector-watch',
            codename: 'SECTOR_WATCH',
            sector: 'Physical Security',
            description: 'IoT-driven physical security monitoring platform with QR-based access control, real-time sensor dashboards, and incident reporting.',
            stack: ['IoT Logic', 'QR Code', 'React', 'Node.js'],
            status: 'ACTIVE',
      },
      {
            id: 'core-sync',
            codename: 'CORE_SYNC',
            sector: 'Fullstack Infrastructure',
            description: 'Enterprise-grade fullstack synchronization platform connecting React frontends to Spring Boot microservices through resilient REST APIs.',
            stack: ['React', 'Spring Boot', 'API Rest', 'PostgreSQL'],
            status: 'DEPLOYED',
      },
      {
            id: 'media-ops',
            codename: 'MEDIA_OPS',
            sector: 'High Performance UI',
            description: 'Cinematic media interface with GPU-accelerated animations, Spotify API integration, and real-time audio visualization.',
            stack: ['React', 'GSAP', 'Spotify API', 'WebGL'],
            status: 'ACTIVE',
      },
      {
            id: 'meeting-manager',
            codename: 'MEETING_MANAGER',
            sector: 'SaaS Application',
            description: 'Time and attendance control system. A practical solution for managing meetings and tracking schedules.',
            stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
            status: 'ACTIVE',
            link: 'https://www.meetingmanager.site/#/login',
      },
      {
            id: 'the-talk-fashion',
            codename: 'THE_TALK_FASHION',
            sector: 'Media Platform',
            description: 'A podcast website by Mijean Rochus focusing on fashion. Features a sleek design and media playback capabilities.',
            stack: ['React', 'Tailwind CSS', 'Vite', 'Frontend'],
            status: 'ACTIVE',
            link: 'https://www.thetalkfashion.com/',
      },
];

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
