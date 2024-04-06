import styled from "styled-components";
import img1Src from "./assets/1.png";
import img2Src from "./assets/2.png";
import img3Src from "./assets/3.png";

const Page0 = ({ isRender }) => {
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
          width: "100%",
          height: "100%",
          backgroundColor: "#1B3E99",
          zIndex: -2,
        }}
      />
      <img
        src={img3Src}
        style={{
          position: "absolute",
          zIndex: 1,
          width: "70px",
          top: "50%",
          right: "15%",
        }}
      />
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "95%",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <img
          src={"/assets/images/rudkids_logo.webp"}
          style={{ height: "8%", maxWidth: "100%" }}
        />
        <img
          style={{
            maxWidth: "80%",
            height: "30%",
            zIndex: 1,
          }}
          src={img1Src}
          alt="1.png"
        />
        <img
          style={{
            maxWidth: "100%",
            height: "40%",
            zIndex: -1,
          }}
          src={img2Src}
          alt="2.png"
        />
      </div>
    </div>
  );
};

export default Page0;
