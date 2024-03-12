import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

import { ShareButton } from "./ShareButton";
import { ProgressBar } from "./ProgressBar";

export const Share = () => {
  const [friendSharedStatList, setFriendSharedStatList] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const percentage = useMemo(() => {
    const friendCnt = friendSharedStatList.length;
    let invitedFriendCnt = 0;
    friendSharedStatList.forEach((d) => {
      if (d == true) {
        invitedFriendCnt += 1;
      }
    });
    return (invitedFriendCnt * 100) / friendCnt;
  });

  const allInvited = useMemo(() => {
    return percentage === 100;
  }, [percentage]);

  if (allInvited) {
    //모두 초대 되었다는 API 요청
    return null;
  }

  return (
    <ShareWrapperUI>
      <CenterWrapperUI>
        <LockImgUI src={"/assets/Images/shareComponent/Lock.png"} />
        <BlurBoxUI>
          <InviteOnlyImageUI
            src={"/assets/Images/shareComponent/invite_only.png"}
          />
          <Invite5FriendsUI>INVITE 5 FRIENDS</Invite5FriendsUI>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0px",
            }}
          >
            <FriendListUI>
              {friendSharedStatList.map((friendSharedStat, idx_) => {
                return (
                  <ShareButton
                    key={idx_}
                    isShared={friendSharedStat}
                    idx={idx_}
                    onShared={() => {
                      setFriendSharedStatList((friendSharedStatList) => {
                        return friendSharedStatList.map((stat, idx) => {
                          if (idx_ === idx) {
                            return true;
                          }
                          return stat;
                        });
                      });
                    }}
                  />
                );
              })}
            </FriendListUI>
            <ProgressBar percentage={percentage} />
          </div>
          <Why5FriendsUI>
            <InfoImgUI src="/assets/Images/shareComponent/info.png" />
            Why 5 Friends?
          </Why5FriendsUI>
        </BlurBoxUI>
      </CenterWrapperUI>
    </ShareWrapperUI>
  );
};

const LockImgUI = styled.img`
  width: 30px;
`;
const InfoImgUI = styled.img`
  width: 15px;
  height: 15px;
  objectfit: cover;
  cursor: pointer;
`;

const Invite5FriendsUI = styled.p`
  background-color: #000000;
  color: white;
  border-radius: 30px;
  padding-inline: 10px;
  padding-block: 5px;
  font-weight: bold;
  font-size: 13px;
`;

const ShareWrapperUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 1000;
  top: 0;
  left: 0;
`;

const FriendListUI = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-inline: 30px;
  padding-block: 15px;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 300px;
  overflow: scroll;
`;

const Why5FriendsUI = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 20px;
  gap: 3px;
  margin-top: 20px;
  color: #575757;
  font-size: 13px;
  font-weight: bold;
`;

const BlurBoxUI = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 15px;
  background-color: rgba(196, 196, 196, 0.5);
  border-radius: 30px;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
`;

const CenterWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 20px;
  max-width: 350px;
`;

const InviteOnlyImageUI = styled.img`
  width: 60%;
`;
