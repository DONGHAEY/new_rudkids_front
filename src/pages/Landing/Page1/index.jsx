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
} from "./styles";
import logo from "./assets/logo.webp";
import getIn from "./assets/get_in.webp";
import rudkidsOnly from "./assets/rudkids_only.webp";
import fucChild from "./assets/fuc_child.webp";
import Scene from "./Scene";
import starsBack from "./assets/star_background.webp";
import Marquee from "react-fast-marquee";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page1 = () => {
  const firstRef = useRef();

  const logoRef = useRef();
  const getInRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      logoRef.current,
      { width: "55%", marginTop: "10%" },
      {
        marginTop: "2%",
        marginLeft: "-50%",
        width: "38%",
        scrollTrigger: {
          trigger: firstRef.current,
          scrub: true,
          start: "top top",
          end: "center top",
          endTrigger: firstRef.current,
          invalidateOnRefresh: true,
        },
      }
    );
    gsap.fromTo(
      getInRef.current,
      {
        top: "73%",
        width: "80%",
      },
      {
        top: "-3%",
        width: "43%",
        right: "3%",
        scrollTrigger: {
          trigger: firstRef.current,
          scrub: true,
          start: "top top",
          end: "center top",
          endTrigger: firstRef.current,
          invalidateOnRefresh: true,
        },
      }
    );
  }, []);
  //

  return (
    <>
      <Page1UI ref={firstRef}>
        <RollingMessagesUI>
          <Marquee>
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
        <LogoWrapperUI>
          <LogoImgUI src={logo} ref={logoRef} />
        </LogoWrapperUI>
        <TopStickyUI>
          <GetInUI ref={getInRef} src={getIn} />
        </TopStickyUI>
        <BackImgUI src={starsBack} />
      </Page1UI>
    </>
  );
};

export default Page1;
