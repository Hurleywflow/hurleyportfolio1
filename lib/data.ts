/* eslint-disable @typescript-eslint/no-unused-vars */
import p from '@/public/p.jpg';
import p1 from '@/public/p1.jpg';
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
    title: 'Portfolio',
    description:
      'I have created my first portfolio to showcase all the projects I have completed so far. It demonstrates my abilities in working on a variety of web applications, including those with responsive designs and animation styles.',
    tags: ['React', 'Next.js', 'Tailwind'],
    imageUrl: p,
    linkDemo: 'https://portfoliohurley.vercel.app/',
  },
  {
    title: 'HurleyPortfolio',
    description:
      'It is built with Next.js, React, and TypeScript. Reusability is enhanced through custom hooks like useTheme and useSectionInView. The project employs modern web technologies like Next.js, React, TypeScript, and Tailwind CSS. It follows good practices by separating components, pages, and hooks in the project structure. Overall, the codebase is clean and well-structured, making it an impressive showcase of your work as a developer on your personal portfolio website.',
    tags: ['React', 'Next.js', 'Tailwind'],
    imageUrl: p1,
    linkDemo: 'https://hurleyportfolio1.vercel.app/',
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
