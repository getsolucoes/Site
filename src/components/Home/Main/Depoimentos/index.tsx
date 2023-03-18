import Carousel from "framer-motion-carousel";
import Link from "next/link";
import Card from "./Card";
import {
    StyledContainer,
    StyledDepoimentos,
    StyledTestimonials,
} from "./styles";

const Depoimentos = () => {
    const data = [
        {
            img: "/depoimento.png",
            nome: "Savio Muniz",
            profissao: "Farmacêutico",
            depoimento:
                "Excelente serviço, rápido, eficiente e muito satisfatório, fora o carinho que eles tem tanto pelo cliente quanto pela máquina que estão tratando",
        },
        {
            img: "/depoimento.png",
            nome: "Savio Muniz",
            profissao: "Farmacêutico",
            depoimento:
                "Excelente serviço, rápido, eficiente e muito satisfatório, fora o carinho que eles tem tanto pelo cliente quanto pela máquina que estão tratando",
        },
        {
            img: "/depoimento.png",
            nome: "Savio Muniz",
            profissao: "Farmacêutico",
            depoimento:
                "Excelente serviço, rápido, eficiente e muito satisfatório, fora o carinho que eles tem tanto pelo cliente quanto pela máquina que estão tratando",
        },
        {
            img: "/depoimento.png",
            nome: "Savio Muniz",
            profissao: "Farmacêutico",
            depoimento:
                "Excelente serviço, rápido, eficiente e muito satisfatório, fora o carinho que eles tem tanto pelo cliente quanto pela máquina que estão tratando",
        },
    ];
    return (
        <StyledDepoimentos>
            <StyledContainer>
                <h2>DEPOIMENTOS</h2>
                <Carousel autoPlay={false} interval={0} loop={true}>
                    {data.map((item, index) => (
                        <StyledTestimonials key={index}>
                            <div>
                                <Card
                                    img={item.img}
                                    nome={item.nome}
                                    depoimento={item.depoimento}
                                    profissao={item.profissao}
                                />
                            </div>
                            <div className="responsivo">
                                <Card
                                    img={item.img}
                                    nome={item.nome}
                                    depoimento={item.depoimento}
                                    profissao={item.profissao}
                                />
                            </div>
                            <div className="responsivo">
                                <Card
                                    img={item.img}
                                    nome={item.nome}
                                    depoimento={item.depoimento}
                                    profissao={item.profissao}
                                />
                            </div>
                        </StyledTestimonials>
                    ))}
                </Carousel>
            </StyledContainer>
        </StyledDepoimentos>
    );
};

export default Depoimentos;
