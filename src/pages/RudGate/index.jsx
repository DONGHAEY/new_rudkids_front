import {
  ButtonImageUI,
  ButtonUI,
  CanvasUI,
  PageUI,
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
import gsap from "gsap";
import Webcam from "react-webcam";
import { Camera } from "@mediapipe/camera_utils";
import { Hands } from "@mediapipe/hands";
import { drawCameraScene } from "../RudCamera/RudkidsWebcam/utils/draw";
import { onHandResults } from "../RudCamera/RudkidsWebcam/utils/onResults";
// import { ShareToInstagramStories } from "@koodos/share-to-insta-stories";

const RudGatePage = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const window = useWindowSize();

  const onFrameHandler = async () => {
    const canvasCtx = canvasRef.current?.getContext("2d");
    const image = webcamRef.current?.video;
    if (image) {
      // Canvas 크기
      const canvasWidth = canvasCtx.canvas.width;
      const canvasHeight = canvasCtx.canvas.height;

      // 카메라 원본 크기
      const originalCameraWidth = webcamRef.current.video?.width;
      const originalCameraHeight = webcamRef.current.video?.height;
      const aspectRatio = originalCameraWidth / originalCameraHeight;
      const newCameraWidth = aspectRatio * canvasHeight;

      let cameraStartX = 0;
      if (newCameraWidth > canvasWidth) {
        cameraStartX = (canvasWidth - newCameraWidth) / 2;
      } else if (newCameraWidth < canvasWidth) {
        cameraStartX = (newCameraWidth - canvasWidth) / 2;
      }

      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);
      // canvasCtx.translate(canvasWidth, 0);
      // canvasCtx.scale(-1, 1);
      canvasCtx.translate(canvasWidth, 0);
      canvasCtx.scale(-1, 1);
      canvasCtx.drawImage(image, cameraStartX, 0, newCameraWidth, canvasHeight);
      canvasCtx.restore();
    }
  };

  const onTake = async () => {
    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });
    hands.onResults((results) => onHandResults(canvasRef, results));
    const image = webcamRef.current?.video;
    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    await hands.send({ image });
  };

  useEffect(() => {
    if (webcamRef.current) {
      const camera = new Camera(webcamRef.current.video ?? null, {
        onFrame: onFrameHandler,
      });
      camera.start();
    }
  }, [webcamRef.current]);

  return (
    <PageUI>
      <CanvasUI width={window.width} height={window.height} ref={canvasRef} />
      <Webcam
        audio={false}
        hidden
        ref={webcamRef}
        width={1280}
        height={720}
        screenshotFormat="image/jpeg"
        screenshotQuality={1}
        videoConstraints={{
          facingMode: "user",
        }}
      />
    </PageUI>
  );
};

export default RudGatePage;
