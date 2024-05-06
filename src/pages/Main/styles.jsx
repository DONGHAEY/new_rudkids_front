import styled from "styled-components";
import backgroundImgSrc from "./assets/background.png";

export const PageUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  background-image: url(${backgroundImgSrc});
  background-size: cover;
  background-repeat: none;
`;
