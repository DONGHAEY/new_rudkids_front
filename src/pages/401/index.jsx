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

const _401Page = () => {
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
      <InfoIconWrapperUI>
        <Icon icon="material-symbols:info-outline" />
      </InfoIconWrapperUI>
    </PageUI>
  );
};

export default _401Page;
