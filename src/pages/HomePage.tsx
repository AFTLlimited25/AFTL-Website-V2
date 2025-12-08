import React, { useMemo, useRef, useEffect, useState } from 'react';
import { ChevronRight, Star, ExternalLink, Play, ArrowRight } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import ScrollReveal from '../components/ScrollReveal';

// Helper: convert any Drive /view link to /preview for embedding
const toDrivePreview = (url) => {
  try {
    const u = new URL(url);
    const parts = u.pathname.split('/');
    const idIndex = parts.findIndex(p => p === 'd') + 1;
    const fileId = parts[idIndex] || '';
    return `https://drive.google.com/file/d/${fileId}/preview`;
  } catch {
    return url;
  }
};

/**
 * VideoSpotlight
 * - Autoplays when its card enters the viewport and stops when it leaves.
 * - Uses IntersectionObserver to detect visibility (works well on desktop & mobile).
 * - Falls back gracefully if autoplay is blocked (keeps muted autoplay param).
 */
const VideoSpotlight = ({ driveUrl, quote, author }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const previewSrc = useMemo(() => toDrivePreview(driveUrl), [driveUrl]);
  const [iframeSrc, setIframeSrc] = useState('');

  // Create the correct src depending on whether we want to play or pause
  const buildSrc = (play) => {
    // drive preview supports ?autoplay=1&mute=1&controls=1&loop=1&playlist=
    // When pausing, setting src to empty stops network and playback.
    if (!play) return `${previewSrc}?autoplay=0&mute=1&controls=1`;
    return `${previewSrc}?autoplay=1&mute=1&controls=1&loop=1&playlist=`;
  };

  useEffect(() => {
    // Intersection observer to toggle playback when the component is at least 40% visible
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.4);
        });
      },
      { threshold: [0, 0.4, 1] }
    );

    const el = containerRef.current;
    if (el) io.observe(el);
    return () => {
      if (el) io.unobserve(el);
      io.disconnect();
    };
  }, []);

  // Update iframe src when visibility changes. When leaving viewport we set to a lightweight paused src
  useEffect(() => {
    if (isVisible) {
      // small timeout to avoid rapid toggles when scrolling quickly
      const t = setTimeout(() => setIframeSrc(buildSrc(true)), 150);
      return () => clearTimeout(t);
    } else {
      // clearing src can free resources; use a paused src instead to avoid blank box flicker
      setIframeSrc(buildSrc(false));
    }
  }, [isVisible, previewSrc]);

  return (
    <section className="relative py-16 bg-black text-white" ref={containerRef} aria-label="Video spotlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Video card */}
        <div className="relative group">
          <div className="rounded-2xl overflow-hidden bg-[#2b1740] aspect-video shadow-2xl ring-1 ring-white/10">
            {iframeSrc ? (
              <iframe
                title="Product demo"
                className="w-full h-full"
                src={iframeSrc}
                allow="autoplay; fullscreen; clipboard-write"
                allowFullScreen
              />
            ) : (
              // Lightweight placeholder while src is empty
              <div className="w-full h-full flex items-center justify-center bg-black/50">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <Play className="w-10 h-10 text-white" />
                </div>
              </div>
            )}
          </div>

          {/* Decorative play overlay - fades when playing */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-0 scale-90' : 'opacity-80 scale-100'}`}>
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Play className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Open in new tab */}
          <a
            href={driveUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute top-4 right-4 inline-flex items-center gap-1 text-white/80 hover:text-white transition"
            aria-label="Open video in a new tab"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Quote side */}
        <div className="px-2">
          <p className="text-2xl md:text-3xl italic leading-relaxed">“{quote}”</p>
          <p className="mt-4 text-white/70">— {author}</p>

          <div className="mt-8 flex gap-3">
            <a
              href={driveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-lg font-semibold hover:bg-white/90 transition"
            >
              Watch in new tab
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * ContinuousPartners
 * - Infinite horizontal scrolling marquee that duplicates the logo set for a seamless loop.
 * - Pauses on hover/focus for accessibility.
 * - Responsive: the height of logos adjusts by CSS and the animation speed adapts based on viewport width.
 */
const ContinuousPartners = ({ logos = [], logoHeight = 48, speed = 30 }) => {
  // Duplicate logos for seamless loop
  const items = logos.length ? [...logos, ...logos] : [];
  const containerRef = useRef(null);

  // Calculate animation duration based on number of logos and speed factor.
  // More logos -> longer travel distance, so scale duration by number of visible items.
  const duration = Math.max(12, (items.length * logoHeight) / speed);

  return (
    <section className="py-10 bg-white" aria-label="Our partners carousel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold">Our Partners</h3>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Trusted by industry leaders.</p>
        </div>

        <div className="relative overflow-hidden">
          {/* marquee track */}
          <div
            ref={containerRef}
            className="flex gap-6 items-center will-change-transform"
            style={{
              // Inline style for animation; keyframes generated below
              animation: `scroll ${duration}s linear infinite`,
            }}
            onMouseEnter={() => containerRef.current && (containerRef.current.style.animationPlayState = 'paused')}
            onMouseLeave={() => containerRef.current && (containerRef.current.style.animationPlayState = 'running')}
            onFocus={() => containerRef.current && (containerRef.current.style.animationPlayState = 'paused')}
            onBlur={() => containerRef.current && (containerRef.current.style.animationPlayState = 'running')}
          >
            {items.length === 0 ? (
              // placeholder
              Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex-shrink-0 bg-gray-50 border rounded-md p-4 flex items-center justify-center" style={{ height: `${logoHeight}px`, minWidth: `${logoHeight * 3}px` }}>
                  <span className="text-sm text-gray-500">Placeholder {i + 1}</span>
                </div>
              ))
            ) : (
              items.map((logo, idx) => (
                <a
                  key={idx}
                  href={logo.href || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 flex items-center justify-center bg-white rounded-md p-2 border border-gray-100 shadow-sm"
                  style={{ height: `${logoHeight}px`, minWidth: `${logoHeight * 3}px` }}
                  aria-label={logo.alt || `Partner ${idx + 1}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt || `Partner ${idx + 1}`}
                    className="max-h-full object-contain"
                    loading="lazy"
                    style={{ maxHeight: `${logoHeight}px` }}
                  />
                </a>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Keyframes: Using a <style> tag so we can inject dynamic duration without external CSS */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ensure seamless loop by setting the track width to fit content; the duplicated items allow -50% translate */
        .will-change-transform { display: flex; align-items: center; }

        /* Small screens: slightly slower animation and tighter gaps */
        @media (max-width: 640px) {
          .will-change-transform { gap: 12px; }
        }
      `}</style>
    </section>
  );
};

const HomePage = () => {
  const partnerLogos = [
    { src: '/image/patners/northampton.png', href: 'https://www.northampton.ac.uk/', alt: 'northampton' },
    { src: '/image/patners/northampton-town-council.webp', href: 'https://www.northamptontowncouncil.gov.uk/', alt: 'Microsoft' },
    { src: '/image/patners/university-of-Plymouth.png', href: 'https://www.plymouth.ac.uk/', alt: 'AWS' },
    { src: '/image/patners/google.webp', href: 'https://www.google.com/', alt: 'Salesforce' },
    { src: '/image/patners/icfai-raipur.svg', href: 'https://www.iuraipur.edu.in/', alt: 'Stripe' },
    { src: '/image/patners/Stunited.png', href: 'https://www.stunited.org/', alt: 'Shopify' },
    { src: '/image/patners/n8n.png', href: 'https://n8n.io/', alt: 'Shopify' },
  ];

  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 500+ Companies Worldwide
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Building the Future with AI{' '}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              AFTL crafts intelligent tools to simplify life and work — fast, secure, and powerful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl">
                Learn More About Us
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                See it in Action
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-60"></div>
          <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-80"></div>
        </div>
      </section>

      {/* Video Spotlight Section */}
      <VideoSpotlight
        driveUrl="https://drive.google.com/file/d/1WP636Jr-sFYARi490eWryGdyVOsGMoCl/view"
        quote="AI doesn't replace humans — it empowers them to do more."
        author="Shubham Tiwari"
      />

      {/* Our Partners - continuous sliding marquee */}
      <ContinuousPartners logos={partnerLogos} logoHeight={56} speed={28} />

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join 500+ companies that trust AFTL Limited to deliver innovative solutions and drive sustainable growth. 
                Let's discuss how we can help you achieve your digital transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-700 hover:text-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View Case Studies
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No commitment required • Free 30-minute consultation • Response within 24 hours
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
