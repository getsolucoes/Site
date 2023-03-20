import Image from "next/image";
import { BiDetail } from "react-icons/bi";
import { TbChecklist } from "react-icons/tb";
import { FaClipboardCheck } from "react-icons/fa";
import { StyledContainer, StyledExpect } from "./styles";

const Expect = () => {
    return (
        <StyledExpect>
            <StyledContainer>
                <h2>O QUE ESPERAR DA GET</h2>
                <ul>
                    <li>
                        <div>
                            <BiDetail />
                            <strong>Diagnóstico Seguro</strong>
                        </div>
                        <p>
                            Nossa equipe coleta seu dispositivo para análise,
                            avaliamos e identificamos a melhor solução através
                            de testes.
                        </p>
                    </li>
                    <li>
                        <div>
                            <TbChecklist />
                            <strong>Análise Precisa</strong>
                        </div>
                        <p>
                            Elaboramos o relatório completo que será encaminhado
                            ao cliente, após aprovação iniciamos o serviço.
                        </p>
                    </li>
                    <li>
                        <div>
                            <FaClipboardCheck />
                            <strong>Solução Eficaz</strong>
                        </div>
                        <p>
                            O serviço no dispositivo é finalizado conforme
                            relatório aprovado. Dispositivo é encaminhado ao
                            cliente.
                        </p>
                    </li>
                    <li>
                        <div>
                            <Image
                                src="/g.svg"
                                alt="Get Soluções"
                                width={50}
                                height={50}
                            />
                            <strong>Garantia GET</strong>
                        </div>
                        <p>
                            Todos os nossos serviços contam com uma garantia
                            exclusiva da GET.
                        </p>
                    </li>
                </ul>
            </StyledContainer>
        </StyledExpect>
    );
};

export default Expect;
