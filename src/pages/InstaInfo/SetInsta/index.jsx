import { ImageUI, InstaIdTxtUI, CheckWrapperUI } from "./styles";
import useUpdateImageUrlMutation from "../../../mutations/user/useUpdateImageUrlMutation";
import useUpdateInstaIdMutation from "../../../mutations/user/userUpdateInstaIdMutation";
import Lottie from "react-lottie";
import checkLottie from "./assets/check_lottie.json";
import { CompleteBtnUI, PageUI, WrapperUI } from "../shared_styles";
import Background from "../../../shared_components/Background";
import Loader from "../../../shared_components/Loader";
import useUserQuery from "../../../queries/user/useUserQuery";
import { Identify, identify, track } from "@amplitude/analytics-browser";
import moment from "moment";

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
      const identifyObj = new Identify();
      identifyObj.setOnce(
        "sign up date",
        moment(userData?.createdAt).format("YYYY-MM-DD")
      );
      identify(identifyObj);
    }
    onComplete();
  };

  return (
    <PageUI>
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
