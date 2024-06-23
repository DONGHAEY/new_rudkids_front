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
import bannerSrc from "./assets/banner.webp";
import { ToyIntroduce } from "./ToyIntroduce";
import { Icon } from "@iconify/react/dist/iconify.js";
import SlidingTape from "./SlidingTape";
import backgroundSrc from "./assets/background.webp";
import ScrollKids from "./ScrollKids";
import TShirtIntroduce from "./TShirtIntroduce";
import { trackClickButton } from "../../shared_analytics";
import SymbolLoader from "../../shared_components/SymbolLoader";
import Footer from "../../shared_components/Footer";

const HomePage = () => {
  return (
    <PageUI>
      <Header isFixed />
      <SymbolLoader loading={false} />
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
        to={"/shop?category=Toy"}
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
        to={"/shop?category=Clothes"}
        onClick={() =>
          trackClickButton("shop", {
            type: "Clothes",
          })
        }
      >
        T-Shirt
        <Icon icon="ep:right" />
      </LinkButtonUI>
      <SlidingTape />
      <BlankUI />
      <Footer />
    </PageUI>
  );
};

export default HomePage;