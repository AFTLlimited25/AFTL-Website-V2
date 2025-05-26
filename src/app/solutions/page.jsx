"use client";
import React from "react";

function SolutionsPage() {
  const solutions = [
    {
      category: "Business Automation",
      title: "Streamline Your Operations",
      description: "Transform your business processes with AI-powered automation",
      benefits: [
        "Reduce operational costs by up to 40%",
        "Improve employee productivity",
        "Minimize human error",
        "24/7 operational capability"
      ],
      products: ["TaskMe AI", "Telegram Voice Agent"],
      useCase: "A mid-sized company reduced their administrative workload by 30 hours per week using TaskMe AI for scheduling, email management, and task coordination.",
      icon: "building"
    },
    {
      category: "Creative & Marketing",
      title: "Enhance Your Creative Output",
      description: "Generate stunning visuals and content with AI assistance",
      benefits: [
        "Create content 10x faster",
        "Maintain brand consistency",
        "Scale creative production",
        "Reduce design costs"
      ],
      products: ["AI Image Generator"],
      useCase: "Marketing agency decreased design time by 75% while increasing client satisfaction using our AI Image Generator for social media content.",
      icon: "palette"
    },
    {
      category: "Healthcare Support",
      title: "Improve Patient Care",
      description: "Enhance healthcare delivery with AI-powered insights",
      benefits: [
        "Quick symptom assessment",
        "Reduced wait times",
        "Better patient engagement",
        "Preventive care insights"
      ],
      products: ["Symptom Checker"],
      useCase: "Local clinic implemented Symptom Checker to provide initial assessments, reducing unnecessary visits by 25% and improving urgent care response times.",
      icon: "hospital"
    },
    {
      category: "Personal Productivity",
      title: "Maximize Your Time",
      description: "Let AI handle your routine tasks while you focus on what matters",
      benefits: [
        "Save 10+ hours weekly",
        "Never miss important tasks",
        "Reduce stress",
        "Better work-life balance"
      ],
      products: ["TaskMe AI", "Telegram Voice Agent"],
      useCase: "Busy professionals using TaskMe AI report gaining back 2 hours daily for focused work and personal time.",
      icon: "clock"
    }
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "Education",
    "Real Estate",
    "E-commerce",
    "Manufacturing",
    "Creative Services",
    "Professional Services"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-24">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-light text-center mb-8">
          AI Solutions for Every Industry
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Discover how our AI products can transform your operations, boost productivity, and drive innovation across your organization.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-blue-500/20 p-4 rounded-xl">
                  <i className={`fas fa-${solution.icon} text-4xl text-blue-400`}></i>
                </div>
                <div className="flex-1">
                  <span className="text-blue-400 text-sm font-medium mb-2 block">
                    {solution.category}
                  </span>
                  <h2 className="text-3xl font-light mb-3">{solution.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">
                    {solution.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl mb-4 text-blue-400">Key Benefits</h3>
                      <ul className="space-y-3">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <i className="fas fa-check-circle text-green-400"></i>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl mb-4 text-blue-400">Success Story</h3>
                      <p className="text-gray-300">
                        {solution.useCase}
                      </p>
                      <div className="mt-4">
                        <h4 className="text-sm text-blue-400 mb-2">Recommended Products:</h4>
                        <div className="flex gap-2">
                          {solution.products.map((product, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-400"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                      Learn More
                    </button>
                    <button className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
                      Contact Sales
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
          <h2 className="text-3xl font-light mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can address your specific needs and drive growth for your organization.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionsPage; 