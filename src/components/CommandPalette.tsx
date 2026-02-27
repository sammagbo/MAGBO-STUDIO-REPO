import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, Monitor, Terminal, FileText, LifeBuoy, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const CommandPalette = () => {
      const { t } = useLanguage();
      const [open, setOpen] = useState(false);

      // Toggle with CMD+K or CTRL+K
      useEffect(() => {
            const down = (e: KeyboardEvent) => {
                  if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                        e.preventDefault();
                        setOpen((open) => !open);
                  }
            };
            document.addEventListener('keydown', down);
            return () => document.removeEventListener('keydown', down);
      }, []);

      return (
            <>
                  {/* Trigger Button handled externally or hidden visually if just keyboard */}

                  <Command.Dialog
                        open={open}
                        onOpenChange={setOpen}
                        label="Global Command Menu"
                        className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm transition-all animate-in fade-in duration-200"
                  >
                        <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                              <div className="flex items-center border-b border-slate-800 px-3">
                                    <Search className="w-5 h-5 text-slate-500 mr-2" />
                                    <Command.Input
                                          placeholder={t.commands.placeholder}
                                          className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 text-slate-100 font-mono"
                                    />
                                    <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                                          <span className="text-xs">⌘</span>K
                                    </div>
                              </div>

                              <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
                                    <Command.Empty className="py-6 text-center text-sm text-slate-500 font-mono">
                                          {t.commands.no_results}
                                    </Command.Empty>

                                    <Command.Group heading={t.commands.nav_group} className="px-2 text-xs font-mono text-slate-500 mb-2">
                                          <Command.Item
                                                onSelect={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); }}
                                                className="flex items-center gap-2 px-2 py-2 rounded cursor-pointer text-slate-300 aria-selected:bg-emerald-500/10 aria-selected:text-emerald-500 transition-colors"
                                          >
                                                <Monitor className="w-4 h-4" />
                                                <span>{t.commands.go_projects}</span>
                                          </Command.Item>
                                          <Command.Item
                                                onSelect={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); }}
                                                className="flex items-center gap-2 px-2 py-2 rounded cursor-pointer text-slate-300 aria-selected:bg-emerald-500/10 aria-selected:text-emerald-500 transition-colors"
                                          >
                                                <Terminal className="w-4 h-4" />
                                                <span>{t.commands.initiate_contact}</span>
                                          </Command.Item>
                                    </Command.Group>

                                    <Command.Separator className="h-px bg-slate-800 my-1 mx-2" />

                                    <Command.Group heading={t.commands.system_group} className="px-2 text-xs font-mono text-slate-500 mb-2 mt-2">
                                          <Command.Item
                                                onSelect={() => { alert('Downloading CV...'); setOpen(false); }}
                                                className="flex items-center gap-2 px-2 py-2 rounded cursor-pointer text-slate-300 aria-selected:bg-emerald-500/10 aria-selected:text-emerald-500 transition-colors"
                                          >
                                                <FileText className="w-4 h-4" />
                                                <span>{t.commands.download_cv}</span>
                                          </Command.Item>
                                          <Command.Item
                                                onSelect={() => { alert('High Contrast Mode Toggled'); setOpen(false); }}
                                                className="flex items-center gap-2 px-2 py-2 rounded cursor-pointer text-slate-300 aria-selected:bg-emerald-500/10 aria-selected:text-emerald-500 transition-colors"
                                          >
                                                <Zap className="w-4 h-4" />
                                                <span>{t.commands.toggle_contrast}</span>
                                          </Command.Item>
                                          <Command.Item
                                                onSelect={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); }}
                                                className="flex items-center gap-2 px-2 py-2 rounded cursor-pointer text-slate-300 aria-selected:bg-emerald-500/10 aria-selected:text-emerald-500 transition-colors"
                                          >
                                                <LifeBuoy className="w-4 h-4" />
                                                <span>{t.commands.contact_support}</span>
                                          </Command.Item>
                                    </Command.Group>
                              </Command.List>
                        </div>
                  </Command.Dialog>
            </>
      );
};
