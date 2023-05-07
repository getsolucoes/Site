import { ButtonAction } from "../../ButtonAction";
import { Options } from "../Options";
import { StyledMenu } from "./styles";

export const Menu = () => {
    return (
        <StyledMenu>
            <Options />
            <ButtonAction location="HEADER" />
        </StyledMenu>
    );
};
