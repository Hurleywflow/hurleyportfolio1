/* eslint-disable react/react-in-jsx-scope */
'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { links } from '@/lib/data';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { block } from 'million/react';
import Link from 'next/link';
import ScrollHorizontal from './ScrollHorizontal';

const HeaderBlock = block(() => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className='relative z-[999]'>
      <ScrollHorizontal />
      <motion.div
        className='fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-[#BEB8AE]/20 bg-opacity-80 mix-blend-difference shadow-lg shadow-black/[0.03] backdrop-blur-[5px] dark:border-black/40 dark:bg-[#BEB8AE]/50 dark:bg-opacity-75 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>

      <nav className='fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map((link) => (
            <motion.li
              className='relative flex h-3/4 items-center justify-center'
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-600 dark:hover:text-gray-300',
                  {
                    'text-gray-950 dark:text-yellow-50':
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className=' absolute inset-0 -z-10 rounded-full bg-[#BEB8AE]'
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
});
export default HeaderBlock;
