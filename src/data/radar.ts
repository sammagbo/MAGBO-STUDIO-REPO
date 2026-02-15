export type RadarQuadrant = 'adopt' | 'trial' | 'assess' | 'hold';

export interface TechItem {
      id: string;
      name: string;
      quadrant: RadarQuadrant;
      description: string;
}

export const RADAR_DATA: TechItem[] = [
      // ADOPT - Production Ready
      { id: 'react', name: 'React 18', quadrant: 'adopt', description: 'Standard library for component-based UI architecture.' },
      { id: 'ts', name: 'TypeScript', quadrant: 'adopt', description: 'Enforced type safety for critical systems.' },
      { id: 'node', name: 'Node.js', quadrant: 'adopt', description: 'Scalable backend runtime for real-time services.' },
      { id: 'go', name: 'Go (Golang)', quadrant: 'adopt', description: 'High-performance microservices and CLI tools.' },
      { id: 'tailwind', name: 'Tailwind CSS', quadrant: 'adopt', description: 'Utility-first styling for consistent design systems.' },

      // TRIAL - Beta / Pilot
      { id: 'rust', name: 'Rust', quadrant: 'trial', description: 'Evaluating for memory-safe system components.' },
      { id: 'wasm', name: 'WebAssembly', quadrant: 'trial', description: 'High-computation modules in browser environments.' },
      { id: 'astro', name: 'Astro', quadrant: 'trial', description: 'Content-focused deployments with partial hydration.' },

      // ASSESS - Research Phase
      { id: 'quantum', name: 'Quantum Encryption', quadrant: 'assess', description: 'Monitoring post-quantum cryptography standards.' },
      { id: 'homomorphic', name: 'Homomorphic Enc', quadrant: 'assess', description: 'Computation on encrypted data without decryption.' },
      { id: 'ai_agents', name: 'Autonomous Agents', quadrant: 'assess', description: 'LLM-driven system orchestration.' },

      // HOLD - Deprecated / Avoid
      { id: 'php', name: 'PHP Legacy', quadrant: 'hold', description: 'Security risks in legacy execution models.' },
      { id: 'jquery', name: 'jQuery', quadrant: 'hold', description: 'Redundant with modern DOM APIs.' },
      { id: 'soap', name: 'SOAP', quadrant: 'hold', description: 'Heavy XML payload; prefer REST/gRPC.' },
];
