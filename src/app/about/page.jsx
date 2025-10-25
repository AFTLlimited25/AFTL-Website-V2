"use client";
import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function AboutPage() {
  const team = [
    {
      name: "Shubham Tiwari",
      role: "Founder & CEO",
      highlight: "6+ years of experience, leading product direction and strategic partnerships",
      linkedin: "https://www.linkedin.com/in/theshubhamtiwari",
      avatar: "/shubham.jpg"
    },
    {
      name: "Abhishek Mallapareddy",
      role: "Co-Founder & CTO",
      highlight: "5+ years of experience in software development, data analysis, automation, and AI.",
      linkedin: "https://www.linkedin.com/in/abhishekmallapareddy",
      github: "https://github.com/Abhishek051294",
      avatar: "/abhishek.jpg"
    },
    {
      name: "Roshan Panda",
      role: "Software Developer",
      highlight: "Experienced in building SaaS Products",
      linkedin: "https://www.linkedin.com/in/roshan-developer",
      avatar: "/roshan.jpg"
    },
    {
      name: "B Chandrashekhar",
      role: "Software Developer",
      highlight: "Experienced in Designing & Optimization of applications",
      linkedin: "https://www.linkedin.com/in/shekhar01",
      avatar: "/shekhar.jpg"
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AFTL - Advanced Future Tech Labs",
    "url": "https://aftl.ai",
    "logo": "https://aftl.ai/logo.svg",
    "founders": [
      { "@type": "Person", "name": "Shubham Tiwari", "sameAs": "https://www.linkedin.com/in/theshubhamtiwari" },
      { "@type": "Person", "name": "Abhishek Mallapareddy", "sameAs": "https://www.linkedin.com/in/abhishekmallapareddy" }
    ],
    "description": "AFTL builds AI productivity tools like TaskMe AI to simplify digital admin for individuals and teams."
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SchemaMarkup schema={schema} />

      {/* Hero Section */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 py-16 text-center bg-white rounded-lg shadow">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Empowering People with AI-First Tools</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            AFTL builds AI-first tools that simplify everyday life by turning routine tasks into intelligent, automated experiences...
          </p>
          <div className="mt-8">
            <Link href="/products" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Explore Platrr
            </Link>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Industry Context Section */}
      <AnimateOnScroll>
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Why Now?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-2xl font-bold mb-4">❗ The Problem with Today’s Food Platforms</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>❌ Endless recipe content, but no real personalization — just noise</li>
                  <li>❌ Meal planning, nutrition tracking, and grocery lists are scattered across apps</li>
                  <li>❌ Focused on trends and aesthetics, not real-life cooking or community</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">✅ Our Solution — Platrr</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ AI that learns your taste, dietary goals, and schedule — real personalization</li>
                  <li>✅ One platform to plan meals, track nutrition, generate smart grocery lists</li>
                  <li>✅ Built to connect food lovers, home cooks, and families through shared plans, recipes, and chats</li>
                  <li>✅ We’re creating a community where people can cook smarter, eat better, and share more — together</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* What We're Building Section */}
      <AnimateOnScroll>
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">What We’re Building</h2>
            <div className="text-left overflow-x-auto">
              <table className="w-full table-fixed border border-gray-200 bg-white rounded-lg shadow">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="w-1/4 p-4 text-left font-bold">Product</th>
                    <th className="w-1/4 p-4 text-left font-bold">Status</th>
                    <th className="w-1/2 p-4 text-left font-bold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-bold">Platrr</td>
                    <td className="p-4 text-gray-600">Phase 2 – In Development</td>
                    <td className="p-4 text-gray-700">AI-based food platform for meal planning, grocery lists, nutrition tracking, and community.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Meet the Team Section */}
      <AnimateOnScroll>
        <div id="team" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Meet the Team</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We’re a small but focused founding team with experience in AI, product development, and startup operations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {team.map((member, index) => (
                <div key={index} className="p-8 rounded-lg shadow-lg bg-white text-center">
                  <img src={member.avatar} alt={member.name} className="w-48 h-56 object-cover rounded-lg mx-auto mb-4 shadow" loading="lazy" />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="mt-4 text-gray-700">{member.highlight}</p>
                  <div className="flex justify-center mt-4 space-x-4">
                    {member.linkedin && (
                      <Link href={member.linkedin} className="text-blue-600 hover:text-blue-800">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      </Link>
                    )}
                    {member.github && member.github.length > 0 && (
                      <Link href={member.github} className="text-gray-800 hover:text-gray-900">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Product Roadmap Section */}
      <AnimateOnScroll>
        <div id="roadmap" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Product Roadmap</h2>
            <div className="space-y-8 text-left">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">✅</div>
                <div>
                  <h3 className="text-xl font-bold">Q2 2025 – Phase 1 Web Launch (Live)</h3>
                  <p className="text-gray-600">Core Platrr platform live with meal planning, grocery lists, and community features.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">🍳</div>
                <div>
                  <h3 className="text-xl font-bold">Q3 2025 – Chef Mode Rollout</h3>
                  <p className="text-gray-600">Premium subscription tier with exclusive recipes and AI-guided cooking sessions.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">📱</div>
                <div>
                  <h3 className="text-xl font-bold">Q4 2025 – Mobile App Launch</h3>
                  <p className="text-gray-600">Native iOS and Android apps to bring Platrr to your pocket — anywhere, anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* What We Believe Section */}
      <AnimateOnScroll>
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">What We Believe</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🤖</div>
                  <h3 className="text-2xl font-bold">Automation with Purpose</h3>
                </div>
                <p className="text-gray-700">We build tools that remove digital friction, not add complexity.</p>
              </div>
              <div className="p-8 rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🎨</div>
                  <h3 className="text-2xl font-bold">Intuitive by Design</h3>
                </div>
                <p className="text-gray-700">Good design disappears — Platrr feels natural from first use.</p>
              </div>
              <div className="p-8 rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🔐</div>
                  <h3 className="text-2xl font-bold">Privacy by Default</h3>
                </div>
                <p className="text-gray-700">Your data belongs to you. Full transparency, always.</p>
              </div>
              <div className="p-8 rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🌱</div>
                  <h3 className="text-2xl font-bold">Lean, Scalable Growth</h3>
                </div>
                <p className="text-gray-700">We scale mindfully — with clean systems and real feedback.</p>
              </div>
              <div className="p-8 rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🌍</div>
                  <h3 className="text-2xl font-bold">Built for Community</h3>
                </div>
                <p className="text-gray-700">We empower people to connect, share, and grow together.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* CTA Footer Section */}
      <AnimateOnScroll>
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We’re currently bootstrapped, focused on building products that matter. If you're a founder, partner, or investor interested in what we’re doing —
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default AboutPage;
