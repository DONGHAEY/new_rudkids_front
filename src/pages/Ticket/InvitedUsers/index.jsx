import { useMemo } from "react";
import {
  InvitedUserImgWrapperUI,
  InvitedUserImgUI,
  RandomOnlineSignUI,
  ScrollMarqueeUI,
} from "./styles";
import Marquee from "react-fast-marquee";
const InvitedUsers = ({ invitedUsers }) => {
  return (
    <ScrollMarqueeUI>
      <Marquee direction="right">
        {invitedUsers?.map((invitedUser, idx) => {
          return <InvitedUser key={idx} userImgUrl={invitedUser} />;
        })}
      </Marquee>
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
