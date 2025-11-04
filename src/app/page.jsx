"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faRobot,
  faImage,
  faComment,
  faHeartbeat,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedLogo from "@/components/AnimatedLogo";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PartnersCarousel from "@/components/PartnersCarousel";

function MainComponent() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);
  const router = useRouter();

  const videoId = "1WP636Jr-sFYARi490eWryGdyVOsGMoCl";

  const products = [
    { name: "TaskMe AI", description: "Your personal AI life admin assistant", icon: faRobot, status: "beta" },
    { name: "AI Image Generator", description: "Create stunning visuals with AI", icon: faImage, status: "coming-soon" },
    { name: "Telegram Voice Agent", description: "Voice-enabled AI assistant on Telegram", icon: faComment, status: "live" },
    { name: "Symptom Checker", description: "AI-powered health guidance", icon: faHeartbeat, status: "coming-soon" },
    { name: "Snap Recipe", description: "Get the recipe from any food picture", icon: faUtensils, status: "live" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="relative min-h-screen text-gray-100 overflow-hidden font-poppins bg-black">
      {/* 🌌 Enhanced Dark Blue Animated Gradient Background */}
      <div className="absolute inset-0 -z-20 animate-moveBg bg-[radial-gradient(circle_at_30%_20%,rgba(0,150,255,0.5),transparent),radial-gradient(circle_at_70%_80%,rgba(255,0,150,0.4),transparent),radial-gradient(circle_at_50%_50%,rgba(0,255,200,0.3),transparent)]"></div>

      {/* Soft Overlay for Readability */}
      <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-[2px]"></div>

      {/* 🧭 Navigation */}
      <nav className="bg-black/30 backdrop-blur-md fixed w-full z-50 shadow-md border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex justify-between items-center text-white">
          <Link href="/" className="flex items-center">
            <AnimatedLogo />
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/products" className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition">
              Products
            </Link>
            <a
              href="https://platrr.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 text-blue-400 font-semibold transition"
            >
              Platrr
            </a>
            <Link href="/about" className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition">
              About
            </Link>
            <Link href="/contact" className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* 🌟 Hero Section */}
      <AnimateOnScroll staggered={true}>
        <div className="pt-32 pb-20 px-4 text-center">
          <div className="container mx-auto">
            <h1 className="text-6xl md:text-7xl font-extrabold max-w-4xl mx-auto mb-6 text-white drop-shadow-xl">
              "Building the Future with AI"
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-12">
              AFTL crafts intelligent tools to simplify life and work — fast, secure, and powerful.
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
              <Link
                href="/about"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-lg"
              >
                Learn More About Us
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/20 transition shadow-lg"
              >
                See it in Action
              </Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* 🎬 Video Section */}
      <AnimateOnScroll>
        <div className="py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="relative aspect-video max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl border border-white/20">
              {!videoPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <button
                    onClick={() => setVideoPlaying(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-20 h-20 flex items-center justify-center transition-all duration-300 z-10"
                    aria-label="Play Video"
                  >
                    <FontAwesomeIcon icon={faPlay} className="text-3xl" />
                  </button>
                  <img
                    src="https://ucarecdn.com/17d72eb0-636f-4470-b2f2-bfa7633d12d5/-/format/auto/"
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
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
            <div className="max-w-md text-gray-200">
              <p className="text-2xl font-light italic">
                "AI doesn’t replace humans — it empowers them to do more."
              </p>
              <p className="text-right text-gray-400 mt-4">- Shubham Tiwari</p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* 🤝 Partners Carousel */}
      <PartnersCarousel />

      {/* 💡 Product Card */}
      <AnimateOnScroll>
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Our Product
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img src="/platrrsvg.svg" alt="Platrr Logo" className="h-24 brightness-110" />
                  <div>
                    <p className="text-lg font-semibold text-white uppercase">
                      Turn any meal photo into a recipe with AI.
                    </p>
                    <p className="text-md text-gray-300 mt-2">
                      From photo to plate — get ingredients, recipes, and nutrition facts in seconds with AI.
                    </p>
                    <div className="mt-4">
                      <Link
                        href="/products"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                      >
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

      {/* 🌈 Animation CSS inside JSX */}
      <style jsx global>{`
        @keyframes moveBg {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        .animate-moveBg {
          background-size: 300% 300%;
          animation: moveBg 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
