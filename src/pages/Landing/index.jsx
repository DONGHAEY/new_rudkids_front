import { Suspense, useEffect, useRef, useState } from "react";
import LandingLoader from "./Loader";
import {
  PageUI,
  FooterImgUI,
  FooterUI,
  FucChildUI,
  LogoImgUI,
  ScrollDownUI,
  TopFixedUI,
} from "./styles";
import { useBodyBackground } from "../../hooks/useBodyBackground";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import landinigMp3 from "./assets/landing.mp3";
import gsap from "gsap";
import logo from "./assets/logo.webp";
import scrollDown from "./assets/scroll_down.webp";
import fucChild from "./assets/fuc_child.webp";
import { useNavigate } from "react-router-dom";
import PublicBizAssets from "../../global/public-biz-assets";
import useUserQuery from "../../queries/user/useUserQuery";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GetInButton from "./GetInButton";

const LandingPage = () => {
  const { data: optionalUserData } = useUserQuery(null, true);
  const landingSnd = new Audio(landinigMp3);

  const loadCompleteHandler = () => {
    landingSnd.play();
    landingSnd.onended = () => {
      landingSnd.play();
    };
  };

  useBodyBackground("rgba(255, 212, 0, 1)");

  const navigate = useNavigate();

  const scrollDownRef = useRef();
  const logoRef = useRef();
  const getInRef = useRef();
  const fucChildRef = useRef();
  const footerImgRef = useRef();

  const getInClickHandler = async () => {
    if (optionalUserData) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  const topSectionTimline = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        endTrigger: ".page3",
        scrub: 2,
        start: "top bottom",
        end: "top top",
        invalidateOnRefresh: true,
      },
    });
    tl.fromTo(
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
  };

  const pageScrollOpacityTimeline = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1",
        scrub: 2,
        start: "top top",
        end: "bottom top",
        pin: true,
        invalidateOnRefresh: true,
      },
    });
    tl.fromTo(
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
      .to(
        scrollDownRef.current,
        {
          opacity: 0,
          scale: 0,
        },
        "<"
      )
      .to(
        ".page2",
        {
          opacity: 1,
        },
        "<"
      );
  };

  const getInProgress = () => {
    ScrollTrigger.create({
      trigger: ".container",
      scrub: true,
      endTrigger: ".page3",
      start: "top top",
      end: "end end",
      onUpdate: (self) => setProgress(self.progress * 100),
    });
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    topSectionTimline();
    pageScrollOpacityTimeline();
    getInProgress();
    return () => {
      landingSnd.pause();
    };
  }, []);

  return (
    <Suspense fallback={<LandingLoader isFallback />}>
      <LandingLoader onComplete={loadCompleteHandler} isFallback={false} />
      <PageUI className="container">
        <Page1 />
        <Page2 />
        <Page3 />
        <TopFixedUI>
          <LogoImgUI src={logo} ref={logoRef} />
          <GetInButton
            ref={getInRef}
            onClick={getInClickHandler}
            progress={progress}
          />
        </TopFixedUI>
        <ScrollDownUI ref={scrollDownRef} src={scrollDown} />
        <FooterUI>
          <FucChildUI ref={fucChildRef} src={fucChild} />
          <FooterImgUI ref={footerImgRef} src={PublicBizAssets.footer} />
        </FooterUI>
      </PageUI>
    </Suspense>
  );
};

export default LandingPage;
