import { zodResolver } from "@hookform/resolvers/zod";
import {
    FormContainer,
    TextFieldElement,
    TextareaAutosizeElement,
} from "react-hook-form-mui";
import { Button, Box, Paper, Typography } from "@mui/material";
import { MotherSchema } from "../../../../../schemas";
import { api } from "../../../../../services";
import { formatPhone } from "../../../../../scripts";
import { useRouter } from "next/router";
import { iUser } from "../../../../../interfaces";
import { Footer, Header, InputFile } from "../../components";
import { useMotherContext } from "../../../../../contexts";

export const MotherPage = () => {
    const router = useRouter();
    const { file, setLoading, setModal, setIsSuccess } = useMotherContext();
    return (
        <div style={{ backgroundColor: "#A63C76" }}>
            <Header />
            <div style={{ paddingTop: " 6.25rem" }}></div>
            <Box margin={1} display="flex" justifyContent="center">
                <Box
                    display="flex"
                    flexDirection="column"
                    maxWidth={600}
                    component={Paper}
                    padding={4}
                    gap={3}
                >
                    <Typography variant="h5" textAlign="center" color="#A63C76">
                        Preencha esse formulário para participar da promoção:
                        Mãe, minha melhor inspiração!
                    </Typography>
                    <FormContainer
                        onSuccess={async (data) => {
                            const dataFile = new FormData();
                            dataFile.append("image", file);
                            try {
                                setLoading(true);
                                const { data: user } = await api.post<iUser>(
                                    "users",
                                    data
                                );
                                if (user) {
                                    const message = `Enviei minha foto para a promoção, meu nome é ${
                                        user.fullName
                                    } e meu WhatsApp é ${formatPhone(
                                        user.whatsApp
                                    )}!`;

                                    await api.post(
                                        `images/${user.id}`,
                                        dataFile
                                    );
                                    setLoading(false);
                                    setIsSuccess(true);
                                    router.replace(
                                        `https://api.whatsapp.com/send/?phone=5588996931410&text=${message}`
                                    );
                                }
                            } catch {
                                setLoading(false);
                                setIsSuccess(false);
                                setModal({
                                    isView: true,
                                    name: "Algo deu errado",
                                });
                            }
                        }}
                        resolver={zodResolver(MotherSchema)}
                    >
                        <Box display="flex" flexDirection="column" gap={3}>
                            <TextFieldElement
                                name="fullName"
                                label="Nome Completo"
                                placeholder="Digite aqui o seu nome completo"
                                required
                            />
                            <TextFieldElement
                                name="whatsApp"
                                label="WhatsApp"
                                placeholder="Digite aqui o seu whatsApp"
                                required
                            />
                            <InputFile />
                            <TextareaAutosizeElement
                                name="history"
                                label="História da Foto"
                                placeholder="Digite aqui a história da sua foto"
                                rows={5}
                            />
                            <Button type="submit" variant="contained">
                                Enviar
                            </Button>
                        </Box>
                    </FormContainer>
                </Box>
            </Box>
            <Footer />
        </div>
    );
};
