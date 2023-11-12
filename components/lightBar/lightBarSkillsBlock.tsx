'use client';

import { block } from 'million/react';
import SkillsBlock from '../skills';
import LightBar from './lightBar';

const LightBarSkillsBlock = block(() => {
  return (
    <LightBar color='194,97,254' colorDark='53,42,79'>
      {/* rgba(194,97,254,0.1) rgb(53,42,79) */}
      {/* This is purple color, Completed code below */}
      <div className='flex w-screen items-center justify-center'>
        <SkillsBlock />
      </div>
    </LightBar>
  );
});
export default LightBarSkillsBlock;

// export const BuildMomentum = () => {
//   return (
//     <LightBar color="40,87,255" colorDark="48,58,117">
//       {/* This is blue color, Completed code below */}
//     </LightBar>
//   );
// };
// export default BuildMomentum;

// export const SetDirection = () => {
//   return (
//     <LightBar color="0,225,244" colorDark="31,49,64">
//       {/* This is green color, Completed code below */}
//     </LightBar>
//   );
// };
// export default SetDirection;
