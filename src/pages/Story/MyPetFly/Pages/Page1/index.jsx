import background1Src from "../assets/background1.png";
import bottomSrc from "../assets/bottom.png";
import urlSrc from "../assets/url.png";
import grassSrc from "../assets/grass.png";
import girlSrc from "./assets/girl.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Page1 = ({ isRender }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
        }}
        src={background1Src}
      />
      <div
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            marginBottom: "-10px",
          }}
        >
          <img
            src={girlSrc}
            style={{
              position: "absolute",
              width: "80%",
              bottom: 0,
              right: 0,
              zIndex: 5,
            }}
          />
          <img
            src={grassSrc}
            style={{
              zIndex: -2,
              width: "100%",
            }}
          />
        </div>
        <img
          src={bottomSrc}
          style={{
            width: "100%",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <img
          src={urlSrc}
          width="100%"
          style={{
            zIndex: 1,
          }}
        ></img>
      </div>
    </div>
  );
};

export default Page1;
