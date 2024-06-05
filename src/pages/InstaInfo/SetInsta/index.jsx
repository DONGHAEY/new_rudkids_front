import { ImageUI, InstaIdTxtUI, CheckWrapperUI } from "./styles";
import useUpdateImageUrlMutation from "../../../mutations/user/useUpdateImageUrlMutation";
import useUpdateInstaIdMutation from "../../../mutations/user/userUpdateInstaIdMutation";
import Lottie from "react-lottie";
import checkLottie from "./assets/check_lottie.json";
import Lock from "../../../shared_components/Lock";
import { CompleteBtnUI, PageUI, WrapperUI } from "../shared_styles";
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
    </PageUI>
  );
};

export default SetInsta;
