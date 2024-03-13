import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

import { ShareButton } from "./ShareButton";
import { ProgressBar } from "./ProgressBar";
// import Lottie from "lottie-web";
// import Lottie from "lottie-react";
// import Lottie from "react-lottie";
import { Player, PlayerEvent } from "@lottiefiles/react-lottie-player";
import gsap from "gsap";
// import lockToUnlockAnim from "../../../public/lock_to_unlock.json";

export const Share = () => {
  const shareWrapperRef = useRef(null);

  const [friendSharedStatList, setFriendSharedStatList] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [canpass, setCanpass] = useState(false);
  const loaderRef = useRef(null);
  const lockerAnimRef = useRef(null);

  // useEffect(() => {
  //   const anim = Lottie.loadAnimation({
  //     container: loaderRef.current, // the dom element that will contain the animation
  //     renderer: "svg",
  //     loop: false,
  //     autoplay: true,
  //     path: "/Rudkids_tape.json",
  //   });
  //   anim.addEventListener("complete", () => {
  //     loaderRef.current.style.display = "none";
  //   });
  //   return () => anim.destroy();
  // }, [loaderRef.current]);

  const invitedFriendCnt = useMemo(() => {
    let invitedFriendCnt = 0;
    friendSharedStatList.forEach((d) => {
      if (d === true) {
        invitedFriendCnt += 1;
      }
    });
    return invitedFriendCnt;
  });

  useEffect(() => {
    if (invitedFriendCnt === friendSharedStatList.length) {
      lockerAnimRef.current.play();
    }
  }, [invitedFriendCnt, friendSharedStatList]);

  if (canpass) {
    //모두 초대 되었다는 API 요청
    return null;
  }

  const onSharedHandler = (idx_) => {
    setFriendSharedStatList((friendSharedStatList) => {
      return friendSharedStatList.map((stat, idx) => {
        if (idx_ === idx) {
          return true;
        }
        return stat;
      });
    });
  };

  return (
    <ShareWrapperUI>
      <CenterWrapperUI ref={shareWrapperRef}>
        {/* <LockImgUI src={"/assets/Images/shareComponent/Lock.png"} /> */}
        <Player
          src="/lock_to_unlock.json"
          className="players"
          direction={-1}
          style={{ height: "40px" }}
          ref={lockerAnimRef}
          onEvent={(e) => {
            if (e === PlayerEvent.Complete) {
              gsap.to(shareWrapperRef.current, {
                marginBottom: 1000,
                opacity: 0,
                duration: 1,
                onComplete: () => {
                  setCanpass(true);
                },
              });
            }
          }}
        />
        <ShareBoxUI>
          <ShareBoxTopSectionUI>
            <BoxTitleUI style={{ fontSize: "23px" }}>Rudkids is</BoxTitleUI>
            <BoxTitleUI style={{ fontSize: "30px" }}>Invite Only</BoxTitleUI>
            <BoxDescriptionUI>INVITE 5 FRIENDS</BoxDescriptionUI>
          </ShareBoxTopSectionUI>
          <img src="/assets/Images/shareComponent/label.png" />
          <ShareBoxMiddleSectionUI>
            <FriendListUI>
              {friendSharedStatList.map((friendSharedStat, idx) => (
                <ShareButton
                  key={idx}
                  isShared={friendSharedStat}
                  idx={idx}
                  onShared={() => onSharedHandler(idx)}
                />
              ))}
            </FriendListUI>
            <ProgressBar
              length={friendSharedStatList.length}
              cnt={invitedFriendCnt}
            />
          </ShareBoxMiddleSectionUI>
          <ShareBoxBottomSectionUI>
            <InfoImgUI src="/assets/Images/shareComponent/info.png" />
            Why 5 Friends?
          </ShareBoxBottomSectionUI>
        </ShareBoxUI>
      </CenterWrapperUI>
      {/* <div
        ref={loaderRef}
        style={{
          position: "absolute",
          scale: "150%",
          width: "100%",
          height: "200%",
          zIndex: 1,
        }}
      /> */}
    </ShareWrapperUI>
  );
};

/********************** */

const LockImgUI = styled.img`
  width: 30px;
`;
const InfoImgUI = styled.img`
  width: 15px;
  height: 15px;
  objectfit: cover;
  cursor: pointer;
`;

const BoxTitleWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoxTitleUI = styled.p`
  @font-face {
    font-family: "Poppins-Bold";
    src: url("/fonts/Poppins/Poppins-Bold.ttf");
  }
  font-family: "Poppins-Bold";
  margin: 0;
  line-height: 30px;
`;

const BoxDescriptionUI = styled.p`
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  font-family: "Poppins-SemiBold";
  background-color: black;
  color: white;
  border-radius: 30px;
  padding-inline: 15px;
  padding-block: 3px;
  font-size: 13px;
  margin-top: 13px;
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
  flex-wrap: wrap;
  gap: 10px;
  max-width: 300px;
  overflow: scroll;
`;

const ShareBoxBottomSectionUI = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: #575757;
  font-size: 11px;
  margin-top: 30px;
  margin-bottom: 30px;
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  font-family: "Poppins-SemiBold";
`;

const ShareBoxUI = styled.div`
  display: flex;
  border: solid white 0.1px;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  background-color: rgba(196, 196, 196, 0.5);
  border-radius: 30px;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
`;

const CenterWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 20px;
  max-width: 350px;
`;

const ShareBoxTopSectionUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #89ff60;
  padding-block: 30px;
`;

const ShareBoxMiddleSectionUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 25px;
`;
