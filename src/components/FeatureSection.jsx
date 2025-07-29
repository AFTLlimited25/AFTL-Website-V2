"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import LottieAnimation from './LottieAnimation';

const FeatureSection = ({ title, description, image, imageAlt, lottieSrc }) => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div ref={textRef}>
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="text-lg text-aftl-subtext">{description}</p>
        </div>
        <div ref={imageRef}>
          {lottieSrc ? <LottieAnimation src={lottieSrc} transparent={true} /> : <img src={image} alt={imageAlt} className="rounded-lg shadow-lg" />}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
