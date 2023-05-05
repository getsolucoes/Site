import { zodResolver } from "@hookform/resolvers/zod";
import {
    FormContainer,
    TextFieldElement,
    TextareaAutosizeElement,
    useFormContext,
} from "react-hook-form-mui";
import {
    Button,
    Box,
    Paper,
    Typography,
    ThemeProvider,
    createTheme,
    IconButton,
    InputLabel,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { MotherSchema } from "../../../schemas";
import Header from "./Header";
import Footer from "./Footer";
import { ChangeEvent, useState } from "react";
import { useMotherContext } from "../../../contexts";
import { api } from "../../../services";
import { formatPhone, limitString } from "../../../scripts";
import { useRouter } from "next/router";
import { iUser } from "../../../interfaces";

const theme = createTheme({
    palette: {
        primary: { main: "#A63C76" },
        secondary: { main: "#730202" },
        error: { main: "#D91604" },
        background: { paper: "#F2A7AD" },
    },
    typography: { fontFamily: "Raleway" },
});

const InputFile = () => {
    const { setFile } = useMotherContext();
    const [fileName, setFileName] = useState("Nenhum arquivo escolhido");
    const {
        setValue,
        formState: { errors },
    } = useFormContext();

    let message: string;
    let colorError = "#0009";

    try {
        if (errors.image) {
            colorError = "#D91604";
            message = String(errors.image.message);
        }
    } catch {}

    const verifyFile = (e: ChangeEvent<HTMLInputElement>) => {
        try {
            const image = e.target.files[0];
            const maxSize = 5 * 1024 * 1024;
            if (image.size <= maxSize) {
                setFile(null);
                setFileName("Nenhum arquivo escolhido");
                setValue("image", null);
            }
            setFile(image);
            setFileName(limitString(image.name));
            setValue("image", fileName);
        } catch {
            setFile(null);
            setFileName("Nenhum arquivo escolhido");
            setValue("image", "");
        }
    };

    return (
        <Box position="relative" marginBottom={2}>
            <Box display="flex" alignItems="center" gap={1}>
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                >
                    <input
                        hidden
                        id="image"
                        accept="image/jpeg,
                        image/jpg,
                        image/png,
                        image/webp"
                        type="file"
                        onChange={verifyFile}
                    />
                    <PhotoCamera />
                </IconButton>
                <InputLabel
                    htmlFor="image"
                    sx={{ cursor: "pointer", color: `${colorError}` }}
                >
                    {fileName}
                </InputLabel>
            </Box>
            {message && (
                <Typography
                    position="absolute"
                    left={15}
                    fontSize={12}
                    color="#D91604"
                >
                    {message}
                </Typography>
            )}
        </Box>
    );
};

const MotherPage = () => {
    const router = useRouter();
    const { file, setLoading, setModal, setIsSuccess } = useMotherContext();
    return (
        <div style={{ backgroundColor: "#A63C76" }}>
            <Header />
            <div style={{ paddingTop: " 6.25rem" }}></div>

            <ThemeProvider theme={theme}>
                <Box margin={1} display="flex" justifyContent="center">
                    <Box
                        display="flex"
                        flexDirection="column"
                        maxWidth={600}
                        component={Paper}
                        padding={4}
                        gap={3}
                    >
                        <Typography
                            variant="h5"
                            textAlign="center"
                            color="#A63C76"
                        >
                            Preencha esse formulário para participar da
                            promoção: Mãe, minha melhor inspiração!
                        </Typography>
                        <FormContainer
                            onSuccess={async (data) => {
                                const dataFile = new FormData();
                                dataFile.append("image", file);
                                try {
                                    setLoading(true);
                                    const { data: user } =
                                        await api.post<iUser>("users", data);
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
            </ThemeProvider>

            <Footer />
        </div>
    );
};

export default MotherPage;
