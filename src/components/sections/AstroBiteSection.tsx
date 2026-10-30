import React from 'react';
import {
  Camera,
  Mic,
  Utensils,
  Bot,
  TrendingUp,
  Activity,
  Layers,
  ArrowUpRight,
  Check,
  Play,
  Database,
  Cpu
} from 'lucide-react';
import { getAstrobiteOverview, getAstrobitePillars, getAstrobiteFeatures } from '../../data/astrobiteData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../common/Badge';

export const AstroBiteSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].astrobite;
  const overview = getAstrobiteOverview(language);
  const pillars = getAstrobitePillars(language);
  const features = getAstrobiteFeatures(language);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'vision-ai':
        return <Camera className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'voice-ai':
        return <Mic className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'offline-data':
        return <Database className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'architecture':
        return <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
    }
  };

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'camera':
        return <Camera className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'mic':
        return <Mic className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'utensils':
        return <Utensils className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'bot':
        return <Bot className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'trending-up':
        return <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'activity':
        return <Activity className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      default:
        return <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-[rgba(244,242,234,0.08)] relative bg-[#08090A]">
      {/* Target anchor for backward compatibility */}
      <span id="astrobite" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Project Header */}
        <div className="mb-14 reveal">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="cyan" size="md">
              {t.badgeFlagship}
            </Badge>
            <Badge variant="slate" size="md">
              {overview.role}
            </Badge>
          </div>

          <h2 className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-[#F4F2EA] tracking-tight mb-4">
            {overview.name} —{' '}
            <span className="text-[#FF6417]">
              {overview.tagline}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#8E96A4] max-w-3xl leading-relaxed mb-6">
            {overview.description}
          </p>

          {/* Quick Architecture Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mb-6">
            {overview.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#0E131F]/90 border border-[rgba(244,242,234,0.08)] shadow-sm"
              >
                <div className="text-[11px] font-mono text-[#8E96A4] mb-0.5">
                  {m.label}
                </div>
                <div className="text-sm font-bold text-[#FFB648]">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2">
            {overview.stackBadges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-mono font-medium rounded-xl bg-[#141C2E] text-[#F4F2EA] border border-[rgba(244,242,234,0.1)] shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Technical Deep-Dives */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-slate-800 pb-4 reveal">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {t.pillarsHeader}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {t.pillarsSub}
              </p>
            </div>
            <a
              href="#gallery"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
            >
              <span>{t.viewScreensLink}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white/80 dark:bg-slate-900/80 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-md flex flex-col justify-between reveal"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800">
                      {getPillarIcon(pillar.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold block">
                        Story {pillar.number} • {pillar.tag}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {pillar.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 font-semibold">
                    {pillar.metricBadge}
                  </span>
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-sky-600 font-medium transition-colors"
                  >
                    <span>{t.viewScreensLink}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Walkthrough Video Demo Box */}
        <div className="mb-20 bg-white/80 dark:bg-slate-900/80 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 dark:border-slate-800 shadow-lg reveal">
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase text-sky-600 dark:text-sky-400 font-bold">
              <Play className="w-4 h-4" />
              <span>{t.demoVideoTitle}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {language === 'en' ? 'AstroBite Hands-on Demo' : 'Trực Quan Hoạt Động Của AstroBite'}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              {t.demoVideoSubtitle}
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-black aspect-video max-w-4xl mx-auto shadow-2xl border border-slate-800">
            <video
              controls
              preload="none"
              poster="/screenshots/clay/cockpit_dashboard.png"
              className="w-full h-full object-contain"
            >
              <source src="/astrobite-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* 6 Key Features */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3 border-b border-slate-200 dark:border-slate-800 pb-4 reveal">
            <div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-300/60 dark:border-sky-800/60 font-semibold mb-2 inline-block">
                {t.featuresBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {t.featuresHeader}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              {t.featuresSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat) => (
              <div
                key={feat.id}
                className="bg-white/70 dark:bg-slate-900/70 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-sky-300 dark:hover:border-sky-700 transition-colors flex flex-col justify-between reveal"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                      {getFeatureIcon(feat.iconName)}
                    </div>
                    {feat.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {feat.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feat.naturalDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
