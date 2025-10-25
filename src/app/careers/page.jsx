import React from 'react';
import Link from 'next/link';
import UploadResume from '../../components/UploadResume';

function CareersPage() {
  return (
    <div className="min-h-screen bg-base text-aftl-body">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-aftl-heading text-center">
          Careers
        </h1>
        <div className="mt-12 grid gap-8">
          <div className="p-8 rounded-lg shadow-lg bg-white">
            <h2 className="text-3xl font-bold text-aftl-heading">AI/ML Engineer</h2>
            <div className="flex items-center space-x-4 mt-2 text-aftl-subtext">
              <span>Remote / London / Dubai</span>
              <span>Full-Time</span>
              <span>2+ years (Open to exceptional freshers)</span>
              <span>Artificial Intelligence</span>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-aftl-heading">About the Role</h3>
              <p className="mt-4 text-aftl-body">
                We are looking for a passionate and curious AI/ML Engineer to join our growing team. You will help design and deploy AI-driven products that power our next-gen intelligent systems. From NLP models to generative AI agents, your work will directly shape the future of automation and digital intelligence at AFTL.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-aftl-heading">Responsibilities</h3>
              <ul className="list-disc list-inside mt-4 space-y-2 text-aftl-body">
                <li>Research, design, and implement machine learning models and pipelines</li>
                <li>Build and fine-tune NLP and LLM applications using frameworks like Hugging Face, LangChain, or OpenAI</li>
                <li>Collaborate with cross-functional teams to integrate models into real-time web apps or APIs</li>
                <li>Collect, clean, and structure large-scale datasets</li>
                <li>Continuously evaluate and improve model performance and efficiency</li>
                <li>Stay up-to-date with AI research and emerging trends</li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-aftl-heading">Requirements</h3>
              <ul className="list-disc list-inside mt-4 space-y-2 text-aftl-body">
                <li>Solid understanding of machine learning fundamentals and model deployment</li>
                <li>Hands-on experience with Python libraries like Scikit-learn, TensorFlow, PyTorch, Hugging Face, or spaCy</li>
                <li>Familiarity with prompt engineering, LLMs, embeddings, and vector databases</li>
                <li>Strong knowledge of data structures, algorithms, and statistics</li>
                <li>Experience working with REST APIs and Git workflows</li>
                <li>Bonus: Exposure to RAG systems, LangGraph, or agent-based frameworks</li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-aftl-heading">Nice to Have</h3>
              <ul className="list-disc list-inside mt-4 space-y-2 text-aftl-body">
                <li>Experience building chatbots or personal AI agents</li>
                <li>Knowledge of MLOps (Docker, FastAPI, CI/CD)</li>
                <li>Contributions to open-source or published AI projects</li>
              </ul>
            </div>
            <div className="mt-8 flex space-x-4">
              <a href="mailto:contact@aftl.co.uk" className="btn btn-primary">Apply Now</a>
              <a href="https://www.linkedin.com/company/advanced-future-tech-limited/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Apply through LinkedIn</a>
            </div>
          </div>
          <div className="p-8 rounded-lg shadow-lg bg-white">
            <h2 className="text-3xl font-bold text-aftl-heading">Software Developer</h2>
            <div className="flex items-center space-x-4 mt-2 text-aftl-subtext">
              <span>Remote / London / Dubai</span>
              <span>Full-Time</span>
              <span>1–3 years (Open to recent grads)</span>
              <span>Engineering</span>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-aftl-heading">About the Role</h3>
              <p className="mt-4 text-aftl-body">
                We’re looking for a skilled Software Developer to help us build robust, scalable, and elegant web-based applications. From intuitive front-end designs to powerful back-end systems, you’ll be involved across the full software development lifecycle.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-aftl-heading">Responsibilities</h3>
              <ul className="list-disc list-inside mt-4 space-y-2 text-aftl-body">
                <li>Design, develop, and maintain scalable web applications using modern frameworks</li>
                <li>Collaborate with UI/UX designers and backend teams for seamless integration</li>
                <li>Write clean, modular, and maintainable code</li>
                <li>Debug, test, and optimize performance across browsers and devices</li>
                <li>Participate in code reviews, agile meetings, and product discussions</li>
                <li>Contribute to the architecture and deployment of our software infrastructure</li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-aftl-heading">Requirements</h3>
              <ul className="list-disc list-inside mt-4 space-y-2 text-aftl-body">
                <li>Proficiency in HTML, CSS, JavaScript (React.js, Next.js)</li>
                <li>Backend experience with Node.js, Express.js, or similar frameworks</li>
                <li>Familiarity with Git, REST APIs, and relational or NoSQL databases</li>
                <li>Ability to work independently and as part of a remote-first team</li>
                <li>Understanding of software development best practices and CI/CD workflows</li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-aftl-heading">Nice to Have</h3>
              <ul className="list-disc list-inside mt-4 space-y-2 text-aftl-body">
                <li>Experience with 3D/WebGL libraries (Three.js, R3F)</li>
                <li>Knowledge of TypeScript, Tailwind CSS, and testing tools</li>
                <li>Understanding of cloud platforms like Vercel, Firebase, or AWS</li>
                <li>Interest in AI integration with software tools</li>
              </ul>
            </div>
            <div className="mt-8 flex space-x-4">
              <a href="mailto:contact@aftl.co.uk" className="btn btn-primary">Apply Now</a>
              <a href="https://www.linkedin.com/company/aftl" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Apply through LinkedIn</a>
            </div>
            <div className="min-h-screen bg-base text-aftl-body">
      <div className="container mx-auto px-4 py-16">
        {/* ... existing job listings ... */}

        {/* Upload Resume Section */}
        <UploadResume />
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareersPage;
