import styled from "styled-components";
import backgroundImgSrc from "./assets/background.png";

export const PageUI = styled.div`
  background-image: url(${backgroundImgSrc});
  background-size: cover;
  background-repeat: none;
  position: relative;
  min-height: 100%;
  height: 100%;
  overflow: hidden;
`;
