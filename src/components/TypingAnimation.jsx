"use client";
import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const words = text.split(' ');

  useEffect(() => {
    let wordIndex = 0;
    let interval;

    const type = () => {
      if (wordIndex < words.length) {
        setDisplayedText(words.slice(0, wordIndex + 1).join(' '));
        wordIndex++;
      } else {
        wordIndex = 0;
        setDisplayedText('');
      }
    };

    interval = setInterval(type, 500);

    return () => clearInterval(interval);
  }, [text]);

  return <p className="text-2xl md:text-3xl text-aftl-subtext mt-4 h-16">{displayedText}</p>;
};

export default TypingAnimation;
