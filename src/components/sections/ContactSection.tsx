import React, { useState } from 'react';
import { Copy, Check, Download, Github, Linkedin, Mail, FileText, ArrowUpRight } from 'lucide-react';
import { getProfileData } from '../../data/profileData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';

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
    <section id="contact" className="py-24 md:py-36 border-t border-[rgba(244,242,234,0.08)] bg-[#08090A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Editorial Lead */}
        <div className="max-w-4xl mb-16 md:mb-20 reveal">
          <p className="text-xs font-mono uppercase tracking-widest text-[#FFB648] mb-3">
            // {t.statusBadge}
          </p>

          <h2 className="font-display italic text-4xl sm:text-6xl lg:text-7xl text-[#F4F2EA] tracking-tight mb-6">
            {t.title}
          </h2>

          <p className="text-base sm:text-xl text-[#8E96A4] font-light leading-relaxed max-w-2xl" data-cursor="lens">
            {t.description}
          </p>
        </div>

        {/* Minimalist Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-10 border-t border-[rgba(244,242,234,0.08)] reveal">
          
          {/* Email & Phone Direct Row */}
          <div className="md:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono text-[#8E96A4] uppercase tracking-wider block mb-2">
                {t.emailLabel}
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor="pointer"
                  className="font-sans font-medium text-xl sm:text-2xl lg:text-3xl text-[#F4F2EA] hover:text-[#FF6417] transition-colors break-all tracking-tight"
                >
                  {profile.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  data-cursor="pointer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141C2E] border border-[rgba(244,242,234,0.1)] text-xs font-mono text-[#8E96A4] hover:text-[#FFF4DE] hover:border-[#FF6417] transition-all cursor-pointer"
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
                      <span>{isVi ? 'Sao chép' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[rgba(244,242,234,0.06)]">
              <div>
                <span className="text-xs font-mono text-[#8E96A4] uppercase tracking-wider block mb-1">
                  {t.phoneLabel}
                </span>
                <a
                  href={`tel:${profile.phone}`}
                  data-cursor="pointer"
                  className="text-base sm:text-lg font-mono text-[#F4F2EA] hover:text-[#FF6417] transition-colors"
                >
                  {profile.phone}
                </a>
              </div>

              <div>
                <span className="text-xs font-mono text-[#8E96A4] uppercase tracking-wider block mb-1">
                  {t.locationLabel}
                </span>
                <span className="text-base sm:text-lg font-mono text-[#F4F2EA]">
                  {profile.location}
                </span>
              </div>
            </div>

            {/* Main Email CTA Button */}
            <div className="pt-4">
              <a
                href={`mailto:${profile.email}`}
                data-cursor="pointer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F4F2EA] text-[#08090A] hover:bg-[#FFF4DE] hover:shadow-[0_0_24px_rgba(255,182,72,0.4)] font-medium text-xs sm:text-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>{isVi ? 'Gửi email cho tôi' : 'Send an email'}</span>
              </a>
            </div>
          </div>

          {/* Direct Actions & Resume */}
          <div className="md:col-span-5 md:pl-8 md:border-l md:border-[rgba(244,242,234,0.08)] space-y-6">
            <div>
              <span className="text-xs font-mono text-[#8E96A4] uppercase tracking-wider block mb-3">
                {t.downloadTitle}
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={profile.cvPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F4F2EA] text-[#08090A] hover:bg-[#FFF4DE] hover:shadow-[0_0_24px_rgba(255,182,72,0.4)] font-medium text-xs sm:text-sm transition-all duration-200"
                >
                  <FileText className="w-3.5 h-3.5 text-[#FF6417]" />
                  <span>{isVi ? 'Xem CV' : 'View CV'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#08090A]/70" />
                </a>

                <a
                  href={profile.cvPdfUrl}
                  download={isVi ? 'Mobile_Engineer_Nguyen_Duy_Trang.pdf' : 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf'}
                  data-cursor="pointer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#141C2E] border border-[rgba(244,242,234,0.12)] text-[#8E96A4] hover:border-[#FF6417] hover:text-[#FFF4DE] text-xs font-mono transition-all duration-200"
                  title={isVi ? 'Tải tệp PDF về máy' : 'Download PDF file'}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.downloadPdfBtn}</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[rgba(244,242,234,0.06)]">
              <span className="text-xs font-mono text-[#8E96A4] uppercase tracking-wider block mb-3">
                {isVi ? 'Kênh Chuyên Môn' : 'Professional Channels'}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="p-3 rounded-full bg-[#141C2E] border border-[rgba(244,242,234,0.1)] text-[#F4F2EA] hover:text-[#FF6417] hover:border-[#FF6417] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="p-3 rounded-full bg-[#141C2E] border border-[rgba(244,242,234,0.1)] text-[#F4F2EA] hover:text-[#FF6417] hover:border-[#FF6417] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
