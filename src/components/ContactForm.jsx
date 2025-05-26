import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    success: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null, success: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: null,
        success: true,
      });

      // Clear form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false, success: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: true,
        error: error.message,
        success: false,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-black/30 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-black/30 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-black/30 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-2 bg-black/30 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          placeholder="Your message..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300
            ${status.submitting 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {status.submitted && (
        <div className={`p-4 rounded-lg ${status.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
          {status.success ? (
            <p>Thank you for your message. We will get back to you soon!</p>
          ) : (
            <p>{status.error}</p>
          )}
        </div>
      )}
    </form>
  );
};

export default ContactForm; 