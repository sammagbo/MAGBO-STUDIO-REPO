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
                        className="site-nav__lang"
                        aria-label="Select Language"
                  >
                        <Globe className="w-4 h-4" />
                        <span className="uppercase">{language}</span>
                  </button>

                  {isOpen && (
                        <div className="site-nav__lang-menu">
                              <div>
                                    {LANGUAGES.map((lang) => (
                                          <button
                                                key={lang.code}
                                                onClick={() => {
                                                      setLanguage(lang.code);
                                                      setIsOpen(false);
                                                }}
                                                className={`site-nav__lang-item${language === lang.code ? ' is-current' : ''}`}
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
