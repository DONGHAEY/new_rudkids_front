import { useNavigate, useParams } from "react-router-dom";
import useInvitationQuery from "../../queries/invitation/useInvitationQuery";
import {
  FixedBototmSectionUI,
  MiddleSectionUI,
  PageUI,
  SubTitleTxtUI,
  TitleTxtUI,
  DescriptSectionUI,
} from "./styles";
import Letter from "./Letter";
import TimerButton from "./TimerButton";
import { useEffect, useMemo, useState } from "react";
import NumTimer from "./NumTimer";
import InvitedUsers from "./InvitedUsers";
import StorageKey from "../../storageKey";
import Loader from "../../shared_components/Loader";
import { trackClickButton, trackPageView } from "../../shared_analytics";

const tempUserImgSrc =
  "https://saocbhosfbzowqshlhfv.supabase.co/storage/v1/object/public/rudkids/profile/7x3kaki-instagram.png";

export const setTicketId = (invitationId) => {
  localStorage.setItem(StorageKey.invitation_id, invitationId);
};
export const removeTicketId = () => {
  localStorage.removeItem(StorageKey.invitation_id);
};
export const getTicketId = () => {
  return localStorage.getItem(StorageKey.invitation_id) ?? null;
};

const TicketPage = ({ routeInfo }) => {
  const totalSecond = 60;
  const navigate = useNavigate();
  const [remainSecond, setRemainSecond] = useState(totalSecond);
  const params = useParams();
  const invitationId = params[routeInfo?.paramKeys[0]];
  const { data: invitationData, isLoading } = useInvitationQuery(invitationId);

  const clickHandler = () => {
    trackClickButton("ticket open", {
      invitorName: invitationData.invitorId,
      duration: totalSecond - remainSecond,
    });
    setTicketId(invitationId);
    navigate("/");
  };

  const invitedUsers = useMemo(() => {
    if (!invitationData) return [];
    const friendsImgUrls = invitationData?.friends?.map((d) => d.imageUrl);
    return [
      ...friendsImgUrls,
      ...new Array(15 - friendsImgUrls.length).fill(tempUserImgSrc),
    ].sort(() => Math.random() - 0.5);
  }, [invitationData]);

  useEffect(() => {
    if (remainSecond <= 0) {
      clickHandler();
      return;
    }
    const timeout = setTimeout(() => {
      setRemainSecond(remainSecond - 1);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [remainSecond]);

  useEffect(() => {
    if (!isLoading) {
      trackPageView("ticket", {
        type: invitationData.type ?? "no ticket",
        invitor_name: invitationData.invitorId,
      });
      if (!invitationData) {
        navigate("/401");
        alert("없는 초대장입니다.");
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PageUI>
      <InvitedUsers invitedUsers={invitedUsers} />
      <MiddleSectionUI>
        <DescriptSectionUI>
          <TitleTxtUI>초대장이 도착했어요!</TitleTxtUI>
          <SubTitleTxtUI>당신, 루키즈가 되고싶어?</SubTitleTxtUI>
        </DescriptSectionUI>
        <Letter
          fromImageUrl={invitationData?.fromImageUrl}
          fromName={invitationData?.fromName}
        />
      </MiddleSectionUI>
      <FixedBototmSectionUI>
        <TimerButton
          onClick={clickHandler}
          timerOffset={remainSecond / totalSecond}
        />
        <NumTimer remainSecond={remainSecond} />
      </FixedBototmSectionUI>
    </PageUI>
  );
};

export default TicketPage;
