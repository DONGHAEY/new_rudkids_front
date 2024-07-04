import React, { useState } from "react";
import RudWindow from "../../shared_components/RudWindow";
import cardSrc from "./assets/card_form.webp";
import { useAlert } from "../../hooks/useRudAlert";

// const [dataUri, setDataUri] = useState("");

// const LoadImg = (url, onLoadCallback) => {
//   const img = new Image();
//   img.src = url;
//   img.crossOrigin = "anonymous";
//   img.onload = () => {
//     onLoadCallback(img);
//   };
// };

// const canvas = document.createElement("canvas");

// const drawTest = (callback) => {
//   LoadImg(cardSrc, (cardImg) => {
//     const ctx = canvas.getContext("2d");
//     const dpi = 4;
//     canvas.width = 1000;
//     ctx.scale(dpi, dpi); // 컨텍스트에도 스케일을 적용하여 고해상도 그리기
//     const scale = canvas.width / cardImg.width;
//     canvas.height = cardImg.height * scale;
//     // canvas.height = canvas.height;
//     // const canvasHeight = canvas.height;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(cardImg, 0, 0, canvas.width, canvas.height);
//     const dataURI = canvas.toDataURL("image/webp");

//     setDataUri(dataURI);
//   });
// };

function Temp() {
  // return <LandingLoader />;
  // return <StickTest />;
  // return <ButtonFontTest />;
  // return <StickTest2 />;
  // return <FixedTest1 />;

  const alert = useAlert();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <RudWindow />
      {/* <button onClick={drawTest}>가상캔버스 그려보기</button> */}
      {/* <img src={dataUri} width="80%" /> */}
      <button>test</button>
    </div>
  );
}

export default Temp;
