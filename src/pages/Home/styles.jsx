import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  /* min-height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainBannerUI = styled.div`
  width: 100%;
  position: relative;
  margin: 0;
  overflow: hidden;
`;

export const GrassBackgroundUI = styled.img`
  width: 100%;
  /* height: 100%; */
  /* position: absolute; */
  height: 100px;
  object-fit: cover;
  z-index: 1;
`;

export const ScrollUI = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: scroll;
  align-items: end;
  z-index: 2;
`;

export const SpacerUI = styled.div`
  margin-top: ${({ marginTop }) => marginTop ?? "30px"};
`;

export const MainBannerImgUI = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BlankUI = styled.div`
  width: 85%;
  aspect-ratio: 4/3;
  min-height: 130px;
  background-color: whitesmoke;
  border-radius: 30px;
  margin-top: 15px;
`;

export const ToyIntroUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 92%;
  margin-top: 20px;
  position: relative;
  /* border-radius: 14px; */
`;

export const TextGrp = styled.div`
  text-align: center;
  margin-top: 30px;
`;
export const Txt1UI = styled.p`
  font-family: boba;
  font-size: 24px;
`;

export const Txt2UI = styled.p`
  font-family: boba;
  font-size: 16px;
`;

export const LinkButtonUI = styled(Link)`
  background: #ed2024;
  border-radius: 47px;
  color: white;
  width: 90%;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-block: 20px;
  font-size: 20px;
  margin-top: 12px;
  font-family: Poppins-Bold;
  display: flex;
  line-height: 0;
  gap: 5px;
`;
