"use client";
import React from "react";

function MainComponent() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: "home" },
    { name: "Products", path: "/products", icon: "box" },
    { name: "Solutions", path: "/solutions", icon: "lightbulb" },
    { name: "About", path: "/about", icon: "info-circle" },
    { name: "Blog", path: "/blog", icon: "newspaper" },
    { name: "Contact", path: "/contact", icon: "envelope" },
  ];

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const products = [
    {
      id: 1,
      name: "TaskMe AI",
      tagline: "Your personal AI life admin assistant",
      description:
        "Let AI handle your daily tasks, schedule management, and life administration. Perfect for busy professionals and teams looking to automate routine work.",
      icon: "robot",
      status: "beta",
      features: [
        "Natural language task creation",
        "Smart scheduling",
        "Priority management",
        "Integration with popular tools",
      ],
      pricing: {
        monthly: 29,
        yearly: 290,
      },
      forWho: ["Busy Professionals", "Team Leaders", "Small Business Owners"],
      primaryColor: "blue",
    },
    {
      id: 2,
      name: "AI Image Generator",
      tagline: "Create stunning visuals with AI",
      description:
        "Transform your ideas into beautiful images with our advanced AI image generation technology. Perfect for creators, marketers, and designers.",
      icon: "image",
      status: "live",
      features: [
        "High-resolution output",
        "Style customization",
        "Batch processing",
        "Commercial usage rights",
      ],
      pricing: {
        monthly: 39,
        yearly: 390,
      },
      forWho: ["Digital Artists", "Marketing Teams", "Content Creators"],
      primaryColor: "purple",
    },
    {
      id: 3,
      name: "Telegram Voice Agent",
      tagline: "Voice-enabled AI assistant on Telegram",
      description:
        "Your personal AI assistant available through Telegram. Send voice messages and get intelligent responses instantly.",
      icon: "comment",
      status: "coming-soon",
      features: [
        "Voice recognition",
        "Multi-language support",
        "Custom commands",
        "24/7 availability",
      ],
      pricing: {
        monthly: 19,
        yearly: 190,
      },
      forWho: ["International Teams", "Remote Workers", "Tech Enthusiasts"],
      primaryColor: "green",
    },
    {
      id: 4,
      name: "Symptom Checker",
      tagline: "AI-powered health guidance",
      description:
        "Get preliminary health insights using advanced AI. Understand your symptoms and receive guidance on next steps.",
      icon: "heartbeat",
      status: "coming-soon",
      features: [
        "Symptom analysis",
        "Health recommendations",
        "Medical resource links",
        "Emergency guidance",
      ],
      pricing: {
        monthly: 24,
        yearly: 240,
      },
      forWho: ["Healthcare Providers", "Individuals", "Wellness Centers"],
      primaryColor: "red",
    },
  ];

  const handleBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-black/90 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-light">Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <nav>
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`flex items-center px-4 py-3 rounded-lg mb-2 hover:bg-blue-500/20 transition-colors ${
                  currentPath === item.path
                    ? "bg-blue-500/10 text-blue-400"
                    : "text-white"
                }`}
              >
                <i className={`fas fa-${item.icon} w-8`}></i>
                <span>{item.name}</span>
                {currentPath === item.path && (
                  <i className="fas fa-check ml-auto text-blue-400"></i>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1">
        <div className="container mx-auto px-4">
          {/* Menu Toggle Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-4 left-4 z-30 text-white hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>

          <div className="pt-32 pb-20">
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
                Our AI Products
              </h1>
              <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                Cutting-edge AI solutions designed to transform your daily
                operations and enhance productivity
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className={`bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-${product.primaryColor}-500/20 hover:border-${product.primaryColor}-500/40 transition-all duration-300 cursor-pointer`}
                    onClick={() =>
                      setSelectedProduct(
                        selectedProduct === product.id ? null : product.id
                      )
                    }
                  >
                    <div className="flex items-center mb-6">
                      <i
                        className={`fas fa-${product.icon} text-3xl text-${product.primaryColor}-400 mr-4`}
                      ></i>
                      <div>
                        <h3 className="text-2xl font-light">{product.name}</h3>
                        <p className="text-gray-400">{product.tagline}</p>
                      </div>
                      <span
                        className={`ml-auto px-3 py-1 rounded-full text-sm ${
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

                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        selectedProduct === product.id
                          ? "max-h-[800px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-300 mb-6">
                        {product.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg mb-3">Key Features</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {product.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center text-gray-300"
                            >
                              <i className="fas fa-check text-green-400 mr-2 text-sm"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg mb-3">Perfect For</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.forWho.map((user, index) => (
                            <span
                              key={index}
                              className="bg-white/10 px-3 py-1 rounded-full text-sm"
                            >
                              {user}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-center bg-black/20 rounded-xl p-6 mb-6">
                        <div>
                          <p className="text-gray-400 mb-2">Starting from</p>
                          <div className="flex items-baseline">
                            <span className="text-3xl">
                              ${product.pricing.monthly}
                            </span>
                            <span className="text-gray-400 ml-2">/month</span>
                          </div>
                          <p className="text-sm text-gray-400">
                            or ${product.pricing.yearly}/year
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 mt-4 sm:mt-0">
                          <button
                            className={`px-6 py-2 bg-${product.primaryColor}-500 text-white rounded-full hover:bg-${product.primaryColor}-600 transition duration-300`}
                          >
                            Try Free
                          </button>
                          <button
                            className={`px-6 py-2 border border-${product.primaryColor}-500 text-${product.primaryColor}-500 rounded-full hover:bg-${product.primaryColor}-500 hover:text-white transition duration-300`}
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-black/30 backdrop-blur-lg border-t border-blue-500/20 py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-light mb-4">About AFTL</h3>
                  <p className="text-gray-400">
                    Building the bridge between human potential and artificial
                    intelligence.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/products"
                        className="text-gray-400 hover:text-blue-400"
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        href="/solutions"
                        className="text-gray-400 hover:text-blue-400"
                      >
                        Solutions
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="text-gray-400 hover:text-blue-400"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="text-gray-400 hover:text-blue-400"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4">Newsletter</h3>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="bg-white/10 rounded-l-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; 2025 AFTL. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;