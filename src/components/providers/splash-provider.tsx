'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from '@/components/layout/SplashScreen';

export default function SplashProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you might be loading data here.
    // For this demo, we'll just use a timeout.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Splash screen will be visible for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <SplashScreen />}</AnimatePresence>
      {!isLoading && <div className="fade-in">{children}</div>}
    </>
  );
}
