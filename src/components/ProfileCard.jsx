import React from 'react';
import { MapPin } from 'lucide-react';
import { InstagramIcon } from './Icons';

// Directly import the image file so Vite bundles it into dist/assets
import avatarImg from '../../public/images/sreejith-avatar.png';

export default function ProfileCard() {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-[#12131A] border border-[#1F202B] p-6 shadow-xl relative overflow-hidden group">

      {/* Top Header Row */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
            Available for Projects
          </span>
        </div>
        <a
          href="https://www.instagram.com/check.my_pov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#94A3B8] hover:text-[#8B5CF6] transition-colors"
          title="Visit @check.my_pov"
        >
          <InstagramIcon className="w-4 h-4" />
        </a>
      </div>

      {/* Avatar Image with Background Glow */}
      <div className="relative flex justify-center mb-5">
        {/* Subtle Ambient Violet Glow */}
        <div className="absolute inset-0 max-w-[160px] mx-auto rounded-full bg-[#8B5CF6]/15 blur-xl pointer-events-none" />

        {/* Clean, Rounded Frame */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border border-[#252530] shadow-xl group-hover:border-[#8B5CF6]/50 transition-colors bg-[#0E0F15]">
          <img
            src={avatarImg}
            alt="Sreejith V P - Animated Portrait"
            className="w-full h-full object-cover object-top filter contrast-105 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Clean Profile Header Info */}
      <div className="text-center mb-5">
        <h3 className="font-display font-bold text-xl text-[#F8FAFC]">
          Sreejith V P
        </h3>
        <p className="text-xs text-[#94A3B8] font-medium mt-1">
          Media Head &bull; Videographer &bull; Editor
        </p>
        <div className="text-xs font-mono text-[#A78BFA] flex items-center justify-center gap-1 mt-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span>Palakkad, Kerala</span>
        </div>
      </div>

      {/* Verified Role Highlights */}
      <div className="space-y-2.5 pt-4 border-t border-[#1F202B] text-xs text-[#94A3B8]">
        <div className="flex items-center justify-between">
          <span className="text-zinc-500 font-mono">Current Role</span>
          <span className="text-[#F8FAFC] font-medium">LEAD College (Media Head)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-zinc-500 font-mono">Agency Background</span>
          <span className="text-[#F8FAFC] font-medium">Brandaid Digital</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-zinc-500 font-mono">Creative Hub</span>
          <a
            href="https://www.instagram.com/check.my_pov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A78BFA] hover:underline font-medium flex items-center gap-1"
          >
            <span>@check.my_pov</span>
          </a>
        </div>
      </div>

    </div>
  );
}