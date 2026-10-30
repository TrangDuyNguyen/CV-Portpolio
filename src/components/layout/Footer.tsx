import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
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

  const fullName = language === 'vi' ? 'Nguyễn Duy Trang' : 'Nguyen Duy Trang';

  return (
    <footer className="mt-20 px-3 sm:px-6 pb-6">
      {/* Curved Bone-White Editorial Base Block (inspired by richabh footer) */}
      <div className="max-w-6xl mx-auto rounded-3xl bg-[#F4F2EA] text-[#08090A] p-8 sm:p-12 shadow-2xl transition-all">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#08090A]/10">
          <div>
            <h2 className="font-display italic text-3xl sm:text-4xl text-[#08090A] tracking-tight">
              {fullName}
            </h2>
            <p className="text-xs sm:text-sm text-[#08090A]/70 font-mono mt-1">
              Mid-Level Mobile Engineer · Flutter · Native iOS & Android
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="p-2.5 rounded-full bg-[#08090A] text-[#F4F2EA] hover:bg-[#FF6417] hover:text-[#FFF4DE] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="p-2.5 rounded-full bg-[#08090A] text-[#F4F2EA] hover:bg-[#FF6417] hover:text-[#FFF4DE] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              data-cursor="pointer"
              className="p-2.5 rounded-full bg-[#08090A] text-[#F4F2EA] hover:bg-[#FF6417] hover:text-[#FFF4DE] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${profile.phone}`}
              data-cursor="pointer"
              className="p-2.5 rounded-full bg-[#08090A] text-[#F4F2EA] hover:bg-[#FF6417] hover:text-[#FFF4DE] transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              data-cursor="pointer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#08090A] text-[#F4F2EA] hover:bg-[#FF6417] hover:text-[#FFF4DE] text-xs font-mono font-medium transition-colors cursor-pointer ml-1"
              aria-label={t.backToTop}
            >
              <span>{language === 'vi' ? 'Lên đầu trang' : 'Back to top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom base metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#08090A]/60 font-mono gap-3 text-center sm:text-left">
          <p>© 2026 {fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React 18, TypeScript & Cinematic Editorial Motion</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
