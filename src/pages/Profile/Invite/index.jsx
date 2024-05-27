import ticketSrc from "./assets/ticket.png";
import usedTicketSrc from "./assets/used_ticket.png";
import {
  BackgroundWrapperUI,
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

const max = 3;
const Invite = ({ onShared, sharedCnt = 1 }) => {
  const shareButtonClickHandler = () => {
    onShared();
  };

  return (
    <BackgroundWrapperUI>
      <WhiteWrapperUI>
        <InvitationUI>
          <TitleTxtUI>
            Invite Your <br />
            Friends!
          </TitleTxtUI>
          <BlueWrapperUI>
            <BoxDiv>
              <BoxTxtUI>남은 초대권</BoxTxtUI>
              <BoxTxtUI>2개</BoxTxtUI>
            </BoxDiv>
            <TicketListUI>
              {new Array(max).fill(null).map((_, idx) => {
                return (
                  <div key={idx}>
                    <TicketImg
                      src={idx < sharedCnt ? usedTicketSrc : ticketSrc}
                    />
                  </div>
                );
              })}
            </TicketListUI>
          </BlueWrapperUI>
          <DescriptionTxtUI>초대권은 한 달에 단 3개 발급 돼요</DescriptionTxtUI>
          <ButtonUI onClick={shareButtonClickHandler}>
            <FiShare color="white" />
            <ButtonTxtUI>초대권 보내기</ButtonTxtUI>
          </ButtonUI>
        </InvitationUI>
      </WhiteWrapperUI>
    </BackgroundWrapperUI>
  );
};

export default Invite;
