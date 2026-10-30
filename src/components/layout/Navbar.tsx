import React, { useState, useEffect } from 'react';
import { Download, Github, Menu, X, Globe } from 'lucide-react';
import { getProfileData } from '../../data/profileData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].navbar;
  const profile = getProfileData(language);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['hero', 'about', 'experience', 'projects', 'skills', 'engineering', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.navAbout, href: '#about' },
    { label: t.navExperience, href: '#experience' },
    { label: t.navProjects, href: '#projects' },
    { label: t.navSkills, href: '#skills' },
    { label: t.navEngineering, href: '#engineering' },
    { label: t.navContact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#08090A] border-b border-[rgba(244,242,234,0.08)] shadow-[0_4px_24px_rgba(0,0,0,0.7)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#hero" data-cursor="pointer" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#141C2E] border border-[rgba(244,242,234,0.12)] text-[#FFB648] group-hover:border-[#FF6417] group-hover:text-[#FFF4DE] font-bold text-xs flex items-center justify-center transition-all font-mono">
            DT
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-xs sm:text-sm text-[#F4F2EA] tracking-tight group-hover:text-[#FFB648] transition-colors">
                {profile.name}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF6417] animate-pulse" />
            </div>
            <p className="text-[10px] text-[#8E96A4] font-mono hidden sm:block">
              {profile.roleTitle}
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                data-cursor="pointer"
                className={`text-xs font-mono px-3 py-1.5 rounded-full transition-all ${
                  isActive
                    ? 'bg-[#141C2E] text-[#FFF4DE] border border-[rgba(244,242,234,0.18)] font-semibold shadow-[0_0_12px_rgba(255,100,23,0.15)]'
                    : 'text-[#8E96A4] hover:text-[#F4F2EA] hover:bg-[#141C2E]/40'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            data-cursor="pointer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold rounded-full bg-[#141C2E]/70 border border-[rgba(244,242,234,0.1)] text-[#F4F2EA] hover:border-[#FF6417] transition-all cursor-pointer"
            aria-label={t.langSwitchTooltip}
          >
            <Globe className="w-3.5 h-3.5 text-[#FFB648]" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* GitHub Link */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="p-2 text-[#8E96A4] hover:text-[#F4F2EA] rounded-full bg-[#141C2E]/70 border border-[rgba(244,242,234,0.1)] hover:border-[#FF6417] transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          {/* Download CV Button */}
          <a
            href={profile.cvPdfUrl}
            download={language === 'en' ? 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf' : 'Mobile_Engineer_Nguyen_Duy_Trang.pdf'}
            data-cursor="pointer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F4F2EA] hover:bg-[#FFF4DE] text-[#08090A] font-medium text-xs transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.downloadCv}</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            data-cursor="pointer"
            className="px-2 py-1 text-xs font-mono font-bold rounded-lg bg-[#141C2E] border border-[rgba(244,242,234,0.1)] text-[#F4F2EA]"
            aria-label={t.langSwitchTooltip}
          >
            {language.toUpperCase()}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-cursor="pointer"
            className="p-2 text-[#8E96A4] hover:text-[#F4F2EA] rounded-lg bg-[#141C2E] border border-[rgba(244,242,234,0.1)]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 bg-black/80 backdrop-blur-sm -z-10 animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden bg-[#0C0E12] border-b border-[rgba(244,242,234,0.12)] px-6 py-6 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.95)] animate-in slide-in-from-top-2 duration-200 relative z-50">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono text-[#F4F2EA]/90 hover:text-[#FF6417] py-2.5 border-b border-[rgba(244,242,234,0.06)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 flex items-center justify-between">
              <a
                href={profile.cvPdfUrl}
                download={language === 'en' ? 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf' : 'Mobile_Engineer_Nguyen_Duy_Trang.pdf'}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F4F2EA] hover:bg-[#FFF4DE] text-[#08090A] text-xs font-medium shadow-sm transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t.downloadCv}</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#141C2E] text-[#8E96A4] hover:text-[#F4F2EA] border border-[rgba(244,242,234,0.1)] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
