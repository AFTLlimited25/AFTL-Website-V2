"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('cookieConsent') !== 'true') {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      id="cookieConsentBanner"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#222',
        color: '#eee',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        zIndex: 9999,
      }}
    >
      <div>
        We use cookies to enhance your experience and analyze site traffic. By continuing, you accept our{' '}
        <Link href="/privacy-policy" style={{ color: '#4caf50', textDecoration: 'underline' }}>
          Privacy Policy
        </Link>
        .
      </div>
      <button
        id="acceptCookiesBtn"
        onClick={acceptCookies}
        style={{
          backgroundColor: '#4caf50',
          border: 'none',
          color: 'white',
          padding: '8px 15px',
          cursor: 'pointer',
          borderRadius: '4px',
          fontWeight: 'bold',
        }}
      >
        Accept
      </button>
    </div>
  );
}

export default CookieConsentBanner;
