import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&family=Raleway:wght@100;200;300;400;500&display=swap');
    
* {
        margin: 0;
        padding: 0;
    }

    :root {
        --font-primary: 'Raleway', sans-serif;
        --color-green-strong: #012E40;
    }

    body {
        background-color: #EEF0F2;
    
        p {
            font-family: var(--font-primary);
        }
        h2 {
            font-family: var(--font-primary);
            font-weight: 200;
            font-size: 20px;

        }
    }
`;
