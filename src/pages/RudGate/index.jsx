import {
  PageUI,
  WecamSectionUI,
  WebcamTemplateUI,
  BottomSectionUI,
  AbsoluteCenterUI,
  ResultImgUI,
  ButtonListUI,
  ShareBtnUI,
  PassStatImgUI,
  CloseImgUI,
  BackBtnUI,
  PassBtnUI,
  JoinUsImgUI,
  AllowReqImgUI,
  TakeBtnSectionUI,
} from "./styles";
//
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import rudBottomSrc from "./assets/rud_gate_bottom.svg";
import { Hands } from "@mediapipe/hands";
import { isSignaturePose } from "./utils/onResults";
import Webcam from "react-webcam";
import "./styles.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import passedSrc from "./assets/passed.svg";
import notPassedSrc from "./assets/not_passed.svg";
import closeIconSrc from "./assets/closeicon.svg";
import { useScreenshot } from "use-react-screenshot";
import StorageKey from "../../storageKey";
import { useNavigate } from "react-router-dom";
import CallingModal from "../../shared_components/Calling";
import Lottie from "react-lottie";
import scanAnimation from "./assets/scan_lottie.json";
import congraturationAnimation from "./assets/congraturation.json";
import joinUsImgSrc from "./assets/join_us.svg";
import allowImgSrc from "./assets/allow.jpeg";
import template from "./assets/template.svg";
import ImgInstaShareModal from "./ImgShareModal";
import HelpSignModal from "./HelpSignModal";

export const setPassedStat = (passStat) => {
  localStorage.setItem(StorageKey.rud_gate_passed, passStat);
};
export const removePassedStat = () => {
  localStorage.removeItem(StorageKey.rud_gate_passed);
};
export const getPassedStat = () => {
  return localStorage.getItem(StorageKey.rud_gate_passed) ?? false;
};

const RudGatePage = () => {
  const navigate = useNavigate();

  const shareSceneRef = useRef();
  const cameraRef = useRef();

  const [isPassed, setIsPassed] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [screenshot, takeScreenshot] = useScreenshot();
  const [ltCmpltEvnt, setLtCmpltEvnt] = useState(false);
  const [videoPermission, setVideoPermission] = useState(null);

  const takeAPhoto = useCallback(async () => {
    const imageSrc = cameraRef.current.getScreenshot();
    setPhotoUrl(imageSrc);
  }, [cameraRef.current]);

  const closePhoto = () => setPhotoUrl("");

  const geScantLtShowStat = useCallback(() => {
    if (photoUrl && isPassed === null) {
      return true;
    } else {
      return false;
    }
  }, [photoUrl, isPassed]);

  const isScanLtShow = useMemo(() => {
    return geScantLtShowStat();
  }, [ltCmpltEvnt, photoUrl]);

  const requestVideoPermission = async () => {
    try {
      await window.navigator.mediaDevices.getUserMedia({ video: true });
      setVideoPermission(true);
    } catch (error) {
      setVideoPermission(false);
      requestVideoPermission();
    }
  };

  const stopVideoStream = async () => {
    const webcam = cameraRef.current;
    if (webcam && webcam.stream) {
      webcam.stream.getTracks().forEach((track) => track.stop());
    }
  };

  useEffect(() => {
    (async () => {
      if (!photoUrl) {
        setIsPassed(null);
        return;
      }
      hands.onResults((results) => {
        for (const landmarks of results?.multiHandLandmarks) {
          if (isSignaturePose(landmarks)) {
            setIsPassed(true);
            return;
          }
        }
        setIsPassed(false);
      });
      const image = cameraRef.current?.video;
      await hands.send({ image });
    })();
  }, [cameraRef, photoUrl]);

  const webCamProps = {
    ref: cameraRef,
    audio: false,
    mirrored: true,
    screenshotFormat: "image/webp",
    screenshotQuality: 1,
    videoConstraints: {
      facingMode: "user",
    },
  };

  return (
    <PageUI ref={shareSceneRef}>
      <WecamSectionUI>
        <AllowReqImgUI src={allowImgSrc} />
        {videoPermission && <Webcam {...webCamProps} />}
        {videoPermission && <HelpSignModal />}
        {photoUrl && <ResultImgUI src={photoUrl} />}
        {isPassed === null && <WebcamTemplateUI src={template} />}
        {!isScanLtShow && (
          <>
            {isPassed !== null && (
              <CloseImgUI onClick={closePhoto} src={closeIconSrc} />
            )}
            {isPassed === true && <PassStatImgUI src={passedSrc} />}
            {isPassed === false && <PassStatImgUI src={notPassedSrc} />}
            {isPassed === true && (
              <Lottie
                style={{
                  maxWidth: "430px",
                  width: "100%",
                  height: "100%",
                  position: "fixed",
                  margin: "0 auto",
                  zIndex: 10,
                }}
                options={{
                  animationData: congraturationAnimation,
                  autoplay: true,
                  loop: true,
                }}
              />
            )}
          </>
        )}
        {isScanLtShow && (
          <Lottie
            style={{
              width: "300%",
              height: "100%",
              position: "absolute",
              zIndex: 9,
            }}
            eventListeners={[
              {
                eventName: "loopComplete",
                callback: () => setLtCmpltEvnt(!ltCmpltEvnt),
              },
            ]}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            options={{
              animationData: scanAnimation,
              autoplay: true,
              loop: true,
            }}
          />
        )}
        <JoinUsImgUI src={joinUsImgSrc} />
      </WecamSectionUI>
      <BottomSectionUI>
        {!photoUrl && (
          <AbsoluteCenterUI>
            <img style={{ width: "100%" }} src={rudBottomSrc} />
            <TakeBtnSectionUI onClick={takeAPhoto} />
          </AbsoluteCenterUI>
        )}
        {!isScanLtShow && photoUrl && (
          <ButtonListUI>
            <ShareBtnUI onClick={() => takeScreenshot(shareSceneRef.current)}>
              <Icon icon="bitcoin-icons:share-filled" color="white" />
              Share
            </ShareBtnUI>
            {!isPassed ? (
              <BackBtnUI onClick={closePhoto}>
                <Icon icon={"lets-icons:refund-back"} />
                Back
              </BackBtnUI>
            ) : (
              <PassBtnUI
                onClick={() => {
                  stopVideoStream();
                  setPassedStat(true);
                  navigate("/login");
                }}
              >
                <Icon icon="bxs:log-in" />
                Get in
              </PassBtnUI>
            )}
          </ButtonListUI>
        )}
      </BottomSectionUI>
      <ImgInstaShareModal dataUri={screenshot} />
      <CallingModal onClosed={requestVideoPermission} />
    </PageUI>
  );
};

const hands = new Hands({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
});
hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
});

export default RudGatePage;
