import styled from "styled-components";

const StyledLogo = styled.div`
    width: 100%;
    height: 100%;
    padding: 1.5rem 2.5rem 1rem 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        gap: 20px;

        button {
            font-size: 32px;
            color: #a63c76;
        }
    }

    @media (min-width: 1100px) {
        width: 20%;
        margin-right: auto;
        padding: 0;
        button {
            display: none;
        }
    }
`;

export { StyledLogo };
