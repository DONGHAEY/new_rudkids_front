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
import { useNavigate } from "react-router-dom";

const Page3 = ({ ref }) => {
  const navigate = useNavigate();
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
      <GetInButtonUI
        src={getIn}
        onClick={() => {
          navigate("/login");
        }}
      />
      <BottomImgUI src={footer} />
    </PageUI>
  );
};

export default Page3;
