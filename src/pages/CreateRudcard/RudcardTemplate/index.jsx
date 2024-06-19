import moment from "moment";
import cardSrc from "./assets/card_form.svg";
import "./fonts.css";
import { useEffect, useRef } from "react";

const RudcardTemplate = ({
  name,
  birth,
  description,
  order,
  profileImgUrl,
  qrImgUrl,
  onLoad,
}) => {
  const canvasRef = useRef();

  const LoadImg = (url, onLoadCallback) => {
    const img = new Image();
    img.src = url;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      onLoadCallback(img);
    };
  };

  function drawTextBox(ctx, text, x, y, fieldWidth, spacing) {
    var line = "";
    var fontSize = parseFloat(ctx.font);
    var currentY = y;
    ctx.textBaseline = "top";
    for (var i = 0; i < text.length; i++) {
      var tempLine = line + text[i];
      var tempWidth = ctx.measureText(tempLine).width;
      if (tempWidth < fieldWidth && text[i] != "\n") {
        line = tempLine;
      } else {
        ctx.fillText(line, x, currentY);
        if (text[i] != "\n") line = text[i];
        else line = "";
        currentY += fontSize * spacing;
      }
    }
    ctx.fillText(line, x, currentY);
    // ctx.rect(x, y, fieldWidth, currentY - y + fontSize * spacing);
    ctx.stroke();
  }

  const drawCardTemplate = (canvas, callback) => {
    LoadImg(cardSrc, (cardImg) => {
      const ctx = canvas.getContext("2d");
      const dpi = 4;
      canvas.width = 1000;
      ctx.scale(dpi, dpi); // 컨텍스트에도 스케일을 적용하여 고해상도 그리기
      const scale = canvas.width / cardImg.width;
      canvas.height = cardImg.height * scale;
      // canvas.height = canvas.height;
      // const canvasHeight = canvas.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(cardImg, 0, 0, canvas.width, canvas.height);
      callback();
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    drawCardTemplate(canvas, () => {});
  }, [cardSrc]);

  useEffect(() => {
    const canvas = canvasRef.current;
    drawCardTemplate(canvas, () => {
      const ctx0 = canvas.getContext("2d");
      LoadImg(profileImgUrl, (profileImg) => {
        ctx0.objectFit = "cover";
        ctx0.drawImage(profileImg, 105, 120, 275, 275);
      });
      const ctx1 = canvas.getContext("2d");
      ctx1.font = "40px CardNameFont";
      ctx1.fillStyle = "white";
      ctx1.textAlign = "center";
      ctx1.fillText(name, 625, 147);
      const ctx2 = canvas.getContext("2d");
      ctx2.font = "55px CardNameFont";
      ctx2.fillStyle = "white";
      ctx2.textAlign = "center";
      ctx2.fillText(
        `${birth?.year ?? ""}.${birth?.month ?? ""}.${birth?.date ?? ""}`,
        690,
        195
      );
      const ctx3 = canvas.getContext("2d");
      ctx3.font = "25px CardDescription";
      ctx3.textAlign = "left";
      ctx3.fillStyle = "white";
      drawTextBox(ctx3, description, 415, 220, 480, 1);
      const ctx4 = canvas.getContext("2d");
      ctx4.font = "20px CardDate";
      ctx4.fillStyle = "rgba(239, 74, 76, 1)";
      ctx4.fillText(moment().format("DD MMM YY"), 438, 336);
      const ctx5 = canvas.getContext("2d");
      ctx5.font = "20px CardDate";
      ctx5.fillStyle = "rgba(239, 74, 76, 1)";
      ctx5.fillText(moment().add("3", "M").format("DD MMM YY"), 643, 336);
      const ctx6 = canvas.getContext("2d");
      LoadImg(qrImgUrl, (qrImg) => {
        ctx6.drawImage(qrImg, 798, 435, 85, 85);
      });
      const ctx7 = canvas.getContext("2d");
      ctx7.font = "40px CardOrder";
      ctx7.fillStyle = "white";
      ctx7.fillText(`No.${order ?? ""}`, 340, 453);
      const ctx8 = canvas.getContext("2d");
      ctx8.font = "70px CardOrder";
      ctx8.fillStyle = "white";
      ctx8.textAlign = "center";
      ctx8.fillText(order, 850, 95);
    });
  }, [name, Object.values(birth), description, qrImgUrl, profileImgUrl, order]);

  useEffect(() => {
    onLoad(canvasRef);
  }, []);

  return (
    <canvas
      style={{
        width: "100%",
      }}
      ref={canvasRef}
    />
  );
};

export default RudcardTemplate;
