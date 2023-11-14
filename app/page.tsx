/* eslint-disable react/react-in-jsx-scope */
import dynamic from 'next/dynamic';
// import AboutBlock from '@/components/about';
const AboutBlock = dynamic(() => import('@/components/about'));

// import IntroBlock from '@/components/intro';
const IntroBlock = dynamic(() => import('@/components/intro'));
// import LightBarExperienceBlock from '@/components/lightBar/lightBarExperienceBlock';
const LightBarExperienceBlock = dynamic(
  () => import('@/components/lightBar/lightBarExperienceBlock'),
);
// import LightBarProjectsBlock from '@/components/lightBar/lightBarProjectsBlock';
const LightBarProjectsBlock = dynamic(
  () => import('@/components/lightBar/lightBarProjectsBlock'),
);
// import { default as LightBarSkillsBlock } from '@/components/lightBar/lightBarSkillsBlock';
const LightBarSkillsBlock = dynamic(
  () => import('@/components/lightBar/lightBarSkillsBlock'),
);
// import SectionDividerBlock from '@/components/section-divider';
const SectionDividerBlock = dynamic(
  () => import('@/components/section-divider'),
);
// import StarOnEarth from '@/components/starOnEarth/starOnEarth';
const StarOnEarth = dynamic(
  () => import('@/components/starOnEarth/starOnEarth'),
);


export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <IntroBlock />
      <SectionDividerBlock />
      <AboutBlock />
      <LightBarProjectsBlock />
      <LightBarSkillsBlock />
      <LightBarExperienceBlock />
      <StarOnEarth />
    </main>
  );
}
