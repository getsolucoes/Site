import styled from "styled-components";

const StyledMenu = styled.div`
    display: none;
    align-items: center;
    gap: 30px;
    width: 100%;

    @media (min-width: 1100px) {
        display: flex;
        justify-content: flex-end;
    }
`;

export { StyledMenu };
