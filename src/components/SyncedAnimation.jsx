"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SyncedAnimation = ({ captions }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const q = gsap.utils.selector(section);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    q('.caption').forEach((caption) => {
      tl.fromTo(caption, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(caption.querySelector('div'), { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.5 }, "-=0.5")
        .to(caption.querySelector('div'), { opacity: 0, scaleX: 0, duration: 0.5 }, "+=0.5");
    });
  }, [captions]);

  return (
    <div ref={sectionRef} className="relative">
      {captions.map((caption, index) => (
        <div key={index} className="relative caption">
          <p className="text-2xl font-bold mb-4 text-aftl-heading">{caption}</p>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-aftl-neon/20 to-transparent -z-10 opacity-0 scale-x-0" />
        </div>
      ))}
    </div>
  );
};

export default SyncedAnimation;
