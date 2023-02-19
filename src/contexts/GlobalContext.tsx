import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface iGlobalContextProps {
  children: ReactNode;
}

interface iGlobalContext {
  theme: string;
  toggleTheme: () => void;
}

const GlobalContext = createContext({} as iGlobalContext);

function GlobalWrapper({ children }: iGlobalContextProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("@ThemeGetSoluções", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("@ThemeGetSoluções", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("@ThemeGetSoluções");
    localTheme && setTheme(localTheme);
  }, []);

  let sharedState = {
    theme,
    toggleTheme,
  };

  return (
    <GlobalContext.Provider value={sharedState}>
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(GlobalContext);
}

export { GlobalWrapper, useGlobalContext };
