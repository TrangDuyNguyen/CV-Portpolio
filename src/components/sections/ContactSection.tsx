import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Download, Github, Linkedin, ExternalLink, FileText } from 'lucide-react';
import { getProfileData } from '../../data/profileData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const profile = getProfileData(language);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-300/70 dark:border-slate-800 bg-[#E8ECF2] dark:bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 reveal">
            <Badge variant="emerald" size="md" className="mb-3">
              {profile.status}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight mb-4">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Minimalist Neumorphic Contact Console */}
          <div className="bg-[#E8ECF2] dark:bg-[#151F32] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-[10px_10px_22px_#c0cdda,-10px_-10px_22px_#ffffff] dark:shadow-[10px_10px_22px_#04060d,-10px_-10px_22px_#1E2D44] border border-white/90 dark:border-slate-800 relative overflow-hidden reveal">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-slate-300/60 dark:border-slate-800 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">
                  {t.terminalChannel}
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                {t.statusActive}
              </span>
            </div>

            {/* Contact Rows - Inset Sunken Cavities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Email */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#E8ECF2] dark:bg-[#0D1524] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/60 dark:border-slate-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#E8ECF2] dark:bg-[#151F32] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] text-sky-600 dark:text-sky-400 border border-white/80 dark:border-slate-700/60 shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">{t.emailLabel}</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl bg-[#E8ECF2] dark:bg-[#151F32] shadow-[2px_2px_5px_#c5d1e2,-2px_-2px_5px_#ffffff] dark:shadow-[2px_2px_5px_#050811,-2px_-2px_5px_#1E2D44] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_2px_2px_4px_#050811,inset_-2px_-2px_4px_#1A283E] border border-white/70 dark:border-slate-700/60 transition-all cursor-pointer shrink-0"
                  title={t.copyTooltip}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#E8ECF2] dark:bg-[#0D1524] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/60 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#E8ECF2] dark:bg-[#151F32] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] text-emerald-600 dark:text-emerald-400 border border-white/80 dark:border-slate-700/60 shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">{t.phoneLabel}</span>
                    <a
                      href={`tel:${profile.phone}`}
                      className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded-lg bg-[#E8ECF2] dark:bg-[#151F32] text-slate-600 dark:text-slate-400 shadow-[inset_1px_1px_2px_#c5d1e2,inset_-1px_-1px_2px_#ffffff] dark:shadow-[inset_1px_1px_2px_#050811,inset_-1px_-1px_2px_#1E2D44]">
                  VN (+84)
                </span>
              </div>

              {/* Location */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#E8ECF2] dark:bg-[#0D1524] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/60 dark:border-slate-800 flex items-center gap-3">
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#E8ECF2] dark:bg-[#151F32] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#050811,-3px_-3px_6px_#1E2D44] text-purple-600 dark:text-purple-400 border border-white/80 dark:border-slate-700/60 shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">{t.locationLabel}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                    {t.locationValue}
                  </span>
                </div>
              </div>

              {/* Profiles */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#E8ECF2] dark:bg-[#0D1524] shadow-[inset_3px_3px_6px_#c5d1e2,inset_-3px_-3px_6px_#ffffff] dark:shadow-[inset_3px_3px_6px_#050811,inset_-3px_-3px_6px_#1A283E] border border-white/60 dark:border-slate-800 flex items-center justify-around">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <div className="w-px h-6 bg-slate-300 dark:bg-slate-700" />
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Bottom Download CV Action */}
            <div className="pt-5 sm:pt-6 border-t border-slate-300/60 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                  {t.downloadTitle}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.downloadDesc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Button
                  asLink
                  href={profile.cvPdfUrl}
                  download={language === 'en' ? 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf' : 'Mobile_Engineer_Nguyen_Duy_Trang.pdf'}
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto text-center justify-center"
                  icon={<Download className="w-4 h-4 text-sky-600 dark:text-sky-400" />}
                >
                  {t.downloadPdfBtn}
                </Button>

                <Button
                  asLink
                  href={profile.cvViewUrl}
                  target="_blank"
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto text-center justify-center"
                  icon={<FileText className="w-4 h-4 text-slate-600 dark:text-slate-300" />}
                >
                  {t.viewWebBtn}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
