// src/pages/CareersPage.jsx
import React, { useRef, useState, useEffect } from 'react';
import {
  MapPin,
  Clock,
  Users,
  Heart,
  TrendingUp,
  Award,
  Star,
  X
} from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import ScrollReveal from '../components/ScrollReveal';

// Phone input lib
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5MB
const ALLOWED_MIME = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const CareersPage = () => {
  const jobsRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    linkedin: '',
    github: '',
    resume: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [flash, setFlash] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // lock body scroll while modal is open
  useEffect(() => {
    const original = document.body.style.overflow;
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = original || '';
    }
    return () => {
      document.body.style.overflow = original || '';
    };
  }, [modalOpen]);

  useEffect(() => {
    if (modalOpen && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 60);
    }
  }, [modalOpen]);

  const openApplyModal = (position = '') => {
    setFormState((s) => ({ ...s, position }));
    setErrors({});
    setFlash(null);
    setModalOpen(true);
  };

  const closeModal = () => {
    if (submitting) return;
    setModalOpen(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === 'resume') {
      const file = (files as FileList)?.[0] || null;
      setFormState((s) => ({ ...s, resume: file }));
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.resume;
        return updated;
      });
    } else {
      setFormState((s) => ({ ...s, [name]: value }));
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  // phone input change handler (value like "447712345678")
  const handlePhoneChange = (value: string) => {
    // react-phone-input-2 returns numeric string without + by default; prepend + for server
    setFormState((s) => ({ ...s, phone: value ? `+${value}` : '' }));
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated.phone;
      return updated;
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = 'Name is required';
    if (!formState.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      errs.email = 'Valid email is required';
    if (!formState.phone || formState.phone.length < 6) errs.phone = 'Valid phone number is required';
    if (!formState.position.trim()) errs.position = 'Please select or enter a position';
    if (!formState.resume) errs.resume = 'Please attach your resume';
    else {
      if (!ALLOWED_MIME.includes(formState.resume.type)) errs.resume = 'Resume must be PDF or Word document';
      if (formState.resume.size > MAX_FILE_BYTES) errs.resume = 'Resume must be smaller than 5 MB';
    }
    return errs;
  };

const submitApplication = async (e) => {
  e.preventDefault();
  setFlash(null);

  const errs = validate();
  if (Object.keys(errs).length) {
    setErrors(errs);
    return;
  }

  try {
    setSubmitting(true);

    const formData = new FormData();
    Object.entries(formState).forEach(([k, v]) => {
      if (k === "resume" && v) formData.append("resume", v);
      else formData.append(k, v);
    });

    const res = await fetch("https://aftl-backend.netlify.app/api/apply", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Failed to submit application");

    setFlash({ type: "success", text: "Application submitted successfully." });

    setFormState({
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
      linkedin: "",
      github: "",
      resume: null
    });

    setTimeout(() => setModalOpen(false), 1200);
  } catch (err) {
    setFlash({
      type: "error",
      text: err.message || "Submission failed. Try again later."
    });
  } finally {
    setSubmitting(false);
  }
};



  const scrollToJobs = () => {
    if (jobsRef.current) {
      jobsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const jobs = [
    {
      title: 'Senior Software Engineer - Cloud Platform',
      department: 'Engineering',
      location: 'London, UK / Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '£80,000 - £120,000',
      description:
        'Lead the development of our next-generation cloud platform, working with cutting-edge technologies and serving millions of users worldwide.',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Kubernetes', 'Microservices'],
      benefits: ['Equity', '£5K Learning Budget', 'Flexible Hours'],
      urgent: true,
    },
    {
      title: 'Product Manager - AI Solutions',
      department: 'Product',
      location: 'London, UK / Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '£70,000 - £100,000',
      description:
        'Drive product strategy for our AI-powered solutions, working closely with engineering and design teams to deliver exceptional user experiences.',
      skills: ['Product Strategy', 'AI/ML', 'Analytics', 'User Research', 'Agile', 'Roadmapping'],
      benefits: ['Stock Options', 'Conference Budget', 'Innovation Time'],
      urgent: false,
    },
  ];

  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />

      {/* Hero */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
                <Star className="w-4 h-4 mr-2" />
                Voted Best Tech Employer 2024
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Build Your Career with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  AFTL Limited
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                Join a team passionate about innovation, committed to excellence, and dedicated to creating technology solutions that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={scrollToJobs}
                  className="w-full sm:w-auto bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition transform"
                >
                  View Open Positions
                </button>
                <button
                  onClick={() => openApplyModal('Culture & General Enquiry')}
                  className="w-full sm:w-auto border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
                >
                  Learn About Culture
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Top Talent Chooses AFTL Limited</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-3">We create an environment where exceptional people do their best work.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp className="h-6 w-6 text-blue-600" />, title: 'Accelerated Growth', desc: 'Clear career progression & mentorship', stats: 'Avg 2.3 promotions' },
              { icon: <Users className="h-6 w-6 text-blue-600" />, title: 'World-Class Team', desc: 'Work with industry experts', stats: 'Google, Microsoft alumni' },
              { icon: <Heart className="h-6 w-6 text-blue-600" />, title: 'Work-Life Harmony', desc: 'Flexible arrangements & wellness', stats: '4.8/5 balance' },
              { icon: <Award className="h-6 w-6 text-blue-600" />, title: 'Recognition & Impact', desc: 'Projects that matter', stats: 'Equity & bonuses' },
            ].map((b, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="text-center p-5 bg-gray-50 rounded-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm mb-3">
                    {b.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-gray-600 text-sm">{b.desc}</p>
                  <div className="text-sm text-blue-600 mt-2 font-medium">{b.stats}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 md:py-16 bg-white" ref={jobsRef} id="open-positions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Current Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">We're hiring across engineering, product, and more.</p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <ScrollReveal key={idx} delay={idx * 80}>
                <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 flex flex-col lg:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg md:text-xl font-semibold">{job.title}</h3>
                      <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full">{job.department}</span>
                      <span className="text-sm font-bold text-green-600">{job.salary}</span>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</div>
                      <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</div>
                      <div className="flex items-center gap-1"><Users className="w-4 h-4" /> {job.experience}</div>
                    </div>

                    <p className="text-gray-700 mb-3">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((s, i) => <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs">{s}</span>)}
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex items-center gap-2">
                    <button
                      onClick={() => openApplyModal(job.title)}
                      className="w-full md:w-auto bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't see your perfect role?</h2>
          <p className="text-gray-600 mb-6">Send us your resume and we'll reach out when something matches.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openApplyModal('General Application')} className="w-full sm:w-auto bg-blue-700 text-white px-6 py-3 rounded-lg">Submit General Application</button>
            <button onClick={() => openApplyModal('Talent Network')} className="w-full sm:w-auto border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-lg">Join Our Talent Network</button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-start md:items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="apply-modal-title"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => { if (!submitting) closeModal(); }}
          />

          {/* modal card: place under nav on small screens (mt-20), centered on md+ */}
          <div
            className="relative w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden modal-content"
            style={{ maxHeight: '88vh' }}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b">
              <h3 id="apply-modal-title" className="text-lg font-semibold">Apply for role</h3>
              <button onClick={() => !submitting && closeModal()} className="p-2 rounded-md hover:bg-gray-100" aria-label="Close form">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={submitApplication} className="px-5 py-4 overflow-auto" style={{ maxHeight: '74vh' }}>
              {flash && (
                <div className={`p-3 rounded-md text-sm ${flash.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {flash.text}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Full name *</span>
                  <input
                    ref={firstInputRef}
                    name="name"
                    value={formState.name}
                    onChange={handleInput}
                    className={`mt-2 px-3 py-2 border rounded-md focus:outline-none ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <div className="text-xs text-red-600 mt-1">{errors.name}</div>}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Email *</span>
                  <input
                    name="email"
                    value={formState.email}
                    onChange={handleInput}
                    className={`mt-2 px-3 py-2 border rounded-md focus:outline-none ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                    placeholder="you@example.com"
                    type="email"
                  />
                  {errors.email && <div className="text-xs text-red-600 mt-1">{errors.email}</div>}
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Mobile number *</span>
                  <div className="mt-2">
                    <PhoneInput
                      country={'gb'}
                      value={formState.phone.replace(/^\+/, '')}
                      onChange={handlePhoneChange}
                      inputProps={{
                        name: 'phone',
                        required: true,
                        className: `w-full px-3 py-2 border rounded-md focus:outline-none ${errors.phone ? 'border-red-300' : 'border-gray-200'}`,
                        'aria-label': 'Phone number'
                      }}
                      containerClass="w-full"
                      buttonStyle={{ border: 'none' }}
                      inputStyle={{ width: '100%' }}
                    />
                  </div>
                  {errors.phone && <div className="text-xs text-red-600 mt-1">{errors.phone}</div>}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Position *</span>
                  <input
                    name="position"
                    value={formState.position}
                    onChange={handleInput}
                    className={`mt-2 px-3 py-2 border rounded-md focus:outline-none ${errors.position ? 'border-red-300' : 'border-gray-200'}`}
                    placeholder="Position you're applying for"
                  />
                  {errors.position && <div className="text-xs text-red-600 mt-1">{errors.position}</div>}
                </label>
              </div>

              <label className="flex flex-col mt-3">
                <span className="text-sm font-medium text-gray-700">Cover message</span>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInput}
                  rows={4}
                  className="mt-2 px-3 py-2 border rounded-md focus:outline-none border-gray-200"
                  placeholder="A short note about why you'd be a great fit..."
                />
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mt-3">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Resume (PDF / DOC / DOCX) *</span>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx,application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleInput}
                    className="mt-2"
                  />
                  {formState.resume && (
                    <div className="mt-2 text-sm text-gray-600">
                      Selected: <strong>{formState.resume.name}</strong> — {(formState.resume.size / 1024 / 1024).toFixed(2)} MB
                    </div>
                  )}
                  {errors.resume && <div className="text-xs text-red-600 mt-1">{errors.resume}</div>}
                </label>

                <div className="flex flex-col gap-3">
                  <label className="flex flex-col">
                    <span className="text-sm font-medium text-gray-700">LinkedIn (optional)</span>
                    <input
                      name="linkedin"
                      value={formState.linkedin}
                      onChange={handleInput}
                      placeholder="https://www.linkedin.com/in/..."
                      className="mt-2 px-3 py-2 border rounded-md focus:outline-none border-gray-200"
                      type="url"
                    />
                  </label>

                  <label className="flex flex-col">
                    <span className="text-sm font-medium text-gray-700">GitHub (optional)</span>
                    <input
                      name="github"
                      value={formState.github}
                      onChange={handleInput}
                      placeholder="https://github.com/..."
                      className="mt-2 px-3 py-2 border rounded-md focus:outline-none border-gray-200"
                      type="url"
                    />
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4">
                <div className="text-sm text-gray-600">
                  By submitting, you agree to our <a href="/privacy" className="text-blue-600 hover:underline">privacy policy</a>.
                </div>

                <div className="flex w-full sm:w-auto gap-2">
                  <button type="button" onClick={() => closeModal()} disabled={submitting} className="flex-1 sm:flex-none px-4 py-2 rounded-md border hover:bg-gray-50">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800 inline-flex items-center justify-center gap-2"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;
