import styled from "styled-components";
import backgroundImgSrc from "./assets/background.png";

export const PageUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-image: url(${backgroundImgSrc});
  background-size: cover;
  background-repeat: none;
`;

export const ItemBoxListUI = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  overflow-bottom: hidden;
  justify-content: center;
`;

export const LogoWrapperUI = styled.div`
  padding-block: 50px;
  object-fit: cover;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemBoxWrapperUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
`;

export const NavigateButtonUI = styled.button`
  padding: 15px;
  padding-inline: 20px;
  background-color: #ff0000;
  color: white;
  border-radius: 50%;
  position: absolute;
  bottom: -10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: none;
  z-index: 1;
`;
