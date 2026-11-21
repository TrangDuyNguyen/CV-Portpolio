import React from 'react';
import { ArrowUp } from 'lucide-react';
import { getProfileData } from '../../data/profileData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const profile = getProfileData(language);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg)]">
      <div className="swiss-frame px-5 sm:px-8 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[var(--text-primary)]">{profile.name}</span>
          <span className="text-[var(--line-strong)]">//</span>
          <span>FLUTTER · SWIFT · KOTLIN</span>
        </div>

        <div className="flex items-center gap-4">
          <span>{t.craftedWith}</span>
          <button
            type="button"
            onClick={scrollToTop}
            data-cursor="pointer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-invert)] text-[var(--text-invert)] hover:bg-[var(--accent)] hover:text-white font-bold transition-colors cursor-pointer"
            aria-label={t.backToTop}
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
