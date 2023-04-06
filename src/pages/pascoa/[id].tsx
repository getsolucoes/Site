import axios from "axios";
import moment from "moment";
import { NextSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import { useGlobalContext } from "../../contexts/GlobalContext";
import GlobalStyle from "../../styles/global";
import { lightTheme, darkTheme } from "../../styles/theme";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    StyledContainer,
    StyledForm,
} from "../../components/Pages/Pascoa/styles";
import Image from "next/image";
import Modal from "../../components/Pages/Pascoa/Modal";
import Header from "../../components/Pages/Pascoa/Header";
import Button from "../../components/Pages/Pascoa/Button";
import Input from "../../components/Pages/Pascoa/Input";
import Footer from "../../components/Footer";
import { GetStaticProps } from "next";
import api from "../../services/api";

export interface iPascoaProps {
    location: {
        id: string;
        name: string;
        expiredAt: string;
    };
}

export default function Pascoa({ location }: iPascoaProps) {
    const { theme } = useGlobalContext();
    const router = useRouter();
    const date = moment();
    const expired = moment(location.expiredAt);
    const seconds = expired.diff(date, "second");
    const [totalSecond, setTotalSecond] = useState(seconds);

    useEffect(() => {
        if (totalSecond === 0) {
            return;
        } else {
            setTimeout(() => {
                setTotalSecond(totalSecond - 1);
            }, 1000);
        }
    }, [totalSecond]);

    const minute = Math.floor(totalSecond / 60);
    const second = totalSecond % 60;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(
            yup.object({
                fullName: yup.string().required("Nome completo é obrigatório"),
                whatsApp: yup
                    .string()
                    .matches(/^[0-9]+$/, { message: "Digite apenas números" })
                    .min(10, "Precisa ter no mínimo 10 números")
                    .required("WhatsApp é obrigatório"),
            })
        ),
    });
    return (
        <>
            <NextSeo
                title="Get Soluções - Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4"
                description="Assistência em: Notebook's, Computadores, PC Gamer, PS2, PS3, PS4. A melhor e mais completa para o seu equipamento."
                canonical="https://solucoesget.com/contato"
            />
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyle />
                {expired > date ? (
                    <>
                        <>
                            {totalSecond && (
                                <Modal name="Tempo Esgotado" isDelete />
                            )}
                        </>
                        <>
                            <StyledContainer isHeader>
                                <div>
                                    <Header />
                                </div>
                            </StyledContainer>
                            <StyledContainer>
                                {minute.toString().padStart(2, "0")}:
                                {second.toString().padStart(2, "0")}
                            </StyledContainer>
                            <StyledContainer>
                                <StyledForm>
                                    <h2>
                                        Preencha esse formulário para garantir o
                                        seu Ovo de Páscoa!
                                    </h2>
                                    <form
                                        onSubmit={handleSubmit(async (data) => {
                                            const api = axios.create({
                                                baseURL:
                                                    "http://localhost:4002/",
                                                timeout: 10000,
                                            });
                                            const user = await api.post(
                                                `/users/location/${location.id}`,
                                                data
                                            );
                                            if (user.data) {
                                                const message = `Encontrei o ovo de páscoa da ${location.name}, meu nome é ${data.fullName} e meu WhatsApp é ${data.whatsApp}!`;
                                                router.replace(
                                                    `https://api.whatsapp.com/send/?phone=5588996931410&text=${message}`
                                                );
                                            }
                                        })}
                                    >
                                        <Input
                                            id="fullName"
                                            name="Nome Completo"
                                            placeholder="Digite aqui o seu nome completo"
                                            register={register("fullName")}
                                            errors={errors}
                                        />
                                        <Input
                                            id="whatsApp"
                                            name="WhatsApp"
                                            placeholder="Digite aqui o seu whatsApp"
                                            register={register("whatsApp")}
                                            errors={errors}
                                        />
                                        <Button
                                            name="Enviar"
                                            type="submit"
                                            caseButton="primary"
                                        />
                                    </form>
                                </StyledForm>
                            </StyledContainer>
                            <Footer />
                        </>
                    </>
                ) : (
                    <StyledContainer isBanner>
                        <div>
                            <Image src="/pascoa.jpg" alt="Pascoa Get" fill />
                        </div>
                    </StyledContainer>
                )}
            </ThemeProvider>
        </>
    );
}

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { id: "56bcfb34-5745-41a0-bc70-30fc2f2c1a21" } },
            { params: { id: "1808e503-99af-43e3-b259-2732cefffe0e" } },
        ],
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const id = ctx.params!.id;
    const response = await api.patch(`locations/${id}/user`);
    const location = response.data;
    return { props: { location } };
};
