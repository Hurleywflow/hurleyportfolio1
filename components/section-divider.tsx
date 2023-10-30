'use client';

import { motion } from 'framer-motion';
import { block } from 'million/react';

const SectionDividerBlock = block(function SectionDivider() {
  return (
    <motion.div
      className='my-24 hidden h-36 w-1 animate-bounce rounded-full bg-[#BEB8AE] dark:bg-[#BEB8AE]/60 sm:block'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
});
export default SectionDividerBlock;
