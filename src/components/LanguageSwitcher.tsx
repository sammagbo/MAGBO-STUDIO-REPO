import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Language } from '@/data/translations';

const LANGUAGES: { code: Language; label: string }[] = [
      { code: 'en', label: 'EN' },
      { code: 'pt', label: 'PT' },
      { code: 'fr', label: 'FR' },
];

export const LanguageSwitcher = () => {
      const { language, setLanguage } = useLanguage();
      const [isOpen, setIsOpen] = useState(false);
      const dropdownRef = useRef<HTMLDivElement>(null);

      // Close dropdown when outside click
      useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                  if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                        setIsOpen(false);
                  }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);

      return (
            <div className="relative inline-block text-left" ref={dropdownRef}>
                  <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 text-dark-muted hover:text-mg-blue transition-colors duration-300 font-mono text-sm px-2 py-1 rounded-sm focus:outline-none"
                        aria-label="Select Language"
                  >
                        <Globe className="w-4 h-4" />
                        <span className="uppercase">{language}</span>
                  </button>

                  {isOpen && (
                        <div className="absolute right-0 mt-2 w-24 bg-dark-bg border border-dark-border shadow-lg rounded-sm overflow-hidden z-50">
                              <div className="py-1">
                                    {LANGUAGES.map((lang) => (
                                          <button
                                                key={lang.code}
                                                onClick={() => {
                                                      setLanguage(lang.code);
                                                      setIsOpen(false);
                                                }}
                                                className={`w-full text-left px-4 py-2 text-xs font-mono transition-colors ${
                                                      language === lang.code
                                                            ? 'text-mg-blue bg-dark-card'
                                                            : 'text-dark-muted hover:bg-dark-card hover:text-dark-text'
                                                }`}
                                          >
                                                {lang.label}
                                          </button>
                                    ))}
                              </div>
                        </div>
                  )}
            </div>
      );
};
