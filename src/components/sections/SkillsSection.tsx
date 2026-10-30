import React from 'react';
import { Smartphone, Layers, Database, Cpu, Wrench, CheckCircle2 } from 'lucide-react';
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
      return <Smartphone className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
    }
    if (category.includes('Architecture')) {
      return <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
    if (category.includes('Data')) {
      return <Database className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    }
    if (category.includes('Native')) {
      return <Cpu className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
    return <Wrench className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
  };

  return (
    <section id="skills" className="py-24 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 reveal">
          <Badge variant="cyan" size="md" className="mb-3">
            {t.badge}
          </Badge>
          <h2 className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-[#F4F2EA] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base text-[#8E96A4] max-w-3xl leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 5 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#0E131F]/90 rounded-3xl p-6 border border-[rgba(244,242,234,0.08)] shadow-sm flex flex-col justify-between hover:border-[#FF6417]/40 transition-all reveal"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-2xl bg-[#141C2E] border border-[rgba(244,242,234,0.1)]">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="text-base font-bold text-[#F4F2EA]">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-[#8E96A4] mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Skills Tag Chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {group.skills.map((s) => (
                    <div
                      key={s.name}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-all ${
                        s.isKey
                          ? 'bg-[#141C2E] text-[#FFB648] font-semibold border border-[#FF6417]/40 shadow-[0_0_12px_rgba(255,100,23,0.15)]'
                          : 'bg-[#141C2E]/60 text-[#8E96A4] border border-[rgba(244,242,234,0.08)]'
                      }`}
                    >
                      {s.isKey && (
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      )}
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 text-sky-600 dark:text-sky-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t.coreStrength}
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
