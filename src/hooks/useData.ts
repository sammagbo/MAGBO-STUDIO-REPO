import { PROJECTS, EXPERIENCE, EDUCATION, type Project, type Experience, type Education } from '@/data/constants';

export const useProjects = (): Project[] => PROJECTS;
export const useExperience = (): Experience[] => EXPERIENCE;
export const useEducation = (): Education[] => EDUCATION;

export type { Project, Experience, Education };
