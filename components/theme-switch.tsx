/* eslint-disable react/react-in-jsx-scope */
'use client';

import { useTheme } from '@/context/theme-context';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const ThemeSwitchBlock = () => {
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
  const textVariants = {
    toggleSunMoon: {
      opacity: 0.3,
      transition: {
        delay: 0.3,
        type: 'spring',
        stiffness: 10,
        damping: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <button
      className={
        !shadow
          ? 'fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-none border-opacity-40 bg-[#BEB8AE]/90 bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] hover:bg-[#BEB8AE]/20 active:scale-105 dark:bg-[#BEB8AE]/20 dark:hover:bg-[#BEB8AE]/90 sm:top-[1.6rem]'
          : 'hidden'
      }
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <motion.span variants={textVariants} animate='toggleSunMoon'>
          <BsSun />
        </motion.span>
      ) : (
        <motion.span variants={textVariants} animate='toggleSunMoon'>
          <BsMoon />
        </motion.span>
      )}
    </button>
  );
};
export default ThemeSwitchBlock;
