import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";
import { iLocation } from "../interfaces";
import { api } from "../services/api";
import { useRouter } from "next/router";

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
    location: iLocation;
    loadLocation: (id: string) => Promise<void>;
}

const GlobalContext = createContext({} as iGlobalContext);

function GlobalWrapper({ children }: iGlobalContextProps) {
    const [theme, setTheme] = useState("light");
    const [isClickMobile, setIsClickMobile] = useState(false);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState<iLocation>();
    const router = useRouter();

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

    const loadLocation = async (id: string) => {
        try {
            setLoading(true);
            const response = await api.patch(`locations/${id}/user`);
            setLocation(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            router.replace("/pascoa");
        }
    };

    let sharedState = {
        theme,
        toggleTheme,
        isClickMobile,
        setIsClickMobile,
        loading,
        setLoading,
        location,
        loadLocation,
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
