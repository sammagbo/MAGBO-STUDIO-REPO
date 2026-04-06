import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
      { id: 'about', label: 'About' },
      { id: 'work', label: 'Work' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Contact' },
];

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);

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

                  {/* ─── Fixed Top Navigation ─── */}
                  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                        isScrolled
                              ? 'glass border-b border-white/[0.06]'
                              : 'bg-transparent'
                  }`}>
                        <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 lg:px-20 xl:px-32 py-5 flex items-center justify-between">

                              {/* Logo */}
                              <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="font-display font-bold text-lg tracking-tight gradient-text"
                              >
                                    MAGBO
                              </button>

                              {/* Desktop Nav */}
                              <div className="hidden md:flex items-center gap-8">
                                    {NAV_ITEMS.map((item) => (
                                          <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className="text-dark-muted font-body text-sm hover:text-mg-blue transition-colors duration-300"
                                          >
                                                {item.label}
                                          </button>
                                    ))}
                              </div>

                              {/* Mobile Menu Button */}
                              <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="md:hidden text-white p-1"
                                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                              >
                                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                              </button>
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
                                                className="font-display font-bold text-white text-3xl tracking-tight hover:text-dark-secondary transition-colors duration-300"
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
