import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ButtonFixedUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  bottom: 5%;
  width: 100%;
  max-width: 290px;
  text-align: center;
`;

export const GetInButtonUI = styled.button`
  border-radius: 22px;
  background-color: black;
  color: white;
  padding-inline: 95px;
  padding-block: 25px;
  border: none;
  font-family: Poppins-Bold;
  font-size: 24px;
  line-height: 114%;
  letter-spacing: 0%;
`;

export const TopTxtSectionUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  margin-top: 10%;
  z-index: 10;
`;

export const Txt1UI = styled.p`
  font-family: Poppins-Bold;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: 0%;
`;

export const Txt2UI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 36px;
  line-height: 130%;
  letter-spacing: 0%;
`;

export const WainterWrapperUI = styled.div`
  position: relative;
  width: 80%;
  position: absolute;
  bottom: 90%;
  left: -10%;
  z-index: 3;
`;

export const 머핀ImgUI = styled.img`
  width: 90%;
  position: absolute;
  top: -41%;
  z-index: 0;
  right: -28%;
`;

export const FuckImgUI = styled.img`
  position: absolute;
  z-index: 1;
  top: -78%;
  left: 0;
  opacity: 0;
  width: 140%;
`;

export const AskLinkUI = styled(Link)`
  font-family: Pretendard-Bold;
  font-size: 15px;
  color: black;
`;
