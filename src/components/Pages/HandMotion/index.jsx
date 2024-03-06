import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { css } from "@emotion/css";
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { HAND_CONNECTIONS, Hands } from "@mediapipe/hands";
import { drawCameraScene, drawSquare } from "./utils/drawCanvas";

export const HandMotion = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const resultsRef = useRef(null);
  const downloadRef = useRef(null);

  const takeAPhoto = () => {
    if (downloadRef.current && canvasRef.current) {
      const href = String(canvasRef.current.toDataURL("image/jpeg"));
      downloadRef.current.href = href;
      downloadRef.current.download = "good.jpg";
      downloadRef.current?.click();
    }
  };

  const onResults = (results) => {
    resultsRef.current = results;
    const canvasCtx = canvasRef.current?.getContext("2d");
    const width = canvasCtx.canvas.width;
    const height = canvasCtx.canvas.height;
    // ctx.save();
    canvasCtx.clearRect(0, 0, width, height);
    // ctx.scale(-1, 1);
    // ctx.translate(-width, 0);

    drawCameraScene(canvasCtx, results.image, width, height);

    for (const landmarks of results?.multiHandLandmarks) {
      drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
        color: "#ffffff",
        lineWidth: 4,
      });
      drawLandmarks(canvasCtx, landmarks, {
        color: "#ff0000",
        lineWidth: 10,
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
    hands.onResults(onResults);

    if (webcamRef.current) {
      const camera = new Camera(webcamRef.current.video ?? null, {
        onFrame: async () => {
          if (webcamRef?.current?.video) {
            await hands.send({ image: webcamRef.current.video });
          }
        },
        width: "100%",
        height: "100%",
      });
      camera.start();
    }
  }, []);

  return (
    <div className={styles.container}>
      <Webcam
        audio={false}
        style={{ visibility: "hidden" }}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          facingMode: "user",
        }}
      />
      <canvas
        width={"100vh"}
        height={"100vw"}
        ref={canvasRef}
        className={styles.canvas}
      />
      <a ref={downloadRef} style={{ display: "none" }} />
    </div>
  );
};
// ==============================================
// styles

const styles = {
  container: css`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  canvas: css`
    position: absolute;
    width: 1280px;
    height: 720px;
    background-color: #fff;
  `,
  buttonContainer: css`
    position: absolute;
    top: 20px;
    left: 20px;
  `,
  button: css`
    color: #fff;
    background-color: #0082cf;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    padding: 10px 10px;
    cursor: pointer;
  `,
};
