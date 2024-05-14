import background1Src from "../assets/background1.png";
import img1Src from "./assets/1.png";
import img2Src from "./assets/2.png";
import bottomSrc from "../assets/bottom.png";
import urlSrc from "../assets/url.png";
import grassSrc from "../assets/grass.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Page0 = ({ isRender }) => {
  const kidRef = useRef();

  useEffect(() => {
    if (!isRender) return;
    const timeline = gsap.timeline();
    timeline
      .to(kidRef.current, {
        filter: "invert(100%)",
        duration: 0.5,
      })
      .to(kidRef.current, {
        filter: "invert(0%)",
        duration: 0.6,
        repeat: -1,
      });
  }, [isRender]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          zIndex: -2,
        }}
        src={background1Src}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          zIndex: -1,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={grassSrc}
          style={{
            marginBottom: "-6px",
            width: "100%",
          }}
        />
        <img
          src={bottomSrc}
          style={{
            width: "100%",
          }}
        />
      </div>
      <img
        ref={kidRef}
        style={{
          position: "absolute",
          minWidth: "231px",
          width: "60%",
          zIndex: 2,
          right: 0,
          bottom: "10%",
        }}
        src={img2Src}
        alt="2.png"
      />
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
            zIndex: -1,
          }}
        ></img>
        <img
          style={{
            width: "75%",
            zIndex: 1,
          }}
          src={img1Src}
          alt="1.png"
        />
      </div>
    </div>
  );
};

export default Page0;
