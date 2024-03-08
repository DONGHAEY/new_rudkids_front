import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { HAND_CONNECTIONS, Hands } from "@mediapipe/hands";
import { drawCameraScene, drawSquare } from "./utils/drawCanvas";
import { useWindowSize } from "../../../hooks/useWindowSize";
import styled from "styled-components";
import { useScreenshot } from "use-react-screenshot";
import gsap from "gsap";

export const HandMotion = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const resultsRef = useRef(null);
  const screenshotSectionRef = useRef(null);
  const resultScreenshotRef = useRef(null);
  const [screenshotUrl, takeScreenshot] = useScreenshot();
  const [screenShotUrlTmp, setScreenShotUrlTmp] = useState("");

  const getImage = () => takeScreenshot(screenshotSectionRef.current);

  const windowSize = useWindowSize();
  const [canvasSize, setCanvasSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (screenshotUrl) {
      setScreenShotUrlTmp(screenshotUrl);
    }
  }, [screenshotUrl]);

  useEffect(() => {
    (async () => {
      if (resultScreenshotRef.current && screenShotUrlTmp) {
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
      }
    })();
  }, [screenshotUrl, screenShotUrlTmp]);

  useEffect(() => {
    // 카메라 정방형 모드 //
    const width = windowSize.width <= 400 ? windowSize.width : 400;
    let canvasWidth = width - 50;
    let canvasHeight = width - 50;
    setCanvasSize({
      width: canvasWidth,
      height: canvasHeight,
    });
  }, [windowSize.width, windowSize.height, webcamRef.current]);

  const onResults = (results) => {
    resultsRef.current = results;
    const canvasCtx = canvasRef.current?.getContext("2d");
    const canvasWidth = canvasCtx.canvas.width;
    const canvasHeight = canvasCtx.canvas.height;
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawCameraScene(canvasCtx, results.image, canvasWidth, canvasHeight);

    for (const landmarks of results?.multiHandLandmarks) {
      drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
        color: "#ffffff",
        lineWidth: 2,
      });
      drawLandmarks(canvasCtx, landmarks, {
        color: "#ff0000",
        lineWidth: 3,
        radius: 2,
      });
      drawSquare(canvasCtx, landmarks);
    }
    canvasCtx.restore();
  };

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });
    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    if (webcamRef.current) {
      const camera = new Camera(webcamRef.current.video ?? null, {
        onFrame: async () => {
          if (webcamRef.current?.video) {
            await hands.send({ image: webcamRef.current.video });
          }
        },
        width: canvasSize.width,
        height: canvasSize.height,
      });
      hands.onResults(onResults);
      camera.start();
    }
  }, [webcamRef.current]);

  return (
    <CenterWrapperUI>
      <HandMotionWrapperUI ref={screenshotSectionRef}>
        <SideTopWrapperUI>
          <p
            style={{
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            Rudkids
          </p>
          <p
            style={{
              fontSize: "14px",
            }}
          >
            Let me check if you're really a Rudkdis club.
          </p>
        </SideTopWrapperUI>
        <canvas
          style={{
            borderRadius: "20px",
            objectFit: "cover",
          }}
          width={canvasSize.width}
          height={canvasSize.height}
          ref={canvasRef}
        />
        <SideBottomWrapperUI>
          <ButtonUI onClick={getImage}>
            <img
              style={{
                width: "60%",
                height: "60%",
                borderRadius: "100%",
              }}
              src="/camera.webp"
              alt="camera_button_image"
            />
          </ButtonUI>
        </SideBottomWrapperUI>
        {screenShotUrlTmp && (
          <ScreenshotPreviewBlurUI>
            <ScreenshotPreviewWraperUI ref={resultScreenshotRef}>
              <img
                src={screenShotUrlTmp}
                style={{
                  width: "75%",
                }}
              />
              <ShareTabUI>
                <div
                  onClick={async () => {
                    const response = await fetch(screenShotUrlTmp);
                    const blob = await response.blob();
                    const filename = "rudkids_standard.png"; // url 구조에 맞게 수정할 것
                    const metadata = { type: `image/png` };
                    const imageFile = new File([blob], filename, metadata);
                    const data = {
                      files: [imageFile],
                    };

                    try {
                      if (!window.navigator.canShare(data)) {
                        throw new Error("Can't share data.", data);
                      }
                      await window.navigator.share(data);
                    } catch (err) {
                      console.error(err.name, err.message);
                    }
                  }}
                >
                  공유
                </div>
                <div onClick={() => setScreenShotUrlTmp("")}>닫기</div>
              </ShareTabUI>
            </ScreenshotPreviewWraperUI>
          </ScreenshotPreviewBlurUI>
        )}
      </HandMotionWrapperUI>
      <Webcam
        audio={false}
        style={{ display: "none" }}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={canvasSize.width}
        height={canvasSize.height}
        screenshotQuality={1}
        videoConstraints={{
          facingMode: "user",
        }}
      />
    </CenterWrapperUI>
  );
};

const CenterWrapperUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScreenshotPreviewBlurUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  position: absolute;
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
`;

const ScreenshotPreviewWraperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const HandMotionWrapperUI = styled.div`
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

const ButtonUI = styled.div`
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

const SideTopWrapperUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SideBottomWrapperUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ShareTabUI = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
