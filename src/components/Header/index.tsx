import React from "react";
import { StyledContainer, StyledHeader } from "./styles";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const Header = () => {
    return (
        <>
            <StyledHeader>
                <StyledContainer>
                    <Logo />
                    <MenuMobile />
                    <Menu />
                </StyledContainer>
            </StyledHeader>
        </>
    );
};

export default Header;
