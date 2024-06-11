import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const RudgateSignImgUI = styled.img`
  position: fixed;
  top: 30px;
  margin: auto;
  z-index: 99;
  width: 60%;
  max-width: 300px;
  background: none;
`;

export const DescriptionUI = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

export const ScreenshotPreviewBlurUI = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
`;

export const ScreenshotPreviewWraperUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  position: absolute;
  z-index: 1;
  gap: 10px;
`;

export const ScreenshotPreviewImgUI = styled.img`
  width: 75%;
`;

export const CanvasUI = styled.canvas`
  border-radius: 20px;
  object-fit: cover;
`;

export const HandMotionWrapperUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-color: black;
  color: white;
  position: relative;
  background: radial-gradient(
      ellipse at bottom,
      rgb(83, 173, 241) 0%,
      transparent
    ),
    radial-gradient(ellipse at top, rgb(12, 73, 187) 100%, transparent);
`;

export const ButtonUI = styled.div`
  width: ${({ isSelected }) => (isSelected ? "70px" : "60px")};
  height: ${({ isSelected }) => (isSelected ? "70px" : "60px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 100%;
  background-color: white;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonImageUI = styled.img`
  width: 60%;
  height: 60%;
  border-radius: 100%;
`;

export const SideTopWrapperUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SideBottomWrapperUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ShareTabUI = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

/************************ */

export const WecamSectionUI = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 300px;
  object-fit: cover;
  z-index: 0;
`;

export const AllowReqImgUI = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const ResultImgUI = styled.img`
  /* width: 100%; */
  height: 100%;
  /* object-fit: cover; */
  position: absolute;
  z-index: 9;
`;

export const WebcamTemplateUI = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const BottomSectionUI = styled.div`
  width: 100%;
  height: 112px;
  min-height: 80px;
  background-color: #faff39;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const AbsoluteCenterUI = styled.div`
  width: 100%;
  height: 130%;
  bottom: 10%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TakeBtnUI = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  margin: 0 auto;
  border-radius: 100%;
  position: relative;
  /* border: white 3px solid; */
`;

export const TakeBtnImgUI = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const ButtonListUI = styled.div`
  display: flex;
  width: 90%;
  gap: 10px;
  height: 70%;
`;

export const ShareBtnUI = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 10px;
  width: 70%;
  border: none;
  background: linear-gradient(180deg, #14ff00 0%, #10ce00 100%);
  border-radius: 64px;
  border: solid 1px #00b01c;
  font-family: Poppins-SemiBold;
  font-size: 24px;
  letter-spacing: -0.32px;
`;

export const PassBtnUI = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 10px;
  width: 100%;
  border: none;
  background: linear-gradient(180deg, #ff0000 0%, #db0000 100%);
  border-radius: 64px;
  border: solid 1px #cf0000;
  font-family: Poppins-SemiBold;
  font-size: 24px;
  letter-spacing: -0.32px;
`;

export const BackBtnUI = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 10px;
  width: 100%;
  border: none;
  background: linear-gradient(180deg, #e4e4e4 0%, #a7a7a7 100%);
  border-radius: 64px;
  border: solid 1px #a9a9a9;
  font-family: Poppins-SemiBold;
  font-size: 24px;
  letter-spacing: -0.32px;
`;

export const PassStatImgUI = styled.img`
  position: absolute;
  z-index: 99;
`;

export const CloseImgUI = styled.img`
  position: absolute;
  top: 30px;
  width: 30px;
  height: 30px;
  left: 30px;
  z-index: 100;
`;

export const JoinUsImgUI = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 60px;
  z-index: 9;
`;
