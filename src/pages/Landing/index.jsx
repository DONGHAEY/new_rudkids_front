import { Suspense, useEffect, useRef } from "react";
import LandingLoader from "./Loader";
import { PageUI, FooterImgUI, FooterUI, FucChildUI } from "./styles";
import footer from "./assets/footer.webp";
import { useBodyBackground } from "../../hooks/useBodyBackground";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import landinigMp3 from "./assets/landing.mp3";
import { LogoImgUI, ScrollDownUI, TopFixedUI } from "./Page1/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "./assets/logo.webp";
import scrollDown from "./assets/scroll_down.webp";
import fucChild from "./assets/fuc_child.webp";

const LandingPage = () => {
  const landingSnd = new Audio(landinigMp3);

  const loadCompleteHandler = () => {
    landingSnd.play();
  };

  useBodyBackground("rgba(255, 212, 0, 1)");

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  //
  const scrollDownRef = useRef();
  const logoRef = useRef();
  const fucChildRef = useRef();
  const footerImgRef = useRef();

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
      .to(
        fucChildRef.current,
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

    gsap.to(fucChildRef.current, {
      bottom: "-300%",
      yoyo: true,
      repeat: -1,
      repeatDelay: 2,
    });
  }, []);

  return (
    <Suspense fallback={<LandingLoader />}>
      <LandingLoader onComplete={loadCompleteHandler} />
      <PageUI>
        <Page1 ref={firstRef} />
        <Page2 ref={secondRef} />
        <Page3 ref={thirdRef} />
        <TopFixedUI>
          <LogoImgUI src={logo} ref={logoRef} />
        </TopFixedUI>
        <ScrollDownUI ref={scrollDownRef}>
          <img height="100%" src={scrollDown} />
        </ScrollDownUI>
        <FooterUI>
          <FucChildUI ref={fucChildRef} src={fucChild} />
          <FooterImgUI ref={footerImgRef} src={footer} />
        </FooterUI>
      </PageUI>
    </Suspense>
  );
};

export default LandingPage;
