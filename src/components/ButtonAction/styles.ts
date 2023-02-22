import styled, { css } from "styled-components";

export interface iStyledButtonActionProps {
    location: "HEADER" | "FLOATING" | "HERO";
}

const StyledButtonAction = styled.button<iStyledButtonActionProps>`
    padding: 15px 30px 15px 20px;
    width: 240px;
    height: 100%;
    background-color: var(--Color-button-menu);
    transition: 0.3s;
    & > a {
        font-size: 18px;
        line-height: 1.5;
        text-align: left;
        font-weight: 700;
        color: var(--Color-background);
        display: flex;
        align-items: center;
        gap: 10px;
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
                    padding: 15px 20px;
                    border-radius: 12.5rem;
                    width: 65vw;
                    height: 3.5rem;
                    background-color: var(--Color-button-menu);
                    transition: 0.3s;
                    & > a {
                        font-size: 14px;
                        font-weight: 700;
                        color: var(--Color-background);
                        display: flex;
                        align-items: center;
                        text-transform: uppercase;
                        gap: 20px;
                    }
                    @media (min-width: 1100px) {
                        display: none;
                    }
                    @media (min-width: 768px) {
                        width: 80vw;
                        height: 5rem;
                        & > a {
                            font-size: 18px;
                        }
                    }
                    @media (min-width: 400px) {
                        width: 75vw;
                        & > a {
                            font-size: 16px;
                        }
                    }
                `;

            case "HERO":
                return css`
                    border: 3px solid #fff;
                    border-radius: 10px;
                    padding: 1.065rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease-in-out;
                    background: rgba(0, 0, 0, 0.5);
                    width: 100%;
                    max-width: 28rem;
                    & > a {
                        font-size: 1.375rem;
                        font-weight: 700;
                        color: #fff;
                        gap: 30px;
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
