import gsap from "gsap";
import { useEffect, useRef } from "react";

export const ProgressBar = ({ percentage }) => {
  const progressRef = useRef(null);
  useEffect(() => {
    gsap.to(progressRef.current, {
      width: `${percentage}%`,
    });
  }, [percentage]);

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "13px",
        width: "50%",
        border: "#D6D6D6 solid 1px",
        borderRadius: "30px",
      }}
    >
      <div
        ref={progressRef}
        style={{
          backgroundColor: "#24FF00",
          height: "100%",
          width: 0,
          borderRadius: "30px",
        }}
      ></div>
    </div>
  );
};
