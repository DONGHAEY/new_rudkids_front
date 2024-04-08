import {
  ButtonImageUI,
  ButtonUI,
  CanvasUI,
  CenterWrapperUI,
  DescriptionUI,
  HandMotionWrapperUI,
  ScreenshotPreviewBlurUI,
  ScreenshotPreviewImgUI,
  ScreenshotPreviewWraperUI,
  ShareTabUI,
  SideBottomWrapperUI,
  SideTopWrapperUI,
} from "./styles";
import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useScreenshot } from "use-react-screenshot";
import cameraIconImgSrc from "./assets/camera.webp";
import gsap from "gsap";
import RudkidsWebcam from "./RudkidsWebcam";

const HandPage = () => {
  const canvasRef = useRef(null);
  const windowSize = useWindowSize();
  const screenshotSectionRef = useRef(null);
  const resultScreenshotRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({
    width: 0,
    height: 0,
  });
  const [screenshotUrl, takeScreenshot] = useScreenshot();
  const [previewImgSrc, setPreviewImgSrc] = useState("");

  const share = async () => {
    const response = await fetch(previewImgSrc);
    const blob = await response.blob();
    const filename = "rudkids_standard.png";
    const metadata = { type: `image/png` };
    const imageFile = new File([blob], filename, metadata);
    const data = {
      files: [imageFile],
    };
    if (!window.navigator.canShare(data)) {
      alert("해당 기기에서는 지원하지 않습니다");
      return;
    }
    await window.navigator.share(data);
  };

  useEffect(() => {
    // 카메라 정방형 모드 //
    const width = windowSize.width <= 400 ? windowSize.width : 400;
    let canvasWidth = width - 50;
    let canvasHeight = width - 50;
    setCanvasSize({
      width: canvasWidth,
      height: canvasHeight,
    });
  }, [windowSize.width, windowSize.height]);

  const takeAPhoto = () => takeScreenshot(screenshotSectionRef.current);
  const openScreenshotPrievew = () => {
    setPreviewImgSrc(screenshotUrl);
  };
  const closeScreenshotPreview = () => {
    setPreviewImgSrc("");
  };

  useEffect(() => {
    if (screenshotUrl) {
      openScreenshotPrievew(screenshotUrl);
    }
  }, [screenshotUrl]);

  useEffect(() => {
    if (!previewImgSrc) return;
    gsap.fromTo(
      resultScreenshotRef.current,
      {
        marginTop: 1000,
        rotationZ: 20,
      },
      {
        marginTop: 0,
        rotationZ: 0,
        duration: 0.8,
      }
    );
  }, [previewImgSrc, resultScreenshotRef.current]);

  return (
    <CenterWrapperUI>
      <HandMotionWrapperUI ref={screenshotSectionRef}>
        <SideTopWrapperUI>
          <img width={"100px"} src={"/Images/rudkids_logo.webp"} />
          <DescriptionUI>
            Let me check if you're really a Rudkdis club.
          </DescriptionUI>
        </SideTopWrapperUI>
        <CanvasUI
          width={canvasSize.width}
          height={canvasSize.height}
          ref={canvasRef}
        />
        <SideBottomWrapperUI>
          <ButtonUI onClick={takeAPhoto}>
            <ButtonImageUI src={cameraIconImgSrc} alt="camera_button_image" />
          </ButtonUI>
        </SideBottomWrapperUI>
        {previewImgSrc && (
          <ScreenshotPreviewWraperUI ref={resultScreenshotRef}>
            <ScreenshotPreviewImgUI src={previewImgSrc} />
            <ShareTabUI>
              <div onClick={share} children="공유" />
              <div onClick={closeScreenshotPreview} children="닫기" />
            </ShareTabUI>
          </ScreenshotPreviewWraperUI>
        )}
        {previewImgSrc && <ScreenshotPreviewBlurUI />}
      </HandMotionWrapperUI>
      <RudkidsWebcam canvasRef={canvasRef} canvasSize={canvasSize} />
    </CenterWrapperUI>
  );
};

export default HandPage;
