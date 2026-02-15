export interface Project {
      id: string;
      title: string;
      description: string;
      type: string;
      status: 'Production' | 'Completed' | 'Live' | 'Concept' | 'Development';
      stack: string[];
      accessLevel: 'Public' | 'Restricted' | 'Confidential';
}
