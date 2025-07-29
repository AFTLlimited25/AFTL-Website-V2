"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CircularStat from './CircularStat';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const q = gsap.utils.selector(section);

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: '+=500',
        scrub: 1,
      },
    })
    .fromTo(q('.timeline-card'), { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.3 });
  }, []);

  return (
    <div ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-aftl-heading mb-12">
          Product Status & Growth Timeline
        </h2>
        <div className="flex justify-center items-center space-x-8">
          <div className="timeline-card text-center p-4 border border-aftl-heading rounded-lg shadow-lg animate-pulse">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-2">Platrr Beta (Now)</h3>
            <p className="text-aftl-subtext">Fully working AI ingredient detection from food photos.</p>
          </div>
          <div className="timeline-card text-center p-4 border border-border-soft rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔨</div>
            <h3 className="text-xl font-bold mb-2">Chef Mode (Coming Soon)</h3>
            <p className="text-aftl-subtext">Premium cooking assistant experience + subscription model.</p>
          </div>
          <div className="timeline-card text-center p-4 border border-border-soft rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-2">Platrr Community (Next Phase)</h3>
            <p className="text-aftl-subtext">A global space to share recipes and food stories with chefs & home cooks.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <div className="flex justify-center items-center space-x-8">
            <CircularStat value={200} text="Early Users" />
            <CircularStat value={10} text="Countries Reached" />
          </div>
          <p className="text-lg text-aftl-subtext mt-4">Thank you to our growing global food community.</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
