import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import {
  EngagingVideoUI,
  PageUI,
  SkipButtomWrapperUI,
  TabToPlayWrapperUI,
  VideoWrapperUI,
} from "./styles";
import SkipSlider from "./SkipSlider";
import rudkidsLogoSrc from "./assets/rudkids_logo.png";
import engageVideoSrc from "./assets/engage.mp4";

const VideoPage = () => {
  const videoRef = useRef(null);
  const pageRef = useRef(null);
  const skipSliderWrapperRef = useRef(null);
  const navigate = useNavigate();

  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  /** 영상페이지(건너뛰기) */
  const goNextPage = () => {
    navigate("/");
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
    gsap.to(pageRef.current, {
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
    <PageUI ref={pageRef}>
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
            <img width={"50%"} src={rudkidsLogoSrc} />
            <span>Tab to Play</span>
          </TabToPlayWrapperUI>
        )}
      </VideoWrapperUI>
      <SkipButtomWrapperUI ref={skipSliderWrapperRef}>
        <SkipSlider
          slidedHandler={goNextPage}
          slidingHandler={slidingHandler}
        />
      </SkipButtomWrapperUI>
    </PageUI>
  );
};

export default VideoPage;