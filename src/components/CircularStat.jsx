"use client";
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CircularStat = ({ value, text }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const target = { val: 0 };
    gsap.to(target, {
      val: value,
      duration: 2,
      scrollTrigger: {
        trigger: '.circular-stat',
        start: 'top 80%',
      },
      onUpdate: () => {
        setDisplayValue(Math.round(target.val));
      },
    });
  }, [value]);

  return (
    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-light-mist to-border-soft flex flex-col justify-center items-center shadow-lg circular-stat">
      <p className="text-4xl font-bold text-aftl-heading">{displayValue}+</p>
      <p className="text-lg text-aftl-subtext">{text}</p>
    </div>
  );
};

export default CircularStat;
