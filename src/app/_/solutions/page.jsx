"use client";
import React from "react";

function MainComponent() {
  const [activeTab, setActiveTab] = useState("individuals");
  const [expandedSolution, setExpandedSolution] = useState(null);
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

  const solutions = {
    individuals: {
      title: "For Individuals",
      description: "Enhance your daily life with personal AI assistance",
      icon: "user",
      color: "blue",
      offerings: [
        {
          id: 1,
          name: "Personal Task Management",
          description:
            "Let TaskMe AI handle your daily scheduling, reminders, and life administration",
          benefits: [
            "Save 10+ hours weekly",
            "Never miss important tasks",
            "Reduce mental load",
          ],
          primaryTool: "TaskMe AI",
          icon: "tasks",
        },
        {
          id: 2,
          name: "Creative Projects",
          description:
            "Transform your ideas into stunning visuals with our AI Image Generator",
          benefits: [
            "Create professional designs",
            "Generate unique artwork",
            "Express creativity effortlessly",
          ],
          primaryTool: "AI Image Generator",
          icon: "palette",
        },
        {
          id: 3,
          name: "Health Monitoring",
          description:
            "Get personalized health insights and guidance with our Symptom Checker",
          benefits: [
            "24/7 health guidance",
            "Early warning detection",
            "Peace of mind",
          ],
          primaryTool: "Symptom Checker",
          icon: "heart",
        },
      ],
    },
    startups: {
      title: "For Startups",
      description: "Scale your operations with powerful AI tools",
      icon: "rocket",
      color: "purple",
      offerings: [
        {
          id: 4,
          name: "Team Productivity",
          description:
            "Streamline team coordination and task management across projects",
          benefits: [
            "Automated workflows",
            "Team synchronization",
            "Resource optimization",
          ],
          primaryTool: "TaskMe AI",
          icon: "users",
        },
        {
          id: 5,
          name: "Marketing Assets",
          description: "Create engaging marketing materials instantly with AI",
          benefits: [
            "Rapid content creation",
            "Brand consistency",
            "Cost efficiency",
          ],
          primaryTool: "AI Image Generator",
          icon: "bullhorn",
        },
        {
          id: 6,
          name: "Customer Support",
          description:
            "Provide 24/7 customer assistance through AI-powered voice agents",
          benefits: [
            "Always available",
            "Multilingual support",
            "Scalable solution",
          ],
          primaryTool: "Telegram Voice Agent",
          icon: "headset",
        },
      ],
    },
    enterprises: {
      title: "For Enterprises",
      description:
        "Transform your organization with enterprise-grade AI solutions",
      icon: "building",
      color: "green",
      offerings: [
        {
          id: 7,
          name: "Enterprise Automation",
          description: "Deploy AI-powered automation across your organization",
          benefits: [
            "Process optimization",
            "Cost reduction",
            "Improved accuracy",
          ],
          primaryTool: "TaskMe AI",
          icon: "cogs",
        },
        {
          id: 8,
          name: "Content Management",
          description: "Generate and manage content at scale with AI",
          benefits: ["Consistent branding", "Global reach", "Rapid deployment"],
          primaryTool: "AI Image Generator",
          icon: "database",
        },
        {
          id: 9,
          name: "Healthcare Integration",
          description: "Enhance patient care with AI-powered health monitoring",
          benefits: [
            "Improved patient outcomes",
            "Reduced workload",
            "Data-driven insights",
          ],
          primaryTool: "Symptom Checker",
          icon: "hospital",
        },
      ],
    },
  };

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

          <h1 className="text-5xl md:text-6xl font-light mb-8 text-center font-roboto">
            AI Solutions for Everyone
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Discover how our AI tools can transform your work and life, tailored
            to your specific needs
          </p>

          <div className="flex justify-center mb-12 space-x-4">
            {Object.entries(solutions).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full transition duration-300 ${
                  activeTab === key
                    ? `bg-${value.color}-500 text-white`
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <i className={`fas fa-${value.icon} mr-2`}></i>
                {value.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions[activeTab].offerings.map((solution) => (
              <div
                key={solution.id}
                className={`bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-${solutions[activeTab].color}-500/20 hover:border-${solutions[activeTab].color}-500/40 transition-all duration-300 cursor-pointer`}
                onClick={() =>
                  setExpandedSolution(
                    expandedSolution === solution.id ? null : solution.id
                  )
                }
              >
                <div className="flex items-center mb-6">
                  <i
                    className={`fas fa-${solution.icon} text-3xl text-${solutions[activeTab].color}-400 mr-4`}
                  ></i>
                  <h3 className="text-2xl font-light">{solution.name}</h3>
                </div>

                <p className="text-gray-300 mb-6">{solution.description}</p>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedSolution === solution.id
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mb-6">
                    <h4 className="text-lg mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-300"
                        >
                          <i className="fas fa-check text-green-400 mr-2 text-sm"></i>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <button
                      className={`w-full px-6 py-3 bg-${solutions[activeTab].color}-500 text-white rounded-full hover:bg-${solutions[activeTab].color}-600 transition duration-300`}
                    >
                      Try {solution.primaryTool}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-light mb-8">
              Ready to Transform Your Work?
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;