import styled from "styled-components";

const StyledOptions = styled.ul`
    width: 100%;
    padding: 1.5rem 1.5rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;

    li {
        & > button > a {
            font-size: 16px;
            font-weight: 700;
            font-family: "Raleway", sans-serif;

            color: var(--Color-text-primary);
        }
    }

    @media (min-width: 1100px) {
        width: unset;
        padding: unset;

        flex-direction: unset;
        align-items: center;
        gap: 20px;
        
        & > li {
            & > button > a {
                transition: 0.3s;
                &:hover {
                    color: var(--Color-text-secondary);
                }
            }
        }
    }
`;

export { StyledOptions };
