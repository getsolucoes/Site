import { StyledModal, StyledTitle } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { FaSadCry } from "react-icons/fa";
import { useRouter } from "next/router";
import { useMotherContext } from "../../../../../contexts";

export const Modal = () => {
    const { modal, setModal, setIsSuccess } = useMotherContext();
    const router = useRouter();
    return (
        <>
            {modal.isView && (
                <StyledModal>
                    <div>
                        <StyledTitle style={{ marginBottom: "20px" }}>
                            <h2>{modal.name}</h2>
                            <button
                                onClick={() => {
                                    setModal({ isView: false });
                                    setIsSuccess(true);
                                    router.replace(
                                        "https://www.instagram.com/getsolucoes/"
                                    );
                                }}
                            >
                                <AiOutlineClose />
                            </button>
                        </StyledTitle>
                        <h3>
                            Não foi dessa vez <FaSadCry />
                        </h3>
                        <button
                            onClick={() => {
                                setModal({ isView: false });
                                setIsSuccess(true);
                                router.replace(
                                    "https://www.instagram.com/getsolucoes/"
                                );
                            }}
                        >
                            Sair
                        </button>
                    </div>
                </StyledModal>
            )}
        </>
    );
};
