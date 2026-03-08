import { useState } from 'react';
import { Terminal, Lock, Send, CheckCircle2 } from 'lucide-react';
import { cn } from '@/utils/cn';
import { ScrambleText } from '@/components/ScrambleText';

export const ContactView = () => {
      const [status, setStatus] = useState<'idle' | 'encrypting' | 'sent'>('idle');

      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            if (status !== 'idle') return;

            setStatus('encrypting');

            try {
                  const form = e.target as HTMLFormElement;
                  const id = (form.elements.namedItem('id') as HTMLInputElement).value;
                  const comms = (form.elements.namedItem('comms') as HTMLInputElement).value;
                  const payload = (form.elements.namedItem('payload') as HTMLTextAreaElement).value;

                  const res = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id, comms, payload })
                  });

                  if (!res.ok) {
                        throw new Error('Transmission Failed');
                  }

                  setStatus('sent');
                  setTimeout(() => {
                        setStatus('idle');
                        form.reset();
                  }, 4000);
            } catch (error) {
                  console.error(error);
                  setStatus('idle');
                  alert('Communication link disrupted. Try again later.');
            }
      };

      return (
            <section className="relative min-h-[80svh] py-32 px-6 md:px-12 bg-core-bg text-core-text font-mono border-t border-white/5">
                  <div className="max-w-[1000px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Terminal Header */}
                        <div>
                              <div className="text-anyflow-lime text-xs tracking-widest uppercase mb-6 flex items-center gap-3">
                                    <Lock className="w-4 h-4 text-anyflow-lime" />
                                    SECURE_CHANNEL_ESTABLISHED
                              </div>
                              <h2 className="font-display font-extrabold text-[3.5rem] md:text-[5rem] leading-[1] tracking-tighter uppercase text-white mb-8">
                                    INITIATE
                                    <br />
                                    <span className="text-core-dim">PROTOCOL</span>
                              </h2>
                              <p className="text-sm text-core-dim leading-relaxed max-w-sm">
                                    All communications are end-to-end encrypted. Enter parameters below to establish a secure handshake.
                              </p>

                              <div className="mt-12 space-y-4">
                                    <div className="flex items-center gap-4 text-xs font-mono text-core-dim">
                                          <div className="w-2 h-2 rounded-full bg-anyflow-lime/50"></div>
                                          <span>RSA-4096 Key Exchange</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs font-mono text-core-dim">
                                          <div className="w-2 h-2 rounded-full bg-anyflow-lime/50"></div>
                                          <span>Zero-Knowledge Architecture</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs font-mono text-core-dim">
                                          <div className="w-2 h-2 rounded-full bg-anyflow-lime/50"></div>
                                          <span>Traffic Obfuscation Active</span>
                                    </div>
                              </div>
                        </div>

                        {/* Terminal Form */}
                        <div className="bg-core-surface border border-core-border rounded-2xl p-8 relative overflow-hidden shadow-2xl">
                              {/* Terminal top bar */}
                              <div className="flex items-center gap-2 mb-8 border-b border-core-border pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                    <div className="ml-4 text-[10px] text-core-dim tracking-widest flex items-center gap-2">
                                          <Terminal className="w-3 h-3" />
                                          root@magbo-core:~#
                                    </div>
                              </div>

                              <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                          <label htmlFor="id" className="text-xs text-core-dim tracking-widest uppercase">
                                                Entity_ID [Name]
                                          </label>
                                          <input
                                                type="text"
                                                id="id"
                                                required
                                                disabled={status !== 'idle'}
                                                className="w-full bg-transparent border-b-2 border-core-border rounded-none px-0 py-3 text-white text-sm focus:outline-none focus:bg-anyflow-lime focus:text-black focus:placeholder-black/50 focus:px-4 transition-all disabled:opacity-50"
                                                placeholder="Enter identifier..."
                                          />
                                    </div>

                                    <div className="space-y-2">
                                          <label htmlFor="comms" className="text-xs text-core-dim tracking-widest uppercase">
                                                Comms_Vector [Email]
                                          </label>
                                          <input
                                                type="email"
                                                id="comms"
                                                required
                                                disabled={status !== 'idle'}
                                                className="w-full bg-transparent border-b-2 border-core-border rounded-none px-0 py-3 text-white text-sm focus:outline-none focus:bg-anyflow-lime focus:text-black focus:placeholder-black/50 focus:px-4 transition-all disabled:opacity-50"
                                                placeholder="Enter secure comms vector..."
                                          />
                                    </div>

                                    <div className="space-y-2">
                                          <label htmlFor="payload" className="text-xs text-core-dim tracking-widest uppercase">
                                                Encrypted_Payload [Message]
                                          </label>
                                          <textarea
                                                id="payload"
                                                required
                                                maxLength={2000}
                                                disabled={status !== 'idle'}
                                                rows={4}
                                                className="w-full bg-transparent border-b-2 border-core-border rounded-none px-0 py-3 text-white text-sm focus:outline-none focus:bg-anyflow-lime focus:text-black focus:placeholder-black/50 focus:px-4 transition-all resize-none disabled:opacity-50"
                                                placeholder="Enter transmission payload..."
                                          ></textarea>
                                    </div>

                                    <button
                                          type="submit"
                                          disabled={status !== 'idle'}
                                          className={cn(
                                                'w-full py-4 text-xs font-bold tracking-widest uppercase rounded-lg flex items-center justify-center gap-3 transition-all duration-300',
                                                status === 'idle'
                                                      ? 'bg-anyflow-lime text-black hover:bg-anyflow-lime/90 hover:scale-[1.02] active:scale-95'
                                                      : status === 'encrypting'
                                                            ? 'bg-anyflow-lime/20 text-anyflow-lime border border-anyflow-lime/50 cursor-wait'
                                                            : 'bg-transparent text-anyflow-lime border border-anyflow-lime'
                                          )}
                                    >
                                          {status === 'idle' && (
                                                <>
                                                      <Send className="w-4 h-4" />
                                                      SEND_ENCRYPTED
                                                </>
                                          )}
                                          {status === 'encrypting' && (
                                                <span className="flex items-center justify-center gap-3">
                                                      <span className="w-3 h-5 bg-anyflow-lime animate-[pulse_0.2s_ease-in-out_infinite]"></span>
                                                      <ScrambleText text="ENCRYPTING_PAYLOAD..." active={true} speed={50} />
                                                </span>
                                          )}
                                          {status === 'sent' && (
                                                <>
                                                      <CheckCircle2 className="w-4 h-4" />
                                                      TRANSMISSION_COMPLETE
                                                </>
                                          )}
                                    </button>
                              </form>

                              {/* Overlay scanline effect specifically for the terminal box */}
                              <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]"></div>
                        </div>

                  </div>
            </section>
      );
};
