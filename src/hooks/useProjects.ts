import { useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectRepository } from '@/lib/repository';
import type { Project } from '@/data/types';

/**
 * Hook to access localized projects via the ProjectRepository.
 * Centralizes data fetching and localization logic.
 */
export const useProjects = (): Project[] => {
  const { language } = useLanguage();

  return useMemo(() => {
    return ProjectRepository.getProjects(language);
  }, [language]);
};
