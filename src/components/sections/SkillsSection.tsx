import React from 'react';
import { getSkillsData } from '../../data/skillsData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const skillsGroups = getSkillsData(language);

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 reveal">
          <p className="text-xs font-mono uppercase tracking-widest text-[#FFB648] mb-3">
            // {t.badge}
          </p>
          <h2 className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-[#F4F2EA] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#8E96A4] max-w-2xl leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 4 Editorial Capability Rows / Map */}
        <div className="space-y-10 md:space-y-12 pt-8 border-t border-[rgba(244,242,234,0.08)] reveal">
          {skillsGroups.map((group, idx) => (
            <div
              key={group.category}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 pb-8 border-b border-[rgba(244,242,234,0.06)]"
            >
              {/* Category & Index */}
              <div className="md:col-span-4 flex items-baseline gap-3">
                <span className="text-xs font-mono text-[#FFB648]">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-normal text-[#F4F2EA]">
                    {group.category}
                  </h3>
                  <p className="text-xs text-[#8E96A4] mt-1">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Technologies in clean inline / flow typography */}
              <div className="md:col-span-8 flex flex-wrap items-center gap-2 md:pl-6 md:border-l md:border-[rgba(244,242,234,0.06)]">
                {group.skills.map((s, sIdx) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center text-xs sm:text-sm font-mono text-[#F4F2EA]/90"
                  >
                    <span className={s.isKey ? 'text-[#F4F2EA] font-medium' : 'text-[#8E96A4]'}>
                      {s.name}
                    </span>
                    {sIdx < group.skills.length - 1 && (
                      <span className="text-[#8E96A4]/40 mx-2">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
