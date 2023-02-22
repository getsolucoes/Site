import React from "react";
import { HiSun } from "react-icons/hi";
import { FaCloudMoon } from "react-icons/fa";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { StyledDarkMode, StyledMenu } from "./styles";
import Options from "../Options";
import ButtonAction from "../../ButtonAction";

const Menu = () => {
    const { theme, toggleTheme } = useGlobalContext();
    return (
        <StyledMenu>
            <Options />
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
            <ButtonAction location="HEADER"></ButtonAction>
        </StyledMenu>
    );
};

export default Menu;
