import React from 'react';
import { Briefcase, Calendar, CheckCircle2, GraduationCap, Layers } from 'lucide-react';
import { getCareerData } from '../../data/careerData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../common/Badge';

export const CareerSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].career;
  const careerItems = getCareerData(language);

  return (
    <section id="experience" className="py-24 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 reveal">
          <Badge variant="cyan" size="md" className="mb-3">
            {t.badge}
          </Badge>
          <h2 className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-[#F4F2EA] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base text-[#8E96A4] max-w-3xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Career Timeline */}
        <div className="space-y-12">
          {careerItems.map((item) => (
            <div
              key={item.company}
              className="bg-[#0E131F]/90 rounded-3xl p-6 sm:p-8 lg:p-10 border border-[rgba(244,242,234,0.08)] shadow-xl hover:border-[#FF6417]/40 transition-colors reveal"
            >
              {/* Header row: Period, Company, Role, Type */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-5 border-b border-[rgba(244,242,234,0.08)]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#FFB648] font-bold mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#F4F2EA]">
                    {item.company}
                  </h3>
                  <div className="text-sm font-semibold text-[#8E96A4] flex items-center gap-2 mt-0.5">
                    <Briefcase className="w-4 h-4 text-[#FF6417]" />
                    <span>{item.role}</span>
                    {item.project && (
                      <span className="text-xs text-[#8E96A4]/80 font-normal">
                        • {item.project}
                      </span>
                    )}
                  </div>
                </div>

                <Badge variant="slate" size="sm" className="self-start sm:self-center">
                  {item.type}
                </Badge>
              </div>

              {/* Summary Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {item.summary}
              </p>

              {/* Core Achievements */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 font-bold mb-3">
                  {language === 'en' ? 'Key Contributions & Engineering Scope' : 'Đóng Góp Chính & Phạm Vi Nghiệp Vụ'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.achievements.map((ach, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-projects Showcase (Especially for Hahalolo's 6 apps) */}
              {item.subProjects && item.subProjects.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 mb-4">
                    <Layers className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <h4 className="text-xs uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 font-bold">
                      {language === 'en' ? 'Participating Products & Sub-Systems' : 'Các Dự Án & Sản Phẩm Đã Trực Tiếp Tham Gia'}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {item.subProjects.map((sub, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 flex flex-col justify-between hover:border-sky-300 dark:hover:border-sky-700 transition-colors"
                      >
                        <div>
                          <div className="text-[11px] font-mono text-sky-600 dark:text-sky-400 font-semibold mb-1">
                            {sub.category}
                          </div>
                          <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                            {sub.name}
                          </h5>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            {sub.description}
                          </p>
                        </div>

                        {sub.technologies && (
                          <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                            {sub.technologies.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Tag Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 mr-2">
                  {language === 'en' ? 'Stack:' : 'Công nghệ:'}
                </span>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Background Card */}
        <div className="mt-12 bg-white/80 dark:bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-mono text-purple-600 dark:text-purple-400 block mb-0.5 font-bold">
                {t.eduBadge}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {t.eduSchool}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                {t.eduDegree}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {t.eduDetails}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
