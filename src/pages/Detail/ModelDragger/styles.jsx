import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const ModelDraggerBackgroundUI = styled.div`
  margin-top: 10px;
  position: relative;
  width: 80%;
  aspect-ratio: 1/1;
  background-color: gainsboro;
  border-radius: 3%;
`;

export const CanvasUI = styled(Canvas)`
  position: absolute;
`;

export const PlayingControllerUI = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  z-index: 2;
`;

export const ModelTextWrapperUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ModelTextUI = styled.p`
  padding: 10px;
  font-family: Poppins-Bold;
  color: #767676;
`;
