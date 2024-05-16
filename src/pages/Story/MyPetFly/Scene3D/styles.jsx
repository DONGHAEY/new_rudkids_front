import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const CanvasWrapperUI = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 0;
  pointer-events: none;
`;

export const CanvasUI = styled(Canvas)`
  height: 100%;
  width: 100%;
`;
