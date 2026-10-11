import React, { useState } from 'react';
import { 
  Play, 
  ExternalLink, 
  Building2, 
  Film, 
  Sparkles, 
  Smartphone,
  Compass
} from 'lucide-react';
import { InstagramIcon } from './Icons';

export const VERIFIED_COLLECTIONS = {
  professional: [
    {
      id: "prof-1",
      reelId: "DdBwNtwOuw0",
      title: "Commercial Campaign Reel 01",
      client: "Past Client & Agency Work",
      category: "Commercial Videography & Editing",
      role: "Videographer & Video Editor",
      reelUrl: "https://www.instagram.com/reel/DdBwNtwOuw0/",
      tags: ["Video Editing", "Commercial Shoot", "Post-Production"],
      badge: "PROFESSIONAL WORK"
    },
    {
      id: "prof-2",
      reelId: "DVlUeCwk4xA",
      title: "LEAD College Media Reel 02",
      client: "LEAD College Autonomous",
      category: "Institutional Campus Media",
      role: "Media Head Direction",
      reelUrl: "https://www.instagram.com/reel/DVlUeCwk4xA/",
      tags: ["Campus Leadership", "Institutional Anthem", "Videography"],
      badge: "LEAD AUTONOMOUS"
    },
    {
      id: "prof-3",
      reelId: "DVYKVxrk6Fy",
      title: "Social Campaign Reel 03",
      client: "Brandaid Digital / Campaign Roster",
      category: "Commercial Social Campaign",
      role: "Videography & Editing",
      reelUrl: "https://www.instagram.com/reel/DVYKVxrk6Fy/",
      tags: ["Social Strategy", "Reels", "Visual Pacing"],
      badge: "AGENCY PRODUCTION"
    }
  ],
  personal: [
    {
      id: "pers-1",
      reelId: "DeGYfs6zFKv",
      title: "Creative POV Experiment 01",
      client: "@check.my_pov",
      category: "Independent Creative Project",
      role: "Visual Storyteller & Editor",
      reelUrl: "https://www.instagram.com/reel/DeGYfs6zFKv/",
      tags: ["Creative Editing", "Color Grading", "Visual Pacing"],
      badge: "PERSONAL EXPERIMENT"
    },
    {
      id: "pers-2",
      reelId: "Dd5hXn_zYUM",
      title: "Creative POV Experiment 02",
      client: "@check.my_pov",
      category: "Passion Project / Street Visuals",
      role: "Atmospheric Videography",
      reelUrl: "https://www.instagram.com/reel/Dd5hXn_zYUM/",
      tags: ["POV Videography", "Atmospheric", "Visual Rhythm"],
      badge: "STREET PERSPECTIVE"
    },
    {
      id: "pers-3",
      reelId: "DeOu3j9z6HM",
      title: "Creative POV Experiment 03",
      client: "@check.my_pov",
      category: "Passion Project / Editing Rhythm",
      role: "Editing & Sound Pacing",
      reelUrl: "https://www.instagram.com/reel/DeOu3j9z6HM/",
      tags: ["Vlog Aesthetic", "Visual Rhythm", "Content Creation"],
      badge: "PASSION REEL"
    }
  ]
};

// Backward-compatible export
export const VERIFIED_PROJECTS = VERIFIED_COLLECTIONS;

function ReelCard({ item, embedMode }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#12131A] border border-[#1F202B] hover:border-[#2D3042] transition-colors flex flex-col justify-between">
      {/* Card Header */}
      <div className="p-4 border-b border-[#1F202B] flex items-start justify-between gap-3">
        <div>
          <span className="inline-block text-[10px] font-mono font-medium uppercase px-2 py-0.5 rounded bg-[#181922] text-[#A78BFA] border border-[#1F202B] mb-1.5">
            {item.badge}
          </span>
          <h4 className="font-display font-bold text-sm text-[#F8FAFC] leading-snug">
            {item.title}
          </h4>
          <div className="text-[11px] text-[#94A3B8] mt-0.5">
            {item.client} &bull; {item.category}
          </div>
        </div>

        <a
          href={item.reelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-[#181922] hover:bg-[#8B5CF6] text-[#94A3B8] hover:text-white border border-[#1F202B] flex items-center justify-center transition-colors flex-shrink-0"
          title="Open in Instagram"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Reel Media: Live Embed or Fast Card */}
      <div className="relative w-full bg-[#090A0F] flex items-center justify-center overflow-hidden min-h-[460px]">
        {embedMode ? (
          <iframe
            src={`https://www.instagram.com/reel/${item.reelId}/embed/`}
            className="w-full h-[470px] border-0"
            allowTransparency="true"
            allow="encrypted-media"
            loading="lazy"
            title={item.title}
          />
        ) : (
          <div className="w-full h-[460px] p-6 flex flex-col justify-between items-center text-center bg-gradient-to-b from-[#12131A] to-[#090A0F]">
            <div className="w-full flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>9:16 VERTICAL</span>
              <span className="flex items-center gap-1 text-[#A78BFA]">
                <InstagramIcon className="w-3 h-3" />
                INSTAGRAM
              </span>
            </div>

            <div className="space-y-4 my-auto">
              <div className="w-16 h-16 rounded-full bg-[#181922] border border-[#1F202B] flex items-center justify-center mx-auto text-[#8B5CF6]">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#8B5CF6] uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h5 className="font-display font-bold text-base text-[#F8FAFC]">
                  {item.title}
                </h5>
                <p className="text-xs text-[#94A3B8] mt-1">
                  {item.role}
                </p>
              </div>
            </div>

            <div className="w-full text-[11px] font-mono text-zinc-500">
              Tap below to view full video
            </div>
          </div>
        )}
      </div>

      {/* Card Footer Details & Direct Action */}
      <div className="p-4 bg-[#12131A] border-t border-[#1F202B] flex flex-col gap-3">
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2 py-0.5 rounded bg-[#181922] text-[10px] font-mono text-[#94A3B8] border border-[#1F202B]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={item.reelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 rounded-lg bg-[#181922] hover:bg-[#8B5CF6] text-[#F8FAFC] hover:text-white border border-[#1F202B] hover:border-[#8B5CF6] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group"
        >
          <Play className="w-3.5 h-3.5 fill-current text-[#8B5CF6] group-hover:text-white" />
          <span>Watch Reel on Instagram</span>
          <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
        </a>
      </div>
    </div>
  );
}

export default function PortfolioShowcase() {
  const [embedMode, setEmbedMode] = useState(true);

  return (
    <div id="projects" className="py-24 relative z-10 border-t border-[#1F202B] space-y-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Gallery Global Controls */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-[#1F202B]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8B5CF6]">
            <Film className="w-4 h-4" />
            <span>CURATED REEL ARCHIVES</span>
          </div>

          <button
            onClick={() => setEmbedMode(!embedMode)}
            className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-[#12131A] hover:bg-[#181922] border border-[#1F202B] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5"
            title="Toggle Live Instagram Embeds or Fast Cards"
          >
            <Smartphone className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>{embedMode ? 'Live Embeds: ON' : 'Fast Cards: ON'}</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* COLLECTION 01 — PROFESSIONAL CAMPAIGN WORK                     */}
        {/* ============================================================== */}
        <section id="professional-work" className="mb-24">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12131A] border border-[#1F202B] text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>COLLECTION 01</span>
            </div>
            
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-[#F8FAFC] mb-3">
              01 &mdash; PROFESSIONAL CAMPAIGN WORK
            </h2>
            
            <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
              Verified video editing, videography, and campaign execution for past agency roles and institutional leadership.
            </p>
          </div>

          {/* 3-Card Grid for Professional Work */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VERIFIED_COLLECTIONS.professional.map((item) => (
              <ReelCard key={item.id} item={item} embedMode={embedMode} />
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* COLLECTION 02 — PERSONAL CREATIVE EXPERIMENTS                  */}
        {/* ============================================================== */}
        <section id="personal-work" className="pt-12 border-t border-[#1F202B]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12131A] border border-[#1F202B] text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3">
                <Compass className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>COLLECTION 02</span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-[#F8FAFC] mb-3">
                02 &mdash; PERSONAL CREATIVE EXPERIMENTS
              </h2>

              <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed">
                Independent content creation and visual storytelling demonstrating creative editing, color grading, and passion for video production.
              </p>
            </div>

            {/* Direct Badge / Link to @check.my_pov */}
            <a
              href="https://www.instagram.com/check.my_pov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#12131A] hover:bg-[#181922] border border-[#1F202B] hover:border-[#8B5CF6]/50 text-xs font-mono text-[#F8FAFC] transition-colors flex-shrink-0"
            >
              <InstagramIcon className="w-4 h-4 text-[#A78BFA]" />
              <span className="font-semibold">@check.my_pov</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#181922] text-[#A78BFA] border border-[#1F202B]">
                Creator Hub
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>

          {/* 3-Card Grid for Personal POV Work */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VERIFIED_COLLECTIONS.personal.map((item) => (
              <ReelCard key={item.id} item={item} embedMode={embedMode} />
            ))}
          </div>

          {/* Dedicated Creator Hub Callout Banner */}
          <div className="mt-14 p-6 rounded-2xl bg-[#12131A] border border-[#1F202B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#181922] border border-[#1F202B] flex items-center justify-center text-[#8B5CF6]">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-[#F8FAFC]">
                  Follow @check.my_pov on Instagram
                </h4>
                <p className="text-xs text-[#94A3B8]">
                  Explore regular street POV videos, sound design experiments, and visual hooks.
                </p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/check.my_pov"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <span>Visit @check.my_pov</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
