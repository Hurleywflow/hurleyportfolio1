/* eslint-disable react/react-in-jsx-scope */
import AboutBlock from '@/components/about';
import IntroBlock from '@/components/intro';
// import LightBarExperienceBlock from '@/components/lightBar/lightBarExperienceBlock';
import LightBarProjectsBlock from '@/components/lightBar/lightBarProjectsBlock';
import dynamic from 'next/dynamic';
const LightBarExperienceBlock = dynamic(
  () => import('@/components/lightBar/lightBarExperienceBlock'),
);
// import { LightBarSkillsBlock } from '@/components/lightBar/lightBarSkillsBlock';
import SectionDividerBlock from '@/components/section-divider';
import SkillsBlock from '@/components/skills';
import StarOnEarth from '@/components/starOnEarth/starOnEarth';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <IntroBlock />
      <SectionDividerBlock />
      <AboutBlock />
      <LightBarProjectsBlock />
      {/* <LightBarSkillsBlock /> */}
      <SkillsBlock />
      <LightBarExperienceBlock />
      <StarOnEarth />
    </main>
  );
}
