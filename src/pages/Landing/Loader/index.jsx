import "../fonts.css";
import stars from "./assets/star_background.webp";
import top from "./assets/top.webp";
import bottom from "./assets/bottom.webp";
import centerlogo from "./assets/center_logo.webp";
import footer from "../assets/footer.webp";
import play from "./assets/play.webp";

import {
  BottomImgUI,
  CenterDivUI,
  CenterLogoImgUI,
  FooterImgUI,
  PageUI,
  PlayBtnUI,
  ProgressBarUI,
  ProgressTxtUI,
  ProgressUI,
  StarsImgUI,
  TopImgUI,
} from "./styles";
import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

const LandingLoader = ({ onComplete }) => {
  const [show, setShow] = useState(true);
  const { progress } = useProgress();

  const logoRef = useRef();
  const loaderRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();
  const progressRef = useRef();
  const [playBtn, setPlayBtn] = useState(false);

  const playBtnClick = () => {
    const tl = gsap.timeline();
    tl.to(
      topRef.current,
      {
        top: `-${topRef.current.clientHeight}px`,
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
      .to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setShow(false);
          onComplete();
        },
      })
      .play(0);
  };

  useEffect(() => {
    if (!progressRef.current) return;
    /////
    if (progress === 100) {
      gsap.to(progressRef.current, {
        width: `100%`,
        duration: 0.3,
        onComplete: () => {
          setPlayBtn(true);
        },
      });
      return;
    }
    gsap.to(progressRef.current, {
      width: `${progress}%`,
      duration: 0.3,
      onComplete: () => {
        if (progress === 100) {
          setPlayBtn(true);
        }
      },
    });
  }, [progress, progressRef.current]);

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
        {playBtn && <PlayBtnUI src={play} onClick={playBtnClick} />}
      </CenterDivUI>
      <FooterImgUI src={footer} />
    </PageUI>
  );
};

export default LandingLoader;
