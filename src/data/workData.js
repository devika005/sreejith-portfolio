/**
 * Utility to strip any tracking query parameters from an Instagram URL
 * (e.g. ?psln=..., ?cplk=..., ?utm_source=..., etc.)
 */
export function sanitizeInstagramUrl(url) {
  if (!url) return '';
  return url.split('?')[0].replace(/\/+$/, '') + '/';
}

export function extractReelId(urlOrId) {
  if (!urlOrId) return '';
  const clean = sanitizeInstagramUrl(urlOrId);
  const match = clean.match(/reel\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : clean.replace(/[^A-Za-z0-9_-]/g, '');
}

export const WORK_PROJECTS = {
  professional: [
    {
      id: "ica-1",
      reelId: "DfGo-AgCz61",
      title: "Indian Culinary Academy - Campaign Reels 01",
      client: "Indian Culinary Academy, Bangalore",
      category: "Indian Culinary Academy - Campaign Reels",
      role: "Videographer & Editor",
      reelUrl: sanitizeInstagramUrl("https://www.instagram.com/reel/DfGo-AgCz61/"),
      tags: ["Culinary Reel", "Fast Pacing", "Color Grading"],
      badge: "INDIAN CULINARY ACADEMY"
    },
    {
      id: "ica-2",
      reelId: "DfEh-lZCzZW",
      title: "Indian Culinary Academy - Campaign Reels 02",
      client: "Indian Culinary Academy, Bangalore",
      category: "Indian Culinary Academy - Campaign Reels",
      role: "Videographer & Editor",
      reelUrl: sanitizeInstagramUrl("https://www.instagram.com/reel/DfEh-lZCzZW/"),
      tags: ["Kitchen Production", "Sound Design", "Vertical Reel"],
      badge: "INDIAN CULINARY ACADEMY"
    },
    {
      id: "prof-1",
      reelId: "DdBwNtwOuw0",
      title: "Commercial Campaign Reel 01",
      client: "Commercial & Agency Roster",
      category: "Commercial Videography & Editing",
      role: "Videographer & Video Editor",
      reelUrl: sanitizeInstagramUrl("https://www.instagram.com/reel/DdBwNtwOuw0/"),
      tags: ["Video Editing", "Commercial Shoot", "Post-Production"],
      badge: "COMMERCIAL CAMPAIGN"
    },
    {
      id: "prof-2",
      reelId: "DVlUeCwk4xA",
      title: "LEAD College Media Reel 02",
      client: "LEAD College Autonomous",
      category: "Institutional Campus Media",
      role: "Media Head Direction",
      reelUrl: sanitizeInstagramUrl("https://www.instagram.com/reel/DVlUeCwk4xA/"),
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
      reelUrl: sanitizeInstagramUrl("https://www.instagram.com/reel/DVYKVxrk6Fy/"),
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
      reelUrl: sanitizeInstagramUrl("https://www.instagram.com/reel/DeGYfs6zFKv/"),
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
      reelUrl: sanitizeInstagramUrl("https://www.instagram.com/reel/Dd5hXn_zYUM/"),
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
      reelUrl: sanitizeInstagramUrl("https://www.instagram.com/reel/DeOu3j9z6HM/"),
      tags: ["Vlog Aesthetic", "Visual Rhythm", "Content Creation"],
      badge: "PASSION REEL"
    }
  ]
};

export const VERIFIED_COLLECTIONS = WORK_PROJECTS;
export const VERIFIED_PROJECTS = WORK_PROJECTS;
export default WORK_PROJECTS;

