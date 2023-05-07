import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { MenuMobile } from "./MenuMobile";
import { StyledContainer, StyledHeader } from "./styles";

export const Header = () => {
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
