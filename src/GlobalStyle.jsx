import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    margin: 0;
    padding:0;
    height: 100%;
    width:100%;
    overflow: hidden;
    background-color:black;
  }

`;

export default GlobalStyle;
