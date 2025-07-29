"use client";
import React from 'react';

const PartnersCarousel = () => {
  const logos = [
    { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', color: '#4285F4' },
    { name: 'n8n', url: 'https://cdn.simpleicons.org/n8n', color: '#1A82E2' },
    { name: 'University of Plymouth', url: 'https://d3bpgcke55gfwt.cloudfront.net/assets/uoplogo-7781d371f371f01ba417d9440f2092a9e96cbd33cb939f6cec72e77cbb01b8f0.svg', color: '#002D5C' },
    { name: 'Stunited', url: '/stunited-logo.png', color: '#00447C' },
    { name: 'ICFAI University Raipur', url: '/ICFAI logo.svg', color: '#003366' },
    { name: 'University of Northampton', url: '/UNO logo.png', color: '#6A0DAD' },
    { name: 'Northampton Town Council', url: '/northampton town council.webp', color: '#000000' },
  ];

  return (
    <div className="py-12 bg-transparent">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-4 flex flex-col items-center">
                <img src={logo.url} alt={logo.name} className="h-12" />
                <p style={{ color: logo.color }} className="mt-2 text-sm font-semibold">{logo.name}</p>
              </div>
            ))}
            {logos.map((logo, index) => (
              <div key={index + logos.length} className="flex-shrink-0 w-48 mx-4 flex flex-col items-center">
                <img src={logo.url} alt={logo.name} className="h-12" />
                <p style={{ color: logo.color }} className="mt-2 text-sm font-semibold">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
