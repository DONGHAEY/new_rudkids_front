export const drawCameraScene = (ctx, image, width, height) => {
  // width = ctx.canvas.width;
  // height = ctx.canvas.height;
  ctx.translate(width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(image, 0, 0, width, height);
};

export const drawCircle = (ctx, handLandmarks) => {
  if (
    handLandmarks.length === 2 &&
    handLandmarks[0].length > 8 &&
    handLandmarks[1].length > 8
  ) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const [x1, y1] = [
      handLandmarks[0][8].x * width,
      handLandmarks[0][8].y * height,
    ];
    const [x2, y2] = [
      handLandmarks[1][8].x * width,
      handLandmarks[1][8].y * height,
    ];
    const x = (x1 + x2) / 2;
    const y = (y1 + y2) / 2;
    const r = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) / 2;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.stroke();
  }
};

export const drawSquare = (
  ctx,
  handLandmark
  // squareText?: string
) => {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const HandOfCenter = handLandmark[9];
  const BOX_SIZE = 5;
  const BOX_X = HandOfCenter.x * width - BOX_SIZE / 2;
  const BOX_Y = HandOfCenter.y * height - BOX_SIZE / 2;
  // squareText && ctx.fillText(squareText, BOX_X, BOX_Y);
  // ctx.font = "30pt 맑은고딕";
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.rect(BOX_X, BOX_Y, BOX_SIZE, BOX_SIZE);
  ctx.stroke();
};
