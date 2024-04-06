import styled from "styled-components";

export const ShareWrapperUI = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  overflow: hidden;
`;

export const ShareComponentWrapperUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 1000;
  top: 0;
  left: 0;
  opacity: 0;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;
