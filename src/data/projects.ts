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
            },
            {
                  id: 'MEETING_MANAGER',
                  title: t.projects.list.meeting_manager.title,
                  description: t.projects.list.meeting_manager.description,
                  type: t.projects.list.meeting_manager.type,
                  status: 'Live',
                  stack: t.projects.list.meeting_manager.stack,
                  accessLevel: 'Public',
                  link: 'https://www.meetingmanager.site/#/login'
            },
            {
                  id: 'THE_TALK_FASHION',
                  title: t.projects.list.the_talk_fashion.title,
                  description: t.projects.list.the_talk_fashion.description,
                  type: t.projects.list.the_talk_fashion.type,
                  status: 'Live',
                  stack: t.projects.list.the_talk_fashion.stack,
                  accessLevel: 'Public',
                  link: 'https://www.thetalkfashion.com/'
            },
            {
                  id: 'SATISYSTEM',
                  title: t.projects.list.satisystem.title,
                  description: t.projects.list.satisystem.description,
                  type: t.projects.list.satisystem.type,
                  status: 'Completed',
                  stack: t.projects.list.satisystem.stack,
                  accessLevel: 'Public'
            }
      ];
};
