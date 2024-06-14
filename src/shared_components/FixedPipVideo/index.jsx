import { useRef } from "react";
import { FixedPipVideoUI, VideoUI } from "./styles";
import asd from "../Calling/assets/video.mp4";

export const FixedPipVideo = () => {
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
        <source src={asd} type="video/mp4" />
      </VideoUI>
    </FixedPipVideoUI>
  );
};
