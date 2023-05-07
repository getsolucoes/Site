import styled from "styled-components";

const StyledMenuMobile = styled.div`
    margin: 0;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;

    background-color: rgba(17, 17, 17, 0.3);
    backdrop-filter: saturate(100%) blur(1px);
    transition: all 0.25s ease;

    @media (min-width: 1100px) {
        display: none;
    }
`;

const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 300px;

    display: unset;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1010;
    overflow: hidden;

    background-color: #f2a7ad;
    box-shadow: 3px 0 10px rgb(0 0 0 / 10%);
    transition: all 0.25s ease;

    & > div {
        width: 100%;
        height: 6.25rem;
        padding: 1.5rem 1.5rem 1rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: #f2a7ad;
        box-shadow: 0 0 4px 3px rgb(0 0 0 / 20%);
        & > button {
            font-size: 32px;
            color: #f2e4e5;
        }
    }

    @media (min-width: 1100px) {
        display: none;
    }
`;

export { StyledMenuMobile, StyledContainer };
