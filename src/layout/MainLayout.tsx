import React, { useState } from 'react';
import { Shield, Terminal, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/data/translations';
import { motion, AnimatePresence } from 'framer-motion';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
      const { t, language, setLanguage } = useLanguage();
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      const handleLangChange = (lang: string) => {
            setLanguage(lang as Language);
      };

      const scrollToSection = (id: string) => {
            const element = document.getElementById(id);
            if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
            }
      };

      return (
            <div className="min-h-screen flex flex-col bg-slate-950 font-sans text-slate-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">

                  {/* Navbar with Glassmorphism */}
                  <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
                        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                              <div className="flex items-center gap-2 text-emerald-500">
                                    <Shield className="w-6 h-6" />
                                    <span className="font-mono font-bold tracking-tighter text-slate-100">MAGBO STUDIO</span>
                              </div>

                              <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                                    <span onClick={() => scrollToSection('projects')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase">{t.nav.projects}</span>
                                    <span onClick={() => scrollToSection('labs')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase">{t.nav.labs}</span>
                                    <span onClick={() => scrollToSection('expertise')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase">{t.nav.expertise}</span>
                                    <span onClick={() => scrollToSection('tech-radar')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase">{t.nav.tech_radar}</span>
                                    <span onClick={() => scrollToSection('status')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase">{t.nav.status}</span>
                                    <span onClick={() => scrollToSection('intel')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase">{t.nav.intel}</span>
                                    <span onClick={() => scrollToSection('archive')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase">{t.nav.archive}</span>
                                    <span onClick={() => scrollToSection('contact')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase">{t.nav.contact}</span>
                              </div>

                              <div className="flex items-center gap-6">
                                    {/* Language Selector (Desktop) */}
                                    <div className="hidden md:flex items-center gap-3 text-xs font-mono text-slate-500 border-r border-slate-800 pr-6">
                                          <button
                                                onClick={() => handleLangChange('en')}
                                                className={`hover:text-emerald-500 transition-colors ${language === 'en' ? 'text-emerald-500 font-bold' : ''}`}
                                          >
                                                EN
                                          </button>
                                          <span>|</span>
                                          <button
                                                onClick={() => handleLangChange('pt')}
                                                className={`hover:text-emerald-500 transition-colors ${language === 'pt' ? 'text-emerald-500 font-bold' : ''}`}
                                          >
                                                PT
                                          </button>
                                          <span>|</span>
                                          <button
                                                onClick={() => handleLangChange('es')}
                                                className={`hover:text-emerald-500 transition-colors ${language === 'es' ? 'text-emerald-500 font-bold' : ''}`}
                                          >
                                                ES
                                          </button>
                                          <span>|</span>
                                          <button
                                                onClick={() => handleLangChange('fr')}
                                                className={`hover:text-emerald-500 transition-colors ${language === 'fr' ? 'text-emerald-500 font-bold' : ''}`}
                                          >
                                                FR
                                          </button>
                                    </div>

                                    <div className="hidden md:flex items-center gap-2">
                                          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                          <span className="text-xs font-mono text-emerald-500 tracking-wider">ONLINE</span>
                                    </div>

                                    {/* Mobile Menu Button */}
                                    <button
                                          className="md:hidden text-slate-400 hover:text-emerald-500 transition-colors"
                                          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    >
                                          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                    </button>
                              </div>
                        </div>
                  </nav>

                  {/* Mobile Menu Overlay */}
                  <AnimatePresence>
                        {isMobileMenuOpen && (
                              <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col"
                              >
                                    <div className="flex flex-col gap-6 text-xl font-medium text-slate-400">
                                          <span onClick={() => scrollToSection('projects')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase border-b border-slate-800 pb-2">{t.nav.projects}</span>
                                          <span onClick={() => scrollToSection('labs')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase border-b border-slate-800 pb-2">{t.nav.labs}</span>
                                          <span onClick={() => scrollToSection('expertise')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase border-b border-slate-800 pb-2">{t.nav.expertise}</span>
                                          <span onClick={() => scrollToSection('tech-radar')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase border-b border-slate-800 pb-2">{t.nav.tech_radar}</span>
                                          <span onClick={() => scrollToSection('status')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase border-b border-slate-800 pb-2">{t.nav.status}</span>
                                          <span onClick={() => scrollToSection('intel')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase border-b border-slate-800 pb-2">{t.nav.intel}</span>
                                          <span onClick={() => scrollToSection('archive')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase border-b border-slate-800 pb-2">{t.nav.archive}</span>
                                          <span onClick={() => scrollToSection('contact')} className="hover:text-emerald-500 cursor-pointer transition-colors uppercase border-b border-slate-800 pb-2">{t.nav.contact}</span>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-slate-800">
                                          <div className="flex items-center gap-6 justify-center text-sm font-mono text-slate-500">
                                                <button
                                                      onClick={() => handleLangChange('en')}
                                                      className={`hover:text-emerald-500 transition-colors ${language === 'en' ? 'text-emerald-500 font-bold scale-110' : ''}`}
                                                >
                                                      EN
                                                </button>
                                                <button
                                                      onClick={() => handleLangChange('pt')}
                                                      className={`hover:text-emerald-500 transition-colors ${language === 'pt' ? 'text-emerald-500 font-bold scale-110' : ''}`}
                                                >
                                                      PT
                                                </button>
                                                <button
                                                      onClick={() => handleLangChange('es')}
                                                      className={`hover:text-emerald-500 transition-colors ${language === 'es' ? 'text-emerald-500 font-bold scale-110' : ''}`}
                                                >
                                                      ES
                                                </button>
                                                <button
                                                      onClick={() => handleLangChange('fr')}
                                                      className={`hover:text-emerald-500 transition-colors ${language === 'fr' ? 'text-emerald-500 font-bold scale-110' : ''}`}
                                                >
                                                      FR
                                                </button>
                                          </div>

                                          <div className="flex items-center justify-center gap-2 mt-8">
                                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                                <span className="text-xs font-mono text-emerald-500 tracking-wider">ONLINE</span>
                                          </div>
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>

                  {/* Main Content Area */}
                  <main className="flex-grow pt-16">
                        {children}
                  </main>

                  {/* Technical Footer */}
                  <footer className="border-t border-slate-800 bg-slate-950 py-12">
                        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                              <div className="col-span-2">
                                    <div className="flex items-center gap-2 mb-4 text-emerald-500">
                                          <Terminal className="w-5 h-5" />
                                          <span className="font-bold font-mono text-slate-100">{t.footer.kernel_version}</span>
                                    </div>
                                    <p className="text-slate-500 text-sm max-w-sm">
                                          {t.footer.tagline}
                                    </p>
                              </div>

                              <div>
                                    <h3 className="font-mono text-slate-100 mb-4 opacity-100">{t.footer.locations_title}</h3>
                                    <ul className="space-y-2 text-sm text-slate-500">
                                          <li>{t.footer.location_hq}</li>
                                          <li>{t.footer.location_remote}</li>
                                    </ul>
                              </div>

                              <div>
                                    <h3 className="font-mono text-slate-100 mb-4 opacity-100">{t.footer.connect_title}</h3>
                                    <div className="flex gap-4">
                                          <a href="https://github.com/magboostudio" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-500 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 6 2 7.8 2 13-1.6 3.3-6.9 8.3-8.8 8.3-1.9 0-3.3-1.1-4.8 3.3-4.8 0-2.4 1 5-2 5.5-2.5 1-4.8 0-7.2.4-7.2 2 0 1.9 2-2 3.8-2 3.8 0 0 0 4 7 4 2 2 0 0 0-2-3.8 2 0 0 0 2 0Z" /><path d="M9 18c-4.5 1.46-5-2.5-5-2.5" /></svg>
                                          </a>
                                          <a href="https://linkedin.com/company/magboostudio" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-500 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                          </a>
                                    </div>
                              </div>

                              <div>
                                    <h3 className="font-mono text-slate-100 mb-4 opacity-100">{t.footer.legal_title}</h3>
                                    <ul className="space-y-2 text-sm text-slate-500">
                                          <li>{t.footer.legal_privacy}</li>
                                          <li>{t.footer.legal_terms}</li>
                                    </ul>
                              </div>
                        </div>
                        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-900 flex justify-between items-center text-xs text-slate-600 font-mono">
                              <span>{t.footer.copyright}</span>
                              <span>{t.footer.secure_connection}</span>
                        </div>
                  </footer>
            </div>
      );
};
