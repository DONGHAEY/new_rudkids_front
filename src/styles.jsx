import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    width: 100%;
    height:100%;
    max-width: 430px;
    min-width: 262px;
    margin: 0 auto;
    padding: 0;
  }

  body {
    width: 100%;
    height:100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-use-select: none;
    user-select: none;
  }

  #root {
    position: relative;
    width:100%;
    height:100%;
  }
  

`;

export default GlobalStyle;
