import React from 'react';
import { Smartphone, Layers, Cloud, Wrench, Star } from 'lucide-react';
import { getSkillsData } from '../../data/skillsData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../common/Badge';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const skillsGroups = getSkillsData(language);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Mobile')) {
      return <Smartphone className="w-5 h-5 text-sky-600" />;
    }
    if (category.includes('Architecture')) {
      return <Layers className="w-5 h-5 text-emerald-600" />;
    }
    if (category.includes('AI')) {
      return <Cloud className="w-5 h-5 text-purple-600" />;
    }
    return <Wrench className="w-5 h-5 text-amber-600" />;
  };

  return (
    <section id="skills" className="py-24 border-t border-slate-300/70 dark:border-slate-800 bg-[#E8ECF2] dark:bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 reveal">
          <Badge variant="cyan" size="md" className="mb-3">
            {t.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skillsGroups.map((group, idx) => (
            <div
              key={group.category}
              className={`bg-[#E8ECF2] dark:bg-[#151F32] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 shadow-[7px_7px_15px_#c2cee0,-7px_-7px_15px_#ffffff] dark:shadow-[7px_7px_15px_#050811,-7px_-7px_15px_#1E2D44] hover:shadow-[10px_10px_20px_#bed0e2,-10px_-10px_20px_#ffffff] dark:hover:shadow-[10px_10px_20px_#04060d,-10px_-10px_20px_#22344f] border border-white/80 dark:border-slate-800 transition-all duration-300 flex flex-col justify-between reveal stagger-${(idx % 2) + 1}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 sm:p-2.5 rounded-2xl bg-[#E8ECF2] dark:bg-[#0D1524] shadow-[inset_3px_3px_6px_#c4d0de,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/60 dark:border-slate-800">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 sm:mb-5">
                  {group.description}
                </p>

                {/* Skills Tag Cloud - Tactile Neumorphic Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {group.skills.map((s) => (
                    <div
                      key={s.name}
                      className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-mono flex items-center gap-1.5 transition-all ${
                        s.isKey
                          ? 'bg-[#E8ECF2] dark:bg-[#0D1829] text-sky-800 dark:text-sky-300 font-semibold shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] border border-sky-300/70 dark:border-sky-700/60'
                          : 'bg-[#E8ECF2] dark:bg-[#0D1524] text-slate-700 dark:text-slate-300 shadow-[2px_2px_5px_#c5d1e2,-2px_-2px_5px_#ffffff] dark:shadow-[2px_2px_5px_#050811,-2px_-2px_5px_#1A283E] hover:shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] dark:hover:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1A283E] border border-white/70 dark:border-slate-800'
                      }`}
                    >
                      {s.isKey && <Star className="w-3 h-3 text-sky-600 dark:text-sky-400 fill-sky-600 dark:fill-sky-400 shrink-0" />}
                      <span>{s.name}</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-sans ml-0.5">
                        ({s.level})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-300/60 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 font-medium text-sky-700 dark:text-sky-400">
                  <Star className="w-3 h-3 text-sky-600 dark:text-sky-400 fill-sky-600 dark:fill-sky-400" /> {t.coreStrength}
                </span>
                <span>{t.productionReady}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
