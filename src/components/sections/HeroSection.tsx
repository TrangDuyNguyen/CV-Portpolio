import React, { useState } from 'react';
import { ArrowDown, Download, FileText, Briefcase } from 'lucide-react';
import { MorphIcon } from 'morphicons/react';
import { Smartphone, Layers, Boxes, Sparkles, Bot, Zap, Handshake, ShieldCheck } from 'lucide';
import { profileData, verifiedStats } from '../../data/profileData';
import { StatCard } from '../common/StatCard';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

const heroBullets = [
  {
    iconA: Smartphone,
    iconB: Layers,
    title: '5 năm thực chiến đa lĩnh vực',
    text: 'Xây dựng ứng dụng iOS, Android & Flutter cho Mạng xã hội, Chat/OTT, CRM, Delivery và hệ thống phần cứng chuyên dụng (POS, Kiosk self-order).',
  },
  {
    iconA: Boxes,
    iconB: Sparkles,
    title: 'Kiến trúc sạch & Chuyển đổi Product bền bỉ',
    text: 'Thành thạo MVVM / Clean Architecture; năng lực chuẩn hóa các dự án outsource làm gấp thành sản phẩm Product sạch sẽ, tối ưu hiệu năng và dễ bảo trì lâu dài.',
  },
  {
    iconA: Bot,
    iconB: Zap,
    title: 'Ứng dụng AI & Đón đầu xu hướng công nghệ',
    text: 'Tận dụng AI-assisted engineering để tăng tốc độ delivery, đồng thời tiên phong tích hợp Multimodal Vision AI (Gemini) và Generative UI vào app di động.',
  },
];

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
      className="group flex items-start gap-4 p-4 neu-flat-sm rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 flex-shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-sm">
        <MorphIcon icon={hovered ? iconB : iconA} size={22} strokeWidth={2} />
      </div>
      <div>
        <span className="text-slate-900 font-bold block text-sm sm:text-base mb-0.5 group-hover:text-sky-600 transition-colors">
          {title}
        </span>
        <span className="text-slate-600 text-xs sm:text-sm leading-relaxed block">
          {text}
        </span>
      </div>
    </li>
  );
};

const MissionCallout: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group mb-8 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-sky-500/10 via-blue-500/5 to-transparent border-l-4 border-sky-500 text-slate-700 text-xs sm:text-sm leading-relaxed animate-fadeInUp flex items-center gap-3.5 cursor-pointer"
      style={{ animationDelay: '200ms' }}
    >
      <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 flex-shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
        <MorphIcon icon={hovered ? ShieldCheck : Handshake} size={20} strokeWidth={2} />
      </div>
      <p>
        <strong className="text-slate-900 font-bold">Mục tiêu đồng hành:</strong> Xây dựng những sản phẩm mobile chất lượng cao, có khả năng scale mở rộng và cam kết đồng hành lâu dài cùng doanh nghiệp.
      </p>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-neu-pattern">
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-gradient-to-br from-sky-200/30 via-blue-100/20 to-transparent pointer-events-none rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-gradient-to-tl from-indigo-200/20 via-violet-100/10 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Grid: Info on left, Avatar Card on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Left Column: Introduction & Details */}
          <div className="lg:col-span-7">
            {/* Status badge */}
            <div className="flex items-center mb-6 animate-fadeInUp" style={{ animationDelay: '0ms' }}>
              <Badge variant="emerald" size="md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to Work
              </Badge>
            </div>

            {/* Main headline */}
            <div className="animate-fadeInUp" style={{ animationDelay: '80ms' }}>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-sky-600 mb-2 tracking-normal">
                Xin chào, tôi là
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-3">
                <span className="text-slate-900">Nguyen Duy</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
                  Trang
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-600 tracking-tight mb-8">
                Mobile Engineer (Mid-Level) &nbsp;·&nbsp; Flutter · iOS · Android · AI
              </p>
            </div>

            {/* Bio — 3 bullet points */}
            <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '160ms' }}>
              <ul className="space-y-3">
                {heroBullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 p-4 neu-flat-sm rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-2xl leading-none mt-0.5 flex-shrink-0">{b.icon}</span>
                    <div>
                      <span className="text-slate-900 font-bold block text-sm sm:text-base mb-0.5">
                        {b.title}
                      </span>
                      <span className="text-slate-600 text-xs sm:text-sm leading-relaxed block">
                        {b.text}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission / Value Proposition */}
            <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-sky-500/10 via-blue-500/5 to-transparent border-l-4 border-sky-500 text-slate-700 text-xs sm:text-sm leading-relaxed animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              <p>
                <strong className="text-slate-900 font-bold">Mục tiêu đồng hành:</strong> Xây dựng những sản phẩm mobile chất lượng cao, có khả năng scale mở rộng và cam kết đồng hành lâu dài cùng doanh nghiệp.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 animate-fadeInUp" style={{ animationDelay: '240ms' }}>
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

          {/* Right Column: Profile Avatar Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fadeInUp" style={{ animationDelay: '140ms' }}>
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              {/* Ambient subtle glow around avatar */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-400/25 via-blue-500/20 to-indigo-500/25 rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Neumorphic Frame */}
              <div className="relative neu-flat-lg rounded-[2.25rem] p-4 bg-[#E8ECF2] border border-white/80">
                {/* Photo wrapper */}
                <div className="relative rounded-[1.75rem] overflow-hidden aspect-[3/4] bg-slate-200 border border-white/60 shadow-inner">
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Floating pill: Open to Work */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-white/80 flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open to Work</span>
                  </div>

                  {/* Gradient overlay at bottom of photo for text contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <p className="font-bold text-base leading-tight drop-shadow-sm">{profileData.name}</p>
                      <p className="text-xs text-slate-200 font-mono drop-shadow-sm mt-0.5">
                        TP. Hồ Chí Minh · Sinh năm 2000
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Card: 5 Năm Kinh Nghiệm */}
                <div className="mt-3.5 p-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/90 flex items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">5 Năm Kinh Nghiệm</span>
                      <span className="text-[11px] text-slate-500 font-mono block">Flutter · Swift · Kotlin</span>
                    </div>
                  </div>
                  <div className="text-right pl-2.5 border-l border-slate-200/80">
                    <span className="text-xs font-bold text-slate-800 block">Full-time</span>
                    <span className="text-[10px] text-sky-600 font-mono block font-medium">Hybrid · Remote</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Stats */}
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
