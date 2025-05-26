"use client";
import React from "react";

function ProductsPage() {
  const products = [
    {
      name: "TaskMe AI",
      description: "Your personal AI life admin assistant",
      longDescription: "TaskMe AI is your intelligent personal assistant that helps manage your daily tasks, schedule appointments, and handle routine administrative work. Powered by advanced AI, it learns your preferences and becomes more efficient over time.",
      icon: "robot",
      status: "beta",
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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-blue-500/20 p-4 rounded-xl">
                  <i className={`fas fa-${product.icon} text-4xl text-blue-400`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-light">{product.name}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      product.status === "live"
                        ? "bg-green-500/20 text-green-400"
                        : product.status === "beta"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-purple-500/20 text-purple-400"
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    {product.longDescription}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl mb-4 text-blue-400">Key Features</h3>
                      <ul className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <i className="fas fa-check text-green-400"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
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

                  <div className="mt-8 flex gap-4">
                    {product.status === "live" && (
                      <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                        Try Now
                      </button>
                    )}
                    {product.status === "beta" && (
                      <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                        Join Beta
                      </button>
                    )}
                    {product.status === "coming-soon" && (
                      <button className="px-6 py-3 border-2 border-purple-500 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition duration-300">
                        Join Waitlist
                      </button>
                    )}
                    <button className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
                      Learn More
                    </button>
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