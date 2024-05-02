import backgroundImgSrc from "./assets/background.png";
import styled from "styled-components";

export const PageUI = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-image: url(${backgroundImgSrc});
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: none;
`;

export const FlexWrapperUI = styled.div`
  padding-block: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const PageDescriptionTextUI = styled.h2`
  font-family: Poppins-SemiBold;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: left;
`;

export const PageDescriptionUI = styled.h2`
  font-family: Poppins-SemiBold;
  font-size: 20px;
  margin-bottom: 20px;
  text-align: left;
`;

export const ListWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 90%;
`;
