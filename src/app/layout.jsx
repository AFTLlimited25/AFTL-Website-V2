import { Inter } from 'next/font/google';
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/aftl%20logo%20(1).svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#ffffff" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>

      <body className={`${inter.className} bg-base text-primary-text`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll>

            {/* ✅ Navbar visible on every page */}
            <Navbar />

            <PageLayout>
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
              <CookieConsentBanner />
            </PageLayout>

            {/* Google Analytics */}
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z8LF55XR3G" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-Z8LF55XR3G');
              `}
            </Script>

          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

