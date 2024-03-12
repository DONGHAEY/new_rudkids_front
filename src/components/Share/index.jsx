import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

import { ShareButton } from "./ShareButton";
import { ProgressBar } from "./ProgressBar";
import Lottie from "lottie-web";

export const Share = () => {
  const [friendSharedStatList, setFriendSharedStatList] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [canpass, setCanpass] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: ref.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "/Rudkids_tape.json",
    });
    anim.addEventListener("complete", () => {
      ref.current.style.display = "none";
    });

    return () => anim.destroy();
  }, [ref.current]);

  const invitedFriendCnt = useMemo(() => {
    let invitedFriendCnt = 0;
    friendSharedStatList.forEach((d) => {
      if (d == true) {
        invitedFriendCnt += 1;
      }
    });
    return invitedFriendCnt;
  });

  useEffect(() => {
    if (invitedFriendCnt === friendSharedStatList.length) {
      setTimeout(() => {
        setCanpass(true);
      }, 1300);
    }
  }, [invitedFriendCnt, friendSharedStatList]);

  if (canpass) {
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
              alignItems: "center",
              gap: "10px",
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
            <ProgressBar
              length={friendSharedStatList.length}
              cnt={invitedFriendCnt}
            />
          </div>
          <Why5FriendsUI>
            <InfoImgUI src="/assets/Images/shareComponent/info.png" />
            Why 5 Friends?
          </Why5FriendsUI>
        </BlurBoxUI>
      </CenterWrapperUI>
      <div
        style={{
          position: "absolute",
          // backgroundColor: "black",
          scale: "148%",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
        ref={ref}
      />
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
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  font-family: "Poppins-SemiBold";
  background-color: #24ff00;
  color: black;
  border-radius: 30px;
  padding-inline: 15px;
  padding-block: 5px;
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
  overflow: hidden;
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
  font-size: 11px;
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  font-family: "Poppins-SemiBold";
`;

const BlurBoxUI = styled.div`
  display: flex;
  border: solid white 0.1px;
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
