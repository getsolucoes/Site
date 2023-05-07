import {
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
} from "react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { iContextProps, iLogin, iLoginResponse } from "../interfaces";
import { ThemeProvider, createTheme } from "@mui/material";
import { api } from "../services";

interface iMotherContext {
    file: File;
    setFile: Dispatch<SetStateAction<File>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    modal: iModal;
    setModal: Dispatch<SetStateAction<iModal>>;
    isSuccess: boolean;
    setIsSuccess: Dispatch<SetStateAction<boolean>>;
    login: (data: iLogin) => Promise<void>;
}

interface iModal {
    isView: boolean;
    name?: string;
}

const MotherContext = createContext({} as iMotherContext);

export const useMotherContext = () => {
    return useContext(MotherContext);
};

export const MotherProvider = ({ children }: iContextProps) => {
    const [file, setFile] = useState<File>();
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState<iModal>({ isView: false });
    const [isSuccess, setIsSuccess] = useState(false);

    const router = useRouter();

    const login = async (data: iLogin) => {
        try {
            setLoading(true);
            const { data: response } = await api.post<iLoginResponse>(
                "/login",
                data
            );
            const { token } = response;
            setCookie("@TokenGetSolucoes", token);
            router.replace("/mae/dashboard");
        } catch {
        } finally {
            setLoading(false);
        }
    };

    const theme = createTheme({
        palette: {
            primary: { main: "#A63C76" },
            secondary: { main: "#730202" },
            error: { main: "#D91604" },
            background: { paper: "#F2A7AD" },
            success: { main: "#66bb6a" },
        },
        typography: { fontFamily: "Raleway" },
    });

    return (
        <MotherContext.Provider
            value={{
                file,
                loading,
                setFile,
                setLoading,
                modal,
                setModal,
                isSuccess,
                setIsSuccess,
                login,
            }}
        >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </MotherContext.Provider>
    );
};
