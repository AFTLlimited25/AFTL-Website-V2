"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimateOnScroll = ({ children, staggered = false }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (staggered) {
      gsap.fromTo(
        el.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.6,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    } else {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, [staggered]);

  return <div ref={ref}>{children}</div>;
};

export default AnimateOnScroll;
