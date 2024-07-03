import useUserQuery from "../../queries/user/useUserQuery";
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
import useSendInvitationMutation from "../../mutations/invitation/useSendInvitationMutation";

const max = 3;
const Invite = ({ fromPage }) => {
  const { data: userData } = useUserQuery();
  const sendInvitationMutation = useSendInvitationMutation("friends");

  const inviteCnt = userData?.invitateCnt;

  const inviteBtnClickHandler = async () => {
    await sendInvitationMutation.mutateAsync(fromPage);
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
