import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Copy, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function RecruitmentContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Campaign',
    timeline: 'Within 2-4 weeks',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sreesreejithvp1999@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - ${formData.name}`);
      const body = encodeURIComponent(`Hi Sreejith,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.projectType}\nTimeline: ${formData.timeline}\n\nBrief:\n${formData.message}\n`);
      window.location.href = `mailto:sreesreejithvp1999@gmail.com?subject=${subject}&body=${body}`;
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-[#1F202B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Grid: Info on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12131A] border border-[#1F202B] text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-[#F8FAFC] mb-4">
                Let's Discuss Your Project.
              </h2>
              <p className="text-sm md:text-base text-[#94A3B8] font-light leading-relaxed">
                Currently serving as Media Head at LEAD College Autonomous while collaborating with brands, agencies, and creators for video production and short-form retainers.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-[#12131A] border border-[#1F202B] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#181922] flex items-center justify-center text-[#8B5CF6]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                      Email
                    </span>
                    <a
                      href="mailto:sreesreejithvp1999@gmail.com"
                      className="text-xs sm:text-sm font-mono text-[#F8FAFC] hover:text-[#8B5CF6] transition-colors"
                    >
                      sreesreejithvp1999@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 rounded-lg bg-[#181922] hover:bg-[#1F202B] text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="p-4 rounded-xl bg-[#12131A] border border-[#1F202B] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#181922] flex items-center justify-center text-[#8B5CF6]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                      Phone / WhatsApp
                    </span>
                    <a
                      href="tel:+917558000327"
                      className="text-xs sm:text-sm font-mono text-[#F8FAFC] hover:text-[#8B5CF6] transition-colors"
                    >
                      +91 75580 00327
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/917558000327?text=Hi%20Sreejith,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20video%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-mono transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#12131A] border border-[#1F202B] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#181922] flex items-center justify-center text-[#8B5CF6]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-[#F8FAFC]">
                    Palakkad, Kerala, India &bull; Open for On-Location &amp; Remote
                  </span>
                </div>
              </div>
            </div>

            {/* Resume CV Download Card */}
            <div className="p-5 rounded-2xl bg-[#12131A] border border-[#1F202B]">
              <div className="flex items-center gap-2.5 mb-2">
                <Download className="w-4 h-4 text-[#8B5CF6]" />
                <h3 className="font-display font-bold text-sm text-[#F8FAFC]">
                  Download Official Resume
                </h3>
              </div>
              <p className="text-xs text-[#94A3B8] font-light mb-4">
                Verified background as LEAD College Media Head, Brandaid Digital Manager, and SICOMS B.Com.
              </p>
              <a
                href={`${import.meta.env.BASE_URL}images/sreejith resume.pdf`}
                download="Sreejith_V_P_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#181922] hover:bg-[#1F202B] border border-[#1F202B] hover:border-[#2D3042] text-[#F8FAFC] font-display font-medium text-xs uppercase tracking-wider transition-colors"
              >
                <span>Download Sreejith_Resume.pdf</span>
                <Download className="w-3.5 h-3.5 text-[#8B5CF6]" />
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-1">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                Instagram:
              </span>
              <a
                href="https://www.instagram.com/check.my_pov/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#A78BFA]" />
                <span>@check.my_pov</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-[#12131A] border border-[#1F202B]">
              
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-[#F8FAFC] mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#94A3B8] font-mono">
                  Briefly outline your requirements or role details below.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-[#F8FAFC]">
                    Message Sent!
                  </h4>
                  <p className="text-xs text-[#94A3B8] max-w-sm mx-auto">
                    Your email client has been summoned with your message details. Sreejith typically replies within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-lg bg-[#181922] hover:bg-[#1F202B] text-xs font-mono text-[#F8FAFC] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-[#1F202B] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#8B5CF6] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-[#1F202B] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#8B5CF6] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        Project Scope
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-[#1F202B] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#8B5CF6] transition-colors"
                      >
                        <option value="Commercial Campaign">Commercial Campaign</option>
                        <option value="Monthly 9:16 Retainer">Monthly 9:16 Reel Retainer</option>
                        <option value="Campus / Event Media">Campus / Event Aftermovie</option>
                        <option value="Full-Time Media Role">Full-Time / Contract Leadership</option>
                        <option value="Editing / Post-Production">Editing / Post-Production</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                        Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-[#1F202B] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#8B5CF6] transition-colors"
                      >
                        <option value="Immediate">Immediate (1-2 weeks)</option>
                        <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                        <option value="Next Month">Next Month</option>
                        <option value="Flexible">Flexible Discussion</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a brief overview of what you're looking to achieve..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-[#1F202B] text-[#F8FAFC] text-xs focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-display font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
