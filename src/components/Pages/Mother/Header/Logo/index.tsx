import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { StyledLogo } from "./styles";
import { useGlobalContext } from "../../../../../contexts/GlobalContext";

const Logo = () => {
    const { setIsClickMobile } = useGlobalContext();
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
                        src="/get_mae.svg"
                        alt="Get Soluções"
                        width={125}
                        height={55}
                    />
                </Link>
            </div>
        </StyledLogo>
    );
};

export default Logo;
