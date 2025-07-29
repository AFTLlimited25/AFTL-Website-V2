"use client";
import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Link from 'next/link';
import TypingAnimation from '@/components/TypingAnimation';
import FeatureSection from '@/components/FeatureSection';
import SyncedAnimation from '@/components/SyncedAnimation';
import Timeline from '@/components/Timeline';
import SchemaMarkup from '@/components/SchemaMarkup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function ProductsPage() {
  return (
    <AnimateOnScroll staggered={true}>
      <div className="min-h-screen bg-base">
        {/* Hero Section */}
        <div className="container mx-auto px-4 min-h-screen flex items-center">
          <div className="w-1/2">
            <img src="/platrrsvg.svg" alt="Platrr Logo" className="w-full h-auto" />
          </div>
          <div className="w-1/2 pl-8 pr-8">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
              <span className="text-aftl-heading">"Meet Platrr"</span>
            </h1>
            <TypingAnimation text="The World’s First AI Food Recognition Platform." />
          </div>
        </div>

        {/* How It Works Section */}
        <div className="py-16 bg-light-mist">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-aftl-heading mb-12">
              How Platrr Works
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">1. Upload Photo</h3>
                <p className="text-aftl-subtext">Start by uploading a photo of any meal.</p>
              </div>
              <div>
                <img src="/Platrrimageupload.jpg" alt="Platrr Demo" className="rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <img src="/Platrringredients.jpg" alt="Platrr Ingredients" className="rounded-lg shadow-lg" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">2. Detect Ingredients via AI</h3>
                <p className="text-aftl-subtext">Our AI analyzes the photo to identify ingredients.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">3. Recipe & Nutrition Generated</h3>
                <p className="text-aftl-subtext">Get a full recipe and nutritional breakdown.</p>
              </div>
              <div>
                <img src="/Platrrnutrion.jpg" alt="Platrr Nutrition" className="rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img src="/Platrrresipesuggestion.jpg" alt="Platrr Recipe Suggestion" className="rounded-lg shadow-lg" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">4. Smart Suggestions & Tags</h3>
                <p className="text-aftl-subtext">Receive smart suggestions and dietary tags.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-aftl-heading mb-12">
              Key Features
            </h2>
          </div>
          <FeatureSection
            title="AI Ingredient Detection"
            description="No more second-guessing what’s on your plate. With just one photo, Platrr uses advanced computer vision to detect and list ingredients with incredible accuracy — making it easier than ever to understand your meals at a glance."
            lottieSrc="https://lottie.host/e8dd46f8-c0de-420f-91aa-d25e02cc852f/XTWEXKtWpI.lottie"
            imageAlt="AI Ingredient Detection"
          />
          <FeatureSection
            title="Recipe Generation"
            description="Snap a meal, get a recipe. Platrr instantly turns any food photo into a personalized recipe with clear, step-by-step cooking instructions — perfect for home chefs or curious foodies looking to recreate dishes."
            lottieSrc="https://lottie.host/db946a76-d86a-4563-9729-bb0816edb3a5/B33vwSO6BS.lottie"
            imageAlt="Recipe Generation"
          />
          <FeatureSection
            title="Smart Nutrition & Dietary Insights"
            description="Want to eat smarter? Platrr provides a full nutritional breakdown — calories, macros, and more — for every dish it analyzes. Plus, it highlights dietary labels like Vegan, Keto, or Gluten-Free to fit your lifestyle needs and preferences."
            lottieSrc="https://lottie.host/778aa0e8-d450-4a32-9245-373ebce0a969/42qjUP7IPh.lottie"
            imageAlt="Nutrition Breakdown"
          />
          <FeatureSection
            title="Multi-language Support"
            description="Platrr speaks your language — literally. Our AI supports multiple languages, making food recognition, ingredient lists, and recipes accessible and clear for users across the globe."
            lottieSrc="https://lottie.host/31b8d19b-b543-4798-8b5f-391fdd322f25/cM8EyvGW8e.lottie"
            imageAlt="Multi-language Support"
          />
          <FeatureSection
            title="Mobile Responsive Design"
            description="Whether you’re using a phone in the kitchen, a tablet at the store, or a desktop at work — Platrr delivers a seamless experience across all devices with fast loading, intuitive design, and full responsiveness."
            lottieSrc="https://lottie.host/cd452bd8-8302-43c8-8155-7219658c1083/md3sPV5ywm.lottie"
            imageAlt="Mobile Responsive"
          />
        </div>

        {/* Screenshots / Demo Section */}
        <div className="py-16 bg-light-mist">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-aftl-heading mb-12">
              See Platrr in Action
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <video src="/Platrr Prototype video - Made with Clipchamp (1).mp4" autoPlay muted loop className="rounded-lg shadow-lg"></video>
              </div>
              <div className="text-left">
                <SyncedAnimation captions={["AI detects ingredients...", "Recipe is generated in seconds...", "Nutritional breakdown ready!"]} />
              </div>
            </div>
            <p className="mt-8 text-lg text-aftl-subtext">This is how Platrr transforms any food image into a full recipe with nutrition facts.</p>
          </div>
        </div>

        {/* Product Stage Section */}
        <Timeline />

        {/* Who It's For Section */}
        <div className="py-16 bg-light-mist">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-center text-3xl font-bold mb-4">Who It’s For</h2>
            <p className="text-center text-lg text-gray-600 mb-10">From the home kitchen to the fitness studio — Platrr empowers every food lover.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">🍳</div>
                <h3 className="text-xl font-bold mb-2">Home Cooks</h3>
                <p className="text-aftl-subtext">"Turn your kitchen into a smart assistant — recipe ideas in seconds."</p>
              </div>
              <div className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">🏋️</div>
                <h3 className="text-xl font-bold mb-2">Fitness Enthusiasts</h3>
                <p className="text-aftl-subtext">"Track macros, stay on diet, and get meal inspiration instantly."</p>
              </div>
              <div className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-bold mb-2">Food Bloggers</h3>
                <p className="text-aftl-subtext">"Add AI magic to your content — identify ingredients from your clicks."</p>
              </div>
              <div className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">🥗</div>
                <h3 className="text-xl font-bold mb-2">Health-Conscious</h3>
                <p className="text-aftl-subtext">"Eat smart — break down nutrition from a single photo."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Info Section */}
        <div className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Built by a Passionate Team</h2>
            <p className="text-lg text-gray-600 mb-10">AI engineers, designers, and food lovers — building smarter food tools for a healthier world.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="text-6xl text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">Abhishek Mallapareddy</h3>
                <p className="text-aftl-subtext">AI Lead</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <Link href="https://github.com/Abhishek051294" className="text-aftl-heading hover:text-aftl-body"><svg className="w-6 h-6" fill="#000000" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.022.799-.222 1.659-.333 2.518-.333.859 0 1.719.111 2.518.333 1.91-1.292 2.75-1.022 2.75-1.022.544 1.378.201 2.397.098 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852v2.742c0 .268.18.58.688.482C19.135 20.166 22 16.418 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"/></svg></Link>
                  <Link href="https://www.linkedin.com/in/abhishek-mallapareddy" className="text-aftl-heading hover:text-aftl-body"><svg className="w-6 h-6" fill="#0A66C2" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"/></svg></Link>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="text-6xl text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">Shubham Tiwari</h3>
                <p className="text-aftl-subtext">Product Strategist</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <Link href="https://www.linkedin.com/in/theshubhamtiwari" className="text-aftl-heading hover:text-aftl-body"><svg className="w-6 h-6" fill="#0A66C2" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"/></svg></Link>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="text-6xl text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">B Chandrashekhar</h3>
                <p className="text-aftl-subtext">AI/ML Engineer</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <Link href="https://www.linkedin.com/in/shekhar01" className="text-aftl-heading hover:text-aftl-body"><svg className="w-6 h-6" fill="#0A66C2" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"/></svg></Link>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="text-6xl text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">Roshan Panda</h3>
                <p className="text-aftl-subtext">Full Stack Developer</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <Link href="https://www.linkedin.com/in/roshan-developer" className="text-aftl-heading hover:text-aftl-body"><svg className="w-6 h-6" fill="#0A66C2" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"/></svg></Link>
                </div>
              </div>
            </div>
            <p className="text-lg text-aftl-subtext mt-8 span-1 ">We believe food + AI = a smarter future.</p>
            <SchemaMarkup schema={{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Platrr",
              "url": "https://your-platrr-website.com",
              "sameAs": [],
              "employee": [
                {
                  "@type": "Person",
                  "name": "Abhishek Mallapareddy",
                  "jobTitle": "AI Lead",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Platrr"
                  }
                },
                {
                  "@type": "Person",
                  "name": "B Chandrashekhar",
                  "jobTitle": "Backend Engineer",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Platrr"
                  }
                },
                {
                  "@type": "Person",
                  "name": "Roshan Panda",
                  "jobTitle": "Frontend Engineer",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Platrr"
                  }
                }
              ]
            }} />
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-light-mist">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-aftl-heading mb-12">
              Try Platrr Today
            </h2>
            <p className="text-lg md:text-xl text-aftl-body mt-4 max-w-3xl mx-auto">
              Be part of the future of AI in food intelligence.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a href="https://platrr.co.uk" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Upload a Meal Photo
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

export default ProductsPage;
