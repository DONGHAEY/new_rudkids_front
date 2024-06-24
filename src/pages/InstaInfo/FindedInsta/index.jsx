import {
  TitleTxtUI,
  AskTxtUI,
  InstagramImgWrapperUI,
  ProfileImgUI,
  InstagramNmTxtUI,
  ButtonListUI,
  ButtonUI,
  WrapperUI,
} from "./styles";
import instgramImg from "../assets/instagram.webp";
import { PageUI, SpacerUI } from "../shared_styles";
import Background from "../../../shared_components/Background";
import { trackClickButton } from "../../../shared_analytics";
import RudWindow from "../../../shared_components/RudWindow";
import { WindowButtonUI } from "../../../shared_components/RudWindow/shared_styles";

const FindedInsta = ({ instaImgUrl, instaId, onCancel, onSelect }) => {
  const cancelClickHandler = () => {
    trackClickButton("edit instagram id", {
      instagramId: instaId,
    });
    onCancel();
  };

  const selectClickHandler = () => {
    trackClickButton("confirm instagram id", {
      instagramId: instaId,
    });
    onSelect();
  };

  return (
    <PageUI>
      <SpacerUI />
      <RudWindow>
        <WrapperUI>
          <TitleTxtUI>You Sure?</TitleTxtUI>
          <AskTxtUI>내 인스타그램 프로필이 맞나요?</AskTxtUI>
          <InstagramImgWrapperUI>
            <img width="50%" src={instgramImg} />
            <ProfileImgUI src={instaImgUrl} />
          </InstagramImgWrapperUI>
          <InstagramNmTxtUI>@{instaId}</InstagramNmTxtUI>
          <ButtonListUI>
            <WindowButtonUI border="rgba(172, 167, 160, 1)">
              <ButtonUI
                background="rgba(211, 206, 197, 1)"
                color="black"
                onClick={cancelClickHandler}
              >
                수정하기
              </ButtonUI>
            </WindowButtonUI>
            <WindowButtonUI border="rgba(63, 148, 61, 1)">
              <ButtonUI
                background="rgba(76, 183, 75, 1)"
                onClick={selectClickHandler}
              >
                완료
              </ButtonUI>
            </WindowButtonUI>
          </ButtonListUI>
        </WrapperUI>
      </RudWindow>
      <Background position="absolute" />
    </PageUI>
  );
};

export default FindedInsta;
