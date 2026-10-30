import React from 'react';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';

export const EngineeringSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].engineering;
  const isVi = language === 'vi';

  return (
    <section id="engineering" className="py-24 md:py-32 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 reveal">
          <p className="text-xs font-mono uppercase tracking-widest text-[#FFB648] mb-3">
            {isVi ? '// Phương Châm Kỹ Thuật' : '// Engineering Approach'}
          </p>
          <h2 className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-[#F4F2EA] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#8E96A4] max-w-2xl leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Numbered Editorial Principles (Zero Card Bloat) */}
        <div className="space-y-12 md:space-y-16 border-t border-[rgba(244,242,234,0.08)] pt-10 reveal">
          {t.principles.map((p, idx) => (
            <div
              key={p.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-10 border-b border-[rgba(244,242,234,0.06)]"
            >
              <div className="md:col-span-2 text-xs font-mono text-[#FFB648]">
                0{idx + 1} / {t.ruleTags[idx] || 'PRINCIPLE'}
              </div>

              <div className="md:col-span-5">
                <h3 className="text-xl sm:text-2xl font-normal text-[#F4F2EA] mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-[#8E96A4] leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="md:col-span-5 md:pl-6 md:border-l md:border-[rgba(244,242,234,0.06)] flex flex-col justify-center">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFB648] mb-1">
                  {isVi ? 'Thực chứng tại dự án:' : 'Production Reality:'}
                </span>
                <p className="text-xs sm:text-sm text-[#F4F2EA]/90 leading-relaxed font-mono">
                  {p.example}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Editorial Quote Banner */}
        <div className="mt-16 pt-8 border-t border-[rgba(244,242,234,0.08)] flex flex-col md:flex-row items-baseline justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <blockquote className="font-display italic text-xl sm:text-2xl text-[#F4F2EA] leading-relaxed">
              {t.quote}
            </blockquote>
            <p className="text-xs font-mono text-[#8E96A4] mt-2">
              {t.subquote}
            </p>
          </div>

          <div className="text-xs font-mono text-[#8E96A4] shrink-0">
            // Flutter · iOS Swift · Android Kotlin
          </div>
        </div>

      </div>
    </section>
  );
};
