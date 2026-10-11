import React from 'react';
import { 
  Camera, 
  Scissors, 
  Share2, 
  Palette, 
  CheckCircle2, 
  Cpu, 
  Globe
} from 'lucide-react';

export default function SkillsArsenal() {
  const categories = [
    {
      title: 'Media Production',
      icon: Camera,
      badge: 'PRODUCTION',
      skills: [
        'End-to-End Video Production',
        'Videography & Dynamic Framing',
        'Photography & Lighting Setups',
        'Multi-Camera Shoot Coordination',
        'Gimbal & Motion Stability',
        'Field Audio & Lavaliers'
      ],
      gearHighlight: 'Sony Cinema & Mirrorless / DJI Ronin Gimbal / Audio Lavs'
    },
    {
      title: 'Post-Production & Editing',
      icon: Scissors,
      badge: 'POST PIPELINE',
      skills: [
        'Adobe Premiere Pro',
        'CapCut (Pacing & Short-Form)',
        'Speed Ramping & Match Cuts',
        'Color Grading & Film Curves',
        'Sound Design & Foley Sync',
        'Audio Leveling & Mastering'
      ],
      gearHighlight: 'Adobe Creative Cloud / LUTs / 4K Timeline Optimization'
    },
    {
      title: 'Social Media Management',
      icon: Share2,
      badge: 'GROWTH STRATEGY',
      skills: [
        'Instagram & Facebook Strategy',
        'Audience Retention Hooks',
        'Content Calendars & Scheduling',
        'Performance Analytics Review',
        'Vertical 9:16 Optimization',
        'Campaign Publishing Workflows'
      ],
      gearHighlight: 'Meta Business Suite / Content Scheduling / Insights Engine'
    },
    {
      title: 'Design & Visual Strategy',
      icon: Palette,
      badge: 'CREATIVE',
      skills: [
        'Canva Design & Thumbnails',
        'Concept Storyboarding',
        'Brand Style Consistency',
        'Production Crew Leadership',
        'Multilingual Delivery',
        'Creative Pitches & Treatments'
      ],
      gearHighlight: 'Canva Pro / Pitch Decks / Storyboards'
    }
  ];

  return (
    <section id="arsenal" className="py-24 relative z-10 border-t border-[#1F202B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12131A] border border-[#1F202B] text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-[#F8FAFC] mb-4">
            Production &amp; Post Arsenal
          </h2>
          <p className="text-sm md:text-base text-[#94A3B8] font-light">
            Hands-on technical proficiency across shooting, video editing, social strategy, and creative direction.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#12131A] border border-[#1F202B] hover:border-[#2D3042] transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#181922] border border-[#1F202B] flex items-center justify-center text-[#8B5CF6]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-zinc-500 bg-[#181922] px-2 py-0.5 rounded border border-[#1F202B]">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#F8FAFC] mb-4 leading-snug">
                    {cat.title}
                  </h3>

                  {/* Skills List */}
                  <ul className="space-y-2 mb-6 text-xs text-[#94A3B8]">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Highlight */}
                <div className="pt-4 border-t border-[#1F202B] text-[11px] font-mono text-[#94A3B8]">
                  <span className="text-zinc-500 block text-[10px]">TOOLKIT HIGHLIGHT:</span>
                  <span className="text-[#F8FAFC]">{cat.gearHighlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Multilingual & Location Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-[#12131A] border border-[#1F202B] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-[#8B5CF6]" />
            <span>
              <strong className="text-[#F8FAFC]">Languages:</strong> English, Malayalam, Tamil
            </span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Palakkad, Kerala &bull; Available for on-location shoots and remote editing contracts</span>
          </div>
        </div>

      </div>
    </section>
  );
}
