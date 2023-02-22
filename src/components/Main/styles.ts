import styled from "styled-components";

const StyledHero = styled.section`
    padding-top: 6.25rem;
    & > div {
        background: var(--Color-background) url(/hero.png) no-repeat 100% 0;
        background-size: cover;

        & > div {
            width: 100%;
            background-color: var(--Color-background-hero);
        }

        @media (min-width: 420px) {
            background-position-x: 70%;
        }

        @media (min-width: 680px) {
            & > div {
                background-color: unset;
            }
        }
    }
`;

const StyledContainer = styled.div`
    width: 85%;
    max-width: 1200px;
    padding: 2.5rem 0;
    margin: 0 auto;

    @media (min-width: 1024px) {
        padding: 4.5rem 0;
        height: 41.875rem;
        display: flex;
        align-items: flex-start;
    }
`;

const StyledText = styled.div`
    color: var(--Color-text-primary);
    & > h1 {
        font-size: 1.4rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        width: 15rem;
    }
    & > p {
        font-family: "Raleway", sans-serif;
        font-size: 1.175rem;
        margin-bottom: 1.5rem;
        font-weight: 300;
        max-width: 16.875rem;
    }
    @media (min-width: 370px) {
        & > h1 {
            font-size: 2rem;
        }
        & > p {
            font-size: 1.5rem;
        }
    }
    @media (min-width: 768px) {
        & > h1 {
            width: 26rem;
        }
    }
    @media (min-width: 1024px) {
        padding-top: 2rem;
        & > h1 {
            font-size: 3.2rem;
            margin-bottom: 2rem;
            width: 35.25rem;
        }
        & > p {
            font-size: 1.475rem;
            margin-bottom: 2.5rem;
            max-width: 31.25rem;
        }
    }
`;

export { StyledHero, StyledContainer, StyledText };
