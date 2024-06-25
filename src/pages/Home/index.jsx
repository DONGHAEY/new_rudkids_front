import Header from "../../shared_components/Header";
import {
  LinkButtonUI,
  MainBannerImgUI,
  PageUI,
  SpacerUI,
  TextGrp,
  Txt1UI,
  Txt2UI,
} from "./styles";
import home1Webp from "./assets/home_1.webp";
import home2Webp from "./assets/home_2.webp";
import arrowDownWebp from "./assets/arrow_down.webp";
import instaBtnWebp from "./assets/insta_button.webp";
import { ToyIntroduce } from "./ToyIntroduce";
import { Icon } from "@iconify/react/dist/iconify.js";
import SlidingTape from "./SlidingTape";
import { trackClickButton } from "../../shared_analytics";
import SymbolLoader from "../../shared_components/SymbolLoader";
import Footer from "../../shared_components/Footer";

const HomePage = () => {
  const ShopBtn = ({ category, name }) => {
    return (
      <LinkButtonUI
        to={"/shop?category=Toy"}
        onClick={() =>
          trackClickButton("shop", {
            type: category,
          })
        }
      >
        {name ?? category}
        <Icon icon="ep:right" />
      </LinkButtonUI>
    );
  };

  const instaBtnClickHandler = () => {
    trackClickButton("rudkidss instagram", {
      page: "home",
    });
    window.location.href = "https://www.instagram.com/rudkidss";
  };

  return (
    <PageUI>
      <SymbolLoader loading={false} />
      <Header isFixed />
      <SpacerUI />
      <MainBannerImgUI src={home1Webp} />
      <SlidingTape />
      <MainBannerImgUI src={home2Webp} />
      <SpacerUI />
      <img src={arrowDownWebp} width="50%" />
      <SpacerUI marginTop="5px" />
      <img onClick={instaBtnClickHandler} src={instaBtnWebp} width="80%" />
      <SpacerUI />
      <TextGrp>
        <Txt1UI>Rudkids Toy</Txt1UI>
        <Txt2UI>Rude Kids’ Special Toy!</Txt2UI>
      </TextGrp>
      <ToyIntroduce />
      <ShopBtn category="Toy" />
      <Footer />
    </PageUI>
  );
};

export default HomePage;
