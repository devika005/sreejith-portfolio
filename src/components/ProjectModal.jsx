import React, { useEffect } from 'react';
import { 
  X, 
  Play, 
  Flame, 
  Tag, 
  CheckCircle2, 
  Camera, 
  Sliders, 
  Clock, 
  Share2,
  ExternalLink
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#0B0B0F]/90 backdrop-blur-xl animate-fadeIn">
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#11111A] border border-[#9B5CFF]/40 shadow-[0_0_60px_rgba(155,92,255,0.3)] z-10 p-6 md:p-8 flex flex-col md:flex-row gap-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/[0.08] hover:bg-red-500/20 hover:text-red-400 border border-white/[0.1] flex items-center justify-center text-zinc-300 transition-colors"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: 9:16 Vertical Reel Visual */}
        <div className="w-full md:w-5/12 flex-shrink-0">
          <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden border border-white/[0.1] bg-black shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

            {/* Simulated Live Playback Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-zinc-200">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>ACTIVE REEL</span>
            </div>

            {/* Bottom info on video preview */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#9B5CFF]/80 backdrop-blur-md text-white text-xs font-mono font-bold">
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Simulated Loop &bull; 9:16 Aspect</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Case Study & Technical Breakdown */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Header badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-[#9B5CFF]/20 text-[#C084FC] border border-[#9B5CFF]/30">
                {project.badge}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/[0.05] text-zinc-300 border border-white/[0.1]">
                {project.client}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2 leading-tight">
              {project.title}
            </h3>

            <p className="text-sm font-mono text-[#9B5CFF] mb-6 flex items-center gap-2">
              <Flame className="w-4 h-4" />
              <span>Performance: {project.metrics}</span>
            </p>

            {/* Summary */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                Creative Overview &amp; Execution
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                {project.summary}
              </p>
            </div>

            {/* Production Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <div>
                <span className="text-zinc-500 block">ROLE ON PRODUCTION:</span>
                <span className="text-white font-semibold">{project.role}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">DELIVERABLE FORMAT:</span>
                <span className="text-white font-semibold">Vertical 9:16 (Optimized for IG Reels / Shorts)</span>
              </div>
              <div>
                <span className="text-zinc-500 block">POST-PRODUCTION:</span>
                <span className="text-white font-semibold">Adobe Premiere Pro &bull; CapCut</span>
              </div>
              <div>
                <span className="text-zinc-500 block">COLOR PIPELINE:</span>
                <span className="text-white font-semibold">Custom Electric Violet S-Curve</span>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                Production Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <a
              href="https://instagram.com/check.my_pov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-zinc-400 hover:text-[#9B5CFF] flex items-center gap-1.5 transition-colors"
            >
              <span>View On Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-white/[0.08] hover:bg-[#9B5CFF] text-white text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Close Inspector
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
