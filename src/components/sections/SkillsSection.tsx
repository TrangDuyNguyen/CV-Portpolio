import React from 'react';
import { getSkillsData } from '../../data/skillsData';
import { useLanguage } from '../../context/LanguageContext';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const skillsGroups = getSkillsData(language);
  const isVi = language === 'vi';

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 reveal">
          <p className="text-xs font-mono uppercase tracking-widest text-[#FFB648] mb-3">
            {isVi ? '// Năng Lực Cốt Lõi' : '// Technical Capabilities'}
          </p>
          <h2 className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-[#F4F2EA] tracking-tight mb-4">
            {isVi ? 'Năng Lực Kỹ Thuật' : 'Engineering Capabilities'}
          </h2>
          <p className="text-sm sm:text-base text-[#8E96A4] max-w-2xl leading-relaxed">
            {isVi
              ? 'Tập trung vào năng lực thực chiến đã kiểm chứng qua sản phẩm thương mại, loại bỏ danh mục công nghệ hình thức.'
              : 'Focused on verified practical competencies honed through commercial production, omitting decorative keyword padding.'}
          </p>
        </div>

        {/* 3 Editorial Capability Columns (Typographic, Clean, No Card Bloat) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pt-6 border-t border-[rgba(244,242,234,0.08)] reveal">
          {skillsGroups.slice(0, 3).map((group, idx) => (
            <div key={group.category} className="space-y-6">
              <div>
                <span className="text-xs font-mono text-[#FFB648] block mb-1">
                  0{idx + 1} / CAPABILITY
                </span>
                <h3 className="text-xl font-normal text-[#F4F2EA]">
                  {group.category}
                </h3>
                <p className="text-xs text-[#8E96A4] mt-1.5 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Editorial Skill List */}
              <ul className="space-y-3 border-t border-[rgba(244,242,234,0.06)] pt-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-[rgba(244,242,234,0.04)]"
                  >
                    <span className={skill.isKey ? 'text-[#F4F2EA] font-medium' : 'text-[#8E96A4]'}>
                      {skill.name}
                    </span>
                    {skill.isKey && (
                      <span className="text-[10px] font-mono uppercase text-[#FFB648] tracking-wider">
                        Core
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Secondary Capabilities (Hardware & Release Engineering) */}
        <div className="mt-14 pt-10 border-t border-[rgba(244,242,234,0.08)] grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
          {skillsGroups.slice(3, 5).map((group, idx) => (
            <div key={group.category} className="space-y-4">
              <div className="flex items-baseline justify-between">
                <h4 className="text-sm font-mono uppercase tracking-wider text-[#F4F2EA]">
                  {group.category}
                </h4>
                <span className="text-xs font-mono text-[#8E96A4]/70">
                  0{idx + 4}
                </span>
              </div>
              <p className="text-xs text-[#8E96A4] leading-relaxed">
                {group.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs font-mono px-3 py-1 rounded-md transition-colors ${
                      skill.isKey
                        ? 'bg-[#141C2E] text-[#FFF4DE] border border-[rgba(244,242,234,0.12)]'
                        : 'bg-[#0E131F] text-[#8E96A4] border border-[rgba(244,242,234,0.04)]'
                    }`}
                  >
                    {skill.name}
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
