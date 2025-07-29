"use client";
import { useState } from "react";

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        q: "What is AFTL?",
        a: "AFTL (Advanced Future Tech Labs) is an AI innovation company building smart tools, agents, and platforms for businesses and individuals."
      },
      {
        q: "Where are you based?",
        a: "We are based in London, United Kingdom, with a global remote team."
      },
      {
        q: "What services/products do you offer?",
        a: "We offer AI solutions, intelligent agents, automation tools, analytics services, and custom software development."
      },
      {
        q: "How do I get in touch with your team?",
        a: "You can reach us anytime at support@aftl.ai or through our contact page."
      },
    ],
  },
  {
    category: "Product & Services",
    questions: [
      {
        q: "How can I request a demo or trial?",
        a: "You can request a demo by contacting us via email or filling the demo request form on our homepage."
      },
      {
        q: "Do you offer custom AI solutions?",
        a: "Not for now."
      },
      {
        q: "Can I integrate your tools with my current system?",
        a: "Not for now, but absolutely! In the coming months, you will be able to."
      },
      {
        q: "What industries do you work with?",
        a: "We work across industries like healthcare, retail, finance, hospitality, and more."
      },
    ],
  },
  {
    category: "Careers & Hiring",
    questions: [
      {
        q: "How can I apply for a job at AFTL?",
        a: "Visit our Careers page to view open positions and apply online."
      },
      {
        q: "What’s your recruitment process?",
        a: "Our process typically includes an initial screen, technical interview, and a culture fit round."
      },
      {
        q: "Do you accept remote applicants?",
        a: "Yes! We are a remote-friendly company and welcome applicants from around the world."
      },
      {
        q: "Can I apply if I’m a fresher or student?",
        a: "Definitely. We believe in potential and encourage passionate individuals to apply."
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        q: "I found a bug—how do I report it?",
        a: "Please email us at contact@aftl.co.uk or use the feedback form on our website."
      },
      {
        q: "How do I reset my account password?",
        a: "You can reset your password from the login screen by clicking 'Forgot Password'."
      },
      {
        q: "What browsers are supported by your platform?",
        a: "We support all modern browsers including Chrome, Firefox, Edge, and Safari."
      },
    ],
  },
  {
    category: "Billing & Payments",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept credit/debit cards, PayPal, and bank transfers."
      },
      {
        q: "Do you offer refunds?",
        a: "Yes, please refer to our refund policy or contact support."
      },
      {
        q: "Is my payment information secure?",
        a: "Absolutely. We use industry-standard encryption and never store your card details."
      },
    ],
  },
  {
    category: "Privacy & Security",
    questions: [
      {
        q: "How do you handle my personal data?",
        a: "We adhere to GDPR and ensure your data is never misused or sold."
      },
      {
        q: "Do you use cookies?",
        a: "Yes, we use cookies to enhance your experience. You can control them from your browser settings."
      },
      {
        q: "Is my data shared with third parties?",
        a: "No. We do not share your personal data with third-party advertisers or vendors."
      },
    ],
  },
];

export default function HelpCenterPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="p-6 max-w-5xl mx-auto text-aftl-body">
      <h1 className="text-4xl font-bold mb-6 text-center text-aftl-heading">Welcome to the AFTL Help Center</h1>
      <p className="text-aftl-body text-lg mb-12 text-center">
        We're here to support you. Whether you're a customer, job applicant, or partner, you'll find answers to common questions about our products, services, hiring process, and company.
      </p>

      {faqs.map((section, sectionIndex) => (
        <div key={section.category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-aftl-heading">{section.category}</h2>
          <div className="space-y-3">
            {section.questions.map((item, questionIndex) => {
              const currentIndex = `${sectionIndex}-${questionIndex}`;
              const isOpen = openIndex === currentIndex;
              return (
                <div
                  key={item.q}
                  className="border border-gray-300 rounded-md"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : currentIndex)
                    }
                    className="w-full flex justify-between items-center px-4 py-3 text-left text-aftl-heading font-medium"
                  >
                    {item.q}
                    <span className="ml-2">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-aftl-body">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-aftl-heading">📩 Still need help?</h3>
        <p className="text-aftl-body">Our team is just a message away.</p>
        <a
          href="mailto:contact@aftl.co.uk"
          className="mt-2 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Contact Support
        </a>
      </div>
    </main>
  );
}
