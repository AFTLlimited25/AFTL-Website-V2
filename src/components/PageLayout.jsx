"use client";
import { usePathname } from 'next/navigation';
import ThreeBackground from './ThreeBackground';

const PageLayout = ({ children }) => {
  const pathname = usePathname();
  const showBackground = !['/products', '/contact', '/privacy-policy', '/terms-of-service', '/careers', '/help'].includes(pathname);

  return (
    <>
      {showBackground && <ThreeBackground />}
      {children}
    </>
  );
};

export default PageLayout;
