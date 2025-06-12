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
            <div className="space-x-8 hidden md:flex">
              <Link href="/products" className="text-white hover:text-blue-400 text-lg">
                Products
              </Link>
              <Link href="/solutions" className="text-white hover:text-blue-400 text-lg">
                Solutions
              </Link>
              <Link href="/about" className="text-white hover:text-blue-400 text-lg">
                About
              </Link>
              <Link href="/blog" className="text-white hover:text-blue-400 text-lg">
                Blog
              </Link>
              <Link href="/contact" className="text-white hover:text-blue-400 text-lg">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 font-roboto">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              We Build the Future
            </span>
            <br />
            with AI
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8">
            AFTL builds next-generation AI tools that automate administrative tasks and empower productivity.
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We’re an AI solutions company that develops user-friendly AI agents and digital productivity tools to simplify your daily workflow.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
            <Link
              href="/about"
              className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 text-lg inline-block text-center"
            >
              Learn More About Us
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300 text-lg inline-block text-center"
            >
              See it in Action
            </Link>
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
                <FontAwesomeIcon
                  icon={products[currentProduct].icon}
                  className="text-4xl text-blue-400 mr-4"
                />
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
                  aria-label={`Go to product ${index + 1}`}
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
      <footer
      className="bg-black/90 text-gray-300 py-10"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <section aria-labelledby="footer-about">
            <h2
              id="footer-about"
              className="text-lg font-semibold text-white mb-4"
            >
              About AFTL
            </h2>
            <p className="text-sm leading-relaxed">
              Empowering the future with AI-driven solutions. Our mission is to
              innovate and integrate AI seamlessly into everyday technology.
            </p>
          </section>

          {/* Company Navigation */}
          <nav aria-labelledby="footer-company" className="space-y-2">
            <h2
              id="footer-company"
              className="text-lg font-semibold text-white mb-4"
            >
              Company
            </h2>
            <ul>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          {/* Resources Navigation */}
          <nav aria-labelledby="footer-resources" className="space-y-2">
            <h2
              id="footer-resources"
              className="text-lg font-semibold text-white mb-4"
            >
              Resources
            </h2>
            <ul>
              <li>
                <a
                  href="#blog"
                  className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#docs"
                  className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Support
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <section aria-labelledby="footer-social">
            <h2
              id="footer-social"
              className="text-lg font-semibold text-white mb-4"
            >
              Follow Us
            </h2>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com/company/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on GitHub"
                className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                GitHub
              </a>
            </div>
          </section>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} AFTL. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  );
}

export default MainComponent;
