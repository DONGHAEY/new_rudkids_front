import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { HAND_CONNECTIONS } from "@mediapipe/hands";
import { drawPunch } from "./draw";

export const onHandResults = (canvasRef, results) => {
  const canvasCtx = canvasRef.current?.getContext("2d");
  for (const landmarks of results?.multiHandLandmarks) {
    let color = "#ffffff";
    //fuck you
    if (
      landmarks[11].y > landmarks[12].y && //중지
      landmarks[7].y < landmarks[8].y &&
      landmarks[15].y < landmarks[16].y &&
      landmarks[19].y < landmarks[20].y
    ) {
      if (landmarks[3].x < landmarks[4].x && landmarks[17].x > landmarks[2].x) {
        color = "#ff00ff";
        // console.log("오른손 뻑큐?");
        drawPunch(canvasCtx);
      } else if (
        landmarks[3].x > landmarks[4].x &&
        landmarks[17].x < landmarks[2].x
      ) {
        color = "#ff00ff";
        // console.log("왼손 뻑큐?");
        drawPunch(canvasCtx);
      }
      //fuck you
    }
    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
      color,
      lineWidth: 1,
    });
    drawLandmarks(canvasCtx, landmarks, {
      color: "#ff0000",
      lineWidth: 1,
      radius: 1,
    });
  }
};

export const onFaceResults = (canvasRef, results) => {
  const canvasCtx = canvasRef.current?.getContext("2d");
  for (const landmarks of results?.multiFaceLandmarks) {
    drawLandmarks(canvasCtx, landmarks, {
      color: "#ffffff",
      lineWidth: 0.5,
      radius: 0.5,
    });
  }
};
