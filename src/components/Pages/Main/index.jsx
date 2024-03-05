import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { CustomSlider } from "./SkipSlider/CustomSlider";

export const Main = () => {
  const videoRef = useRef(null);
  const [percentage, setPercentage] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  /** 영상페이지(건너뛰기) */

  useEffect(() => {
    if (!videoRef.current) return;
    const endTime = videoRef.current.duration;
    const interval = setInterval(() => {
      let currentTime = videoRef.current.currentTime;
      setPercentage((currentTime * 100) / endTime);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, [videoRef.current]);

  const goNextPage = () => {
    setTimeout(() => {
      window.location.href = "/hand-motion";
    }, 500);
  };

  useEffect(() => {
    if (percentage >= 100) {
      goNextPage();
    }
  }, [percentage]);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef?.current?.play();
      setIsPlayingVideo(true);
    }
  };

  return (
    <MainWrapperUI>
      <VideoWrapperUI>
        <EngagingVideoUI ref={videoRef} playsInline autoPlay={"autoplay"} loop>
          <source src="/videos/engage.mp4" type="video/mp4" />
        </EngagingVideoUI>
        {!isPlayingVideo && (
          <TabToPlayWrapperUI onClick={playVideo}>
            <p>Tab to Play</p>
          </TabToPlayWrapperUI>
        )}
      </VideoWrapperUI>
      {
        <SkipButtomWrapperUI>
          <CustomSlider slidedHandler={goNextPage} />
        </SkipButtomWrapperUI>
      }
    </MainWrapperUI>
  );
};

const MainWrapperUI = styled.div`
  width: 100vw;
  height: 100vh;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EngagingVideoUI = styled.video`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
`;
