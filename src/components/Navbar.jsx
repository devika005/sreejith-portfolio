import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Download, 
  ArrowUpRight 
} from 'lucide-react';

export default function Navbar({ onOpenHireModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#090A0F]/90 backdrop-blur-xl border-b border-[#1F202B] shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand identity: Clean and human */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[#12131A] border border-[#1F202B] group-hover:border-[#8B5CF6]/50 flex items-center justify-center font-display font-bold text-sm text-[#F8FAFC] transition-colors">
            SV
          </div>
          <div>
            <div className="font-display font-bold text-base tracking-wide text-[#F8FAFC] group-hover:text-white transition-colors">
              SREEJITH V P
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#94A3B8]">
              Media Head &bull; Content Creator
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links: Clean editorial */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest font-medium text-[#94A3B8]">
          <a
            href="#professional-work"
            className="hover:text-[#F8FAFC] transition-colors"
          >
            01 Professional
          </a>
          <a
            href="#personal-work"
            className="hover:text-[#F8FAFC] transition-colors"
          >
            02 Personal POV
          </a>
          <a
            href="#experience"
            className="hover:text-[#F8FAFC] transition-colors"
          >
            Career
          </a>
          <a
            href="#arsenal"
            className="hover:text-[#F8FAFC] transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-[#F8FAFC] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Actions: Download CV & Hire */}
        <div className="flex items-center gap-3">
          {/* Direct Download CV */}
          <a
            href={`${import.meta.env.BASE_URL}images/sreejith resume.pdf`}
            download="Sreejith_V_P_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-[#12131A] border border-[#1F202B] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#2D3042] transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Download CV</span>
          </a>

          {/* Hire Sreejith Button */}
          <button
            onClick={onOpenHireModal}
            className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition-colors flex items-center gap-1.5"
          >
            <span>Hire Sreejith</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg bg-[#12131A] border border-[#1F202B] flex items-center justify-center text-[#94A3B8]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090A0F] border-b border-[#1F202B] px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4 text-sm uppercase tracking-widest">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#94A3B8] hover:text-[#F8FAFC] border-b border-[#1F202B]"
            >
              Overview
            </a>
            <a
              href="#professional-work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#94A3B8] hover:text-[#F8FAFC] border-b border-[#1F202B]"
            >
              01 &mdash; Professional Campaign Work
            </a>
            <a
              href="#personal-work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#94A3B8] hover:text-[#F8FAFC] border-b border-[#1F202B]"
            >
              02 &mdash; Personal Creative POV
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#94A3B8] hover:text-[#F8FAFC] border-b border-[#1F202B]"
            >
              Career
            </a>
            <a
              href="#arsenal"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#94A3B8] hover:text-[#F8FAFC] border-b border-[#1F202B]"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#94A3B8] hover:text-[#F8FAFC] border-b border-[#1F202B]"
            >
              Contact
            </a>
            <a
              href={`${import.meta.env.BASE_URL}images/sreejith resume.pdf`}
              download="Sreejith_V_P_Resume.pdf"
              className="py-2 text-[#8B5CF6] flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
