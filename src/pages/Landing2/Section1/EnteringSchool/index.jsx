import { useEffect, useRef } from "react";
import school from "./assets/school.webp";
import {
  Child1ImgUI,
  Child2ImgUI,
  Child3ImgUI,
  EnteringSchoolUI,
  SchoolImgUI,
} from "./styles";
import Clouds from "./Clouds";
import child1 from "./assets/child1.webp";
import child2 from "./assets/child2.webp";
import child3 from "./assets/child3.webp";
import gsap from "gsap";

const EnteringSchool = () => {
  const ref = useRef();

  const child1Ref = useRef();
  const child2Ref = useRef();
  const child3Ref = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "20% top",
        markers: true,
        scrub: 1.6,
        // pin: true,
      },
    });
    tl.fromTo(
      child1Ref.current,
      { top: "5%" },
      {
        top: "78%",
        left: "auto",
        right: "auto",
      }
    )
      .fromTo(
        child2Ref.current,
        { top: "5%" },
        {
          top: "78%",
          left: "auto",
          right: "auto",
        }
      )
      .fromTo(
        child3Ref.current,
        { top: "5%" },
        {
          top: "78%",
          left: "auto",
          right: "auto",
        }
      );
  }, []);

  return (
    <EnteringSchoolUI ref={ref}>
      <Clouds />
      <Child1ImgUI ref={child1Ref} src={child1} />
      <Child2ImgUI ref={child2Ref} src={child2} />
      <Child3ImgUI ref={child3Ref} src={child3} />
      <SchoolImgUI src={school} />
    </EnteringSchoolUI>
  );
};

export default EnteringSchool;
