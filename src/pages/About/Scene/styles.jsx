import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const CanvasUI = styled(Canvas)`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
  pointer-events: none;
  touch-action: none;
`;

export const CleanBtnUI = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 30px;
  padding: 10px;
  border-radius: 100%;
  border: none;
`;
