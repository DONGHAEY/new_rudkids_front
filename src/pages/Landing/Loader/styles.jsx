import styled from "styled-components";

export const PageUI = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  max-width: 430px;
  z-index: 999;
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
  height: auto;
  width: 100%;
  background: none;
  position: absolute;
  bottom: 0;
  z-index: 3;
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
  width: 70%;
`;
export const ProgressBarUI = styled.div`
  margin-top: 8%;
  width: 50%;
  height: 2.5%;
  border-radius: 30px;
  border: 1px solid white;
  position: relative;
`;

export const ProgressUI = styled.div`
  width: 0%;
  height: 100%;
  border-radius: 30px;
  background: rgba(0, 192, 0, 1);
`;

export const ProgressTxtUI = styled.p`
  color: white;
  font-size: 4.3vw;
  color: white;
  margin-top: 2%;
`;
