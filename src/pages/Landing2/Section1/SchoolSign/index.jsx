import { useEffect, useRef } from "react";
import schoolSign from "./assets/school_sign.webp";

import gsap from "gsap";
const SchoolSign = () => {
  const schoolSignRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: schoolSignRef.current,
        start: "top center+10%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });
    timeline.fromTo(
      schoolSignRef.current,
      {
        transform: "perspective(400px) rotateX(90deg)",
      },
      {
        transform: "perspective(400px) rotateX(0deg)",
        duration: 0.7,
      }
    );
  }, []);

  return (
    <img
      style={{
        transformOrigin: "center bottom",
      }}
      ref={schoolSignRef}
      src={schoolSign}
      width="50%"
    />
  );
};

export default SchoolSign;
