import gsap from "gsap";
import { useEffect, useRef } from "react";
import {
  BotomSectionUI,
  CanvasUI,
  GetInUI,
  LogoImgUI,
  LogoWrapperUI,
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
import Marquee from "react-fast-marquee";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "../../../hooks/useWindowSize";

const Page1 = () => {
  const windowSize = useWindowSize();
  const firstRef = useRef();
  const logoRef = useRef();
  const getInRef = useRef();
  const scrollDownRef = useRef();

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
      { width: "55%", marginTop: "15%" },
      {
        marginTop: "2%",
        marginLeft: "-50%",
        width: "38%",
      }
    )
      .fromTo(
        getInRef.current,
        {
          top: "78%",
          width: "80%",
        },
        {
          top: "2%",
          width: "43%",
          right: "3%",
        },
        "<"
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
            <p>No BOARING ADULTS</p>
            <p>WE ARE RUDKIDS</p>
            <p>No BOARING ADULTS</p>
            <p>WE ARE RUDKIDS</p>
          </Marquee>
        </RollingMessagesUI>
        <MiddleSectionUI>
          <CanvasUI>
            <Scene />
          </CanvasUI>
          <CanvasDragBlocker />
        </MiddleSectionUI>
        <TopSectionUI>
          <RudkidsOnlyImgUI src={rudkidsOnly} />
        </TopSectionUI>
        <BotomSectionUI>
          <img width="50%" src={fucChild} />
        </BotomSectionUI>
        <BackImgUI src={starsBack} />
      </Page1UI>
      <LogoWrapperUI>
        <LogoImgUI src={logo} ref={logoRef} />
      </LogoWrapperUI>
      <TopStickyUI>
        <GetInUI ref={getInRef} src={getIn} />
      </TopStickyUI>
      <ScrollDownUI ref={scrollDownRef}>
        <img height="100%" src={scrollDown} />
      </ScrollDownUI>
    </>
  );
};

export default Page1;
