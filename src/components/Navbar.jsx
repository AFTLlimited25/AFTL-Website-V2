"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Don't render navbar on landing page
  if (pathname === '/') {
    return null;
  }

  const navItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Products', path: '/products', icon: 'cube' },
    { name: 'About', path: '/about', icon: 'info-circle' },
    { name: 'Blog', path: '/blog', icon: 'newspaper' },
    { name: 'Contact', path: '/contact', icon: 'envelope' }
  ];

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* Hamburger Button and Logo */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-black/50 backdrop-blur-lg h-20">
          <div className="container mx-auto px-6 h-full relative">
            <div className="flex justify-between items-center absolute inset-x-6 -bottom-4">
              <Link href="/" className="flex items-center">
                <img
                  src="https://ucarecdn.com/17d72eb0-636f-4470-b2f2-bfa7633d12d5/-/format/auto/"
                  alt="AFTL Logo"
                  className="h-32 w-auto mix-blend-screen opacity-90 filter brightness-125"
                />
              </Link>
              <button
                className="text-gray-300 hover:text-white z-50 bg-black/50 backdrop-blur-lg p-2 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Spacer */}
      <div className="h-16"></div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col pt-36 px-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center space-x-3 py-4 border-b border-white/10 transition-colors duration-300 ${
                isActive(item.path)
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <i className={`fas fa-${item.icon} w-6`}></i>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar; 