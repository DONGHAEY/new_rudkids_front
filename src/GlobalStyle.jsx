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
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }

  #root {
    width:100%;
    height:100%;
    max-width: 1000px;
  }

`;

export default GlobalStyle;
