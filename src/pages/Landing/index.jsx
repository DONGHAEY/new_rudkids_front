import Header from "../../shared_components/Header";
import {
  BlankUI,
  GrassBackgroundUI,
  LinkButtonUI,
  MainBannerImgUI,
  MainBannerUI,
  PageUI,
  TextGrp,
  Txt1UI,
  Txt2UI,
} from "./styles";
import bannerSrc from "./assets/banner.png";
import { ToyIntroduce } from "./ToyIntroduce";
import { Icon } from "@iconify/react/dist/iconify.js";
import SlidingTape from "./SlidingTape";
import backgroundSrc from "./assets/background.svg";
import ScrollKids from "./ScrollKids";
import { Suspense } from "react";
import Loader from "../../shared_components/Loader";
import TShirtIntroduce from "./TShirtIntroduce";
import { trackClickButton } from "../../shared_analytics";

const LandingPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PageUI>
        <Header isFixed />
        <MainBannerUI>
          <MainBannerImgUI src={bannerSrc} />
        </MainBannerUI>
        <SlidingTape />
        <TextGrp>
          <Txt1UI>Rudkids Toy</Txt1UI>
          <Txt2UI>Rude Kids’ Special Toy!</Txt2UI>
        </TextGrp>
        <ToyIntroduce />
        <LinkButtonUI
          to={"/shop?type=Toy"}
          onClick={() =>
            trackClickButton("shop", {
              type: "Toy",
            })
          }
        >
          Toy
          <Icon icon="ep:right" />
        </LinkButtonUI>
        <SlidingTape />
        <TextGrp>
          <Txt1UI>T-Shirt</Txt1UI>
          <Txt2UI>wearing rudness</Txt2UI>
        </TextGrp>
        <MainBannerUI>
          <GrassBackgroundUI src={backgroundSrc} />
          <ScrollKids />
        </MainBannerUI>
        <TShirtIntroduce />
        <LinkButtonUI
          to={"/shop?type=Colthes"}
          onClick={() =>
            trackClickButton("shop", {
              type: "Colthes",
            })
          }
        >
          T-Shirt
          <Icon icon="ep:right" />
        </LinkButtonUI>
        <SlidingTape />
        <BlankUI />
      </PageUI>
    </Suspense>
  );
};

export default LandingPage;
