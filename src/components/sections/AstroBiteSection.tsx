import React from 'react';
import {
  ArrowUpRight,
  Camera,
  Database,
  Sparkles,
  Check,
} from 'lucide-react';
import {
  getAstrobiteOverview,
  getAstrobitePillars,
  getAstrobiteFeatures,
} from '../../data/astrobiteData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';

export const AstroBiteSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].astrobite;
  const overview = getAstrobiteOverview(language);
  const pillars = getAstrobitePillars(language);
  const features = getAstrobiteFeatures(language);
  const isVi = language === 'vi';

  return (
    <section id="projects" className="py-24 md:py-36 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative">
      <span id="astrobite" className="absolute -top-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Project Identity */}
        <div className="mb-12 md:mb-16 reveal">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#141C2E] text-[#FFB648] border border-[rgba(244,242,234,0.12)]">
              {t.badgeFlagship}
            </span>
            <span className="text-xs font-mono text-[#8E96A4]">
              {overview.role}
            </span>
          </div>

          <div className="mb-4">
            <h2 className="font-display italic text-4xl sm:text-6xl lg:text-7xl text-[#F4F2EA] tracking-tight">
              AstroBite
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[#FFB648] mt-2 font-display italic">
              {overview.tagline}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#8E96A4] max-w-3xl font-light leading-relaxed" data-cursor="lens">
            {overview.description}
          </p>

          {/* Quick Stack (Editorial typographic flow, zero badge clutter) */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-6 text-xs font-mono text-[#8E96A4]">
            <span className="text-[#FFB648] font-semibold">// Stack:</span>
            {overview.stackBadges.map((b, bIdx) => (
              <React.Fragment key={b}>
                <span className="text-[#F4F2EA]/90 hover:text-[#FF6417] transition-colors">{b}</span>
                {bIdx < overview.stackBadges.length - 1 && (
                  <span className="text-[#8E96A4]/30 select-none">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 2. Product Visual First: Video Demo */}
        <div className="mb-20 md:mb-24 reveal">
          <div className="relative rounded-2xl overflow-hidden bg-[#0E131F] border border-[rgba(244,242,234,0.1)] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <div className="px-4 py-3 bg-[#08090A]/90 border-b border-[rgba(244,242,234,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-[#8E96A4]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6417] animate-pulse shrink-0" />
                <span className="font-medium text-[#F4F2EA]">{t.demoVideoTitle}</span>
              </div>
              <span className="text-[11px] text-[#8E96A4]/70">Flutter · Google Gemini · Riverpod</span>
            </div>

            <div className="relative aspect-video max-w-5xl mx-auto bg-black flex items-center justify-center">
              <video
                controls
                preload="metadata"
                poster="/screenshots/clay/cockpit_dashboard.png"
                className="w-full h-full object-contain"
              >
                <source src="/astrobite-demo.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ thẻ video.
              </video>
            </div>
          </div>
        </div>

        {/* 3. Vấn Đề & Cách Tiếp Cận (3 Core Pillars) */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[rgba(244,242,234,0.08)] gap-4 reveal">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#FFB648] mb-2">
                // {t.pillarsHeader}
              </p>
              <h3 className="font-display italic text-2xl sm:text-4xl text-[#F4F2EA]">
                {t.pillarsSub}
              </h3>
            </div>

            <a
              href="#gallery"
              data-cursor="pointer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FFB648] hover:text-[#FFF4DE] transition-colors"
            >
              <span>{t.viewScreensLink}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 reveal">
            {pillars.map((pillar, pIdx) => {
              const icons = [
                <Camera key="1" className="w-4 h-4 text-[#FF6417]" />,
                <Database key="2" className="w-4 h-4 text-[#FFB648]" />,
                <Sparkles key="3" className="w-4 h-4 text-[#FFF4DE]" />,
              ];

              return (
                <div key={pillar.id} className="space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-[#141C2E] border border-[rgba(244,242,234,0.08)]">
                        {icons[pIdx]}
                      </div>
                      <span className="text-xs font-mono text-[#FFB648]">
                        0{pIdx + 1} · {pillar.metricBadge}
                      </span>
                    </div>

                    <h4 className="text-lg font-medium text-[#F4F2EA] mb-2">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#8E96A4] leading-relaxed mb-4">
                      {pillar.description}
                    </p>

                    <ul className="space-y-2 border-t border-[rgba(244,242,234,0.06)] pt-3">
                      {pillar.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-[#8E96A4] flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FF6417] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#141C2E] text-[#8E96A4] border border-[rgba(244,242,234,0.06)]">
                      {pillar.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Một Số Chức Năng (Features) & Engineering Note */}
        <div className="pt-10 border-t border-[rgba(244,242,234,0.08)] reveal">
          <div className="mb-6 flex items-baseline justify-between">
            <h4 className="text-sm font-mono uppercase tracking-wider text-[#F4F2EA]">
              // {t.featuresHeader}
            </h4>
            <span className="text-xs font-mono text-[#8E96A4]/70">
              {isVi ? 'Tổng hợp tính năng' : 'Feature highlights'}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
            {features.map((feat) => (
              <div
                key={feat.id}
                className="p-3.5 rounded-xl bg-[#0E131F]/70 border border-[rgba(244,242,234,0.06)]"
              >
                <div className="text-xs font-medium text-[#F4F2EA] mb-1">
                  {feat.title}
                </div>
                <div className="text-[11px] text-[#8E96A4] leading-relaxed">
                  {feat.naturalDescription}
                </div>
              </div>
            ))}
          </div>

          {/* Engineering Note Box */}
          <div className="p-4 rounded-xl bg-[#141C2E]/60 border border-[rgba(244,242,234,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
            <div className="text-[#8E96A4]">
              <span className="text-[#FFB648] font-semibold">// Engineering note: </span>
              <span>{isVi ? 'Tập trung vào luồng dữ liệu offline-first, tích hợp AI và khả năng đồng bộ giữa dữ liệu cục bộ với backend.' : 'Focusing on offline-first data flows, AI integration, and robust local-to-backend synchronization.'}</span>
            </div>
            <a
              href="#gallery"
              data-cursor="pointer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F2EA] text-[#08090A] font-medium text-xs hover:bg-[#FFF4DE] transition-colors shrink-0"
            >
              <span>{t.viewScreensLink}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
