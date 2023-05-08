import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100vw;
    margin: 0 auto;
    height: 6.25rem;

    position: fixed;
    left: 0;
    right: 0;
    z-index: 100;

    background-color: #f2a7ad;
    box-shadow: 0 0 4px 3px rgb(0 0 0 / 20%);
`;

const StyledContainer = styled.nav`
    width: 100%;
    @media (min-width: 1100px) {
        height: 100%;
        padding-left: 1.5rem;

        display: flex;
    }
`;

export { StyledHeader, StyledContainer };
