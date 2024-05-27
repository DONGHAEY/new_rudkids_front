import {
  SetInstaUI,
  PageUI,
  ImageUI,
  InstaIdTxtUI,
  CompleteBtnUI,
  CheckWrapperUI,
} from "./styles";
import useUpdateImageUrlMutation from "../../../mutations/user/useUpdateImageUrlMutation";
import useUpdateInstaIdMutation from "../../../mutations/user/userUpdateInstaIdMutation";
import Lottie from "react-lottie";
import checkLottie from "./assets/check_lottie.json";
import Lock from "../../../shared_components/Lock";
import { TopLockedSection } from "../FindedInsta/styles";

const SetInsta = ({ instaId, instaImgUrl, onComplete }) => {
  const updateImageUrlMutation = useUpdateImageUrlMutation();
  const updateInstaIdMutation = useUpdateInstaIdMutation();

  //
  const clickHandler = async () => {
    try {
      await updateInstaIdMutation.mutateAsync(instaId);
      await updateImageUrlMutation.mutateAsync(instaImgUrl);
    } catch (e) {}
    onComplete();
  };

  return (
    <PageUI>
      <TopLockedSection>
        <Lock />
      </TopLockedSection>
      <SetInstaUI>
        <CheckWrapperUI>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: checkLottie,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </CheckWrapperUI>
        <ImageUI src={instaImgUrl} />
        <InstaIdTxtUI>@{instaId}</InstaIdTxtUI>
        <CompleteBtnUI onClick={clickHandler}>완료</CompleteBtnUI>
      </SetInstaUI>
      <div
        style={{
          height: "100%",
        }}
      ></div>
    </PageUI>
  );
};

export default SetInsta;
