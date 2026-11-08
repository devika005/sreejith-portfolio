import React, { useState, useEffect } from 'react';

const SPREADSHEET_ID = '1IQr0RcZMcGYGLHG0KoaatMpFPKd6ksjfe26xX5xyxns';

// OpenSheet API reading from the exact tab names
const PROF_API_URL = `https://opensheet.elk.sh/${SPREADSHEET_ID}/professional`;
const PERS_API_URL = `https://opensheet.elk.sh/${SPREADSHEET_ID}/personal`;

// Direct links to open the Google Sheet
const PROF_SHEET_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit#gid=0`;
const PERS_SHEET_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`;

function getInstagramEmbedUrl(rawUrl) {
  if (!rawUrl) return null;
  const match = rawUrl.match(/(?:reel|p)\/([A-Za-z0-9_-]+)/);
  if (match && match[1]) {
    return `https://www.instagram.com/reel/${match[1]}/embed/`;
  }
  return null;
}

function ReelCard({ item, defaultTag }) {
  const reelLink = item.ReelURL;
  const embedUrl = getInstagramEmbedUrl(reelLink);

  return (
    <div className="bg-[#10121A] border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-[#8B5CF6]/50 transition duration-300">
      {/* Top Details */}
      <div className="p-4 pb-3 flex items-start justify-between">
        <div className="pr-2">
          <span className="text-[10px] font-mono tracking-wider uppercase text-[#8B5CF6] font-semibold">
            {defaultTag}
          </span>
          <h4 className="text-sm font-bold text-white mt-1 line-clamp-1">
            {item.Title || 'Untitled Project'}
          </h4>
          <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
            {item.Date || 'Instagram Reel'}
          </p>
        </div>
        {reelLink && (
          <a
            href={reelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition text-xs mt-1"
          >
            ↗
          </a>
        )}
      </div>

      {/* 9:16 Frame - Loads Instagram cover & player automatically */}
      <div className="w-full aspect-[9/16] bg-black relative flex items-center justify-center overflow-hidden">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={item.Title || 'Reel Preview'}
            className="w-full h-full border-0 pointer-events-auto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="text-zinc-600 text-xs">No video preview available</div>
        )}
      </div>
    </div>
  );
}

export default function PortfolioShowcase() {
  const [profReels, setProfReels] = useState([]);
  const [persReels, setPersReels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(PROF_API_URL).then((res) => (res.ok ? res.json() : [])),
      fetch(PERS_API_URL).then((res) => (res.ok ? res.json() : []))
    ])
      .then(([profData, persData]) => {
        if (Array.isArray(profData)) {
          setProfReels(
            profData.filter((r) => r.ReelURL && r.ReelURL.trim() !== '').reverse()
          );
        }
        if (Array.isArray(persData)) {
          setPersReels(
            persData.filter((r) => r.ReelURL && r.ReelURL.trim() !== '').reverse()
          );
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching reels:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      {/* ================= 01 PROFESSIONAL SECTION ================= */}
      <section id="professional">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
          <div>
            <span className="inline-block px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-md mb-3">
              Collection 01
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
              01 — Professional & Culinary Campaign Work
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              Verified culinary videography, short-form reels, and commercial campaigns for Indian
              Culinary Academy, past institutional leadership, and agency client rosters.
            </p>
          </div>

          <a
            href={PROF_SHEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition duration-200 self-start sm:self-center shrink-0 cursor-pointer"
          >
            <span className="text-[#8B5CF6] font-bold text-sm leading-none">+</span>
            <span>Add Professional Reel</span>
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="aspect-[9/16] bg-zinc-900/60 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : profReels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profReels.map((item, idx) => (
              <ReelCard key={`prof-${idx}`} item={item} defaultTag="COMMERCIAL / CAMPAIGN" />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center border border-dashed border-zinc-800 rounded-2xl text-zinc-500 text-sm">
            No professional reels added yet. Click &quot;Add Professional Reel&quot; to insert one.
          </div>
        )}
      </section>

      {/* ================= 02 PERSONAL POV SECTION ================= */}
      <section id="personal">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
          <div>
            <span className="inline-block px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-md mb-3">
              Collection 02
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
              02 — Personal Creative Experiments
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl">
              Independent content creation and visual storytelling demonstrating creative editing,
              color grading, and passion for video production.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-center shrink-0">
            <a
              href={PERS_SHEET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition duration-200 cursor-pointer"
            >
              <span className="text-[#8B5CF6] font-bold text-sm leading-none">+</span>
              <span>Add Personal Reel</span>
            </a>

            <a
              href="https://www.instagram.com/check.my_pov/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-mono text-zinc-400 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition duration-200"
            >
              <span>@check.my_pov</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">
                CREATOR HUB
              </span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="aspect-[9/16] bg-zinc-900/60 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : persReels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {persReels.map((item, idx) => (
              <ReelCard key={`pers-${idx}`} item={item} defaultTag="CREATIVE POV" />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center border border-dashed border-zinc-800 rounded-2xl text-zinc-500 text-sm">
            No personal POV reels added yet. Click &quot;Add Personal Reel&quot; to insert one.
          </div>
        )}
      </section>
    </div>
  );
}