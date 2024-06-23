import useUserQuery from "../../../queries/user/useUserQuery";
import ticketSrc from "./assets/ticket.png";
import usedTicketSrc from "./assets/used_ticket.png";
import {
  InvitationUI,
  TitleTxtUI,
  BlueWrapperUI,
  TicketImg,
  BoxDiv,
  BoxTxtUI,
  TicketListUI,
  WhiteWrapperUI,
  DescriptionTxtUI,
  ButtonUI,
  ButtonTxtUI,
} from "./styles";
import { FiShare } from "react-icons/fi";
import useCreateInvitationMutation from "../../../mutations/invitation/useCreateInvitationMutation";
import { track } from "@amplitude/analytics-browser";
import useDeleteInvitationMutation from "../../../mutations/invitation/deleteInvitationMutation";

const max = 3;
const Invite = ({ close }) => {
  const { data: userData } = useUserQuery();
  const createInvitationMutation = useCreateInvitationMutation();
  const deleteInvitationMutation = useDeleteInvitationMutation();

  const inviteCnt = userData?.invitateCnt;

  const inviteBtnClickHandler = async () => {
    const invitationId = await createInvitationMutation.mutateAsync();
    try {
      await window.navigator.share({
        title: "일상속의 작은 재미의 상점 - Rudkids",
        text: "이곳에서 일상속의 재미 프로젝트들을 만나보세요!",
        url: `https://www.rud.kids/invitation/${invitationId}`,
      });
      track("send tickets", {
        times: userData.invitateCnt,
        type: "profile",
      });
    } catch (e) {
      await deleteInvitationMutation.mutateAsync(invitationId);
    }
  };

  return (
    <WhiteWrapperUI>
      <InvitationUI>
        <TitleTxtUI>
          Invite Your <br />
          Friends!
        </TitleTxtUI>
        <BlueWrapperUI>
          <BoxDiv>
            <BoxTxtUI>남은 초대권</BoxTxtUI>
            <BoxTxtUI>{max - inviteCnt <= 0 ? 0 : max - inviteCnt}개</BoxTxtUI>
          </BoxDiv>
          <TicketListUI>
            {new Array(max).fill(null).map((_, idx) => {
              return (
                <div key={idx}>
                  <TicketImg
                    src={idx < inviteCnt ? usedTicketSrc : ticketSrc}
                  />
                </div>
              );
            })}
          </TicketListUI>
        </BlueWrapperUI>
        <DescriptionTxtUI>초대권은 한 달에 단 3개 발급 돼요</DescriptionTxtUI>
        <ButtonUI
          onClick={inviteBtnClickHandler}
          disabled={max - inviteCnt <= 0}
        >
          <FiShare color="white" />
          <ButtonTxtUI>초대권 보내기</ButtonTxtUI>
        </ButtonUI>
      </InvitationUI>
    </WhiteWrapperUI>
  );
};

export default Invite;
