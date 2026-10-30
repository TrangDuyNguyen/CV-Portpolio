import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { EditorialStatement } from './components/sections/EditorialStatement';
import { CareerSection } from './components/sections/CareerSection';
import { AstroBiteSection } from './components/sections/AstroBiteSection';
import { GalleryLightbox } from './components/sections/GalleryLightbox';
import { SkillsSection } from './components/sections/SkillsSection';
import { EngineeringSection } from './components/sections/EngineeringSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { CustomCursor } from './components/common/CustomCursor';
import { SparksCanvas } from './components/common/SparksCanvas';

export const App: React.FC = () => {
  // Lenis smooth inertial scrolling
  useSmoothScroll();
  // Scroll reveal trigger
  useScrollReveal();

  return (
    <div className="u-grain min-h-screen bg-[#08090A] text-[#F4F2EA] selection:bg-[#FF6417]/30 selection:text-[#FFF4DE] transition-colors duration-250 relative">
      {/* Minimal Scroll Progress Bar */}
      <ScrollProgress />

      {/* Physics Sparks Engine on Click */}
      <SparksCanvas />

      {/* Contextual Precision Cursor for Desktop */}
      <CustomCursor />

      {/* Top Floating Glass Navigation */}
      <Navbar />

      {/* Main Editorial Content */}
      <main>
        {/* 1. Cinematic Forge Hero (Shader + Scroll-driven reverse) */}
        <HeroSection />

        {/* 2. Editorial Statement (One engineer from architecture to release) */}
        <EditorialStatement />

        {/* 3. Professional Commercial Experience (Finviet & Hahalolo) */}
        <CareerSection />

        {/* 4. Selected Work: AstroBite Case Study & Architecture */}
        <AstroBiteSection />

        {/* 5. Production UI Screenshots & Lightbox */}
        <GalleryLightbox />

        {/* 6. Technical Competencies & Capabilities */}
        <SkillsSection />

        {/* 7. Engineering Approach & Concrete Principles */}
        <EngineeringSection />

        {/* 8. Contact & Resume Action */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;
