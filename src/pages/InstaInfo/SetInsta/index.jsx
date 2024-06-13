import { ImageUI, InstaIdTxtUI, CheckWrapperUI } from "./styles";
import useUpdateImageUrlMutation from "../../../mutations/user/useUpdateImageUrlMutation";
import useUpdateInstaIdMutation from "../../../mutations/user/userUpdateInstaIdMutation";
import Lottie from "react-lottie";
import checkLottie from "./assets/check_lottie.json";
import Lock from "../../../shared_components/Lock";
import { CompleteBtnUI, PageUI, WrapperUI } from "../shared_styles";
import Background from "../../../shared_components/Background";
import Loader from "../../../shared_components/Loader";
import useUserQuery from "../../../queries/user/useUserQuery";
import { track } from "@amplitude/analytics-browser";

const SetInsta = ({ instaId, instaImgUrl, onComplete }) => {
  const { data: userData } = useUserQuery();

  const updateImageUrlMutation = useUpdateImageUrlMutation();
  const updateInstaIdMutation = useUpdateInstaIdMutation();

  //
  const clickHandler = async () => {
    const isRegistering = userData?.instaId ? false : true;
    try {
      await updateInstaIdMutation.mutateAsync(instaId);
      await updateImageUrlMutation.mutateAsync(instaImgUrl);
    } catch (e) {}
    if (isRegistering) {
      track("comeplete sign up", {
        user_id: userData?.id,
        date: new Date().toISOString().substring(0, 10).replaceAll(".", "-"),
      });
    }
    onComplete();
  };

  return (
    <PageUI>
      <Lock />
      <WrapperUI>
        <CheckWrapperUI>
          <Lottie
            width="100%"
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
        <CompleteBtnUI
          style={{
            width: "70%",
            marginTop: "15px",
          }}
          onClick={clickHandler}
        >
          완료
        </CompleteBtnUI>
      </WrapperUI>
      {(updateInstaIdMutation?.isLoading ||
        updateImageUrlMutation?.isLoading) && <Loader />}
      <Background />
    </PageUI>
  );
};

export default SetInsta;
