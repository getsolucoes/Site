import { StyledModal, StyledTitle } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
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
                            router.replace("/");
                        }}
                    >
                        <AiOutlineClose />
                    </button>
                </StyledTitle>
            </div>
        </StyledModal>
    );
};

export default Modal;
