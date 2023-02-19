import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiSun } from "react-icons/hi";
import { FaCloudMoon } from "react-icons/fa";
import {
  StyledContainer,
  StyledDarkMode,
  StyledHeader,
  StyledLogo,
  StyledMenu,
} from "./styles";
import { useGlobalContext } from "../../contexts/GlobalContext";

const Header = () => {
  const { theme, toggleTheme } = useGlobalContext();
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <Link href="/">
            <StyledLogo>
              <Image
                src={theme === "light" ? "/get_ligth.svg" : "/get_dark.svg"}
                alt="Get Soluções"
                fill
              />
            </StyledLogo>
          </Link>
          <nav>
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
          </nav>
        </StyledContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
