import {
  CompleteBtnUI,
  InstagramIdFormUI,
  InstagramIdInputUI,
  LoginWrapperUI,
  TitleTxtUI,
  PageUI,
  InstagramIdInputWrapperUI,
} from "./styles";
import InstagramProfile from "./assets/InstagramProfile.svg";
import Lock from "../../../shared_components/Lock";
import StepIndicator from "../../../shared_components/StepIndicator";
import { useEffect, useState } from "react";
import useGetImgUrlMutation from "../../../mutations/instagram-profile/useGetImgUrl";
import LoadingScene from "./LoadingScene";

const FindInsta = ({ setFindedInstaInfo }) => {
  const [instagramId, setInstagramId] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  const buttonDisbled = instagramId.length < 3;
  const getInstagramInfoMutation = useGetImgUrlMutation();

  const [temp, setTemp] = useState();

  const findInstagramInfo = (instagramId) => {
    setShowLoading(true);
    getInstagramInfoMutation.mutateAsync(instagramId, {
      onSuccess: (data) => {
        setTemp({
          instaImgUrl: data,
          instaId: instagramId,
        });
      },
      onError: (e) => {
        alert("프로필을 찾을 수 없습니다.");
      },
    });
  };

  useEffect(() => {
    if (!showLoading && temp) {
      setFindedInstaInfo(temp);
    }
  }, [showLoading, temp]);

  if (showLoading) {
    return (
      <LoadingScene
        blackholeActive={!getInstagramInfoMutation.isLoading}
        onComplete={() => {
          setShowLoading(false);
        }}
      />
    );
  }

  return (
    <PageUI>
      <LoginWrapperUI>
        <Lock />
        <TitleTxtUI>
          Tell me Your
          <br />
          Instagram ID
        </TitleTxtUI>
        <InstagramIdFormUI>
          <img src={InstagramProfile} />
          <InstagramIdInputWrapperUI>
            <InstagramIdInputUI
              value={instagramId}
              onChange={(e) => setInstagramId(e.target.value)}
              placeholder="내 인스타그램 ID입력"
            />
          </InstagramIdInputWrapperUI>
          <CompleteBtnUI
            disabled={buttonDisbled}
            onClick={() => findInstagramInfo(instagramId)}
          >
            완료
          </CompleteBtnUI>
        </InstagramIdFormUI>
      </LoginWrapperUI>
      <StepIndicator totalStep={2} stepCnt={1} />
    </PageUI>
  );
};

export default FindInsta;
