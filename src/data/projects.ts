import { Project, type TranslationProjects } from './types';

export const getProjects = (t: { projects: TranslationProjects }): Project[] => {
      return [
            {
                  id: 'VOTE_GUARD',
                  title: t.projects.list.vote_guard.title,
                  description: t.projects.list.vote_guard.description,
                  type: t.projects.list.vote_guard.type,
                  status: 'Production',
                  stack: t.projects.list.vote_guard.stack,
                  accessLevel: 'Restricted'
            },
            {
                  id: 'SECTOR_WATCH',
                  title: t.projects.list.sector_watch.title,
                  description: t.projects.list.sector_watch.description,
                  type: t.projects.list.sector_watch.type,
                  status: 'Production',
                  stack: t.projects.list.sector_watch.stack,
                  accessLevel: 'Restricted'
            },
            {
                  id: 'CORE_SYNC',
                  title: t.projects.list.core_sync.title,
                  description: t.projects.list.core_sync.description,
                  type: t.projects.list.core_sync.type,
                  status: 'Completed',
                  stack: t.projects.list.core_sync.stack,
                  accessLevel: 'Public'
            },
            {
                  id: 'MEDIA_OPS',
                  title: t.projects.list.media_ops.title,
                  description: t.projects.list.media_ops.description,
                  type: t.projects.list.media_ops.type,
                  status: 'Live',
                  stack: t.projects.list.media_ops.stack,
                  accessLevel: 'Public'
            }
      ];
};
