import React, { useState } from 'react';
import { Calendar, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { getCareerData } from '../../data/careerData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';

export const CareerSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].career;
  const careerItems = getCareerData(language);
  const isVi = language === 'vi';

  // Toggle state for Hahalolo's 6 ecosystem sub-products
  const [showSubProjects, setShowSubProjects] = useState(false);

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Editorial Header */}
        <div className="mb-16 md:mb-20 reveal">
          <p className="text-xs font-mono uppercase tracking-widest text-[#FFB648] mb-3">
            // {t.badge}
          </p>
          <h2 className="font-display italic text-3xl sm:text-5xl lg:text-6xl text-[#F4F2EA] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#8E96A4] max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Editorial Timeline (Clean typographic rows, zero bloated card nesting) */}
        <div className="space-y-16 md:space-y-24 relative before:absolute before:left-0 md:before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-[rgba(244,242,234,0.1)]">
          {careerItems.map((item) => {
            const isHahalolo = item.company.includes('Hahalolo');

            return (
              <div
                key={item.company}
                className="relative pl-6 md:pl-16 reveal group"
              >
                {/* Timeline Dot Marker */}
                <div className="absolute left-[-4px] md:left-[11px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#08090A] border-2 border-[#FF6417] group-hover:scale-125 group-hover:bg-[#FFB648] transition-transform" />

                {/* Header Row: Period, Company, Role */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 pb-4 border-b border-[rgba(244,242,234,0.08)]">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#FFB648] font-semibold mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                      <span className="text-[#8E96A4]">•</span>
                      <span className="text-[#8E96A4]">{item.type}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-normal text-[#F4F2EA] tracking-tight">
                      {item.company}
                    </h3>
                  </div>

                  <div className="text-sm font-mono text-[#8E96A4] md:text-right">
                    <span className="text-[#F4F2EA] font-medium">{item.role}</span>
                    {item.project && (
                      <div className="text-xs text-[#8E96A4]/80 mt-0.5">
                        {item.project}
                      </div>
                    )}
                  </div>
                </div>

                {/* Summary Context */}
                <p className="mt-4 text-sm sm:text-base text-[#8E96A4] leading-relaxed max-w-4xl" data-cursor="lens">
                  {item.summary}
                </p>

                {/* Key Contributions & Engineering Outcomes */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4F2EA]/70 mb-3">
                    {isVi ? 'Đóng góp kỹ thuật:' : 'Key contributions:'}
                  </h4>
                  <ul className="space-y-2.5 max-w-4xl">
                    {item.achievements.map((ach, achIdx) => (
                      <li
                        key={achIdx}
                        className="text-xs sm:text-sm text-[#8E96A4] leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="text-[#FF6417] font-mono mt-0.5">→</span>
                        <span className="text-[#F4F2EA]/90">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used (Clean typographic flow, zero badge clutter) */}
                <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-[#8E96A4]">
                  <span className="text-[#FFB648] font-semibold">// Tech:</span>
                  {item.technologies.map((tech, tIdx) => (
                    <React.Fragment key={tech}>
                      <span className="hover:text-[#F4F2EA] transition-colors">{tech}</span>
                      {tIdx < item.technologies.length - 1 && (
                        <span className="text-[#8E96A4]/30 select-none">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Hahalolo Sub-Projects Drawer Button */}
                {isHahalolo && item.subProjects && item.subProjects.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-[rgba(244,242,234,0.06)]">
                    <button
                      onClick={() => setShowSubProjects(!showSubProjects)}
                      data-cursor="pointer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141C2E] border border-[rgba(244,242,234,0.12)] text-xs font-mono text-[#FFB648] hover:border-[#FF6417] transition-all cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>
                        {showSubProjects
                          ? (isVi ? 'Thu gọn 6 sản phẩm trong hệ sinh thái' : 'Collapse 6 ecosystem products')
                          : (isVi ? 'Xem chi tiết 6 sản phẩm trong hệ sinh thái Hahalolo' : 'View 6 Hahalolo ecosystem products')}
                      </span>
                      {showSubProjects ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {/* Expandable Sub-projects List */}
                    {showSubProjects && (
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
                        {item.subProjects.map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-4 rounded-xl bg-[#0E131F]/60 border border-[rgba(244,242,234,0.06)] hover:border-[#FF6417]/30 transition-colors"
                          >
                            <div className="text-[11px] font-mono text-[#FFB648] mb-1">
                              {sub.category}
                            </div>
                            <h5 className="text-sm font-medium text-[#F4F2EA] mb-1.5">
                              {sub.name}
                            </h5>
                            <p className="text-xs text-[#8E96A4] leading-relaxed mb-3">
                              {sub.description}
                            </p>
                            {sub.technologies && (
                              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[rgba(244,242,234,0.06)]">
                                {sub.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141C2E] text-[#8E96A4]"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
