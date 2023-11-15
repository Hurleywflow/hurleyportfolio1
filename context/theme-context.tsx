'use client';

import { block } from 'million/react';

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

// const toggleTheme = (
//   theme: Theme,
//   setTheme: React.Dispatch<React.SetStateAction<Theme>>,
// ) => {
//   if (theme === 'light') {
//     setTheme('dark');
//     window.localStorage.setItem('theme', 'dark');
//     document.documentElement.classList.add('dark');
//   } else {
//     setTheme('light');
//     window.localStorage.setItem('theme', 'light');
//     document.documentElement.classList.remove('dark');
//   }
// };

// this ToggleTheme more efficiently toggles theme and updates localStorage and classList
const toggleTheme = (
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>,
) => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  window.localStorage.setItem('theme', newTheme);
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
};

const ThemeContextProviderBlock = block(
  ({ children }: ThemeContextProviderProps) => {
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
  },
);
export default ThemeContextProviderBlock;

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
}
