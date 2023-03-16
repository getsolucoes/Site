import styled from "styled-components";

const Styled404 = styled.main`
    height: 100vh;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    h1 {
        font-family: JetBrains Mono, monospace;
        border-right: 1px solid var(--Color-text-primary);
        color: var(--Color-text-primary);
        margin: 0 20px 0 0;
        padding: 10px 23px 10px 0;
        font-size: 24px;
        font-weight: 500;
        vertical-align: top;
    }
    h2 {
        font-family: JetBrains Mono, monospace;
        color: var(--Color-text-primary);
        font-size: 14px;
        font-weight: 400;
        line-height: inherit;
        margin: 0;
        padding: 0;
    }
`;

export { Styled404, StyledContent };
