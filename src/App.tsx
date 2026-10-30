import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { CareerSection } from './components/sections/CareerSection';
import { AstroBiteSection } from './components/sections/AstroBiteSection';
import { GalleryLightbox } from './components/sections/GalleryLightbox';
import { SkillsSection } from './components/sections/SkillsSection';
import { EngineeringSection } from './components/sections/EngineeringSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { CustomCursor } from './components/common/CustomCursor';

export const App: React.FC = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#F4F5F7] dark:bg-[#090D15] text-slate-800 dark:text-slate-100 selection:bg-sky-500/20 selection:text-sky-700 dark:selection:text-cyan-300 transition-colors duration-250 relative">
      {/* 2px Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Interactive Cursor for Desktop */}
      <CustomCursor />

      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero / Cinematic Editorial Showcase */}
        <HeroSection />

        {/* 2. Professional Commercial Experience (Finviet & Hahalolo) */}
        <CareerSection />

        {/* 3. Selected Projects: AstroBite Case Study & Architecture */}
        <AstroBiteSection />

        {/* 4. AstroBite Production UI Screenshots & Lightbox */}
        <GalleryLightbox />

        {/* 5. Technical Skills & Architecture Competencies */}
        <SkillsSection />

        {/* 6. Engineering Approach & Principles */}
        <EngineeringSection />

        {/* 7. Contact & Resume Download */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
