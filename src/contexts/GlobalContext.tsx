import {
    createContext,
    useContext,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";
import { iContextProps } from "../interfaces";
import { darkTheme, lightTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

interface iGlobalContext {
    theme: string;
    toggleTheme: () => void;
    isClickMobile: boolean;
    setIsClickMobile: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext({} as iGlobalContext);

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }: iContextProps) => {
    const [theme, setTheme] = useState("light");
    const [isClickMobile, setIsClickMobile] = useState(false);

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
        isClickMobile,
        setIsClickMobile,
    };

    return (
        <GlobalContext.Provider value={sharedState}>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                {children}
            </ThemeProvider>
        </GlobalContext.Provider>
    );
};
