import { useMemo } from "react";
import {
  InvitedUserImgWrapperUI,
  InvitedUserImgUI,
  RandomOnlineSignUI,
  ScrollMarqueeUI,
} from "./styles";
import Marquee from "react-fast-marquee";
import RudImage from "../../../shared_components/RudImage";
const InvitedUsers = ({ invitedUsers }) => {
  return (
    <ScrollMarqueeUI>
      <Marquee direction="right">
        {invitedUsers?.map((imageUrl, idx) => {
          return <InvitedUser key={idx} userImgUrl={imageUrl} />;
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
      <RudImage ImgUI={InvitedUserImgUI} src={userImgUrl ?? ""} />
      {randomBoolean && <RandomOnlineSignUI />}
    </InvitedUserImgWrapperUI>
  );
};

export default InvitedUsers;
