import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, Monitor, Terminal, FileText, LifeBuoy, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const CommandPalette = () => {
      const { t } = useLanguage();
      const [open, setOpen] = useState(false);

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

      const itemClass = "flex items-center gap-2 px-3 py-2.5 cursor-pointer text-core-text font-mono text-sm aria-selected:bg-anyflow-lime/10 aria-selected:text-anyflow-lime transition-colors";

      return (
            <>
                  <button
                        onClick={() => setOpen(true)}
                        className="fixed bottom-6 right-6 z-[45] bg-anyflow-lime text-black font-mono text-[10px] md:text-xs px-3 py-2 border border-core-border hover:bg-[#d0fe99] transition-colors flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)]"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)' }}
                        aria-label="Open Command Palette"
                  >
                        <Search className="w-3 h-3" />
                        <span>[ CMD + K ]</span>
                  </button>

                  <Command.Dialog
                        open={open}
                        onOpenChange={setOpen}
                        label="Global Command Menu"
                        className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm transition-all animate-in fade-in duration-200"
                  >
                        <div className="w-full max-w-lg bg-core-surface border border-core-border shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 bevel-cut">
                              <div className="flex items-center border-b border-core-border px-3">
                                    <Search className="w-5 h-5 text-core-dim mr-2" />
                                    <Command.Input
                                          placeholder={t.commands.placeholder}
                                          className="flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-core-dim disabled:cursor-not-allowed disabled:opacity-50 text-core-text font-mono"
                                    />
                                    <div className="flex items-center gap-1 text-[10px] font-mono text-core-dim bg-core-bg px-2 py-1 border border-core-border">
                                          <span className="text-xs">⌘</span>K
                                    </div>
                              </div>

                              <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
                                    <Command.Empty className="py-6 text-center text-sm text-core-dim font-mono">
                                          {t.commands.no_results}
                                    </Command.Empty>

                                    <Command.Group heading={t.commands.nav_group} className="px-2 text-xs font-mono text-core-dim mb-2">
                                          <Command.Item
                                                onSelect={() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); }}
                                                className={itemClass}
                                          >
                                                <Monitor className="w-4 h-4" />
                                                <span>{t.commands.go_projects}</span>
                                          </Command.Item>
                                          <Command.Item
                                                onSelect={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); }}
                                                className={itemClass}
                                          >
                                                <Terminal className="w-4 h-4" />
                                                <span>{t.commands.initiate_contact}</span>
                                          </Command.Item>
                                    </Command.Group>

                                    <Command.Separator className="h-px bg-core-border my-1 mx-2" />

                                    <Command.Group heading={t.commands.system_group} className="px-2 text-xs font-mono text-core-dim mb-2 mt-2">
                                          <Command.Item
                                                onSelect={() => { alert('Downloading CV...'); setOpen(false); }}
                                                className={itemClass}
                                          >
                                                <FileText className="w-4 h-4" />
                                                <span>{t.commands.download_cv}</span>
                                          </Command.Item>
                                          <Command.Item
                                                onSelect={() => { alert('High Contrast Mode Toggled'); setOpen(false); }}
                                                className={itemClass}
                                          >
                                                <Zap className="w-4 h-4" />
                                                <span>{t.commands.toggle_contrast}</span>
                                          </Command.Item>
                                          <Command.Item
                                                onSelect={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); }}
                                                className={itemClass}
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
