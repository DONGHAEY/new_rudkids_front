import styled from "styled-components";

export const TopRankSignUI = styled.div`
  width: 85%;
  gap: 6%;
  display: flex;
  flex-direction: row;
  border-radius: clamp(0rem, 3vw, 1rem);
  padding-inline: clamp(0rem, 5vw, 0.4rem);
  padding-block: clamp(0rem, 5vw, 0.6rem);
  background-color: #ebebeb;
`;

export const KidImgUI = styled.img`
  width: 20%;
  margin-left: 6.5%;
`;

export const TxtWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
  font-family: Pretendard-Bold;
`;

export const T1UI = styled.p`
  font-size: clamp(0rem, 4vw, 1.1rem);
`;

export const T2UI = styled.p`
  font-size: clamp(0rem, 3.5vw, 0.96rem);
`;
