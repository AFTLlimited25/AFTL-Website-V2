"use client";
import React from "react";
import Link from 'next/link';

function ProductsPage() {
  const products = [
    {
      name: "TaskMe AI",
      description: "Your personal AI life admin assistant",
      longDescription: "Simplify life. Streamline work. Focus on what truly matters.\n\nTaskMe AI is your personal, AI-driven productivity companion, crafted to take the overwhelm out of life admin. Whether it’s managing appointments, sending reminders, tackling your daily to-do list, or drafting emails—TaskMe AI handles it all with ease and precision.\n\nImagine a personal assistant that’s always on, available 24/7, proactively managing your schedule and understanding your unique preferences. From managing bookings and cancellations to seamlessly integrating with Gmail, Google Calendar, Outlook, and more—TaskMe AI fits right into your digital world, working smarter so you can work better.\n\n✨ Why Choose TaskMe AI?\n✅ 24/7 Personal Assistant — Always available, always organized.\n\n✅ Total Life Admin Solution — From emails to reminders, bookings to cancellations—TaskMe AI keeps everything on track.\n\n✅ Smarter Scheduling — Never miss an appointment, double-book, or forget a task again.\n\n✅ Seamless Integration — Works perfectly with your favorite tools like Gmail, Google Calendar, Outlook, and more.\n\n✅ Intelligent, Adaptive, and Private — Learns your routines and preferences while keeping your data secure.\n\nTaskMe AI isn’t just another app—it’s your productivity game-changer.\n\nFree yourself from repetitive tasks and focus on what truly matters. Let TaskMe AI handle the admin—so you can live your best life.\n\n👉 Start now and unlock a new era of productivity!",
      icon: "robot",
      status: "beta",
      image: "/taskmeai-new.jpg",
      slug: "taskme-ai",
    },
    {
      name: "AI Image Generator",
      description: "Create stunning visuals with AI",
      longDescription: "Transform your ideas into beautiful images with our state-of-the-art AI Image Generator. Whether you need marketing materials, artistic concepts, or unique designs, our AI can create them in seconds.",
      icon: "image",
      status: "coming-soon",
      image: "https://via.placeholder.com/150",
      slug: "ai-image-generator",
    },
    {
      name: "Telegram AI Agent",
      description: "Voice-enabled AI assistant on Telegram",
      longDescription: "Connect with your AI assistant through voice messages on Telegram. Perfect for hands-free operation, our Voice Agent understands context, responds naturally, and helps you stay productive on the go.",
      icon: "comment",
      status: "live",
      image: "https://via.placeholder.com/150",
      slug: "telegram-ai-agent",
    },
    {
      name: "Symptom Checker",
      description: "AI-powered health guidance",
      longDescription: "Get preliminary health insights with our AI-powered Symptom Checker. Using advanced medical knowledge bases and machine learning, it helps you understand your symptoms and suggests when to seek professional medical advice.",
      icon: "heartbeat",
      status: "coming-soon",
      image: "https://via.placeholder.com/150",
      slug: "symptom-checker",
    },
    {
      name: "Snap Recipe",
      description: "Get the recipe from any food picture",
      longDescription: "This product is all about getting the recipe from any food picture. When a user uploads a picture, it detects and finds the ingredients and using AI it also finds the exact recipe and even you can modify the recipe according to the servings with many more options",
      icon: "utensils",
      status: "Live",
      image: "/snaprecipe.jpg",
      slug: "snap-recipe",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-24">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-light text-center mb-8">
          Our AI Products
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Discover our suite of AI-powered solutions designed to transform your daily life and business operations.
        </p>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 shadow-lg backdrop-blur-lg rounded-2xl p-8 hover:scale-105 transition-all duration-300 mb-4">
              <div className="flex items-start gap-6">
                <img
                  src={product.image}
                  alt={`AI Product: ${product.name}`}
                  loading="lazy"
                  style={{aspectRatio: '1 / 1', objectFit: 'cover'}}
                  className="w-20 h-12 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h2 style={{fontFamily: 'sans-serif'}} className="text-3xl font-light">{product.name}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      product.status === "live"
                        ? "bg-green-500/20 text-green-400"
                        : product.status === "beta"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    {product.status}
                  </span>
                  </div>
                  <p style={{fontFamily: 'sans-serif'}} className="text-gray-300 text-lg mb-6">
                    {product.description}
                  </p>
                  
                  <div className="mt-8 flex gap-4">
                    <Link href={`/products/${product.slug}`} className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-light mb-6">Ready to Transform Your Work?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already benefiting from our AI-powered solutions.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
