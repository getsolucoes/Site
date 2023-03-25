import Image from "next/image";
import Footer from "../../Footer";
import Action from "./Action";
import {
    StyledDepoimentos,
    StyledHead,
    StyledInfo,
    StyledPerfil,
    StyledTitle,
} from "./styles";
import { AiFillStar } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";
import Link from "next/link";

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
                <StyledInfo>
                    <h1 className="mobile">ALGUMAS EMPRESAS ATENDIDAS</h1>
                    <div>
                        <div style={{ marginTop: "unset" }}>
                            <Image
                                src="/santander.svg"
                                alt="Santander"
                                width={150}
                                height={50}
                            />
                        </div>
                        <div>
                            <Image
                                src="/boticario.svg"
                                alt="Get Soluções"
                                width={150}
                                height={50}
                            />
                        </div>
                        <div>
                            <Image
                                src="/bradesco.svg"
                                alt="Bradesco"
                                width={150}
                                height={50}
                            />
                        </div>
                        <div>
                            <Image
                                src="/loteriascaixa.svg"
                                alt="Loterias Caixa"
                                width={150}
                                height={50}
                            />
                        </div>
                        <div>
                            <Image
                                src="/bancodonordeste.svg"
                                alt="Banco do Nordeste"
                                width={150}
                                height={50}
                            />
                        </div>
                    </div>
                    <h1 className="pc">ALGUMAS EMPRESAS ATENDIDAS</h1>
                </StyledInfo>
                <StyledDepoimentos>
                    <div>
                        <div>
                            <h2>o que os clientes estão dizendo</h2>
                            <div>
                                <span
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 600,
                                    }}
                                >
                                    Nota 5/5 no Google
                                </span>
                                <div className="stars">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                            </div>
                        </div>
                        <div className="depoimentos">
                            <div>
                                <p>
                                    Excelente serviço, rápido, eficiente e muito
                                    satisfatório, fora o carinho que eles tem
                                    tanto pelo cliente quanto pela máquina que
                                    estão tratando
                                </p>
                                <StyledPerfil>
                                    <Image
                                        src="/savio.png"
                                        alt="Savio Muniz"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <h3>Savio Muniz</h3>
                                        <span>Farmacêutico</span>
                                    </div>
                                </StyledPerfil>
                            </div>
                            <div>
                                <p>
                                    Ótimos serviços! Sempre com diagnósticos
                                    certos e preços justos 👏🏻👏🏻👏🏻
                                </p>
                                <StyledPerfil>
                                    <Image
                                        src="/renan.png"
                                        alt="Renan Benevides"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <h3>Renan Benevides</h3>
                                        <span>Dentista</span>
                                    </div>
                                </StyledPerfil>
                            </div>
                            <div>
                                <p>
                                    A equipe da Get está sempre preparada os
                                    mais diversos problemas e soluções em
                                    tecnologia do mercado. Recomendo à todos.
                                </p>
                                <StyledPerfil>
                                    <Image
                                        src="/miguel.png"
                                        alt="Miguel Angelo"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <h3>Miguel Angelo</h3>
                                        <span>Profissional de tecnologia</span>
                                    </div>
                                </StyledPerfil>
                            </div>
                            <div>
                                <p>
                                    Realizou um bom trabalho e é um profissional
                                    muito atencioso, recomendo.
                                </p>
                                <StyledPerfil>
                                    <Image
                                        src="/fernanda.png"
                                        alt="Fernanda Aragão"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <h3>Fernanda Aragão</h3>
                                        <span>Advogada</span>
                                    </div>
                                </StyledPerfil>
                            </div>
                            <div>
                                <p>
                                    Serviços e produtos de alta qualidade e
                                    entregue com maior rapidez. Parabéns!
                                </p>
                                <StyledPerfil>
                                    <Image
                                        src="/davi.png"
                                        alt="Davi Abreu"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <h3>Davi Abreu</h3>
                                        <span>Estudante</span>
                                    </div>
                                </StyledPerfil>
                            </div>
                            <Link
                                href="https://goo.gl/maps/JodZUQEmEE1Ed4tR7"
                                target="_blank"
                            >
                                <CgAdd style={{ fontSize: 25 }} /> Ver mais
                            </Link>
                        </div>
                    </div>
                </StyledDepoimentos>
                <StyledInfo>
                    <div>
                        <Image
                            src="/get_dark.svg"
                            alt="Get Soluções"
                            width={200}
                            height={80}
                        />
                        <StyledTitle>
                            <h1>Seja você também um cliente GET!</h1>
                        </StyledTitle>
                        <Action />
                    </div>
                </StyledInfo>
            </div>
            <Footer />
        </>
    );
};

export default ContatoPage;
