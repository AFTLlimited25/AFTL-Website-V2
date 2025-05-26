"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';

function MainComponent() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false); // In production, this should be handled by proper auth
  const videoId = "1WP636Jr-sFYARi490eWryGdyVOsGMoCl";
  const videoUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;

  const products = [
    {
      name: "TaskMe AI",
      description: "Your personal AI life admin assistant",
      icon: "robot",
      status: "beta",
    },
    {
      name: "AI Image Generator",
      description: "Create stunning visuals with AI",
      icon: "image",
      status: "coming-soon",
    },
    {
      name: "Telegram Voice Agent",
      description: "Voice-enabled AI assistant on Telegram",
      icon: "comment",
      status: "live",
    },
    {
      name: "Symptom Checker",
      description: "AI-powered health guidance",
      icon: "heartbeat",
      status: "coming-soon",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md fixed w-full z-50">
        <div className="container mx-auto px-4 h-20 relative">
          <div className="flex justify-between items-center absolute inset-x-6 -bottom-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://ucarecdn.com/17d72eb0-636f-4470-b2f2-bfa7633d12d5/-/format/auto/"
                alt="AFTL Logo"
                className="h-32 w-auto mix-blend-screen opacity-90 filter brightness-125"
              />
            </div>
            <div className="space-x-8 hidden md:block">
              <a href="/products" className="text-white hover:text-blue-400 text-lg">
                Products
              </a>
              <a href="/solutions" className="text-white hover:text-blue-400 text-lg">
                Solutions
              </a>
              <a href="/about" className="text-white hover:text-blue-400 text-lg">
                About
              </a>
              <a href="/blog" className="text-white hover:text-blue-400 text-lg">
                Blog
              </a>
              <a href="/contact" className="text-white hover:text-blue-400 text-lg">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animation */}
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 font-roboto">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              We Build the Future
            </span>
            <br />
            with AI
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Empowering businesses and individuals with cutting-edge AI solutions
            that transform the way we work and live.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
            <Link href="/products" className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 text-lg inline-block text-center">
              Try Our Products
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300 text-lg inline-block text-center">
              Book a Demo
            </Link>
            <button className="px-8 py-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300 text-lg">
              Join Beta
            </button>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            {!videoPlaying ? (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <button
                  onClick={() => setVideoPlaying(true)}
                  className="bg-white/90 hover:bg-white text-black rounded-full w-20 h-20 flex items-center justify-center transition-all duration-300 z-10"
                >
                  <i className="fas fa-play text-3xl"></i>
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
        </div>
      </div>

      {/* Social Proof */}
      <div className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 mb-8">Trusted By</p>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="text-gray-400 text-xl">Google for Startups</div>
            <div className="text-gray-400 text-xl">OpenRouter</div>
            <div className="text-gray-400 text-xl">n8n</div>
          </div>
        </div>
      </div>

      {/* Product Carousel */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-16 text-center">
            Our AI Products
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-500">
              <div className="flex items-center mb-6">
                <i
                  className={`fas fa-${products[currentProduct].icon} text-4xl text-blue-400 mr-4`}
                ></i>
                <div>
                  <h3 className="text-2xl font-light">
                    {products[currentProduct].name}
                  </h3>
                  <p className="text-gray-400">
                    {products[currentProduct].description}
                  </p>
                </div>
                <div className="ml-auto">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      products[currentProduct].status === "live"
                        ? "bg-green-500/20 text-green-400"
                        : products[currentProduct].status === "beta"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    {products[currentProduct].status}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProduct(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentProduct === index ? "bg-blue-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <img
                src="https://ucarecdn.com/17d72eb0-636f-4470-b2f2-bfa7633d12d5/-/format/auto/"
                alt="AFTL Logo"
                className="h-24 w-auto mb-4 mix-blend-screen opacity-90 filter brightness-125"
              />
              <p className="text-gray-400">
                AI for Everyone. By Humans, For Humans.
              </p>
            </div>
            <div>
              <h4 className="text-lg mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>TaskMe AI</li>
                <li>AI Image Generator</li>
                <li>Telegram Voice Agent</li>
                <li>Symptom Checker</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg mb-4">Connect</h4>
              <div className="flex space-x-4 text-gray-400">
                <i className="fab fa-twitter text-xl hover:text-blue-400 cursor-pointer"></i>
                <i className="fab fa-linkedin text-xl hover:text-blue-400 cursor-pointer"></i>
                <i className="fab fa-github text-xl hover:text-white cursor-pointer"></i>
                <i className="fab fa-discord text-xl hover:text-purple-400 cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 AFTL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;