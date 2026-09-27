import React from 'react';
import { Scissors, ShieldAlert, Cpu, GitCommit, Check } from 'lucide-react';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../common/Badge';

export const EngineeringSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].engineering;

  const icons = [
    <Scissors className="w-5 h-5 text-amber-600" />,
    <Cpu className="w-5 h-5 text-sky-600" />,
    <GitCommit className="w-5 h-5 text-emerald-600" />,
    <ShieldAlert className="w-5 h-5 text-purple-600" />,
  ];

  return (
    <section id="engineering" className="py-24 border-t border-slate-300/70 dark:border-slate-800 bg-[#E8ECF2] dark:bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 reveal">
          <Badge variant="amber" size="md" className="mb-3">
            {t.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {t.principles.map((p, idx) => (
            <div
              key={p.title}
              className={`bg-[#E8ECF2] dark:bg-[#151F32] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[7px_7px_15px_#c2cee0,-7px_-7px_15px_#ffffff] dark:shadow-[7px_7px_15px_#050811,-7px_-7px_15px_#1E2D44] hover:shadow-[10px_10px_20px_#bed0e2,-10px_-10px_20px_#ffffff] dark:hover:shadow-[10px_10px_20px_#04060d,-10px_-10px_20px_#22344f] border border-white/80 dark:border-slate-800 transition-all duration-300 reveal stagger-${(idx % 2) + 1}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 sm:p-2.5 rounded-2xl bg-[#E8ECF2] dark:bg-[#0D1524] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/60 dark:border-slate-800">
                  {icons[idx]}
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded-lg bg-[#E8ECF2] dark:bg-[#0D1524] text-slate-600 dark:text-slate-400 shadow-[inset_1.5px_1.5px_3px_#c5d1e2,inset_-1.5px_-1.5px_3px_#ffffff] dark:shadow-[inset_1.5px_1.5px_3px_#050811,inset_-1.5px_-1.5px_3px_#1A283E] border border-white/60 dark:border-slate-800">
                  {t.ruleTags[idx]}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white mb-2">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Engineering Quote Banner */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#E8ECF2] dark:bg-[#151F32] shadow-[8px_8px_18px_#c2cee0,-8px_-8px_18px_#ffffff] dark:shadow-[8px_8px_18px_#050811,-8px_-8px_18px_#1E2D44] border border-white/90 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 reveal">
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">
              {t.quote}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.subquote}
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
            <div className="flex-1 sm:flex-initial text-center justify-center px-3.5 sm:px-4 py-2 rounded-xl bg-[#E8ECF2] dark:bg-[#0D1524] text-emerald-700 dark:text-emerald-400 shadow-[inset_2px_2px_5px_#c5d1e2,inset_-2px_-2px_5px_#ffffff] dark:shadow-[inset_2px_2px_5px_#050811,inset_-2px_-2px_5px_#1A283E] border border-emerald-300/60 dark:border-emerald-800/60 text-xs font-mono flex items-center gap-2 font-semibold">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{t.testsPassingBadge}</span>
            </div>
            <div className="flex-1 sm:flex-initial text-center justify-center px-3.5 sm:px-4 py-2 rounded-xl bg-[#E8ECF2] dark:bg-[#0D1524] text-sky-700 dark:text-sky-400 shadow-[inset_2px_2px_5px_#c5d1e2,inset_-2px_-2px_5px_#ffffff] dark:shadow-[inset_2px_2px_5px_#050811,inset_-2px_-2px_5px_#1A283E] border border-sky-300/60 dark:border-sky-800/60 text-xs font-mono font-semibold">
              {t.zeroLeakBadge}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
