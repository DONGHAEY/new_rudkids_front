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
  TakeBtnSectionUI,
  RudBottomBackImgUI,
  ScanLtUI,
  CongraturationLtUI,
  CanvasUI,
} from "./styles";
import React, { useEffect, useRef, useState } from "react";
import rudBottomSrc from "./assets/rud_gate_bottom.svg";
import { HAND_CONNECTIONS, Hands } from "@mediapipe/hands";
import { isSignaturePose } from "./utils/onResults";
import Webcam from "react-webcam";
import { Icon } from "@iconify/react/dist/iconify.js";
import correctSrc from "./assets/correct.webp";
import wrongSrc from "./assets/wrong.webp";
import closeIconSrc from "./assets/closeicon.svg";
import { useScreenshot } from "use-react-screenshot";
import StorageKey from "../../storageKey";
import { useNavigate } from "react-router-dom";
import CallingModal from "../../shared_components/Calling";
import scanAnimation from "./assets/scan_lottie.json";
import congraturationAnimation from "./assets/congraturation.json";
import joinUsImgSrc from "./assets/join_us.webp";
import template from "./assets/template.svg";
import videoSrc from "./assets/video.mp4";
import ImgInstaShareModal from "./ImgShareModal";
import HelpSignModal from "./HelpSignModal";
import { trackClickButton } from "../../shared_analytics";
import { track } from "@amplitude/analytics-browser";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { Player } from "@lottiefiles/react-lottie-player";
import { drawVideoScene } from "./utils/draw";

export const setPassedStat = (passStat) => {
  localStorage.setItem(StorageKey.rud_gate_passed, passStat);
};
export const removePassedStat = () => {
  localStorage.removeItem(StorageKey.rud_gate_passed);
};
export const getPassedStat = () => {
  return localStorage.getItem(StorageKey.rud_gate_passed) ?? false;
};

const maxScanLtShowCnt = 3;
const RudGatePage = () => {
  const navigate = useNavigate();
  const shareSceneRef = useRef();
  const cameraRef = useRef(null);
  const canvasRef = useRef(null);

  const [passStat, setPassStat] = useState("none");
  const [scanMode, setScanMode] = useState(false);
  const [screenshot, takeScreenshot] = useScreenshot();
  const [scanLtShowCnt, setScanLtShowCnt] = useState(0);
  const [videoPermission, setVideoPermission] = useState(false);

  const hasResult = passStat !== "none";

  const takeAPhotoBtnClickHandler = async () => {
    trackClickButton("take picture", { page: "rud gate" });
    setScanMode(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    hands.onResults((results) => {
      let passStat = false;
      for (const landmarks of results?.multiHandLandmarks) {
        passStat = false;
        if (isSignaturePose(landmarks)) {
          passStat = true;
        }
        drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
          color: "white",
          lineWidth: 0.5,
        });
        drawLandmarks(ctx, landmarks, {
          color: "white",
          lineWidth: 1,
        });
      }
      setPassStat(passStat);
    });
    const image = canvasRef.current;
    await hands.send({ image });
  };

  const closeBtnClickHandler = () => {
    trackClickButton("back");
    setPassStat("none");
    setScanMode(false);
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

  const scanLtCmplteHandler = (e) => {
    if (e !== "loop") {
      return;
    }
    if (passStat !== null || maxScanLtShowCnt >= scanLtShowCnt) {
      setScanLtShowCnt(0);
      setScanMode(false);
    }
    setScanLtShowCnt(scanLtShowCnt + 1);
  };

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
      if (scanMode) return;
      if (hasResult) return;
      if (video.readyState === 4) {
        drawVideoScene(canvas, video);
      }
    };
    const interval = setInterval(drawVideo, 1000 / 50); //50fps
    return () => clearInterval(interval);
  }, [videoPermission, scanMode, hasResult]);

  useEffect(() => {
    const stream = cameraRef.current?.video.srcObject;
    if (!stream) return;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.start());
    return () => {
      const stream = cameraRef.current?.video.srcObject;
      if (!stream) return;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      // cameraRef.current.video.srcObject = null;
    };
  }, []);

  return (
    <PageUI ref={shareSceneRef}>
      <WecamSectionUI>
        <CanvasUI ref={canvasRef} />
        {videoPermission && <HelpSignModal />}
        {videoPermission && (
          <Webcam
            ref={cameraRef}
            width={1920}
            height={720}
            screenshotQuality={1}
            style={{
              position: "absolute",
              opacity: 0,
              width: "0%",
              height: "0%",
            }}
          />
        )}
        {passStat === "none" && <RudgateImgUI src={template} />}
        {!scanMode && hasResult && (
          <>
            <CloseImgUI onClick={closeBtnClickHandler} src={closeIconSrc} />
            <PassStatImgUI src={passStat ? correctSrc : wrongSrc} />
            {passStat === true && (
              <CongraturationLtUI>
                <Player src={congraturationAnimation} loop autoPlay />
              </CongraturationLtUI>
            )}
          </>
        )}
        {scanMode && (
          <ScanLtUI>
            <Player
              onEvent={scanLtCmplteHandler}
              src={scanAnimation}
              loop
              autoplay
            />
          </ScanLtUI>
        )}
        <JoinUsImgUI src={joinUsImgSrc} />
      </WecamSectionUI>
      <BottomSectionUI>
        {!scanMode && !hasResult && (
          <AbsoluteCenterUI>
            <RudBottomBackImgUI src={rudBottomSrc} />
            <TakeBtnSectionUI onClick={takeAPhotoBtnClickHandler} />
          </AbsoluteCenterUI>
        )}
        {!scanMode && hasResult && (
          <ButtonListUI>
            <ShareBtnUI onClick={shareBtnClickHandler}>
              <Icon icon="bitcoin-icons:share-filled" color="white" />
              Share
            </ShareBtnUI>
            {!passStat ? (
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
      <CallingModal
        videoSrc={videoSrc}
        onClosed={requestVideoPermission}
        pageFor="rud gate"
      />
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
