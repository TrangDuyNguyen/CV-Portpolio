import React, { useEffect, useRef, useState } from 'react';
import { AquaProjectItem } from '../../data/aquaPortfolioData';
import { useLanguage } from '../../context/LanguageContext';

interface AquaProjectCardProps {
  project: AquaProjectItem;
  index: number;
  cursorLabel: string;
  onSelect: (project: AquaProjectItem) => void;
}

const AnimatedPreviewOverlay: React.FC<{ project: AquaProjectItem }> = ({ project }) => {
  const [slideIdx, setSlideIdx] = useState(0);
  const slides = project.previewSlides && project.previewSlides.length > 0
    ? project.previewSlides
    : [project.previewImage];

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % slides.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  if (project.previewVideo) {
    return (
      <div className="relative w-[82%] aspect-[16/10] rounded-[5px] overflow-hidden bg-black shadow-2xl border border-white/20">
        <video
          src={project.previewVideo}
          autoPlay
          loop
          muted
          playsInline
          poster={project.previewImage}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 left-2.5 px-2 py-0.5 bg-black/80 text-white font-montreal text-[10px] uppercase tracking-widest">
          {project.metrics[0]?.value} · {project.metrics[2]?.value}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-[82%] aspect-[16/10] rounded-[5px] overflow-hidden bg-[#0e0f12] shadow-2xl border border-white/20 flex flex-col justify-between p-3.5 text-white">
      <img
        src={slides[slideIdx]}
        alt={project.fullName}
        className="absolute inset-0 w-full h-full object-cover opacity-85 transition-opacity duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/30" />

      <div className="relative z-10 flex items-center justify-between text-[10px] font-montreal uppercase tracking-widest text-white/80">
        <span>{project.role}</span>
        <span className="px-1.5 py-0.5 bg-white text-black font-bold">
          {project.metrics[0]?.value}
        </span>
      </div>

      <div className="relative z-10">
        <p className="font-clash-bold text-[14px] sm:text-[16px] uppercase tracking-tight leading-tight text-white">
          {project.fullName}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-1.5 py-0.5 text-[9px] font-montreal uppercase tracking-wider bg-white/15 text-white/95 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AquaProjectCard: React.FC<AquaProjectCardProps> = ({
  project,
  cursorLabel,
  onSelect,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      if (!cardRef.current || !imgRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      if (rect.bottom < -100 || rect.top > vh + 100) return;
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const offset = (clamped - 0.5) * -75;
      imgRef.current.style.transform = `scale(1.2) translate3d(0, ${offset}px, 0)`;
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(onScroll);
    };

    onScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      data-cursor-label={cursorLabel}
      onClick={() => onSelect(project)}
      className="cursor-proj-img view group relative flex flex-col lg:flex-row lg:justify-between py-12 lg:py-20 select-none"
    >
      {/* 1. Left: Giant 20vw Stacked 2-Line Clash Grotesk Bold Title */}
      <div className="relative z-[10] pointer-events-none">
        <h3 className="font-clash-bold uppercase text-[27vw] sm:text-[23vw] md:text-[18.5vw] leading-[82%] sm:leading-[88%] md:leading-[96%] tracking-[-0.03em] text-black">
          <span className="block overflow-hidden">
            <span className="block transition-transform duration-500 group-hover:translate-x-2">
              {project.titleLines[0]}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block transition-transform duration-500 group-hover:translate-x-4">
              {project.titleLines[1]}
            </span>
          </span>
        </h3>
      </div>

      {/* 2. Center-Right Overlap: Vertical 504x700px Parallax Cover + Overlaid GIF/Video Preview */}
      <div className="relative lg:absolute lg:w-[35vw] lg:max-w-[504px] lg:left-[44%] lg:top-[75px] z-[100] my-6 lg:my-0">
        <div
          className="relative w-full h-[390px] md:h-[440px] lg:h-[520px] xl:h-[680px] rounded-[7px] overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: project.themeAccent || '#111111' }}
        >
          <img
            ref={imgRef}
            src={project.coverImage}
            alt={project.fullName}
            loading="lazy"
            className={`ukiyo absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out will-change-transform ${
              project.darkenCover ? 'brightness-50' : 'brightness-[0.55]'
            }`}
            style={{ transform: 'scale(1.2)' }}
          />

          {/* Top Metadata Strip inside Cover Frame */}
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-[11px] font-montreal uppercase tracking-[0.14em] text-white/80">
            <span>{project.period}</span>
            <span>{project.companyOrContext.split('·')[0]}</span>
          </div>

          {/* Center Overlaid Preview (400x218px equivalent, w-[82%]) */}
          <div className="relative z-20 w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
            <AnimatedPreviewOverlay project={project} />
          </div>

          {/* Bottom Metric Pills inside Cover Frame */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-[11px] font-montreal uppercase tracking-[0.12em] text-white/90">
            <span>{project.metrics[1]?.value}</span>
            <span className="underline underline-offset-4">
              {cursorLabel} →
            </span>
          </div>
        </div>
      </div>

      {/* 3. Far Right Bottom: Concise Uppercase Editorial Description (xl:w-[19%]) */}
      <div className="xl:w-[19%] lg:w-[22%] lg:self-end text-left uppercase font-montreal text-[15px] big:text-[18px] leading-[1.35] text-black mt-2 lg:mt-0 z-[20]">
        <p>{project.shortDesc}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.metrics.slice(0, 2).map((m) => (
            <span
              key={m.label}
              className="inline-block px-2 py-0.5 text-[11px] border border-black font-medium"
            >
              {m.value}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

interface AquaProjectModalProps {
  project: AquaProjectItem | null;
  onClose: () => void;
}

export const AquaProjectModal: React.FC<AquaProjectModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[850] bg-black/75 flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[1040px] max-h-[90vh] overflow-y-auto bg-white text-black border-2 border-black p-6 sm:p-10 lg:p-12"
      >
        {/* Top Bar */}
        <div className="flex items-start justify-between gap-4 border-b-[1.5px] border-black pb-5">
          <div>
            <p className="font-montreal text-[12px] uppercase tracking-[0.18em] text-[#666]">
              {project.companyOrContext} · {project.period}
            </p>
            <h2 className="mt-1 font-clash-bold text-[26px] sm:text-[38px] uppercase leading-[1.05]">
              {project.fullName}
            </h2>
            <p className="mt-1 font-montreal text-[14px] uppercase tracking-wider text-[#1e2022]">
              {language === 'en' ? 'Role:' : 'Vai trò:'} <strong>{project.role}</strong>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 px-4 py-2 bg-black text-white font-montreal text-[13px] uppercase tracking-widest hover:bg-[#1e2022]"
          >
            {language === 'en' ? 'CLOSE [ESC]' : 'ĐÓNG [ESC]'}
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="border border-black p-3.5">
              <div className="font-montreal text-[11px] uppercase tracking-wider text-[#666]">
                {m.label}
              </div>
              <div className="mt-1 font-clash-bold text-[17px] sm:text-[20px] uppercase leading-tight">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Contributions (PORTFOLIO_PROFILE.md verified bullets) */}
        <div className="my-6">
          <h3 className="font-montreal text-[13px] uppercase tracking-[0.16em] text-[#666] mb-3">
            {language === 'en'
              ? '// ARCHITECTURE & PRODUCTION CONTRIBUTIONS'
              : '// ĐÓNG GÓP KỸ THUẬT & KIẾN TRÚC THỰC TẾ'}
          </h3>
          <ul className="space-y-2.5">
            {project.bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-montreal text-[15px] leading-[1.55] text-[#1e2022]"
              >
                <span className="font-clash-bold text-[13px] mt-0.5">
                  0{i + 1}
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="my-6">
          <h3 className="font-montreal text-[13px] uppercase tracking-[0.16em] text-[#666] mb-3">
            // TECH STACK
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-black text-white font-montreal text-[12px] uppercase tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshots Preview Strip */}
        {project.previewSlides && project.previewSlides.length > 0 && (
          <div className="mt-6 pt-6 border-t border-black/20">
            <h3 className="font-montreal text-[13px] uppercase tracking-[0.16em] text-[#666] mb-3">
              // PRODUCTION SCREENS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.previewSlides.slice(0, 3).map((src, idx) => (
                <div
                  key={idx}
                  className="aspect-[9/16] max-h-[300px] rounded-[5px] overflow-hidden border border-black/15 bg-[#f5f5f5]"
                >
                  <img
                    src={src}
                    alt={`${project.fullName} screen ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {project.externalUrl && (
          <div className="mt-6 pt-4 border-t border-black flex justify-end">
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-black text-white font-montreal text-[13px] uppercase tracking-widest hover:opacity-85"
            >
              {language === 'en' ? 'VIEW ON GOOGLE PLAY ↗' : 'XEM TRÊN GOOGLE PLAY ↗'}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
