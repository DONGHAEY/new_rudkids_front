import { Camera } from "@mediapipe/camera_utils";
import { Hands } from "@mediapipe/hands";
import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  isSignaturePose,
  onHandResults,
} from "../RudCamera/RudkidsWebcam/utils/onResults";
import { CanvasUI, PageUI } from "./styles";
// import { ShareToInstagramStories } from "@koodos/share-to-insta-stories";

const RudGatePage = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const onTake = async () => {
    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });
    hands.onResults((results) => {
      for (const landmarks of results?.multiHandLandmarks) {
        if (isSignaturePose(landmarks)) {
          alert("통과됨");
          return;
        } //
        alert("통과안됨");
      }
    });
    const image = webcamRef.current?.video;
    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    await hands.send({ image });
  };

  return (
    <PageUI>
      <Webcam
        onClick={onTake}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        audio={false}
        mirrored
        ref={webcamRef}
        width="100%"
        height="100%"
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
