import {
  PageUI,
  WecamSectionUI,
  RudgateImgUI,
  BottomSectionUI,
  AbsoluteCenterUI,
  ButtonListUI,
  ShareBtnUI,
  PassStatImgUI,
  CloseImgUI,
  BackBtnUI,
  PassBtnUI,
  JoinUsImgUI,
  AllowReqImgUI,
  TakeBtnSectionUI,
  RudBottomBackImgUI,
} from "./styles";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import rudBottomSrc from "./assets/rud_gate_bottom.svg";
import { HAND_CONNECTIONS, Hands } from "@mediapipe/hands";
import { isSignaturePose } from "./utils/onResults";
import Webcam from "react-webcam";
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
import { trackClickButton } from "../../shared_analytics";
import { track } from "@amplitude/analytics-browser";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";

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
  const cameraRef = useRef(null);
  const canvasRef = useRef(null);

  const [isPassed, setIsPassed] = useState(null);
  const [checkMode, setCheckMode] = useState(false);
  const [screenshot, takeScreenshot] = useScreenshot();
  const [ltCmpltEvnt, setLtCmpltEvnt] = useState(false);
  const [videoPermission, setVideoPermission] = useState(null);

  const takeAPhotoBtnClickHandler = useCallback(async () => {
    trackClickButton("take picture", { page: "rud gate" });
    setCheckMode(true);
  }, [cameraRef.current]);

  const closeBtnClickHandler = () => {
    trackClickButton("back");
    setCheckMode(false);
  };

  const getInBtnClickHandler = () => {
    trackClickButton("get in");
    setPassedStat(true);
    navigate("/login");
  };

  const shareBtnClickHandler = () => {
    trackClickButton("share", {
      page: "rud gate",
    });
    takeScreenshot(shareSceneRef.current);
  };

  const isScanLtShow = useMemo(() => {
    if (checkMode && isPassed === null) {
      return true;
    } else {
      return false;
    }
  }, [ltCmpltEvnt, checkMode]);

  const requestVideoPermission = async () => {
    let allowStat = false;
    try {
      await window.navigator.mediaDevices.getUserMedia({ video: true });
      allowStat = true;
    } catch (error) {
      allowStat = false;
      setTimeout(() => {
        requestVideoPermission();
      }, 1000);
    }
    track("allow camera", {
      is_allowed: allowStat,
    });
    setVideoPermission(allowStat);
  };

  useEffect(() => {
    const video = cameraRef.current?.video;
    const canvas = canvasRef.current;
    const drawVideo = () => {
      if (!video) return;
      if (!canvas) return;
      if (checkMode) return;
      const ctx = canvas.getContext("2d");
      if (video.readyState === 4) {
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const videoAspect = videoWidth / videoHeight;
        const canvasAspect = canvasWidth / canvasHeight;
        let drawWidth, drawHeight, offsetX, offsetY;
        if (videoAspect > canvasAspect) {
          drawHeight = canvasHeight;
          drawWidth = videoWidth * (canvasHeight / videoHeight);
          offsetX = (canvasWidth - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = canvasWidth;
          drawHeight = videoHeight * (canvasWidth / videoWidth);
          offsetX = 0;
          offsetY = (canvasHeight - drawHeight) / 2;
        }
        // ctx.translate(canvasWidth, 0);
        // ctx.scale(-1, 1);
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(video, offsetX, offsetY, drawWidth, drawHeight);
      }
    };
    const interval = setInterval(drawVideo, 1000 / 50); //50fps
    return () => clearInterval(interval);
  }, [videoPermission, checkMode]);

  useEffect(() => {
    return () => {
      const stream = cameraRef.current?.video.srcObject;
      if (!stream) return;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      cameraRef.current.video.srcObject = null;
    };
  }, []);

  useEffect(() => {
    (async () => {
      if (!checkMode) {
        setIsPassed(null);
        return;
      }
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      hands.onResults((results) => {
        let isPassed = false;
        for (const landmarks of results?.multiHandLandmarks) {
          isPassed = false;
          if (isSignaturePose(landmarks)) {
            isPassed = true;
          }
          drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
            color: "white",
            lineWidth: 1,
          });
          drawLandmarks(ctx, landmarks, {
            color: "white",
            lineWidth: 1,
          });
        }
        setIsPassed(isPassed);
      });
      const image = canvasRef.current;
      await hands.send({ image });
    })();
  }, [cameraRef, checkMode]);

  return (
    <PageUI ref={shareSceneRef}>
      <WecamSectionUI>
        <AllowReqImgUI src={allowImgSrc} />
        {videoPermission && <HelpSignModal />}
        {videoPermission && (
          <Webcam
            ref={cameraRef}
            mirrored
            style={{
              position: "absolute",
              opacity: 0,
              width: "100%",
              height: "100%",
            }}
          />
        )}
        {videoPermission && (
          <canvas
            ref={canvasRef}
            style={{
              width: "100%",
              height: "100%",
              opacity: 1,
              zIndex: 1,
              transform: "scaleX(-1)",
            }}
          />
        )}
        {isPassed === null && <RudgateImgUI src={template} />}
        {!isScanLtShow && (
          <>
            {isPassed !== null && (
              <CloseImgUI onClick={closeBtnClickHandler} src={closeIconSrc} />
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
                  zIndex: 1,
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
              zIndex: 1,
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
        {!checkMode && (
          <AbsoluteCenterUI>
            <RudBottomBackImgUI src={rudBottomSrc} />
            <TakeBtnSectionUI onClick={takeAPhotoBtnClickHandler} />
          </AbsoluteCenterUI>
        )}
        {!isScanLtShow && checkMode && (
          <ButtonListUI>
            <ShareBtnUI onClick={shareBtnClickHandler}>
              <Icon icon="bitcoin-icons:share-filled" color="white" />
              Share
            </ShareBtnUI>
            {!isPassed ? (
              <BackBtnUI onClick={closeBtnClickHandler}>
                <Icon icon={"lets-icons:refund-back"} />
                Back
              </BackBtnUI>
            ) : (
              <PassBtnUI onClick={getInBtnClickHandler}>
                <Icon icon="bxs:log-in" />
                Get in
              </PassBtnUI>
            )}
          </ButtonListUI>
        )}
      </BottomSectionUI>
      <ImgInstaShareModal dataUri={screenshot} />
      <CallingModal onClosed={requestVideoPermission} pageFor="rud gate" />
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
