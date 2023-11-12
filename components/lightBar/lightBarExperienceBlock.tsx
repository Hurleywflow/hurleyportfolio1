'use client';

import { block } from 'million/react';
import LightBar from './lightBar';
import ExperienceBlock from '../experience';

const LightBarExperienceBlock = block(() => {
  return (
    <LightBar color='40,87,255' colorDark='48,58,117'>
      {/* rgba(40,87,255,0.1) rgb(48,58,117) */}
      {/* This is blue color, Completed code below */}
      <div className='flex w-screen items-center justify-center'>
        <ExperienceBlock />
      </div>
    </LightBar>
  );
});
export default LightBarExperienceBlock;

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
