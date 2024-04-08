import styled from "styled-components";
import backgroundImgSrc from "./assets/background.png";

export const ListWrapperUI = styled.div`
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

export const ItemListUI = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  overflow-bottom: hidden;
  justify-content: center;
`;

export const LogoSectionUI = styled.div`
  background-color: none;
  padding-block: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-family: Poppins-Bold;
  color: white;
`;

export const ItemWrapperUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
`;
