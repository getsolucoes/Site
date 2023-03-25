import styled from "styled-components";

const StyledHead = styled.section`
    background: url(/getback.webp) center bottom no-repeat;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        width: 100%;
        max-width: 750px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0px 24px;

        & > img {
            margin-bottom: 56px;
        }
    }
`;

const StyledTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h1 {
        font-size: 2.2rem;
        line-height: 3rem;
        letter-spacing: -0.05em;
        font-weight: 700;
    }
    & > h2 {
        font-size: 1.125rem;
        font-weight: normal;
        margin-top: 8px;
        opacity: 0.6;
        margin-bottom: 32px;
    }
`;

const StyledInfo = styled.section`
    border-top: 2px solid rgb(62, 58, 74);
    width: 100%;
    & > h1 {
        text-align: center;
        font-size: 0.8rem;
        font-weight: normal;
        letter-spacing: 0.2em;
        opacity: 0.6;
        margin-top: 20px;
        @media (min-width: 768px) {
            padding-bottom: 20px;
            margin-top: unset;
        }
    }
    & > .mobile {
        @media (min-width: 768px) {
            display: none;
        }
    }
    & > .pc {
        display: none;
        @media (min-width: 768px) {
            display: block;
        }
    }
    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 56px;
        width: 100%;
        max-width: 1360px;
        margin: 0px auto;

        @media screen and (max-width: 1080px) {
            flex-direction: column;
        }
        @media screen and (max-width: 600px) {
            padding: 48px;
        }
        & > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 280px;
            font-family: "Raleway", sans-serif;
            margin-top: 32px;
            @media (min-width: 768px) {
                margin-top: unset;
            }
            & > strong {
                font-weight: 700;
                font-size: 3rem;
                @media (min-width: 768px) {
                    font-size: 3.8rem;
                }
            }
            & > span {
                font-size: 1rem;
                opacity: 0.5;
                display: block;
                @media (min-width: 768px) {
                    font-size: 1.2rem;
                }
            }
        }
    }
`;

const StyledDepoimentos = styled.section`
    border-top: 2px solid rgb(62, 58, 74);
    width: 100%;
    background: rgb(8, 12, 13);

    & > div {
        display: flex;
        align-items: flex-start;
        position: relative;
        width: 100%;
        max-width: 1360px;
        margin: 0px auto;
        padding: 80px;
        font-family: "Raleway", sans-serif;

        @media screen and (max-width: 1169px) {
            overflow-x: hidden;
            flex-direction: column;
        }
        @media screen and (max-width: 600px) {
            padding: 48px;
        }

        & > div {
            width: 100%;
            max-width: 510px;
            position: sticky;
            top: 60px;

            @media screen and (max-width: 1169px) {
                position: relative;
                top: 0px;
            }
            & > h2 {
                font-size: 4rem;
                font-weight: 600;
                margin-bottom: 24px;
                line-height: 4.3125rem;
            }
        }
        .stars {
            margin-top: 8px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;
            max-width: 210px;
            font-size: 35px;
            color: var(--Color-text-secondary);
        }
        .depoimentos {
            margin-left: 80px;
            flex: 1 1 0%;
            display: flex;
            gap: 20px;
            flex-direction: column;
            align-items: center;
            overflow-x: hidden;
            font-family: "Raleway", sans-serif;
            @media screen and (max-width: 1169px) {
                width: 100%;
                margin: 48px 0px 0px;
            }
            & > div {
                background: rgb(24, 35, 37);
                padding: 24px;
                border-radius: 5px;
            }
            & > a {
                background: var(--Color-text-secondary);
                display: flex;
                align-items: center;
                border-radius: 48px;
                border: 0px;
                color: rgb(9, 16, 19);
                font-weight: 600;
                font-size: 1.125rem;
                padding: 16px 28px;
                text-decoration: none;
                transition: 1s;
                gap: 10px;
                @media (min-width: 768px) {
                    &:hover {
                        background-color: white;
                        transition: 1s;
                    }
                }
            }
        }
    }
`;

const StyledPerfil = styled.div`
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    margin-top: 1rem;

    & > img {
        border-radius: 50%;
    }

    & > div {
        z-index: 1;
        margin-left: 1rem;

        & > h3 {
            margin-bottom: 0.25rem;
            color: var(--Color-text-secondary);
            font-weight: 700;
            font-family: Montserrat, sans-serif;
            line-height: 1.2rem;
        }
        & > span {
            display: block;
        }
    }
`;

export { StyledHead, StyledTitle, StyledInfo, StyledDepoimentos, StyledPerfil };
