"use client";
import React from "react";

function MainComponent() {
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
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

  // Get current path for active menu item
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "Former AI researcher at DeepMind, passionate about making AI accessible to everyone.",
      image:
        "https://ucarecdn.com/8e1f5cfd-4c5b-4e3c-b7c5-0c35c2a0c514/-/format/auto/",
      icon: "brain",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      bio: "20+ years in software engineering, specialized in AI systems architecture.",
      image:
        "https://ucarecdn.com/8e1f5cfd-4c5b-4e3c-b7c5-0c35c2a0c514/-/format/auto/",
      icon: "code",
    },
    {
      id: 3,
      name: "Dr. Emma Watson",
      role: "Head of AI Ethics",
      bio: "Leading our efforts in responsible AI development and implementation.",
      image:
        "https://ucarecdn.com/8e1f5cfd-4c5b-4e3c-b7c5-0c35c2a0c514/-/format/auto/",
      icon: "balance-scale",
    },
    {
      id: 4,
      name: "James Park",
      role: "Product Director",
      bio: "Former Product Lead at Google, focusing on user-centric AI solutions.",
      image:
        "https://ucarecdn.com/8e1f5cfd-4c5b-4e3c-b7c5-0c35c2a0c514/-/format/auto/",
      icon: "lightbulb",
    },
  ];

  const timeline = [
    {
      year: 2025,
      title: "AFTL Launch",
      description: "Founded with a mission to democratize AI technology",
      icon: "rocket",
    },
    {
      year: 2025,
      title: "First Product Launch",
      description: "Released TaskMe AI, our flagship personal assistant",
      icon: "robot",
    },
    {
      year: 2026,
      title: "Global Expansion",
      description: "Opening offices in Asia and Europe",
      icon: "globe",
    },
    {
      year: 2027,
      title: "AI Research Lab",
      description: "Establishing our dedicated AI research facility",
      icon: "flask",
    },
  ];

  const handleBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex">
      {/* Rest of the JSX remains exactly the same */}
    </div>
  );
}

export default MainComponent;