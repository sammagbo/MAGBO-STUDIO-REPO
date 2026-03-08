import { Server, Workflow, Cpu, GitMerge } from 'lucide-react';
import type { Service, HistoryEntry } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServices = (t: Record<string, any>): Service[] => [
      {
            id: 'backend',
            title: t.expertise.list.backend.title,
            description: t.expertise.list.backend.description,
            icon: Server,
            riskLevel: 'Critical'
      },
      {
            id: 'integration',
            title: t.expertise.list.integration.title,
            description: t.expertise.list.integration.description,
            icon: Workflow,
            riskLevel: 'Medium'
      },
      {
            id: 'ai',
            title: t.expertise.list.ai.title,
            description: t.expertise.list.ai.description,
            icon: Cpu,
            riskLevel: 'High'
      },
      {
            id: 'logic',
            title: t.expertise.list.logic.title,
            description: t.expertise.list.logic.description,
            icon: GitMerge,
            riskLevel: 'High'
      }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getHistory = (t: Record<string, any>): HistoryEntry[] => [
      {
            year: t.expertise.history.stage3.year,
            event: t.expertise.history.stage3.event,
            description: t.expertise.history.stage3.description
      },
      {
            year: t.expertise.history.stage2.year,
            event: t.expertise.history.stage2.event,
            description: t.expertise.history.stage2.description
      },
      {
            year: t.expertise.history.stage1.year,
            event: t.expertise.history.stage1.event,
            description: t.expertise.history.stage1.description
      }
];
