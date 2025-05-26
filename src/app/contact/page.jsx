"use client";
import React from 'react';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to learn more about our AI solutions? 
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <ContactForm />

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="p-6 bg-black/30 rounded-lg backdrop-blur-sm">
            <i className="fas fa-envelope text-2xl text-blue-400 mb-4"></i>
            <h3 className="text-xl mb-2">Email</h3>
            <p className="text-gray-400">info@aftl.com</p>
          </div>
          
          <div className="p-6 bg-black/30 rounded-lg backdrop-blur-sm">
            <i className="fas fa-map-marker-alt text-2xl text-blue-400 mb-4"></i>
            <h3 className="text-xl mb-2">Location</h3>
            <p className="text-gray-400">Singapore</p>
          </div>
          
          <div className="p-6 bg-black/30 rounded-lg backdrop-blur-sm">
            <i className="fas fa-clock text-2xl text-blue-400 mb-4"></i>
            <h3 className="text-xl mb-2">Business Hours</h3>
            <p className="text-gray-400">Mon - Fri: 9am - 6pm</p>
          </div>
        </div>
      </div>
    </div>
  );
} 