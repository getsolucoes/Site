import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { StyledFloating } from "./styles";

const Floating = () => {
    const { theme } = useGlobalContext();
    return (
        <StyledFloating>
            <button>
                <Link href="/">
                    QUERO CONTRATAR A GET{" "}
                    <Image
                        src={theme === "light" ? "/g_ligth.svg" : "/g_dark.svg"}
                        alt="Get Soluções"
                        width={40}
                        height={40}
                    ></Image>
                </Link>
            </button>
            <Link href="https://wa.me/5588996931410" target="_blank">
                <BsWhatsapp />
            </Link>
        </StyledFloating>
    );
};

export default Floating;
