import React from 'react';
import { Briefcase, Calendar, CheckCircle2, GraduationCap } from 'lucide-react';
import { getCareerData } from '../../data/careerData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../common/Badge';

export const CareerSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].career;
  const careerItems = getCareerData(language);

  return (
    <section id="career" className="py-24 border-t border-slate-300/70 dark:border-slate-800 bg-[#E8ECF2] dark:bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 reveal">
          <Badge variant="cyan" size="md" className="mb-3">
            {t.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:w-0.5 before:bg-slate-300 dark:before:bg-slate-800 before:-translate-x-1/2">
          {careerItems.map((item, index) => (
            <div
              key={item.company}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 reveal stagger-${(index % 2) + 1} ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Dot */}
              <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-7 w-7 h-7 rounded-full bg-[#E8ECF2] dark:bg-[#151F32] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] border-2 border-sky-600 dark:border-sky-400 flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-sky-600 dark:bg-sky-400" />
              </div>

              {/* Card Container */}
              <div className="ml-8 sm:ml-10 md:ml-0 md:w-1/2">
                <div className="bg-[#E8ECF2] dark:bg-[#151F32] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 shadow-[7px_7px_15px_#c2cee0,-7px_-7px_15px_#ffffff] dark:shadow-[7px_7px_15px_#050811,-7px_-7px_15px_#1E2D44] hover:shadow-[10px_10px_20px_#bed0e2,-10px_-10px_20px_#ffffff] dark:hover:shadow-[10px_10px_20px_#04060d,-10px_-10px_20px_#22344f] border border-white/80 dark:border-slate-800 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-sky-700 dark:text-sky-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <Badge variant="slate" size="sm">
                      {item.type}
                    </Badge>
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-slate-800 dark:text-white mb-1">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold mb-3">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 dark:text-slate-400" />
                      {item.company}
                    </span>
                    {item.project && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                        • {item.project}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-5">
                    {item.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-300/60 dark:border-slate-800">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded-lg bg-[#E8ECF2] dark:bg-[#0D1524] text-slate-700 dark:text-slate-300 shadow-[inset_1.5px_1.5px_3px_#c5d1e2,inset_-1.5px_-1.5px_3px_#ffffff] dark:shadow-[inset_1.5px_1.5px_3px_#050811,inset_-1.5px_-1.5px_3px_#1A283E] border border-white/60 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Box */}
        <div className="mt-12 sm:mt-16 bg-[#E8ECF2] dark:bg-[#151F32] rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[8px_8px_18px_#c2cee0,-8px_-8px_18px_#ffffff] dark:shadow-[8px_8px_18px_#050811,-8px_-8px_18px_#1E2D44] border border-white/90 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 reveal">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-[#E8ECF2] dark:bg-[#0D1524] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/60 dark:border-slate-800 text-purple-600 dark:text-purple-400 shrink-0">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="text-xs font-mono text-purple-700 dark:text-purple-400 block mb-0.5 font-semibold">
                {t.eduBadge}
              </span>
              <h4 className="text-sm sm:text-lg font-bold text-slate-800 dark:text-white">
                {t.eduSchool}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {t.eduDegree}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
