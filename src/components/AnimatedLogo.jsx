"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedLogo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    gsap.to(logo, {
      rotation: 360,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=500",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Load external SVG from public folder */}
      <img
        ref={logoRef}
        src="/FinallogoAFTL.svg"
        alt="AFTL Logo"
        className="w-full h-full"
      />
    </div>
  );
};

export default AnimatedLogo;
