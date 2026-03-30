import { PROFILE, SKILLS, METRICS, INTEL_BRIEFINGS } from '@/data/constants';
import type { Project } from '@/data/types';
import { useProjects as useLocalizedProjects } from './useProjects';

export const useProfile = () => PROFILE;
export const useSkills = () => SKILLS;
export const useProjects = (): Project[] => useLocalizedProjects();
export const useMetrics = () => METRICS;
export const useIntelBriefings = () => INTEL_BRIEFINGS;

export type { Project };
