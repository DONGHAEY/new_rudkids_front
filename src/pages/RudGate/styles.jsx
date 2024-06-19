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
  background-color: black;
  overflow: hidden;
  z-index: 0;
`;

export const CameraAllowBtnUI = styled.div`
  position: absolute;
  top: 50%;
  margin-inline: auto;
  background: linear-gradient(180deg, #14ff00 0%, #10ce00 100%);
  color: white;
  border: none;
  padding: 20px;
  font-family: Pretendard-Bold;
  font-size: 20px;
  border-radius: 30px;
  opacity: 80%;
  z-index: 0;
`;

export const AllowReqImgUI = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const ResultImgUI = styled.img`
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export const CanvasUI = styled.canvas`
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: scaleX(-1);
`;

export const RudgateImgUI = styled.img`
  position: absolute;
  width: 70%;
  margin-top: 20px;
  z-index: 1;
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
  /* overflow: hidden; */
  z-index: 3;
`;

export const AbsoluteCenterUI = styled.div`
  width: 100%;
  height: 130%;
  bottom: 10%;
  display: flex;
  z-index: 3;
  position: absolute;
`;
export const RudBottomBackImgUI = styled.img`
  width: 100%;
  position: absolute;
`;

export const TakeBtnSectionUI = styled.div`
  position: absolute;
  height: 100%;
  width: 29%;
  left: 40%;
  border-radius: 100%;
  z-index: 4;
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
  width: 70%;
  margin-top: 20px;
  z-index: 2;

  @keyframes grow {
    0% {
      transform: scale(0.5);
    }
    30% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: grow 1s;
`;

export const CongraturationLtUI = styled.div`
  max-width: 430px;
  width: 100%;
  height: 100%;
  position: fixed;
  margin: 0 auto;
  z-index: 1;
`;

export const ScanLtUI = styled.div`
  width: 300%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;

export const CloseImgUI = styled.img`
  position: absolute;
  top: 30px;
  width: 30px;
  height: 30px;
  left: 30px;
  z-index: 3;
`;

export const JoinUsImgUI = styled.img`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 80px;
  z-index: 1;
`;
