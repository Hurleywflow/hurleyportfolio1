/* eslint-disable react/react-in-jsx-scope */
import FooterBlock from '@/components/footer';
import Header from '@/components/header';
import { Toaster } from '@/lib/framer';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
// import ThemeSwitchBlock from '@/components/theme-switch';
const ThemeSwitchBlock = dynamic(() => import('@/components/theme-switch'));

// import ActiveSectionContextProviderBlock from '@/context/active-section-context';
const ActiveSectionContextProviderBlock = dynamic(
  () => import('@/context/active-section-context'),
);
// import ThemeContextProviderBlock from '@/context/theme-context';
const ThemeContextProviderBlock = dynamic(
  () => import('@/context/theme-context'),
);

const DynamicParticlesComponentBlock = dynamic(
  () => import('@/components/particles'),
);

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hurley | Personal Portfolio',
  description: 'Hurley is a Junior developer with some years of experience.',
};
export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1'
        />
      </head>
      <body
        className={`${inter.className} relative bg-[#DED7FB] pt-28 text-gray-800 dark:bg-[#08051D] dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <ThemeContextProviderBlock>
          <ActiveSectionContextProviderBlock>
            <div className='absolute right-[11rem] top-[-6rem] -z-10 mx-auto h-[31.25rem] w-[31.25rem] rounded-full bg-[#FDDCFE] blur-[10rem] dark:bg-[#A03DC1]/70 sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem]'></div>
            <div className='absolute left-[-35rem] top-[-1rem] -z-10 mx-auto h-[31.25rem] w-[50rem] rounded-full bg-[#FDDCFE] blur-[10rem] dark:bg-[#FDDCFE]/40 sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>

            <Header />
            <Toaster position='top-right' />
            {children}
            <FooterBlock />
            <ThemeSwitchBlock />
          </ActiveSectionContextProviderBlock>
        </ThemeContextProviderBlock>
        {/* <ParticlesComponentBlock /> */}
        <DynamicParticlesComponentBlock />
      </body>
    </html>
  );
}
