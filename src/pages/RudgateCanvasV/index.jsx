import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";

const RudgateCanvasVPage = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = webcamRef.current.video;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    //
    const drawVideo = () => {
      if (video.readyState === 4) {
        console.log("working...");
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const videoAspect = videoWidth / videoHeight;
        const canvasAspect = canvasWidth / canvasHeight;
        let drawWidth, drawHeight, offsetX, offsetY;
        if (videoAspect > canvasAspect) {
          drawHeight = canvasHeight;
          drawWidth = videoWidth * (canvasHeight / videoHeight);
          offsetX = (canvasWidth - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = canvasWidth;
          drawHeight = videoHeight * (canvasWidth / videoWidth);
          offsetX = 0;
          offsetY = (canvasHeight - drawHeight) / 2;
        }
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(video, offsetX, offsetY, drawWidth, drawHeight);
      }
    };
    const interval = setInterval(drawVideo, 1000 / 30); //30fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <Webcam
        style={{
          position: "absolute",
          width: "1%",
          height: "1%",
          zIndex: -1,
          opacity: 0,
        }}
        audio={false}
        ref={webcamRef}
      />
    </div>
  );
};

export default RudgateCanvasVPage;
