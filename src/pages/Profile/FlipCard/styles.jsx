import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardCameraUI = styled.div`
  perspective: 500px;
  transform-style: preserve-3d;
  width: 80%;
  height: auto;
  position: relative;
  animation: bounceFadeIn 1s;
`;

export const CardUI = styled.div`
  width: 100%;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
  position: relative;
  pointer-events: none;
  border-radius: 20px;
`;

export const CardFrontUI = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 60px;
  border-radius: 5px;
  backface-visibility: hidden;
`;

export const CardBackUI = styled(CardFrontUI)`
  transform: rotateY(180deg);
`;

export const NoInfoDimmedUI = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(23, 21, 21, 0.5);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoInfoQuestionUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 50px;
  color: white;
`;

export const RegisterBtnUI = styled(Link)`
  display: flex;
  border: none;
  padding: 10px;
  text-decoration: none;
  border-radius: 10px;
  font-family: Pretendard-SemiBold;
  color: black;
  background-color: white;
`;
