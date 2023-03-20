import styled from "styled-components";

const StyledHead = styled.section`
    background: url(/getback.png) center bottom no-repeat;
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
    animation: 1s ease 0s 1 normal none running eGfbbs;
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
            & > strong {
                font-weight: 700;
                font-size: 3rem;
            }
            & > span {
                font-size: 1rem;
                opacity: 0.5;
                display: block;
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

        @media screen and (max-width: 1169px) {
            overflow-x: hidden;
            flex-direction: column;
        }
        @media screen and (max-width: 600px) {
            padding: 48px;
        }
    }
`;

export { StyledHead, StyledTitle, StyledInfo, StyledDepoimentos };
