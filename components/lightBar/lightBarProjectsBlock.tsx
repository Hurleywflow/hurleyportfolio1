import ProjectsBlock from '../projects';
import LightBar from './lightBar';

const LightBarProjectsBlock = () => {
  return (
    <LightBar color='0,225,244' colorDark='31,49,64'>
      {/* rgba(0,225,244,0.1) rgb(31,49,64) */}
      {/* This is green color, Completed code below */}
      <div className='flex w-screen items-center justify-center'>
        <ProjectsBlock />
      </div>
    </LightBar>
  );
};
export default LightBarProjectsBlock;

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
