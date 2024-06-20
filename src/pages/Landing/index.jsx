import { Suspense } from "react";
import LandingLoader from "./Loader";
import starsBack from "./assets/star_background.webp";
import {
  BackImgUI,
  BotomSectionUI,
  FooterImgUI,
  GetInUI,
  LogoImgUI,
  MiddleSectionUI,
  PageUI,
  RollingMessagesUI,
  RudkidsOnlyImgUI,
  TopSectionUI,
} from "./styles";
import logo from "./assets/logo.webp";
import rudkidsOnly from "./assets/rudkids_only.webp";
import footer from "./assets/footer.webp";
import fucChild from "./assets/fuc_child.webp";
import getIn from "./assets/get_in.webp";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { useBodyBackground } from "../../hooks/useBodyBackground";
import { useWindowSize } from "../../hooks/useWindowSize";
import Marquee from "react-fast-marquee";
const LandingPage = () => {
  const size = useWindowSize();
  useBodyBackground("rgba(255, 212, 0, 1)");

  return (
    <Suspense fallback={<LandingLoader />}>
      <LandingLoader />
      <BackImgUI src={starsBack} />
      <PageUI>
        <div
          style={{
            height: size.height - 100,
            width: "100%",
            position: "relative",
          }}
        >
          <RollingMessagesUI>
            <Marquee>
              <p>No BOARING ADULTS WE ARE RUDKIDS</p>
              <p>No BOARING ADULTS WE ARE RUDKIDS</p>
              <p>No BOARING ADULTS WE ARE RUDKIDS</p>
            </Marquee>
          </RollingMessagesUI>
          <MiddleSectionUI>
            <Canvas
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Scene />
            </Canvas>
          </MiddleSectionUI>
          <TopSectionUI>
            <LogoImgUI src={logo} />
            <RudkidsOnlyImgUI src={rudkidsOnly} />
          </TopSectionUI>
          <BotomSectionUI>
            <img width="50%" src={fucChild} />
          </BotomSectionUI>
        </div>
        <GetInUI>
          <img src={getIn} width="75%" />
        </GetInUI>
        <div>
          {new Array(350).fill(null).map((d, idx) => {
            return (
              <p key={idx}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            );
          })}
        </div>
        <FooterImgUI src={footer} />
      </PageUI>
    </Suspense>
  );
};

export default LandingPage;
