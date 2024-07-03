import styled from "styled-components";
import PublicBizAssets from "../../global/public-biz-assets";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: red;
  background-image: url(${PublicBizAssets.background});
  background-repeat: none;
  background-size: cover;
`;

export const TitleTxtUI = styled.p`
  font-size: clamp(1rem, 8vw, 2.2rem);
  font-family: Pretendard-Bold;
  line-height: 100%;
  color: white;
`;

export const SubTitleTxtUI = styled.p`
  font-size: 18px;
  font-family: Pretendard-Bold;
  margin-top: 5%;
  line-height: 100%;
  font-size: clamp(0.8rem, 4.3vw, 1.1rem);
  color: white;
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
  margin-top: 10%;
  margin-bottom: 4%;
  gap: 0px;
`;

export const FixedBototmSectionUI = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  max-width: 430px;
  align-items: center;
  padding-block: 15px;
  gap: 10px;
`;
