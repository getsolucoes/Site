import Logo from "./Logo";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { StyledContainer, StyledHeader } from "./styles";

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
