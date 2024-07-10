import { useEffect, useRef } from "react";
import school from "./assets/school.webp";
import {
  Child1ImgUI,
  Child2ImgUI,
  Child3ImgUI,
  EnteringSchoolUI,
  GrassImgUI,
  SchoolImgUI,
  SchoolImgWrapperUI,
  SchoolSignUI,
  SmokeLtWrapperUI,
} from "./styles";
import Clouds from "./Clouds";
import grass from "./assets/grass.webp";
import child1 from "./assets/child1.webp";
import child2 from "./assets/child2.webp";
import child3 from "./assets/child3.webp";
import smoke from "./assets/smoke_animation.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Player } from "@lottiefiles/react-lottie-player";

const EnteringSchool = () => {
  const ref = useRef();
  const schoolRef = useRef();
  const cloudsRef = useRef();
  const child1Ref = useRef();
  const child2Ref = useRef();
  const child3Ref = useRef();
  const smokeLtRef = useRef();

  useEffect(() => {
    const wholeTimeline = gsap.timeline();

    const childrenGoDownTimline = gsap.timeline();
    childrenGoDownTimline
      .to(child1Ref.current, {
        top: "69%",
        left: "auto",
        right: "auto",
        scale: 0.5,
      })
      .to(child2Ref.current, {
        top: "69%",
        left: "auto",
        right: "auto",
        scale: 0.5,
      })
      .to(child3Ref.current, {
        top: "69%",
        left: "auto",
        right: "auto",
        scale: 0.5,
      });

    const schoolProcessingTimeline = gsap.timeline();
    schoolProcessingTimeline
      .from(schoolRef.current, {
        rotateY: "0deg",
        rotateZ: "0deg",
      })
      .to(schoolRef.current, {
        rotateY: "80deg",
        rotateZ: "30deg",
        scale: 1.4,
        ease: "bounce.inOut",
      })
      .to(schoolRef.current, {
        rotateY: "0deg",
        rotateZ: "0deg",
        scale: 1,
      })
      .to(schoolRef.current, {
        rotateY: "-80deg",
        rotateZ: "-30deg",
        scale: 1.4,
        ease: "bounce.inOut",
        onComplete: () => smokeLtRef.current.play(),
      })
      .to(schoolRef.current, {
        scale: 1,
        rotateY: "0deg",
        rotateZ: "0deg",
      });
    // .repeat(1);

    wholeTimeline
      .add(childrenGoDownTimline)
      .add(schoolProcessingTimeline)
      .to(schoolRef.current, {
        scale: 12,
        marginLeft: "20%",
        marginBottom: "180%",
      });

    ScrollTrigger.create({
      trigger: ref.current,
      start: "top top",
      end: "+=300%",
      scrub: 1.3,
      anticipatePin: 1,
      pin: true,
      // pinSpacing: false,
      animation: wholeTimeline,
    });
  }, []);

  return (
    <EnteringSchoolUI ref={ref}>
      <Clouds ref={cloudsRef} />
      <Child1ImgUI ref={child1Ref} src={child1} />
      <Child2ImgUI ref={child2Ref} src={child2} />
      <Child3ImgUI ref={child3Ref} src={child3} />
      <SchoolImgWrapperUI>
        <SmokeLtWrapperUI>
          <Player src={smoke} ref={smokeLtRef} autoplay={false} />
        </SmokeLtWrapperUI>
        <SchoolImgUI ref={schoolRef} src={school} />
        <SchoolSignUI>SCHOOL</SchoolSignUI>
      </SchoolImgWrapperUI>
      <GrassImgUI src={grass} />
    </EnteringSchoolUI>
  );
};

export default EnteringSchool;
