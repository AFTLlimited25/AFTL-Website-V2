import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar, Star } from 'lucide-react';
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

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetStatus = () => setStatus({ loading: false, success: null, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setStatus({ loading: false, success: null, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const body = await res.text();
        throw new Error(body || 'Failed to send message');
      }

      setStatus({ loading: false, success: 'Thank you! We will get back to you within 24 hours.', error: null });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, success: null, error: 'Something went wrong. Please try again later.' });
    }

    setTimeout(() => resetStatus(), 7000);
  };

  return (
    <div className="min-h-screen relative bg-gray-50">
      <PathsBackground />

      {/* Hero */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center px-3.5 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
                <Star className="w-4 h-4 mr-2" />
                24/7 Global Support Available
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                Let's Start Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Digital Journey</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Have a question about our AI solutions? Share a few details and the team will respond shortly.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button className="group bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center w-full sm:w-auto">
                  Schedule Free Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </button>
                <button className="mt-0 border-2 border-blue-700 text-blue-700 px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Phone className="h-6 w-6" />,
                  title: 'Call Us',
                  description: 'Speak with an expert',
                  action: '+44 78672 15041',
                  color: 'bg-green-50 border-green-200 text-green-700',
                },
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: 'Email Us',
                  description: 'Get detailed response',
                  action: 'contact@aftl.co.uk',
                  color: 'bg-blue-50 border-blue-200 text-blue-700',
                },
                {
                  icon: <MapPin className="h-6 w-6" />,
                  title: 'Visit',
                  description: 'Headquarters',
                  action: 'Wolsdon Street, Plymouth',
                  color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
                },
              ].map((option, index) => (
                <div key={index} className={`p-4 rounded-xl border-2 ${option.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-start gap-4`}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/75 flex items-center justify-center">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold ml-0">{option.title}</h3>
                    <p className="text-sm opacity-75 mb-1.5">{option.description}</p>
                    <p className="font-medium text-sm">{option.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid: left info + right form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start lg:items-center">
            {/* Info column */}
            <ScrollReveal direction="left">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <ContactInfo icon={<MapPin className="h-6 w-6 text-blue-600" />} title="Headquarters" lines={["Wolsdon Street, Plymouth", "United Kingdom"]} />
                  <ContactInfo icon={<Phone className="h-6 w-6 text-blue-600" />} title="Phone" lines={["+44 78672 15041", "Available 24/7"]} />
                  <ContactInfo icon={<Mail className="h-6 w-6 text-blue-600" />} title="Email" lines={["contact@aftl.co.uk"]} />
                  <ContactInfo icon={<Clock className="h-6 w-6 text-blue-600" />} title="Business Hours" lines={["Mon–Fri: 8:00 AM – 7:00 PM", "Sat: 9:00 AM – 5:00 PM", "Sun: Emergency support only"]} />
                </div>
              </div>
            </ScrollReveal>

            {/* Form column */}
            <ScrollReveal direction="right">
              <div className="lg:col-span-2 flex justify-center">
                {/* Adaptive width:
                    - mobile: full width (w-full)
                    - sm: max-w-md
                    - md: max-w-xl
                    - lg: max-w-3xl
                    - xl: max-w-4xl
                */}
                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl bg-white rounded-2xl p-5 sm:p-7 md:p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Start Your Project</h2>
                      <p className="text-sm text-gray-500 mt-1">Free consultation</p>
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
                          aria-required
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
                          aria-required
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
                          pattern="^[0-9+\\-\\s()]{7,}$"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition"
                          placeholder="+44 1234 567890"
                          aria-required
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
                          aria-required
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
                        aria-required
                      />
                    </div>

                    {/* Status message */}
                    {status.error && (
                      <div className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-md">{status.error}</div>
                    )}
                    {status.success && (
                      <div className="text-sm text-green-700 bg-green-50 px-4 py-2 rounded-md">{status.success}</div>
                    )}

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={status.loading}
                        className={`w-full sm:w-auto h-12 md:h-14 bg-blue-700 text-white px-6 md:px-8 rounded-xl transition-all duration-300 font-semibold flex items-center justify-center ${status.loading ? 'opacity-70 cursor-wait' : 'hover:scale-[1.01] shadow-lg hover:shadow-xl'}`}
                        aria-busy={status.loading}
                      >
                        <Send className="h-5 w-5 mr-2" />
                        {status.loading ? 'Sending...' : 'Send Message'}
                      </button>

                      <button
                        type="button"
                        onClick={() => { setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); resetStatus(); }}
                        className="w-full sm:w-auto h-12 md:h-14 border border-gray-200 bg-white text-gray-700 px-6 md:px-8 rounded-xl hover:bg-gray-50 transition-all duration-300"
                      >
                        Reset
                      </button>
                    </div>
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

function ContactInfo({ icon, title, lines = [] }) {
  return (
    <div className="flex items-start">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        {lines.map((l, i) => (
          <p key={i} className="text-gray-600 text-sm">{l}</p>
        ))}
      </div>
    </div>
  );
}

export default ContactPage;
