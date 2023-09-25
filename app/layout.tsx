import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className="relative mx-auto flex flex-row">
          <div className="absolute right-[-15rem] top-[-6rem] -z-10 h-[31.25rem] w-[32.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] md:right-[-7rem] lg:right-[-1rem] xl:right-[5rem] 2xl:right-[11rem]"></div>
          <div className="absolute left-[-15rem] top-[-6rem] -z-10 h-[31.25rem] w-[32.25rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-7rem] lg:left-[-1rem] xl:left-[5rem]  2xl:left-[11rem]"></div>
        </div>

        {children}
      </body>
    </html>
  );
}
