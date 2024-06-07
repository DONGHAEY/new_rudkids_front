import { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { onHandResults } from "./utils/onResults";
import { drawCameraScene } from "./utils/draw";
import _mediapipeHands from "@mediapipe/hands";
import _mediapipeFaceMesh from "@mediapipe/face_mesh";
import _mediapipeCameraUtils from "@mediapipe/camera_utils";

const { Hands } = _mediapipeHands;
const { Camera } = _mediapipeCameraUtils;

const RudkidsWebcam = ({ canvasRef, canvasSize }) => {
  const webcamRef = useRef(null);

  const onFrameHandler = async () => {
    const canvasCtx = canvasRef.current?.getContext("2d");
    const image = webcamRef.current?.video;
    if (image) {
      const canvasWidth = canvasCtx.canvas.width;
      const canvasHeight = canvasCtx.canvas.height;
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);
      // canvasCtx.translate(canvasWidth, 0);
      // canvasCtx.scale(-1, 1);
      drawCameraScene(canvasCtx, image, canvasWidth, canvasHeight);
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
  );
};

export default RudkidsWebcam;
