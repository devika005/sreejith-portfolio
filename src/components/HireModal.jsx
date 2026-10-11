import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  Download, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export default function HireModal({ isOpen, onClose }) {
  const [selectedRole, setSelectedRole] = useState('Commercial Campaign');
  const [clientName, setClientName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    const subject = encodeURIComponent(`Project Inquiry: ${selectedRole} - ${clientName}`);
    const body = encodeURIComponent(`Hi Sreejith,\n\nName: ${clientName}\nEmail: ${contactEmail}\nOpportunity: ${selectedRole}\n\nNote:\n${brief}\n`);
    window.location.href = `mailto:sreesreejithvp1999@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090A0F]/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg rounded-2xl bg-[#12131A] border border-[#1F202B] p-6 sm:p-8 z-10 shadow-2xl">
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-[#F8FAFC]">
              Hire Sreejith V P
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#181922] hover:bg-[#1F202B] text-[#94A3B8] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSent ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-10 h-10 text-[#8B5CF6] mx-auto" />
            <h4 className="font-display font-bold text-lg text-[#F8FAFC]">Inquiry Dispatched</h4>
            <p className="text-xs text-[#94A3B8]">
              Your email client has been launched with the pre-filled inquiry. Sreejith will respond shortly.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#8B5CF6] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
                Project Type
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {[
                  'Commercial Campaign',
                  'Monthly 9:16 Retainer',
                  'Event Media',
                  'Full-Time Media Head'
                ].map((role) => (
                  <button
                    type="button"
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`p-2.5 rounded-lg border text-left transition-colors ${
                      selectedRole === role
                        ? 'bg-[#181922] border-[#8B5CF6] text-[#F8FAFC] font-semibold'
                        : 'bg-[#090A0F] border-[#1F202B] text-[#94A3B8] hover:text-[#F8FAFC]'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1">
                  Name / Organization *
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 rounded-lg bg-[#090A0F] border border-[#1F202B] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 rounded-lg bg-[#090A0F] border border-[#1F202B] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#8B5CF6]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1">
                Project Overview
              </label>
              <textarea
                rows={3}
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder="Key deliverables, shoot location, or timeline..."
                className="w-full px-3 py-2 rounded-lg bg-[#090A0F] border border-[#1F202B] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#8B5CF6] resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-display font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Send Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="pt-2 border-t border-[#1F202B] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>Direct Contact</span>
              </div>
              <a
                href="/images/sreejith resume.pdf"
                download="Sreejith_V_P_Resume.pdf"
                className="text-[#A78BFA] hover:underline flex items-center gap-1"
              >
                <Download className="w-3 h-3" /> CV PDF
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
