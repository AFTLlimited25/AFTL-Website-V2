"use client";
import React from 'react';
import Image from 'next/image';

function ProductDetailPage({ params }) {
  const { productName } = params;

  const products = [
    {
      name: "TaskMe AI",
      description: "Your personal AI life admin assistant",
      longDescription: "TaskMe AI is your intelligent personal assistant that helps manage your daily tasks, schedule appointments, and handle routine administrative work. Powered by advanced AI, it learns your preferences and becomes more efficient over time.",
      icon: "robot",
      status: "beta",
      image: "/taskmeai-new.jpg",
      slug: "taskme-ai",
      features: [
        "Natural language task creation",
        "Smart scheduling and reminders",
        "Email and calendar integration",
        "Automated follow-ups",
        "Custom workflow automation"
      ],
      benefits: [
        "Save 10+ hours per week",
        "Never miss important tasks",
        "Reduce administrative overhead",
        "Improve work-life balance"
      ]
    },
    {
      name: "AI Image Generator",
      description: "Create stunning visuals with AI",
      longDescription: "Transform your ideas into beautiful images with our state-of-the-art AI Image Generator. Whether you need marketing materials, artistic concepts, or unique designs, our AI can create them in seconds.",
      icon: "image",
      status: "coming-soon",
      image: "https://via.placeholder.com/150",
      slug: "ai-image-generator",
      features: [
        "Text-to-image generation",
        "Style customization",
        "High-resolution output",
        "Batch processing",
        "Commercial usage rights"
      ],
      benefits: [
        "Reduce design costs",
        "Quick concept visualization",
        "Unlimited creative possibilities",
        "No design skills needed"
      ]
    },
    {
      name: "Telegram AI Agent",
      description: "Voice-enabled AI assistant on Telegram",
      longDescription: "Connect with your AI assistant through voice messages on Telegram. Perfect for hands-free operation, our Voice Agent understands context, responds naturally, and helps you stay productive on the go.",
      icon: "comment",
      status: "live",
      image: "https://via.placeholder.com/150",
      slug: "telegram-ai-agent",
      features: [
        "Voice message processing",
        "Natural language understanding",
        "Multi-language support",
        "Context awareness",
        "Custom command creation"
      ],
      benefits: [
        "Hands-free operation",
        "Quick voice responses",
        "Seamless Telegram integration",
        "Accessible anywhere"
      ]
    },
    {
      name: "Symptom Checker",
      description: "AI-powered health guidance",
      longDescription: "Get preliminary health insights with our AI-powered Symptom Checker. Using advanced medical knowledge bases and machine learning, it helps you understand your symptoms and suggests when to seek professional medical advice.",
      icon: "heartbeat",
      status: "coming-soon",
      image: "https://via.placeholder.com/150",
      slug: "symptom-checker",
      features: [
        "Symptom analysis",
        "Health risk assessment",
        "Medical reference database",
        "Emergency guidance",
        "Health tracking"
      ],
      benefits: [
        "Quick health insights",
        "Better health decisions",
        "24/7 availability",
        "Privacy-focused"
      ]
    },
    {
      name: "Snap Recipe",
      description: "Get the recipe from any food picture",
      longDescription: "This product is all about getting the recipe from any food picture. When a user uploads a picture, it detects and finds the ingredients and using AI it also finds the exact recipe and even you can modify the recipe according to the servings with many more options",
      icon: "utensils",
      status: "Live",
      image: "/snaprecipe.jpg",
      slug: "snap-recipe",
      features: [
        "Detect ingredients from food picture",
        "Find exact recipe using AI",
        "Modify recipe according to servings",
        "Many more options"
      ],
      benefits: [
        "Get recipe from any food picture",
        "Find ingredients easily",
        "Modify recipe easily",
        "Discover new recipes"
      ]
    }
  ];

  const product = products.find((p) => p.slug === productName);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-light text-center mb-8">
            Product Not Found
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Product with slug "{productName}" not found.
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
            <h3 className="text-xl mb-4 text-blue-400">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <i className="fas fa-check text-green-400"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl mb-4 text-blue-400">Benefits</h3>
            <ul className="space-y-3">
              {product.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
