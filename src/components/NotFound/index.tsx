import Image from "next/image";
import { useGlobalContext } from "../../contexts/GlobalContext";
import Footer from "../Footer";
import Header from "../Header";
import { Styled404, StyledContent } from "./styles";

const NotFound = () => {
    const { theme } = useGlobalContext();
    return (
        <>
            <Header />
            <Styled404>
                <StyledContent>
                    <h1>404</h1>
                    <h2>Página não encontrada</h2>
                </StyledContent>
                <StyledContent>
                    <Image
                        src={theme === "light" ? "/g_dark.svg" : "/g_ligth.svg"}
                        alt="Get Soluções"
                        width={100}
                        height={100}
                    />
                </StyledContent>
            </Styled404>
            <Footer />
        </>
    );
};

export default NotFound;
