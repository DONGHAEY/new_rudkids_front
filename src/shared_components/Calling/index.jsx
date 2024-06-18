import { useEffect, useRef, useState } from "react";
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
  CallFromImgUI,
  ThumnailImgUI,
  FaceTimeKrTxtUI,
  FaceTimeSignUI,
  SpacerUI,
} from "./styles";
import viedeoIconSrc from "./assets/viedeo-icon.png";
import profileSrc from "./assets/profile.png";
import callingLottie from "./assets/calling.json";
import { Player } from "@lottiefiles/react-lottie-player";
import callOffSrc from "./assets/call_off.png";
import gsap from "gsap";
import { track } from "@amplitude/analytics-browser";
import thumnailSrc from "./assets/thumnail.png";
import { Icon } from "@iconify/react/dist/iconify.js";

const CallingModal = ({ videoSrc, onClosed, pageFor = "" }) => {
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
    track("hang up", {
      before: pageFor,
      duration_time: Number(videoRef.current.currentTime).toFixed(1),
    });
    gsap.to(callBoxRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.in",
      onComplete: () => {
        setOpen(false);
      },
    });
  };

  useEffect(() => {
    if (open === false) {
      onClosed();
    }
  }, [open]);

  const scenes = {
    first: <Step1 onAccept={onAccept} />,
    calling: <Step2 onFinished={onFinished} />,
  };

  return (
    <ModalUI open={open} disableAutoFocus={true}>
      <CallBox ref={callBoxRef}>
        <ViedeoImgUI src={viedeoIconSrc} ref={callIconRef} />
        {scenes[sceneName]}
        <VideoUI ref={videoRef} playsInline onEnded={onFinished}>
          <source src={videoSrc} type="video/mp4" />
        </VideoUI>
        <ThumnailImgUI src={thumnailSrc} />
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
        <SpacerUI />
        <FaceTimeTxtUI>FaceTime...</FaceTimeTxtUI>
      </CallFromInfoUI>
      <CallBtnUI onClick={onAccept}>
        <Player controls={true} src={callingLottie} autoplay loop />
      </CallBtnUI>
    </>
  );
};

export const Step2 = ({ onFinished }) => {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setSec(sec + 1);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [sec]);

  return (
    <>
      <CallInfoUI>
        <img src={profileSrc} height="100%" />
        <CallTextInfo>
          <p>Dasha</p>
          <FaceTimeSignUI>
            <Icon fontSize="15px" icon="ph:video-camera-fill" />
            <FaceTimeTxtUI>FaceTime</FaceTimeTxtUI>
            <FaceTimeKrTxtUI>영상통화</FaceTimeKrTxtUI>
          </FaceTimeSignUI>
        </CallTextInfo>
      </CallInfoUI>
      {sec >= 5 && <CallOffImgBtnUI onClick={onFinished} src={callOffSrc} />}
    </>
  );
};

export default CallingModal;
