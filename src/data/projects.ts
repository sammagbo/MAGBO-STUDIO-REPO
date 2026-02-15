export interface Project {
      id: string;
      title: string;
      description: string;
      type: 'Critical Safety' | 'GovTech' | 'High Scale' | 'HealthTech';
      status: 'Production' | 'MVP' | 'Classified';
      stack: string[];
      accessLevel: 'Restricted' | 'Public' | 'Classified';
}

export const PROJECTS_DATA: Project[] = [
      {
            id: 'AEGIS-01',
            title: 'Aegis School Protocol',
            description: 'Emergency response system for educational institutions with silent alarm activation, real-time IoT lockdown integration, and law enforcement direct uplink.',
            type: 'Critical Safety',
            status: 'Production',
            stack: ['React Native', 'IoT Core', 'Real-time WebSocket', 'Offline First'],
            accessLevel: 'Restricted'
      },
      {
            id: 'GOV-SENTINEL',
            title: 'GovSentinel Dashboard',
            description: 'Transparency and audit platform for government agencies featuring blockchain-backed immutable logs and granular Role-Based Access Control (RBAC).',
            type: 'GovTech',
            status: 'Production',
            stack: ['Next.js', 'Blockchain Ledger', 'Audit Logs', 'RBAC'],
            accessLevel: 'Classified'
      },
      {
            id: 'MAGBO-CORE',
            title: 'Magbo Commerce Core',
            description: 'Headless e-commerce engine architected for extreme traffic spikes. Zero-downtime deployment architecture and distributed caching layers.',
            type: 'High Scale',
            status: 'Production',
            stack: ['Microservices', 'Redis Cluster', 'Node.js', 'ElasticSearch'],
            accessLevel: 'Restricted'
      },
      {
            id: 'MEDTRACK-SECURE',
            title: 'MedTrack Secure',
            description: 'End-to-end traceability system for controlled hospital supplies. Features HIPAA-compliant storage and military-grade encryption for patient data.',
            type: 'HealthTech',
            status: 'MVP',
            stack: ['React', 'Python/Django', 'AES-256', 'Barcode Scanning'],
            accessLevel: 'Restricted'
      }
];
