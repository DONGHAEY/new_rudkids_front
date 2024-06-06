import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
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
  width: 100%;
  height: 100%;
  min-height: 300px;
`;
export const WebcamTemplateUI = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 99;
`;

export const BottomSectionUI = styled.div`
  width: 100%;
  height: 20%;
  min-height: 80px;
  background-color: black;
  position: relative;
`;

export const AbsoluteCenterUI = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TakeBtnUI = styled.div`
  height: 70%;
  aspect-ratio: 1/1;
  margin: 0 auto;
  border-radius: 100%;
  border: white 3px solid;
`;
