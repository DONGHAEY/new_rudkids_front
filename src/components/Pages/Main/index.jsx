import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AppleSlider } from "./SkipSlider/CustomSlider";
import gsap from "gsap";

export const Main = () => {
  const videoRef = useRef(null);
  const skipButtomWrapperRef = useRef(null);

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

  let appearSkipSectionTimeout = null;
  useEffect(() => {
    if (!skipButtomWrapperRef.current) return;
    if (!isPlayingVideo) return;
    appearSkipSectionTimeout = setTimeout(() => {
      gsap.fromTo(
        skipButtomWrapperRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 10,
        },
        "<"
      );
    }, 6000);

    return () => {
      clearTimeout(appearSkipSectionTimeout);
    };
  }, [skipButtomWrapperRef.current, isPlayingVideo]);

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
    }
  };

  return (
    <MainWrapperUI>
      <VideoWrapperUI>
        <EngagingVideoUI
          ref={videoRef}
          playsInline
          autoPlay
          onPlay={() => {
            setIsPlayingVideo(true);
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
  opacity: 0;
`;

const EngagingVideoUI = styled.video`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
`;
