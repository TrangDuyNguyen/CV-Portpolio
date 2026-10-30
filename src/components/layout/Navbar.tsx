import React, { useState, useEffect } from 'react';
import { Download, Github, Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { getProfileData } from '../../data/profileData';
import { translations } from '../../data/translations';
import { Button } from '../common/Button';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].navbar;
  const profile = getProfileData(language);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['about', 'experience', 'projects', 'skills', 'engineering', 'contact'];
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
    { label: t.navContact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090A]/85 backdrop-blur-md border-b border-[rgba(244,242,234,0.08)] shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#about" data-cursor="pointer" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#141C2E] border border-[rgba(244,242,234,0.15)] text-[#FFB648] group-hover:border-[#FF6417] group-hover:text-[#FFF4DE] font-bold text-xs flex items-center justify-center shadow-sm group-hover:scale-105 transition-all font-mono">
            DT
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-[#F4F2EA] tracking-tight group-hover:text-[#FFB648] transition-colors">
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
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                data-cursor="pointer"
                className={`text-xs lg:text-sm font-medium px-3 py-1.5 rounded-xl transition-all ${
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
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold font-mono rounded-xl bg-[#141C2E]/70 border border-[rgba(244,242,234,0.1)] text-[#F4F2EA] hover:border-[#FF6417] transition-all cursor-pointer shadow-sm"
            aria-label={t.langSwitchTooltip}
          >
            <Globe className="w-3.5 h-3.5 text-[#FFB648]" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            data-cursor="pointer"
            className="p-2 text-[#8E96A4] hover:text-[#F4F2EA] rounded-xl bg-[#141C2E]/70 border border-[rgba(244,242,234,0.1)] hover:border-[#FF6417] transition-all cursor-pointer shadow-sm"
            aria-label={theme === 'dark' ? t.themeDarkTooltip : t.themeLightTooltip}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#FFB648]" />
            ) : (
              <Moon className="w-4 h-4 text-[#F4F2EA]" />
            )}
          </button>

          {/* GitHub Link */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="p-2 text-[#8E96A4] hover:text-[#F4F2EA] rounded-xl bg-[#141C2E]/70 border border-[rgba(244,242,234,0.1)] hover:border-[#FF6417] transition-all shadow-sm"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Download CV Button */}
          <a
            href={profile.cvPdfUrl}
            download={language === 'en' ? 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf' : 'Mobile_Engineer_Nguyen_Duy_Trang.pdf'}
            data-cursor="pointer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F4F2EA] hover:bg-[#FFF4DE] text-[#08090A] font-medium text-xs shadow-sm transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.downloadCv}</span>
          </a>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 text-xs font-bold font-mono rounded-lg bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-sm"
            aria-label={t.langSwitchTooltip}
          >
            <Globe className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-slate-600 dark:text-slate-300 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-sm"
            aria-label={theme === 'dark' ? t.themeDarkTooltip : t.themeLightTooltip}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 dark:text-slate-200 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 shadow-sm focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F5F7]/95 dark:bg-[#090D15]/95 backdrop-blur-lg border-b border-slate-200 dark:border-white/10 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-fadeInUp">
          <nav className="space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-400 border border-sky-300/70 dark:border-sky-700/60 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Nguyen Duy Trang • Mobile
            </span>
            <Button
              asLink
              href={profile.cvPdfUrl}
              download={language === 'en' ? 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf' : 'Mobile_Engineer_Nguyen_Duy_Trang.pdf'}
              variant="primary"
              size="sm"
              icon={<Download className="w-3.5 h-3.5 text-white" />}
            >
              {t.downloadCv}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
