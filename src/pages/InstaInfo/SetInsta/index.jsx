import {
  ProfileImgUI,
  InstaIdTxtUI,
  WrapperUI,
  CompleteBtnUI,
  ProfileImgWrapperUI,
  InstaRingImgUI,
} from "./styles";
import useSetInstagramMutation from "../../../mutations/user/useSetInstagramMutation";
import { PageUI, SpacerUI } from "../shared_styles";
import Background from "../../../shared_components/Background";
import Loader from "../../../shared_components/Loader";
import RudWindow from "../../../shared_components/RudWindow";
import { WindowButtonUI } from "../../../shared_components/RudWindow/shared_styles";
import instaRing from "./assets/insta_ring.webp";
import { useAlert } from "../../../hooks/useRudAlert";

const SetInsta = ({ instaId, instaImgUrl, onComplete }) => {
  const alert = useAlert();
  const setInstagramMutation = useSetInstagramMutation();

  const clickHandler = () => {
    setInstagramMutation.mutateAsync(
      {
        instagramId: instaId,
        imageUrl: instaImgUrl,
      },
      {
        onSuccess: async () => {
          if (typeof onComplete === "function") {
            await onComplete();
          }
        },
        onError: async () => {
          await alert("알수 없는 에러가 발생했어요. 잠시후 시도하세요.");
        },
      }
    );
  };

  return (
    <PageUI>
      <SpacerUI />
      <RudWindow>
        <WrapperUI>
          <ProfileImgWrapperUI>
            <ProfileImgUI src={instaImgUrl} />
            <InstaRingImgUI src={instaRing} />
          </ProfileImgWrapperUI>
          <InstaIdTxtUI>@{instaId}</InstaIdTxtUI>
          <WindowButtonUI width="70%" onClick={clickHandler}>
            <CompleteBtnUI>완료</CompleteBtnUI>
          </WindowButtonUI>
        </WrapperUI>
      </RudWindow>
      {setInstagramMutation?.isLoading && <Loader />}
      <Background position="absolute" />
    </PageUI>
  );
};

export default SetInsta;
