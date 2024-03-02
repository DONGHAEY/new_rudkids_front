import { useEffect, useState } from "react";
import styled from "styled-components";
import useDevicetype from "../../hooks/useDeviceType";
import { ShareProgress } from "./ShareProgress";
//

export const Share = () => {
  const deviceType = useDevicetype();
  const weburl = "https://new-rudkids-front.vercel.app";

  const [sharedCount, setSharedCount] = useState(0);

  const Kakao = window.Kakao;
  useEffect(() => {
    if (!Kakao.isInitialized()) Kakao.init("89277aa3114d4374c718f792f03a60c2");
  }, []);

  async function shareMessage() {
    if (deviceType === "Web") {
      // Kakao.Share.sendDefault({
      //   objectType: "text",
      //   text: "일상속의 작은 재미의 상점 - Rudkids",
      //   link: {
      //     mobileWebUrl: weburl,
      //     webUrl: weburl,
      //   },
      //   serverCallbackArgs: {
      //     key: "value", // 사용자 정의 파라미터 설정
      //   },
      // });
      alert("모바일로 접속 부탁드립니다");
    } else {
      try {
        await window.navigator.share({
          title: "일상속의 작은 재미의 상점 - Rudkids",
          text: "이곳에서 일상속의 재미 프로젝트들을 만나보세요!",
          url: weburl,
        });
        setSharedCount(sharedCount + 1);
      } catch (e) {
        alert("공유 실패");
      }
    }
  }

  return (
    <ShareWrapperUI>
      <InvitedOnlyUI>
        Rudkids is
        <br />
        Invite Only
      </InvitedOnlyUI>
      <ShareProgress sharedCount={sharedCount} />
      <ShareButtonUI onClick={shareMessage}>🔗 Copy link</ShareButtonUI>
    </ShareWrapperUI>
  );
};

const ShareWrapperUI = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(196, 196, 196, 0.5);
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const ShareButtonUI = styled.button`
  background-color: #c3e6ff;
  color: black;
  font-size: 26px;
  width: 230px;
  height: 66px;
  border-radius: 10000px;
`;

const InvitedOnlyUI = styled.div`
  @font-face {
    font-family: "AppleGaramond-Light";
    src: url("/fonts/AppleGaramond/AppleGaramond-Light.ttf");
  }
  font-family: "AppleGaramond-Light";
  font-size: 41px;
`;
