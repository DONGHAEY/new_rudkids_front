import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { css } from "@emotion/css";
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { HAND_CONNECTIONS, Hands } from "@mediapipe/hands";
import { drawCameraScene, drawSquare } from "./utils/drawCanvas";
import { useWindowSize } from "../../../hooks/useWindowSize";
import styled from "styled-components";

export const HandMotion = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const resultsRef = useRef(null);
  const downloadRef = useRef(null);

  const windowSize = useWindowSize();
  const [canvasSize, setCanvasSize] = useState({
    width: 0,
    height: 0,
  });

  const takePhotoHandler = () => {
    if (downloadRef.current && canvasRef.current) {
      const href = String(canvasRef.current.toDataURL("image/jpeg"));
      downloadRef.current.href = href;
      downloadRef.current.download = "good.jpg";
      downloadRef.current?.click();
    }
  };

  useEffect(() => {
    // 카메라 정방형 모드 //
    const width = windowSize.width <= 400 ? windowSize.width : 400;
    let canvasWidth = width - 50;
    let canvasHeight = width;
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
        lineWidth: 4,
      });
      drawLandmarks(canvasCtx, landmarks, {
        color: "#ff0000",
        lineWidth: 5,
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
      <HandMotionWrapperUI>
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
          <ButtonUI onClick={takePhotoHandler}>
            <img
              style={{
                width: "60%",
                height: "60%",
                borderRadius: "100%",
              }}
              src="https://i.namu.wiki/i/zMbgxQWR9-Sx80ySy1A68XJ6olavu1RPRCM2oqdEstTSaRfFYG7fB3rKuR5MTg8spyRztIC_klrVZS1VHGXmFg.webp"
            />
          </ButtonUI>
        </SideBottomWrapperUI>
        <Webcam
          audio={false}
          style={{ display: "none" }}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={canvasSize.width}
          height={canvasSize.height}
          screenshotQuality={1}
          mirrored={false}
          videoConstraints={{
            facingMode: "user",
          }}
        />
        <a ref={downloadRef} />
      </HandMotionWrapperUI>
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

const HandMotionWrapperUI = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  gap: 25px;
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
