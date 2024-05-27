import { useEffect, useMemo, useRef } from "react";
import {
  InvitedUsersScrollUI,
  InvitedUserImgWrapperUI,
  InvitedUserImgUI,
  RandomOnlineSignUI,
} from "./styles";
import gsap from "gsap";

const InvitedUsers = ({ invitedUsers }) => {
  const ref = useRef();

  useEffect(() => {
    const end = ref?.current?.scrollWidth - ref.current?.clientWidth;
    const fromScrollLeft = gsap.getProperty(ref.current, "scrollLeft");
    gsap.fromTo(
      ref.current,
      {
        scrollLeft: fromScrollLeft,
      },
      {
        scrollLeft: end,
        duration: 10,
        yoyo: true,
        repeat: -1,
        repeatDelay: 3,
      }
    );
  }, []);

  return (
    <InvitedUsersScrollUI ref={ref}>
      {invitedUsers?.map((invitedUser, idx) => {
        return <InvitedUser key={idx} />;
      })}
    </InvitedUsersScrollUI>
  );
};

const InvitedUser = () => {
  const randomBoolean = useMemo(() => {
    return Math.random() >= 0.5;
  }, []);

  return (
    <InvitedUserImgWrapperUI>
      <InvitedUserImgUI
        src={
          "https://saocbhosfbzowqshlhfv.supabase.co/storage/v1/object/public/rudkids/profile/7x3kaki-instagram.png"
        }
      />
      {randomBoolean && <RandomOnlineSignUI />}
    </InvitedUserImgWrapperUI>
  );
};

export default InvitedUsers;
