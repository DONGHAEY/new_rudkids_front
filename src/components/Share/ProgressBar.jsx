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
        width: "70%",
        border: "#D6D6D6 solid 2px",
        borderRadius: "30px",
      }}
    >
      <div
        ref={progressRef}
        style={{
          backgroundColor: "#36B44C",
          height: "100%",
          width: 0,
          borderRadius: "30px",
        }}
      ></div>
    </div>
  );
};
