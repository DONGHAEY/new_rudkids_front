import styled from "styled-components";
import { ProgressBar } from "../ProgressBar";
import { SharedFriend } from "../SharedFriend";
import { useEffect, useMemo, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import gsap from "gsap";

export const Step2 = ({ ref }) => {
  const friendCnt = 5;
  const [friendSharedCount, setFriendSharedCount] = useState(0);

  const [isopen, setIsopen] = useState(false);

  const weburl = "https://new-rudkids-front.vercel.app";
  const bottomBoxRef = useRef(null);

  useEffect(() => {
    if (isopen === false) {
      gsap.to(bottomBoxRef.current, {
        top: "270px",
        duration: 0.5,
      });
    } else {
      gsap.to(bottomBoxRef.current, {
        top: "0px",
        duration: 0.5,
      });
    }
  }, [bottomBoxRef.current, isopen]);

  const shareHandler = async () => {
    if (!isMobile) {
      alert("모바일로 접속해주세요!");
      if (friendSharedCount + 1 <= friendCnt) {
        setFriendSharedCount(friendSharedCount + 1);
      }
      return;
    }
    try {
      await window.navigator.share({
        title: "일상속의 작은 재미의 상점 - Rudkids",
        text: "이곳에서 일상속의 재미 프로젝트들을 만나보세요!",
        url: weburl,
      });
      if (friendSharedCount + 1 <= friendCnt) {
        setFriendSharedCount(friendSharedCount + 1);
      }
    } catch (e) {}
  };

  return (
    <Step2WrapperUI>
      <LockDescriptionBoxUI>
        <img
          style={{
            width: "13px",
          }}
          src="/assets/Images/shareComponent/lock_icon.png"
        />
        <PopinPUI fontSize={"13px"}>This Page is Locked</PopinPUI>
      </LockDescriptionBoxUI>
      <BottomBoxUI
        style={{
          top: "270px",
        }}
        ref={bottomBoxRef}
      >
        <ArrowButtonUI
          onClick={() => setIsopen(!isopen)}
          children={
            <img
              style={{
                width: "60%",
                objectFit: "cover",
              }}
              src={
                isopen
                  ? "/assets/Images/shareComponent/arrow_down.png"
                  : "/assets/Images/shareComponent/arrow.png"
              }
            />
          }
        />
        <img
          style={{ width: "150px" }}
          src="/assets/Images/shareComponent/friend_group_icon.png"
        />
        <BoxTitleWrapperUI>
          <PopinPUI fontSize={"25px"}>Rudkids is</PopinPUI>
          <PopinPUI fontSize={"35px"}>Invited Only</PopinPUI>
        </BoxTitleWrapperUI>
        <FriendListUI>
          <div>
            <SharedButtonUI onClick={shareHandler}>
              <img
                style={{ width: "30%" }}
                src={"/assets/Images/shareComponent/add.png"}
              />
            </SharedButtonUI>
          </div>
          {new Array(friendCnt).fill("").map((_, idx) => (
            <SharedFriend
              key={idx}
              isShared={idx < friendSharedCount ? true : false}
              idx={idx}
            />
          ))}
        </FriendListUI>
        <ProgressBarSectionUI>
          <ProgressBar length={friendCnt} cnt={friendSharedCount} />
          <ProgressBarSectionGoalImgUI
            src={"/assets/Images/shareComponent/goal_key.png"}
          />
        </ProgressBarSectionUI>
        <AskSectionUI>
          <InfoImgUI src="/assets/Images/shareComponent/info.png" />
          Why 5 Friends?
        </AskSectionUI>
      </BottomBoxUI>
    </Step2WrapperUI>
  );
};

const SharedButtonUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 100%;
`;

const Step2WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const AskSectionUI = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: #575757;
  font-size: 15px;
  margin-top: 25px;
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  font-family: "Poppins-SemiBold";
  cursor: pointer;
`;

const InfoImgUI = styled.img`
  width: 15px;
  height: 15px;
  objectfit: cover;
`;

const ProgressBarSectionUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: 30px;
`;

const ProgressBarSectionGoalImgUI = styled.img`
  position: absolute;
  right: 0;
  top: -10px;
  width: 55px;
`;

const BoxTitleWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PopinPUI = styled.p`
  @font-face {
    font-family: "Poppins-Bold";
    src: url("/fonts/Poppins/Poppins-Bold.ttf");
  }
  font-family: "Poppins-Bold";
  margin: 0;
  font-size: ${({ fontSize }) => fontSize ?? "31px"};
  line-height: 120%;
`;

const ArrowButtonUI = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: -20px;
  border-radius: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LockDescriptionBoxUI = styled.div`
  position: absolute;
  top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: rgba(255, 255, 255, 60%);
  border-radius: 30px;
  padding: 15px;
  padding-inline: 20px;
`;

const BottomBoxUI = styled.div`
  background-color: rgba(255, 255, 255, 60%);
  width: 100%;
  max-height: 80%;
  padding-block: 40px;
  position: relative;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FriendListUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-inline: 15px;
  padding-block: 15px;
  gap: 20px;
  width: 75%;
  height: 70px;
  margin-top: 30px;
  background-color: #efefef;
  border-radius: 30px;
  overflow-x: scroll;
`;
