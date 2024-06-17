import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const SliderWrapperUI = styled.div`
  width: 100%;
  position: relative;
  border-radius: 30px;
  overflow: hidden;
`;

export const LeftUI = styled.div`
  position: absolute;
  left: -2%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  line-height: 0;
  padding: 15px;
  border-radius: 100%;
  font-size: 20px;
  z-index: 3;
`;

export const RightUI = styled.div`
  position: absolute;
  right: -2%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  line-height: 0;
  padding: 15px;
  border-radius: 100%;
  font-size: 20px;
  z-index: 3;
`;

export const CanvasWrapperUI = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
`;

export const CanvasUI = styled(Canvas)`
  width: 100%;
  height: 100%;
`;

export const CommingSoonImgUI = styled.img`
  position: absolute;
  width: 80px;
  bottom: 10%;
  right: 10%;
  z-index: 9;
`;
