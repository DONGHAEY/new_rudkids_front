import FindInsta from "./FindInsta";
import { useState } from "react";
import FindedInsta from "./FindedInsta";
import SetInsta from "./SetInsta";
import { useNavigate, useSearchParams } from "react-router-dom";
import useUserQuery from "../../queries/user/useUserQuery";
import { OnboardingSteps } from "../../global/onboarding-steps";

const InstaInfoPage = () => {
  const navigate = useNavigate();

  const { data: me } = useUserQuery();
  const [findedInstaInfo, setFindedInstaInfo] = useState(null);
  const [isSetting, setIsSetting] = useState(false);
  const [searchParams] = useSearchParams();
  const callback = searchParams.get("callback") ?? "/home";

  const onSetInstagramFinished = async () => {
    if (me.onboardingStep === OnboardingSteps.WAITING) {
      navigate("/waiting", {
        replace: true,
      });
      return;
    }
    navigate(callback);
  };

  if (isSetting) {
    return (
      <SetInsta
        instaId={findedInstaInfo.instaId}
        instaImgUrl={findedInstaInfo.instaImgUrl}
        onComplete={onSetInstagramFinished}
      />
    );
  }

  if (findedInstaInfo) {
    return (
      <FindedInsta
        instaId={findedInstaInfo.instaId}
        instaImgUrl={findedInstaInfo.instaImgUrl}
        onCancel={() => setFindedInstaInfo(null)}
        onSelect={() => setIsSetting(true)}
      />
    );
  }

  return <FindInsta setFindedInstaInfo={setFindedInstaInfo} />;
};

export default InstaInfoPage;
