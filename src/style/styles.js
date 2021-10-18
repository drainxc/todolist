import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body {
        margin: 0px;
        background: linear-gradient(to bottom right, #F17FF7, #5BB0F9) fixed;
        margin: 0px;
        display: flex;
        justify-content: center;
        padding: 5%;
    }
`;

export default GlobalStyle;
