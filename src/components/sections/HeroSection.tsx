import React, { useState } from 'react';
import { ArrowDown, Download, FileText, Briefcase } from 'lucide-react';
import { MorphIcon } from 'morphicons/react';
import { Smartphone, Layers, Boxes, Sparkles, Bot, Zap, Handshake, ShieldCheck } from 'lucide';
import { getProfileData, getVerifiedStats } from '../../data/profileData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { StatCard } from '../common/StatCard';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

const HeroBulletCard: React.FC<{
  iconA: any;
  iconB: any;
  title: string;
  text: string;
}> = ({ iconA, iconB, title, text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex items-start gap-4 p-4 neu-flat-sm dark:bg-[#151F32] dark:border dark:border-slate-800 rounded-xl hover:shadow-lg dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer"
    >
      <div className="w-11 h-11 rounded-xl bg-sky-500/10 dark:bg-sky-500/20 border border-sky-500/20 dark:border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-sky-400 flex-shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-sm">
        <MorphIcon icon={hovered ? iconB : iconA} size={22} strokeWidth={2} />
      </div>
      <div>
        <span className="text-slate-900 dark:text-white font-bold block text-sm sm:text-base mb-0.5 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          {title}
        </span>
        <span className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed block">
          {text}
        </span>
      </div>
    </li>
  );
};

const MissionCallout: React.FC<{ title: string; text: string }> = ({ title, text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group mb-8 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-sky-500/10 via-blue-500/5 to-transparent dark:from-sky-950/40 dark:via-blue-950/20 border-l-4 border-sky-500 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed animate-fadeInUp flex items-center gap-3.5 cursor-pointer"
      style={{ animationDelay: '200ms' }}
    >
      <div className="w-9 h-9 rounded-lg bg-sky-500/10 dark:bg-sky-500/20 border border-sky-500/20 dark:border-sky-500/30 flex items-center justify-center text-sky-600 dark:text-sky-400 flex-shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
        <MorphIcon icon={hovered ? ShieldCheck : Handshake} size={20} strokeWidth={2} />
      </div>
      <p>
        <strong className="text-slate-900 dark:text-white font-bold">{title}</strong> {text}
      </p>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const profile = getProfileData(language);
  const stats = getVerifiedStats(language);

  const heroBullets = [
    {
      iconA: Smartphone,
      iconB: Layers,
      title: t.bullet1Title,
      text: t.bullet1Text,
    },
    {
      iconA: Boxes,
      iconB: Sparkles,
      title: t.bullet2Title,
      text: t.bullet2Text,
    },
    {
      iconA: Bot,
      iconB: Zap,
      title: t.bullet3Title,
      text: t.bullet3Text,
    },
  ];

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-neu-pattern">
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-gradient-to-br from-sky-200/30 via-blue-100/20 to-transparent dark:from-sky-500/10 dark:via-blue-600/5 pointer-events-none rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-gradient-to-tl from-indigo-200/20 via-violet-100/10 to-transparent dark:from-indigo-500/10 dark:via-violet-600/5 pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Grid: Info on left, Avatar Card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Left Column: Introduction & Details */}
          <div className="lg:col-span-7">
            {/* Status badge */}
            <div className="flex items-center mb-6 animate-fadeInUp" style={{ animationDelay: '0ms' }}>
              <Badge variant="emerald" size="md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {t.openToWork}
              </Badge>
            </div>

            {/* Main headline */}
            <div className="animate-fadeInUp" style={{ animationDelay: '80ms' }}>
              <p className="text-base sm:text-xl md:text-2xl font-semibold text-sky-600 dark:text-sky-400 mb-2 tracking-normal">
                {t.greeting}
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] sm:leading-[1.08] mb-3">
                <span className="text-slate-900 dark:text-white">{t.fullNameFirst}</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400">
                  {t.fullNameLast}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-slate-600 dark:text-slate-300 tracking-tight mb-6 sm:mb-8">
                {t.subHeadline}
              </p>
            </div>

            {/* Bio — 3 bullet points with Morphing Icons */}
            <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '160ms' }}>
              <ul className="space-y-3">
                {heroBullets.map((b, i) => (
                  <HeroBulletCard
                    key={i}
                    iconA={b.iconA}
                    iconB={b.iconB}
                    title={b.title}
                    text={b.text}
                  />
                ))}
              </ul>
            </div>

            {/* Mission / Value Proposition with Morphing Icon */}
            <MissionCallout title={t.missionTitle} text={t.missionText} />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 animate-fadeInUp" style={{ animationDelay: '240ms' }}>
              <Button
                asLink
                href="#astrobite"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowDown className="w-4 h-4 text-sky-600 dark:text-sky-400" />}
                iconPosition="right"
              >
                {t.ctaExploreAstroBite}
              </Button>

              <Button
                asLink
                href={profile.cvPdfUrl}
                download={language === 'en' ? 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf' : 'Mobile_Engineer_Nguyen_Duy_Trang.pdf'}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                icon={<Download className="w-4 h-4 text-sky-600 dark:text-sky-400" />}
              >
                {t.ctaDownloadCv}
              </Button>

              <Button
                asLink
                href={profile.cvViewUrl}
                target="_blank"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto"
                icon={<FileText className="w-4 h-4 text-slate-600 dark:text-slate-300" />}
              >
                {t.ctaViewWebCv}
              </Button>
            </div>
          </div>

          {/* Right Column: Profile Avatar Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fadeInUp" style={{ animationDelay: '140ms' }}>
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              {/* Ambient subtle glow around avatar */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-400/25 via-blue-500/20 to-indigo-500/25 dark:from-sky-500/20 dark:via-blue-600/15 dark:to-indigo-500/20 rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Neumorphic Frame */}
              <div className="relative neu-flat-lg rounded-[2.25rem] p-4 bg-[#E8ECF2] dark:bg-[#151F32] border border-white/80 dark:border-slate-800">
                {/* Photo wrapper */}
                <div className="relative rounded-[1.75rem] overflow-hidden aspect-[3/4] bg-slate-200 dark:bg-slate-800 border border-white/60 dark:border-slate-700 shadow-inner">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Floating pill: Open to Work */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border border-white/80 dark:border-slate-700 flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{t.openToWork}</span>
                  </div>

                  {/* Gradient overlay at bottom of photo for text contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <p className="font-bold text-base leading-tight drop-shadow-sm">{profile.name}</p>
                      <p className="text-xs text-slate-200 font-mono drop-shadow-sm mt-0.5">
                        {t.avatarLocationYob}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Card: 5 Năm Kinh Nghiệm */}
                <div className="mt-3.5 p-3 rounded-2xl bg-white/70 dark:bg-[#0D1524]/90 backdrop-blur-sm border border-white/90 dark:border-slate-800 flex items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-sky-500/10 dark:bg-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 dark:text-white block">{t.avatarExpYears}</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono block">{t.avatarExpSkills}</span>
                    </div>
                  </div>
                  <div className="text-right pl-2.5 border-l border-slate-200/80 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-800 dark:text-white block">{t.avatarWorkType}</span>
                    <span className="text-[10px] text-sky-600 dark:text-sky-400 font-mono block font-medium">{t.avatarWorkModes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Stats */}
        <div className="pt-8 border-t border-slate-300/70 dark:border-slate-800 reveal">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-xs uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 font-semibold">
              {t.metricsTitle}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              {t.metricsSub}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
            {stats.map((stat, idx) => (
              <div key={stat.label} className={`reveal stagger-${idx + 1} h-full`}>
                <StatCard stat={stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
