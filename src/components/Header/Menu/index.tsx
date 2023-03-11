import Options from "../Options";
import ButtonAction from "../../ButtonAction";
import DarkMode from "../DarkMode";
import { StyledMenu } from "./styles";

const Menu = () => {
    return (
        <StyledMenu>
            <Options />
            <DarkMode />
            <ButtonAction location="HEADER"></ButtonAction>
        </StyledMenu>
    );
};

export default Menu;
