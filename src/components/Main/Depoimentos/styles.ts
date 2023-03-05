import styled from "styled-components";

const StyledDepoimentos = styled.section`
    background-image: linear-gradient(
        180deg,
        var(--Color-background-depoimentos) 70%,
        var(--Color-background) 0
    );
    padding-top: 2.5rem;

    @media (min-width: 475px) {
        background-image: linear-gradient(
            180deg,
            var(--Color-background-depoimentos) 75%,
            var(--Color-background) 0
        );
    }

    @media (min-width: 680px) {
        background-image: linear-gradient(
            180deg,
            var(--Color-background-depoimentos) 78%,
            var(--Color-background) 0
        );
    }

    @media (min-width: 768px) {
        background-image: linear-gradient(
            180deg,
            var(--Color-background-depoimentos) 80%,
            var(--Color-background) 0
        );
    }

    @media (min-width: 915px) {
        background-image: linear-gradient(
            180deg,
            var(--Color-background-depoimentos) 82%,
            var(--Color-background) 0
        );
    }

    @media (min-width: 1024px) {
        padding: 4.5rem 0;
        background-image: linear-gradient(
            180deg,
            var(--Color-background-depoimentos) 70%,
            var(--Color-background) 0
        );
    }

    @media (min-width: 1300px) {
        background-image: linear-gradient(
            180deg,
            var(--Color-background-depoimentos) 68%,
            var(--Color-background) 0
        );
    }
`;

const StyledContainer = styled.div`
    width: 85%;
    max-width: 1200px;
    margin: 0 auto;

    & > h2 {
        margin-bottom: 2.5rem;

        font-size: 1.625rem;
        font-weight: 800;
        word-spacing: 15px;
        letter-spacing: 5px;
        color: #fff;

        @media (min-width: 1024px) {
            margin-bottom: 4.5rem;

            font-size: 3rem;
        }
    }

    & > a {
        font-size: 1.375rem;
        font-weight: 700;
        border: 3px solid var(--Color-text-secondary);
        border-radius: 2px;
        padding: 1.065rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease-in-out;
        color: var(--Color-text-secondary);
        margin: 2.5rem auto 0;
        max-width: 44.5rem;
        transition: all 0.3s ease-in-out;

        @media (min-width: 1100px) {
            &:hover {
                color: #fff;
                background-color: var(--Color-text-secondary);
            }
        }
    }
`;

const StyledTestimonials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 1rem;
    gap: 1rem;
    margin: 0 auto;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 37rem;
    }

    @media (min-width: 1050px) {
        height: 36rem;
    }

    @media (min-width: 1100px) {
        height: 34.5rem;
    }

    @media (min-width: 1190px) {
        height: 31rem;
    }

    @media (min-width: 1300px) {
        height: 30rem;
    }

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        grid-gap: 1rem;
        gap: 1rem;

        @media (min-width: 1024px) {
            width: 31%;
            height: 100%;
        }

        & > article {
            width: 100%;
            background-color: var(--Color-background);
            color: var(--Color-text-primary);
            font-size: 0.75rem;
            border: 1px solid var(--Color-background);
            box-shadow: 0 2px 4px 3px rgb(0 0 0 / 20%);
            border-radius: 20px;
            padding: 1rem 1.5rem;
            flex-direction: column;
            position: relative;
            flex-grow: 1;

            @media (min-width: 1024px) {
                padding: 1.5rem;
            }

            & > p {
                line-height: 1.4;
                font-size: 0.75rem;
            }
        }
    }

    & > .responsivo {
        display: none;

        @media (min-width: 1024px) {
            display: flex;
        }
    }
`;

const StyledPerfil = styled.div`
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

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
            color: var(--Color-text-primary);
        }
    }
`;

export { StyledDepoimentos, StyledContainer, StyledTestimonials, StyledPerfil };
