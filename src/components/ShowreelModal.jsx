import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sliders, 
  Sparkles,
  Layers,
  Camera,
  Film
} from 'lucide-react';

export default function ShowreelModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(28);
  const [aspectRatio, setAspectRatio] = useState('16:9'); // '16:9' or '2.39:1'
  const [activeFrame, setActiveFrame] = useState(0);

  const reelFrames = [
    {
      img: '/images/hero-director.jpg',
      title: 'Cinematic Direction & Camera Rigging',
      role: 'Director / Camera Operator',
      gear: 'Sony Cinema Rig + Ronin RS3 Pro',
      color: 'S-Log3 / Electric Violet Grade'
    },
    {
      img: '/images/reel-fest.jpg',
      title: 'LEAD Youth Mega Festival 2025',
      role: 'Media Head (100+ Crew Coordination)',
      gear: 'Multi-Cam 4K 60FPS + Drone',
      color: 'Concert Dynamic Range Rec.709'
    },
    {
      img: '/images/reel-brand.jpg',
      title: 'Luxury Chronograph Commercial',
      role: 'Lighting & High-Speed Macro Capture',
      gear: '100mm Macro + Phantom Slow-Mo',
      color: 'Dark Ambient Editorial Grade'
    },
    {
      img: '/images/reel-pov.jpg',
      title: '@check.my_pov — Midnight Urban Odyssey',
      role: 'Creator / Solo DP & Sound Designer',
      gear: 'Sony A7IV 35mm f/1.4 GM',
      color: 'Cyber Violet Neon Contrast'
    }
  ];

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Frame switcher loop when playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = (prev + 0.4) % 100;
        const frameIdx = Math.floor((next / 100) * reelFrames.length);
        setActiveFrame(frameIdx);
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const currentReel = reelFrames[activeFrame] || reelFrames[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0B0B0F]/95 backdrop-blur-2xl transition-all duration-300">
      {/* Glow Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full bg-[#9B5CFF]/15 blur-[160px] pointer-events-none" />

      {/* Theater Container */}
      <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden border border-[#9B5CFF]/40 bg-[#0E0E14] shadow-[0_0_80px_rgba(155,92,255,0.35)] flex flex-col">
        
        {/* Theater Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#14141E] border-b border-white/[0.08] z-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-display font-bold text-sm tracking-widest uppercase text-white">
              Sreejith V P &bull; Director's Cut 2026
            </span>
            <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded bg-[#9B5CFF]/20 text-[#C084FC] border border-[#9B5CFF]/30">
              4K MASTER
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Aspect Ratio Switcher */}
            <div className="hidden sm:flex items-center bg-white/[0.05] rounded-lg p-1 border border-white/[0.1] text-xs font-mono">
              <button
                onClick={() => setAspectRatio('16:9')}
                className={`px-2 py-1 rounded transition-colors ${aspectRatio === '16:9' ? 'bg-[#9B5CFF] text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                16:9
              </button>
              <button
                onClick={() => setAspectRatio('2.39:1')}
                className={`px-2 py-1 rounded transition-colors ${aspectRatio === '2.39:1' ? 'bg-[#9B5CFF] text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                2.39:1 Scope
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-red-500/20 hover:text-red-400 border border-white/[0.1] flex items-center justify-center text-zinc-300 transition-colors"
              aria-label="Close Showreel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Screen Area */}
        <div className="relative w-full bg-black overflow-hidden flex items-center justify-center">
          <div 
            className={`w-full transition-all duration-500 relative ${
              aspectRatio === '2.39:1' ? 'aspect-[2.39/1]' : 'aspect-video'
            }`}
          >
            {/* Active Reel Frame Display */}
            <img
              src={currentReel.img}
              alt={currentReel.title}
              className={`w-full h-full object-cover transition-opacity duration-700 ${isPlaying ? 'scale-105' : 'scale-100'} transition-transform duration-1000`}
            />

            {/* Cinematic Letterbox Matte if 2.39:1 */}
            {aspectRatio === '2.39:1' && (
              <>
                <div className="absolute top-0 left-0 right-0 h-4 bg-black pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-black pointer-events-none" />
              </>
            )}

            {/* Dynamic Camera OSD Overlay */}
            <div className="absolute top-6 left-6 z-10 pointer-events-none font-mono text-[11px] space-y-1">
              <div className="text-white/90 font-bold bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 inline-block">
                SEQ: {currentReel.title}
              </div>
              <div className="text-zinc-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 block">
                {currentReel.gear} &bull; {currentReel.color}
              </div>
            </div>

            {/* Big Centered Play Trigger overlay when paused */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-20">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 rounded-full bg-[#9B5CFF] text-white flex items-center justify-center shadow-[0_0_50px_rgba(155,92,255,0.8)] hover:scale-110 transition-transform"
                >
                  <Play className="w-8 h-8 fill-white ml-1" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Playback Control Bar & Scrubber */}
        <div className="px-6 py-4 bg-[#11111A] border-t border-white/[0.08] flex flex-col gap-3">
          {/* Progress Timeline Scrubber */}
          <div 
            className="relative w-full h-2 bg-white/[0.1] rounded-full overflow-hidden cursor-pointer group"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = ((e.clientX - rect.left) / rect.width) * 100;
              setProgress(pos);
            }}
          >
            <div 
              className="h-full bg-gradient-to-r from-[#9B5CFF] to-[#D8B4FE] relative transition-all duration-100"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#9B5CFF]" />
            </div>
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-[#9B5CFF] hover:text-white flex items-center justify-center transition-colors"
                title={isPlaying ? "Pause (Space)" : "Play (Space)"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-zinc-300" />}
              </button>

              <div className="tracking-wider">
                <span className="text-white font-bold">
                  {Math.floor((progress * 0.9) / 60)}:{String(Math.floor((progress * 0.9) % 60)).padStart(2, '0')}
                </span>
                <span className="text-zinc-500"> / 01:30</span>
              </div>
            </div>

            {/* Frame Jump Badges */}
            <div className="flex items-center gap-2">
              {reelFrames.map((f, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveFrame(i);
                    setProgress((i / reelFrames.length) * 100);
                  }}
                  className={`px-2.5 py-1 rounded text-[11px] transition-all ${
                    activeFrame === i
                      ? 'bg-[#9B5CFF] text-white font-bold shadow-[0_0_12px_rgba(155,92,255,0.4)]'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white'
                  }`}
                >
                  Scene 0{i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
