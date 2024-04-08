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
  const mainWrapperRef = useRef(null);
  const skipSliderWrapperRef = useRef(null);
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
  const slidingHandler = (offset = 1) => {
    gsap.to(mainWrapperRef.current, {
      opacity: 1 - offset,
    });
  };

  useEffect(() => {
    if (isPlayingVideo) {
      gsap.fromTo(
        skipSliderWrapperRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 5,
          delay: 5, // 5초 지연 추가
        }
      );
    } else {
      gsap.set(skipSliderWrapperRef.current, {
        opacity: 0,
      });
    }
  }, [isPlayingVideo]);

  return (
    <MainWrapperUI ref={mainWrapperRef}>
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
      <SkipButtomWrapperUI ref={skipSliderWrapperRef}>
        <SkipSlider
          slidedHandler={goNextPage}
          slidingHandler={slidingHandler}
        />
      </SkipButtomWrapperUI>
    </MainWrapperUI>
  );
};

export default Main;
