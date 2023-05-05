import {
    createContext,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
} from "react";
import { iContextProps } from "../interfaces";

interface iMotherContext {
    file: File;
    setFile: Dispatch<SetStateAction<File>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    modal: iModal;
    setModal: Dispatch<SetStateAction<iModal>>;
    isSuccess: boolean;
    setIsSuccess: Dispatch<SetStateAction<boolean>>;
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
            }}
        >
            {children}
        </MotherContext.Provider>
    );
};
