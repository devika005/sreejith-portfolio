import React, { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsCounter from './components/StatsCounter';
import PortfolioShowcase from './components/PortfolioShowcase';
import TimelineSection from './components/TimelineSection';
import SkillsArsenal from './components/SkillsArsenal';
import RecruitmentContact from './components/RecruitmentContact';
import Footer from './components/Footer';
import HireModal from './components/HireModal';

export default function App() {
  const [hireModalOpen, setHireModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F8FAFC] relative selection:bg-[#8B5CF6]/25 selection:text-[#F8FAFC]">
      <BackgroundCanvas />

      <Navbar onOpenHireModal={() => setHireModalOpen(true)} />

      <main className="relative z-10">
        <HeroSection onOpenHireModal={() => setHireModalOpen(true)} />
        <StatsCounter />
        <PortfolioShowcase />
        <TimelineSection />
        <SkillsArsenal />
        <RecruitmentContact onOpenHireModal={() => setHireModalOpen(true)} />
      </main>

      <Footer />
      <HireModal isOpen={hireModalOpen} onClose={() => setHireModalOpen(false)} />
    </div>
  );
}