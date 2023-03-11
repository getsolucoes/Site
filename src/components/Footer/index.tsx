import Image from "next/image";
import Link from "next/link";
import { StyledContainer, StyledFooter } from "./styles";

const Footer = () => {
    return (
        <StyledFooter>
            <StyledContainer>
                <Image
                    className="mobile"
                    src="get_footer.svg"
                    alt="Get Soluções"
                    width={125}
                    height={55}
                />
                <Image
                    className="unset_mobile"
                    src="get_footer.svg"
                    alt="Get Soluções"
                    width={270}
                    height={120}
                />
                <div>
                    <div>
                        <h3>GET na rede</h3>
                        <ul>
                            <li>
                                <Link href="" target="_blank">
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.instagram.com/getsolucoes/"
                                    target="_blank"
                                >
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="" target="_blank">
                                    YouTube
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contato</h3>
                        <ul>
                            <li>
                                Rua João Rodrigues Pinto, 254 - Centro - Santa
                                Quitéria - CE
                            </li>
                            <li>CNPJ 41.515.258/0001-08</li>
                            <li>
                                <Link href="mailto:solucoesget@gmail.com">
                                    solucoesget@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </StyledContainer>
            <div className="footer">
                <p>© 2023 Get Soluções. All rights reserved.</p>
            </div>
        </StyledFooter>
    );
};

export default Footer;
