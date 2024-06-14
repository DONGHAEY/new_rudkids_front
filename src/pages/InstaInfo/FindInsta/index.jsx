import {
  InstagramIdFormUI,
  InstagramIdInputUI,
  TitleTxtUI,
  InstagramIdInputWrapperUI,
  RudkidsInstaUI,
} from "./styles";
import InstagramProfile from "./assets/InstagramProfile.svg";
import StepIndicator from "../../../shared_components/StepIndicator";
import { useEffect, useState } from "react";
import useGetImgUrlMutation from "../../../mutations/instagram-profile/useGetImgUrl";
import LoadingScene from "./LoadingScene";
import { CompleteBtnUI, PageUI, WrapperUI } from "../shared_styles";
import Background from "../../../shared_components/Background";
import instaImgSrc from "./assets/insta.jpg";
import { FixedPipVideo } from "../../../shared_components/FixedPipVideo";

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
      <FixedPipVideo />
      <RudkidsInstaUI
        onClick={() => {
          window.location.href = "https://www.instagram.com/rudkidss";
        }}
      >
        <img src={instaImgSrc} />
        Rudkidss
      </RudkidsInstaUI>
      <WrapperUI>
        <TitleTxtUI>
          Tell me Your
          <br />
          Instagram ID
        </TitleTxtUI>
        <InstagramIdFormUI>
          <img
            style={{
              maxHeight: "95px",
            }}
            width={"70%"}
            src={InstagramProfile}
          />
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
      </WrapperUI>
      <StepIndicator totalStep={2} stepCnt={1} />
      <Background />
    </PageUI>
  );
};

export default FindInsta;
