import React from 'react';
import { Shield, Terminal } from 'lucide-react';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
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
                                    <span className="hover:text-emerald-500 cursor-pointer transition-colors">PROJECTS</span>
                                    <span className="hover:text-emerald-500 cursor-pointer transition-colors">EXPERTISE</span>
                                    <span className="hover:text-emerald-500 cursor-pointer transition-colors">CONTACT</span>
                              </div>

                              <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-xs font-mono text-emerald-500 tracking-wider">SYSTEM ONLINE</span>
                              </div>
                        </div>
                  </nav>

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
                                          <span className="font-bold font-mono text-slate-100">MAGBO_STUDIO_KERNEL_V1</span>
                                    </div>
                                    <p className="text-slate-500 text-sm max-w-sm">
                                          Elite software engineering and security architecture for critical systems.
                                          Building resilience where failure is not an option.
                                    </p>
                              </div>

                              <div>
                                    <h3 className="font-mono text-slate-100 mb-4 opacity-100">LOCATIONS</h3>
                                    <ul className="space-y-2 text-sm text-slate-500">
                                          <li>São Paulo, BR (HQ)</li>
                                          <li>Remote Ops _Global</li>
                                    </ul>
                              </div>
                              <div>
                                    <h3 className="font-mono text-slate-100 mb-4 opacity-100">LEGAL</h3>
                                    <ul className="space-y-2 text-sm text-slate-500">
                                          <li>Privacy Protocol</li>
                                          <li>Terms of Engagement</li>
                                    </ul>
                              </div>
                        </div>
                        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-900 flex justify-between items-center text-xs text-slate-600 font-mono">
                              <span>© 2026 MAGBO STUDIO. ALL RIGHTS RESERVED.</span>
                              <span>SECURE_CONNECTION_ESTABLISHED</span>
                        </div>
                  </footer>
            </div>
      );
};
