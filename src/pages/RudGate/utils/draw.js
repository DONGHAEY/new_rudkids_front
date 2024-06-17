export const drawVideoScene = (canvas, video) => {
  const ctx = canvas.getContext("2d");
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
};
