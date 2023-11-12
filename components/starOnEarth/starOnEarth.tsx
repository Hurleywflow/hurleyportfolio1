import classNames from 'classnames';
import ContactBlock from '../contact';
import { StarsIllustration } from './stars';

function StarOnEarth() {
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <div
        className={classNames(
          'mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden',
          '[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]',
          'after:bg-background after:absolute after:-left-1/2 after:top-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)]',
        )}
      >
        <StarsIllustration />
      </div>
      <ContactBlock />
    </div>
  );
}
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
