import { useRef, useState } from "react";
import {
  CallBox,
  ModalUI,
  ViedeoImgUI,
  CallFromInfoUI,
  ProfileNmTxtUI,
  FaceTimeTxtUI,
  CallBtnUI,
  CallOffImgBtnUI,
  CallInfoUI,
  CallTextInfo,
  VideoUI,
  ThumnailUI,
  CallFromImgUI,
} from "./styles";
import viedeoIconSrc from "./assets/viedeo-icon.png";
import profileSrc from "./assets/profile.png";
import facetimeSignSrc from "./assets/facetime_sign.svg";
import callingLottie from "./assets/calling.json";
import { Player } from "@lottiefiles/react-lottie-player";
import callOffSrc from "./assets/call_off.svg";
import engageVideoSrc from "./assets/video.mp4";
import gsap from "gsap";

const CallingModal = () => {
  const [open, setOpen] = useState(true);
  const [sceneName, setSceneName] = useState("first");

  const callBoxRef = useRef();
  const callIconRef = useRef();
  const videoRef = useRef();

  const onAccept = () => {
    const tl = gsap.timeline();
    tl.to(callBoxRef.current, {
      opacity: 0.3,
      duration: 0.3,
    })
      .to(callBoxRef.current, {
        opacity: 1,
        duration: 0.3,
        onStart: () => {
          setSceneName("calling");
        },
      })
      .to(callBoxRef.current, {
        width: "100%",
        height: "100%",
        duration: 0.3,
      })
      .to(
        callIconRef.current,
        {
          top: "5%",
          right: "3%",
          duration: 0.1,
        },
        "<"
      )
      .to(
        videoRef.current,
        {
          borderRadius: 0,
          duration: 0.3,
          onComplete: () => {
            videoRef.current.play();
          },
        },
        "<"
      );
  };

  const onFinished = () => {
    gsap.to(callBoxRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setOpen(false);
      },
    });
  };

  const scenes = {
    first: <Step1 onAccept={onAccept} />,
    calling: <Step2 onFinished={onFinished} />,
  };

  return (
    <ModalUI open={open} disableAutoFocus={true}>
      <CallBox ref={callBoxRef}>
        <ViedeoImgUI src={viedeoIconSrc} ref={callIconRef} />
        {scenes[sceneName]}
        <VideoUI ref={videoRef} playsInline autoPlay onEnded={onFinished}>
          <source src={engageVideoSrc} type="video/mp4" />
        </VideoUI>
      </CallBox>
    </ModalUI>
  );
};

export const Step1 = ({ onAccept }) => {
  return (
    <>
      <CallFromInfoUI>
        <CallFromImgUI src={profileSrc} />
        <ProfileNmTxtUI>Dasha</ProfileNmTxtUI>
        <FaceTimeTxtUI>FaceTime...</FaceTimeTxtUI>
      </CallFromInfoUI>
      <CallBtnUI onClick={onAccept}>
        <Player controls={true} src={callingLottie} autoplay loop />
      </CallBtnUI>
    </>
  );
};

export const Step2 = ({ onFinished }) => {
  return (
    <>
      <CallInfoUI>
        <img src={profileSrc} height="100%" />
        <CallTextInfo>
          <p>Dasha</p>
          <img src={facetimeSignSrc} />
        </CallTextInfo>
      </CallInfoUI>
      <CallOffImgBtnUI onClick={onFinished} src={callOffSrc} />
    </>
  );
};

export default CallingModal;