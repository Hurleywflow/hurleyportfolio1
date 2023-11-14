'use client';

import type { SectionName } from '@/lib/types';
import { block } from 'million/react';
import React, { createContext, useContext, useMemo, useState } from 'react';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProviderBlock = block(({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveSectionContext.Provider
      value={useMemo(
        () => ({
          activeSection,
          setActiveSection,
          timeOfLastClick,
          setTimeOfLastClick,
        }),
        [activeSection, timeOfLastClick, setActiveSection, setTimeOfLastClick],
      )}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
})

export default ActiveSectionContextProviderBlock;
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider',
    );
  }

  return context;
}
