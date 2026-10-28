import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import './MainLayout.css';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
      const { t } = useLanguage();
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
      const [theme, setTheme] = useState<'dark' | 'light'>('dark');

      // Same order as the sections on the page: the projects first, then the experience and the story
      const NAV_ITEMS = [
            { id: 'work', label: t.navbar.work },
            { id: 'experience', label: t.navbar.experience },
            { id: 'about', label: t.navbar.about },
            { id: 'contact', label: t.navbar.contact },
      ];

      useEffect(() => {
            const savedTheme = localStorage.getItem('magbo-theme') as 'dark' | 'light';
            if (savedTheme) {
                  setTheme(savedTheme);
                  if (savedTheme === 'light') {
                        document.documentElement.setAttribute('data-theme', 'light');
                  }
            }
      }, []);

      const toggleTheme = () => {
            setTheme(prev => {
                  const newTheme = prev === 'dark' ? 'light' : 'dark';
                  if (newTheme === 'light') {
                        document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                        document.documentElement.removeAttribute('data-theme');
                  }
                  localStorage.setItem('magbo-theme', newTheme);
                  return newTheme;
            });
      };

      // Track scroll for nav background
      useEffect(() => {
            const handleScroll = () => {
                  setIsScrolled(window.scrollY > 60);
            };
            window.addEventListener('scroll', handleScroll, { passive: true });
            return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const scrollToSection = (id: string) => {
            const element = document.getElementById(id);
            if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
            }
      };

      return (
            <div className="min-h-[100svh] flex flex-col font-body">

                  {/* ─── Fixed Top Navigation: light on dark in both themes, on the hero's side margin ─── */}
                  {/* Transparent over the hero at the top; a dark bar once scrolled, or while the mobile menu is open. */}
                  <nav className={`site-nav${isScrolled || isMobileMenuOpen ? ' site-nav--solid' : ''}`}>
                        <div className="site-nav__bar">

                              {/* Name, back to the top */}
                              <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="site-nav__name"
                              >
                                    <svg className="site-nav__mark" width="24" height="24" viewBox="4 4 112 112" aria-hidden="true" focusable="false">
                                          <circle cx="60" cy="60" r="50" fill="none" stroke="#48C3D2" strokeWidth="7" />
                                          <path d="M 38 85 Q 38 35 50 35 Q 60 35 60 60 Q 60 35 70 35 Q 82 35 82 85" fill="none" stroke="#48C3D2" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Sammy K. Magbo
                              </button>

                              {/* Desktop Nav */}
                              <div className="site-nav__links hidden md:flex">
                                    {NAV_ITEMS.map((item) => (
                                          <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className="site-nav__link"
                                          >
                                                {item.label}
                                          </button>
                                    ))}
                              </div>
                              <div className="site-nav__controls hidden md:flex">
                                    <LanguageSwitcher />
                                    <button
                                          onClick={toggleTheme}
                                          className="site-nav__icon"
                                          aria-label="Toggle Theme"
                                    >
                                          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                    </button>
                              </div>

                              {/* Mobile Menu Action Buttons */}
                              <div className="site-nav__controls flex md:hidden">
                                    <LanguageSwitcher />
                                    <button
                                          onClick={toggleTheme}
                                          className="site-nav__icon site-nav__icon--strong p-1"
                                          aria-label="Toggle Theme"
                                    >
                                          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                    </button>
                                    <button
                                          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                          className="site-nav__icon site-nav__icon--strong p-1"
                                          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                                    >
                                          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                                    </button>
                              </div>
                        </div>
                  </nav>

                  {/* ─── Mobile Fullscreen Overlay ─── */}
                  {isMobileMenuOpen && (
                        <div className="fixed inset-0 z-40 bg-dark-bg flex flex-col items-center justify-center md:hidden">
                              <div className="flex flex-col items-center gap-8">
                                    {NAV_ITEMS.map((item) => (
                                          <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className="font-display font-semibold text-dark-text text-3xl tracking-tight hover:text-dark-secondary transition-colors duration-300"
                                          >
                                                {item.label}
                                          </button>
                                    ))}
                              </div>
                        </div>
                  )}

                  {/* ─── Main Content ─── */}
                  <main className="flex-grow">
                        {children}
                  </main>
            </div>
      );
};
