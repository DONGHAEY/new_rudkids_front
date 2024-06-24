import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: black;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 1%;
  z-index: 99;
`;

export const TitleImgUI = styled.img`
  width: 90%;
  margin-top: 10%;
`;

export const ButtonsWrapperUI = styled.div`
  position: relative;
  width: 90%;
`;
export const InstaImgUI = styled.img`
  position: absolute;
  top: -6%;
  right: -3%;
  width: 30%;
`;
export const GetInButtonUI = styled.img`
  width: 70%;
  margin-block: 4%;
  margin-top: 6%;
  z-index: 1;
  position: sticky;
  bottom: 5%;
`;

export const BottomImgUI = styled.img`
  width: 90%;
  bottom: 3%;
  position: absolute;
`;
