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
  ModalUI,
  BottomBoxWrapper,
} from "./styles";
import { ProgressBar } from "./ProgressBar";
import { SharedStatus } from "./SharedStatus";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { Alert } from "../../Alert";
import { VscInfo } from "react-icons/vsc";
import friendGroupIconSrc from "./assets/friend_group_icon.webp";
import goalKeyIconSrc from "./assets/goal_key.webp";
import quietFaceIconSrc from "./assets/quiet_face.webp";
import { useUserQuery } from "../../../queries/user";

const Step2 = ({ next, isRender }) => {
  const maxSharedCnt = 3;
  const [friendSharedCnt, setFriendSharedCnt] = useState(0);
  const [alertOpen, setAlertOpen] = useState(false);
  const { data: userData } = useUserQuery();

  const modalRef = useRef(null);
  const bottomBoxRef = useRef(null);

  const [isopen, setIsopen] = useState(false);

  const shareHandler = async () => {
    const weburl = `https://www.rud.kids/invitation/${userData.id}`;
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

  const arrowButtonClickHandler = () => {
    if (isopen === true) {
      modalRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      modalRef.current.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    }
  };
  const askSectionClickHandler = () => setAlertOpen(true);
  const alertCheckedHandler = () => setAlertOpen(false);

  const getInClickHandler = () => {
    localStorage.setItem("share_complete", "true");
    next();
  };

  const scrollHandler = () => {
    if (modalRef.current.scrollTop >= 270) {
      setIsopen(true);
    } else {
      setIsopen(false);
    }
  };

  return (
    <>
      <ModalUI onScroll={scrollHandler} ref={modalRef}>
        <BottomBoxWrapper>
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
              <FriendGroupImgUI alt="friendGroup" src={friendGroupIconSrc} />
            </FriendGroupImgWrapperUI>
            <BoxTitleWrapperUI>
              <PopinPUI fontSize={"25px"}>Rudkids is</PopinPUI>
              <PopinPUI fontSize={"35px"}>Invited Only</PopinPUI>
            </BoxTitleWrapperUI>
            <FriendListUI>
              {new Array(maxSharedCnt).fill(null).map((_, idx) => {
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
        </BottomBoxWrapper>
      </ModalUI>
      <Alert
        open={alertOpen}
        imageUrl={quietFaceIconSrc}
        title={"Rudkids is<br />Not for everyone 👑"}
        content={"Rudkids is a place where only<br />lucky guys can come in."}
        buttonContent={"Yeeeaaah!"}
        onChecked={alertCheckedHandler}
      />
    </>
  );
};

export default Step2;
