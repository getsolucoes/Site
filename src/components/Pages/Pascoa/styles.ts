import styled, { css } from "styled-components";

export interface iStyledContainerProps {
    isHeader?: boolean;
    isBanner?: boolean;
}

const StyledContainer = styled.div<iStyledContainerProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 10px;
    color: var(--Color-text-primary);
    ${({ isHeader, isBanner }) => {
        if (isHeader) {
            return css`
                box-shadow: 0 0 4px 3px rgb(0 0 0 / 20%);
            `;
        }
        if (isBanner) {
            return css`
                padding: 0;
            `;
        }
    }}
    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        max-width: 780px;
        ${({ isBanner }) => {
            if (isBanner) {
                return css`
                    width: 100%;
                    height: 100vh;
                    max-width: unset;
                    align-items: center;
                    & > img {
                        object-fit: contain;
                    }
                `;
            }
        }};
    }
`;

const StyledContact = styled.div`
    width: 100%;
    background-color: var(--Color-background-secondary);
    border-radius: 4px;
    padding: 20px 10px;
    margin-top: 20px;
    & > ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        & > li {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 15px 10px;
            background-color: var(--Color-background);
            border-radius: 4px;
        }
    }
`;

const StyledForm = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 34px 18px;
    gap: 15px;
    background-color: var(--Color-background-depoimentos);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    @media (min-width: 768px) {
        margin-top: 35px;
        padding: 42px 22px;
    }

    & > h2 {
        color: #fff;
        font-size: 15px;
        font-weight: 700;

        @media (min-width: 768px) {
            font-size: 18px;
        }
    }

    & > form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;

        @media (min-width: 768px) {
            gap: 22px;
        }
    }

    & > div {
        margin-top: 5px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 15px;

        @media (min-width: 768px) {
            margin-top: 15px;
            gap: 22px;
        }

        & > a {
            font-weight: 600;
            font-size: 10px;
            color: var(--Color-text-primary);
            @media (min-width: 768px) {
                font-size: 12px;
            }
        }
    }
`;

export { StyledContainer, StyledContact, StyledForm };
