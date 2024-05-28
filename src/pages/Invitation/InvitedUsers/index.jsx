import { useMemo } from "react";
import {
  InvitedUserImgWrapperUI,
  InvitedUserImgUI,
  RandomOnlineSignUI,
  ScrollMarqueeUI,
} from "./styles";
const InvitedUsers = ({ invitedUsers }) => {
  return (
    <ScrollMarqueeUI direction="right">
      {invitedUsers?.map((invitedUser, idx) => {
        return <InvitedUser key={idx} userImgUrl={invitedUser} />;
      })}
    </ScrollMarqueeUI>
  );
};

const InvitedUser = ({ userImgUrl }) => {
  const randomBoolean = useMemo(() => {
    return Math.random() >= 0.5;
  }, []);

  return (
    <InvitedUserImgWrapperUI>
      <InvitedUserImgUI src={userImgUrl} />
      {randomBoolean && <RandomOnlineSignUI />}
    </InvitedUserImgWrapperUI>
  );
};

export default InvitedUsers;
