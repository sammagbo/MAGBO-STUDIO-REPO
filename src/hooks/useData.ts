import { PROFILE, SKILLS, SKILLS_FLAT, PROJECTS, EXPERIENCE, EDUCATION, type Project, type Experience, type Education } from '@/data/constants';

export const useProfile = () => PROFILE;
export const useSkills = () => SKILLS;
export const useSkillsFlat = () => SKILLS_FLAT;
export const useProjects = (): Project[] => PROJECTS;
export const useExperience = (): Experience[] => EXPERIENCE;
export const useEducation = (): Education[] => EDUCATION;

export type { Project, Experience, Education };
