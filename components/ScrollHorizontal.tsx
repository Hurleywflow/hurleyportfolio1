'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

// todo: for scroll progress bar animation at navbar
export default function ScrollHorizontal() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <>
      {/* //todo: motion scrolling bar progress at navbar  */}
      {/* <motion.div
className='fixed h-1 top-20 left-0 right-0 bg-gradient-to-l from-[#bd34fe] to-[#47caff] origin-left z-[100]'
style={{scaleX: scrollYProgress}}
/> */}
      <motion.div
        className='fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-gradient-to-l from-[#bd34fe] to-[#47caff]'
        style={{ width }}
      />
    </>
  );
}
