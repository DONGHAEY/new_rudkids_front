import styled from "styled-components";

export const PageUI = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  max-width: 430px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  justify-content: center;
`;

export const TopImgUI = styled.img`
  top: 0;
  width: 100%;
  background: none;
  position: absolute;
  z-index: 3;
`;

export const StarsImgUI = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BottomImgUI = styled.img`
  height: auto;
  width: 100%;
  background: none;
  position: absolute;
  bottom: 0;
  z-index: 3;
`;

export const FooterImgUI = styled.img`
  position: absolute;
  background-color: gray;
  bottom: 0;
  width: 100%;
  z-index: 4;
`;

export const CenterDivUI = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CenterLogoImgUI = styled.img`
  width: 60%;
  margin-bottom: 3%;
`;
