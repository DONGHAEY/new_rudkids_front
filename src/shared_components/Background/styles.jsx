import styled from "styled-components";

export const BackgroundUI = styled.div`
  position: ${({ position }) => position ?? "fixed"};
  top: 0;
  width: 100%;
  height: 100%;
  margin-inline: 0 auto;
  max-width: 430px;
  z-index: ${({ zIndex }) => zIndex ?? -1};
  background: linear-gradient(180deg, #ffffff 0%, #0186ff 100%);
`;

export const BackgroundImgUI = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 430px;
  z-index: ${({ zIndex }) => zIndex ?? -1};
  object-fit: cover;
`;

export const BottomImgUI = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
