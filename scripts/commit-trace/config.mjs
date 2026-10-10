// Every decision behind src/data/commit-trace.json lives in this file.
// build.mjs reads it; lib.mjs only receives what it needs as arguments.

export default {
  owner: 'sammagbo',
  output: 'src/data/commit-trace.json',

  // Commits whose author name (%an) matches one of these are left out.
  excludeAuthors: [/\[bot\]/],

  // Conventional Commits types that are kept, read without regard to case. Any other prefix gives type ''.
  // A commit with two or more parents is a merge whatever its subject says.
  types: ['feat', 'fix', 'docs', 'test', 'refactor', 'chore', 'audit', 'handoff', 'sweep', 'style', 'perf', 'ci', 'build', 'merge'],
  typeAliases: { doc: 'docs', tests: 'test' },

  // Projects in display order; a project groups one or more public repositories.
  //   names         translated names, when the name itself is not shared by every language
  //   showTime      false: dates are cut to YYYY-MM-DD, without the time of day
  //   hideMessages  a commit whose subject matches keeps its place in the trace
  //                 but loses its message and scope
  projects: [
    {
      key: 'magbo',
      name: 'MAGBO Access Control',
      repos: ['Controle-de-Acesso'],
      showTime: false,
      hideMessages: [/licen[cs]e/i, /c[aâé]m[eé]ra|deepinview/i],
    },
    { key: 'talk', name: 'The Talk', repos: ['the-talk'] },
    {
      key: 'meeting',
      name: 'MeetingManager',
      repos: ['Controle-de-tempo-e-Assistencia'],
      hideMessages: [/\bjw\b|congrega|\bminist(?:ry|[eé]rio|[eè]re)/i],
    },
    { key: 'site', name: 'sammagbo.com', repos: ['MAGBO-STUDIO-REPO'] },
    { key: 'lms', name: 'French LMS', repos: ['french-lms', 'french-lms-web'] },
    { key: 'phare', name: 'pHARe', repos: ['phare-project', 'phare-api'] },
    { key: 'carnet', name: 'Carnet de lecture', repos: ['ccc_cdi'] },
    { key: 'cdi', name: 'CDI Manager', repos: ['CDI'] },
    {
      key: 'profil',
      name: 'Profil GitHub',
      names: { en: 'GitHub profile', pt: 'Perfil do GitHub' },
      repos: ['sammagbo'],
    },
    { key: 'floresta', name: 'Floresta (Unity)', repos: ['Floresta_Unity'] },
    { key: 'studio', name: 'MAGBO Studio (Java)', repos: ['magbo-studio'] },
    { key: 'token', name: 'Token Lens', repos: ['token-lens'] },
  ],
};
