import {
  PageUI,
  WecamSectionUI,
  WebcamTemplateUI,
  BottomSectionUI,
  AbsoluteCenterUI,
  TakeBtnUI,
  ResultImgUI,
  ButtonListUI,
  ShareBtnUI,
  TakeBtnImgUI,
  PassStatImgUI,
  CloseImgUI,
  BackBtnUI,
  PassBtnUI,
  JoinUsImgUI,
} from "./styles";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import template1 from "./assets/template1.svg";
import templatePreview1 from "./assets/template-preview.svg";
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
import ImgInstaShareModal from "./ImgShareModal";

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
  const scanLtRef = useRef();

  const [isPassed, setIsPassed] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [screenshot, takeScreenshot] = useScreenshot();
  const [ltCmpltEvnt, setLtCmpltEvnt] = useState(false);

  const takeAPhoto = useCallback(async () => {
    const imageSrc = cameraRef.current.getScreenshot();
    setPhotoUrl(imageSrc);
  }, [cameraRef.current]);

  const closePhoto = () => {
    setPhotoUrl("");
  };

  const getLtShowStat = useCallback(() => {
    if (photoUrl && isPassed === null) {
      return true;
    } else {
      return false;
    }
  }, [photoUrl, isPassed]);

  const isLtShow = useMemo(() => {
    return getLtShowStat();
  }, [ltCmpltEvnt, photoUrl]);

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
        <Webcam {...webCamProps} />
        {photoUrl && <ResultImgUI src={photoUrl} />}
        {isPassed === null && <WebcamTemplateUI src={template1} />}
        {!isLtShow && (
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
        {isLtShow && (
          <Lottie
            ref={scanLtRef}
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
            <TakeBtnUI onClick={takeAPhoto}>
              <TakeBtnImgUI src={templatePreview1} />
            </TakeBtnUI>
          </AbsoluteCenterUI>
        )}
        {!isLtShow && photoUrl && (
          <ButtonListUI>
            <ShareBtnUI onClick={() => takeScreenshot(shareSceneRef.current)}>
              <Icon icon="bitcoin-icons:share-filled" color="white" />
              Share
            </ShareBtnUI>
            {!isPassed && (
              <BackBtnUI onClick={closePhoto}>
                <Icon icon={"lets-icons:refund-back"} />
                Back
              </BackBtnUI>
            )}
            {isPassed && (
              <PassBtnUI
                onClick={() => {
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
      <CallingModal />
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
