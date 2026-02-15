import { useLanguage } from '@/context/LanguageContext';
import { Database, ExternalLink, HardDrive } from 'lucide-react';

export const ArchiveView = () => {
      const { t } = useLanguage();

      const archiveData = [
            {
                  year: '2026',
                  project: t.archive.data.vote_guard,
                  tech: ['React', 'State Machine', 'WebSocket'],
                  link: '#'
            },
            {
                  year: '2025',
                  project: t.archive.data.sector_watch,
                  tech: ['IoT Integration', 'QR Logic', 'Tablet Ops'],
                  link: '#'
            },
            {
                  year: '2024',
                  project: t.archive.data.core_sync,
                  tech: ['Spring Boot', 'React', 'REST API'],
                  link: '#'
            },
            {
                  year: '2024',
                  project: t.archive.data.media_ops,
                  tech: ['Next.js', 'GSAP', 'Spotify API'],
                  link: '#'
            },
            {
                  year: '2023',
                  project: t.archive.data.java_init,
                  tech: ['Java', 'Maven', 'API Design'],
                  link: '#'
            },
      ];

      return (
            <section className="py-24 bg-slate-950 px-6 font-sans">
                  <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                              <div>
                                    <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                                          <span className="text-emerald-500">
                                                <Database className="w-6 h-6" />
                                          </span>
                                          {t.archive.title}
                                    </h2>
                                    <p className="text-slate-500 font-mono text-sm mt-2 ml-9">
                                          {t.archive.subtitle}
                                    </p>
                              </div>
                              <div className="font-mono text-xs text-slate-600 flex items-center gap-2">
                                    <HardDrive className="w-3 h-3" />
                                    <span>TOTAL_RECORDS: {archiveData.length}</span>
                              </div>
                        </div>

                        <div className="overflow-x-auto border border-slate-800 rounded bg-slate-900/20">
                              <table className="w-full text-left border-collapse">
                                    <thead>
                                          <tr className="border-b border-slate-800 text-xs font-mono text-slate-500 bg-slate-900/50 uppercase tracking-wider">
                                                <th className="p-4 w-24">{t.archive.cols.year}</th>
                                                <th className="p-4">{t.archive.cols.project}</th>
                                                <th className="p-4 hidden md:table-cell">{t.archive.cols.built_with}</th>
                                                <th className="p-4 w-24 text-right">{t.archive.cols.link}</th>
                                          </tr>
                                    </thead>
                                    <tbody className="text-sm font-mono text-slate-400">
                                          {archiveData.map((item, index) => (
                                                <tr key={index} className="border-b border-slate-800/50 hover:bg-emerald-900/10 hover:text-emerald-400 transition-colors group">
                                                      <td className="p-4 text-emerald-500/80">{item.year}</td>
                                                      <td className="p-4 font-bold text-slate-300 group-hover:text-emerald-400">{item.project}</td>
                                                      <td className="p-4 hidden md:table-cell">
                                                            <div className="flex gap-2">
                                                                  {item.tech.map(tech => (
                                                                        <span key={tech} className="text-xs bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-slate-500 group-hover:border-emerald-500/20 group-hover:text-emerald-500/70">
                                                                              {tech}
                                                                        </span>
                                                                  ))}
                                                            </div>
                                                      </td>
                                                      <td className="p-4 text-right">
                                                            <a href={item.link} className="inline-block text-slate-600 hover:text-emerald-500 transition-colors">
                                                                  <ExternalLink className="w-4 h-4" />
                                                            </a>
                                                      </td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </section>
      );
};
