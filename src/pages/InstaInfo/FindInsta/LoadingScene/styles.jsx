import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const CanvasUI = styled(Canvas)`
  height: 100%;
  width: 100%;
  z-index: 0;
  pointer-events: none;
  touch-action: none;
`;
