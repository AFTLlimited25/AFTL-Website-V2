// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import FaqsPage from './pages/FaqsPage';

const nav = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQs', path: '/faqs' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const activeClass = 'bg-blue-700 text-white';
  const baseClass =
    'px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:bg-blue-50 hover:text-blue-700';

  // Framer Motion variants for header logo
  const headerLogoVariants = {
    hidden: { y: -8, opacity: 0, scale: 0.98 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    tap: { scale: 0.96 },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" aria-label="AFTL home">
              {/* Use the uploaded local path as the src (replace if you host differently) */}
              <motion.img
                src="/image/aftl-header.png"
                alt="AFTL Limited"
                className="h-10 w-auto object-contain"
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.06, rotate: -1 }}
                whileTap="tap"
                variants={headerLogoVariants}
                draggable={false}
                loading="eager"
                style={{ willChange: 'transform' }}
              />
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {nav.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? `${activeClass} px-3 py-2 rounded-md text-sm font-medium` : baseClass
                  }
                  end={item.path === '/'}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-blue-50 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  // Footer logo animation (animate when scrolled into view)
  const footerLogoVariants = {
    hidden: { y: 12, opacity: 0, scale: 0.98 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <motion.img
                src="/image/aftl-footer.png"
                alt="AFTL Limited"
                className="h-12 w-auto object-contain"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={footerLogoVariants}
                draggable={false}
                loading="lazy"
                style={{ filter: 'brightness(0) invert(1)' }} // if the source is white logo, this keeps it visible on dark footer
              />
            </div>

            <p className="text-gray-300 mb-4 max-w-md">
              Leading provider of innovative solutions and exceptional service excellence. Committed to delivering quality
              results that exceed expectations.
            </p>
            <div className="flex space-x-4">
              <Phone className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">+44 (0) 123 456 7890</span>
            </div>
            <div className="flex space-x-4 mt-2">
              <Mail className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">info@aftl.co.uk</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Business Street</p>
                  <p>London, UK SW1A 1AA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 AFTL Limited. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AppShell() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          {/* 404 fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  // Optional context object — useful if you later add SSR rendering
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </HelmetProvider>
  );
}
