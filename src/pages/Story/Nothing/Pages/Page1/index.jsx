import styled from "styled-components";
import backgroundImgSrc from "./assets/background.png";
import image1Src from "./assets/1.png";
import image1_1Src from "./assets/1-1.png";
import image2_Src from "./assets/2.png";

const Page1 = ({ isRender }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 배경사진 */}
      <div
        style={{
          width: "100%",
          height: "100%",
          zIndex: -2,
          position: "absolute",
          backgroundImage: `url(${backgroundImgSrc})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      {/* 배경색 */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -3,
          backgroundColor: "#E2E2E2",
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
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            zIndex: 1,
            position: "relative",
          }}
        >
          <img
            src={image1_1Src}
            style={{
              position: "absolute",
              width: "25%",
              zIndex: 1,
              bottom: "3px",
            }}
          />
          <img
            src={image1Src}
            style={{
              width: "100%",
            }}
          />
        </div>
        <img
          style={{
            width: "100%",
            height: "50%",
            zIndex: 1,
          }}
          src={image2_Src}
        />
      </div>
    </div>
  );
};

export default Page1;
