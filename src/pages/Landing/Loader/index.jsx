import "../fonts.css";

import stars from "./assets/star_background.webp";
import top from "./assets/top.webp";
import bottom from "./assets/bottom.webp";
import centerlogo from "./assets/center_logo.webp";
import {
  BottomImgUI,
  CenterDivUI,
  CenterLogoImgUI,
  PageUI,
  ProgressBarUI,
  ProgressTxtUI,
  ProgressUI,
  StarsImgUI,
  TopImgUI,
} from "./styles";
import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

const LandingLoader = () => {
  const [show, setShow] = useState(true);
  const { progress } = useProgress();

  const logoRef = useRef();
  const loaderRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();
  const progressRef = useRef();

  useEffect(() => {
    gsap.to(progressRef.current, {
      width: `${progress}%`,
      duration: 0.5,
    });
    if (progress === 100) {
      const tl = gsap.timeline();
      tl.to(
        topRef.current,
        {
          top: `-${topRef.current.clientHeight}px`,
          delay: 1,
          duration: 1,
        },
        "<"
      )
        .to(
          bottomRef.current,
          {
            bottom: `-${bottomRef.current.clientHeight}px`,
            duration: 1,
          },
          "<"
        )
        .to(
          loaderRef.current,
          {
            opacity: 0,
            duration: 1,
            delay: 2.5,
            onComplete: () => {
              setShow(false);
            },
          },
          "<"
        );
      tl.startTime(0);
    }
  }, [progress]);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      {
        scale: 0.9,
      },
      {
        scale: 1,
        yoyo: true,
        duration: 0.5,
        repeat: -1,
      }
    );
  }, []);

  if (!show) return null;

  return (
    <PageUI ref={loaderRef}>
      <TopImgUI src={top} ref={topRef} />
      <StarsImgUI src={stars} />
      <BottomImgUI src={bottom} ref={bottomRef} />
      <CenterDivUI>
        <CenterLogoImgUI src={centerlogo} ref={logoRef} />
        <ProgressBarUI>
          <ProgressUI ref={progressRef} />
        </ProgressBarUI>
        <ProgressTxtUI>Loading {progress}%</ProgressTxtUI>
      </CenterDivUI>
    </PageUI>
  );
};

export default LandingLoader;
