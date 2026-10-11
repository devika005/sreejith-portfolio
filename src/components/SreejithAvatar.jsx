import React from 'react';
import { Sparkles, Camera } from 'lucide-react';

export default function SreejithAvatar({ className = "w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Ambient Pulsing Electric Violet Halo Behind Avatar */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#9B5CFF]/40 via-[#7E22CE]/30 to-[#C084FC]/20 blur-2xl animate-pulse-slow pointer-events-none" />
      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#9B5CFF]/30 to-transparent blur-xl pointer-events-none" />

      {/* Outer Stylized Viewfinder / Ring */}
      <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-[#9B5CFF] via-[#7E22CE]/60 to-[#1D1D2B] shadow-[0_0_35px_rgba(155,92,255,0.4)] animate-float">
        
        {/* Inner Dark Background Circle */}
        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#181528] to-[#0D0D14] relative border border-white/[0.1]">
          
          {/* Subtle Studio Light Vignette */}
          <div className="absolute inset-0 bg-radial-gradient from-[#9B5CFF]/15 via-transparent to-black/60 pointer-events-none" />

          {/* SVG Vector Cartoon Avatar of Sreejith V P */}
          <svg
            viewBox="0 0 240 240"
            className="w-full h-full object-cover filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Skin Gradients */}
              <linearGradient id="skinBase" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C98B63" />
                <stop offset="100%" stopColor="#AD6E46" />
              </linearGradient>
              <linearGradient id="skinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A05F39" />
                <stop offset="100%" stopColor="#8A4E2B" />
              </linearGradient>

              {/* Hair Gradient */}
              <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#252433" />
                <stop offset="50%" stopColor="#15141E" />
                <stop offset="100%" stopColor="#0B0B0F" />
              </linearGradient>

              {/* Shirt Fabric Texture Pattern (Striped Collared Shirt) */}
              <pattern id="shirtStripes" width="10" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
                <rect width="10" height="20" fill="#1C1B2B" />
                <line x1="0" y1="0" x2="0" y2="20" stroke="#F5F3F7" strokeWidth="2.5" strokeOpacity="0.85" />
                <line x1="5" y1="0" x2="5" y2="20" stroke="#9B5CFF" strokeWidth="1" strokeOpacity="0.6" />
              </pattern>

              {/* Earring Metallic Glow */}
              <linearGradient id="earringGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="40%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#94A3B8" />
              </linearGradient>

              {/* Studio Violet Rim Light */}
              <linearGradient id="violetRim" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9B5CFF" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#9B5CFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Back Glow Aura */}
            <circle cx="120" cy="120" r="100" fill="#9B5CFF" fillOpacity="0.08" />

            {/* 1. SHOULDERS & STRIPED COLLARED SHIRT */}
            <g id="clothing">
              {/* Shoulder base torso */}
              <path
                d="M35 240 C35 195 65 178 95 174 L145 174 C175 178 205 195 205 240 Z"
                fill="url(#shirtStripes)"
                stroke="#151422"
                strokeWidth="2"
              />

              {/* Collared Shirt Placket & Buttons */}
              <path d="M112 185 L112 240 L128 240 L128 185 Z" fill="#151422" />
              <circle cx="120" cy="202" r="2.2" fill="#E2E8F0" />
              <circle cx="120" cy="222" r="2.2" fill="#E2E8F0" />

              {/* Left & Right Shirt Collars (V-neck open collar) */}
              {/* Right Collar (Viewer's Left) */}
              <path
                d="M92 170 L118 194 L114 172 L94 165 Z"
                fill="#242238"
                stroke="#9B5CFF"
                strokeWidth="1.2"
              />
              {/* Left Collar (Viewer's Right) */}
              <path
                d="M148 170 L122 194 L126 172 L146 165 Z"
                fill="#242238"
                stroke="#9B5CFF"
                strokeWidth="1.2"
              />

              {/* Inner Neck Opening / Chest skin shadow */}
              <polygon points="106,168 134,168 120,188" fill="url(#skinShadow)" />
            </g>

            {/* 2. NECK */}
            <g id="neck">
              <rect x="103" y="138" width="34" height="34" rx="4" fill="url(#skinShadow)" />
              {/* Adam's Apple & Neck muscle contour */}
              <path d="M114 154 Q120 157 126 154" stroke="#8A4E2B" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
            </g>

            {/* 3. EARS */}
            <g id="ears">
              {/* Right Ear (Viewer's Left) */}
              <path
                d="M74 116 C71 106 74 95 78 96 C82 98 83 118 78 125 C75 125 74 122 74 116 Z"
                fill="#B87B56"
              />

              {/* Left Ear (Viewer's Right - Sreejith's Left Ear with Hoop Earring!) */}
              <g id="leftEarWithHoop">
                <path
                  d="M166 116 C169 106 166 95 162 96 C158 98 157 118 162 125 C165 125 166 122 166 116 Z"
                  fill="#B87B56"
                />
                <path
                  d="M163 105 Q161 113 164 119"
                  stroke="#8A4E2B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* SREEJITH'S SIGNATURE LEFT HOOP EARRING */}
                {/* Metallic Hoop attached to left ear lobe */}
                <circle
                  cx="165"
                  cy="126"
                  r="5"
                  fill="none"
                  stroke="url(#earringGlow)"
                  strokeWidth="2"
                  filter="drop-shadow(0 0 3px #9B5CFF)"
                />
                {/* Hoop specular catchlight */}
                <circle cx="166.5" cy="128" r="1" fill="#FFFFFF" />
              </g>
            </g>

            {/* 4. HEAD BASE & JAW */}
            <g id="head">
              {/* Jawline & Chin Shape */}
              <path
                d="M78 96 C78 68 96 55 120 55 C144 55 162 68 162 96 C162 126 152 148 135 156 C126 160 114 160 105 156 C88 148 78 126 78 96 Z"
                fill="url(#skinBase)"
              />

              {/* Cheekbone & Jaw Shadows */}
              <path
                d="M80 108 C84 136 100 152 110 157 C104 153 92 142 86 118 Z"
                fill="#8A4E2B"
                opacity="0.3"
              />
              <path
                d="M160 108 C156 136 140 152 130 157 C136 153 148 142 154 118 Z"
                fill="#8A4E2B"
                opacity="0.3"
              />

              {/* Electric Violet Rim Light on Left Jaw */}
              <path
                d="M158 98 C160 115 154 135 142 150"
                stroke="#9B5CFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.75"
              />
            </g>

            {/* 5. FACIAL FEATURES: BEARD / STUBBLE */}
            <g id="stubble">
              {/* Subtle stylish designer stubble around jaw & chin */}
              <path
                d="M88 126 C94 148 106 158 120 158 C134 158 146 148 152 126 C150 144 136 156 120 156 C104 156 90 144 88 126 Z"
                fill="#161522"
                opacity="0.45"
              />
              {/* Mustache shadow */}
              <path
                d="M107 133 C113 130 120 131 120 131 C120 131 127 130 133 133 C127 135 120 134 120 134 C120 134 113 135 107 133 Z"
                fill="#161522"
                opacity="0.5"
              />
            </g>

            {/* 6. NOSE & MOUTH */}
            <g id="features">
              {/* Mouth */}
              <path
                d="M110 141 Q120 145 130 141"
                stroke="#703C1F"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M114 145 Q120 147 126 145"
                stroke="#9E5D36"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Nose */}
              <path
                d="M120 98 L118 122 Q112 126 120 126 Q128 126 122 122"
                stroke="#8A4E2B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <ellipse cx="116" cy="123" rx="1.5" ry="1" fill="#703C1F" />
              <ellipse cx="124" cy="123" rx="1.5" ry="1" fill="#703C1F" />
            </g>

            {/* 7. EYES & EYEBROWS */}
            <g id="eyes">
              {/* Eyebrows (Bold, well groomed) */}
              {/* Right Brow (Viewer's Left) */}
              <path
                d="M92 92 Q103 87 114 91"
                stroke="#15141E"
                strokeWidth="3.8"
                strokeLinecap="round"
                fill="none"
              />
              {/* Left Brow (Viewer's Right) */}
              <path
                d="M126 91 Q137 87 148 92"
                stroke="#15141E"
                strokeWidth="3.8"
                strokeLinecap="round"
                fill="none"
              />

              {/* Eyes */}
              {/* Right Eye */}
              <ellipse cx="104" cy="102" rx="6.5" ry="4" fill="#FFFFFF" />
              <circle cx="105" cy="102" r="3.2" fill="#241B16" />
              <circle cx="106" cy="101" r="1.1" fill="#FFFFFF" />
              {/* Eyelid line */}
              <path d="M97 101 Q104 97 111 101" stroke="#1C1824" strokeWidth="2" strokeLinecap="round" fill="none" />

              {/* Left Eye */}
              <ellipse cx="136" cy="102" rx="6.5" ry="4" fill="#FFFFFF" />
              <circle cx="135" cy="102" r="3.2" fill="#241B16" />
              <circle cx="136" cy="101" r="1.1" fill="#FFFFFF" />
              {/* Eyelid line */}
              <path d="M129 101 Q136 97 143 101" stroke="#1C1824" strokeWidth="2" strokeLinecap="round" fill="none" />
            </g>

            {/* 8. TEXTURED MODERN DARK HAIR (Voluminous, textured fade & strands) */}
            <g id="hair">
              {/* Hair Base */}
              <path
                d="M74 92 C70 70 80 40 102 34 C116 30 134 30 148 38 C166 48 168 70 166 92 C162 90 156 80 154 75 C146 56 126 50 110 52 C95 54 84 66 80 84 C76 88 74 92 74 92 Z"
                fill="url(#hairGradient)"
              />

              {/* Modern Textured Quiff Strands (Top Volume) */}
              <path
                d="M92 48 C98 32 118 25 136 28 C144 30 152 35 156 42 C148 36 132 34 122 36 C108 39 98 44 92 48 Z"
                fill="#2E2C40"
              />
              <path
                d="M106 38 C115 26 130 24 142 27 C132 28 122 32 116 37 Z"
                fill="#3B3852"
              />
              <path
                d="M80 72 C80 55 92 42 108 38 C94 44 86 56 82 72 Z"
                fill="#15141E"
              />
              {/* Sideburns */}
              <path d="M78 86 L80 106 L83 104 L82 86 Z" fill="#15141E" />
              <path d="M162 86 L160 106 L157 104 L158 86 Z" fill="#15141E" />

              {/* Electric Violet Hair Highlight on Edge */}
              <path
                d="M142 32 Q158 44 164 68"
                stroke="#9B5CFF"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
              />
            </g>
          </svg>

          {/* Bottom Gloss Overlay */}
          <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#0B0B0F]/90 to-transparent pointer-events-none" />
        </div>

        {/* Floating Mini Director Slate / Camera Badge */}
        <div className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full bg-[#11111A] border border-[#9B5CFF]/60 shadow-[0_0_15px_rgba(155,92,255,0.6)] flex items-center gap-1.5 z-20">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span className="font-mono text-[10px] uppercase font-bold text-white tracking-widest">
            SREEJITH
          </span>
        </div>
      </div>
    </div>
  );
}
