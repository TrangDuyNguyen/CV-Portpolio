import React from 'react';
import { Smartphone, Layers, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { getSkillsData } from '../../data/skillsData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { GridCrosshairs } from '../common/KineticPrimitives';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const tSkills = translations[language].skills;
  const tEng = translations[language].engineering;
  const skillsGroups = getSkillsData(language);

  const getGroupIcon = (iconName?: string) => {
    switch (iconName) {
      case 'smartphone':
        return <Smartphone className="w-4 h-4" />;
      case 'layers':
        return <Layers className="w-4 h-4" />;
      case 'cpu':
        return <Cpu className="w-4 h-4" />;
      case 'terminal':
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="border-b border-[var(--line)] bg-[var(--bg)] relative">
      <div className="swiss-frame relative">
        <GridCrosshairs corners={['bl', 'br']} />

        {/* Section Header */}
        <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-14 border-b border-[var(--line)] reveal">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="px-2 py-0.5 bg-[var(--bg-invert)] text-[var(--text-invert)] font-bold">04</span>
            <span className="text-[var(--accent)] font-bold">// {tSkills.badge}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <h2 className="lg:col-span-8 font-heading font-bold uppercase text-[clamp(2rem,4.8vw,4.2rem)] leading-[0.95] tracking-[-0.035em] text-[var(--text-primary)]">
              {tSkills.title}
            </h2>
            <p className="lg:col-span-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {tSkills.description}
            </p>
          </div>
        </div>

        {/* 2x2 Exposed Capability Blueprint Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--line)]">
          {skillsGroups.map((group, idx) => (
            <div
              key={group.category}
              className={`p-6 sm:p-8 lg:p-10 bg-[var(--bg-elevated)] border-b border-[var(--line)] ${
                idx % 2 === 0 ? 'md:border-r' : ''
              } ${idx >= 2 ? 'md:border-b-0' : ''} flex flex-col justify-between gap-6 reveal stagger-${idx + 1}`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 bg-[var(--bg-invert)] text-[var(--text-invert)]">
                      {getGroupIcon(group.iconName)}
                    </span>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold block">
                        STACK.0{idx + 1}
                      </span>
                      <h3 className="font-heading font-bold uppercase text-lg sm:text-xl text-[var(--text-primary)] tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                  </div>
                  <span className="font-heading font-bold text-3xl text-[var(--line-strong)] select-none">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-5">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-xs font-mono px-2.5 py-1 border ${
                        skill.isKey
                          ? 'bg-[var(--bg-subtle)] text-[var(--text-primary)] border-[var(--line-strong)] font-semibold'
                          : 'bg-transparent text-[var(--text-muted)] border-[var(--line)]'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {group.proofPoint && (
                <div className="pt-4 border-t border-[var(--line)]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold block mb-1">
                    // {tSkills.proofLabel}
                  </span>
                  <p className="text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                    {group.proofPoint}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3 Hard Engineering Rules Row */}
        <div className="bg-[var(--bg)] reveal">
          <div className="px-5 sm:px-8 lg:px-10 py-3.5 border-b border-[var(--line)] bg-[var(--bg-subtle)] flex items-center justify-between text-[11px] font-mono uppercase tracking-widest">
            <span className="font-bold text-[var(--text-primary)]">
              // {tSkills.principlesHeader}
            </span>
            <span className="text-[var(--text-muted)]">PRODUCTION RULES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-[var(--line)]">
            {tEng.principles.map((principle, idx) => (
              <div
                key={principle.title}
                className={`p-6 sm:p-8 border-b lg:border-b-0 ${
                  idx < 2 ? 'lg:border-r' : ''
                } border-[var(--line)] flex flex-col justify-between gap-5`}
              >
                <div>
                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 bg-[var(--accent-soft)] text-[var(--accent)] mb-3">
                    RULE 0{idx + 1} // {tEng.ruleTags[idx]}
                  </span>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-[var(--text-primary)] mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <p className="text-xs font-mono text-[var(--text-primary)] leading-relaxed">
                    {principle.example}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* High-Contrast Pull Quote Strip */}
          <div className="px-5 sm:px-8 lg:px-10 py-8 bg-[var(--bg-invert)] text-[var(--text-invert)] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <blockquote className="font-display italic text-xl sm:text-2xl leading-snug max-w-3xl">
              {tEng.quote}
            </blockquote>
            <span className="text-xs font-mono opacity-75 md:text-right max-w-sm">
              {tEng.subquote}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
