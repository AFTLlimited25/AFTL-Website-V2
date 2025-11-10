"use client";
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-6 border-t z-10 relative">
      <div className="container mx-auto px-4">
        
        {/* Main Grid */}
        <div className="grid md:grid-cols-4 gap-6 text-center md:text-left">
          
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start items-center">
            <div className="w-28 md:w-32">
              <img src="/aftl logo (1).svg" alt="AFTL Logo" className="w-full h-auto" />
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2">Product</h4>
              <ul className="space-y-1">
                <li><Link href="/products#features" className="text-gray-600 hover:text-black">Features</Link></li>
                <li><Link href="/about#roadmap" className="text-gray-600 hover:text-black">Pricing</Link></li>
                <li><Link href="/about#roadmap" className="text-gray-600 hover:text-black">Roadmap</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">Company</h4>
              <ul className="space-y-1">
                <li><Link href="/about" className="text-gray-600 hover:text-black">About Us</Link></li>
                <li><Link href="/about#team" className="text-gray-600 hover:text-black">Our Team</Link></li>
                <li><Link href="/careers" className="text-gray-600 hover:text-black">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2">Support</h4>
              <ul className="space-y-1">
                <li><Link href="/help" className="text-gray-600 hover:text-black">Help Center / FAQs</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-black">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-black">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-gray-600 hover:text-black">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright + Icons */}
        <div className="mt-6 pt-6 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} AFTL / Platrr. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-3">
            <a href="https://www.linkedin.com/company/advanced-future-tech-limited" target="_blank" className="hover:opacity-70">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="#" className="hover:opacity-70">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="hover:opacity-70">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="hover:opacity-70">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
