import React from 'react';
import {
  ArrowUpRight,
  Camera,
  Mic,
  Database,
} from 'lucide-react';
import { getAstrobiteOverview, getAstrobitePillars } from '../../data/astrobiteData';
import { useLanguage } from '../../context/LanguageContext';

export const AstroBiteSection: React.FC = () => {
  const { language } = useLanguage();
  const overview = getAstrobiteOverview(language);
  const pillars = getAstrobitePillars(language);
  const isVi = language === 'vi';

  return (
    <section id="projects" className="py-24 md:py-36 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative">
      <span id="astrobite" className="absolute -top-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Case Study Header */}
        <div className="mb-16 md:mb-24 reveal">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#141C2E] text-[#FFB648] border border-[rgba(244,242,234,0.12)]">
              {isVi ? 'DỰ ÁN TIÊU BIỂU' : 'FLAGSHIP CASE STUDY'}
            </span>
            <span className="text-xs font-mono text-[#8E96A4]">
              {overview.role} · 2026
            </span>
          </div>

          <h2 className="font-display italic text-4xl sm:text-6xl lg:text-7xl text-[#F4F2EA] tracking-tight mb-6">
            AstroBite —{' '}
            <span className="text-[#FF6417] not-italic">
              {overview.tagline}
            </span>
          </h2>

          <p className="text-base sm:text-xl text-[#8E96A4] max-w-3xl font-light leading-relaxed" data-cursor="lens">
            {overview.description}
          </p>

          {/* Quick Metrics Hairline Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-6 border-t border-[rgba(244,242,234,0.08)]">
            {overview.metrics.map((m, idx) => (
              <div key={idx}>
                <div className="text-xs font-mono text-[#8E96A4] uppercase tracking-wider mb-1">
                  {m.label}
                </div>
                <div className="text-sm sm:text-base font-mono font-medium text-[#F4F2EA]">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Showcase: Video Walkthrough + Heroic Screenshots */}
        <div className="mb-24 reveal">
          <div className="relative rounded-2xl overflow-hidden bg-[#0E131F] border border-[rgba(244,242,234,0.1)] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            
            {/* Top Bar Indicator */}
            <div className="px-4 py-3 bg-[#08090A]/90 border-b border-[rgba(244,242,234,0.08)] flex items-center justify-between text-xs font-mono text-[#8E96A4]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6417] animate-pulse" />
                <span>AstroBite Interactive Production Demo</span>
              </div>
              <span className="text-[11px] text-[#8E96A4]/60">Flutter · Google Gemini · Riverpod</span>
            </div>

            {/* Video / Poster Box */}
            <div className="relative aspect-video max-w-5xl mx-auto bg-black flex items-center justify-center">
              <video
                controls
                preload="metadata"
                poster="/screenshots/clay/cockpit_dashboard.png"
                className="w-full h-full object-contain"
              >
                <source src="/astrobite-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* 3 Core Engineering Decisions (Editorial Asymmetric Layout) */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[rgba(244,242,234,0.08)] gap-4 reveal">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#FFB648] mb-2">
                {isVi ? '// Giải Pháp Kỹ Thuật' : '// Core Architectural Decisions'}
              </p>
              <h3 className="font-display italic text-2xl sm:text-4xl text-[#F4F2EA]">
                {isVi ? 'Thách Thức & Lựa Chọn Kiến Trúc' : 'Challenges & Engineering Decisions'}
              </h3>
            </div>

            <a
              href="#gallery"
              data-cursor="pointer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FFB648] hover:text-[#FFF4DE] transition-colors"
            >
              <span>{isVi ? 'Xem toàn bộ 12 màn hình giao diện' : 'Explore full 12 production screens'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 reveal">
            {pillars.slice(0, 3).map((pillar, pIdx) => {
              const icons = [
                <Camera key="1" className="w-5 h-5 text-[#FF6417]" />,
                <Mic key="2" className="w-5 h-5 text-[#FFB648]" />,
                <Database key="3" className="w-5 h-5 text-[#FFF4DE]" />,
              ];

              return (
                <div key={pillar.id} className="space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-[#141C2E] border border-[rgba(244,242,234,0.08)]">
                        {icons[pIdx]}
                      </div>
                      <span className="text-xs font-mono text-[#FFB648]">
                        Story {pillar.number} · {pillar.metricBadge}
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
                          <span className="text-[#FF6417] mt-0.5">·</span>
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

      </div>
    </section>
  );
};
