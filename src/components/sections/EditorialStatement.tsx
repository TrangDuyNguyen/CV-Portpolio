import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

export const EditorialStatement: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-24 md:py-32 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Editorial Statement */}
        <div className="max-w-4xl mb-16 md:mb-20 reveal">
          <p className="text-xs font-mono uppercase tracking-widest text-[#FFB648] mb-4">
            // {t.badge}
          </p>

          <h2 className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-[#F4F2EA] leading-[1.12] tracking-tight">
            {t.headline}
          </h2>

          <div className="mt-8 space-y-4 text-base sm:text-lg text-[#8E96A4] font-light leading-relaxed max-w-3xl" data-cursor="lens">
            <p>
              {t.p1}
            </p>
            <p>
              {t.p2}
            </p>
          </div>
        </div>

        {/* 3 Bespoke Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8 border-t border-[rgba(244,242,234,0.08)] reveal">
          
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#FFB648]">
              01
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-[#F4F2EA]">
              {t.pillar1Title}
            </h3>
            <p className="text-sm text-[#8E96A4] leading-relaxed">
              {t.pillar1Desc}
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono text-[#FFB648]">
              02
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-[#F4F2EA]">
              {t.pillar2Title}
            </h3>
            <p className="text-sm text-[#8E96A4] leading-relaxed">
              {t.pillar2Desc}
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono text-[#FFB648]">
              03
            </div>
            <h3 className="text-lg sm:text-xl font-normal text-[#F4F2EA]">
              {t.pillar3Title}
            </h3>
            <p className="text-sm text-[#8E96A4] leading-relaxed">
              {t.pillar3Desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
