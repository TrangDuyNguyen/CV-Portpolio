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

export const App: React.FC = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#E8ECF2] dark:bg-[#0B1120] text-slate-800 dark:text-slate-100 selection:bg-sky-500/20 selection:text-sky-700 dark:selection:text-sky-300 transition-colors duration-250">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero / About & Key Highlights */}
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
