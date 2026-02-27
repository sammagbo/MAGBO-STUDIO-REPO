import React, { useState } from 'react';
import { Terminal, Lock, Loader2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { sanitizeHTML, validateEmail } from '@/utils/security';

export const ContactView = () => {
      const { t } = useLanguage();
      const [status, setStatus] = useState<'IDLE' | 'ENCRYPTING' | 'SENT'>('IDLE');
      const [charCount, setCharCount] = useState(0);

      const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            // Sanitize all inputs before processing
            const name = sanitizeHTML(formData.get('name') as string || '');
            const email = formData.get('email') as string || '';
            const message = sanitizeHTML(formData.get('message') as string || '');

            // Validate email format
            if (!validateEmail(email)) return;
            if (!name || !message) return;

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
                              <h2 className="text-3xl font-bold text-white mb-2">{t.contact.title}</h2>
                              <p className="text-slate-400 font-mono text-sm">{t.contact.subtitle}</p>
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
                                          {t.contact.secure_channel}
                                    </div>
                              </div>

                              {/* Terminal Body */}
                              <div className="p-8">
                                    {status === 'SENT' ? (
                                          <div className="flex flex-col items-center justify-center py-12 text-emerald-500 animate-in fade-in duration-500">
                                                <CheckCircle2 className="w-16 h-16 mb-6" />
                                                <h3 className="text-2xl font-bold mb-2">{t.contact.success.title}</h3>
                                                <p className="text-slate-400 font-mono text-center max-w-sm">
                                                      {t.contact.success.message}
                                                </p>
                                                <button
                                                      onClick={() => { setStatus('IDLE'); setCharCount(0); }}
                                                      className="mt-8 text-xs text-emerald-500/50 hover:text-emerald-500 underline underline-offset-4"
                                                >
                                                      {t.contact.success.new}
                                                </button>
                                          </div>
                                    ) : (
                                          <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="space-y-2">
                                                      <label className="text-xs font-mono text-emerald-500 uppercase tracking-wider block">{t.contact.identification}</label>
                                                      <input
                                                            required
                                                            type="text"
                                                            className="w-full bg-slate-950 border border-slate-700 text-slate-100 p-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono placeholder:text-slate-700"
                                                            placeholder={t.contact.placeholders.id}
                                                      />
                                                </div>

                                                <div className="space-y-2">
                                                      <label className="text-xs font-mono text-emerald-500 uppercase tracking-wider block">{t.contact.email}</label>
                                                      <input
                                                            required
                                                            type="email"
                                                            className="w-full bg-slate-950 border border-slate-700 text-slate-100 p-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono placeholder:text-slate-700"
                                                            placeholder={t.contact.placeholders.email}
                                                      />
                                                </div>

                                                <div className="space-y-2">
                                                      <label className="text-xs font-mono text-emerald-500 uppercase tracking-wider block">{t.contact.briefing}</label>
                                                      <textarea
                                                            required
                                                            rows={5}
                                                            maxLength={2000}
                                                            onChange={(e) => setCharCount(e.target.value.length)}
                                                            className="w-full bg-slate-950 border border-slate-700 text-slate-100 p-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono placeholder:text-slate-700"
                                                            placeholder={t.contact.placeholders.briefing}
                                                      />
                                                      <div className="text-right text-xs text-slate-600 font-mono transition-colors duration-300">
                                                            <span className={charCount > 1800 ? "text-amber-500" : ""}>{charCount}</span>/2000
                                                      </div>
                                                </div>

                                                <button
                                                      disabled={status === 'ENCRYPTING'}
                                                      type="submit"
                                                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-4 rounded transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                                >
                                                      {status === 'ENCRYPTING' ? (
                                                            <>
                                                                  <Loader2 className="w-5 h-5 animate-spin" />
                                                                  {t.contact.button.encrypting}
                                                            </>
                                                      ) : (
                                                            <>
                                                                  <Terminal className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                                  {t.contact.button.initiate}
                                                            </>
                                                      )}
                                                </button>
                                          </form>
                                    )}
                              </div>

                              {/* Terminal Footer */}
                              <div className="bg-slate-950 border-t border-slate-800 p-2 px-4 flex justify-between items-center text-[10px] font-mono text-slate-600">
                                    <span>{t.contact.encryption_label}</span>
                                    <span className="animate-pulse text-emerald-900">• {t.contact.link_active}</span>
                              </div>
                        </div>
                  </div>
            </section>
      );
};
