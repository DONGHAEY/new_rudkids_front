import styled from "styled-components";

export const BackgroundUI = styled.div`
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 430px;
  z-index: ${({ zIndex }) => zIndex ?? -1};
  background-color: red;
`;

export const BackgroundImgUI = styled.img`
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 430px;
  z-index: ${({ zIndex }) => zIndex ?? -1};
`;

export const BottomImgUI = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
