import React from "react";
import { StyledMenu } from "./styles";
import Options from "../Options";
import ButtonAction from "../../ButtonAction";
import DarkMode from "../DarkMode";

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
