"use client";
import React from "react";

function MainComponent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedPost, setExpandedPost] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: "home" },
    { name: "Products", path: "/products", icon: "box" },
    { name: "Solutions", path: "/solutions", icon: "lightbulb" },
    { name: "About", path: "/about", icon: "info-circle" },
    { name: "Blog", path: "/blog", icon: "newspaper" },
    { name: "Contact", path: "/contact", icon: "envelope" },
  ];

  // Get current path for active menu item
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const categories = [
    { id: "all", name: "All Posts", icon: "globe" },
    { id: "ai-agents", name: "AI Agents", icon: "robot" },
    { id: "tutorials", name: "Tutorials", icon: "book" },
    { id: "company", name: "Company Updates", icon: "building" },
    { id: "research", name: "Research", icon: "flask" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Introducing TaskMe AI: Your Personal Life Administrator",
      excerpt:
        "Learn how our latest AI agent can transform your daily productivity and help you focus on what truly matters.",
      category: "ai-agents",
      author: "Dr. Sarah Chen",
      date: "March 15, 2025",
      readTime: "8 min read",
      image:
        "https://ucarecdn.com/8e1f5cfd-4c5b-4e3c-b7c5-0c35c2a0c514/-/format/auto/",
      featured: true,
      tags: ["AI", "Productivity", "Launch"],
    },
    {
      id: 2,
      title: "How to Build Custom Voice Commands for Telegram Voice Agent",
      excerpt:
        "A step-by-step guide to creating and implementing custom voice commands for your AI assistant.",
      category: "tutorials",
      author: "Marcus Rodriguez",
      date: "March 12, 2025",
      readTime: "12 min read",
      image:
        "https://ucarecdn.com/8e1f5cfd-4c5b-4e3c-b7c5-0c35c2a0c514/-/format/auto/",
      featured: false,
      tags: ["Tutorial", "Voice AI", "Development"],
    },
    {
      id: 3,
      title: "AFTL Raises $50M Series A to Democratize AI",
      excerpt:
        "Exciting news about our latest funding round and what it means for the future of accessible AI technology.",
      category: "company",
      author: "Dr. Emma Watson",
      date: "March 10, 2025",
      readTime: "5 min read",
      image:
        "https://ucarecdn.com/8e1f5cfd-4c5b-4e3c-b7c5-0c35c2a0c514/-/format/auto/",
      featured: true,
      tags: ["Funding", "Growth", "AI Industry"],
    },
    {
      id: 4,
      title: "The Ethics of AI Agents: Our Approach",
      excerpt:
        "Exploring how we ensure responsible AI development while pushing the boundaries of what's possible.",
      category: "research",
      author: "Dr. Emma Watson",
      date: "March 8, 2025",
      readTime: "10 min read",
      image:
        "https://ucarecdn.com/8e1f5cfd-4c5b-4e3c-b7c5-0c35c2a0c514/-/format/auto/",
      featured: false,
      tags: ["Ethics", "AI Development", "Research"],
    },
  ];

  const sharePost = (post) => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
        .catch(console.error);
    }
  };

  const filteredPosts = blogPosts.filter(
    (post) => selectedCategory === "all" || post.category === selectedCategory
  );

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const handleBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto relative">
          {/* Improved three-dot menu */}
          <div className="absolute top-0 right-4 z-50">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <i
                className={`fas fa-${
                  menuOpen ? "times" : "ellipsis-v"
                } text-xl`}
              ></i>
            </button>

            {menuOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                  onClick={() => setMenuOpen(false)}
                ></div>

                {/* Menu */}
                <div className="absolute right-0 mt-2 w-64 rounded-xl bg-black/90 backdrop-blur-lg border border-blue-500/20 shadow-lg py-2 animate-fadeIn">
                  {menuItems.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className={`flex items-center px-4 py-3 hover:bg-blue-500/20 transition-colors ${
                        currentPath === item.path
                          ? "bg-blue-500/10 text-blue-400"
                          : "text-white"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <i className={`fas fa-${item.icon} w-8`}></i>
                      <span>{item.name}</span>
                      {currentPath === item.path && (
                        <i className="fas fa-check ml-auto text-blue-400"></i>
                      )}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          <a
            href="#"
            onClick={handleBack}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back
          </a>

          <h1 className="text-5xl md:text-6xl font-light mb-8 text-center font-roboto">
            AFTL Blog
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Insights, tutorials, and updates from the frontier of AI technology
          </p>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-light mb-8">Featured Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-black/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-blue-400 text-sm">
                        {post.category}
                      </span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-light mb-4">{post.title}</h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-gray-400 text-sm">
                          {post.author}
                        </span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-gray-400 text-sm">
                          {post.date}
                        </span>
                      </div>
                      <button
                        onClick={() => sharePost(post)}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <i className="fas fa-share-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="flex justify-center mb-12 space-x-4 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <i className={`fas fa-${category.icon} mr-2`}></i>
                {category.name}
              </button>
            ))}
          </div>

          {/* All Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setExpandedPost(expandedPost === post.id ? null : post.id)
                }
              >
                <div className="flex items-center mb-4">
                  <span className="text-blue-400 text-sm">{post.category}</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-light mb-4">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/10 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-400 text-sm">{post.author}</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      sharePost(post);
                    }}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <i className="fas fa-share-alt"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-light mb-8">Stay Updated</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest articles, tutorials, and company updates delivered
              straight to your inbox.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 bg-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;