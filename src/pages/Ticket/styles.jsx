import styled from "styled-components";
import backgroundImgUrl from "./assets/background.webp";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImgUrl});
  background-repeat: none;
  background-size: cover;
  /* background: linear-gradient(
    180deg,
    rgba(255, 248, 96, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  ); */
`;

export const TitleTxtUI = styled.p`
  font-size: 30px;
  font-family: Pretendard-Bold;
  line-height: 100%;
`;

export const SubTitleTxtUI = styled.p`
  font-size: 18px;
  font-family: Pretendard-Bold;
  margin-top: 14px;
  line-height: 100%;
`;

export const MiddleSectionUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: -100px;
`;

export const DescriptSectionUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  gap: 0px;
`;

export const FixedBototmSectionUI = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  /* max-height: 300px; */
  z-index: 3;
  display: flex;
  flex-direction: column;
  max-width: 430px;
  align-items: center;
  padding-block: 15px;
  gap: 10px;
`;
