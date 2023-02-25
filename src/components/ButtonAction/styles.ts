import styled, { css } from "styled-components";

export interface iStyledButtonActionProps {
    location: "HEADER" | "FLOATING" | "HERO";
}

const StyledButtonAction = styled.button<iStyledButtonActionProps>`
    width: 260px;
    height: 100%;
    padding: 15px 35px 15px 20px;

    background-color: var(--Color-button-menu);
    transition: 0.3s;
    & > a {
        display: flex;
        align-items: center;
        gap: 10px;

        font-size: 20px;
        font-weight: 700;
        font-family: Montserrat, sans-serif;
        line-height: 1.3;
        text-align: left;
        color: var(--Color-background);
    }

    @media (min-width: 1100px) {
        &:hover {
            background-color: var(--Color-button-menu-hover);
            & > a {
                color: var(--Color-background);
            }
        }
    }

    ${({ location }) => {
        switch (location) {
            case "HEADER":
                return css`
                    & > a {
                        text-transform: uppercase;
                    }
                `;

            case "FLOATING":
                return css`
                    width: 100%;
                    height: 3.5rem;
                    padding: 15px 20px;

                    border-radius: 12.5rem;

                    & > a {
                        gap: 20px;

                        font-size: 18px;
                        text-transform: uppercase;
                        text-align: center;
                    }

                    @media (min-width: 768px) {
                        height: 5rem;

                        & > a {
                            font-size: 22px;
                        }
                    }

                    @media (min-width: 1100px) {
                        display: none;
                    }
                `;

            case "HERO":
                return css`
                    width: 100%;
                    max-width: 28rem;
                    padding: 1.065rem;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 3px solid #fff;
                    border-radius: 10px;
                    background: rgba(0, 0, 0, 0.5);
                    transition: all 0.3s ease-in-out;

                    & > a {
                        gap: 30px;

                        font-size: 1.375rem;
                        color: #fff;
                    }

                    @media (min-width: 1100px) {
                        &:hover {
                            background-color: var(--Color-text-secondary);
                            & > a {
                                color: #fff;
                            }
                        }
                    }
                `;
        }
    }}
`;

export { StyledButtonAction };
