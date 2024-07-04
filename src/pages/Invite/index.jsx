import {
  BottomBoxUI,
  BoxBgUI,
  CompleteBtnUI,
  FlexColUI,
  HandImgWrapperUI,
  InviteBtnUI,
  InviteProgressSectionUI,
  LottieWrapperUI,
  MiddleSectionUI,
  PageUI,
  SubTitleTxtUI,
  TicketImgUI,
  TitleTxtUI,
} from "./styles";
import Friends from "./Friends";
import ticketsSrc from "./assets/tickets.gif";
import handSrc from "./assets/hand.webp";
import boxSrc from "./assets/box.png";
import { RiShareBoxFill } from "react-icons/ri";
import ProgressBar from "./ProgressBar";
import PicProgressBar from "./PicProgressBar";
import useSetFirstInviteFinished from "../../mutations/user/useSetFirstInviteFinished";
import { Player } from "@lottiefiles/react-lottie-player";
import CallingModal from "../../shared_components/Calling";
import { useNavigate, useSearchParams } from "react-router-dom";
import videoSrc from "./assets/video.mp4";
import { trackClickButton } from "../../shared_analytics";
import useUserQuery from "../../queries/user/useUserQuery";
import PublicLottieAssets from "../../global/public-lottie-assets";
import useSendInvitationMutation from "../../mutations/invitation/useSendInvitationMutation";
const InvitePage = () => {
  const navigate = useNavigate();
  const { data: userData } = useUserQuery();

  const defaultInviteCnt = 3;
  //
  const sendInvitationMutation = useSendInvitationMutation("onboarding");
  const setFirstInviteFinishedMutation = useSetFirstInviteFinished();

  const [searchParams] = useSearchParams();
  const callback = searchParams.get("callback") ?? "/home";

  const inviterCnt = userData?.invitateCnt;
  const inviteClickHandler = async () => {
    const isInviteComplete = await sendInvitationMutation.mutateAsync();
    if (isInviteComplete) {
      if (userData.invitateCnt === defaultInviteCnt) {
        await setFirstInviteFinishedMutation.mutateAsync();
      }
    }
  };

  const completeHandler = async () => {
    trackClickButton("complete sending tickets");
    navigate(callback, {
      replace: true,
    });
  };

  return (
    <PageUI>
      <FlexColUI>
        <TitleTxtUI>Invite</TitleTxtUI>
        <TitleTxtUI>3 Friends</TitleTxtUI>
        <SubTitleTxtUI>친구 세 명에게 초대 링크를 보내세요!</SubTitleTxtUI>
        <MiddleSectionUI>
          <TicketImgUI src={ticketsSrc} />
          <HandImgWrapperUI>
            <img width="50%" src={handSrc} />
          </HandImgWrapperUI>
        </MiddleSectionUI>
        <BottomBoxUI>
          <BoxBgUI src={boxSrc} />
          <InviteProgressSectionUI>
            <PicProgressBar cnt={inviterCnt} total={defaultInviteCnt} />
            <ProgressBar
              offset={
                inviterCnt / defaultInviteCnt > 1
                  ? 1
                  : inviterCnt / defaultInviteCnt
              }
            />
          </InviteProgressSectionUI>
          {inviterCnt < defaultInviteCnt ? (
            <InviteBtnUI onClick={inviteClickHandler}>
              <RiShareBoxFill />
              초대하기
            </InviteBtnUI>
          ) : (
            <CompleteBtnUI onClick={completeHandler}>다음</CompleteBtnUI>
          )}
        </BottomBoxUI>
      </FlexColUI>
      <LottieWrapperUI>
        {defaultInviteCnt === inviterCnt && (
          <Player
            controls={true}
            src={PublicLottieAssets.congratuation}
            autoplay
          />
        )}
      </LottieWrapperUI>
      <Friends />
      <CallingModal videoSrc={videoSrc} onClosed={() => {}} pageFor="invite" />
    </PageUI>
  );
};

export default InvitePage;
