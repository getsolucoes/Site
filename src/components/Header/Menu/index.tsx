import Link from "next/link";
import React from "react";
import { HiSun } from "react-icons/hi";
import { FaCloudMoon } from "react-icons/fa";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { StyledDarkMode, StyledMenu } from "./styles";
import Image from "next/image";

const Menu = () => {
    const { theme, toggleTheme } = useGlobalContext();
    return (
        <StyledMenu>
            <ul>
                <li>
                    <Link href="/">Quem somos</Link>
                </li>
                <li>
                    <Link href="/">Soluções</Link>
                </li>
                <li>
                    <Link href="/">Para empresas</Link>
                </li>
                <li>
                    <Link href="/">Portfólio</Link>
                </li>
                <li>
                    <Link href="/">Dúvidas</Link>
                </li>
                <li>
                    <Link href="/">Blog</Link>
                </li>
                <li>
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
                </li>
            </ul>
            <button className="button_menu">
                <Link href="/">
                    QUERO CONTRATAR A GET{" "}
                    <Image
                        src={theme === "light" ? "/g_ligth.svg" : "/g_dark.svg"}
                        alt="Get Soluções"
                        width={40}
                        height={40}
                    ></Image>
                </Link>
            </button>
        </StyledMenu>
    );
};

export default Menu;
