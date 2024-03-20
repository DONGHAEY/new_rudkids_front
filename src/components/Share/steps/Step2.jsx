import styled from "styled-components";
import { ProgressBar } from "../ProgressBar";
import { SharedFriend } from "../SharedFriend";
import { useEffect, useMemo, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { Alert } from "../../Alert";
import gsap from "gsap";

const lockIconSrc = "/assets/Images/share/Steps/Step2/lock_icon.png";
const arrowDownIconSrc = "/assets/Images/share/Steps/Step2/arrow_down.png";
const arrowUpIconSrc = "/assets/Images/share/Steps/Step2/arrow.png";
const friendGroupIconSrc =
  "/assets/Images/share/Steps/Step2/friend_group_icon.png";
const addIconSrc = "/assets/Images/share/Steps/Step2/add.png";
const goalKeyIconSrc = "/assets/Images/share/Steps/Step2/goal_key.png";
const infoIconSrc = "/assets/Images/share/Steps/Step2/info.png";
const quietFaceIconSrc = "/assets/Images/share/Steps/Step2/quiet_face.png";

export const Step2 = ({ next }) => {
  const friendCnt = 5;
  const [friendSharedCount, setFriendSharedCount] = useState(0);
  const [alertOpen, setAlertOpen] = useState(false);
  const [isopen, setIsopen] = useState(false);
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
    const weburl = "https://new-rudkids-front.vercel.app";
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

  const arrowButtonClickHandler = () => setIsopen(!isopen);

  const ArrowDownIconImg = <ArrowButtonImgUI src={arrowDownIconSrc} />;
  const ArrowUpIconImg = <ArrowButtonImgUI src={arrowUpIconSrc} />;

  return (
    <Step2WrapperUI>
      <LockDescriptionBoxUI>
        <img width="13px" src={lockIconSrc} />
        <PopinPUI fontSize={"13px"}>This Page is Locked</PopinPUI>
      </LockDescriptionBoxUI>
      <BottomBoxUI ref={bottomBoxRef}>
        <ArrowButtonUI
          onClick={arrowButtonClickHandler}
          children={isopen ? ArrowDownIconImg : ArrowUpIconImg}
        />
        <img width="150px" src={friendGroupIconSrc} />
        <BoxTitleWrapperUI>
          <PopinPUI fontSize={"25px"}>Rudkids is</PopinPUI>
          <PopinPUI fontSize={"35px"}>Invited Only</PopinPUI>
        </BoxTitleWrapperUI>
        <FriendListUI>
          <div>
            <SharedButtonUI onClick={shareHandler}>
              <img width="30%" src={addIconSrc} />
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
          <ProgressBar
            length={friendCnt}
            cnt={friendSharedCount}
            onGetIn={next}
          />
          <ProgressBarSectionGoalImgUI src={goalKeyIconSrc} />
        </ProgressBarSectionUI>
        <AskSectionUI onClick={() => setAlertOpen(true)}>
          <InfoImgUI src={infoIconSrc} />
          Why 5 Friends?
        </AskSectionUI>
      </BottomBoxUI>
      <Alert
        open={alertOpen}
        imageUrl={quietFaceIconSrc}
        title={"Rudkids is<br />Not for everyone 👑"}
        content={"Rudkids is a place where only<br />lucky guys can come in."}
        buttonContent={"Yeeeaaah!"}
        onChecked={() => setAlertOpen(false)}
      />
    </Step2WrapperUI>
  );
};

const Step2WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  @font-face {
    font-family: "Poppins-Bold";
    src: url("/fonts/Poppins/Poppins-Bold.ttf");
  }
`;

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

const AskSectionUI = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: #575757;
  font-size: 15px;
  margin-top: 25px;
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
  font-family: "Poppins-Bold";
  margin: 0;
  font-size: ${({ fontSize }) => fontSize ?? "31px"};
  line-height: 120%;
`;

const ArrowButtonUI = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: -15px;
  border-radius: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ArrowButtonImgUI = styled.img`
  width: 60%;
  object-fit: cover;
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
  max-height: 70%;
  top: 270px;
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
