"use client";
import React from 'react';
import ContactForm from '@/components/ContactForm';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <AnimateOnScroll>
        <div className="container mx-auto px-4">
          
          {/* Page Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              Have a question or want to learn more about our AI solutions?
              We'd love to hear from you. Fill out the form below, and we’ll respond soon.
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm />

          {/* Info Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <i className="fas fa-envelope text-3xl text-gray-900 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">contact@aftl.co.uk</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <i className="fas fa-map-marker-alt text-3xl text-gray-900 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">United Kingdom</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <i className="fas fa-clock text-3xl text-gray-900 mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon – Fri: 9am – 6pm</p>
            </div>

          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
