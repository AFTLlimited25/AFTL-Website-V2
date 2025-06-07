"use client";
import React from 'react';
import Image from 'next/image';

function ProductDetailPage({ params }) {
  const { slug } = params;

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
      icon: "image",
      status: "coming-soon",
      image: "https://via.placeholder.com/150",
      slug: "ai-image-generator",
    },
    {
      name: "Telegram AI Agent",
      description: "Voice-enabled AI assistant on Telegram",
      icon: "comment",
      status: "live",
      image: "https://via.placeholder.com/150",
      slug: "telegram-ai-agent",
    },
    {
      name: "Symptom Checker",
      description: "AI-powered health guidance",
      icon: "heartbeat",
      status: "coming-soon",
      image: "https://via.placeholder.com/150",
      slug: "symptom-checker",
    },
    {
      name: "Snap Recipe",
      description: "Get the recipe from any food picture",
      icon: "utensils",
      status: "Live",
      image: "/snaprecipe.jpg",
      slug: "snap-recipe",
    }
  ];

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-light text-center mb-8">
            Product Not Found
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Product with slug "{slug}" not found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-light text-center mb-8">
          {product.name}
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="object-cover rounded-2xl"
            />
          </div>
          <div>
            <p className="text-xl text-gray-300 mb-6">
              {product.longDescription}
            </p>
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
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
