import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AppleSlider } from "./SkipSlider/CustomSlider";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export const Main = () => {
  const videoRef = useRef(null);
  const skipButtomWrapperRef = useRef(null);
  const navigate = useNavigate();

  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  /** 영상페이지(건너뛰기) */

  const goNextPage = () => {
    navigate("list");
  };

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current?.play();
    }
  };

  useEffect(() => {
    if (isPlayingVideo) {
      gsap.fromTo(
        skipButtomWrapperRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 10,
          delay: 5, // 5초 지연 추가
        }
      );
    }
  }, [isPlayingVideo]);

  return (
    <MainWrapperUI>
      <VideoWrapperUI>
        <EngagingVideoUI
          ref={videoRef}
          playsInline
          // autoPlay
          onPlay={() => {
            setIsPlayingVideo(true);
          }}
          onPause={() => {
            setIsPlayingVideo(false);
          }}
          onEnded={() => {
            goNextPage();
          }}
        >
          <source src="/videos/engage.mp4" type="video/mp4" />
        </EngagingVideoUI>
        {!isPlayingVideo && (
          <TabToPlayWrapperUI onClick={playVideo}>
            <p>Tab to Play</p>
          </TabToPlayWrapperUI>
        )}
      </VideoWrapperUI>

      <SkipButtomWrapperUI ref={skipButtomWrapperRef}>
        <AppleSlider slidedHandler={goNextPage} />
      </SkipButtomWrapperUI>
    </MainWrapperUI>
  );
};

const MainWrapperUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const TabToPlayWrapperUI = styled.div`
  position: absolute;
  z-index: 2;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);
  align-items: center;
  font-size: 35px;
`;

const VideoWrapperUI = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const SkipButtomWrapperUI = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  opacity: 0;
`;

const EngagingVideoUI = styled.video`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
`;
