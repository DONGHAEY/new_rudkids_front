import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TextSectionUI = styled.div`
  margin-inline: 10%;
  display: flex;
  flex-direction: column;
  margin-top: 25%;
  height: 20%;
  gap: 5%;
  z-index: 1;
`;

export const TitleUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: clamp(0rem, 4.5vw, 1.2rem);
  color: black;
  line-height: 180%;
`;

export const ExplainUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: clamp(0rem, 7.5vw, 2rem);
  color: black;
  line-height: 130%;
`;

export const FuckManImgUI = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90%;
`;

export const InfoIconWrapperUI = styled.div`
  position: absolute;
  top: 5%;
  right: 8%;
  font-size: 25px;
`;
