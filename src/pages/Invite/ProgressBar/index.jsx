import { useEffect, useRef } from "react";
import { ProgressBarUI } from "./styles";
import ballImgSrc from "./assets/ball.svg";
import gsap from "gsap";

const ProgressBar = ({ offset }) => {
  useEffect(() => {}, [offset]);

  const progressFillRef = useRef();

  useEffect(() => {
    gsap.to(progressFillRef.current, {
      paddingLeft: `${offset * 100 < 100 ? offset * 100 + 5 : offset * 100}%`,
    });
  }, [offset]);

  return (
    <ProgressBarUI>
      <div
        style={{
          backgroundColor: "#00DD31",
          height: "100%",
          paddingLeft: "30%",
          borderRadius: "125.14px",
          position: "relative",
        }}
        ref={progressFillRef}
      >
        <img
          style={{
            position: "absolute",
            top: "-5px",
            right: "-5px",
          }}
          src={ballImgSrc}
        />
      </div>
    </ProgressBarUI>
  );
};

export default ProgressBar;
