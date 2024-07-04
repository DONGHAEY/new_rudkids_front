import {
  InstagramIdFormUI,
  InstagramIdInputUI,
  TitleTxtUI,
  SubmitBtnUI,
  ButtonWrapperUI,
  FormLabelUI,
  WrapperUI,
} from "./styles";
import { useEffect, useState } from "react";
import useGetImgUrlMutation from "../../../mutations/instagram-profile/useGetImgUrl";
import LoadingScene from "./LoadingScene";
import { PageUI, SpacerUI } from "../shared_styles";
import Background from "../../../shared_components/Background";
import instaImgSrc from "../assets/instagram.webp";
import RudWindow from "../../../shared_components/RudWindow";
import { WindowButtonUI } from "../../../shared_components/RudWindow/shared_styles";
import { useAlert } from "../../../hooks/useRudAlert";

const FindInsta = ({ setFindedInstaInfo }) => {
  const alert = useAlert();
  const [instagramId, setInstagramId] = useState("");
  const [showLoading, setShowLoading] = useState(false);
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
      <>
        <LoadingScene
          blackholeActive={!getInstagramInfoMutation.isLoading}
          onComplete={() => {
            setShowLoading(false);
          }}
        />
        <Background />
      </>
    );
  }

  return (
    <PageUI>
      <SpacerUI />
      <RudWindow>
        <WrapperUI>
          <TitleTxtUI>
            Tell me Your
            <br />
            Instagram ID
          </TitleTxtUI>
          <img width={"53%"} src={instaImgSrc} />
          <InstagramIdFormUI>
            <FormLabelUI>id:</FormLabelUI>
            <InstagramIdInputUI
              value={instagramId}
              onChange={(e) => setInstagramId(e.target.value)}
            />
          </InstagramIdFormUI>
          <ButtonWrapperUI>
            <WindowButtonUI onClick={() => findInstagramInfo(instagramId)}>
              <SubmitBtnUI>완료</SubmitBtnUI>
            </WindowButtonUI>
          </ButtonWrapperUI>
        </WrapperUI>
        {/*  */}
      </RudWindow>
      <Background position="absolute" />
    </PageUI>
  );
};

export default FindInsta;
