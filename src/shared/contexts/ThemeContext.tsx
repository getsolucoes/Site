import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { iChildren } from "../interfaces";
import { DarkTheme, LightTheme } from "../themes";
import { ThemeProvider } from "@mui/material";

interface iThemeContextProps {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as iThemeContextProps);

export const AppThemeProvider = ({ children }: iChildren) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("dark");

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);
  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppThemeContext = () => useContext(ThemeContext);
