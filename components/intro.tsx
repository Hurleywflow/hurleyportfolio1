/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
import avatarImg from '@/public/IMG_5503.jpg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

import { AnimatedText } from './animatedText';

const IntroBlock = () => {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
          // initial={{ opacity: 0, scale: 0 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{
          //   type: 'tween',
          //   duration: 0.2,
          // }}
          >
            <div className='mask-avatar-faded-light  relative flex h-36 w-36 items-center justify-center rounded-full'>
              <div className='absolute left-6 top-6  h-24 w-24 rounded-full'>
                <Image
                  src={avatarImg}
                  alt='Hurley portrait'
                  width='192'
                  height='192'
                  quality='50'
                  priority={true}
                  className=' h-full w-full rounded-full border-none object-cover mix-blend-normal shadow-2xl backdrop-blur-3xl'
                />
              </div>
            </div>
          </motion.div>

          <motion.span
            className='absolute bottom-4 right-4 text-4xl'
            // initial={{ opacity: 0, scale: 0 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //   type: 'spring',
            //   stiffness: 125,
            //   delay: 0.1,
            //   duration: 0.7,
            // }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-3xl font-medium !leading-[1.5] md:text-5xl'
        // initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1, y: 0 }}
      >
        <span className='text-gradient-siri font-semibold'>
          Hello, I'm Hurley.
        </span>{' '}
        I'm a <span className='font-bold'>Jr developer</span> with{' '}
        <span className='font-semibold'>some years</span> of experience. I enjoy
        building <span className='italic'>sites & apps</span>. My focus is{' '}
        <AnimatedText
          el='span'
          text={['React (Next.js)']}
          className='text-[#BEB8AE]'
          repeatDelay={5000}
        />
      </motion.h1>

      <motion.div
        className='flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row'
        // initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{
        //   delay: 0.1,
        // }}
      >
        <Link
          href='#contact'
          className='group flex items-center gap-4 rounded-full bg-black px-7 py-3 text-[#BEB8AE] outline-none transition hover:scale-110 hover:bg-[#BEB8AE] hover:text-gray-900 focus:scale-110 active:scale-105 dark:bg-[#BEB8AE]/50 dark:hover:bg-gray-500'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className='group-hover:translate-x-1-x-1 opacity-90 transition' />
        </Link>

        <a
          className='borderBlack group flex cursor-pointer items-center gap-4 rounded-full bg-gray-100 px-7 py-3 outline-none transition hover:scale-110 hover:bg-[#BEB8AE]/50 hover:text-gray-50 focus:scale-110 active:scale-105 dark:bg-[#BEB8AE]/20'
          href='/Hurley_Nguyen_Resume.pdf'
          download
        >
          Download CV{' '}
          <HiDownload className='opacity-60 transition group-hover:translate-y-1' />
        </a>

        <a
          className='borderBlack flex cursor-pointer items-center gap-4 rounded-full bg-[#BEB8AE]/10 p-4 text-gray-700 transition hover:scale-[1.15] hover:bg-[#BEB8AE]/50 hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-[#BEB8AE]/20 dark:text-white/60'
          href='https://www.linkedin.com/in/hurley-nguyen-477346228/'
          target='_blank'
          rel='noreferrer'
          aria-label='Read more about personal profile on LinkedIn'
        >
          <BsLinkedin />
        </a>

        <a
          className='borderBlack flex cursor-pointer items-center gap-4 rounded-full bg-[#BEB8AE]/10 p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:bg-[#BEB8AE]/50 hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-[#BEB8AE]/20 dark:text-white/60'
          href='https://github.com/Hurleywflow'
          target='_blank'
          rel='noreferrer'
          aria-label='Read more about repo on GitHub'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};
export default IntroBlock;
