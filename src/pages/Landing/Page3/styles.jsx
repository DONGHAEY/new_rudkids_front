import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-block: 25%;
  background-color: black;
  align-items: center;
  position: relative;
`;

export const TitleImgUI = styled.img`
  width: 90%;
  margin-top: 10%;
`;

export const ButtonsWrapperUI = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  width: 90%;
`;
export const InstaImgUI = styled.img`
  position: absolute;
  top: -8%;
  right: -1.5%;
  width: 30%;
`;
export const GetInButtonUI = styled.img`
  width: 75%;
  margin-bottom: 10%;
  margin-top: 6%;
  z-index: 1;
`;

export const BottomImgUI = styled.img`
  width: 90%;
  /* position: absolute; */
`;

export const FlipWrapperUI = styled.div`
  perspective: 500px;
  transform-style: preserve-3d;
  width: 70%;
  position: relative;
`;

export const FlipFrontImgUI = styled.img`
  width: 100%;
`;

export const FlipBackImgUI = styled(FlipFrontImgUI)`
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;
`;
