import Image from "next/image";
import React from "react";
import { StyledCard, StyledPerfil } from "./styles";

type Props = {
    img: string;
    nome: string;
    profissao: string;
    depoimento: string;
};

const Card = ({ img, nome, profissao, depoimento }: Props) => {
    return (
        <StyledCard>
            <StyledPerfil>
                <Image src={img} alt={nome} width={50} height={50} />
                <div>
                    <h3>{nome}</h3>
                    <span>{profissao}</span>
                </div>
            </StyledPerfil>
            <p>{depoimento}</p>
        </StyledCard>
    );
};

export default Card;
