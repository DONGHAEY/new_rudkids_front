import styled from "styled-components";

export const ProfileImgWrapperUI = styled.div`
  width: 35%;
  aspect-ratio: 1/1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImgUI = styled.img`
  width: 100%;
  border-radius: 100%;
`;
export const InstaRingImgUI = styled.img`
  position: absolute;
  width: 100%;
  scale: 1.1;
  top: 0;
  left: 0;
`;

export const InstaIdTxtUI = styled.p`
  font-family: boba;
  font-size: clamp(1.1rem, 6vw, 1.5rem);
  border-radius: 52px;
  line-height: 100%;
  margin-top: 8%;
  margin-bottom: 8%;
`;

export const CompleteBtnUI = styled.div`
  padding-block: 5%;
  width: 100%;
  font-size: clamp(0.8rem, 4vw, 1rem);
  text-align: center;
`;

export const WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 23%;
  margin-bottom: 15%;
  animation: fadeIn 1s;
`;
