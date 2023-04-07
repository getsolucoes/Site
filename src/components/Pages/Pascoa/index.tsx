import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "./Modal";
import { StyledContainer, StyledForm, StyledText } from "./styles";
import Header from "./Header";
import Input from "./Input";
import Button from "./Button";
import Footer from "../../Footer";
import { api } from "../../../services/api";
import { iPascoaProps } from "../../../pages/pascoa/[id]";
import formatPhone from "../../../scripts/formatPhone";
import Loading from "./Loading";
import { useGlobalContext } from "../../../contexts/GlobalContext";

const PascoaPage = ({ location }: iPascoaProps) => {
    const { setLoading } = useGlobalContext();
    const router = useRouter();
    const [totalSecond, setTotalSecond] = useState(2 * 60);
    const minute = Math.floor(totalSecond / 60);
    const second = totalSecond % 60;

    useEffect(() => {
        if (totalSecond === 0) {
            return;
        } else {
            setTimeout(() => {
                setTotalSecond(totalSecond - 1);
            }, 1000);
        }
    }, [totalSecond]);

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
            <StyledContainer isHeader>
                <div>
                    <Header />
                </div>
            </StyledContainer>
            <StyledContainer>
                <StyledText>
                    <span>
                        {minute.toString().padStart(2, "0")}:
                        {second.toString().padStart(2, "0")}
                    </span>
                    <p>Preencha antes que o tempo acabe!</p>
                </StyledText>
            </StyledContainer>
            <StyledContainer>
                <StyledForm>
                    <h2>
                        Preencha esse formulário para garantir o seu Ovo de
                        Páscoa!
                    </h2>
                    <form
                        onSubmit={handleSubmit(async (data) => {
                            try {
                                setLoading(true);
                                const user = await api.post(
                                    `users/location/${location.id}`,
                                    data
                                );
                                if (user.data) {
                                    const message = `Encontrei o ${
                                        location.name
                                    }, meu nome é ${
                                        data.fullName
                                    } e meu WhatsApp é ${formatPhone(
                                        data.whatsApp
                                    )}!`;
                                    setLoading(false);
                                    router.replace(
                                        `https://api.whatsapp.com/send/?phone=5588996931410&text=${message}`
                                    );
                                }
                            } catch {
                                setLoading(false);
                                <Modal name="Tempo Esgotado" isDelete />;
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
            <Loading />
            <>{!totalSecond && <Modal name="Tempo Esgotado" isDelete />}</>
        </>
    );
};

export default PascoaPage;
