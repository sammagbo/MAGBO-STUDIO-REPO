import React, { useState } from 'react';
import { Terminal, Lock, Loader2, CheckCircle2 } from 'lucide-react';

export const ContactView = () => {
      const [status, setStatus] = useState<'IDLE' | 'ENCRYPTING' | 'SENT'>('IDLE');

      const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            setStatus('ENCRYPTING');

            // Simulate encryption/sending delay
            setTimeout(() => {
                  setStatus('SENT');
            }, 2000);
      };

      return (
            <section className="py-24 px-6 bg-slate-950 flex items-center justify-center border-t border-slate-900">
                  <div className="w-full max-w-2xl">

                        <div className="mb-10 text-center">
                              <h2 className="text-3xl font-bold text-white mb-2">Initiate Secure Protocol</h2>
                              <p className="text-slate-400 font-mono text-sm">Target: MAGBO_HQ // Encryption Level: AES-256</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl relative">
                              {/* Terminal Header */}
                              <div className="bg-slate-950 border-b border-slate-800 p-3 flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                          <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                          <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                          <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                    </div>
                                    <div className="ml-4 text-xs font-mono text-slate-500 flex items-center gap-2">
                                          <Lock className="w-3 h-3" />
                                          SECURE_CHANNEL_V1.4
                                    </div>
                              </div>

                              {/* Terminal Body */}
                              <div className="p-8">
                                    {status === 'SENT' ? (
                                          <div className="flex flex-col items-center justify-center py-12 text-emerald-500 animate-in fade-in duration-500">
                                                <CheckCircle2 className="w-16 h-16 mb-6" />
                                                <h3 className="text-2xl font-bold mb-2">Protocol Initiated</h3>
                                                <p className="text-slate-400 font-mono text-center max-w-sm">
                                                      Transmission successful. Our team will decrypt your briefing and establish a secure uplink shortly.
                                                </p>
                                                <button
                                                      onClick={() => setStatus('IDLE')}
                                                      className="mt-8 text-xs text-emerald-500/50 hover:text-emerald-500 underline underline-offset-4"
                                                >
                                                      Start New Transmission
                                                </button>
                                          </div>
                                    ) : (
                                          <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="space-y-2">
                                                      <label className="text-xs font-mono text-emerald-500 uppercase tracking-wider block">Identification (Name)</label>
                                                      <input
                                                            required
                                                            type="text"
                                                            className="w-full bg-slate-950 border border-slate-700 text-slate-100 p-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono placeholder:text-slate-700"
                                                            placeholder="ENTER IDENTIFIER..."
                                                      />
                                                </div>

                                                <div className="space-y-2">
                                                      <label className="text-xs font-mono text-emerald-500 uppercase tracking-wider block">Institutional Email</label>
                                                      <input
                                                            required
                                                            type="email"
                                                            className="w-full bg-slate-950 border border-slate-700 text-slate-100 p-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono placeholder:text-slate-700"
                                                            placeholder="USER@AGENCY.GOV"
                                                      />
                                                </div>

                                                <div className="space-y-2">
                                                      <label className="text-xs font-mono text-emerald-500 uppercase tracking-wider block">Project Briefing</label>
                                                      <textarea
                                                            required
                                                            rows={5}
                                                            className="w-full bg-slate-950 border border-slate-700 text-slate-100 p-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono placeholder:text-slate-700"
                                                            placeholder="DESCRIBE MISSION OBJECTIVES AND TECHNICAL REQUIREMENTS..."
                                                      />
                                                      <div className="text-right text-xs text-slate-600 font-mono">0/2000</div>
                                                </div>

                                                <button
                                                      disabled={status === 'ENCRYPTING'}
                                                      type="submit"
                                                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-4 rounded transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                                >
                                                      {status === 'ENCRYPTING' ? (
                                                            <>
                                                                  <Loader2 className="w-5 h-5 animate-spin" />
                                                                  ENCRYPTING DATA_PACKETS...
                                                            </>
                                                      ) : (
                                                            <>
                                                                  <Terminal className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                                  INITIATE COMMUNICATION
                                                            </>
                                                      )}
                                                </button>
                                          </form>
                                    )}
                              </div>

                              {/* Terminal Footer */}
                              <div className="bg-slate-950 border-t border-slate-800 p-2 px-4 flex justify-between items-center text-[10px] font-mono text-slate-600">
                                    <span>ENCRYPTION: AES-256-GCM</span>
                                    <span className="animate-pulse text-emerald-900">• LINK ACTIVE</span>
                              </div>
                        </div>
                  </div>
            </section>
      );
};
