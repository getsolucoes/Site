import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import ButtonAction from "../ButtonAction";
import { StyledFloating } from "./styles";

const Floating = () => {
    return (
        <StyledFloating>
            <ButtonAction location="FLOATING" />
            <Link href="https://wa.me/5588996931410" target="_blank">
                <BsWhatsapp />
            </Link>
        </StyledFloating>
    );
};

export default Floating;
