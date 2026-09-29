import { Camera, Cpu, LayoutGrid, Layers, ArrowUpRight, Check, Image as ImageIcon, Wheat, Beef, Droplet, Sparkles } from 'lucide-react';
import { getAstrobiteOverview, getAstrobitePillars } from '../../data/astrobiteData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../common/Badge';

export const AstroBiteSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].astrobite;
  const overview = getAstrobiteOverview(language);
  const pillars = getAstrobitePillars(language);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'vision-ai':
        return <Camera className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'claymorphic-ui':
        return <Sparkles className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      case 'genui-coach':
        return <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'widgets-quality':
        return <LayoutGrid className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
    }
  };

  return (
    <section id="astrobite" className="py-24 border-t border-slate-300/70 dark:border-slate-800 relative bg-[#E8ECF2] dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Header */}
        <div className="mb-14 reveal">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="cyan" size="md">
              {t.badgeFlagship}
            </Badge>
            <Badge variant="slate" size="md">
              {t.roleTag}
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight mb-4">
            {overview.name} —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400">
              {overview.tagline}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-6">
            {overview.description}
          </p>

          {/* Quick Metrics Bar - Inset Neumorphic Cells */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mb-6">
            {overview.metrics.map((m, idx) => (
              <div key={m.label} className={`p-3 sm:p-3.5 rounded-xl bg-[#E8ECF2] dark:bg-[#0D1524] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/60 dark:border-slate-800 reveal stagger-${idx + 1}`}>
                <span className="block text-lg sm:text-xl font-bold text-slate-800 dark:text-white font-mono">{m.value}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {overview.stackBadges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 sm:px-3 py-1 text-xs rounded-xl bg-[#E8ECF2] dark:bg-[#151F32] text-slate-700 dark:text-slate-300 shadow-[3px_3px_6px_#c5d1e2,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] border border-white/80 dark:border-slate-700/60 font-mono"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Architectural Pillars Bento Grid */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-6 reveal">
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white tracking-tight">
              {t.pillarsHeader}
            </h3>
            <span className="text-xs font-mono text-sky-700 dark:text-sky-400 font-semibold">
              {t.pillarsSub}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className={`bg-[#E8ECF2] dark:bg-[#151F32] rounded-2xl p-5 sm:p-7 relative group shadow-[7px_7px_15px_#c2cee0,-7px_-7px_15px_#ffffff] dark:shadow-[7px_7px_15px_#050811,-7px_-7px_15px_#1E2D44] hover:shadow-[10px_10px_20px_#bed0e2,-10px_-10px_20px_#ffffff] dark:hover:shadow-[10px_10px_20px_#04060d,-10px_-10px_20px_#22344f] border border-white/80 dark:border-slate-800 transition-all duration-300 flex flex-col justify-between reveal stagger-${(idx % 2) + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#E8ECF2] dark:bg-[#0D1524] shadow-[inset_3px_3px_6px_#c4d0de,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/60 dark:border-slate-800">
                        {getPillarIcon(pillar.id)}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">
                          Pillar {pillar.number} • {pillar.tag}
                        </span>
                        <h4 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {pillar.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {pillar.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        {pillar.id === 'vision-ai' && hIdx === 0 ? (
                          <div className="space-y-2">
                            <span>{t.macroIntro}</span>
                            <div className="flex flex-wrap items-center gap-2 pt-0.5">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#E8ECF2] dark:bg-[#0D1829] text-sky-700 dark:text-sky-300 shadow-[inset_1.5px_1.5px_3px_#c5d1e2,inset_-1.5px_-1.5px_3px_#ffffff] dark:shadow-[inset_1.5px_1.5px_3px_#050811,inset_-1.5px_-1.5px_3px_#182a44] border border-sky-300/70 dark:border-sky-800/60 text-[11px] font-semibold">
                                <Wheat className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                                <span>{t.macroCarbs}</span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#1CB0F6] shadow-sm" title="Carbs (#1CB0F6 Xanh)" />
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#E8ECF2] dark:bg-[#21170A] text-amber-700 dark:text-amber-300 shadow-[inset_1.5px_1.5px_3px_#c5d1e2,inset_-1.5px_-1.5px_3px_#ffffff] dark:shadow-[inset_1.5px_1.5px_3px_#050811,inset_-1.5px_-1.5px_3px_#382810] border border-amber-300/70 dark:border-amber-800/60 text-[11px] font-semibold">
                                <Beef className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                                <span>{t.macroProtein}</span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF9600] shadow-sm" title="Protein (#FF9600 Cam)" />
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#E8ECF2] dark:bg-[#260E18] text-pink-700 dark:text-pink-300 shadow-[inset_1.5px_1.5px_3px_#c5d1e2,inset_-1.5px_-1.5px_3px_#ffffff] dark:shadow-[inset_1.5px_1.5px_3px_#050811,inset_-1.5px_-1.5px_3px_#441228] border border-pink-300/70 dark:border-pink-800/60 text-[11px] font-semibold">
                                <Droplet className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400 fill-pink-500/20" />
                                <span>{t.macroFat}</span>
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C8D] shadow-sm" title="Fat (#FF5C8D Hồng)" />
                              </span>
                            </div>
                          </div>
                        ) : (
                          <span>{h}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-300/60 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#E8ECF2] dark:bg-[#0D1524] text-sky-700 dark:text-sky-400 shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] dark:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1A283E] border border-sky-300/60 dark:border-sky-800/60">
                    {pillar.metricBadge}
                  </span>
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors"
                  >
                    <span>{t.viewScreensLink}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery CTA banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#E8ECF2] dark:bg-[#151F32] shadow-[8px_8px_18px_#c2cee0,-8px_-8px_18px_#ffffff] dark:shadow-[8px_8px_18px_#050811,-8px_-8px_18px_#1E2D44] border border-white/90 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 reveal">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#E8ECF2] dark:bg-[#0D1524] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/60 dark:border-slate-800 text-sky-600 dark:text-sky-400 shrink-0">
              <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-slate-800 dark:text-white">
                {t.galleryBannerTitle}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.galleryBannerDesc}
              </p>
            </div>
          </div>
          <a
            href="#gallery"
            className="w-full sm:w-auto text-center px-4 py-2.5 text-xs font-semibold rounded-xl bg-[#E8ECF2] dark:bg-[#151F32] text-sky-700 dark:text-sky-400 shadow-[4px_4px_8px_#c5d1e2,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#050811,-4px_-4px_8px_#1E2D44] hover:shadow-[6px_6px_12px_#bed0e2,-6px_-6px_12px_#ffffff] dark:hover:shadow-[6px_6px_12px_#04060d,-6px_-6px_12px_#22344f] active:shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1A283E] border border-white/80 dark:border-slate-700 transition-all shrink-0"
          >
            {t.galleryBannerBtn}
          </a>
        </div>
      </div>
    </section>
  );
};
