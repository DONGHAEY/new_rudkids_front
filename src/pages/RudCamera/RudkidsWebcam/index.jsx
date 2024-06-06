import { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { onFaceResults, onHandResults } from "./utils/onResults";
import { drawCameraScene } from "./utils/draw";
import _mediapipeHands from "@mediapipe/hands";
import _mediapipeFaceMesh from "@mediapipe/face_mesh";
import _mediapipeCameraUtils from "@mediapipe/camera_utils";

const { Hands } = _mediapipeHands;
const { FaceMesh } = _mediapipeFaceMesh;
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
      canvasCtx.restore();
    }
  };

  useEffect(() => {
    // const hands = new Hands({
    //   locateFile: (file) => {
    //     return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    //   },
    // });
    // const face = new FaceMesh({
    //   locateFile: (file) => {
    //     return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
    //   },
    // });

    // hands.setOptions({
    //   maxNumHands: 2,
    //   modelComplexity: 1,
    //   minDetectionConfidence: 0.5,
    //   minTrackingConfidence: 0.5,
    // });
    // face.setOptions({
    //   maxNumFaces: 2,
    //   selfieMode: false,
    // });

    if (webcamRef.current) {
      const camera = new Camera(webcamRef.current.video ?? null, {
        onFrame: onFrameHandler,
        width: canvasSize.width,
        height: canvasSize.height,
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
