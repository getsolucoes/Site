import styled from "styled-components";

const StyledHeader = styled.header`
    margin: 0 auto;
    height: 6.25rem;
    background-color: var(--Color-background);
    position: fixed;
    left: 0;
    right: 0;
    box-shadow: 0 0 4px 3px rgb(0 0 0 / 20%);
    width: 100vw;
    z-index: 100;
`;

const StyledContainer = styled.nav`
    width: 100%;
    @media (min-width: 1100px) {
        display: flex;
        height: 100%;
        padding-left: 1.5rem;
    }
`;

export { StyledHeader, StyledContainer };
