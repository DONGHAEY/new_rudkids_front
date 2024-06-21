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

  const loaderRef = useRef();
  const progressRef = useRef();

  useEffect(() => {
    gsap.to(progressRef.current, {
      width: `${progress}%`,
      duration: 0.5,
    });
    if (progress === 100) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        delay: 2.5,
        onComplete: () => {
          setShow(false);
        },
      });
    }
  }, [progress]);

  if (!show) return null;

  return (
    <PageUI ref={loaderRef}>
      <TopImgUI src={top} />
      <StarsImgUI src={stars} />
      <BottomImgUI src={bottom} />
      <CenterDivUI>
        <CenterLogoImgUI src={centerlogo} />
        <ProgressBarUI>
          <ProgressUI ref={progressRef} />
        </ProgressBarUI>
        <ProgressTxtUI>Loading {progress}%</ProgressTxtUI>
      </CenterDivUI>
    </PageUI>
  );
};

export default LandingLoader;
