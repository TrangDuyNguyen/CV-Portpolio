import React, { useState, useEffect } from 'react';
import { Github, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { getProfileData } from '../../data/profileData';
import { translations } from '../../data/translations';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language].navbar;
  const profile = getProfileData(language);
  const isDark = theme === 'dark';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'projects', 'experience', 'gallery', 'skills', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', label: t.navAbout, href: '#hero' },
    { num: '02', label: t.navProjects, href: '#projects' },
    { num: '03', label: t.navExperience, href: '#experience' },
    { num: '04', label: t.navGallery, href: '#gallery' },
    { num: '05', label: t.navSkills, href: '#skills' },
    { num: '06', label: t.navContact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--bg-glass)] backdrop-blur-md border-b border-[var(--line)]">
      <div className="swiss-frame h-14 flex items-stretch justify-between">
        {/* Cell 1: Identity Stamp */}
        <a
          href="#hero"
          data-cursor="pointer"
          className="flex items-center gap-3 px-4 sm:px-6 border-r border-[var(--line)] group shrink-0 hover:bg-[var(--bg-subtle)] transition-colors"
        >
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="w-7 h-7 object-cover border border-[var(--line-strong)] grayscale-[20%] group-hover:grayscale-0 transition-all"
          />
          <div className="leading-none">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-[var(--text-primary)]">
                {profile.name}
              </span>
              <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
            </div>
            <span className="text-[10px] font-mono text-[var(--text-muted)] hidden sm:block mt-0.5">
              MOBILE.ARCH // HCMC
            </span>
          </div>
        </a>

        {/* Cell 2: Numbered Brutalist Navigation */}
        <nav className="hidden lg:flex items-stretch flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                data-cursor="pointer"
                className={`relative flex items-center gap-1.5 px-4 text-[11px] font-mono uppercase tracking-wider border-r border-[var(--line)] first:border-l transition-colors ${
                  isActive
                    ? 'bg-[var(--bg-invert)] text-[var(--text-invert)] font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                }`}
              >
                <span className={isActive ? 'text-[var(--accent)]' : 'opacity-50'}>
                  {link.num}
                </span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Cell 3: Controls & CV Action (Desktop) */}
        <div className="hidden md:flex items-stretch shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            data-cursor="pointer"
            className="flex items-center gap-1.5 px-3.5 text-[11px] font-mono uppercase tracking-wider border-l border-[var(--line)] text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--accent)] transition-colors cursor-pointer"
            aria-label={isDark ? t.themeLightTooltip : t.themeDarkTooltip}
            title={isDark ? t.themeLightTooltip : t.themeDarkTooltip}
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            <span className="hidden xl:inline">{isDark ? 'LIGHT' : 'DARK'}</span>
          </button>

          <button
            type="button"
            onClick={toggleLanguage}
            data-cursor="pointer"
            className="flex items-center px-3.5 text-[11px] font-mono font-bold uppercase tracking-wider border-l border-[var(--line)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--accent)] transition-colors cursor-pointer"
            aria-label={t.langSwitchTooltip}
            title={t.langSwitchTooltip}
          >
            {language === 'vi' ? 'VI / EN' : 'EN / VI'}
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="flex items-center px-3.5 border-l border-[var(--line)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={profile.cvViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="flex items-center gap-1.5 px-5 bg-[var(--accent)] text-white hover:bg-[var(--bg-invert)] hover:text-[var(--text-invert)] font-mono font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>{language === 'vi' ? 'CV A4' : 'RESUME'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-stretch">
          <button
            type="button"
            onClick={toggleTheme}
            className="px-3 border-l border-[var(--line)] text-[var(--text-primary)] flex items-center"
            aria-label={isDark ? t.themeLightTooltip : t.themeDarkTooltip}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-3 border-l border-[var(--line)] text-xs font-mono font-bold text-[var(--text-primary)] flex items-center"
            aria-label={t.langSwitchTooltip}
          >
            {language.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-3.5 border-l border-[var(--line)] text-[var(--text-primary)] flex items-center"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Exposed Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-14 bg-black/60 backdrop-blur-sm -z-10"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden bg-[var(--bg)] border-b border-[var(--line-strong)] relative z-50">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--line)] text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] hover:bg-[var(--bg-invert)] hover:text-[var(--text-invert)] transition-colors"
              >
                <span>
                  <span className="text-[var(--accent)] mr-2">{link.num}</span>
                  {link.label}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            ))}
            <div className="grid grid-cols-2">
              <a
                href={profile.cvViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 bg-[var(--accent)] text-white font-mono text-xs font-bold uppercase tracking-wider"
              >
                <span>{language === 'vi' ? 'MỞ CV A4' : 'VIEW A4 CV'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 bg-[var(--bg-subtle)] text-[var(--text-primary)] font-mono text-xs font-bold uppercase tracking-wider border-l border-[var(--line)]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
