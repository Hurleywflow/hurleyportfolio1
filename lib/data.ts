/* eslint-disable @typescript-eslint/no-unused-vars */
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import p from '@/public/p.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated Bachelor of Environmental Technology',
    location: 'Vietnam',
    description:
      'I completed my four-year studies and graduated. I have secured a job as an Engineer - Site Supervisor.',
    // The Icon used in ts file
    icon: React.createElement(LuGraduationCap),
    date: '2009',
  },
  {
    title: 'Engineer - Site Supervisor',
    location: 'Vietnam',
    description:
      'I ensured the site operated safely and efficiently by collaborating with senior management and stakeholders. I used strong leadership, communication, and project management skills to achieve operational excellence. I supervised both materials and employees at the site, and oversaw various activities related to the implementation and completion of the project',
    // The Icon used in ts file
    icon: React.createElement(CgWorkAlt),
    date: '2009 - 2013',
  },
  {
    title: 'Casual Poultry Precess Worker',
    location: 'Australia',
    description:
      'Manage the boning and slicing process of poultry. Administer operating tools and machines to the skin, bone, and slice of poultry. Move carcasses to chillers and freezers.',
    // The Icon used in ts file
    icon: React.createElement(CgWorkAlt),
    date: '2013 - present',
  },
  {
    title: 'Graduated Diploma of Information Technology',
    location: 'Vic, Australia',
    description:
      'I have finished my studies and graduated with practical knowledge in the field of web development.',
    // The Icon used in ts file
    icon: React.createElement(LuGraduationCap),
    date: '2020 - 2021',
  },
  {
    title: 'Jr Fullstack Developer',
    location: 'Vic, Australia',
    description:
      'I am currently working as a freelance Jr full-stack developer. My tech stack includes React, Next.js, JavaScript, TypeScript, Tailwind, Prisma, and MongoDB. I am actively seeking full-time opportunities.',
    // The Icon used in ts file
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
    linkDemo: 'https://www.apple.com/au/',
  },
  {
    title: 'HurleyPortfolioV1',
    description:
      'I have created my first portfolio to showcase all the projects I have completed so far. It demonstrates my abilities in working on a variety of web applications, including those with responsive designs and animation styles.',
    tags: ['React', 'Next.js', 'Tailwind'],
    imageUrl: p,
    linkDemo: 'https://www.apple.com/au/',
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
    linkDemo: 'https://www.apple.com/au/',
  },
] as const;

export const skillsData = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'HTML',
  'CSS',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Git',
  'Express',
  'Framer Motion',
] as const;
