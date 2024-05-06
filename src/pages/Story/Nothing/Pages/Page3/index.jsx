import styled from "styled-components";
import image1Src from "./assets/1.png";
import image2Src from "./assets/2.png";

const Page3 = ({ isRender }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
        }}
      />
      <p
        style={{
          zIndex: 1,
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{
            width: "90%",
            zIndex: 1,
          }}
          src={image1Src}
        />
        <img
          style={{
            width: "100%",
            position: "absolute",
            zIndex: 0,
            bottom: 0,
          }}
          src={image2Src}
        />
      </p>
    </div>
  );
};

export default Page3;
