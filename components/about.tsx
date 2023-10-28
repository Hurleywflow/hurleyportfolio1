/* eslint-disable react/react-in-jsx-scope */
'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { block } from 'million/react';
import { Reveal } from './reveal';
import SectionHeadingBlock from './section-heading';

const AboutBlock = block(function About() {
  const { ref } = useSectionInView('About', 0.3);

  return (
    <motion.section
      ref={ref}
      className=' mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeadingBlock>About me</SectionHeadingBlock>
      <Reveal>
        <p className='mb-3'>
          After graduating with a degree in{' '}
          <span className='font-medium'>Information Technology</span>, I decided
          to pursue my passion for programming. I enrolled in a coding platform
          and learned{' '}
          <span className='font-medium'>full-stack web development</span>.{' '}
          <span className='italic'>My favorite part of programming</span> is the
          problem-solving aspect. I <span className='underline'>love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is <span className='font-medium'>React, Next.js</span>. I am also
          familiar with TypeScript and Prisma. I am always looking to learn new
          technologies. I am currently looking for a{' '}
          <span className='font-medium'>full-time position</span> as a software
          developer.
        </p>
      </Reveal>

      <Reveal>
        <p>
          <span className='font-medium'>
            My passion for pursuing a career in Information Technology was
            inspired by my fascination with{' '}
            <span className='underline'>problem-solving</span> and technology. I
            have always been intrigued by how technology can improve efficiency
            and drive positive change. I am excited to contribute my skills and
            knowledge to the field and make a meaningful impact.
          </span>
        </p>
      </Reveal>
    </motion.section>
  );
});
export default AboutBlock;
