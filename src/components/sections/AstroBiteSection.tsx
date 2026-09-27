import React from 'react';
import { Camera, Cpu, LayoutGrid, Layers, ArrowUpRight, Check, Image as ImageIcon } from 'lucide-react';
import { astrobiteOverview, astrobitePillars } from '../../data/astrobiteData';
import { Badge } from '../common/Badge';

export const AstroBiteSection: React.FC = () => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'vision-ai':
        return <Camera className="w-5 h-5 text-sky-600" />;
      case 'genui-a2ui':
        return <Cpu className="w-5 h-5 text-emerald-600" />;
      case 'os-widgets':
        return <LayoutGrid className="w-5 h-5 text-purple-600" />;
      case 'clean-arch':
        return <Layers className="w-5 h-5 text-amber-600" />;
      default:
        return <Layers className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="astrobite" className="py-24 border-t border-slate-300/70 relative bg-[#E8ECF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Header */}
        <div className="mb-14 reveal">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="cyan" size="md">
              DỰ ÁN TIÊU BIỂU (FLAGSHIP) — {astrobiteOverview.version}
            </Badge>
            <Badge variant="slate" size="md">
              {astrobiteOverview.role}
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            {astrobiteOverview.name}:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
              {astrobiteOverview.tagline}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mb-6">
            {astrobiteOverview.description}
          </p>

          {/* Quick Metrics Bar - Inset Neumorphic Cells */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mb-6">
            {astrobiteOverview.metrics.map((m, idx) => (
              <div key={m.label} className={`p-3.5 rounded-xl bg-[#E8ECF2] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] border border-white/60 reveal stagger-${idx + 1}`}>
                <span className="block text-xl font-bold text-slate-800 font-mono">{m.value}</span>
                <span className="text-xs text-slate-500">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2.5">
            {astrobiteOverview.stackBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs rounded-xl bg-[#E8ECF2] text-slate-700 shadow-[3px_3px_6px_#c5d1e2,-3px_-3px_6px_#ffffff] border border-white/80 font-mono"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Architectural Pillars Bento Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 reveal">
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">
              4 Đột Phá Kiến Trúc Trọng Yếu
            </h3>
            <span className="text-xs font-mono text-sky-700 font-semibold">
              Deep Engineering Breakdown
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {astrobitePillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className={`bg-[#E8ECF2] rounded-2xl p-6 sm:p-7 relative group shadow-[7px_7px_15px_#c2cee0,-7px_-7px_15px_#ffffff] hover:shadow-[10px_10px_20px_#bed0e2,-10px_-10px_20px_#ffffff] border border-white/80 transition-all duration-300 flex flex-col justify-between reveal stagger-${(idx % 2) + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#E8ECF2] shadow-[inset_3px_3px_6px_#c4d0de,inset_-3px_-3px_6px_#ffffff] border border-white/60">
                        {getPillarIcon(pillar.id)}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-500 block">
                          Pillar {pillar.number} • {pillar.tag}
                        </span>
                        <h4 className="text-lg font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                          {pillar.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {pillar.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-300/60 flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#E8ECF2] text-sky-700 shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] border border-sky-300/60">
                    {pillar.metricBadge}
                  </span>
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-sky-600 font-medium transition-colors"
                  >
                    <span>Xem màn hình thực tế</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery CTA banner */}
        <div className="p-6 rounded-2xl bg-[#E8ECF2] shadow-[8px_8px_18px_#c2cee0,-8px_-8px_18px_#ffffff] border border-white/90 flex flex-col sm:flex-row items-center justify-between gap-4 reveal">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#E8ECF2] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] border border-white/60 text-sky-600">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-slate-800">
                Bộ sưu tập ảnh chụp màn hình ứng dụng thực tế
              </h4>
              <p className="text-xs text-slate-500">
                Khám phá giao diện Celestial UI, AR Camera Scanner và trợ lý AstroCoach GenUI.
              </p>
            </div>
          </div>
          <a
            href="#gallery"
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#E8ECF2] text-sky-700 shadow-[4px_4px_8px_#c5d1e2,-4px_-4px_8px_#ffffff] hover:shadow-[6px_6px_12px_#bed0e2,-6px_-6px_12px_#ffffff] active:shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff] border border-white/80 transition-all shrink-0"
          >
            Khám phá Gallery bên dưới ↓
          </a>
        </div>
      </div>
    </section>
  );
};
