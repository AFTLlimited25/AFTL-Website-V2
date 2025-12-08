import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Star } from 'lucide-react';
import PathsBackground from '../components/PathsBackground';
import ScrollReveal from '../components/ScrollReveal';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:5000/api/apply", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error("Failed to send message");
    alert("Thank you for your message! Our team will get back to you within 24 hours.");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  } catch (err) {
    alert("Something went wrong. Please try again.");
  }
};



  return (
    <div className="min-h-screen relative">
      <PathsBackground />
      
      {/* Hero */}
      <section className="pt-20 pb-14 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center px-3.5 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-5">
                <Star className="w-4 h-4 mr-2" />
                24/7 Global Support Available
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Let's Start Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Digital Journey
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Have a question about our AI solutions? Share a few details and the team will respond shortly.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3.5 justify-center">
                <button className="group bg-blue-700 text-white px-6 md:px-7 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center">
                  Schedule Free Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-blue-700 text-blue-700 px-6 md:px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  Call Us Now
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Phone className="h-6 w-6" />,
                  title: "Call Us",
                  description: "Speak with an expert",
                  action: "+44 78672 15041",
                  color: "bg-green-50 border-green-200 text-green-700"
                },
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "Email Us",
                  description: "Get detailed response",
                  action: "contact@aftl.co.uk",
                  color: "bg-blue-50 border-blue-200 text-blue-700"
                }
              ].map((option, index) => (
                <div key={index} className={`p-4 rounded-xl border-2 ${option.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}>
                  <div className="flex items-center mb-2">
                    {option.icon}
                    <h3 className="font-semibold ml-2">{option.title}</h3>
                  </div>
                  <p className="text-sm opacity-75 mb-1.5">{option.description}</p>
                  <p className="font-medium">{option.action}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info column */}
            <ScrollReveal direction="left">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
                      <p className="text-gray-600">123 Innovation Street<br />London, UK EC2A 4DP</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+447867215041</p>
                      <p className="text-sm text-gray-500">Available 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">contact@aftl.co.uk</p>
                      <p className="text-sm text-gray-500">Response within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Mon–Fri: 8:00 AM – 7:00 PM<br />
                        Sat: 9:00 AM – 5:00 PM<br />
                        Sun: Emergency support only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form column */}
            <ScrollReveal direction="right">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Start Your Project</h2>
                    </div>
                    <div className="flex items-center text-sm text-green-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                      Free consultation
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Business Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          pattern="^[0-9+\-\s()]{7,}$"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition"
                          placeholder="+44 1234 567890"
                        />
                        <p className="mt-1 text-xs text-gray-500">Include country code if applicable.</p>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition"
                          placeholder="Project inquiry"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition resize-vertical"
                        placeholder="Tell us about your goals, challenges, and timeline."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full h-12 md:h-14 bg-blue-700 text-white px-6 md:px-8 rounded-xl hover:bg-blue-800 transition-all duration-300 font-semibold flex items-center justify-center transform hover:scale-[1.01] shadow-lg hover:shadow-xl"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message & Get Free Consultation
                    </button>

                    
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
