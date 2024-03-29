import styled from "styled-components";

const StyledAction = styled.div`
    animation: 1s ease 0s 1 normal none running jywUSR;
    & > button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--Color-text-secondary);
        border-radius: 48px;
        border: 0px;
        padding: 16px 28px;
        transition: 1s;
        & > a {
            color: rgb(9, 16, 19);
            font-weight: 600;
            font-size: 1.125rem;
            text-decoration: none;
        }
        @media (min-width: 768px) {
            &:hover {
                background-color: white;
                transition: 1s;
            }
        }
    }
    & > small {
        font-size: 0.875rem;
        display: block;
        margin-top: 8px;
        opacity: 0.6;
        font-family: "Raleway", sans-serif;
    }
`;

export { StyledAction };
