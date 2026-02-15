import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, Language } from '@/data/translations';

interface LanguageContextType {
      language: Language;
      setLanguage: (lang: Language) => void;
      t: typeof TRANSLATIONS['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const [language, setLanguageState] = useState<Language>('en');

      useEffect(() => {
            const savedLang = localStorage.getItem('magbo_lang') as Language;
            if (savedLang && ['en', 'pt', 'es'].includes(savedLang)) {
                  setLanguageState(savedLang);
            }
      }, []);

      const setLanguage = (lang: Language) => {
            setLanguageState(lang);
            localStorage.setItem('magbo_lang', lang);
      };

      const t = TRANSLATIONS[language];

      return (
            <LanguageContext.Provider value={{ language, setLanguage, t }}>
                  {children}
            </LanguageContext.Provider>
      );
};

export const useLanguage = () => {
      const context = useContext(LanguageContext);
      if (context === undefined) {
            throw new Error('useLanguage must be used within a LanguageProvider');
      }
      return context;
};
