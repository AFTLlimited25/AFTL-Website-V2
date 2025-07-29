"use client";
import React from 'react';
import ContactForm from '@/components/ContactForm';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 text-aftl-body">
      <AnimateOnScroll>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-light mb-4 text-aftl-heading">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-aftl-body">
              Have a question or want to learn more about our AI solutions? 
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <ContactForm />

          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="p-6 bg-base-secondary rounded-lg backdrop-blur-sm border border-border-soft">
              <i className="fas fa-envelope text-2xl text-aftl-heading mb-4"></i>
              <h3 className="mb-2 text-aftl-heading">Email</h3>
              <p className="text-aftl-body">contact@aftl.co.uk</p>
            </div>
            
            <div className="p-6 bg-base-secondary rounded-lg backdrop-blur-sm border border-border-soft">
              <i className="fas fa-map-marker-alt text-2xl text-aftl-heading mb-4"></i>
              <h3 className="mb-2 text-aftl-heading">Location</h3>
              <p className="text-aftl-body">United Kingdom</p>
            </div>
            
            <div className="p-6 bg-base-secondary rounded-lg backdrop-blur-sm border border-border-soft">
              <i className="fas fa-clock text-2xl text-aftl-heading mb-4"></i>
              <h3 className="mb-2 text-aftl-heading">Business Hours</h3>
              <p className="text-aftl-body">Mon - Fri: 9am - 6pm</p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
