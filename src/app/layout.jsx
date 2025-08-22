import { Inter }    openGraph: {
    title: 'AFTL – AI Solutions & Tools',
    description: 'AFTL provides AI-powered tools and intelligent automation to grow businesses.',
    url: 'https://aftl.co.uk',
    siteName: 'AFTL',
    images: [
      {
        url: 'https://aftl.co.uk/aftl%20logo%20(1).svg',
        width: 800,
        height: 600,
        alt: 'AFTL Logo – AI Solutions for Business',
      },
    ],ont/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import SmoothScroll from '@/components/SmoothScroll';
import PageLayout from '@/components/PageLayout';
import CookieConsentBanner from '@/components/CookieConsentBanner';
import Footer from '@/components/Footer';
import Script from 'next/script';
import SchemaMarkup from '@/components/SchemaMarkup';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AFTL | Advanced Future Tech Labs – AI Solutions & Tools',
  description: 'AFTL provides AI solutions, AI-powered tools, and intelligent automation to help businesses grow and innovate.',
  openGraph: {
    title: 'AFTL – AI Solutions & Tools',
    description: 'AFTL provides AI-powered tools and intelligent automation to grow businesses.',
    url: 'https://aftl.co.uk',
    siteName: 'AFTL',
    images: [
      {
        url: 'https://aftl.co.uk/aftl%20logo%20(1).svg',
        width: 800,
        height: 600,
        alt: 'AFTL Logo – AI Solutions for Business',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AFTL – AI Solutions & Tools',
    description: 'AFTL provides AI-powered tools and intelligent automation to grow businesses.',
    images: ['https://aftl.co.uk/aftl%20logo%20(1).svg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="Qt1DkSXGqaIM7QNESdld2fTcNevx26Ql88TJ277o5xg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <SchemaMarkup
          schema={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AFTL (Advanced Future Tech Labs)",
            "url": "https://aftl.co.uk",
            "logo": "https://aftl.co.uk/aftl%20logo%20(1).svg",
            "description": "AFTL provides AI solutions, AI-powered tools, and intelligent automation to help businesses grow and innovate.",
            "sameAs": [
              "https://linkedin.com/company/aftl",
              "https://twitter.com/aftl"
            ]
          }}
        />
      </head>
      <body className={`${inter.className} bg-base text-primary-text`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll>
            <PageLayout>
              <Navbar />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
              <CookieConsentBanner />
              <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-Z8LF55XR3G"
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-Z8LF55XR3G');
                `}
              </Script>
            </PageLayout>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
