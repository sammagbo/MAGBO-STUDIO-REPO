import { PROFILE, SKILLS, PROJECTS, METRICS, INTEL_BRIEFINGS, type Project } from '@/data/constants';

export const useProfile = () => PROFILE;
export const useSkills = () => SKILLS;
export const useProjects = (): Project[] => PROJECTS;
export const useMetrics = () => METRICS;
export const useIntelBriefings = () => INTEL_BRIEFINGS;

export type { Project };
