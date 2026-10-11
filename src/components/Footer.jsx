import React from 'react';
import { ArrowUp, Mail, Phone, Download } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[#1F202B] bg-[#06070A] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand signature */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="font-display font-bold text-base tracking-wide text-[#F8FAFC] mb-1">
            SREEJITH V P
          </div>
          <p className="text-xs text-[#94A3B8] max-w-sm">
            Media Head &bull; Videographer &bull; Video Editor &bull; Content Creator
          </p>
          <div className="text-[11px] font-mono text-zinc-500 mt-1">
            Palakkad, Kerala &bull; 100+ Videos Produced &bull; 2M+ Organic Views
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#94A3B8]">
          <a
            href="https://www.instagram.com/check.my_pov/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5"
          >
            <InstagramIcon className="w-4 h-4 text-[#A78BFA]" />
            <span>@check.my_pov</span>
          </a>

          <a
            href="mailto:sreesreejithvp1999@gmail.com"
            className="hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>sreesreejithvp1999@gmail.com</span>
          </a>

          <a
            href="tel:+917558000327"
            className="hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-4 h-4" />
            <span>+91 75580 00327</span>
          </a>

          <a
            href="/images/sreejith resume.pdf"
            download="Sreejith_V_P_Resume.pdf"
            className="hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5"
          >
            <Download className="w-4 h-4 text-[#8B5CF6]" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="w-9 h-9 rounded-lg bg-[#12131A] border border-[#1F202B] hover:border-[#2D3042] flex items-center justify-center text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
