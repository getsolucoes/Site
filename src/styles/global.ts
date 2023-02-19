import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --Color-background: ${({ theme }) => theme.background};
        --Color-text-primary: ${({ theme }) => theme.text_primary};
        --Color-text-secondary: #99df0cff;
        --Color-primary: #FF577F;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;
        --Color-grey-4: #121214;
        --Color-grey-3: #212529;
        --Color-grey-2: #343B41;
        --Color-grey-1: #868E96;
        --Color-grey-0: #F8F9FA;
    }
    body{
        background-color: var(--Color-background);
        color: var(--Color-grey-0);
        font-family: 'Inter', sans-serif;
    }
    a{
        text-decoration: none;
    }
    input,select{
        background: transparent;
        border: transparent;
    }
    button{
        display: inline-flex;
        align-items: center;
        justify-content: center;

        background: transparent;
        border: transparent;
        
        cursor: pointer;
    }
    ul,li{
        list-style: none;
    }
`;

export default GlobalStyle;
