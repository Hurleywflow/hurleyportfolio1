'use client';
import { motion } from 'framer-motion';
export const MotionDiv = motion.div;
export const MotionH1 = motion.h1;
export const MotionP = motion.p;
export const MotionButton = motion.button;
export const MotionLink = motion.a;
export const MotionImg = motion.img;
export const MotionSvg = motion.svg;
export const MotionPath = motion.path;
export const MotionSpan = motion.span;

import dynamic from 'next/dynamic';
export const Toaster = dynamic(() =>
  import('react-hot-toast').then((module) => module.Toaster),
);
