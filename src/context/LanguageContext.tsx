import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const paramLang = urlParams.get('lang');
      if (paramLang === 'vi' || paramLang === 'en') return paramLang;

      // Migrate / purge stale legacy key that previously defaulted to Vietnamese
      if (localStorage.getItem('portfolio_lang')) {
        localStorage.removeItem('portfolio_lang');
      }

      const saved = localStorage.getItem('portfolio_language');
      if (saved === 'vi' || saved === 'en') return saved;
    }
    return 'en';
  });

  const syncDocumentMetadata = (lang: Language) => {
    if (typeof document === 'undefined') return;

    document.documentElement.lang = lang;

    if (lang === 'en') {
      document.title = 'Nguyen Duy Trang — Mobile Engineer Portfolio';
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Portfolio of Nguyen Duy Trang — Mobile Engineer with 5+ years of experience in Flutter, Native iOS (Swift), and Android (Kotlin).'
        );
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', 'Nguyen Duy Trang — Mobile Engineer Portfolio');
      }

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute(
          'content',
          'Mobile Engineer with 5+ years of experience in Flutter and Native iOS/Android (Hahalolo, Finviet POS, AstroBite).'
        );
      }
    } else {
      document.title = 'Nguyễn Duy Trang — Mobile Engineer Portfolio';
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Hồ sơ năng lực của Nguyễn Duy Trang — Mobile Engineer với hơn 5 năm kinh nghiệm phát triển ứng dụng di động với Flutter, Native iOS (Swift) và Android (Kotlin).'
        );
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', 'Nguyễn Duy Trang — Mobile Engineer Portfolio');
      }

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute(
          'content',
          'Mobile Engineer với hơn 5 năm kinh nghiệm phát triển ứng dụng Flutter & Native iOS/Android (Hahalolo, Finviet POS, AstroBite).'
        );
      }
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_language', lang);
      localStorage.removeItem('portfolio_lang');
      syncDocumentMetadata(lang);
      const url = new URL(window.location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url.toString());
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  useEffect(() => {
    syncDocumentMetadata(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
