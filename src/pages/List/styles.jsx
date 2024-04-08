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

export const LogoWrapperUI = styled.div`
  padding-block: 50px;
  object-fit: cover;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemWrapperUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
`;
