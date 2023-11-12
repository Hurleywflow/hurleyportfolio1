/* eslint-disable react/react-in-jsx-scope */
import AboutBlock from '@/components/about';
import IntroBlock from '@/components/intro';
import LightBarExperienceBlock from '@/components/lightBar/lightBarExperienceBlock';
import LightBarProjectsBlock from '@/components/lightBar/lightBarProjectsBlock';
import { default as LightBarSkillsBlock } from '@/components/lightBar/lightBarSkillsBlock';
import SectionDividerBlock from '@/components/section-divider';
import StarOnEarth from '@/components/starOnEarth/starOnEarth';

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
