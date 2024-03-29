/* eslint-disable react/react-in-jsx-scope */
'use client';
import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type ProjectProps = (typeof projectsData)[number];

const ProjectBlock = ({
  title,
  description,
  tags,
  imageUrl,
  linkDemo,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className='group relative m-20 flex gap-6 last:mb-0 sm:mb-8'
    >
      {/* <!-- Top Right -->
      <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}
      <div className='absolute -right-2 -top-2 z-50 aspect-square w-24 overflow-hidden rounded-sm'>
        <div className='absolute left-0 top-0 h-2 w-2 bg-amber-500'></div>
        <div className='absolute bottom-0 right-0 h-2 w-2 bg-amber-500'></div>
        <a
          target='_blank'
          href={linkDemo}
          className='absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 bg-amber-300 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-amber-800 shadow-sm hover:bg-yellow-300'
          rel='noreferrer'
        >
          Demo
        </a>
      </div>
      <div className='relative flex  max-w-[52rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[25rem] sm:pr-8 sm:group-even:pl-0'>
        <div className='flex h-full flex-col px-5 pb-7 pt-4  sm:max-w-[55%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[45%] sm:group-even:pr-0 '>
          <h3 className='text-2xl font-semibold text-[#beb8ae]'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
            {description}
          </p>
          <ul className='mt-4 flex flex-wrap gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='rounded-full bg-[#beb8ae]/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-gray-600 dark:text-yellow-50'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt='Project I worked on'
          quality={70}
          className='absolute -right-28 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition
        group-even:-left-28
        group-even:right-[initial]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2 sm:block'
        />
      </div>
    </motion.div>
  );
};

export default ProjectBlock;
