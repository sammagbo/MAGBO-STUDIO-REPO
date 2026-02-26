import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomCursor } from '@/components/CustomCursor';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      const scrollToSection = (id: string) => {
            const element = document.getElementById(id);
            if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
            }
      };

      return (
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
                                    className="flex items-center gap-3 px-6 py-3 rounded-full hover:bg-white/10 transition-colors font-medium text-sm border-r border-white/20 mr-4"
                              >
                                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                                    <span className="hidden sm:inline tracking-wide">Menu</span>
                              </button>

                              {/* Logo / Brand Name */}
                              <div className="px-6 font-display font-bold text-2xl tracking-tighter">
                                    <span className="cursor-pointer hover:text-anyflow-lime transition-colors" onClick={() => scrollToSection('hero')}>
                                          MAGBO STUDIO
                                    </span>
                              </div>

                              {/* Contact CTA */}
                              <button
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-anyflow-lime text-anyflow-black px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform ml-4"
                              >
                                    Contact Us
                              </button>
                        </nav>
                  </div>

                  {/* Floating Menu Overlay Anyflow Style */}
                  <AnimatePresence>
                        {isMobileMenuOpen && (
                              <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    className="fixed inset-0 z-40 flex justify-center items-center pointer-events-none"
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
                                                      Home
                                                </button>
                                                <button onClick={() => scrollToSection('cv')} className="w-full py-6 px-8 rounded-2xl bg-anyflow-lime text-anyflow-black font-display font-black text-3xl md:text-5xl uppercase hover:opacity-90 transition-opacity text-center">
                                                      My CV
                                                </button>
                                                <button onClick={() => scrollToSection('capabilities')} className="w-full py-6 px-8 rounded-2xl bg-anyflow-lime text-anyflow-black font-display font-black text-3xl md:text-5xl uppercase hover:opacity-90 transition-opacity text-center">
                                                      Capabilities
                                                </button>
                                                <button onClick={() => scrollToSection('projects')} className="w-full py-6 px-8 rounded-2xl bg-anyflow-lime text-anyflow-black font-display font-black text-3xl md:text-5xl uppercase hover:opacity-90 transition-opacity text-center">
                                                      Work
                                                </button>
                                          </div>

                                          {/* QR Code / Secondary Box Placeholder */}
                                          <div className="hidden md:flex flex-col items-center justify-center p-8 border border-white/10 rounded-2xl w-64">
                                                <div className="w-full aspect-square bg-white rounded-xl mb-4 p-4 flex items-center justify-center">
                                                      {/* Placeholder for QR code */}
                                                      <div className="w-full h-full border-4 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 font-bold text-center text-sm">QR Code Space</div>
                                                </div>
                                                <span className="text-gray-400 font-medium text-sm">• Connect</span>
                                          </div>

                                    </div>
                              </motion.div>
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
                              INNOVATE ALWAYS
                        </h2>

                        <div className="mt-20 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl z-10 gap-8">
                              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-anyflow-lime text-anyflow-black font-bold text-sm tracking-wide">
                                    <Menu className="w-4 h-4" /> Menu
                              </button>

                              <span className="font-display font-bold text-2xl tracking-tighter">MAGBO STUDIO</span>

                              <button className="px-6 py-3 rounded-full bg-anyflow-lime text-anyflow-black font-bold text-sm tracking-wide">
                                    Contact Us
                              </button>
                        </div>
                  </footer>
            </div>
      );
};
