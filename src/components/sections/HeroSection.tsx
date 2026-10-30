import React from 'react';
import { Download, Clock, FolderGit2, Mail, ExternalLink } from 'lucide-react';
import { getProfileData, getVerifiedStats } from '../../data/profileData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { StatCard } from '../common/StatCard';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const profile = getProfileData(language);
  const stats = getVerifiedStats(language);

  return (
    <section id="about" className="relative pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Two-Column Editorial Card */}
        <div className="relative w-full rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xl backdrop-blur-sm overflow-hidden mb-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Column: Headline, Bio & CTAs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center z-10">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{t.openToWork}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{t.avatarExpYears}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono">
                  <span>Flutter · Swift · Kotlin</span>
                </div>
              </div>

              {/* Title & Headline */}
              <div className="mb-5">
                <span className="text-sm font-semibold tracking-wide uppercase font-mono text-sky-600 dark:text-sky-400 block mb-1">
                  {language === 'en' ? 'Mobile Engineer' : 'Kỹ sư Lập trình Di Động'}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  {profile.name}
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 mt-2">
                  {profile.tagline}
                </p>
              </div>

              {/* Bio Summary */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
                {profile.bio}
              </p>

              {/* 3 Focused Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Primary: Download CV */}
                <a
                  href={profile.cvPdfUrl}
                  download={language === 'en' ? 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf' : 'Mobile_Engineer_Nguyen_Duy_Trang.pdf'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.ctaDownloadCv}</span>
                </a>

                {/* Secondary: View Projects */}
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-all"
                >
                  <FolderGit2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>{t.ctaProjects}</span>
                </a>

                {/* Tertiary: Contact */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-semibold text-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t.ctaContact}</span>
                </a>
              </div>

            </div>

            {/* Right Column: Profile Avatar & Details (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="text-lg font-bold">{profile.name}</div>
                  <div className="text-xs text-slate-200 font-mono flex items-center justify-between">
                    <span>{profile.roleTitle}</span>
                    <span>{t.avatarLocation}</span>
                  </div>
                </div>
              </div>

              {/* View Online CV link */}
              <div className="mt-4 text-center">
                <a
                  href={profile.cvViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors"
                >
                  <span>{language === 'en' ? 'Open Printable CV (A4 View)' : 'Xem Bản In CV A4'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Highlighted Proof Points Row */}
        <div className="pt-4 reveal">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-xs uppercase tracking-widest font-mono text-slate-500 dark:text-slate-400 font-bold">
              {t.metricsTitle}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
              {t.metricsSub}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
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
