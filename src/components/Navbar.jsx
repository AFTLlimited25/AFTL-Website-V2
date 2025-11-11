"use client";
import React, { useState } from "react";
import Link from "next/link";
import AnimatedLogo from "@/components/AnimatedLogo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#111111] text-white fixed w-full z-50 shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">

        {/* ✅ Logo */}
        <Link href="/" className="flex items-center">
          <AnimatedLogo />
        </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">

          <Link
            href="/"
            className="px-4 py-2 rounded-full border border-gray-600 hover:bg-gray-700 hover:text-white transition font-semibold"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="px-4 py-2 rounded-full border border-gray-600 hover:bg-gray-700 hover:text-white transition"
          >
            Products
          </Link>

          <a
            href="https://platrr.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-gray-600 hover:bg-gray-700 hover:text-white transition font-semibold"
          >
            Platrr
          </a>

          <Link
            href="/about"
            className="px-4 py-2 rounded-full border border-gray-600 hover:bg-gray-700 hover:text-white transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-full border border-gray-600 hover:bg-gray-700 hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ✅ Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] text-white border-t border-gray-700 py-4 flex flex-col space-y-4 items-center">

          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
            Home
          </Link>

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
  );
}
