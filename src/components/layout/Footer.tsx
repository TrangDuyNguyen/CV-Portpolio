import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
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
    <footer className="border-t border-slate-300/70 dark:border-slate-800 bg-[#E8ECF2] dark:bg-[#0B1120] text-slate-600 dark:text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-300/60 dark:border-slate-800 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="font-bold text-slate-800 dark:text-white text-lg">
                {profile.name}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-lg bg-[#E8ECF2] dark:bg-[#151F32] text-slate-700 dark:text-slate-300 font-mono shadow-[inset_1.5px_1.5px_3px_#c5d1e2,inset_-1.5px_-1.5px_3px_#ffffff] dark:shadow-[inset_1.5px_1.5px_3px_#050811,inset_-1.5px_-1.5px_3px_#1A283E] border border-white/60 dark:border-slate-700/60">
                {profile.roleTitle}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto md:mx-0">
              {t.roleDesc}
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 flex-wrap">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl bg-[#E8ECF2] dark:bg-[#151F32] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1E2D44] border border-white/80 dark:border-slate-700/60 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 rounded-xl bg-[#E8ECF2] dark:bg-[#151F32] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1E2D44] border border-white/80 dark:border-slate-700/60 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl bg-[#E8ECF2] dark:bg-[#151F32] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1E2D44] border border-white/80 dark:border-slate-700/60 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-xl bg-[#E8ECF2] dark:bg-[#151F32] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1E2D44] border border-white/80 dark:border-slate-700/60 transition-all"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 rounded-xl bg-[#E8ECF2] dark:bg-[#151F32] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1E2D44] border border-white/80 dark:border-slate-700/60 transition-all cursor-pointer ml-1"
              aria-label={t.backToTop}
              title={t.backToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3 text-center sm:text-left">
          <p>{t.rights}</p>
          <p className="flex items-center justify-center gap-1.5">
            <span>{t.craftedWith}</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>via React 18, Vite & Modern Neumorphic UI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
