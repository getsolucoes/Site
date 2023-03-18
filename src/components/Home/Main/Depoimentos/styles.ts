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
`;

const StyledTestimonials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 1rem;
    gap: 1rem;
    margin: 0 auto;
    padding: 0 50px 50px 60px;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        grid-gap: 1rem;
        gap: 1rem;

        @media (min-width: 1024px) {
            width: 31%;
        }
    }

    & > .responsivo {
        display: none;

        @media (min-width: 1024px) {
            display: flex;
        }
    }
`;

export { StyledDepoimentos, StyledContainer, StyledTestimonials };
