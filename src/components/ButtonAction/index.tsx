import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { iStyledButtonActionProps, StyledButtonAction } from "./styles";

const ButtonAction = ({ location }: iStyledButtonActionProps) => {
    const { theme } = useGlobalContext();
    return (
        <StyledButtonAction location={location}>
            <Link href="/">
                Quero ser cliente GET
                {location == "HERO" ? (
                    <Image
                        src="/g_ligth.svg"
                        alt="Get Soluções"
                        width={40}
                        height={40}
                    ></Image>
                ) : (
                    <Image
                        src={theme === "light" ? "/g_ligth.svg" : "/g_dark.svg"}
                        alt="Get Soluções"
                        width={40}
                        height={40}
                    ></Image>
                )}
            </Link>
        </StyledButtonAction>
    );
};

export default ButtonAction;
