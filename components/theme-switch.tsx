'use client';

import { useTheme } from '@/context/theme-context';
import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      // Add or remove shadow class based on scrollY position
      // hidden from top
      if (window.scrollY > 200) {
        setShadow(true);
      } else {
        setShadow(false);
      }
      // hidden from bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);


  return (
    <button
      className={
        !shadow
          ? 'fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950'
          : 'hidden'
      }
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
