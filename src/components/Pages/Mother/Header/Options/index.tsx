import Link from "next/link";
import { useGlobalContext } from "../../../../../contexts/GlobalContext";
import { StyledOptions } from "./styles";

const Options = () => {
    const { setIsClickMobile } = useGlobalContext();
    return (
        <StyledOptions>
            <li>
                <button
                    type="button"
                    onClick={() => {
                        setIsClickMobile(false);
                    }}
                >
                    <Link href="/">Quem somos</Link>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    onClick={() => {
                        setIsClickMobile(false);
                    }}
                >
                    <Link href="/">Soluções</Link>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    onClick={() => {
                        setIsClickMobile(false);
                    }}
                >
                    <Link href="/">Para empresas</Link>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    onClick={() => {
                        setIsClickMobile(false);
                    }}
                >
                    <Link href="/">Portfólio</Link>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    onClick={() => {
                        setIsClickMobile(false);
                    }}
                >
                    <Link href="/">Dúvidas</Link>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    onClick={() => {
                        setIsClickMobile(false);
                    }}
                >
                    <Link href="/">Blog</Link>
                </button>
            </li>
        </StyledOptions>
    );
};

export default Options;
