import styled from "styled-components";

const StyledFloating = styled.div`
    position: fixed;
    z-index: 8;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    transform-origin: bottom;
    transition: transform 0.3s linear;

    & > button {
        padding: 15px 20px;
        border-radius: 12.5rem;
        width: 80vw;
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
            display: none;
        }
    }

    & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background-color: #25d366;
        color: #fff;
        border-radius: 50%;
        outline: none;
        width: 3rem;
        height: 3rem;
        box-shadow: 0 0 6px 2px rgb(0 0 0 / 20%);
        transition: all 0.3s ease-in-out;

        @media (min-width: 768px) {
            width: 5rem;
            height: 5rem;
            & > svg {
                width: 2.5rem;
                height: 2.5rem;
            }
        }
    }

    @media (min-width: 768px) {
        padding: 1rem;
    }

    @media (min-width: 1100px) {
        width: fit-content;
        background-color: transparent;
        margin-left: auto;
    }
`;

export { StyledFloating };
