import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const getInitialTheme = () => {
  const prefersMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const storedTheme = localStorage.getItem("theme") === "true";
  return storedTheme || prefersMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme());
  const [searchTerm, setSearchTerm] = useState("cat");
  const handleThemeToggle = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    document.querySelector("body").classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, handleThemeToggle, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
