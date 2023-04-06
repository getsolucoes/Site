import styled, { css } from "styled-components";

interface iStyledModalProps {
    isDelete?: boolean;
}

const StyledModal = styled.div<iStyledModalProps>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);

    & > div {
        display: flex;
        height: fit-content;
        flex-direction: column;
        width: 80%;
        max-width: 780px;
        background-color: var(--Color-background-secondary);
        padding: 20px;
        ${({ isDelete }) => {
            if (isDelete) {
                return css`
                    max-width: 400px;
                `;
            }
        }}
        & > h3 {
            text-align: center;
            color: var(--Color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }
    }
`;

const StyledTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    & > h2 {
        display: inline-flex;
        align-items: flex-start;
        font-weight: 600;
        font-size: 16px;
        gap: 10px;
        color: var(--Color-text-primary);
        & > span > svg {
            font-size: 18px;
        }
        @media (min-width: 768px) {
            /* font-size: 16px; */
        }
    }

    & > button {
        display: inline-flex;
        align-items: center;
        padding: 0 10px;
        height: 20px;
        color: var(--Color-grey-0);
        border-radius: 4px;
        background-color: var(--Color-button-secondary);
        & > svg {
            width: 10px;
            stroke-width: 1;
        }
    }
`;

export { StyledModal, StyledTitle };
