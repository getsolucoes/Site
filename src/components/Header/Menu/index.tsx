import Link from "next/link";
import React from "react";
import { HiSun } from "react-icons/hi";
import { FaCloudMoon } from "react-icons/fa";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { StyledDarkMode, StyledMenu } from "./styles";

const Menu = () => {
    const { theme, toggleTheme } = useGlobalContext();
    return (
        <StyledMenu>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/">Sobre</Link>
            </li>
            <li>
                <Link href="/">Serviços</Link>
            </li>
            <li>
                <Link href="/">Portfólio</Link>
            </li>
            <li>
                <Link href="/">Equipe</Link>
            </li>
            <li>
                <Link href="/">Contato</Link>
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
            <li>
                <button className="button_menu">
                    <Link href="/">Confira</Link>
                </button>
            </li>
        </StyledMenu>
    );
};

export default Menu;
