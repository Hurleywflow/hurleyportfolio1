/* eslint-disable react/no-unknown-property */
// import { useInView } from 'framer-motion';
import React from 'react';
// import EnjoyIssueTracking from './lightBar/enjoy-issue-tracking'
// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       // animation delay between each children
//       staggerChildren: 0.1,
//     },
//   },
// };

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeadingBlock = ({ children }: SectionHeadingProps) => {
  // const ref = useRef<HTMLHeadingElement>(null);
  // const isInView = useInView(ref, { margin: '-100px' });
  return (
    <h2 className='mb-8 text-center text-3xl font-medium capitalize text-[#BEB8AE]'>
      {/* <EnjoyIssueTracking /> */}
      {children}
    </h2>
    // <motion.h2
    //   className='mb-8 text-center text-3xl font-medium capitalize text-[#BEB8AE]'
    //   variants={variants}
    //   initial='initial'
    //   // animate='animate'
    //   // whileInView='animate'
    //   ref={ref}
    //   animate={isInView && 'animate'}
    // >
    //   {children}
    // </motion.h2>
    
  );
};

export default SectionHeadingBlock;
