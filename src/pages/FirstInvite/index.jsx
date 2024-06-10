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
import handSrc from "./assets/hand.png";
import boxSrc from "./assets/box.png";
import { RiShareBoxFill } from "react-icons/ri";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import PicProgressBar from "./PicProgressBar";
import useCreateInvitationMutation from "../../mutations/invitation/useCreateInvitationMutation";
import useSetFirstInviteFinished from "../../mutations/user/useSetFirstInviteFinished";
import congraturation from "./assets/congraturation.json";
import { Player } from "@lottiefiles/react-lottie-player";
import CallingModal from "../../shared_components/Calling";
import { useSearchParams } from "react-router-dom";
import videoSrc from "./assets/video.mp4";
import useUserQuery from "../../queries/user/useUserQuery";

const FirstInvitePage = () => {
  const createInvitationMutation = useCreateInvitationMutation();
  const setFirstInviteFinisheMutation = useSetFirstInviteFinished();

  const goalInviterCnt = 3;
  const [inviterCnt, setInviterCnt] = useState(0);

  const [searchParams] = useSearchParams();
  const callback = searchParams.get("callback") ?? "/";

  const inviteHandler = async () => {
    const invitationId = await createInvitationMutation.mutateAsync();
    try {
      await window.navigator.share({
        title: "일상속의 작은 재미의 상점 - Rudkids",
        text: "이곳에서 일상속의 재미 프로젝트들을 만나보세요!",
        url: `https://www.rud.kids/invitation/${invitationId}`,
      });
      if (inviterCnt + 1 <= goalInviterCnt) {
        setInviterCnt(inviterCnt + 1);
      }
    } catch (e) {
      alert("제대로 완료해주세요.", invitationId);
      setInviterCnt(inviterCnt + 1);
    }
  };

  const completeHandler = async () => {
    await setFirstInviteFinisheMutation.mutateAsync();
    window.location.href = callback;
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
            <InviteBtnUI onClick={inviteHandler}>
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
          <Player controls={true} src={congraturation} autoplay />
        )}
      </LottieWrapperUI>
      <Friends />
      <CallingModal videoSrc={videoSrc} />
    </PageUI>
  );
};

export default FirstInvitePage;
