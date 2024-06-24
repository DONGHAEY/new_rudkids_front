import { Suspense, useEffect, useRef } from "react";
import LandingLoader from "./Loader";
import { PageUI, FooterImgUI, FooterUI, FucChildUI } from "./styles";
import { useBodyBackground } from "../../hooks/useBodyBackground";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import landinigMp3 from "./assets/landing.mp3";
import { GetInUI, LogoImgUI, ScrollDownUI, TopFixedUI } from "./Page1/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "./assets/logo.webp";
import scrollDown from "./assets/scroll_down.webp";
import fucChild from "./assets/fuc_child.webp";
import getIn from "./assets/get_in.webp";
import { useNavigate } from "react-router-dom";
import PublicBizAssets from "../../global/public-biz-assets";

const LandingPage = () => {
  //
  const landingSnd = new Audio(landinigMp3);

  const loadCompleteHandler = () => {
    landingSnd.play();
    window.scrollTo(0, 0);
  };

  useBodyBackground("rgba(255, 212, 0, 1)");

  const navigate = useNavigate();
  const scrollDownRef = useRef();
  const logoRef = useRef();
  const getInRef = useRef();
  const fucChildRef = useRef();
  const footerImgRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".page1",
          scrub: true,
          start: "top top",
          end: "bottom top",
          pin: true,
          invalidateOnRefresh: true,
        },
      })
      .fromTo(
        ".page1",
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
      })
      .to(".page2", {
        opacity: 1,
      });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        endTrigger: ".page3",
        scrub: true,
        start: "top bottom",
        end: "top top",
        // markers: true,
        invalidateOnRefresh: true,
      },
    });

    t2.fromTo(
      logoRef.current,
      { width: "60%", marginLeft: 0, marginTop: "5%" },
      {
        marginTop: "0%",
        marginLeft: "-50%",
        width: "40%",
      }
    )
      .fromTo(
        getInRef.current,
        {
          left: "100%",
        },
        {
          left: "48%",
        },
        "<"
      )
      .to(logoRef.current, { marginLeft: 0, width: "60%", delay: 2 })
      .to(
        getInRef.current,
        {
          left: "100%",
        },
        "<"
      );
  }, []);

  return (
    <Suspense fallback={<LandingLoader />}>
      <LandingLoader onComplete={loadCompleteHandler} />
      <PageUI>
        <Page1 />
        <Page2 />
        <Page3 />
        <TopFixedUI>
          <LogoImgUI src={logo} ref={logoRef} />
          <GetInUI
            src={getIn}
            ref={getInRef}
            onClick={() => navigate("/login")}
          >
            <img src={getIn} width="100%" />
          </GetInUI>
        </TopFixedUI>
        <ScrollDownUI ref={scrollDownRef}>
          <img height="100%" src={scrollDown} />
        </ScrollDownUI>
        <FooterUI>
          <FucChildUI src={fucChild} ref={fucChildRef} />
          <FooterImgUI ref={footerImgRef} src={PublicBizAssets.footer} />
        </FooterUI>
      </PageUI>
    </Suspense>
  );
};

export default LandingPage;
