import React, { useMemo } from 'react';
import {
  Target,
  Users,
  Award,
  TrendingUp,
  Eye,
  Heart,
  Globe,
  Lightbulb,
  Github,
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import PathsBackground from '../components/PathsBackground';
import ScrollReveal from '../components/ScrollReveal';

/**
 * AboutPage — improved with icons and SEO (meta + JSON-LD).
 *
 * TODO:
 *  - Replace placeholder image sizes and URLs with real CDN images (set actual width/height).
 *  - Adjust organization/team JSON-LD `sameAs` and `url` fields for production.
 */

const AboutPage = () => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://your-site.example.com';
  const pageUrl = typeof window !== 'undefined' ? window.location.href : `${siteUrl}/about`;
  const pageTitle = 'About AFTL Limited — AI-first tools for business';
  const pageDescription =
    "AFTL Limited builds AI-first tools that simplify life and work. Meet our leadership, learn our mission, and see how we partner with companies to drive digital transformation.";

  const team = useMemo(
    () => [
      {
        name: 'Shubham Tiwari',
        position: 'Chief Executive Officer & Founder',
        description:
          '6+ years of experience, leading product direction and strategic partnerships in AI-driven solutions for global markets.',
        expertise: ['Strategic Leadership', 'Digital Transformation', 'Enterprise Architecture'],
        photo: '/image/team/shubham.jpg',
        linkedin: 'https://www.linkedin.com/in/theshubhamtiwari/',
      },
      {
        name: 'Abhishek Mallapareddy',
        position: 'Chief Technology Officer',
        description:
          '5+ years of experience in software development, data analysis, automation, and AI. Led multiple successful product launches.',
        expertise: ['Artificial Intelligence', 'Machine Learning', 'Cloud Architecture'],
        photo: '/image/team/abhishek.jpg',
        github: 'https://github.com/abhishekreddy05',
        linkedin: 'https://www.linkedin.com/in/abhishek-mallapareddy/',
      },
      {
        name: 'Roshan Panda',
        position: 'Software Developer',
        description:
          'Full-stack developer with expertise in building scalable web applications and AI-powered platforms.',
        expertise: ['Operations Excellence', 'Process Optimization', 'Strategic Planning'],
        photo: '/image/team/roshan.jpg',
        github: 'https://github.com/Roshandevs/',
        linkedin: 'https://www.linkedin.com/in/roshan-developer/',
        website: 'https://roshandevs.com',
      },
      {
        name: 'B Chandrashekhar',
        position: 'Software Developer',
        description:
          'Experienced in designing & optimizing applications for performance and scalability.',
        expertise: ['Performance', 'Optimization', 'System Design'],
        photo: '/image/team/shekhar.jpg',
        linkedin: 'https://www.linkedin.com/in/shekhar01/',
      },
    ],
    []
  );

  // JSON-LD structured data (Organization + Team)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AFTL Limited',
    url: siteUrl,
    logo: `${siteUrl}/assets/logo.png`,
    sameAs: [
      /* add social profiles here */
    ],
    member: team.map((m) => ({
      '@type': 'Person',
      name: m.name,
      jobTitle: m.position,
      image: `${siteUrl}${m.photo}`,
      sameAs: [m.linkedin || '', m.github || '', m.website || ''].filter(Boolean),
    })),
  };

  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="AFTL Limited" />
        <meta property="og:image" content={`${siteUrl}/assets/og-about.jpg`} />
        <meta property="og:image:alt" content="AFTL Limited — leadership and mission" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${siteUrl}/assets/og-about.jpg`} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <PathsBackground />

      {/* Hero Section */}
      <section
        className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
        aria-labelledby="about-hero-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h1 id="about-hero-title" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="inline-flex items-center justify-center mr-3">
                  <Globe className="w-7 h-7 text-blue-600" />
                </span>
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">AFTL Limited</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We build AI-first tools that simplify life and work — fast, secure, and powerful.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white" aria-labelledby="story-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 id="story-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 inline-flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                  Empowering People with AI-First Tools
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    AFTL builds AI-first tools that simplify everyday life by turning routine tasks into intelligent, automated experiences...
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Lightbulb className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-blue-900">Innovation Through Excellence</p>
                    <p className="text-blue-700 mt-2">Transforming Ideas into Reality</p>
                  </div>
                </div>

                {/* Floating stats with icons */}
                <div
                  className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg flex items-center gap-3"
                  aria-hidden="true"
                >
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-xl font-bold text-gray-900">500+</div>
                    <div className="text-xs text-gray-600">Happy Clients</div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg flex items-center gap-3"
                  aria-hidden="true"
                >
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-xl font-bold text-gray-900">98%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50" aria-labelledby="mission-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 id="mission-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 inline-flex items-center gap-3 justify-center">
                <Target className="w-6 h-6 text-blue-600" />
                Why Now?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">The Problem with Today’s Food Platforms</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  {[
                    'Endless recipe content, but no real personalization — just noise',
                    'Meal planning, nutrition tracking, and grocery lists are scattered across apps',
                    'Focused on trends and aesthetics, not real-life cooking or community',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Eye className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Solution</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  {[
                    'AI that learns your taste, dietary goals, and schedule — real personalization',
                    'One platform to plan meals, track nutrition, generate smart grocery lists',
                    'Built to connect food lovers, home cooks, and families through shared plans, recipes, and chats',
                    'We’re creating a community where people can cook smarter, eat better, and share more — together',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white" aria-labelledby="values-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 id="values-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 inline-flex items-center gap-3 justify-center">
                <Award className="w-6 h-6 text-blue-600" />
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The fundamental principles that guide our decisions, shape our culture, and define our relationships.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: 'Integrity',
                description: 'We conduct business with unwavering honesty, transparency, and ethical standards in every interaction.',
                color: 'from-red-400 to-red-600',
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: 'Excellence',
                description: 'We pursue the highest quality standards and continuously strive to exceed expectations in everything we deliver.',
                color: 'from-yellow-400 to-yellow-600',
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Collaboration',
                description: 'We believe in the power of teamwork, partnership, and collective intelligence to achieve extraordinary results.',
                color: 'from-green-400 to-green-600',
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: 'Innovation',
                description: 'We embrace change, challenge conventions, and continuously seek breakthrough solutions for complex problems.',
                color: 'from-blue-400 to-blue-600',
              },
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:shadow-lg`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team (with photos + socials) */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white relative overflow-hidden" aria-labelledby="leadership-title">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 id="leadership-title" className="text-3xl md:text-4xl font-bold mb-6 inline-flex items-center gap-3 justify-center">
                <Users className="w-7 h-7 text-white" />
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Visionary leaders with decades of combined experience driving innovation and delivering results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 160}>
                <article
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                  aria-labelledby={`member-${index}-name`}
                >
                  <div className="flex flex-col items-center">
                    {/* Photo */}
                    <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-lg bg-white/5 flex items-center justify-center">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={`${member.name} — ${member.position}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width="400"
                          height="400"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white font-semibold">
                          {member.name
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('')}
                        </div>
                      )}
                    </div>

                    <h3 id={`member-${index}-name`} className="text-xl font-semibold mb-1 text-center">
                      {member.name}
                    </h3>
                    <p className="text-blue-200 mb-3 text-center text-sm">{member.position}</p>
                    <p className="text-blue-100 text-sm mb-4 leading-relaxed text-center">{member.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-center">Expertise:</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-600/30 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="mt-3 flex items-center gap-4">
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
                          aria-label={`${member.name} GitHub`}
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {member.website && (
                        <a
                          href={member.website}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
                          aria-label={`${member.name} Website`}
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50" aria-labelledby="culture-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 id="culture-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Believe In
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automation with Purpose',
                description: 'We build tools that remove digital friction, not add complexity. Every feature is designed to save time and enhance productivity.',
              },
              {
                title: 'Intuitive by Design',
                description: 'Good design disappears — Platrr feels natural from first use. We obsess over user experience to create seamless interactions.',
              },
              {
                title: 'Privacy by Default',
                description: 'Your data belongs to you. Full transparency, always. We build with privacy-first principles to keep your information safe and secure.',
              },
              {
                title: 'Lean, Scalable Growth',
                description: 'We scale mindfully — with clean systems and real feedback. Sustainable growth is better than rapid growth.',
              },
              {
                title: 'Built for Community',
                description: 'We empower people to connect, share, and grow together. Community is at the heart of everything we do.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
