import { StyledModal, StyledTitle } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { FaSadCry } from "react-icons/fa";
import { useRouter } from "next/router";

interface iModalProps {
    name: string;
    isDelete?: boolean;
}

const Modal = ({ name, isDelete }: iModalProps) => {
    const router = useRouter();
    return (
        <StyledModal isDelete={isDelete}>
            <div>
                <StyledTitle style={{ marginBottom: "20px" }}>
                    <h2>{name}</h2>
                    <button
                        onClick={() => {
                            router.replace("/pascoa");
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
                        router.replace("/pascoa");
                    }}
                >
                    Sair
                </button>
            </div>
        </StyledModal>
    );
};

export default Modal;
