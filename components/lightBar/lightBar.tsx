'use client';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

type FeaturesProps = {
  children: React.ReactNode;
  color?: string;
  colorDark?: string;
};

const LightBar = ({ children, color, colorDark }: FeaturesProps) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className={classNames(
        'after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#DED7FB,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#DED7FB)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[background-position:1%_0%,99%_0%] before:[background-size:50%_100%,50%_100%] before:[mask:radial-gradient(100%_50%_at_center_center,_white,_transparent)] after:pointer-events-none after:absolute after:inset-0 dark:before:bg-[conic-gradient(from_90deg_at_80%_50%,#08051D,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#08051D)] dark:before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)]',
        inView &&
          'is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]',
        !inView && 'before:rotate-180 before:opacity-40',
      )}
      style={
        {
          '--feature-color': color,
          '--feature-color-dark': colorDark,
        } as React.CSSProperties
      }
    >
      <div className='mb-16 mt-[24rem] w-full md:mb-[12.8rem] md:mt-[25.2rem]'>
        {children}
      </div>
    </section>
  );
};
export default LightBar;

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
