"use client";
import React from "react";

function BlogPage() {
  const featuredPost = {
    title: "The Future of AI Assistants: Beyond Simple Tasks",
    excerpt: "Explore how AI assistants are evolving from basic task managers to intelligent agents that can handle complex workflows and decision-making processes.",
    author: "AFTL Team",
    date: "March 2024",
    category: "AI Technology",
    image: "https://ucarecdn.com/17d72eb0-636f-4470-b2f2-bfa7633d12d5/-/format/auto/",
    readTime: "5 min read"
  };

  const categories = [
    "AI Technology",
    "Product Updates",
    "Use Cases",
    "Industry Insights",
    "Company News"
  ];

  const recentPosts = [
    {
      title: "Introducing TaskMe AI Beta: Your Personal Life Administrator",
      excerpt: "Get an inside look at how TaskMe AI is revolutionizing personal task management with advanced AI capabilities.",
      category: "Product Updates",
      date: "March 2024",
      readTime: "4 min read"
    },
    {
      title: "How AI is Transforming Customer Service in 2024",
      excerpt: "Discover the latest trends in AI-powered customer service and how businesses are adapting to meet changing consumer expectations.",
      category: "Industry Insights",
      date: "March 2024",
      readTime: "6 min read"
    },
    {
      title: "The Ethics of AI: Our Commitment to Responsible Development",
      excerpt: "Learn about AFTL's approach to ethical AI development and how we're ensuring our products benefit society.",
      category: "Company News",
      date: "February 2024",
      readTime: "7 min read"
    },
    {
      title: "Voice AI: The Next Frontier in Human-Computer Interaction",
      excerpt: "Exploring the technology behind our Telegram AI Agent and the future of voice-based AI interactions.",
      category: "AI Technology",
      date: "February 2024",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-24">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-light text-center mb-8">
          AFTL Blog
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Insights on AI technology, product updates, and our journey in building the future of intelligent automation.
        </p>
      </div>

      {/* Featured Post */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden">
          <div className="aspect-video relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-400">
                {featuredPost.category}
              </span>
              <span className="text-gray-400">{featuredPost.date}</span>
              <span className="text-gray-400">{featuredPost.readTime}</span>
            </div>
            <h2 className="text-3xl font-light mb-4">{featuredPost.title}</h2>
            <p className="text-gray-300 text-lg mb-6">{featuredPost.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-blue-400">{featuredPost.author}</span>
              <button className="px-6 py-2 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-light mb-12">Recent Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {recentPosts.map((post, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-400">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm">{post.date}</span>
                <span className="text-gray-400 text-sm">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-light mb-3">{post.title}</h3>
              <p className="text-gray-300 mb-6">{post.excerpt}</p>
              <button className="text-blue-400 hover:text-blue-300 transition duration-300">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-light mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on AI technology, product releases, and industry insights.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage; 