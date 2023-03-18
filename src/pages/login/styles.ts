import styled from "styled-components";

const StyledLogin = styled.div`
    padding-top: 6.25rem;
`;

const StyledContainer = styled.div`
    flex-direction: column;

    display: flex;

    @media (min-width: 992px) {
        padding-top: 6rem !important;
    }
    @media (min-width: 992px) {
        width: 640px;
    }

    padding-top: 4rem;

    padding: 1.5rem;

    height: calc(100vh - 2rem);
`;

const StyledContent = styled.div`
    height: 100%;

    @media (min-width: 992px) {
        max-width: 992px;
    }

    @media (min-width: 576px) {
        max-width: 576px;
    }
    @media (min-width: 359px) {
        max-width: 359px;
    }
    @media (min-width: 767px) {
        width: 100%;
    }

    margin-left: auto;
    margin-right: auto;
`;

const StyledTitle = styled.div`
    margin-bottom: 3rem;
    & > h1 {
        @media (min-width: 992px) {
            font-size: 48px;
            line-height: 1.2;
            letter-spacing: -2px;
        }

        color: var(--Color-text-primary);

        letter-spacing: -1px;

        line-height: 1.2;

        font-weight: 800;

        font-size: 32px;

        margin-bottom: 1rem;
    }
`;

export { StyledLogin, StyledContainer, StyledContent, StyledTitle };
