import Image from "next/image";
import Link from "next/link";
import Options from "../Options";
import { IoClose } from "react-icons/io5";
import { StyledContainer, StyledMenuMobile } from "./styles";
import { useGlobalContext } from "../../../../../contexts/GlobalContext";

const MenuMobile = () => {
    const { isClickMobile, setIsClickMobile } = useGlobalContext();
    const handleBackdropClick = (event) => {
        if (event) event.preventDefault();
        if (event.target.id !== "backdrop") return;
        setIsClickMobile(false);
    };
    return (
        <>
            {isClickMobile && (
                <StyledMenuMobile id="backdrop" onClick={handleBackdropClick}>
                    <StyledContainer>
                        <div>
                            <Link href="/">
                                <Image
                                    src="/get_mae.svg"
                                    alt="Get Soluções"
                                    width={125}
                                    height={55}
                                />
                            </Link>
                            <button
                                type="button"
                                aria-label="fechar menu mobile"
                                onClick={() => {
                                    setIsClickMobile(false);
                                }}
                            >
                                <IoClose />
                            </button>
                        </div>
                        <Options />
                    </StyledContainer>
                </StyledMenuMobile>
            )}
        </>
    );
};

export default MenuMobile;
