"use client";
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LottieAnimation = ({ src, transparent }) => {
  return (
    <div style={{ background: transparent ? 'transparent' : 'white' }}>
      <DotLottieReact
        src={src}
        loop
        autoplay
      />
    </div>
  );
};

export default LottieAnimation;
