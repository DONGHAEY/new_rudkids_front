import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding : 0;
  }

  html {
    width : 100%;
    height : 100%;
    margin: 0 auto;
    padding:0;
  }

  body {
    width:100%;
    height: 100%;
    max-width: 425px;
    max-height: 2024px;
    background-color:black;
    margin: 0 auto;
    padding:0;
  }

  #root {
    width:100%;
    height:100%;
    position:relative;
  }

`;

export default GlobalStyle;
