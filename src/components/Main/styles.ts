import styled from "styled-components";

const StyledExpect = styled.section`
    background-color: rgba(0, 0, 0, 0.7);
`;

const StyledContainer = styled.div`
    width: 85%;
    max-width: 1200px;
    padding: 2.5rem 0;
    margin: 0 auto;

    @media (min-width: 1024px) {
        padding: 4.5rem 0;
    }

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

    & > ul {
        width: 100%;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 2rem;

        li {
            width: 100%;

            & > div {
                padding-bottom: 1.25rem;

                display: flex;
                align-items: center;

                color: var(--Color-text-secondary);

                border-bottom: 1px solid var(--Color-text-secondary);

                @media (min-width: 1024px) {
                    flex-direction: column;
                    align-items: flex-start;
                    text-align: left;
                }

                & > svg {
                    font-size: 50px;
                }

                & > strong {
                    margin-left: 10px;

                    font-size: 1.7rem;

                    @media (min-width: 1024px) {
                        margin-top: 15px;
                        margin-left: unset;
                    }
                }
            }

            & > p {
                margin-top: 1.25rem;
                font-size: 1.2rem;
                color: #fff;
                line-height: 1.4;
            }
        }
    }
`;

export { StyledExpect, StyledContainer };
