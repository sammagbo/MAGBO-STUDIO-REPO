/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, Language } from '@/data/translations';

interface LanguageContextType {
      language: Language;
      setLanguage: (lang: Language) => void;
      t: typeof TRANSLATIONS['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'magbo_lang';
const LANGUAGES: readonly string[] = ['en', 'pt', 'fr'];

const isLanguage = (value: string | null | undefined): value is Language =>
      value != null && LANGUAGES.includes(value);

// The visitor's own choice wins; otherwise the first browser language the site offers; otherwise English.
const initialLanguage = (): Language => {
      try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (isLanguage(saved)) return saved;
      } catch {
            // storage blocked: fall back to the browser languages
      }
      const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
      for (const tag of preferred) {
            const base = tag?.slice(0, 2).toLowerCase();
            if (isLanguage(base)) return base;
      }
      return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const [language, setLanguageState] = useState<Language>(initialLanguage);

      // Keeps <html lang> in step with the page, for screen readers and the browser.
      useEffect(() => {
            document.documentElement.lang = language;
      }, [language]);

      const setLanguage = (lang: Language) => {
            setLanguageState(lang);
            try {
                  localStorage.setItem(STORAGE_KEY, lang);
            } catch {
                  // storage blocked: the choice lasts for this visit only
            }
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
