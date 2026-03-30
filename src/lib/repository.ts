import { TRANSLATIONS, type Language } from '@/data/translations';
import { type Project } from '@/data/types';

/**
 * ARCHITECTURAL NOTE:
 * This repository handles the merging of raw system data with localized strings.
 * It serves as a Data Access Layer (DAL) to prevent UI components from 
 * directly accessing massive translation objects or static constants.
 */

export class ProjectRepository {
  static getProjects(lang: Language): Project[] {
    const t = TRANSLATIONS[lang].projects.list;
    
    // Mapping keys from TRANSLATIONS to a standard Project interface
    // In a future evolution, this would fetch from an API/CMS.
    return Object.entries(t).map(([id, data]) => ({
      id: id.toUpperCase(),
      title: data.title,
      description: data.description,
      type: data.type,
      status: this.getStatusForProject(id),
      stack: data.stack,
      accessLevel: this.getAccessLevelForProject(id),
      link: this.getLinkForProject(id)
    }));
  }

  private static getStatusForProject(id: string): 'Production' | 'Completed' | 'Live' | 'Concept' | 'Development' {
    const statuses: Record<string, 'Production' | 'Completed' | 'Live' | 'Concept' | 'Development'> = {
      vote_guard: 'Production',
      sector_watch: 'Production',
      core_sync: 'Completed',
      media_ops: 'Live',
      meeting_manager: 'Live',
      the_talk_fashion: 'Live',
      satisystem: 'Completed'
    };
    return statuses[id] || 'Concept';
  }

  private static getAccessLevelForProject(id: string): 'Public' | 'Restricted' {
    return ['vote_guard', 'sector_watch', 'core_sync'].includes(id) 
      ? 'Restricted' 
      : 'Public';
  }

  private static getLinkForProject(id: string): string | undefined {
    const links: Record<string, string> = {
      meeting_manager: 'https://www.meetingmanager.site/#/login',
      the_talk_fashion: 'https://www.thetalkfashion.com/'
    };
    return links[id];
  }
}
