import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
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
      const { t, language, setLanguage } = useLanguage();
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
            <LazyMotion features={domAnimation}>
                  <div className="min-h-screen flex flex-col bg-anyflow-bg font-body text-anyflow-black">
                        <CustomCursor />

                        <main className="flex-grow pb-32">
                              {children}
                        </main>

                        {/* Floating Pill Bottom Navigation Anyflow Style */}
                        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center pointer-events-none">
                              <nav className="bg-anyflow-black text-white px-2 py-2 rounded-[2rem] flex items-center shadow-2xl pointer-events-auto">

                                    {/* Menu Button */}
                                    <button
                                          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                                          className="flex items-center gap-3 px-6 py-3 rounded-full hover:bg-white/10 transition-colors font-medium text-sm border-r border-white/20 mr-2 focus-visible:ring-2 focus-visible:ring-anyflow-lime focus-visible:outline-none"
                                    >
                                          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                                          <span className="hidden sm:inline tracking-wide">{t.surface.nav_menu}</span>
                                    </button>

                                    {/* Language Selector */}
                                    <div className="relative border-r border-white/20 mr-2">
                                          <button
                                                onClick={() => setIsLangOpen(!isLangOpen)}
                                                aria-label={`Change language, current: ${language.toUpperCase()}`}
                                                className="flex items-center gap-2 px-4 py-3 rounded-full hover:bg-white/10 transition-colors text-sm font-mono focus-visible:ring-2 focus-visible:ring-anyflow-lime focus-visible:outline-none"
                                          >
                                                <Globe className="w-4 h-4 text-anyflow-lime" />
                                                <span className="text-xs tracking-wider">{language.toUpperCase()}</span>
                                          </button>

                                          <AnimatePresence>
                                                {isLangOpen && (
                                                      <m.div
                                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-anyflow-black border border-white/10 rounded-xl p-1 shadow-2xl"
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
                                                      </m.div>
                                                )}
                                          </AnimatePresence>
                                    </div>

                                    {/* Logo / Brand Name */}
                                    <div className="px-6 font-display font-bold text-2xl tracking-tighter">
                                          <span className="cursor-pointer hover:text-anyflow-lime transition-colors" onClick={() => scrollToSection('hero')}>
                                                MAGBO STUDIO
                                          </span>
                                    </div>

                                    {/* Contact CTA */}
                                    <button
                                          onClick={() => scrollToSection('contact')}
                                          aria-label="Contact us"
                                          className="bg-anyflow-lime text-anyflow-black px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform ml-4 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                                    >
                                          {t.surface.nav_contact}
                                    </button>
                              </nav>
                        </div>

                        {/* Floating Menu Overlay Anyflow Style */}
                        <AnimatePresence>
                              {isMobileMenuOpen && (
                                    <m.div
                                          initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                          animate={{ opacity: 1, scale: 1, y: 0 }}
                                          exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                          className="fixed inset-0 z-40 flex justify-center items-center pointer-events-none"
                                          role="dialog"
                                          aria-modal="true"
                                          aria-label="Navigation menu"
                                    >
                                          {/* Backdrop click closer */}
                                          <div
                                                className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                          />

                                          {/* The Menu Card */}
                                          <div className="relative z-50 bg-anyflow-black rounded-[2rem] p-8 md:p-12 w-[90%] max-w-4xl shadow-2xl flex flex-col md:flex-row gap-12 pointer-events-auto border border-white/10">

                                                {/* Navigation Links */}
                                                <div className="flex-1 flex flex-col gap-4">
                                                      <button onClick={() => scrollToSection('hero')} className="w-full py-6 px-8 rounded-2xl bg-anyflow-lime text-anyflow-black font-display font-black text-3xl md:text-5xl uppercase hover:opacity-90 transition-opacity text-center">
                                                            {t.surface.nav_home}
                                                      </button>
                                                      <button onClick={() => scrollToSection('cv')} className="w-full py-6 px-8 rounded-2xl bg-anyflow-lime text-anyflow-black font-display font-black text-3xl md:text-5xl uppercase hover:opacity-90 transition-opacity text-center">
                                                            {t.surface.nav_cv}
                                                      </button>
                                                      <button onClick={() => scrollToSection('capabilities')} className="w-full py-6 px-8 rounded-2xl bg-anyflow-lime text-anyflow-black font-display font-black text-3xl md:text-5xl uppercase hover:opacity-90 transition-opacity text-center">
                                                            {t.surface.nav_capabilities}
                                                      </button>
                                                      <button onClick={() => scrollToSection('projects')} className="w-full py-6 px-8 rounded-2xl bg-anyflow-lime text-anyflow-black font-display font-black text-3xl md:text-5xl uppercase hover:opacity-90 transition-opacity text-center">
                                                            {t.surface.nav_work}
                                                      </button>
                                                </div>

                                                {/* QR Code / Secondary Box Placeholder */}
                                                <div className="hidden md:flex flex-col items-center justify-center p-8 border border-white/10 rounded-2xl w-64">
                                                      <div className="w-full aspect-square bg-white rounded-xl mb-4 p-4 flex items-center justify-center">
                                                            {/* Placeholder for QR code */}
                                                            <div className="w-full h-full border-4 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 font-bold text-center text-sm">{t.surface.qr_placeholder}</div>
                                                      </div>
                                                      <span className="text-gray-400 font-medium text-sm">• {t.surface.connect}</span>
                                                </div>

                                          </div>
                                    </m.div>
                              )}
                        </AnimatePresence>

                        {/* Anyflow Style Footer */}
                        <footer className="bg-anyflow-black text-white relative overflow-hidden flex flex-col items-center justify-center py-32 px-6">
                              {/* Corner markers */}
                              <div className="absolute top-8 left-8 text-gray-600 font-mono">+</div>
                              <div className="absolute top-8 right-8 text-gray-600 font-mono">+</div>
                              <div className="absolute bottom-8 left-8 text-gray-600 font-mono">+</div>
                              <div className="absolute bottom-8 right-8 text-gray-600 font-mono">+</div>

                              <h2 className="font-display font-black text-[15vw] md:text-[min(20vw,200px)] leading-none text-center tracking-tighter mix-blend-difference z-10">
                                    {t.footer.innovate}
                              </h2>

                              <div className="mt-20 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl z-10 gap-8">
                                    <button aria-label="Open menu" className="flex items-center gap-2 px-6 py-3 rounded-full bg-anyflow-lime text-anyflow-black font-bold text-sm tracking-wide focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                                          <Menu className="w-4 h-4" /> {t.surface.nav_menu}
                                    </button>

                                    <span className="font-display font-bold text-2xl tracking-tighter">MAGBO STUDIO</span>

                                    <button aria-label="Contact us" className="px-6 py-3 rounded-full bg-anyflow-lime text-anyflow-black font-bold text-sm tracking-wide focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                                          {t.surface.nav_contact}
                                    </button>
                              </div>

                              {/* CLI Mode Hint */}
                              <div className="mt-12 font-mono text-[10px] text-white/20 tracking-widest hover:text-anyflow-lime/40 transition-colors duration-700 select-none">
                                    {t.footer.cli_hint}
                              </div>
                        </footer>
                  </div>
            </LazyMotion>
      );
};
