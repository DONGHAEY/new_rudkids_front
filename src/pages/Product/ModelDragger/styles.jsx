import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const ModelDraggerBackgroundUI = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  background-color: #ededed;
  border-radius: 13.5px;
  z-index: 0;
`;

export const CanvasUI = styled(Canvas)`
  position: absolute;
  width: 100%;
  border-radius: 13.5px;
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
