import React, { useState } from 'react';
import {
  Copy,
  Check,
  Download,
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowUpRight,
  Phone,
  MapPin,
} from 'lucide-react';
import { getProfileData } from '../../data/profileData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { GridCrosshairs, Magnetic } from '../common/KineticPrimitives';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const profile = getProfileData(language);
  const isVi = language === 'vi';

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="border-b border-[var(--line)] bg-[var(--bg)] relative">
      <div className="swiss-frame relative">
        <GridCrosshairs corners={['bl', 'br']} />

        {/* Monumental Contact Poster Top */}
        <div className="px-5 sm:px-8 lg:px-10 py-12 sm:py-16 border-b border-[var(--line)] reveal">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest mb-5">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-[var(--accent)] text-white font-bold">05</span>
              <span className="text-[var(--accent)] font-bold">// {t.statusBadge}</span>
            </div>
            <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
              <span className="w-2 h-2 bg-emerald-500 animate-pulse" />
              <span>{t.statusActive}</span>
            </div>
          </div>

          <h2 className="font-heading font-bold uppercase text-[clamp(2.4rem,6.5vw,6rem)] leading-[0.9] tracking-[-0.04em] text-[var(--text-primary)] mb-5">
            {isVi ? 'TRAO ĐỔI TRỰC TIẾP.' : "LET'S BUILD."}
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Exposed 12-Col Terminal Contact & Resume Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left 7 Cols: Direct Email + Phone + Location */}
          <div className="lg:col-span-7 lg:border-r border-[var(--line)] flex flex-col justify-between">
            {/* Email Block */}
            <div className="p-6 sm:p-8 lg:p-10 border-b border-[var(--line)] bg-[var(--bg-elevated)]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block mb-2">
                // {t.emailLabel}
              </span>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor="pointer"
                  className="font-heading font-bold text-xl sm:text-3xl text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors break-all"
                >
                  {profile.email}
                </a>

                <Magnetic>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    data-cursor="pointer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--bg-invert)] text-[var(--text-invert)] hover:bg-[var(--accent)] hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    title={t.copyTooltip}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{t.copiedText}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isVi ? 'COPY EMAIL' : 'COPY EMAIL'}</span>
                      </>
                    )}
                  </button>
                </Magnetic>
              </div>
            </div>

            {/* Phone + Location + Mailto */}
            <div className="grid grid-cols-1 sm:grid-cols-3 flex-1">
              <div className="p-6 border-b sm:border-b-0 sm:border-r border-[var(--line)]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] flex items-center gap-1.5 mb-2">
                  <Phone className="w-3 h-3 text-[var(--accent)]" />
                  <span>{t.phoneLabel}</span>
                </span>
                <a
                  href={`tel:${profile.phone}`}
                  data-cursor="pointer"
                  className="text-base font-mono font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                >
                  {profile.phone}
                </a>
              </div>

              <div className="p-6 border-b sm:border-b-0 sm:border-r border-[var(--line)]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] flex items-center gap-1.5 mb-2">
                  <MapPin className="w-3 h-3 text-[var(--accent)]" />
                  <span>{t.locationLabel}</span>
                </span>
                <span className="text-sm font-mono font-semibold text-[var(--text-primary)]">
                  {profile.location}
                </span>
              </div>

              <a
                href={`mailto:${profile.email}`}
                data-cursor="pointer"
                className="p-6 bg-[var(--bg-subtle)] hover:bg-[var(--accent)] text-[var(--text-primary)] hover:text-white flex items-center justify-between font-mono font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{t.viewWebBtn}</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right 5 Cols: A4 CV & Bilingual PDF + Social Matrix */}
          <div className="lg:col-span-5 border-t lg:border-t-0 border-[var(--line)] flex flex-col justify-between bg-[var(--bg-elevated)]">
            <div className="p-6 sm:p-8 border-b border-[var(--line)] space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold block mb-1">
                  // ATS RESUME 2-PAGE A4
                </span>
                <h3 className="font-heading font-bold uppercase text-lg text-[var(--text-primary)]">
                  {t.downloadTitle}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  {t.downloadDesc}
                </p>
              </div>

              <a
                href={profile.cvViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="w-full flex items-center justify-between px-5 py-3.5 bg-[var(--accent)] text-white hover:bg-[var(--bg-invert)] hover:text-[var(--text-invert)] font-mono font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>{isVi ? 'MỞ CV BẢN IN A4 TRỰC TIẾP' : 'OPEN PRINTABLE A4 CV'}</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 border border-[var(--line-strong)]">
                <a
                  href="/Mobile_Engineer_Nguyen_Duy_Trang.pdf?v=20261030_v2"
                  download="Mobile_Engineer_Nguyen_Duy_Trang.pdf"
                  data-cursor="pointer"
                  className="flex items-center justify-center gap-2 py-3 border-r border-[var(--line)] text-xs font-mono font-bold uppercase text-[var(--text-primary)] hover:bg-[var(--bg-invert)] hover:text-[var(--text-invert)] transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>PDF (VI)</span>
                </a>
                <a
                  href="/Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf?v=20261030_v2"
                  download="Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf"
                  data-cursor="pointer"
                  className="flex items-center justify-center gap-2 py-3 text-xs font-mono font-bold uppercase text-[var(--text-primary)] hover:bg-[var(--bg-invert)] hover:text-[var(--text-invert)] transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>PDF (EN)</span>
                </a>
              </div>
            </div>

            {/* GitHub & LinkedIn Exposed Cells */}
            <div className="grid grid-cols-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="brutalist-invert p-5 border-r border-[var(--line)] flex items-center justify-between font-mono font-bold text-xs uppercase tracking-wider"
              >
                <span className="inline-flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>GITHUB</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="brutalist-invert p-5 flex items-center justify-between font-mono font-bold text-xs uppercase tracking-wider"
              >
                <span className="inline-flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span>LINKEDIN</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
