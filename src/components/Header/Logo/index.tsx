import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCloudMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiSun } from "react-icons/hi";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { StyledDarkMode } from "../Menu/styles";
import { StyledLogo } from "./styles";

const Logo = () => {
    const { theme, toggleTheme, setIsClickMobile } = useGlobalContext();
    return (
        <StyledLogo>
            <div>
                <button
                    type="button"
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
            <button
                type="button"
                onClick={() => {
                    toggleTheme();
                }}
            >
                <StyledDarkMode>
                    {theme === "light" ? (
                        <>
                            <div className="active">
                                <HiSun />
                            </div>
                            <div>
                                <FaCloudMoon />
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <HiSun />
                            </div>
                            <div className="active">
                                <FaCloudMoon />
                            </div>
                        </>
                    )}
                </StyledDarkMode>
            </button>
        </StyledLogo>
    );
};

export default Logo;
