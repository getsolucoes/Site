import styled from "styled-components";

const StyledCard = styled.article`
    width: 100%;
    background-color: var(--Color-background);
    color: var(--Color-text-primary);
    font-size: 0.75rem;
    border: 1px solid var(--Color-background);
    box-shadow: 0 2px 4px 3px rgb(0 0 0 / 20%);
    border-radius: 20px;
    padding: 1rem 1.5rem;
    position: relative;

    @media (min-width: 1024px) {
        padding: 1.5rem;
    }

    & > p {
        line-height: 1.4;
        font-size: 0.75rem;
    }
`;

const StyledPerfil = styled.div`
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

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
            color: var(--Color-text-primary);
        }
    }
`;

export { StyledCard, StyledPerfil };
