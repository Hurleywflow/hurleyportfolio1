import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/header';

// Get fonts from Google Fonts
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hurley | Personal Portfolio",
  description:
    "Hurley is a Jr developer with a passion for building things on the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 to-gray-950 `}>
        <div className="relative mx-auto flex items-center justify-center">
          <div className="absolute right-[-15rem] top-[-6rem] -z-10 h-[31.25rem] w-[32.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] md:right-[-11rem] lg:right-[-7rem] xl:right-[-3rem] 2xl:right-[20rem]"></div>
          <div className="absolute left-[-15rem] top-[-6rem] -z-10 h-[31.25rem] w-[32.25rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-11rem] lg:left-[-7rem] xl:left-[-3rem]  2xl:left-[20rem]"></div>
        </div>
        <Header />

        {children}
      </body>
    </html>
  );
}
