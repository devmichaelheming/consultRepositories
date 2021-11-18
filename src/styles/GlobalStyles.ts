import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        min-height: 100vh;
        height: a;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        background-color: purple;
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
    }
`