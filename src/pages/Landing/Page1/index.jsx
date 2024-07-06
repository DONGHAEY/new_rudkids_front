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
  CanvasDragBlocker,
  BackImgUI,
} from "./styles";
import rudkidsOnly from "./assets/rudkids_only.webp";
import Scene from "./Scene";
import starsBack from "./assets/star_background.webp";
import star from "./assets/star.webp";
import Marquee from "react-fast-marquee";
import { useWindowSize } from "../../../hooks/useWindowSize";

const Page1 = () => {
  const windowSize = useWindowSize();

  return (
    <Page1UI
      className="page1"
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
        <CanvasUI>
          <Scene />
        </CanvasUI>
        <CanvasDragBlocker />
      </MiddleSectionUI>
      <RudkidsOnlyImgUI src={rudkidsOnly} />
      <BackImgUI src={starsBack} />
    </Page1UI>
  );
};

export default Page1;
