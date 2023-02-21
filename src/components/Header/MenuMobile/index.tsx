import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import Options from "../Options";
import { StyledContainer, StyledMenuMobile } from "./styles";

const MenuMobile = () => {
    const { theme, isClickMobile, setIsClickMobile } = useGlobalContext();
    return (
        <>
            {isClickMobile && (
                <StyledMenuMobile>
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
