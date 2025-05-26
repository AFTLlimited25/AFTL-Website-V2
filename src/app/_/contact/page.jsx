"use client";
import React from "react";

function MainComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "general",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
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

  const careerOpenings = [
    {
      title: "AI Research Scientist",
      department: "Research",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "New York",
      type: "Full-time",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-light mb-8 font-roboto">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're interested in our products, career opportunities,
              or partnerships, we're here to help you connect with the right
              team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20">
              <form onSubmit={handleSubmit}>
                <h2 className="text-3xl font-light mb-6">Send us a Message</h2>

                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <select
                    name="inquiryType"
                    className="w-full px-6 py-4 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>

                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-6 py-4 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                {error && <div className="text-red-500 mb-4">{error}</div>}

                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 disabled:opacity-50"
                >
                  {loading
                    ? "Sending..."
                    : submitted
                    ? "Message Sent!"
                    : "Send Message"}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <h2 className="text-3xl font-light mb-6">Join Our Community</h2>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center space-x-4 text-gray-300 hover:text-white transition duration-300"
                  >
                    <i className="fab fa-discord text-2xl"></i>
                    <span>Join our Discord Server</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-4 text-gray-300 hover:text-white transition duration-300"
                  >
                    <i className="fab fa-slack text-2xl"></i>
                    <span>Join our Slack Workspace</span>
                  </a>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20">
                <h2 className="text-3xl font-light mb-6">Office Locations</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-building text-blue-400"></i>
                    <div>
                      <h3 className="font-light">San Francisco</h3>
                      <p className="text-gray-300">123 AI Street, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-building text-blue-400"></i>
                    <div>
                      <h3 className="font-light">New York</h3>
                      <p className="text-gray-300">456 Tech Ave, NY 10013</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-light mb-12 text-center">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {careerOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-light mb-2">{job.title}</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>
                      <i className="fas fa-briefcase mr-2"></i>
                      {job.department}
                    </p>
                    <p>
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {job.location}
                    </p>
                    <p>
                      <i className="fas fa-clock mr-2"></i>
                      {job.type}
                    </p>
                  </div>
                  <button className="mt-4 w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-light mb-8">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in partnering with AFTL? Let's explore how we can work
              together to shape the future of AI technology.
            </p>
            <button className="px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;