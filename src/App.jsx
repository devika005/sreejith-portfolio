import React, { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsCounter from './components/StatsCounter';
import PortfolioShowcase, { VERIFIED_PROJECTS } from './components/PortfolioShowcase';
import TimelineSection from './components/TimelineSection';
import SkillsArsenal from './components/SkillsArsenal';
import RecruitmentContact from './components/RecruitmentContact';
import Footer from './components/Footer';
import HireModal from './components/HireModal';

// Re-export verified projects for modular access
export { VERIFIED_PROJECTS };

export default function App() {
  const [hireModalOpen, setHireModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F8FAFC] relative selection:bg-[#8B5CF6]/25 selection:text-[#F8FAFC]">
      {/* Subtle Warm Particle Canvas */}
      <BackgroundCanvas />

      {/* Header Navigation */}
      <Navbar
        onOpenHireModal={() => setHireModalOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* Humanized Hero Section with Profile Card */}
        <HeroSection
          onOpenHireModal={() => setHireModalOpen(true)}
        />

        {/* Real Metrics Banner */}
        <StatsCounter />

        {/* 9:16 Vertical Reel Showcase with Official Instagram Embeds */}
        <PortfolioShowcase />

        {/* Verified Career Timeline & Experience */}
        <TimelineSection />

        {/* Production Arsenal & Capabilities */}
        <SkillsArsenal />

        {/* Recruitment & Direct Contact Hub */}
        <RecruitmentContact
          onOpenHireModal={() => setHireModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Hire Modal */}
      <HireModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
      />
    </div>
  );
}
