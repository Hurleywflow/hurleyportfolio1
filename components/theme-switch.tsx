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
          ? 'fixed right-5 top-6 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-none border-opacity-40 bg-[#BEB8AE]/90 bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] hover:bg-[#BEB8AE]/20 active:scale-105 dark:bg-[#BEB8AE]/20 dark:hover:bg-[#BEB8AE]/90'
          : 'hidden'
      }
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
