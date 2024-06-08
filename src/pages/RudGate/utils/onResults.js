import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { HAND_CONNECTIONS } from "@mediapipe/hands";

export const isSignaturePose = (landmarks) => {
  if (landmarks[10].y >= landmarks[12].y) {
    console.log("1");
    return false;
  }
  if (landmarks[14].y >= landmarks[16].y) {
    console.log("2");
    return false;
  }
  if (landmarks[8].y >= landmarks[10].y) {
    console.log("3");
    return false;
  }
  if (landmarks[20].y >= landmarks[14].y) {
    console.log("4");
    return false;
  }
  if (landmarks[8].x >= landmarks[4].x) {
    if (landmarks[4].x <= landmarks[20].x) {
      console.log("5");
      return false;
    }
  }
  if (landmarks[8].x <= landmarks[4].x) {
    if (landmarks[4].x >= landmarks[20].x) {
      console.log("6");
      return false;
    }
  }
  return true;
};

export const isFuckyouPose = (landmarks) => {
  if (
    landmarks[11].y > landmarks[12].y && //중지
    landmarks[7].y < landmarks[8].y &&
    landmarks[15].y < landmarks[16].y &&
    landmarks[19].y < landmarks[20].y
  ) {
    //fuck you
    if (landmarks[3].x < landmarks[4].x && landmarks[17].x > landmarks[2].x) {
      //("오른손 뻑큐?");
      return true;
    } else if (
      landmarks[3].x > landmarks[4].x &&
      landmarks[17].x < landmarks[2].x
    ) {
      //("왼손 뻑큐?");
      return true;
    }
  }
  return false;
};

export const onHandResults = (canvasRef, results) => {
  const canvasCtx = canvasRef.current?.getContext("2d");

  for (const landmarks of results?.multiHandLandmarks) {
    let color = "#ffffff";
    if (isSignaturePose(landmarks)) {
      color = "green";
    } //
    else if (isFuckyouPose(landmarks)) {
      color = "hotpink";
    }

    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
      color,
      lineWidth: 1,
    });
    drawLandmarks(canvasCtx, landmarks, {
      color: color,
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
