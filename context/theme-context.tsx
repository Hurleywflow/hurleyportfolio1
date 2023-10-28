'use client';

import { block } from 'million/react';
// import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

// type Theme = 'light' | 'dark';

// type ThemeContextProviderProps = {
//   children: React.ReactNode;
// };

// type ThemeContextType = {
//   theme: Theme;
//   toggleTheme: () => void;
// };

// const ThemeContext = createContext<ThemeContextType | null>(null);

// export default function ThemeContextProvider({
//   children,
// }: ThemeContextProviderProps) {
//   const [theme, setTheme] = useState<Theme>('dark');

//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setTheme('dark');
//       window.localStorage.setItem('theme', 'dark');
//       document.documentElement.classList.add('dark');
//     } else {
//       setTheme('light');
//       window.localStorage.setItem('theme', 'light');
//       document.documentElement.classList.remove('dark');
//     }
//   };

//   useEffect(() => {
//     const localTheme = window.localStorage.getItem('theme') as Theme | null;

//     if (localTheme) {
//       setTheme(localTheme);

//       if (localTheme === 'dark') {
//         document.documentElement.classList.add('dark');
//       }
//     } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       setTheme('dark');
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   return (
//     <ThemeContext.Provider
//       value={useMemo(
//         () => ({
//           theme,
//           toggleTheme,
//         }),
//         [theme, toggleTheme],
//       )}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);

//   if (context === null) {
//     throw new Error('useTheme must be used within a ThemeContextProvider');
//   }

//   return context;
// }

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const toggleTheme = (
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>,
) => {
  if (theme === 'light') {
    setTheme('dark');
    window.localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
  } else {
    setTheme('light');
    window.localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  }
};

const ThemeContextProviderBlock = block(function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  const memoizedToggleTheme = useCallback(
    () => toggleTheme(theme, setTheme),
    [theme, setTheme],
  );

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: memoizedToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
});
export default ThemeContextProviderBlock;

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
}
