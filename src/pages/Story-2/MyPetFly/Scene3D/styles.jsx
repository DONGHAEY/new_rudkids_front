import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

export const CanvasWrapperUI = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 0;
  max-width: 430px;
  pointer-events: none;
`;

export const CanvasUI = styled(Canvas)`
  height: 100%;
  width: 100%;
  /* pointer-events: none;
  position: absolute; */
  /* z-index: 0; */
`;
