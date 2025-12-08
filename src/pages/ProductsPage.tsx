'use client';

import React from 'react';
import {
  CheckCircle, ArrowRight, Star,
  Upload, ScanSearch, ChefHat, Tags,
  Brain, BookOpenCheck, Salad, Languages,
  MonitorSmartphone,
  Hammer, Globe2, Rocket, Users as UsersIcon,
  Camera, Dumbbell, HeartPulse
} from 'lucide-react';
import ShapeBackground from '../components/ShapeBackground';
import ScrollReveal from '../components/ScrollReveal';

const PlatrrSteps = [
  { step: 1, title: 'Upload Photo', desc: 'Start by uploading a photo of any meal.', icon: Upload },
  { step: 2, title: 'Detect Ingredients via AI', desc: 'Our AI analyzes the photo to identify ingredients.', icon: ScanSearch },
  { step: 3, title: 'Recipe & Nutrition Generated', desc: 'Get a full recipe and nutritional breakdown.', icon: ChefHat },
  { step: 4, title: 'Smart Suggestions & Tags', desc: 'Receive smart suggestions and dietary tags.', icon: Tags }
];

const PlatrrFeatures = [
  {
    title: 'AI Ingredient Detection',
    description:
      'No more second-guessing what’s on your plate. With just one photo, Platrr uses advanced computer vision to detect and list ingredients with incredible accuracy — making it easier than ever to understand your meals at a glance.',
    icon: Brain
  },
  {
    title: 'Recipe Generation',
    description:
      'Snap a meal, get a recipe. Platrr instantly turns any food photo into a personalized recipe with clear, step-by-step cooking instructions — perfect for home chefs or curious foodies looking to recreate dishes.',
    icon: BookOpenCheck
  },
  {
    title: 'Smart Nutrition & Dietary Insights',
    description:
      'Want to eat smarter? Platrr provides a full nutritional breakdown — calories, macros, and more — for every dish it analyzes. Plus, it highlights dietary labels like Vegan, Keto, or Gluten-Free to fit your lifestyle needs and preferences.',
    icon: Salad
  },
  {
    title: 'Multi-language Support',
    description:
      'Platrr speaks your language — literally. Our AI supports multiple languages, making food recognition, ingredient lists, and recipes accessible and clear for users across the globe.',
    icon: Languages
  },
  {
    title: 'Mobile Responsive Design',
    description:
      'Whether you’re using a phone in the kitchen, a tablet at the store, or a desktop at work — Platrr delivers a seamless experience across all devices with fast loading, intuitive design, and full responsiveness.',
    icon: MonitorSmartphone
  }
];

const PlatrrStatus = [
  { label: 'Platrr Beta (Now)', icon: Rocket, desc: 'Fully working AI ingredient detection from food photos.' },
  { label: 'Chef Mode (Coming Soon)', icon: Hammer, desc: 'Premium cooking assistant experience + subscription model.' },
  { label: 'Platrr Community (Next Phase)', icon: Globe2, desc: 'A global space to share recipes and food stories with chefs & home cooks.' }
];

const PlatrrStats = [
  { stat: '200+', label: 'Early Users', icon: UsersIcon },
  { stat: '10+', label: 'Countries Reached', icon: Globe2 }
];

const PlatrrWho = [
  { label: 'Home Cooks', desc: 'Turn your kitchen into a smart assistant — recipe ideas in seconds.', icon: ChefHat },
  { label: 'Fitness Enthusiasts', desc: 'Track macros, stay on diet, and get meal inspiration instantly.', icon: Dumbbell },
  { label: 'Food Bloggers', desc: 'Add AI magic to your content — identify ingredients from your clicks.', icon: Camera },
  { label: 'Health-Conscious', desc: 'Eat smart — break down nutrition from a single photo.', icon: HeartPulse }
];

const Team = [
  { name: 'Abhishek Mallapareddy', title: 'AI Lead', linkedin: '[https://www.linkedin.com/in/abhishek-mallapareddy](https://www.linkedin.com/in/abhishek-mallapareddy)', github: '[https://github.com/Abhishek051294](https://github.com/Abhishek051294)' },
  { name: 'Shubham Tiwari', title: 'Product Strategist', linkedin: '[https://www.linkedin.com/in/theshubhamtiwari](https://www.linkedin.com/in/theshubhamtiwari)' },
  { name: 'B Chandrashekhar', title: 'AI/ML Engineer', linkedin: '[https://www.linkedin.com/in/shekhar01](https://www.linkedin.com/in/shekhar01)' },
  { name: 'Roshan Panda', title: 'Full Stack Developer', linkedin: '[https://www.linkedin.com/in/roshan-developer](https://www.linkedin.com/in/roshan-developer)' }
];

const IconBadge = ({ children, className = '' }) => (
  <span className={`inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100 ${className}`}>
    {children} </span>
);

const ProductsPage = () => (

  <div className="min-h-screen relative">
    <ShapeBackground />

    ```
    {/* Hero */}
    <section className="pt-20 pb-10 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Introducing Platrr
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Meet Platrr
              <div className="block text-3xl font-light text-blue-700 mt-2">The World’s Smartest Food AI</div>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform any meal photo into a full recipe, ingredient list, nutrition breakdown, and instant dietary advice — powered by best-in-class AI.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* How it works */}
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">How Platrr Works</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {PlatrrSteps.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={i} delay={i * 70}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center hover:shadow-md transition">
                  <IconBadge className="w-14 h-14 mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </IconBadge>
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-gray-600 text-sm mt-1">{s.desc}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Key Features</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {PlatrrFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={i} delay={i * 90}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
                  <div className="flex items-start">
                    <IconBadge className="w-12 h-12 mr-3">
                      <Icon className="w-6 h-6" />
                    </IconBadge>
                    <div>
                      <div className="font-semibold text-lg text-gray-900">{f.title}</div>
                      <p className="text-gray-700 mt-1">{f.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Status & growth */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Product Status & Growth Timeline</h2>
        </ScrollReveal>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PlatrrStatus.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
                <div className="flex items-start">
                  <IconBadge className="w-12 h-12 mr-3">
                    <Icon className="w-6 h-6" />
                  </IconBadge>
                  <div>
                    <div className="font-semibold text-blue-700">{stage.label}</div>
                    <p className="text-gray-600 text-sm mt-1">{stage.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 md:gap-10 justify-items-center">
          {PlatrrStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="text-center">
                <div className="inline-flex items-center gap-2">
                  <IconBadge className="w-10 h-10">
                    <Icon className="w-5 h-5" />
                  </IconBadge>
                  <div className="text-4xl font-extrabold text-blue-700 tracking-tight">{s.stat}</div>
                </div>
                <div className="text-sm font-medium text-gray-700 mt-1">{s.label}</div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-500 mt-8">Thank you to our growing global food community.</p>
      </div>
    </section>

    {/* Who it's for */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Who It’s For</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {PlatrrWho.map((who, i) => {
            const Icon = who.icon;
            return (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center hover:shadow-md transition">
                  <IconBadge className="w-12 h-12 mx-auto mb-3">
                    <Icon className="w-6 h-6" />
                  </IconBadge>
                  <div className="font-semibold">{who.label}</div>
                  <div className="text-gray-600 text-sm mt-1">{who.desc}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Try Platrr Today</h2>
          <p className="text-xl mb-8">Be part of the future of AI in food intelligence.</p>
          <a
            href="https://platrr.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-100 transition shadow-lg hover:shadow-xl"
          >
            Upload a Meal Photo
            <ArrowRight className="h-5 w-5" />
          </a>
        </ScrollReveal>
      </div>
    </section>


  </div>
);

export default ProductsPage;
