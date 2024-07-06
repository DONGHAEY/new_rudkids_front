import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const CanvasUI = styled(Canvas)`
  top: 0;
  position: fixed;
  z-index: 0;
  pointer-events: none;
  touch-action: none;
  max-width: 430px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
