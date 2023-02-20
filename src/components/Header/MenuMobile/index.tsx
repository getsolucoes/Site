import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "../../../contexts/GlobalContext";
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
                        <ul>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsClickMobile(false);
                                    }}
                                >
                                    <Link href="/">Home</Link>
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsClickMobile(false);
                                    }}
                                >
                                    <Link href="/">Sobre</Link>
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsClickMobile(false);
                                    }}
                                >
                                    <Link href="/">Serviços</Link>
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsClickMobile(false);
                                    }}
                                >
                                    <Link href="/">Portfólio</Link>
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsClickMobile(false);
                                    }}
                                >
                                    <Link href="/">Equipe</Link>
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsClickMobile(false);
                                    }}
                                >
                                    <Link href="/">Contato</Link>
                                </button>
                            </li>
                            <li>
                                <button
                                    className="button_menu"
                                    type="button"
                                    onClick={() => {
                                        setIsClickMobile(false);
                                    }}
                                >
                                    <Link href="/">Confira</Link>
                                </button>
                            </li>
                        </ul>
                    </StyledContainer>
                </StyledMenuMobile>
            )}
        </>
    );
};

export default MenuMobile;
