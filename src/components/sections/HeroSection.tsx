import React from 'react';
import { ArrowDown, Download, Sparkles, Terminal, FileText } from 'lucide-react';
import { profileData, verifiedStats } from '../../data/profileData';
import { StatCard } from '../common/StatCard';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const HeroSection: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-neu-pattern">
      {/* Background Soft Diffusion */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-white/60 via-sky-100/40 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fadeInUp">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Badge variant="emerald" size="md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {profileData.status}
          </Badge>
          <Badge variant="cyan" size="md">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Flutter & Native iOS / Android
          </Badge>
          <Badge variant="slate" size="md">
            <Terminal className="w-3.5 h-3.5 text-slate-600" />
            Clean Architecture & Vision AI
          </Badge>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight leading-[1.12] mb-6">
            Building High-Performance Mobile Experiences with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
              Vision AI & Clean Architecture
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl">
            {profileData.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Button
              asLink
              href="#astrobite"
              variant="primary"
              size="lg"
              icon={<ArrowDown className="w-4 h-4 text-sky-600" />}
              iconPosition="right"
            >
              Khám phá AstroBite v2.0
            </Button>

            <Button
              asLink
              href={profileData.cvPdfUrl}
              download="Mobile_Engineer_Nguyen_Duy_Trang.pdf"
              variant="outline"
              size="lg"
              icon={<Download className="w-4 h-4 text-sky-600" />}
            >
              Tải CV PDF (2 Trang)
            </Button>

            <Button
              asLink
              href={profileData.cvViewUrl}
              target="_blank"
              variant="ghost"
              size="lg"
              icon={<FileText className="w-4 h-4 text-slate-600" />}
            >
              Xem Bản In Web A4
            </Button>
          </div>
        </div>

        {/* 4 Verified Stats Grid */}
        <div className="pt-8 border-t border-slate-300/70 reveal">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-mono text-slate-500 font-semibold">
              Verified Production Metrics
            </span>
            <span className="text-xs text-slate-500 font-mono">
              Proven Commercial Track Record
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {verifiedStats.map((stat, idx) => (
              <div key={stat.label} className={`reveal stagger-${idx + 1}`}>
                <StatCard stat={stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
