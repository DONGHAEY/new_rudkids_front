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
    margin: 0 auto;
    /* margin-block: 0; */
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

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }


  @keyframes bounceFadeIn {
    0% {
      opacity: 0;
      transform: translate3d(0, 30%, 0);
    }
    100% {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  

`;

export default GlobalStyle;
