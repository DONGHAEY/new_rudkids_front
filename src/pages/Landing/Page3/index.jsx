import EatingKid from "../EatingKid";
import title from "./assets/title.webp";
import buttons from "./assets/buttons.webp";
import footer from "./assets/footer.webp";
import insta from "./assets/insta.webp";

import getIn from "../assets/get_in.webp";
import {
  BottomImgUI,
  ButtonsWrapperUI,
  GetInButtonUI,
  InstaImgUI,
  PageUI,
  TitleImgUI,
} from "./styles";

const Page3 = ({ ref }) => {
  return (
    <PageUI ref={ref}>
      <TitleImgUI src={title} />
      <EatingKid />
      <ButtonsWrapperUI>
        <InstaImgUI
          src={insta}
          onClick={() => {
            window.location.href = "https://www.instagram.com/rudkidss";
          }}
        />
        <img src={buttons} width="100%" />
      </ButtonsWrapperUI>
      <GetInButtonUI src={getIn} />
      <BottomImgUI src={footer} />
    </PageUI>
  );
};

export default Page3;
