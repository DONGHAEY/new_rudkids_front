import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
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
  position: relative;
`;

export const SecondStage = styled(Link)`
  position: absolute;
  width: 28%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  top: 20%;
  text-decoration: none;
  animation: bounceFadeIn 1s;
`;

export const FirstStage = styled(Link)`
  position: absolute;
  width: 30%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  top: 10%;
  text-decoration: none;
  animation: bounceFadeIn 1s;
`;
export const ThirdStage = styled(Link)`
  position: absolute;
  width: 28%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  top: 20%;
  text-decoration: none;
  animation: bounceFadeIn 1s;
`;

export const RankerImgWrapperUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  background-color: white;
  position: relative;
  border-radius: 100%;
`;

export const RankerImgUI = styled.img`
  width: 100%;
  height: 100%;
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
  color: black;
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
  color: black;
`;
