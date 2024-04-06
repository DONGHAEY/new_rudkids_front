import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import {
  EngagingVideoUI,
  MainWrapperUI,
  SkipButtomWrapperUI,
  TabToPlayWrapperUI,
  VideoWrapperUI,
} from "./styles";
import SkipSlider from "./SkipSlider";
import engageVideoSrc from "./assets/engage.mp4";

const Main = () => {
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
  const onPlayHandler = () => setIsPlayingVideo(true);
  const onPauseHandler = () => setIsPlayingVideo(false);
  const onEndedHandler = () => {
    goNextPage();
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
          onPlay={onPlayHandler}
          onPause={onPauseHandler}
          onEnded={onEndedHandler}
        >
          <source src={engageVideoSrc} type="video/mp4" />
        </EngagingVideoUI>
        {!isPlayingVideo && (
          <TabToPlayWrapperUI onClick={playVideo}>
            Tab to Play
          </TabToPlayWrapperUI>
        )}
      </VideoWrapperUI>
      <SkipButtomWrapperUI ref={skipButtomWrapperRef}>
        <SkipSlider slidedHandler={goNextPage} />
      </SkipButtomWrapperUI>
    </MainWrapperUI>
  );
};

export default Main;
