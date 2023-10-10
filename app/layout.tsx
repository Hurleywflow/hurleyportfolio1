/* eslint-disable react/react-in-jsx-scope */
import Footer from '@/components/footer';
import Header from '@/components/header';
import ParticlesComponent from '@/components/particles';
import ThemeSwitch from '@/components/theme-switch';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Hurley | Personal Portfolio',
  description: 'Hurley is a Junior developer with some years of experience.',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} relative bg-[#f6f2ff] pt-28 text-gray-900 dark:bg-[#08051D] dark:text-yellow-50 dark:text-opacity-90 sm:pt-36`}
      >
        <div className='absolute right-[11rem] top-[-6rem] -z-10 mx-auto h-[31.25rem] w-[31.25rem] rounded-full bg-[#FDDCFE] blur-[10rem] dark:bg-[#A03DC1]/70 sm:w-[68.75rem]'></div>
        <div className='absolute left-[-35rem] top-[-1rem] -z-10 mx-auto h-[31.25rem] w-[50rem] rounded-full bg-[#FDDCFE] blur-[10rem] dark:bg-[#FDDCFE]/40 sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position='top-right' />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <ParticlesComponent />
      </body>
    </html>
  );
}
