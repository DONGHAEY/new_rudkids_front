import styled from "styled-components";
import backgroundImgSrc from "./assets/background.png";

export const PageUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-image: url(${backgroundImgSrc});
  background-size: cover;
  background-repeat: none;
`;

export const LogoWrapperUI = styled.div`
  padding-block: 50px;
  object-fit: cover;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
