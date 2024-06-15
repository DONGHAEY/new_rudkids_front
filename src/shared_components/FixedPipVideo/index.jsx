import { useRef } from "react";
import { FixedPipVideoUI, VideoUI } from "./styles";

export const FixedPipVideo = ({ videoSrc }) => {
  //
  const videoRef = useRef();
  //
  return (
    <FixedPipVideoUI>
      <VideoUI
        ref={videoRef}
        playsInline
        autoPlay
        onClick={() => videoRef.current.play()}
      >
        <source src={videoSrc} type="video/mp4" />
      </VideoUI>
    </FixedPipVideoUI>
  );
};
