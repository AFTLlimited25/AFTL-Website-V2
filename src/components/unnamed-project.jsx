"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ logoSrc, navLinks, heroTitle, heroSubtitle, buttons, videoPlaying, setVideoPlaying, trustedBy, products, currentProduct, setCurrentProduct, footerContent }) {
  return (
    <div className="pt-32 pb-20 px-4">
      <nav className="bg-black/50 backdrop-blur-md fixed w-full z-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logoSrc} alt="AFTL Logo" className="h-20 w-auto" />
          </div>
          <div className="space-x-8 hidden md:block">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-white hover:text-blue-400">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 font-roboto">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {heroTitle}
            </span>
            <br />
            with AI
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
            {buttons.map((button, index) => (
              <button key={index} className={`px-8 py-4 ${button.style} text-lg`}>
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <button
                onClick={() => setVideoPlaying(true)}
                className="bg-white/90 hover:bg-white text-black rounded-full w-20 h-20 flex items-center justify-center"
              >
                <i className="fas fa-play text-3xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 mb-8">Trusted By</p>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {trustedBy.map((company, index) => (
              <div key={index} className="text-gray-400 text-xl">{company}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-16 text-center">
            Our AI Products
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 transition-all duration-500">
              <div className="flex items-center mb-6">
                <i className={`fas fa-${products[currentProduct].icon} text-4xl text-blue-400 mr-4`}></i>
                <div>
                  <h3 className="text-2xl font-light">
                    {products[currentProduct].name}
                  </h3>
                  <p className="text-gray-400">
                    {products[currentProduct].description}
                  </p>
                </div>
                <div className="ml-auto">
                  <span className={`px-3 py-1 rounded-full text-sm ${products[currentProduct].status === "live" ? "bg-green-500/20 text-green-400" : products[currentProduct].status === "beta" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"}`}>
                    {products[currentProduct].status}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProduct(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentProduct === index ? "bg-blue-500" : "bg-gray-600"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black/50 backdrop-blur-md py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <img src={footerContent.logoSrc} alt="AFTL Logo" className="h-16 w-auto mb-4" />
              <p className="text-gray-400">
                {footerContent.description}
              </p>
            </div>
            {footerContent.sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg mb-4">{section.title}</h4>
                <ul className="space-y-2 text-gray-400">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 AFTL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StoryComponent() {
  const navLinks = [
    { href: "/products", text: "Products" },
    { href: "/solutions", text: "Solutions" },
    { href: "/about", text: "About" },
    { href: "/blog", text: "Blog" },
    { href: "/contact", text: "Contact" },
  ];

  const buttons = [
    { text: "Try Our Products", style: "bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300" },
    { text: "Book a Demo", style: "border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300" },
    { text: "Join Beta", style: "bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300" },
  ];

  const trustedBy = ["Google for Startups", "OpenRouter", "n8n"];

  const products = [
    { icon: "robot", name: "TaskMe AI", description: "Your personal AI assistant", status: "live" },
    { icon: "image", name: "AI Image Generator", description: "Create stunning images", status: "beta" },
    { icon: "microphone", name: "Telegram Voice Agent", description: "Voice interactions made easy", status: "beta" },
    { icon: "heartbeat", name: "Symptom Checker", description: "AI health diagnostics", status: "coming soon" },
  ];

  const [currentProduct, setCurrentProduct] = React.useState(0);
  const [videoPlaying, setVideoPlaying] = React.useState(false);

  const footerContent = {
    logoSrc: "https://ucarecdn.com/17d72eb0-636f-4470-b2f2-bfa7633d12d5/-/format/auto/",
    description: "AI for Everyone. By Humans, For Humans.",
    sections: [
      { title: "Products", items: ["TaskMe AI", "AI Image Generator", "Telegram Voice Agent", "Symptom Checker"] },
      { title: "Company", items: ["About Us", "Blog", "Careers", "Contact"] },
      { title: "Connect", items: ["Twitter", "LinkedIn", "GitHub", "Discord"] },
    ],
  };

  return (
    <div>
      <MainComponent
        logoSrc="https://ucarecdn.com/17d72eb0-636f-4470-b2f2-bfa7633d12d5/-/format/auto/"
        navLinks={navLinks}
        heroTitle="We Build the Future"
        heroSubtitle="Empowering businesses and individuals with cutting-edge AI solutions that transform the way we work and live."
        buttons={buttons}
        videoPlaying={videoPlaying}
        setVideoPlaying={setVideoPlaying}
        trustedBy={trustedBy}
        products={products}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        footerContent={footerContent}
      />
    </div>
  );
});
}