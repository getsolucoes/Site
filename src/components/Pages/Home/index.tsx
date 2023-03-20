import { ThemeProvider } from "styled-components";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import GlobalStyle from "../../../styles/global";
import { darkTheme, lightTheme } from "../../../styles/theme";
import Floating from "../../Floating";
import Footer from "../../Footer";
import Header from "../../Header";
import Main from "./Main";

const HomePage = () => {
    const { theme } = useGlobalContext();
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header />
            <Floating />
            <Main />
            <Footer />
        </ThemeProvider>
    );
};

export default HomePage;
