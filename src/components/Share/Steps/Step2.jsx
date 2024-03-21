import styled from "styled-components";
import { ProgressBar } from "../ProgressBar";
import { SharedStatus } from "../SharedStatus";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { Alert } from "../../Alert";
import { BiSolidLockAlt } from "react-icons/bi";
import { VscInfo } from "react-icons/vsc";
import { IoAdd } from "react-icons/io5";
import gsap from "gsap";

const friendGroupIconSrc =
  "/assets/Images/share/Steps/Step2/friend_group_icon.webp";
const goalKeyIconSrc = "/assets/Images/share/Steps/Step2/goal_key.webp";
const quietFaceIconSrc = "/assets/Images/share/Steps/Step2/quiet_face.webp";

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
  const askSectionClickHandler = () => setAlertOpen(true);
  const alertCheckedHandler = () => setAlertOpen(false);

  return (
    <Step2WrapperUI>
      <LockDescriptionBoxUI>
        <BiSolidLockAlt width="13px" />
        <PopinPUI fontSize={"13px"}>This Page is Locked</PopinPUI>
      </LockDescriptionBoxUI>
      <BottomBoxUI ref={bottomBoxRef}>
        <ArrowButtonUI
          onClick={arrowButtonClickHandler}
          children={
            isopen ? (
              <FaArrowDown color="white" width="60%" />
            ) : (
              <FaArrowUp color="white" width="60%" />
            )
          }
        />
        <FriendGroupImgWrapperUI>
          <FriendGroupImgUI fetchpriority="high" src={friendGroupIconSrc} />
        </FriendGroupImgWrapperUI>
        <BoxTitleWrapperUI>
          <PopinPUI fontSize={"25px"}>Rudkids is</PopinPUI>
          <PopinPUI fontSize={"35px"}>Invited Only</PopinPUI>
        </BoxTitleWrapperUI>
        <FriendListUI>
          <ShareButtonUI
            children={<IoAdd width="100%" color="gray" size={30} />}
            onClick={shareHandler}
          />
          {new Array(friendCnt).fill("").map((_, idx) => {
            const isShared = idx < friendSharedCount;
            return <SharedStatus key={idx} isShared={isShared} idx={idx} />;
          })}
        </FriendListUI>
        <ProgressBarSectionUI>
          <ProgressBar
            length={friendCnt}
            cnt={friendSharedCount}
            onGetIn={next}
          />
          <ProgressBarSectionGoalImgUI src={goalKeyIconSrc} />
        </ProgressBarSectionUI>
        <AskSectionUI onClick={askSectionClickHandler}>
          <VscInfo width="15px" />
          Why 5 Friends?
        </AskSectionUI>
      </BottomBoxUI>
      <Alert
        open={alertOpen}
        imageUrl={quietFaceIconSrc}
        title={"Rudkids is<br />Not for everyone 👑"}
        content={"Rudkids is a place where only<br />lucky guys can come in."}
        buttonContent={"Yeeeaaah!"}
        onChecked={alertCheckedHandler}
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
  @font-face {
    font-family: "Poppins-Medium";
    src: url("/fonts/Poppins/Poppins-Medium.ttf");
  }
`;

const FriendGroupImgWrapperUI = styled.div`
  height: 90px;
`;

const FriendGroupImgUI = styled.img`
  height: 100%;
  object-fit: cover;
`;

const ShareButtonUI = styled.div`
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 100%;
  aspect-ratio: 1 / 1;
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

const LockDescriptionBoxUI = styled.div`
  position: absolute;
  top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
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
  gap: 10px;
  width: 75%;
  height: 70px;
  margin-top: 30px;
  background-color: #efefef;
  border-radius: 30px;
  overflow-x: scroll;
`;
