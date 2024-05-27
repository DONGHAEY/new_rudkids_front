import { useParams } from "react-router-dom";
import useInvitationQuery from "../../queries/invitation/useInvitationQuery";
import { PageUI, SubTitleTxtUI, TitleTxtUI } from "./styles";
import Letter from "./Letter";
import TimerButton from "./TimerButton";
import { useEffect, useState } from "react";
import NumTimer from "./NumTimer";
import InvitedUsers from "./InvitedUsers";

const InvitationPage = ({ routeInfo }) => {
  const totalSecond = 60;
  const [remainSecond, setRemainSecond] = useState(totalSecond);

  const params = useParams();
  const invitationId = params[routeInfo?.paramKeys[0]];
  const { data: invitationData } = useInvitationQuery(invitationId);

  useEffect(() => {
    if (remainSecond <= 0) return;
    const timeout = setTimeout(() => {
      setRemainSecond(remainSecond - 1);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [remainSecond]);

  return (
    <PageUI>
      <InvitedUsers invitedUsers={new Array(30).fill("")} />
      <TitleTxtUI>초대장이 도착했어요!</TitleTxtUI>
      <SubTitleTxtUI>당신, 루키즈가 되고싶어?</SubTitleTxtUI>
      <Letter
        fromImageUrl={invitationData?.fromImageUrl}
        fromName={invitationData?.fromName}
      />
      <TimerButton timerOffset={remainSecond / totalSecond} />
      <NumTimer remainSecond={remainSecond} />
    </PageUI>
  );
};

export default InvitationPage;
