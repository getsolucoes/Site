import styled from "styled-components";

const StyledMenuMobile = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(17, 17, 17, 0.3);
    z-index: 1000;
    backdrop-filter: saturate(100%) blur(1px);
    margin: 0;
    transition: all 0.25s ease;
    @media (min-width: 1100px) {
        display: none;
    }
`;

const StyledContainer = styled.div`
    display: unset;
    position: fixed;
    width: 100%;
    max-width: 300px;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: var(--Color-background);
    overflow: hidden;
    z-index: 1010;
    box-shadow: 3px 0 10px rgb(0 0 0 / 10%);
    transition: all 0.25s ease;

    & > div {
        width: 100%;
        height: 6.25rem;
        background-color: var(--Color-background);
        box-shadow: 0 0 4px 3px rgb(0 0 0 / 20%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 1.5rem 1rem;
        & > button {
            font-size: 32px;
            color: var(--Color-text-secondary);
        }
    }

    & > ul {
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
            & > .button_menu {
                padding: 10px 30px;
                border-radius: 4px;
                border: 1px solid #cdd1d9;
                background-color: var(--Color-button-menu);
                & > a {
                    font-size: 16px;
                    font-weight: 700;
                    color: var(--Color-background);
                }
            }
        }
    }

    @media (min-width: 1100px) {
        display: none;
    }
`;

export { StyledMenuMobile, StyledContainer };