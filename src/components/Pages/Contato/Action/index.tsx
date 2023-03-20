import Link from "next/link";
import { StyledAction } from "./styles";

const Action = () => {
    return (
        <StyledAction>
            <button>
                <Link href="https://wa.me/5588996931410" target="_blank">
                    🔥 Garantir minha avaliação
                </Link>
            </button>
            <small>Aproveite, avaliação sem compromisso!</small>
        </StyledAction>
    );
};

export default Action;
