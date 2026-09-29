import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AstroBiteSection } from './components/sections/AstroBiteSection';
import { GalleryLightbox } from './components/sections/GalleryLightbox';
import { CareerSection } from './components/sections/CareerSection';
import { EngineeringSection } from './components/sections/EngineeringSection';
import { SkillsSection } from './components/sections/SkillsSection';
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
        {/* 1. Hero & Verified Stats */}
        <HeroSection />

        {/* 2. Flagship Project: AstroBite v2.5.1 */}
        <AstroBiteSection />

        {/* 3. Showcase Gallery & Lightbox Walkthrough */}
        <GalleryLightbox />

        {/* 4. Commercial Career Milestones */}
        <CareerSection />

        {/* 5. Ponytail Engineering Mindset & 8-Gate SOP */}
        <EngineeringSection />

        {/* 6. Technical Skills Matrix */}
        <SkillsSection />

        {/* 7. Contact & Download CV */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
