import { Box, Button, Paper } from "@mui/material";
import { useMotherContext } from "../../../../../contexts";
import { Footer, Header } from "../../components";
import {
    FormContainer,
    PasswordElement,
    TextFieldElement,
} from "react-hook-form-mui";
import { LoginSchema } from "../../../../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginPage = () => {
    const { login } = useMotherContext();

    return (
        <div style={{ backgroundColor: "#A63C76" }}>
            <Header />
            <div style={{ paddingTop: " 6.25rem" }}></div>
            <Box
                margin={1}
                display="flex"
                justifyContent="center"
                padding={3}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    component={Paper}
                    padding={4}
                    gap={3}
                >
                    <FormContainer
                        onSuccess={login}
                        resolver={zodResolver(LoginSchema)}
                    >
                        <Box display="flex" flexDirection="column" gap={3}>
                            <TextFieldElement
                                name="username"
                                label="Username"
                                required
                            />
                            <PasswordElement
                                name="password"
                                label="Senha"
                                required
                            />

                            <Button type="submit" variant="contained">
                                Acessar
                            </Button>
                        </Box>
                    </FormContainer>
                </Box>
            </Box>
            <Footer />
        </div>
    );
};
