export interface Project {
      id: string;
      title: string;
      description: string;
      type: string;
      status: 'Production' | 'MVP' | 'Classified';
      stack: string[];
      accessLevel: 'Restricted' | 'Public' | 'Classified';
}

export const getProjects = (t: any): Project[] => {
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
                  id: 'SENTINEL_ACCESS',
                  title: t.projects.list.access_alpha.title,
                  description: t.projects.list.access_alpha.description,
                  type: t.projects.list.access_alpha.type,
                  status: 'Production',
                  stack: t.projects.list.access_alpha.stack,
                  accessLevel: 'Restricted'
            },
            {
                  id: 'DATA_SYNC',
                  title: t.projects.list.data_nexus.title,
                  description: t.projects.list.data_nexus.description,
                  type: t.projects.list.data_nexus.type,
                  status: 'Production',
                  stack: t.projects.list.data_nexus.stack,
                  accessLevel: 'Classified'
            },
            {
                  id: 'MEDIA_VECTOR',
                  title: t.projects.list.media_ops.title,
                  description: t.projects.list.media_ops.description,
                  type: t.projects.list.media_ops.type,
                  status: 'Production',
                  stack: t.projects.list.media_ops.stack,
                  accessLevel: 'Public'
            },
            {
                  id: 'JAVA_INIT',
                  title: t.projects.list.java_core.title,
                  description: t.projects.list.java_core.description,
                  type: t.projects.list.java_core.type,
                  status: 'MVP',
                  stack: t.projects.list.java_core.stack,
                  accessLevel: 'Public'
            },
            {
                  id: 'MAGBO_KERNEL',
                  title: t.projects.list.magbo_kernel.title,
                  description: t.projects.list.magbo_kernel.description,
                  type: t.projects.list.magbo_kernel.type,
                  status: 'Production',
                  stack: t.projects.list.magbo_kernel.stack,
                  accessLevel: 'Public'
            }
      ];
};
