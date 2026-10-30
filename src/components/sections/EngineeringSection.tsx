import React from 'react';
import { Layers, Database, Cpu, Quote } from 'lucide-react';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../common/Badge';

export const EngineeringSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].engineering;

  const icons = [
    <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
  ];

  return (
    <section id="engineering" className="py-24 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 reveal">
          <Badge variant="amber" size="md" className="mb-3">
            {t.badge}
          </Badge>
          <h2 className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-[#F4F2EA] tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base text-[#8E96A4] max-w-3xl leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 3 Engineering Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.principles.map((p, idx) => (
            <div
              key={p.title}
              className="bg-[#0E131F]/90 rounded-3xl p-6 sm:p-7 border border-[rgba(244,242,234,0.08)] shadow-sm hover:border-[#FF6417]/40 transition-colors flex flex-col justify-between reveal"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#141C2E] border border-[rgba(244,242,234,0.1)]">
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
                    {t.ruleTags[idx]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block mb-1">
                  {language === 'en' ? 'Practical Context:' : 'Áp dụng thực tế:'}
                </span>
                <p className="text-xs text-sky-700 dark:text-sky-400 font-medium leading-relaxed">
                  {p.example}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 reveal">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 shrink-0">
              <Quote className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {t.quote}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {t.subquote}
              </p>
            </div>
          </div>

          <div className="shrink-0 self-end md:self-center">
            <span className="text-xs font-mono px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-semibold">
              Flutter • iOS Swift • Android Kotlin
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
