import React, { useState } from 'react';
import { Menu, X, Globe, TerminalSquare } from 'lucide-react';
import { CustomCursor } from '@/components/CustomCursor';
import { Logo } from '@/components/Logo';
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

                        {/* Top Navigation Bar - Industrial Retro-futuristic */}
                        <header className="fixed top-0 left-0 w-full z-50 border-b border-core-border bg-[#050505]/90 backdrop-blur-md">
                              <div className="max-w-[1920px] mx-auto px-6 h-16 flex items-center justify-between">
                                    
                                    {/* Left: Logo */}
                                    <button 
                                          onClick={() => scrollToSection('hero')} 
                                          className="hover:opacity-80 transition-opacity flex items-center gap-3"
                                    >
                                          <Logo />
                                          <span className="font-display font-bold text-xl tracking-widest hidden sm:block">MAGBO</span>
                                    </button>

                                    {/* Right: Actions */}
                                    <nav className="flex items-center gap-4">
                                          {/* Language Selector */}
                                          <div className="relative border-r border-core-border pr-4 hidden sm:block">
                                                <button
                                                      onClick={() => setIsLangOpen(!isLangOpen)}
                                                      className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:text-anyflow-lime transition-colors"
                                                >
                                                      <Globe className="w-4 h-4" />
                                                      <span>{language}</span>
                                                </button>

                                                {isLangOpen && (
                                                      <div className="absolute top-full mt-4 right-0 bg-[#050505] border border-core-border p-1 shadow-2xl min-w-[100px]">
                                                            {LANG_OPTIONS.map((opt) => (
                                                                  <button
                                                                        key={opt.code}
                                                                        onClick={() => { setLanguage(opt.code); setIsLangOpen(false); }}
                                                                        className={`block w-full px-4 py-2 text-xs font-mono tracking-wider text-left transition-colors ${language === opt.code
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

                                          {/* Menu Button */}
                                          <button
                                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                className="flex items-center gap-2 hover:text-anyflow-lime transition-colors font-mono text-xs uppercase tracking-widest"
                                          >
                                                <span className="hidden sm:inline">MENU</span>
                                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                                          </button>

                                          {/* Terminal CTA */}
                                          <button
                                                onClick={() => scrollToSection('contact')}
                                                className="bg-anyflow-lime text-black px-4 py-2 ml-2 font-mono font-bold text-xs tracking-widest hover:bg-[#d0fe99] active:scale-95 transition-all flex items-center gap-2"
                                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' }}
                                          >
                                                <TerminalSquare className="w-4 h-4" />
                                                <span className="hidden md:inline">INIT</span>
                                          </button>
                                    </nav>
                              </div>
                        </header>

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

                                          <div className="relative z-50 bg-[#050505] p-8 md:p-12 w-[90%] max-w-2xl shadow-[0_0_50px_rgba(187,253,106,0.1)] border border-core-border pointer-events-auto bevel-cut">
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
                                                                  className="group w-full py-4 px-6 border-b border-core-border last:border-0 hover:bg-[#09090b] flex items-center justify-between text-left transition-colors"
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

