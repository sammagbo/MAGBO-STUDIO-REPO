import { EXPERIENCE, EDUCATION, type Experience, type Education } from '@/data/constants';

export const useExperience = (): Experience[] => EXPERIENCE;
export const useEducation = (): Education[] => EDUCATION;

export type { Experience, Education };
