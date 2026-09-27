import React, { useState, useEffect } from 'react';
import { Download, Github, Menu, X } from 'lucide-react';
import { profileData } from '../../data/profileData';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['about', 'astrobite', 'career', 'engineering', 'skills', 'contact'];
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
    { label: 'Giới thiệu', href: '#about' },
    { label: 'AstroBite v2.0', href: '#astrobite' },
    { label: 'Kinh nghiệm', href: '#career' },
    { label: 'Kỷ luật Kỹ thuật', href: '#engineering' },
    { label: 'Kỹ năng', href: '#skills' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#E8ECF2]/90 backdrop-blur-md border-b border-white/60 shadow-[0_6px_16px_#cad6e4]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden neu-flat-sm border border-white/90 flex items-center justify-center p-0.5 group-hover:scale-105 transition-all">
            <img
              src={profileData.avatarUrl}
              alt={profileData.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800 tracking-tight group-hover:text-sky-600 transition-colors">
                {profileData.name}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[11px] text-slate-500 font-mono hidden sm:block">
              {profileData.roleTitle} ({profileData.levelTag})
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs lg:text-sm font-medium px-3 py-1.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-[#E8ECF2] text-sky-700 shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] border border-sky-300/70 font-semibold'
                    : 'text-slate-600 hover:text-sky-600 hover:shadow-[inset_2px_2px_4px_#c5d1e2,inset_-2px_-2px_4px_#ffffff]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-600 hover:text-slate-900 rounded-xl bg-[#E8ECF2] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] border border-white/80 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <Button
            asLink
            href={profileData.cvPdfUrl}
            download="Mobile_Engineer_Nguyen_Duy_Trang.pdf"
            variant="outline"
            size="sm"
            icon={<Download className="w-3.5 h-3.5 text-sky-600" />}
          >
            Tải CV (PDF)
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 rounded-xl bg-[#E8ECF2] shadow-[3px_3px_6px_#c2cee0,-3px_-3px_6px_#ffffff] active:shadow-[inset_2px_2px_4px_#c2cee0,inset_-2px_-2px_4px_#ffffff] border border-white/80 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#E8ECF2] border-b border-slate-300/80 shadow-[0_10px_20px_#cad6e4] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-700 hover:text-sky-600 py-2 font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-300/80 flex items-center justify-between">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 py-1"
            >
              <Github className="w-4 h-4" /> GitHub Profile
            </a>
            <Button
              asLink
              href={profileData.cvPdfUrl}
              download="Mobile_Engineer_Nguyen_Duy_Trang.pdf"
              variant="outline"
              size="sm"
              icon={<Download className="w-3.5 h-3.5 text-sky-600" />}
            >
              Tải CV (PDF)
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
