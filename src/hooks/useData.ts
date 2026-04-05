import { PROFILE, SKILLS, SKILLS_FLAT, PROJECTS, type Project } from '@/data/constants';

export const useProfile = () => PROFILE;
export const useSkills = () => SKILLS;
export const useSkillsFlat = () => SKILLS_FLAT;
export const useProjects = (): Project[] => PROJECTS;

export type { Project };
