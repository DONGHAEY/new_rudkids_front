import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const CanvasUI = styled(Canvas)`
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 0;
  pointer-events: none;
  touch-action: none;
  background-color: rgba(0, 0, 0, 0.3);
`;
