import React, { useState, useEffect, useRef } from 'react';
import { Film, Eye, Award, CheckCircle, Zap } from 'lucide-react';

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const [count1, setCount1] = useState(0); // Target: 100
  const [count2, setCount2] = useState(0); // Target: 2M+
  const [count3, setCount3] = useState(0); // Target: 4
  const [count4, setCount4] = useState(0); // Target: 100

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1600;
    const startTime = performance.now();

    const updateCounters = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount1(Math.floor(ease * 100));
      setCount2(+(ease * 2).toFixed(1));
      setCount3(Math.floor(ease * 4));
      setCount4(Math.floor(ease * 100));

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    requestAnimationFrame(updateCounters);
  }, [isVisible]);

  return (
    <section ref={containerRef} className="py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-[#12131A] border border-[#1F202B]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
              CATALOG VOLUME
            </div>
            <div className="font-display font-bold text-3xl sm:text-4xl text-[#F8FAFC] mb-1">
              {count1}<span className="text-[#8B5CF6]">+</span>
            </div>
            <div className="text-xs text-[#94A3B8]">
              Videos Produced &amp; Directed
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-[#12131A] border border-[#1F202B]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
              AUDIENCE REACH
            </div>
            <div className="font-display font-bold text-3xl sm:text-4xl text-[#F8FAFC] mb-1">
              {count2}M<span className="text-[#8B5CF6]">+</span>
            </div>
            <div className="text-xs text-[#94A3B8]">
              Organic Campaign Views
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-[#12131A] border border-[#1F202B]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
              CAREER TRACK
            </div>
            <div className="font-display font-bold text-3xl sm:text-4xl text-[#F8FAFC] mb-1">
              {count3}<span className="text-[#8B5CF6]">+</span> YRS
            </div>
            <div className="text-xs text-[#94A3B8]">
              Agency &amp; Institutional Media Lead
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-[#12131A] border border-[#1F202B]">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-2">
              RELIABILITY
            </div>
            <div className="font-display font-bold text-3xl sm:text-4xl text-[#F8FAFC] mb-1">
              {count4}<span className="text-[#8B5CF6]">%</span>
            </div>
            <div className="text-xs text-[#94A3B8]">
              End-to-End Workflow Delivery
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
