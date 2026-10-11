import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  TrendingUp,
  Sparkles
} from 'lucide-react';

export default function TimelineSection() {
  const experiences = [
    {
      period: '2025 — Present',
      role: 'Media Head',
      company: 'LEAD College Autonomous',
      location: 'Palakkad, India',
      badge: 'CURRENT ROLE',
      icon: Briefcase,
      achievements: [
        'Lead complete video production, photography, editing, and social media content creation for institutional campaigns and events.',
        'Develop content concepts and execute end-to-end production workflows, including shooting, editing, and publishing.',
        'Produced and managed 100+ videos across campaigns, events, and digital content initiatives.',
        'Delivered campaign content exceeding 2M+ views, demonstrating strong audience reach and content performance.',
        'Coordinate content planning and publishing to maintain consistent social media output and campaign visibility.'
      ]
    },
    {
      period: 'Jan 2023 — Dec 2024',
      role: 'Social Media Manager',
      company: 'Brandaid Digital',
      location: 'Palakkad, India',
      badge: 'AGENCY EXPERIENCE',
      icon: TrendingUp,
      achievements: [
        'Managed social media presence across Instagram and Facebook, supporting brand visibility and audience engagement.',
        'Planned and maintained content calendars for consistent campaign execution and publishing schedules.',
        'Created and edited visual content through photography, videography, reels/shorts, and post-production workflows.',
        'Supported social media campaigns from content planning and production through publishing and ongoing optimization.'
      ]
    },
    {
      period: '2016 — 2019',
      role: 'Bachelor of Commerce (B.Com)',
      company: 'Sadanam Institute of Commerce and Management Studies (SICOMS)',
      location: 'Palakkad, India',
      badge: 'EDUCATION',
      icon: GraduationCap,
      achievements: [
        'Graduated with Bachelor of Commerce degree with business economics and financial analysis coursework.',
        'Specialized coursework in Digital Marketing, laying the groundwork for data-informed audience engagement and campaign metrics.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-[#1F202B]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12131A] border border-[#1F202B] text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>VERIFIED CAREER HISTORY</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-[#F8FAFC] mb-4">
            Experience &amp; Leadership
          </h2>
          <p className="text-sm md:text-base text-[#94A3B8] font-light">
            Proven background spanning agency client rosters, institutional campus leadership, and finance education.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical Timeline Rule */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[1px] -translate-x-1/2 bg-[#1F202B]" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Subtle Node on Timeline Axis */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1 z-20 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#090A0F] border-2 border-[#8B5CF6] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                    </div>
                  </div>

                  {/* Content Card Container */}
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="p-6 rounded-2xl bg-[#12131A] border border-[#1F202B] hover:border-[#2D3042] transition-colors">
                      
                      {/* Top Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-medium tracking-wider uppercase bg-[#181922] text-[#A78BFA] border border-[#1F202B]">
                          {item.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                          <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="font-display font-bold text-lg md:text-xl text-[#F8FAFC] mb-1">
                        {item.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#94A3B8] font-medium mb-4">
                        <span className="text-[#F8FAFC] font-semibold">{item.company}</span>
                        <span className="text-zinc-600">&bull;</span>
                        <span className="flex items-center gap-1 text-zinc-400">
                          <MapPin className="w-3 h-3 text-zinc-500" />
                          {item.location}
                        </span>
                      </div>

                      {/* Bulleted Achievements */}
                      <ul className="space-y-2 text-xs md:text-sm text-[#94A3B8] font-light">
                        {item.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
