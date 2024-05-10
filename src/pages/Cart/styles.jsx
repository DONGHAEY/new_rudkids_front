import backgroundImgSrc from "./assets/background.png";
import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundImgSrc});
  background-size: cover;
  background-repeat: none;
`;

export const FlexWrapperUI = styled.div`
  padding-block: 10px;
  padding-top: 45px;
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
  letter-spacing: 0px;
  text-align: left;
`;

export const ListWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
`;

export const PriceWrapperUI = styled.div`
  width: 100%;
  margin-top: 60px;
`;
