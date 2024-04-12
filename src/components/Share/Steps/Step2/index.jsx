import {
  ArrowButtonUI,
  AskSectionUI,
  BottomBoxUI,
  BoxTitleWrapperUI,
  FriendGroupImgUI,
  FriendGroupImgWrapperUI,
  FriendListUI,
  PopinPUI,
  ProgressBarGoalImgUI,
  ProgressBarSectionUI,
  Step2WrapperUI,
} from "./styles";
import { ProgressBar } from "../../ProgressBar";
import { SharedStatus } from "../../SharedStatus";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { Alert } from "../../../Alert";
import { VscInfo } from "react-icons/vsc";
import gsap from "gsap";

import friendGroupIconSrc from "./assets/friend_group_icon.webp";
import goalKeyIconSrc from "./assets/goal_key.webp";
import quietFaceIconSrc from "./assets/quiet_face.webp";

const Step2 = ({ next }) => {
  const maxSharedCnt = 3;
  const [friendSharedCnt, setFriendSharedCnt] = useState(0);
  const [alertOpen, setAlertOpen] = useState(false);
  const [isopen, setIsopen] = useState(false);
  const bottomBoxRef = useRef(null);

  const shareHandler = async () => {
    const weburl = "https://new-rudkids-front.vercel.app";
    if (!isMobile) {
      alert("모바일로 접속해주세요!");
      if (friendSharedCnt + 1 <= maxSharedCnt) {
        setFriendSharedCnt(friendSharedCnt + 1);
      }
      return;
    }
    try {
      await window.navigator.share({
        title: "일상속의 작은 재미의 상점 - Rudkids",
        text: "이곳에서 일상속의 재미 프로젝트들을 만나보세요!",
        url: weburl,
      });
      if (friendSharedCnt + 1 <= maxSharedCnt) {
        setFriendSharedCnt(friendSharedCnt + 1);
      }
    } catch (e) {}
  };

  const arrowButtonClickHandler = () => setIsopen(!isopen);
  const askSectionClickHandler = () => setAlertOpen(true);
  const alertCheckedHandler = () => setAlertOpen(false);

  let startTouchEvent = undefined;
  const touchStartHandler = (e) => {
    startTouchEvent = e;
  };

  let scrolling = null;
  const touchMoveHandler = (e) => {
    if (!scrolling) {
      if (startTouchEvent) {
        const st = startTouchEvent.touches?.[0]?.screenY;
        const ed = e.touches[0]?.screenY;
        if (ed - st > 5) {
          setIsopen(false);
        } else if (ed - st < 5) {
          setIsopen(true);
        }
      }
    }
    clearTimeout(scrolling);
    scrolling = setTimeout(() => {
      startTouchEvent = undefined;
      scrolling = undefined;
    }, 100);
    return false;
  };

  const getInClickHandler = () => {
    localStorage.setItem("share_complete", "true");
    next();
  };

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

  useEffect(() => {
    if (localStorage.getItem("share_complete") === "true") {
      next();
    }
  }, []);

  return (
    <Step2WrapperUI>
      <BottomBoxUI
        onTouchStart={touchStartHandler}
        onTouchMove={touchMoveHandler}
        ref={bottomBoxRef}
      >
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
          <FriendGroupImgUI alt="friendGroup" src={friendGroupIconSrc} />
        </FriendGroupImgWrapperUI>
        <BoxTitleWrapperUI>
          <PopinPUI fontSize={"25px"}>Rudkids is</PopinPUI>
          <PopinPUI fontSize={"35px"}>Invited Only</PopinPUI>
        </BoxTitleWrapperUI>
        <FriendListUI>
          {new Array(maxSharedCnt).fill("").map((_, idx) => {
            const isShared = idx < friendSharedCnt;
            return (
              <SharedStatus
                key={idx}
                isShared={isShared}
                idx={idx}
                active={friendSharedCnt === idx}
                onClick={shareHandler}
              />
            );
          })}
        </FriendListUI>
        <ProgressBarSectionUI>
          <ProgressBar
            length={maxSharedCnt}
            cnt={friendSharedCnt}
            onGetIn={getInClickHandler}
          />
          <ProgressBarGoalImgUI src={goalKeyIconSrc} />
        </ProgressBarSectionUI>
        <AskSectionUI onClick={askSectionClickHandler}>
          <VscInfo width="15px" />
          Why {maxSharedCnt} Friends?
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

export default Step2;
