import React from 'react';
import { ArrowUpRight, Download, Sparkles, Clock, FileText } from 'lucide-react';
import { getProfileData, getVerifiedStats } from '../../data/profileData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { StatCard } from '../common/StatCard';

/* ─────────────────────────────────────────
   Curved Text Badge Component
───────────────────────────────────────── */
const CurvedTextBadge: React.FC = () => {
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-900 dark:bg-black text-white flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
      {/* Curved Text via SVG */}
      <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <path
            id="textPath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            fill="none"
          />
          <text fontSize="10.5" fill="currentColor" fontWeight="600" letterSpacing="1.5">
            <textPath href="#textPath" startOffset="0%">
              EXPLORE ASTROBITE ✦ GET IN TOUCH ✦
            </textPath>
          </text>
        </svg>
      </div>
      {/* Inner Circle with Arrow */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-slate-900 flex items-center justify-center">
        <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   Main Hero Section
───────────────────────────────────────── */
export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const profile = getProfileData(language);
  const stats = getVerifiedStats(language);

  // Marquee items
  const marqueeItems = [
    'Mobile Engineer',
    'App Developer',
    'UI/UX',
    'Flutter',
    'Native iOS/Android'
  ];

  // We repeat the marquee array multiple times to ensure continuous scrolling
  const renderMarqueeGroup = (keyPrefix: string) => (
    <div key={keyPrefix} className="flex items-center whitespace-nowrap min-w-full justify-around shrink-0">
      {marqueeItems.map((item, idx) => (
        <React.Fragment key={`${keyPrefix}-${idx}`}>
          <span className="mx-4 text-white/90 font-medium tracking-wide text-sm sm:text-base uppercase">
            {item}
          </span>
          <Sparkles className="w-4 h-4 text-white/50" />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section id="about" className="relative pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* ══════════════════════════════════════
            THE PIXEL BLOOM CARD (Neumorphic)
        ══════════════════════════════════════ */}
        <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden neu-flat-lg">

          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-0">
            
            {/* ── Left Column: Text & CTAs ── */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 lg:pr-8 z-10">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                {/* Open to Work Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                  border border-slate-200 dark:border-slate-800 w-fit
                  bg-slate-50 dark:bg-slate-900/50">
                  <Sparkles className="w-4 h-4 text-sky-500" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 tracking-wide">
                    {t.openToWork}
                  </span>
                </div>

                {/* Experience Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                  border border-slate-200 dark:border-slate-800 w-fit
                  bg-slate-50 dark:bg-slate-900/50">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 tracking-wide">
                    {language === 'en' ? '5+ Years Exp' : '5+ Năm Kinh Nghiệm'}
                  </span>
                </div>
              </div>

              {/* Greeting */}
              <div className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 dark:from-sky-400 dark:via-blue-500 dark:to-indigo-400 animate-fadeInUp pb-1">
                {language === 'en' ? 'Hello, I am Nguyen Duy Trang 👋' : 'Xin chào, Tôi là Nguyễn Duy Tráng 👋'}
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6 animate-fadeInUp"
                style={{ animationDelay: '50ms' }}>
                {language === 'en' ? (
                  <>
                    Mobile App <span className="text-slate-400 dark:text-slate-500 font-medium">Developer</span>
                  </>
                ) : (
                  <>
                    Lập trình <span className="text-slate-400 dark:text-slate-500 font-medium">Mobile App</span>
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-lg mb-10 leading-relaxed animate-fadeInUp"
                style={{ animationDelay: '100ms' }}>
                {t.subHeadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 animate-fadeInUp"
                style={{ animationDelay: '200ms' }}>
                
                {/* Primary Button */}
                <a
                  href={profile.cvPdfUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full
                    border-2 border-slate-200 dark:border-slate-700
                    text-slate-800 dark:text-slate-200 font-bold text-sm
                    hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                >
                  {language === 'en' ? 'Download CV' : 'Tải CV PDF'}
                  <Download className="w-4 h-4" />
                </a>

                {/* View CV Button */}
                <a
                  href={profile.cvViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full
                    border-2 border-sky-300 dark:border-sky-600
                    text-sky-700 dark:text-sky-300 font-bold text-sm
                    hover:bg-sky-50 dark:hover:bg-sky-900/30 transition-colors duration-200"
                >
                  {language === 'en' ? 'View CV' : 'Xem CV'}
                  <FileText className="w-4 h-4" />
                </a>

                {/* Secondary Button */}
                <a
                  href="#astrobite"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full
                    bg-slate-900 dark:bg-sky-500
                    text-white font-bold text-sm
                    hover:bg-slate-800 dark:hover:bg-sky-400 shadow-lg transition-colors duration-200"
                >
                  {t.ctaExploreAstroBite}
                </a>

                {/* Tertiary Button - Download APK */}
                <a
                  href="https://github.com/TrangDuyNguyen/AstroBite/releases/latest/download/app-release.apk"
                  download="AstroBite_Demo.apk"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full
                    bg-emerald-600 dark:bg-emerald-500
                    text-white font-bold text-sm
                    hover:bg-emerald-700 dark:hover:bg-emerald-400 shadow-lg transition-colors duration-200"
                >
                  {language === 'en' ? 'Download AstroBite' : 'Tải về AstroBite'}
                  <Download className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* ── Right Column: Image & Floating Badge ── */}
            <div className="relative p-6 sm:p-12 lg:p-16 lg:pl-0 flex items-center justify-center lg:justify-end min-h-[400px]">
              
              {/* Image Container */}
              <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={profile.avatarUrl} 
                  alt={profile.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating Curved Text Badge (overlapping the left edge of the image on large screens) */}
              <div className="absolute bottom-4 right-4 sm:bottom-auto sm:right-auto sm:top-1/2 sm:-translate-y-1/2 sm:left-2 lg:-left-12 z-20 scale-75 sm:scale-100 origin-bottom-right sm:origin-center">
                <CurvedTextBadge />
              </div>

            </div>
          </div>

          {/* ── Bottom Marquee Bar ── */}
          <div className="w-full bg-slate-900 dark:bg-black py-4 border-t border-slate-800 overflow-hidden flex relative">
            {/* The animated container must be double the width to scroll seamlessly. 
                We use two identical groups side-by-side inside the marquee wrapper. */}
            <div className="flex animate-marquee">
              {renderMarqueeGroup('group1')}
              {renderMarqueeGroup('group2')}
              {renderMarqueeGroup('group3')}
              {renderMarqueeGroup('group4')}
            </div>
          </div>

        </div>

        {/* ══════════════════════════════════════
            VERIFIED STATS ROW (below card)
        ══════════════════════════════════════ */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 reveal">
          <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-xs uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 font-semibold">
              {t.metricsTitle}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
              {t.metricsSub}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 items-stretch">
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
