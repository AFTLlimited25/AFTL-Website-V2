"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faRobot,
  faImage,
  faComment,
  faHeartbeat,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import AnimatedLogo from '@/components/AnimatedLogo';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import PartnersCarousel from '@/components/PartnersCarousel';

function MainComponent() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);
  const router = useRouter();

  const videoId = "1WP636Jr-sFYARi490eWryGdyVOsGMoCl";
  const videoUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;

  const products = [
    {
      name: "TaskMe AI",
      description: "Your personal AI life admin assistant",
      icon: faRobot,
      status: "beta",
    },
    {
      name: "AI Image Generator",
      description: "Create stunning visuals with AI",
      icon: faImage,
      status: "coming-soon",
    },
    {
      name: "Telegram Voice Agent",
      description: "Voice-enabled AI assistant on Telegram",
      icon: faComment,
      status: "live",
    },
    {
      name: "Symptom Checker",
      description: "AI-powered health guidance",
      icon: faHeartbeat,
      status: "coming-soon",
    },
    {
      name: "Snap Recipe",
      description: "Get the recipe from any food picture",
      icon: faUtensils,
      status: "live",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-base/50 backdrop-blur-md fixed w-full z-50">
        <div className="container mx-auto px-4 h-20 relative">
          <div className="flex justify-between items-center absolute inset-x-6 -bottom-4">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center">
                <AnimatedLogo />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 shadow-lg">
                <Link href="/products" className="nav-link">
                  Products
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 shadow-lg">
                <a href="https://platrr.co.uk" target="_blank" rel="noopener noreferrer" className="nav-link text-platrr-orange">
                  Platrr
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 shadow-lg">
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 shadow-lg">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <AnimateOnScroll staggered={true}>
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-extrabold max-w-4xl mx-auto">
              "Building the Future with AI"
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary-accent-graphite">
              AFTL crafts intelligent tools to simplify life and work — fast, secure, and powerful.
            </h2>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
            <Link
              href="/about"
              className="btn btn-primary"
            >
              Learn More About Us
            </Link>
            <Link
              href="/contact"
              className="btn btn-secondary"
            >
              See it in Action
            </Link>
          </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Video Section */}
      <AnimateOnScroll>
        <div className="py-20 bg-light-mist">
          <div className="container mx-auto px-4 flex items-center">
            <div className="relative aspect-video max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl">
              {!videoPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setVideoPlaying(true)}
                    className="bg-base/90 hover:bg-base text-primary-text rounded-full w-20 h-20 flex items-center justify-center transition-all duration-300 z-10"
                    aria-label="Play Video"
                  >
                    <FontAwesomeIcon icon={faPlay} className="text-3xl" />
                  </button>
                  <img
                    src="https://ucarecdn.com/17d72eb0-636f-4470-b2f2-bfa7633d12d5/-/format/auto/"
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://drive.google.com/file/d/${videoId}/preview`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Company Video"
                  ></iframe>
                </div>
              )}
            </div>
            <div className="ml-8 max-w-md">
              <p className="text-2xl font-light text-aftl-body/70">
                "AI doesn’t replace humans — it empowers them to do more."
              </p>
              <p className="text-right text-aftl-subtext mt-4">- Shubham Tiwari</p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      <PartnersCarousel />

      {/* Platrr Card */}
      <AnimateOnScroll>
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Product</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-base-secondary backdrop-blur-lg rounded-2xl p-8 transition-all duration-500 border border-border-soft">
                <div className="flex items-center mb-6">
                  <img src="/platrrsvg.svg" alt="Platrr Logo" className="h-24 mr-4" />
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-bold text-black uppercase">Turn any meal photo into a recipe with AI.</p>
                    <p className="text-md text-aftl-subtext mt-2">From photo to plate — get ingredients, recipes, and nutrition facts in seconds with AI.</p>
                    <div className="mt-4">
                      <Link href="/products" className="btn btn-primary">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

    </div>
  );
}

export default MainComponent;
