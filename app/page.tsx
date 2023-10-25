/* eslint-disable react/react-in-jsx-scope */
import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

/* eslint-disable react/react-in-jsx-scope */
// 'use client';

// import React, { lazy, Suspense } from 'react';

// const Intro = lazy(() => import('@/components/intro'));
// const About = lazy(() => import('@/components/about'));
// const Contact = lazy(() => import('@/components/contact'));
// const Experience = lazy(() => import('@/components/experience'));
// const Projects = lazy(() => import('@/components/projects'));
// const SectionDivider = lazy(() => import('@/components/section-divider'));
// const Skills = lazy(() => import('@/components/skills'));
// const Particles = lazy(() => import('@/components/particles'));

// const renderLoader = () => <p>Loading</p>;
// interface ErrorBoundaryProps {
//   children: React.ReactNode;
//   hasError: boolean;
// }

// function ErrorBoundary(props: ErrorBoundaryProps) {
//   const [hasError, setHasError] = React.useState(false);

//   React.useEffect(() => {
//     if (hasError) {
//       setHasError(true);
//     }
//   }, [hasError]);

//   if (hasError) {
//     return <p>Loading failed! Please reload.</p>;
//   }

//   return props.children;
// }

// export default function Home() {
//   return (
//     <main className='flex flex-col items-center px-4'>
//       <ErrorBoundary hasError={false}>
//         <Suspense fallback={renderLoader()}>
//           <Intro />
//           <SectionDivider />
//           <About />
//           <Projects />
//           <Skills />
//           <Experience />
//           <Contact />
//           <Particles />
//         </Suspense>
//       </ErrorBoundary>
//     </main>
//   );
// }
