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
      highlight: "6+ years of experience,in leading product direction and strategic partnerships",
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
      highlight: "Experienced in building Saas Products",
      linkedin: "",
      avatar: ""
    },
    {
      name: "B Chandrashekhar",
      role: "Software Developer",
      highlight: "Experienced in Designing & Optimization of application",
      linkedin: "",
      avatar: ""
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AFTL - Advanced Future Tech Labs",
    "url": "https://aftl.ai",
    "logo": "https://aftl.ai/logo.svg",
    "founders": [
      {
        "@type": "Person",
        "name": "Shubham Tiwari",
        "sameAs": "https://www.linkedin.com/in/theshubhamtiwari"
      },
      {
        "@type": "Person",
        "name": "Abhishek Mallapareddy",
        "sameAs": "https://www.linkedin.com/in/abhishekmallapareddy"
      }
    ],
    "description": "AFTL builds AI productivity tools like TaskMe AI to simplify digital admin for individuals and teams."
  };

  return (
    <div className="min-h-screen bg-aftl-background">
      <SchemaMarkup schema={schema} />

      {/* Hero Section */}
      <AnimateOnScroll>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-aftl-heading">
            Empowering People with AI-First Tools
          </h1>
          <p className="text-lg md:text-xl text-aftl-body mt-4 max-w-3xl mx-auto">
            AFTL (Advanced Future Tech Labs) builds AI-first tools that simplify everyday life by turning routine tasks into intelligent, automated experiences. From managing digital clutter to exploring smarter ways to engage with food through apps like Platrr, we design products that give people their time back. Our mission is to make AI practical, personal, and effortless.
          </p>
          <div className="mt-8">
            <Link href="/products" className="btn btn-primary">
              Explore Platrr
            </Link>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Industry Context Section */}
      <AnimateOnScroll>
        <div className="py-16 bg-light-mist">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-aftl-heading mb-12">
              Why Now?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">❗ The Problem with Today’s Food Platforms</h3>
                <ul className="text-left space-y-2">
                  <li>❌ Endless recipe content, but no real personalization — just noise</li>
                  <li>❌ Meal planning, nutrition tracking, and grocery lists are scattered across apps</li>
                  <li>❌ Focused on trends and aesthetics, not real-life cooking or community</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">✅ Our Solution — Platrr</h3>
                <ul className="text-left space-y-2">
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
        <div className="py-16 bg-light-mist">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-aftl-heading mb-12">
              What We’re Building
            </h2>
            <div className="text-left">
              <table className="w-full table-fixed">
                <thead>
                  <tr>
                    <th className="w-1/4 text-left font-bold text-aftl-heading">Product</th>
                    <th className="w-1/4 text-left font-bold text-aftl-heading">Status</th>
                    <th className="w-1/2 text-left font-bold text-aftl-heading">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 font-bold text-aftl-heading">Platrr</td>
                    <td className="py-4 text-aftl-subtext">Phase 2 – In Development</td>
                    <td className="py-4 text-aftl-body">An AI-based food platform that helps users plan meals, generate grocery lists, track nutrition, and connect with a like-minded food community.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Meet the Team Section */}
      <AnimateOnScroll>
        <div id="team" className="py-16 bg-light-mist">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-aftl-heading mb-12">
              Meet the Team
            </h2>
            <p className="text-lg md:text-xl text-aftl-body mt-4 max-w-3xl mx-auto">
              We’re a small but focused founding team with experience in AI, product development, and startup operations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {team.map((member, index) => (
                <div key={index} className="p-8 rounded-lg shadow-lg bg-white text-center">
                  <img src={member.avatar} alt={member.name} className="w-48 h-56 object-cover rounded-lg mx-auto mb-4 shadow-lg" loading="lazy" />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-aftl-subtext">{member.role}</p>
                  <p className="mt-4 text-aftl-body">{member.highlight}</p>
                  <div className="flex justify-center mt-4 space-x-4">
                    {member.linkedin && (
                      <Link href={member.linkedin} className="text-aftl-accent hover:text-aftl-heading">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      </Link>
                    )}
                    {member.github && (
                      <Link href={member.github} className="text-aftl-accent hover:text-aftl-heading">
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
        <div id="roadmap" className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-aftl-heading mb-12">
              Product Roadmap
            </h2>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-left">Q2 2025 – Phase 1 Web Launch (Live)</h3>
                  <p className="text-left text-aftl-subtext">Core Platrr platform live with meal planning, grocery lists, and community features.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">🍳</div>
                <div>
                  <h3 className="text-xl font-bold text-left">Q3 2025 – Chef Mode Rollout</h3>
                  <p className="text-left text-aftl-subtext">Premium subscription tier with exclusive recipes, curated plans, and AI-guided cooking sessions.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">📱</div>
                <div>
                  <h3 className="text-xl font-bold text-left">Q4 2025 – Mobile App Launch</h3>
                  <p className="text-left text-aftl-subtext">Native iOS and Android apps to bring Platrr to your pocket — anywhere, anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* What We Believe Section */}
      <AnimateOnScroll>
        <div className="py-16 bg-light-mist">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-aftl-heading mb-12 text-center">
              What We Believe
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🤖</div>
                  <h3 className="text-2xl font-bold text-aftl-heading">Automation with Purpose</h3>
                </div>
                <p className="text-aftl-body">We build tools that remove digital friction, not add complexity — every feature must serve a real outcome.</p>
              </div>
              <div className="p-8 rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🎨</div>
                  <h3 className="text-2xl font-bold text-aftl-heading">Intuitive by Design</h3>
                </div>
                <p className="text-aftl-body">Good design disappears — Platrr feels natural from first use, no manuals needed.</p>
              </div>
              <div className="p-8 rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🔐</div>
                  <h3 className="text-2xl font-bold text-aftl-heading">Privacy by Default</h3>
                </div>
                <p className="text-aftl-body">Your data belongs to you. We never sell it. Full transparency, always.</p>
              </div>
              <div className="p-8 rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🌱</div>
                  <h3 className="text-2xl font-bold text-aftl-heading">Lean, Scalable Growth</h3>
                </div>
                <p className="text-aftl-body">We scale mindfully — with clean systems, real feedback, and no feature bloat.</p>
              </div>
              <div className="p-8 rounded-lg shadow-lg bg-white">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">🌍</div>
                  <h3 className="text-2xl font-bold text-aftl-heading">Built for Community</h3>
                </div>
                <p className="text-aftl-body">We empower people to connect, share, and grow together around food, health, and wellness.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* CTA Footer Section */}
      <AnimateOnScroll>
        <div className="py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg md:text-xl text-aftl-body mt-4 max-w-3xl mx-auto">
              We’re currently bootstrapped, focused on building products that matter.
              If you're a founder, partner, or investor interested in what we’re doing —
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary">
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
