import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";

interface iGlobalContextProps {
    children: ReactNode;
}

interface iGlobalContext {
    theme: string;
    toggleTheme: () => void;
    isClickMobile: boolean;
    setIsClickMobile: Dispatch<SetStateAction<boolean>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext({} as iGlobalContext);

function GlobalWrapper({ children }: iGlobalContextProps) {
    const [theme, setTheme] = useState("light");
    const [isClickMobile, setIsClickMobile] = useState(false);
    const [loading, setLoading] = useState(false);

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
        loading,
        setLoading,
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
