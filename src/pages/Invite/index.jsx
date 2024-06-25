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
import { useState } from "react";
import PicProgressBar from "./PicProgressBar";
import useCreateInvitationMutation from "../../mutations/invitation/useCreateInvitationMutation";
import useSetFirstInviteFinished from "../../mutations/user/useSetFirstInviteFinished";
import { Player } from "@lottiefiles/react-lottie-player";
import CallingModal from "../../shared_components/Calling";
import { useSearchParams } from "react-router-dom";
import videoSrc from "./assets/video.mp4";
import { trackClickButton } from "../../shared_analytics";
import useUserQuery from "../../queries/user/useUserQuery";
import PublicLottieAssets from "../../global/public-lottie-assets";
import useDeleteInvitationMutation from "../../mutations/invitation/deleteInvitationMutation";
import { track } from "@amplitude/analytics-browser";

const InvitePage = () => {
  const { data: userData } = useUserQuery();
  //
  const createInvitationMutation = useCreateInvitationMutation();
  const deleteInvitationMutation = useDeleteInvitationMutation();
  const setFirstInviteFinisheMutation = useSetFirstInviteFinished();

  const goalInviterCnt = 3;
  const [inviterCnt, setInviterCnt] = useState(0);
  const [searchParams] = useSearchParams();
  const callback = searchParams.get("callback") ?? "/home";

  const inviteClickHandler = async () => {
    const invitationId = await createInvitationMutation.mutateAsync();

    try {
      await window.navigator.share({
        title: "Rudkids",
        text: "야 ㅁㅊ 이거 너 아님?",
        url: `https://www.rud.kids/ticket/${invitationId}`,
      });
      if (inviterCnt + 1 <= goalInviterCnt) {
        setInviterCnt(inviterCnt + 1);
      }
      track("send tickets", {
        times: inviterCnt + 1,
        type: "onboarding",
      });
    } catch (e) {
      await deleteInvitationMutation.mutateAsync(invitationId);
      alert("제대로 완료해주세요.");
    }
  };

  const completeHandler = async () => {
    try {
      await setFirstInviteFinisheMutation.mutateAsync();
      trackClickButton("complete sending tickets");
      window.location.href = callback;
    } catch (e) {}
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
            <PicProgressBar cnt={inviterCnt} total={goalInviterCnt} />
            <ProgressBar offset={inviterCnt / goalInviterCnt} />
          </InviteProgressSectionUI>
          {goalInviterCnt !== inviterCnt ? (
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
        {goalInviterCnt === inviterCnt && (
          <Player
            controls={true}
            src={PublicLottieAssets.congratuation}
            autoplay
          />
        )}
      </LottieWrapperUI>
      <Friends />
      <CallingModal
        videoSrc={videoSrc}
        onClosed={() => {}}
        pageFor="first invite"
      />
    </PageUI>
  );
};

export default InvitePage;
