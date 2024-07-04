import { Icon } from "@iconify/react/dist/iconify.js";
import fuckManSrc from "./assets/fuck_man.webp";

import {
  ExplainUI,
  FuckManImgUI,
  InfoIconWrapperUI,
  PageUI,
  TextSectionUI,
  TitleUI,
} from "./styles";
import { trackClickButton } from "../../shared_analytics";

const _401Page = () => {
  //
  const instaBtnClickHandler = () => {
    window.open("https://www.instagram.com/rudkidss");
    trackClickButton("rudkidss instagram", {
      page: "landing",
    });
  };

  return (
    <PageUI>
      {/*  */}
      <TextSectionUI>
        <TitleUI>아직 초대권이 없군요!</TitleUI>
        <ExplainUI>
          초대 받은 사람만
          <br />
          들어올 수 있어요
        </ExplainUI>
      </TextSectionUI>
      <FuckManImgUI src={fuckManSrc} />
      <InfoIconWrapperUI onClick={instaBtnClickHandler}>
        <Icon icon="mdi:instagram" />
      </InfoIconWrapperUI>
    </PageUI>
  );
};

export default _401Page;
