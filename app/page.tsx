/* eslint-disable react/react-in-jsx-scope */
import AboutBlock from '@/components/about';
import ContactBlock from '@/components/contact';
import ExperienceBlock from '@/components/experience';
import IntroBlock from '@/components/intro';
import ProjectsBlock from '@/components/projects';
import SectionDividerBlock from '@/components/section-divider';
import SkillsBlock from '@/components/skills';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <IntroBlock />
      <SectionDividerBlock />
      <AboutBlock />
      <ProjectsBlock />
      <SkillsBlock />
      <ExperienceBlock />
      <ContactBlock />
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
