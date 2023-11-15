import { MotionDiv } from '@/lib/framer';
import classNames from 'classnames';
import { block } from 'million/react';
import ContactBlock from '../contact';
import { StarsIllustration } from './stars';

const StarOnEarth = block(function () {
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <MotionDiv
        variants={{
          hidden: { opacity: 0.1, y: -300 },
        }}
        initial='hidden'
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        // use this delay when use with thingy to reveal
        transition={{ duration: 3, delay: 0.5 }}
        className={classNames(
          'mask-radial-faded pointer-events-none relative z-[-1] my-[-45rem] h-[100rem] w-full overflow-hidden dark:my-[-40rem]',
          '[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]',
          'after after:absolute after:-left-1/2 after:top-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[#FBF4E2] after:bg-[#F7E3EE]  dark:after:border-[rgba(120,_119,_198,_0.4)] dark:after:bg-background',
        )}
      >
        <StarsIllustration />
      </MotionDiv>
      <ContactBlock />
    </div>
  );
});

export default StarOnEarth;

// tailwind.config.js
//    colors: {
//         transparent: 'transparent',
//         'off-white': '#f7f8f8',
//         'transparent-white': 'rgba(255, 255, 255, 0.08)',
//         background: '#000212',
//         'grey-dark': '#222326',
//       },
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//         'gradient-conic-lightbar':
//           'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
//         'radial-faded':
//           'radial-gradient(circle at bottom center,var(--color),transparent 70%)',
//       },

// global css
//       @layer utilities {
//   .text-shadow {
//     text-shadow: rgb(0 0 0 / 56%) 0px 3px 12px;
//   }

//   .text-gradient {
//     background: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));
//     background-clip: text;
//     color: transparent;
//   }

//   .mask-radial-faded {
//     mask-image: radial-gradient(circle at center center, black, transparent 80%)
//   }

//   .mask-linear-faded {
//     mask-image: linear-gradient(black, transparent 70%)
//   }

//   .mask-keyboard {
//     mask-image: linear-gradient(transparent 0%, rgba(0, 0, 0, 0.57) 33.98%, black 100%);
//   }

//   .mask-shortcutkeys {
//     mask-image: linear-gradient(to right, transparent, black 40%, black calc(60%), transparent 100%);
//   }
// }
