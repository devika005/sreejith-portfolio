import React from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import ProfileCard from './ProfileCard';
import { InstagramIcon } from './Icons';

export default function HeroSection({ onOpenHireModal }) {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Subtle Identity Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12131A] border border-[#1F202B] text-xs font-mono tracking-wider text-[#94A3B8] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
          <span>LEAD College Autonomous Media Head</span>
          <span className="text-zinc-600">&bull;</span>
          <span>Palakkad, Kerala</span>
        </div>

        {/* Main Grid: Headline & CTAs on Left, Professional Portrait Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] text-[#F8FAFC] uppercase mb-6">
              Every Frame <br />
              <span className="text-editorial-gradient">Has a Story.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#94A3B8] font-light max-w-2xl leading-relaxed mb-8">
              Hi, I'm <strong className="text-[#F8FAFC] font-semibold">Sreejith V P</strong> &mdash; a videographer, video editor, and media head. I produce high-impact brand campaigns, institutional documentaries, and high-retention vertical reels, with over <span className="text-[#F8FAFC] font-medium">100+ videos produced</span> and <span className="text-[#F8FAFC] font-medium">2M+ organic views</span>.
            </p>

            {/* Clean, Grounded Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Explore Reels Button */}
              <a
                href="#professional-work"
                className="px-6 py-3.5 rounded-xl font-display text-sm font-semibold tracking-wider uppercase bg-[#8B5CF6] hover:bg-[#7C3AED] text-white transition-colors duration-200 flex items-center gap-2 shadow-sm"
              >
                <span>View Campaign Reels</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download Verified CV */}
              <a
                href={`${import.meta.env.BASE_URL}images/sreejith resume.pdf`}
                download="Sreejith_V_P_Resume.pdf"
                className="px-6 py-3.5 rounded-xl font-display text-sm font-medium tracking-wider uppercase bg-[#12131A] hover:bg-[#181922] border border-[#1F202B] hover:border-[#2D3042] text-[#F8FAFC] transition-colors duration-200 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#8B5CF6]" />
                <span>Download CV</span>
              </a>

              {/* Instagram POV Link */}
              <a
                href="https://www.instagram.com/check.my_pov/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5"
              >
                <InstagramIcon className="w-4 h-4 text-[#A78BFA]" />
                <span>@check.my_pov</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Grounded Human Portrait Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfileCard />
          </div>

        </div>

        {/* Real Career Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#1F202B]">
          <div className="p-4 rounded-xl bg-[#12131A] border border-[#1F202B]">
            <div className="font-display font-bold text-2xl md:text-3xl text-[#F8FAFC]">
              100<span className="text-[#8B5CF6]">+</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-[#94A3B8] font-mono mt-1">
              Videos Produced
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#12131A] border border-[#1F202B]">
            <div className="font-display font-bold text-2xl md:text-3xl text-[#F8FAFC]">
              2M<span className="text-[#8B5CF6]">+</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-[#94A3B8] font-mono mt-1">
              Organic Reach
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#12131A] border border-[#1F202B]">
            <div className="font-display font-bold text-2xl md:text-3xl text-[#F8FAFC]">
              LEAD College
            </div>
            <div className="text-xs uppercase tracking-wider text-[#94A3B8] font-mono mt-1">
              Media Head (Autonomous)
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#12131A] border border-[#1F202B]">
            <div className="font-display font-bold text-2xl md:text-3xl text-[#F8FAFC]">
              4+ Years
            </div>
            <div className="text-xs uppercase tracking-wider text-[#94A3B8] font-mono mt-1">
              Production Experience
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
