import styled from "styled-components";

export const LetterUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 78%;
  position: relative;
`;

export const LetterBackImgUI = styled.img`
  width: 100%;
  z-index: 1;
`;

export const LetterContentUI = styled.div`
  width: 90%;
  height: 50%;
  position: absolute;
  background-color: white;
  bottom: 10px;
  z-index: 1;
`;

export const LetterFrontImgUI = styled.img`
  position: absolute;
  width: 99%;
  bottom: 0;
  z-index: 3;
`;

export const FromImgUI = styled.img`
  position: absolute;
  border-radius: 100%;
  max-width: 90px;
  top: -55px;
  left: 0px;
  border: solid 8px white;
  z-index: 1;
`;

export const FromNmTxtUI = styled.div`
  width: 60%;
  position: absolute;
  top: 10px;
  font-family: Poppins-Bold;
  font-size: 20px;
  z-index: 1;
  right: 0;
  overflow: scroll;
  height: auto;
`;
