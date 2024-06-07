import {
  TitleTxtUI,
  AskTxtUI,
  InstagramImgWrapperUI,
  InstagramImgUI,
  InstagramNmTxtUI,
  CautionImgUI,
  ButtonListUI,
  ButtonUI,
} from "./styles";
import InstagramProfile from "./assets/InstagramProfile.svg";
import Lock from "../../../shared_components/Lock";
import StepIndicator from "../../../shared_components/StepIndicator";
import cautionImgSrc from "./assets/caution.png";
import { PageUI, WrapperUI } from "../shared_styles";
import Background from "../../../shared_components/Background";

const FindedInsta = ({ instaImgUrl, instaId, onCancel, onSelect }) => {
  return (
    <PageUI>
      <Lock />
      <CautionImgUI src={cautionImgSrc} />
      <WrapperUI>
        <TitleTxtUI>You Sure? 🤔</TitleTxtUI>
        <AskTxtUI>내 인스타그램 프로필이 맞나요?</AskTxtUI>
        <InstagramImgWrapperUI>
          <img style={{ height: "110px" }} src={InstagramProfile} />
          <InstagramImgUI src={instaImgUrl} />
        </InstagramImgWrapperUI>
        <InstagramNmTxtUI>@{instaId}</InstagramNmTxtUI>
        <ButtonListUI>
          <ButtonUI
            background="linear-gradient(180deg, #000000 0%, #4D4D4D 100%)"
            color="white"
            onClick={onCancel}
          >
            수정하기
          </ButtonUI>
          <ButtonUI
            background="linear-gradient(180deg, #D8D8D8 0%, #ACACAC 100%)"
            color="black"
            onClick={onSelect}
          >
            다음
          </ButtonUI>
        </ButtonListUI>
      </WrapperUI>
      <StepIndicator totalStep={2} stepCnt={1} />
      <Background />
    </PageUI>
  );
};

export default FindedInsta;
