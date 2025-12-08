import React, { useEffect, useMemo, useState } from 'react';
import { Search, ChevronDown, ChevronUp, Copy, CheckCircle2, ThumbsUp, ThumbsDown, Link as LinkIcon } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

// Existing DATA (kept) — we'll merge with the new `faqs` list provided and normalize IDs
const ORIGINAL_FAQ_DATA = [
  {
    id: 'general-questions',
    title: 'General Questions',
    items: [
      { id: 'what-is-aftl', q: 'What is AFTL and what does it do?', a: 'AFTL (Advanced Future Tech Labs) is an AI innovation company building smart tools, agents, and platforms for businesses and individuals.' },
      { id: 'where-are-you-based', q: 'Where are you based?', a: 'We are based in London, United Kingdom, with a global remote team.' },
      { id: 'what-services-products-do-you-offer', q: 'What services/products do you offer?', a: 'We offer AI solutions, intelligent agents, automation tools, analytics services, and custom software development.' },
      { id: 'how-do-i-get-in-touch-with-your-team', q: 'How do I get in touch with your team?', a: 'You can reach us anytime at support@aftl.ai or through our contact page.' }
    ]
  },
  {
    id: 'products',
    title: 'Products',
    items: [
      { id: 'security', q: 'How secure are your products?', a: 'Security-by-design with encryption in transit and at rest, least-privilege access, and regular audits.' },
      { id: 'integrations', q: 'Do you support integrations?', a: 'Yes—REST/GraphQL APIs, webhooks, and native connectors for popular services.' },
      { id: 'uptime-sla', q: 'What is the uptime and SLA?', a: 'Core services target 99.9% uptime with incident communication and RCA for P1 events.' }
    ]
  },
  {
    id: 'pricing',
    title: 'Pricing & billing',
    items: [
      { id: 'pricing-model', q: 'How does pricing work?', a: 'Tiered subscriptions with usage add‑ons; enterprise plans with dedicated SLAs are available.' },
      { id: 'free-trial', q: 'Is there a free trial?', a: 'Yes—a 14‑day trial with limited usage that can be extended upon request.' },
      { id: 'invoices', q: 'How do invoices and taxes work?', a: 'Monthly or annual invoices with compliant tax fields; PDFs and email copies supported.' }
    ]
  },
  {
    id: 'support',
    title: 'Support',
    items: [
      { id: 'channels', q: 'Which support channels are available?', a: 'Email, live chat, and priority phone support for enterprise customers.' },
      { id: 'response-times', q: 'What are typical response times?', a: 'Standard: under 24 hours on business days; Priority: under 2 hours for P1 incidents.' },
      { id: 'status-page', q: 'Do you have a status page?', a: 'Yes—the public status page lists uptime metrics and maintenance windows.' }
    ]
  }
];

// New content provided by the user — we'll normalize to the same shape
const NEW_FAQS_SOURCE = [
  {
    category: "General Questions",
    questions: [
      { q: "What is AFTL?", a: "AFTL (Advanced Future Tech Labs) is an AI innovation company building smart tools, agents, and platforms for businesses and individuals." },
      { q: "Where are you based?", a: "We are based in London, United Kingdom, with a global remote team." },
      { q: "What services/products do you offer?", a: "We offer AI solutions, intelligent agents, automation tools, analytics services, and custom software development." },
      { q: "How do I get in touch with your team?", a: "You can reach us anytime at support@aftl.ai or through our contact page." }
    ]
  },
  {
    category: "Product & Services",
    questions: [
      { q: "How can I request a demo or trial?", a: "You can request a demo by contacting us via email or filling the demo request form on our homepage." },
      { q: "Do you offer custom AI solutions?", a: "Not for now." },
      { q: "Can I integrate your tools with my current system?", a: "Not for now, but absolutely! In the coming months, you will be able to." },
      { q: "What industries do you work with?", a: "We work across industries like healthcare, retail, finance, hospitality, and more." }
    ]
  },
  {
    category: "Careers & Hiring",
    questions: [
      { q: "How can I apply for a job at AFTL?", a: "Visit our Careers page to view open positions and apply online." },
      { q: "What’s your recruitment process?", a: "Our process typically includes an initial screen, technical interview, and a culture fit round." },
      { q: "Do you accept remote applicants?", a: "Yes! We are a remote-friendly company and welcome applicants from around the world." },
      { q: "Can I apply if I’m a fresher or student?", a: "Definitely. We believe in potential and encourage passionate individuals to apply." }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      { q: "I found a bug—how do I report it?", a: "Please email us at contact@aftl.co.uk or use the feedback form on our website." },
      { q: "How do I reset my account password?", a: "You can reset your password from the login screen by clicking 'Forgot Password'." },
      { q: "What browsers are supported by your platform?", a: "We support all modern browsers including Chrome, Firefox, Edge, and Safari." }
    ]
  },
  {
    category: "Billing & Payments",
    questions: [
      { q: "What payment methods do you accept?", a: "We accept credit/debit cards, PayPal, and bank transfers." },
      { q: "Do you offer refunds?", a: "Yes, please refer to our refund policy or contact support." },
      { q: "Is my payment information secure?", a: "Absolutely. We use industry-standard encryption and never store your card details." }
    ]
  },
  {
    category: "Privacy & Security",
    questions: [
      { q: "How do you handle my personal data?", a: "We adhere to GDPR and ensure your data is never misused or sold." },
      { q: "Do you use cookies?", a: "Yes, we use cookies to enhance your experience. You can control them from your browser settings." },
      { q: "Is my data shared with third parties?", a: "No. We do not share your personal data with third-party advertisers or vendors." }
    ]
  }
];

// Utility: slugify strings (keeps same implementation but slightly improved)
const slug = (s) =>
  String(s || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// Normalize NEW_FAQS_SOURCE into the same shape as ORIGINAL_FAQ_DATA and ensure unique ids
const normalizeAndMerge = () => {
  const normalizedNew = NEW_FAQS_SOURCE.map(cat => ({
    id: slug(cat.category),
    title: cat.category,
    items: cat.questions.map(q => ({ id: slug(q.q), q: q.q, a: q.a }))
  }));

  // Merge: prefer ORIGINAL data where ids collide; otherwise append
  const byId = {};
  ORIGINAL_FAQ_DATA.forEach(cat => { byId[cat.id] = cat; });
  normalizedNew.forEach(cat => {
    if (byId[cat.id]) {
      // merge items (avoid duplicates by item id)
      const existingIds = new Set(byId[cat.id].items.map(i => i.id));
      const toAdd = cat.items.filter(i => !existingIds.has(i.id));
      byId[cat.id] = { ...byId[cat.id], items: [...byId[cat.id].items, ...toAdd] };
    } else {
      byId[cat.id] = cat;
    }
  });

  return Object.values(byId);
};

// Single FAQ item component — handles copy UI and triggers
const FAQItem = ({ catId, item, isOpen, onToggle }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#${catId}-${item.id}`;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // fallback - open in new tab or do nothing
      console.warn('Clipboard write failed', e);
    }
  };

  return (
    <div id={`${catId}-${item.id}`} className="rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition">
      <button
        aria-expanded={isOpen}
        aria-controls={`panel-${item.id}`}
        onClick={() => onToggle(item.id)}
        className="w-full flex items-start justify-between gap-3 text-left px-4 md:px-5 py-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 rounded-xl"
      >
        <span className="text-gray-900 font-medium leading-6">{item.q}</span>
        <span className="ml-2 text-gray-500 flex-shrink-0">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>

      <div
        id={`panel-${item.id}`}
        className={`overflow-hidden transition-[grid-template-rows] duration-300 grid ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} px-4 md:px-5`}
      >
        <div className="min-h-0">
          {isOpen && (
            <div className="pb-4 md:pb-5 border-t border-gray-100 pt-4 text-gray-700 leading-relaxed">
              <p>{item.a}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <button
                  type="button"
                  onClick={copyLink}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 transition"
                  aria-label="Copy link to this question"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied' : 'Copy link'}
                </button>
                <span aria-hidden="true">•</span>
                <span>Helpful?</span>
                <button type="button" className="inline-flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 transition">
                  <ThumbsUp className="w-4 h-4" /> Yes
                </button>
                <button type="button" className="inline-flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 transition">
                  <ThumbsDown className="w-4 h-4" /> No
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FAQsPage = () => {
  const [query, setQuery] = useState('');
  // openByCategory: store the currently open item id for each category (single-open-per-category behavior)
  const [openByCategory, setOpenByCategory] = useState({});
  const [initialHash, setInitialHash] = useState('');

  const FAQ_DATA = useMemo(() => normalizeAndMerge(), []);

  // On mount, capture hash and open the relevant item
  useEffect(() => {
    const h = window.location.hash.replace('#', '');
    if (!h) return;
    setInitialHash(h);
    const m = h.match(/^([a-z0-9-]+)-([a-z0-9-]+)$/);
    if (m) {
      const [, cat, item] = m;
      setOpenByCategory(prev => ({ ...prev, [cat]: item }));
      setTimeout(() => {
        const el = document.getElementById(`${cat}-${item}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, []);

  // Simple text search across q+a
  const filtered = useMemo(() => {
    const ql = query.trim().toLowerCase();
    if (!ql) return FAQ_DATA;
    return FAQ_DATA.map(cat => ({
      ...cat,
      items: cat.items.filter(it => (it.q + ' ' + it.a).toLowerCase().includes(ql))
    })).filter(cat => cat.items.length > 0);
  }, [query, FAQ_DATA]);

  const toggleItem = (catId, itemId) => {
    setOpenByCategory(prev => {
      const curOpen = prev[catId];
      return { ...prev, [catId]: curOpen === itemId ? null : itemId };
    });
    // update hash so link/copy works and deep linking functions
    window.history.replaceState(null, '', `#${catId}-${itemId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/40">
      {/* Header */}
      <section className="pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-lg md:text-xl">Find quick answers about products, pricing, and support.</p>
        </div>
      </section>

      {/* Search */}
      <section className="pb-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs (e.g., security, SLA, integrations)…"
              className="w-full pl-10 pr-4 h-12 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none bg-white"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {filtered.map(cat => (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">{cat.title}</h2>
                <a
                  href={`#${cat.id}`}
                  className="text-sm text-gray-500 inline-flex items-center gap-1 hover:text-gray-700"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = cat.id;
                  }}
                >
                  <LinkIcon className="w-4 h-4" /> Link
                </a>
              </div>

              <div className="space-y-3">
                {cat.items.map(item => (
                  <FAQItem
                    key={item.id}
                    catId={cat.id}
                    item={item}
                    isOpen={openByCategory[cat.id] === item.id}
                    onToggle={(itemId) => toggleItem(cat.id, itemId)}
                  />
                ))}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-gray-600">No results found. Try another keyword.</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
