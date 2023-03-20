import Image from "next/image";
import Footer from "../../Footer";
import Action from "./Action";
import {
    StyledDepoimentos,
    StyledHead,
    StyledInfo,
    StyledTitle,
} from "./styles";

const ContatoPage = () => {
    return (
        <>
            <div style={{ background: "rgb(9, 16, 19)" }}>
                <StyledHead>
                    <div>
                        <Image
                            src="/get_dark.svg"
                            alt="Get Soluções"
                            width={200}
                            height={80}
                        />
                        <StyledTitle>
                            <h1>
                                Assistência em: Notebook&apos;s, Computadores,
                                PC Gamer, PS2, PS3, PS4
                            </h1>
                            <h2>
                                A melhor e mais completa para o seu equipamento.
                            </h2>
                        </StyledTitle>
                        <Action />
                    </div>
                </StyledHead>
                <StyledInfo>
                    <div>
                        <div style={{ marginTop: "unset" }}>
                            <strong>+500</strong>
                            <span>Reparos Profissionais</span>
                        </div>
                        <div>
                            <strong>+50</strong>
                            <span>Empresas Atendidas</span>
                        </div>
                        <div>
                            <strong>+1000</strong>
                            <span>Serviços</span>
                        </div>
                        <div>
                            <strong>60 dias</strong>
                            <span>de garantia sobre o serviço</span>
                        </div>
                    </div>
                </StyledInfo>
                <StyledDepoimentos>
                    <div></div>
                </StyledDepoimentos>
            </div>
            <Footer />
        </>
    );
};

export default ContatoPage;
