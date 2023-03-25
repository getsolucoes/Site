import { useRouter } from "next/router";
import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";
import { FieldValues } from "react-hook-form/dist/types";
import { iLogin, postLogin } from "../services/apiLogin";

interface iGlobalContextProps {
    children: ReactNode;
}

interface iGlobalContext {
    theme: string;
    toggleTheme: () => void;
    isClickMobile: boolean;
    setIsClickMobile: Dispatch<SetStateAction<boolean>>;
    login: (data: FieldValues) => Promise<void>;
}

const GlobalContext = createContext({} as iGlobalContext);

function GlobalWrapper({ children }: iGlobalContextProps) {
    const router = useRouter();
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

    const login = async (data: FieldValues) => {
        try {
            const { access }: iLogin = await postLogin(data);
            localStorage.setItem("@TokenGetSoluções", access);
            router.replace("/");
        } catch (error) {
            console.error(error);
        } finally {
        }
    };

    let sharedState = {
        theme,
        toggleTheme,
        isClickMobile,
        setIsClickMobile,
        login,
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
