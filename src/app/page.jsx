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
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className="relative min-h-screen text-gray-800 overflow-hidden font-poppins bg-[#f4f4f4]">
      {/* Light smoother background */}
      <div className="absolute inset-0 -z-20 animate-moveBg bg-[radial-gradient(circle_at_30%_20%,rgba(200,220,255,0.6),transparent),radial-gradient(circle_at_70%_80%,rgba(255,220,240,0.5),transparent)]"></div>
      <div className="absolute inset-0 -z-10 backdrop-blur-[2px]"></div>

      {/* ✅ UPDATED NAVBAR */}
{/* ✅ UPDATED GREYESH BLACK NAVBAR */}
<nav className="bg-[#111111] text-white fixed w-full z-50 shadow-lg border-b border-gray-800">
  <div className="container mx-auto px-4 h-20 flex justify-between items-center">

    {/* Logo */}
    <Link href="/" className="flex items-center">
      <AnimatedLogo /> {/* Logo stays visible on greyish black */}
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-6">
      <Link
        href="/products"
        className="px-5 py-2 rounded-full border border-gray-600 hover:bg-gray-700 hover:text-white transition"
      >
        Products
      </Link>
      <a
        href="https://platrr.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 rounded-full border border-gray-600 hover:bg-gray-700 hover:text-white transition font-semibold"
      >
        Platrr
      </a>
      <Link
        href="/about"
        className="px-5 py-2 rounded-full border border-gray-600 hover:bg-gray-700 hover:text-white transition"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="px-5 py-2 rounded-full border border-gray-600 hover:bg-gray-700 hover:text-white transition"
      >
        Contact
      </Link>
    </div>

    {/* Mobile Hamburger */}
    <button
      className="md:hidden text-white text-3xl focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "✕" : "☰"}
    </button>
  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="md:hidden bg-[#111111] text-white border-t border-gray-700 py-4 flex flex-col space-y-4 items-center">
      <Link href="/products" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
        Products
      </Link>
      <a
        href="https://platrr.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setMenuOpen(false)}
        className="hover:text-gray-300"
      >
        Platrr
      </a>
      <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
        About
      </Link>
      <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
        Contact
      </Link>
    </div>
  )}
</nav>




      {/* Hero Section */}
      <AnimateOnScroll staggered={true}>
        <div className="pt-32 pb-20 px-4 text-center">
          <div className="container mx-auto">
            <h1 className="text-6xl md:text-7xl font-extrabold max-w-4xl mx-auto mb-6 text-gray-900 drop-shadow-xl">
              "Building the Future with AI"
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-12">
              AFTL crafts intelligent tools to simplify life and work — fast, secure, and powerful.
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
              <Link href="/about" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-lg">
                Learn More About Us
              </Link>
              <Link href="/contact" className="bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-200 transition shadow-lg">
                See it in Action
              </Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Video Section */}
      <AnimateOnScroll>
        <div className="py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="relative aspect-video max-w-2xl w-full rounded-xl overflow-hidden shadow-xl border border-gray-300">
              {!videoPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <button
                    onClick={() => setVideoPlaying(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-20 h-20 flex items-center justify-center transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faPlay} className="text-3xl" />
                  </button>
                  <img
                    src="https://ucarecdn.com/17d72eb0-636f-4470-b2f2-bfa7633d12d5/-/format/auto/"
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                </div>
              ) : (
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://drive.google.com/file/d/${videoId}/preview`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
            <div className="max-w-md text-gray-700">
              <p className="text-2xl font-light italic">
                "AI doesn’t replace humans — it empowers them to do more."
              </p>
              <p className="text-right text-gray-500 mt-4">- Shubham Tiwari</p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Partners */}
      <PartnersCarousel />

      {/* Product Card */}
      <AnimateOnScroll>
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Product</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-300">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img src="/platrrsvg.svg" alt="Platrr Logo" className="h-24" />
                  <div>
                    <p className="text-lg font-semibold text-gray-900 uppercase">
                      Turn any meal photo into a recipe with AI.
                    </p>
                    <p className="text-md text-gray-600 mt-2">
                      From photo to plate — get ingredients, recipes, and nutrition facts in seconds.
                    </p>
                    <div className="mt-4">
                      <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
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

      <style jsx global>{`
        @keyframes moveBg {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-moveBg {
          background-size: 300% 300%;
          animation: moveBg 22s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
