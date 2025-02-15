"use client";

import { createContext, useState, useContext } from "react";

type DarkModeContextType = {
  isDark: boolean;
  toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({
  isDark: false,
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
