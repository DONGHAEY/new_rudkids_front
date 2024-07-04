import {
  ProfileImgUI,
  InstaIdTxtUI,
  WrapperUI,
  CompleteBtnUI,
  ProfileImgWrapperUI,
  InstaRingImgUI,
} from "./styles";
import useUpdateImageUrlMutation from "../../../mutations/user/useUpdateImageUrlMutation";
import useUpdateInstaIdMutation from "../../../mutations/user/userUpdateInstaIdMutation";
import { PageUI, SpacerUI } from "../shared_styles";
import Background from "../../../shared_components/Background";
import Loader from "../../../shared_components/Loader";
import useUserQuery from "../../../queries/user/useUserQuery";
import { Identify, identify, track } from "@amplitude/analytics-browser";
import moment from "moment";
import RudWindow from "../../../shared_components/RudWindow";
import { WindowButtonUI } from "../../../shared_components/RudWindow/shared_styles";
import instaRing from "./assets/insta_ring.webp";
import { useAlert } from "../../../hooks/useRudAlert";

const SetInsta = ({ instaId, instaImgUrl, onComplete }) => {
  const { data: me } = useUserQuery();

  const alert = useAlert();

  const updateImageUrlMutation = useUpdateImageUrlMutation();
  const updateInstaIdMutation = useUpdateInstaIdMutation();

  //
  const clickHandler = async () => {
    try {
      await updateInstaIdMutation.mutateAsync(instaId);
      await updateImageUrlMutation.mutateAsync(instaImgUrl);
      const isRegistering = me?.instaId ? false : true;
      if (isRegistering) {
        track("complete sign up", {
          user_id: me.id,
          date: moment(me.createdAt).format("YYYY-MM-DD"),
        });
        const identifyObj = new Identify();
        identifyObj.setOnce(
          "sign up date",
          moment(me.createdAt).format("YYYY-MM-DD")
        );
        identify(identifyObj);
      }
      onComplete();
    } catch (e) {
      alert("알 수 없는 에러가 발생했어요 ㅠ");
    }
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
      {(updateInstaIdMutation?.isLoading ||
        updateImageUrlMutation?.isLoading) && <Loader />}
      <Background position="absolute" />
    </PageUI>
  );
};

export default SetInsta;
