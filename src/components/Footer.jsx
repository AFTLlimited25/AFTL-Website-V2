"use client";
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import AnimatedLogo from './AnimatedLogo';

function Footer() {
  return (
    <footer className="bg-secondary-accent-graphite text-white py-2 z-10 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-2">
          <div className="col-span-1 flex items-center justify-center md:">
            <div className="w-32 h-22">
              <img src="/aftl logo (1).svg" alt="AFTL Logo" className="w-full h-full" />
            </div>
          </div>
          <div className="col-span-3 grid md:grid-cols-3 gap-2 ">
            <div className="md:ml-auto">
              <h4 className="font-bold mb-2 text-white">Product</h4>
              <ul>
                <li><Link href="/products#features" className="text-footer-link hover:underline">Features</Link></li>
                <li><Link href="/about#roadmap" className="text-footer-link hover:underline">Pricing</Link></li>
                <li><Link href="/about#roadmap" className="text-footer-link hover:underline">Roadmap</Link></li>
              </ul>
            </div>
            <div className="md:ml-auto">
              <h4 className="font-bold mb-2 text-white">Company</h4>
              <ul>
                <li><Link href="/about" className="text-footer-link hover:underline">About Us</Link></li>
                <li><Link href="/about#team" className="text-footer-link hover:underline">Our Team</Link></li>
                <li><Link href="/careers" className="text-footer-link hover:underline">Careers</Link></li>
              </ul>
            </div>
            <div className="md:ml-auto">
              <h4 className="font-bold mb-2 text-white">Support</h4>
              <ul>
                <li><Link href="/help" className="text-footer-link hover:underline">Help Center / FAQs</Link></li>
                <li><Link href="/contact" className="text-footer-link hover:underline">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="text-footer-link hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-footer-link hover:underline">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-xs text-cream">&copy; {new Date().getFullYear()} AFTL / Platrr. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/company/advanced-future-tech-limited" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: '#0077B5'}} /></a>
            <a href="#" className="hover:text-gray-400"><FontAwesomeIcon icon={faTwitter} size="2x" style={{color: '#1DA1F2'}} /></a>
            <a href="#" className="hover:text-gray-400"><FontAwesomeIcon icon={faInstagram} size="2x" style={{color: '#E4405F'}} /></a>
            <a href="#" className="hover:text-gray-400"><FontAwesomeIcon icon={faYoutube} size="2x" style={{color: '#FF0000'}} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
