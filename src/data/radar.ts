export type RadarQuadrant = 'adopt' | 'trial' | 'assess' | 'hold';

export interface TechItem {
      id: string;
      name: string;
      quadrant: RadarQuadrant;
      description: string;
}

export const getRadarData = (t: any): TechItem[] => {
      return [
            // ADOPT - Production Ready
            { id: 'react', name: t.radar.items.react.name, quadrant: 'adopt', description: t.radar.items.react.description },
            { id: 'ts', name: t.radar.items.ts.name, quadrant: 'adopt', description: t.radar.items.ts.description },
            { id: 'node', name: t.radar.items.node.name, quadrant: 'adopt', description: t.radar.items.node.description },
            { id: 'go', name: t.radar.items.go.name, quadrant: 'adopt', description: t.radar.items.go.description },
            { id: 'tailwind', name: t.radar.items.tailwind.name, quadrant: 'adopt', description: t.radar.items.tailwind.description },

            // TRIAL - Beta / Pilot
            { id: 'rust', name: t.radar.items.rust.name, quadrant: 'trial', description: t.radar.items.rust.description },
            { id: 'wasm', name: t.radar.items.wasm.name, quadrant: 'trial', description: t.radar.items.wasm.description },
            { id: 'astro', name: t.radar.items.astro.name, quadrant: 'trial', description: t.radar.items.astro.description },

            // ASSESS - Research Phase
            { id: 'quantum', name: t.radar.items.quantum.name, quadrant: 'assess', description: t.radar.items.quantum.description },
            { id: 'homomorphic', name: t.radar.items.homomorphic.name, quadrant: 'assess', description: t.radar.items.homomorphic.description },
            { id: 'ai_agents', name: t.radar.items.ai_agents.name, quadrant: 'assess', description: t.radar.items.ai_agents.description },

            // HOLD - Deprecated / Avoid
            { id: 'php', name: t.radar.items.php.name, quadrant: 'hold', description: t.radar.items.php.description },
            { id: 'jquery', name: t.radar.items.jquery.name, quadrant: 'hold', description: t.radar.items.jquery.description },
            { id: 'soap', name: t.radar.items.soap.name, quadrant: 'hold', description: t.radar.items.soap.description },
      ];
};
