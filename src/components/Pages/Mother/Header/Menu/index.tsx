import ButtonAction from "../../ButtonAction";
import Options from "../Options";
import { StyledMenu } from "./styles";

const Menu = () => {
    return (
        <StyledMenu>
            <Options />
            <ButtonAction location="HEADER" />
        </StyledMenu>
    );
};

export default Menu;
