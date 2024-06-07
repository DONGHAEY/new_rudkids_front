import styled from "styled-components";

export const BackgroundImgUI = styled.img`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 430px;
  z-index: ${({ zIndex }) => zIndex ?? -1};
`;

export const BackgroundColorUI = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 430px;
  background: ${({ background }) => background ?? "red"};
  z-index: ${({ zIndex }) => zIndex ?? -1};
`;
