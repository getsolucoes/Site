import styled from "styled-components";

const StyledMenu = styled.ul`
    display: none;
    align-items: center;
    gap: 30px;
    width: 100%;

    li {
        a {
            font-family: "Raleway", sans-serif;
            color: var(--Color-text-primary);
            transition: 0.3s;
        }
        & > a {
            font-size: 16px;
            font-weight: 700;
            &:hover {
                color: var(--Color-text-secondary);
            }
        }
        & > .button_menu {
            padding: 10px 30px;
            border-radius: 4px;
            border: 1px solid #cdd1d9;
            background-color: var(--Color-button-menu);
            transition: 0.3s;
            & > a {
                font-size: 14px;
                font-weight: 700;
                color: var(--Color-background);
            }
            &:hover {
                background-color: var(--Color-button-menu-hover);
                & > a {
                    color: var(--Color-background);
                }
            }
        }
    }
    @media (min-width: 1100px) {
        display: flex;
        justify-content: flex-end;
    }
`;

const StyledDarkMode = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 20px;
    background-color: var(--Color-background);
    gap: 5px;
    font-size: 12px;
    color: var(--Color-text-primary);
    border-radius: 20px;
    transition: 0.3s;
    opacity: 0.5;

    @media (min-width: 1100px) {
        &:hover {
            background-color: var(--Color-text-secondary);
            opacity: unset;
        }
    }

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10px;
        height: 10px;
        font-size: 10px;
        font-weight: 400;
        opacity: 0.5;
        transition: right 0.17s ease;
    }

    .active {
        width: 16px;
        height: 16px;
        background-color: var(--Color-background);
        color: var(--Color-text-primary);
        font-size: 12px;
        border-radius: 50%;
        opacity: unset;
        box-shadow: 0 0 2px rgb(0 0 0 / 10%);
        transition: left 0.17s ease;
    }
`;

export { StyledMenu, StyledDarkMode };
