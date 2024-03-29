import Image from "next/image";
import Link from "next/link";
import Options from "../Options";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { StyledContainer, StyledMenuMobile } from "./styles";

const MenuMobile = () => {
    const { theme, isClickMobile, setIsClickMobile } = useGlobalContext();
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
                                    src={
                                        theme === "light"
                                            ? "/get_ligth.svg"
                                            : "/get_dark.svg"
                                    }
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
