import { Server, Lock, Activity } from 'lucide-react';

export const SERVICES_DATA = [
      {
            id: 'infra',
            title: 'Critical Infrastructure',
            description: 'High-Availability architecture, Disaster Recovery protocols, and Zero-Downtime deployment strategies for mission-critical operations.',
            icon: Server,
            riskLevel: 'High'
      },
      {
            id: 'frontend',
            title: 'Secure Frontend',
            description: 'Anti-Tamper UI development, Client-side security hardening, and React performance optimization for complex dashboards.',
            icon: Activity,
            riskLevel: 'Medium'
      },
      {
            id: 'cyber',
            title: 'Cybersecurity Ops',
            description: 'Threat Modeling, Penetration Testing coordination, and Implementation of defensive coding standards defined by OWASP.',
            icon: Lock,
            riskLevel: 'Critical'
      }
];

export const HISTORY_DATA = [
      {
            year: '2026',
            event: 'GLOBAL_OPS_EXPANSION',
            description: 'Extended operations to support international government contracts. Initiated "Protocol Aegis".'
      },
      {
            year: '2024-2025',
            event: 'STUDIO_FOUNDATION',
            description: 'MAGBO STUDIO established with a focus on solving high-complexity problems rejected by standard agencies.'
      },
      {
            year: 'PRE-2024',
            event: 'LEAD_ARCHITECT_ORIGIN',
            description: 'Lead Architect deployed in Big Tech & Gov Sector. Expertise forged in high-stress environments.'
      }
];
