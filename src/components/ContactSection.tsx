import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROFILE } from '@/data/constants';
import { Github, Linkedin, Mail, ArrowUpRight, Send, Check, Loader2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
      const containerRef = useRef<HTMLElement>(null);
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

      useEffect(() => {
            const ctx = gsap.context(() => {
                  gsap.from('.contact-animate', {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.12,
                        ease: 'power3.out',
                        scrollTrigger: {
                              trigger: containerRef.current,
                              start: 'top 80%',
                        },
                  });
            }, containerRef);
            return () => ctx.revert();
      }, []);

      const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            setStatus('sending');
            
            const subject = encodeURIComponent(`Portfolio Contact — ${formData.name}`);
            const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
            window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
            
            setTimeout(() => {
                  setStatus('sent');
                  setTimeout(() => {
                        setStatus('idle');
                        setFormData({ name: '', email: '', message: '' });
                  }, 3000);
            }, 1000);
      };

      return (
            <section ref={containerRef} id="contact" className="relative py-32 lg:py-40 px-6 md:px-12 lg:px-20 xl:px-32 bg-dark-bg">

                  {/* Subtle section divider glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-mg-pink/20 to-transparent" />

                  {/* Background accent glow */}
                  <div className="absolute bottom-0 right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-mg-blue/[0.03] blur-[150px] rounded-full pointer-events-none" />

                  <div className="max-w-[1200px] mx-auto w-full relative z-10">

                        {/* Section Label */}
                        <div className="contact-animate mb-4">
                              <span className="text-mg-pink font-mono text-xs tracking-[0.25em] uppercase">
                                    04 — Contact
                              </span>
                        </div>

                        {/* Big CTA */}
                        <h2 className="contact-animate font-display font-bold text-white leading-tight tracking-tight mb-6"
                              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                              Let's <span className="marker-pink">work together</span>.
                        </h2>

                        <p className="contact-animate text-dark-secondary font-body text-base lg:text-lg max-w-xl mb-12 leading-relaxed">
                              I'm open to <span className="marker-green">new opportunities</span>, freelance projects, and interesting collaborations.
                              Fill out the form or reach out directly.
                        </p>

                        {/* Two columns: Form + Sidebar */}
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 mb-16">

                              {/* Contact Form */}
                              <form onSubmit={handleSubmit} className="contact-animate space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                          <div>
                                                <label htmlFor="contact-name" className="block text-dark-muted font-mono text-xs tracking-wider uppercase mb-2">
                                                      Name
                                                </label>
                                                <input
                                                      id="contact-name"
                                                      type="text"
                                                      required
                                                      value={formData.name}
                                                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                                                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white font-body text-sm placeholder:text-dark-muted/50 focus:border-mg-blue/50 focus:outline-none focus:shadow-[0_0_20px_rgba(30,136,229,0.1)] transition-all duration-300"
                                                      placeholder="Your name"
                                                />
                                          </div>
                                          <div>
                                                <label htmlFor="contact-email" className="block text-dark-muted font-mono text-xs tracking-wider uppercase mb-2">
                                                      Email
                                                </label>
                                                <input
                                                      id="contact-email"
                                                      type="email"
                                                      required
                                                      value={formData.email}
                                                      onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                                                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white font-body text-sm placeholder:text-dark-muted/50 focus:border-mg-blue/50 focus:outline-none focus:shadow-[0_0_20px_rgba(30,136,229,0.1)] transition-all duration-300"
                                                      placeholder="your@email.com"
                                                />
                                          </div>
                                    </div>

                                    <div>
                                          <label htmlFor="contact-message" className="block text-dark-muted font-mono text-xs tracking-wider uppercase mb-2">
                                                Message
                                          </label>
                                          <textarea
                                                id="contact-message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                                                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white font-body text-sm placeholder:text-dark-muted/50 focus:border-mg-blue/50 focus:outline-none focus:shadow-[0_0_20px_rgba(30,136,229,0.1)] transition-all duration-300 resize-none"
                                                placeholder="Tell me about your project..."
                                          />
                                    </div>

                                    <button
                                          type="submit"
                                          disabled={status !== 'idle'}
                                          className={`inline-flex items-center gap-3 px-8 py-4 font-body font-medium text-sm rounded-full transition-all duration-400
                                                ${status === 'sent'
                                                      ? 'bg-mg-green/20 text-mg-green border border-mg-green/30'
                                                      : 'bg-mg-blue text-white hover:bg-mg-blue/80 hover:shadow-[0_0_30px_rgba(30,136,229,0.3)]'
                                                }
                                                disabled:opacity-60 disabled:cursor-not-allowed`}
                                    >
                                          {status === 'idle' && <><Send className="w-4 h-4" /> Send Message</>}
                                          {status === 'sending' && <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>}
                                          {status === 'sent' && <><Check className="w-4 h-4" /> Message Sent!</>}
                                    </button>
                              </form>

                              {/* Sidebar: Direct Links */}
                              <div className="contact-animate space-y-6">
                                    <div className="bento-card p-6">
                                          <h3 className="text-dark-secondary font-body text-sm font-medium uppercase tracking-wider mb-4">Or reach out directly</h3>
                                          <a href={`mailto:${PROFILE.email}`}
                                                className="flex items-center gap-3 text-mg-blue font-body text-sm hover:text-white transition-colors duration-300 mb-3 group">
                                                <Mail className="w-4 h-4" />
                                                {PROFILE.email}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                          </a>
                                    </div>

                                    <div className="bento-card p-6">
                                          <h3 className="text-dark-secondary font-body text-sm font-medium uppercase tracking-wider mb-4">Social</h3>
                                          <div className="space-y-3">
                                                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"
                                                      className="flex items-center gap-3 text-dark-muted hover:text-mg-blue transition-colors duration-300 font-body text-sm group">
                                                      <Github className="w-4 h-4" />
                                                      GitHub
                                                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto" />
                                                </a>
                                                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"
                                                      className="flex items-center gap-3 text-dark-muted hover:text-mg-blue transition-colors duration-300 font-body text-sm group">
                                                      <Linkedin className="w-4 h-4" />
                                                      LinkedIn
                                                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto" />
                                                </a>
                                          </div>
                                    </div>

                                    <div className="bento-card p-6">
                                          <h3 className="text-dark-secondary font-body text-sm font-medium uppercase tracking-wider mb-2">Location</h3>
                                          <p className="text-dark-muted font-body text-sm">{PROFILE.location}</p>
                                          <p className="text-dark-muted font-body text-xs mt-1">{PROFILE.ops}</p>
                                    </div>
                              </div>
                        </div>

                        {/* Footer */}
                        <div className="contact-animate pt-12 border-t border-white/[0.06]">
                              <p className="text-dark-muted font-mono text-xs tracking-wide text-center">
                                    © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
                              </p>
                        </div>
                  </div>
            </section>
      );
};
