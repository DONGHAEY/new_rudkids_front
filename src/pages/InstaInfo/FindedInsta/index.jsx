import {
  LoginWrapperUI,
  TitleTxtUI,
  PageUI,
  AskTxtUI,
  InstagramImgWrapperUI,
  InstagramImgUI,
  InstagramNmTxtUI,
  CautionImgUI,
  ButtonListUI,
  ButtonUI,
  TopLockedSection,
} from "./styles";
import InstagramProfile from "./assets/InstagramProfile.svg";
import Lock from "../../../shared_components/Lock";
import StepIndicator from "../../../shared_components/StepIndicator";
import cautionImgSrc from "./assets/caution.png";

const FindedInsta = ({ instaImgUrl, instaId, onCancel, onSelect }) => {
  return (
    <PageUI>
      <TopLockedSection>
        <Lock />
      </TopLockedSection>
      <CautionImgUI src={cautionImgSrc} />
      <LoginWrapperUI>
        <TitleTxtUI>You Sure? 🤔</TitleTxtUI>
        <AskTxtUI>내 인스타그램 프로필이 맞나요?</AskTxtUI>
        <InstagramImgWrapperUI>
          <img src={InstagramProfile} />
          <InstagramImgUI src={instaImgUrl} />
        </InstagramImgWrapperUI>
        <InstagramNmTxtUI>@{instaId}</InstagramNmTxtUI>
        <ButtonListUI>
          <ButtonUI background="black" color="white" onClick={onCancel}>
            수정하기
          </ButtonUI>
          <ButtonUI background="#D8D8D8" color="black" onClick={onSelect}>
            다음
          </ButtonUI>
        </ButtonListUI>
      </LoginWrapperUI>
      <StepIndicator totalStep={2} stepCnt={1} />
    </PageUI>
  );
};

export default FindedInsta;
