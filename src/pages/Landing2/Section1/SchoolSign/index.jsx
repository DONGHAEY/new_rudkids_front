import { useEffect, useRef } from "react";
import schoolSign from "./assets/school_sign.webp";

import gsap from "gsap";
const SchoolSign = () => {
  const schoolSignRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: schoolSignRef.current,
        start: "center center+100%",
        end: "center center",
        scrub: 1.8,
        // markers: true,
      },
    });
    timeline.fromTo(
      schoolSignRef.current,
      {
        transform: "perspective(400px) rotateX(90deg)",
      },
      {
        transform: "perspective(400px) rotateX(0deg)",
      }
    );
  }, []);

  return <img ref={schoolSignRef} src={schoolSign} width="50%" />;
};

export default SchoolSign;
