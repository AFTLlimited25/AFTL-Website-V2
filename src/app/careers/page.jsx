import React from "react";
import UploadResume from "../../components/UploadResume";

function CareersPage() {
  return (
    <div className="min-h-screen bg-base text-aftl-body">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-aftl-heading text-center leading-tight">
          Careers
        </h1>

        {/* Grid: 1 column on mobile, 2 on md+ */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Job Card - reusable pattern (AI/ML) */}
          <article className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-aftl-heading">
              AI/ML Engineer
            </h2>

            {/* Info row: wraps on small screens */}
            <div className="flex flex-wrap gap-2 text-sm sm:text-sm text-aftl-subtext mt-2">
              <span className="whitespace-nowrap">Remote / London / Dubai</span>
              <span className="whitespace-nowrap">Full-Time</span>
              <span className="whitespace-nowrap">2+ years (Open to exceptional freshers)</span>
              <span className="whitespace-nowrap">Artificial Intelligence</span>
            </div>

            <Section title="About the Role" className="mt-4">
              We are looking for a passionate and curious AI/ML Engineer to join our team. You will design and deploy AI-driven products that power our next-gen intelligent systems.
            </Section>

            <ListSection
              title="Responsibilities"
              items={[
                "Research, design, and implement ML models and pipelines",
                "Build and fine-tune NLP and LLM applications (Hugging Face, LangChain, OpenAI)",
                "Integrate models into real-time web apps or APIs",
                "Collect, clean, and structure large datasets",
                "Evaluate and improve model performance",
              ]}
            />

            <ListSection
              title="Requirements"
              items={[
                "ML fundamentals and model deployment experience",
                "Hands-on Python (PyTorch/TensorFlow/HuggingFace)",
                "Familiarity with LLMs, embeddings, and vector DBs",
                "Experience with REST APIs & Git",
              ]}
            />

            {/* Buttons: full width on mobile, inline on larger screens */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3">
              <a
                href="mailto:contact@aftl.co.uk"
                className="btn btn-primary w-full sm:w-auto text-center"
                aria-label="Apply Now"
              >
                Apply Now
              </a>
              <a
                href="https://www.linkedin.com/company/advanced-future-tech-limited/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full sm:w-auto text-center"
                aria-label="Apply through LinkedIn"
              >
                Apply through LinkedIn
              </a>
            </div>
          </article>

          {/* Job Card - Software Developer */}
          <article className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-aftl-heading">
              Software Developer
            </h2>

            <div className="flex flex-wrap gap-2 text-sm sm:text-sm text-aftl-subtext mt-2">
              <span className="whitespace-nowrap">Remote / London / Dubai</span>
              <span className="whitespace-nowrap">Full-Time</span>
              <span className="whitespace-nowrap">1–3 years (Open to recent grads)</span>
              <span className="whitespace-nowrap">Engineering</span>
            </div>

            <Section title="About the Role" className="mt-4">
              We’re looking for a skilled Software Developer to help build robust, scalable web apps across the stack.
            </Section>

            <ListSection
              title="Responsibilities"
              items={[
                "Design and build scalable web applications",
                "Collaborate with designers and backend teams",
                "Write clean, maintainable code and tests",
                "Debug and optimize performance across devices",
              ]}
            />

            <ListSection
              title="Requirements"
              items={[
                "Proficiency in HTML, CSS, JavaScript (React, Next.js)",
                "Backend experience (Node/Express or similar)",
                "Familiarity with Git, REST APIs, and DBs",
                "Comfort working remote-first",
              ]}
            />

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href="mailto:contact@aftl.co.uk"
                className="btn btn-primary w-full sm:w-auto text-center"
                aria-label="Apply Now"
              >
                Apply Now
              </a>
              <a
                href="https://www.linkedin.com/company/aftl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full sm:w-auto text-center"
                aria-label="Apply through LinkedIn"
              >
                Apply through LinkedIn
              </a>
            </div>
          </article>
        </div>

        {/* Upload Resume - placed after cards, full width on small */}
        <div className="mt-6">
          <UploadResume />
        </div>
      </div>
    </div>
  );
}

export default CareersPage;

/* ----------------- Small helper components ----------------- */

const Section = ({ title, children, className = "" }) => (
  <div className={`${className}`}>
    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-aftl-heading">{title}</h3>
    <p className="mt-2 text-sm sm:text-sm md:text-base text-aftl-body leading-relaxed">
      {children}
    </p>
  </div>
);

const ListSection = ({ title, items }) => (
  <div className="mt-3">
    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-aftl-heading">{title}</h4>
    <ul className="list-disc list-inside mt-2 text-sm sm:text-sm md:text-base space-y-1 text-aftl-body">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  </div>
);
