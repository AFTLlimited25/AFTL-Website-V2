"use client";
import React from "react";

function AboutPage() {
  const products = [
    {
      name: "TaskMe AI",
      description: "Your personal AI life admin assistant that manages reminders, cancellations, bookings, emails, and more — seamlessly integrated with your digital life.",
      icon: "robot",
      status: "beta",
      image: "https://via.placeholder.com/100"
    },
    {
      name: "AI Image Generator",
      description: "Create stunning visuals with AI using our freemium image generation tool — available as a web app and API.",
      icon: "image",
      status: "coming-soon",
      image: "https://via.placeholder.com/100"
    },
    {
      name: "Telegram AI Agent",
      description: "Voice-enabled AI assistant on Telegram for hands-free operation, natural conversations, and seamless task management.",
      icon: "comment",
      status: "live",
      image: "https://via.placeholder.com/100"
    },
    {
      name: "Symptom Checker",
      description: "AI-powered health guidance system that helps you understand symptoms and suggests when to seek professional medical advice.",
      icon: "heartbeat",
      status: "coming-soon",
      image: "https://via.placeholder.com/100"
    }
  ];

  const values = [
    {
      title: "Automation with Purpose",
      description: "Every automation we build serves a clear purpose: to make life simpler and more productive.",
      icon: "🤖"
    },
    {
      title: "Design-Driven Thinking",
      description: "We believe great technology should be intuitive, accessible, and beautiful.",
      icon: "🧩"
    },
    {
      title: "Privacy & Simplicity First",
      description: "Security by design, with straightforward solutions that respect user privacy.",
      icon: "🔐"
    },
    {
      title: "Built to Scale, Sustainably",
      description: "Creating sustainable solutions that grow with our users' needs.",
      icon: "🌱"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-center mb-8">
          Building the Future with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            AI-First Tools
          </span>
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
          At AFTL, we're on a mission to empower individuals and businesses with intelligent agents and AI-powered solutions that automate everyday tasks and unlock real potential.
        </p>
      </div>

      {/* Vision Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12">
          <h2 className="text-3xl font-light mb-6 text-center">Our Vision</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-center">
            We envision a world where everyone—from founders to families—can offload routine tasks to AI agents, focus on what matters, and live more intentionally. Our goal is to make life admin, digital productivity, and customer intelligence seamless through smart, ethical, and accessible technology.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-light text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center w-68 h-70">
            <img
              src="/shubham.jpg"
              alt="Shubham Tiwari"
              className="w-64 h-72 object-cover mb-4 mx-auto"
            />
            <h3 className="text-xl font-light mb-3">Shubham Tiwari</h3>
            <p className="text-gray-300 text-sm">Founder & CEO</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center w-68 h-70">
            <img
              src="/abhishek.jpg"
              alt="Abhishek Reddy"
              className="w-64 h-72 object-cover mb-4 mx-auto"
            />
            <h3 className="text-xl font-light mb-3">Abhishek Reddy</h3>
            <p className="text-gray-300 text-sm">Co-Founder & CTO</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center w-68 h-70">
            <img
              src="/noor.jpg"
              alt="Noor Ul Ain"
              className="w-64 h-72 object-cover mb-4 mx-auto"
            />
            <h3 className="text-xl font-light mb-3">Noor Ul Ain</h3>
            <p className="text-gray-300 text-sm">Marketing Manager</p>
          </div>
        </div>
      </div>

      {/* AFTL Information Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12">
          <h2 className="text-3xl font-light text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Who We Are</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            AFTL (Advanced Future Tech Labs) is a cutting-edge software development company building the next generation of AI-powered productivity tools. We focus on developing our own suite of proprietary products that automate daily administrative tasks, streamline workflows, and enhance productivity for professionals and businesses alike.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 mt-8">
          <h2 className="text-3xl font-light text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">What We Do</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We design, develop, and deploy intelligent AI agents that seamlessly integrate into everyday workflows. Our flagship product, TaskMe AI, automates repetitive administrative tasks, appointment management, and task tracking—all from a single, user-friendly platform. By building our own products in-house, we ensure the highest quality and innovation in every solution we deliver.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 mt-8">
          <h2 className="text-3xl font-light text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">The Problems We Solve</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            In today’s fast-paced world, professionals, startups, and SMEs often spend too much time on routine administrative tasks, which reduces their focus on strategic work. At AFTL, we tackle these challenges head-on by developing AI-driven software that automates these processes, enabling our users to reclaim their time and boost productivity.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 mt-8">
          <h2 className="text-3xl font-light text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Our Target Audience</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our products are designed for:
          </p>
          <ul className="text-xl max-w-4xl mx-auto leading-relaxed text-left list-disc pl-10">
            <li className="text-gray-300">Busy professionals who want to work smarter, not harder</li>
            <li>Startups seeking to minimize operational overhead and stay agile</li>
            <li>Small-to-medium enterprises (SMEs) looking to streamline their internal processes</li>
            <li>Tech-forward teams eager to integrate AI seamlessly into their daily workflows</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 mt-8">
          <h2 className="text-3xl font-light text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Industry Context</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            As the adoption of AI continues to accelerate, there is a growing need for practical, accessible solutions that enhance productivity without adding complexity. AFTL is at the forefront of this transformation—developing software products that empower users to embrace AI in their daily lives, while maintaining full control and transparency over their workflows.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 mt-8">
          <h2 className="text-3xl font-light text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Our Vision</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We envision a future where intelligent software agents work alongside professionals to simplify complex tasks, unlock new levels of efficiency, and empower people to focus on the work that matters most. At AFTL, we are committed to building the AI-powered tools that make this vision a reality—one product at a time.
          </p>
        </div>
      </div>

      {/* What We're Building Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-light text-center mb-12">What We're Building</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-blue-500/20 p-4 rounded-xl">
                  <i className={`fas fa-${product.icon} text-3xl text-blue-400`}></i>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-light">{product.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      product.status === "live"
                        ? "bg-green-500/20 text-green-400"
                        : product.status === "beta"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    {product.status === "coming-soon" ? "Coming Soon" : product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-300">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-light text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-light mb-3">{value.title}</h3>
              <p className="text-gray-300 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Message */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-12 text-center">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're currently in our bootstrap phase and laser-focused on building products that make a difference. Stay tuned — we'll let the work speak for itself.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
