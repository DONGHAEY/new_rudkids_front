import gsap from "gsap";
import { useEffect, useRef } from "react";
import {
  BotomSectionUI,
  CanvasUI,
  GetInUI,
  LogoImgUI,
  TopFixedUI,
  MiddleSectionUI,
  RollingMessagesUI,
  RudkidsOnlyImgUI,
  Page1UI,
  TopSectionUI,
  TopStickyUI,
  CanvasDragBlocker,
  BackImgUI,
  ScrollDownUI,
} from "./styles";
import logo from "./assets/logo.webp";
import getIn from "./assets/get_in.webp";
import rudkidsOnly from "./assets/rudkids_only.webp";
import fucChild from "./assets/fuc_child.webp";
import Scene from "./Scene";
import starsBack from "./assets/star_background.webp";
import scrollDown from "./assets/scroll_down.webp";
import star from "./assets/star.webp";
import Marquee from "react-fast-marquee";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const windowSize = useWindowSize();
  const firstRef = useRef();
  const logoRef = useRef();
  const scrollDownRef = useRef();
  const fucManRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: firstRef.current,
        scrub: true,
        start: "top top",
        end: "bottom top",
        pin: true,
        invalidateOnRefresh: true,
      },
    });
    //
    tl.fromTo(
      logoRef.current,
      { width: "50%", top: "30%" },
      {
        top: "0%",
        left: "3%",
        width: "40%",
      }
    )
      .fromTo(
        firstRef.current,
        { opacity: 1 },
        {
          opacity: 0,
        },
        "<"
      )
      .to(scrollDownRef.current, {
        opacity: 0,
        scale: 0,
      });
    gsap.to(scrollDownRef.current, {
      marginBottom: "2%",
      yoyo: true,
      repeat: -1,
      ease: "none",
      duration: 1,
    });
    gsap.to(fucManRef.current, {
      bottom: 0,
      scale: 0,
      yoyo: true,
      repeatDelay: 4,
      repeat: -1,
      duration: 1.4,
    });
  }, []);

  return (
    <>
      <Page1UI
        ref={firstRef}
        style={{
          height: windowSize.height,
        }}
      >
        <RollingMessagesUI>
          <Marquee>
            <p>RUDE KIDS ONLY</p>
            <img src={star} height="30px" />
            <p>NO BORING ADULTS</p>
            <img src={star} height="30px" />
            <p>WEIRD PLACE</p>
            <img src={star} height="30px" />
            <p>RUDE KIDS ONLY</p>
            <img src={star} height="30px" />
            <p>NO BORING ADULTS</p>
            <img src={star} height="30px" />
            <p>WEIRD PLACE</p>
          </Marquee>
        </RollingMessagesUI>
        <MiddleSectionUI>
          <CanvasUI shadows={"soft"}>
            <Scene />
          </CanvasUI>
          <CanvasDragBlocker />
        </MiddleSectionUI>
        <RudkidsOnlyImgUI src={rudkidsOnly} />
        <BotomSectionUI ref={fucManRef}>
          <img width="80%" src={fucChild} />
        </BotomSectionUI>
        <BackImgUI src={starsBack} />
      </Page1UI>
      <TopFixedUI>
        <LogoImgUI src={logo} ref={logoRef} />
      </TopFixedUI>
      <ScrollDownUI ref={scrollDownRef}>
        <img height="100%" src={scrollDown} />
      </ScrollDownUI>
    </>
  );
};

export default Page1;
