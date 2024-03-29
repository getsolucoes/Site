import Image from "next/image";
import Link from "next/link";
import DarkMode from "../DarkMode";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { StyledLogo } from "./styles";

const Logo = () => {
    const { theme, setIsClickMobile } = useGlobalContext();
    return (
        <StyledLogo>
            <div>
                <button
                    type="button"
                    aria-label="abrir menu mobile"
                    onClick={() => {
                        setIsClickMobile(true);
                    }}
                >
                    <GiHamburgerMenu />
                </button>
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
            </div>
            <DarkMode />
        </StyledLogo>
    );
};

export default Logo;
