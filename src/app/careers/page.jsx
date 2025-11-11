"use client";
import React from "react";
import UploadResume from "../../components/UploadResume";

function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center leading-tight">
          Careers
        </h1>

        {/* Job Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* AI/ML Engineer */}
          <JobCard
            title="AI/ML Engineer"
            location="Remote / London / Dubai"
            type="Full-Time"
            experience="2+ years (Open to exceptional freshers)"
            domain="Artificial Intelligence"
            about="We are looking for a passionate and curious AI/ML Engineer to join our team. You will design and deploy AI-driven products that power our next-gen intelligent systems."
            responsibilities={[
              "Research, design, and implement ML models and pipelines",
              "Build and fine-tune NLP and LLM applications (Hugging Face, LangChain, OpenAI)",
              "Integrate models into real-time web apps or APIs",
              "Collect, clean, and structure large datasets",
              "Evaluate and improve model performance",
            ]}
            requirements={[
              "ML fundamentals and model deployment experience",
              "Hands-on Python (PyTorch/TensorFlow/HuggingFace)",
              "Familiarity with LLMs, embeddings, and vector DBs",
              "Experience with REST APIs & Git",
            ]}
            mail="contact@aftl.co.uk"
            linkedin="https://www.linkedin.com/company/advanced-future-tech-limited/?viewAsMember=true"
          />

          {/* Software Developer */}
          <JobCard
            title="Software Developer"
            location="Remote / London / Dubai"
            type="Full-Time"
            experience="1–3 years (Open to recent grads)"
            domain="Engineering"
            about="We’re looking for a skilled Software Developer to help build robust, scalable web apps across the stack."
            responsibilities={[
              "Design and build scalable web applications",
              "Collaborate with designers and backend teams",
              "Write clean, maintainable code and tests",
              "Debug and optimize performance across devices",
            ]}
            requirements={[
              "Proficiency in HTML, CSS, JavaScript (React, Next.js)",
              "Backend experience (Node/Express or similar)",
              "Familiarity with Git, REST APIs, and DBs",
              "Comfort working remote-first",
            ]}
            mail="contact@aftl.co.uk"
            linkedin="https://www.linkedin.com/company/aftl"
          />
        </div>

        {/* Upload Resume */}
        <div className="mt-10">
          <UploadResume />
        </div>
      </div>
    </div>
  );
}

export default CareersPage;

/* ----------------- Job Card Component ----------------- */
const JobCard = ({
  title,
  location,
  type,
  experience,
  domain,
  about,
  responsibilities,
  requirements,
  mail,
  linkedin,
}) => (
  <article className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200 hover:shadow-xl transition duration-300">
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
      {title}
    </h2>

    <div className="flex flex-wrap gap-2 text-xs sm:text-sm md:text-base lg:text-base text-gray-700 mt-2">
      <span className="whitespace-nowrap">{location}</span>
      <span className="whitespace-nowrap">{type}</span>
      <span className="whitespace-nowrap">{experience}</span>
      <span className="whitespace-nowrap">{domain}</span>
    </div>

    <Section title="About the Role" className="mt-4">
      {about}
    </Section>

    <ListSection title="Responsibilities" items={responsibilities} />
    <ListSection title="Requirements" items={requirements} />

    <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
      <a
        href={`mailto:${mail}`}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-center w-full sm:w-auto transition"
      >
        Apply Now
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-full text-center w-full sm:w-auto transition"
      >
        Apply through LinkedIn
      </a>
    </div>
  </article>
);

/* ----------------- Small helper components ----------------- */
const Section = ({ title, children, className = "" }) => (
  <div className={`${className}`}>
    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900">
      {title}
    </h3>
    <p className="mt-2 text-sm sm:text-base md:text-base lg:text-base text-gray-800 leading-relaxed">
      {children}
    </p>
  </div>
);

const ListSection = ({ title, items }) => (
  <div className="mt-3">
    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900">
      {title}
    </h4>
    <ul className="list-disc list-inside mt-2 text-xs sm:text-sm md:text-base lg:text-base space-y-1 text-gray-800">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  </div>
);
