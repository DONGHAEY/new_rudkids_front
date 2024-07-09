import { useEffect, useRef } from "react";
import schoolSign from "./assets/school_sign.webp";
import { SchoolSignUI } from "./styles";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

const SchoolSign = () => {
  const schoolSignRef = useRef();

  useEffect(() => {
    const signWakingUpEasing = CustomEase.create(
      "custom",
      "M0,0 C0,0 0.14,0.033 0.185,0.048 0.224,0.061 0.298,0.091 0.335,0.109 0.371,0.127 0.411,0.229 0.445,0.252 0.478,0.276 0.622,0.997 0.652,1.026 0.684,1.058 0.699,1.133 0.727,1.17 0.754,1.207 0.78,1.237 0.822,1.261 0.874,1.29 0.927,1.155 0.959,1.112 1,1.055 1,1 1,1 "
    );

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
        transform: "perspective(1000px) rotateX(90deg)",
      },
      {
        transform: "perspective(1000px) rotateX(0deg)",
        duration: 0.7,
        ease: signWakingUpEasing,
      }
    );
  }, []);

  return <SchoolSignUI ref={schoolSignRef} src={schoolSign} />;
};

export default SchoolSign;
