import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(18, 150, 240, 1) 0%,
    rgba(189, 226, 251, 1) 100%
  );
`;

export const BottomSectionUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 100%;
`;

export const RankStageImgUI = styled.img`
  width: 100%;
  margin-bottom: -10px;
  z-index: 0;
`;

export const RankStageWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 88%;
  margin-top: 30px;
  position: relative;
`;

export const SecondStage = styled.div`
  position: absolute;
  width: 28%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  top: 10%;
`;

export const FirstStage = styled.div`
  position: absolute;
  width: 30%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  top: 0%;
`;
export const ThirdStage = styled.div`
  position: absolute;
  width: 28%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  top: 10%;
`;

export const RankerImgWrapperUI = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
`;

export const RankerImgUI = styled.img`
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
  border-radius: 100%;
  border: solid 5px ${({ borderColor }) => borderColor ?? "transparent"};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export const RankBallUI = styled.div`
  display: flex;
  position: absolute;
  border-radius: 100%;
  height: 25%;
  aspect-ratio: 1/1;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "none"};
  align-items: center;
  justify-content: center;
  font-family: Poppins-Bold;
  bottom: 5%;
  right: 0%;
`;

export const RankerNameUI = styled.p`
  width: 80%;
  padding: 5px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  font-family: Poppins-Bold;
  font-size: 12.5px;
`;
