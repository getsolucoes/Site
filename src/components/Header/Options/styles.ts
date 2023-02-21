import styled from "styled-components";

const StyledOptions = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    width: 100%;
    padding: 1.5rem 1.5rem 1rem;

    li {
        a {
            font-family: "Raleway", sans-serif;
            color: var(--Color-text-primary);
        }
        & > button > a {
            font-size: 16px;
            font-weight: 700;
        }
    }

    @media (min-width: 1100px) {
        flex-direction: unset;
        align-items: center;
        gap: 20px;
        width: unset;
        padding: unset;
        & > li {
            a {
                transition: 0.3s;
            }
            & > button > a {
                &:hover {
                    color: var(--Color-text-secondary);
                }
            }
        }
    }
`;

export { StyledOptions };
