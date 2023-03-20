import { ThemeProvider } from "styled-components";
import ContatoPage from "../components/Pages/Contato";
import { useGlobalContext } from "../contexts/GlobalContext";
import GlobalStyle from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme";

export default function Contato() {
    const { theme } = useGlobalContext();
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <ContatoPage />
        </ThemeProvider>
    );
}
