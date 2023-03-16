import { ThemeProvider } from "styled-components";
import NotFound from "../components/NotFound";
import { useGlobalContext } from "../contexts/GlobalContext";
import GlobalStyle from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme";

export default function Custom404() {
    const { theme } = useGlobalContext();
    return (
        <>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyle />
                <NotFound />
            </ThemeProvider>
        </>
    );
}
