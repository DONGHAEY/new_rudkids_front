import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

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
      <BoxTopUI>
        <img
          style={{
            width: "100%",
            // opacity: 0.5,
          }}
          src="/assets/Images/shareComponent/rudkids_album.png"
        />
      </BoxTopUI>
      <BoxMiddleUI>
        <img
          style={{
            width: "140px",
          }}
          src="/assets/Images/shareComponent/rudkids_logo.png"
        />
        <BoxTitleWrapperUI>
          <BoxTitleUI>Guys! Don't be</BoxTitleUI>
          <BoxTitleUI>so boring.</BoxTitleUI>
          <BoxTitleUI>Just Kidding.</BoxTitleUI>
        </BoxTitleWrapperUI>
        <BoxButtonUI>Rudkids world</BoxButtonUI>
      </BoxMiddleUI>
      <BoxBottomUI>Rudkids</BoxBottomUI>
    </ShareWrapperUI>
  );
};

/********************** */

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
  font-size: 31px;
  line-height: 120%;
`;

const BoxButtonUI = styled.p`
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  font-family: "Poppins-SemiBold";
  background-color: black;
  color: white;
  border-radius: 30px;
  padding-inline: 25px;
  padding-block: 3px;
  font-size: 24px;
  margin-top: 13px;
  cursor: pointer;
`;

const ShareWrapperUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  z-index: 1000;
  top: 0;
  left: 0;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

const BoxTopUI = styled.div`
  width: 100%;
  height: 250px;
  // overflow: hidden;
`;

const BoxMiddleUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  // padding: 5px;
  width: 100%;
  border-radius: 10px;
`;
const BoxBottomUI = styled.div`
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  font-family: "Poppins-SemiBold";
  padding-block: 30px;
  font-size: 16px;
`;
