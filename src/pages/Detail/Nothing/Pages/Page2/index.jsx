import styled from "styled-components";
import image1Src from "./assets/1.png";
import image2Src from "./assets/2.png";

const Page2 = ({ isRender }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      {/* 배경색 */}
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -3,
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <img
          src={image1Src}
          style={{
            position: "absolute",
            top: 0,
            height: "45%",
            zIndex: -1,
          }}
        />
        <img
          src={image2Src}
          style={{
            position: "absolute",
            bottom: "10%",
            height: "45%",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
};

export default Page2;
