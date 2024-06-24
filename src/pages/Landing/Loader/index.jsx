import top from "./assets/top.webp";
import centerlogo from "./assets/center_logo.webp";
import play from "./assets/play.webp";
import PublicBizAssets from "../../../global/public-biz-assets";

import {
  BottomImgUI,
  CenterDivUI,
  CenterLogoImgUI,
  FooterImgUI,
  PageUI,
  PlayBtnUI,
  StarsImgUI,
  TopImgUI,
} from "./styles";
import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import ProgressBar from "../../../shared_components/ProgressBar";

const LandingLoader = ({ onComplete }) => {
  const [show, setShow] = useState(true);
  const { progress } = useProgress();

  const logoRef = useRef();
  const loaderRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();
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
      <StarsImgUI src={PublicBizAssets.background} />
      <BottomImgUI src={PublicBizAssets.bottom} ref={bottomRef} />
      <CenterDivUI>
        <CenterLogoImgUI src={centerlogo} ref={logoRef} />
        <ProgressBar
          progress={progress}
          onComplete={() => {
            setPlayBtn(true);
          }}
        />
        {playBtn && <PlayBtnUI src={play} onClick={playBtnClick} />}
      </CenterDivUI>
      <FooterImgUI src={PublicBizAssets.footer} />
    </PageUI>
  );
};

export default LandingLoader;
