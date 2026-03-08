import React, { useState } from 'react';
import { Menu, X, Globe, TerminalSquare } from 'lucide-react';
import { CustomCursor } from '@/components/CustomCursor';
import { useLanguage } from '@/context/LanguageContext';
import type { Language } from '@/data/translations';

const LANG_OPTIONS: { code: Language; label: string }[] = [
      { code: 'en', label: 'EN' },
      { code: 'pt', label: 'PT' },
      { code: 'es', label: 'ES' },
      { code: 'fr', label: 'FR' },
];

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
      const { language, setLanguage } = useLanguage();
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [isLangOpen, setIsLangOpen] = useState(false);

      const scrollToSection = (id: string) => {
            const element = document.getElementById(id);
            if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
            }
      };

      return (
            <>
                  {/* We don't set a global background color here because sections will alternate between light and dark themes. */}
                  <div className="min-h-[100svh] flex flex-col font-body selection:bg-anyflow-lime selection:text-black">
                        <CustomCursor />

                        <main className="flex-grow pb-32">
                              {children}
                        </main>

                        {/* Floating Pill Bottom Navigation */}
                        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center pointer-events-none">
                              <nav className="bg-anyflow-black text-white px-2 py-2 rounded-full flex items-center shadow-2xl shadow-anyflow-lime/5 pointer-events-auto border border-white/5">

                                    {/* Menu Button */}
                                    <button
                                          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                                          className="flex items-center gap-3 px-5 py-3 rounded-full hover:bg-white/10 transition-colors font-mono text-xs uppercase tracking-widest border-r border-white/10 mr-2"
                                    >
                                          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                                          <span className="hidden sm:inline">Menu</span>
                                    </button>

                                    {/* Language Selector */}
                                    <div className="relative border-r border-white/10 mr-2">
                                          <button
                                                onClick={() => setIsLangOpen(!isLangOpen)}
                                                className="flex items-center gap-2 px-4 py-3 rounded-full hover:bg-white/10 transition-colors text-xs font-mono uppercase tracking-widest"
                                          >
                                                <Globe className="w-4 h-4 text-anyflow-lime" />
                                                <span>{language}</span>
                                          </button>

                                          {isLangOpen && (
                                                <div
                                                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-core-card border border-core-border rounded-xl p-1 shadow-2xl"
                                                >
                                                      {LANG_OPTIONS.map((opt) => (
                                                            <button
                                                                  key={opt.code}
                                                                  onClick={() => { setLanguage(opt.code); setIsLangOpen(false); }}
                                                                  className={`block w-full px-4 py-2 text-xs font-mono tracking-wider rounded-lg transition-colors ${language === opt.code
                                                                        ? 'bg-anyflow-lime text-black font-bold'
                                                                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                                                                        }`}
                                                            >
                                                                  {opt.label}
                                                            </button>
                                                      ))}
                                                </div>
                                          )}
                                    </div>

                                    {/* Logo */}
                                    <div className="px-6 font-display font-bold text-xl tracking-tighter">
                                          <button onClick={() => scrollToSection('hero')} className="hover:text-anyflow-lime transition-colors">
                                                MAGBO
                                          </button>
                                    </div>

                                    {/* Terminal Contact CTA */}
                                    <button
                                          onClick={() => scrollToSection('contact')}
                                          className="bg-anyflow-lime text-black px-6 py-3 rounded-full font-mono font-bold text-xs tracking-widest hover:scale-105 active:scale-95 transition-transform ml-2 flex items-center gap-2"
                                    >
                                          <TerminalSquare className="w-4 h-4" />
                                          <span className="hidden sm:inline">INIT_CONTACT</span>
                                    </button>
                              </nav>
                        </div>

                        {/* Minimalist Overlay Menu */}
                        {
                              isMobileMenuOpen && (
                                    <div
                                          className="fixed inset-0 z-40 flex justify-center items-center pointer-events-none"
                                    >
                                          <div
                                                className="absolute inset-0 bg-black/40 backdrop-blur-md pointer-events-auto"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                          />

                                          <div className="relative z-50 bg-core-bg rounded-[2rem] p-8 md:p-12 w-[90%] max-w-2xl shadow-2xl border border-core-border pointer-events-auto">
                                                <div className="flex flex-col gap-2">
                                                      {[
                                                            { id: 'hero', label: '001 THE SURFACE' },
                                                            { id: 'cv', label: '002 PROFILE_DATA' },
                                                            { id: 'projects', label: '003 CASE_LOGS' },
                                                            { id: 'core', label: '004 THE CORE' },
                                                            { id: 'contact', label: '005 SECURE_COMMS' }
                                                      ].map((item) => (
                                                            <button
                                                                  key={item.id}
                                                                  onClick={() => scrollToSection(item.id)}
                                                                  className="group w-full py-4 px-6 rounded-xl hover:bg-core-surface flex items-center justify-between text-left transition-colors"
                                                            >
                                                                  <span className="font-display font-bold text-2xl text-white tracking-tighter uppercase group-hover:text-anyflow-lime transition-colors">
                                                                        {item.label.split(' ')[1]}
                                                                  </span>
                                                                  <span className="font-mono text-xs text-core-dim group-hover:text-white transition-colors">
                                                                        {item.label.split(' ')[0]}
                                                                  </span>
                                                            </button>
                                                      ))}
                                                </div>
                                          </div>
                                    </div>
                              )
                        }

                        {/* Footer hidden — we end with ContactView now */}
                  </div>
            </>
      );
};

