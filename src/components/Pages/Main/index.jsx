import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SkipSlider } from "./SkipSlider";

export const Main = () => {
  const videoRef = useRef(null);
  const [percentage, setPercentage] = useState(0);
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
    }, 300);
  };

  useEffect(() => {
    if (percentage >= 100) {
      goNextPage();
    }
  }, [percentage]);

  return (
    <MainWrapperUI>
      <EngagingVideoUI ref={videoRef} muted autoPlay>
        <source src="/videos/engage.mp4" type="video/mp4" />
      </EngagingVideoUI>
      {percentage > 0 && (
        <SkipButtomWrapperUI>
          <SkipSlider onUnlockedHandler={goNextPage} />
        </SkipButtomWrapperUI>
      )}
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

const SkipButtomWrapperUI = styled.div`
  position: absolute;
  bottom: 0;
  color: white;
  margin-bottom: 10px;
`;

const EngagingVideoUI = styled.video`
  height: 100%;
  width: 100%;
`;
