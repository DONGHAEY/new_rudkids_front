import {
  PageUI,
  WecamSectionUI,
  WebcamTemplateUI,
  BottomSectionUI,
  AbsoluteCenterUI,
  TakeBtnUI,
  ResultImgUI,
  ButtonListUI,
  PassOrBackBtnUI,
  ShareBtnUI,
  TakeBtnImgUI,
  PassStatImgUI,
  CloseImgUI,
} from "./styles";
import React, { useCallback, useEffect, useRef, useState } from "react";
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

  const template = {
    imgUrl: template1,
    previewImgUrl: templatePreview1,
  };

  const [isPassed, setIsPassed] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [screenshot, takeScreenshot] = useScreenshot();

  const captureShare = async (url) => {
    if (!url) {
      alert("일시적인 오류입니다");
      return;
    }
    const response = await fetch(url);
    const blob = await response.blob();
    const filename = `rud-gate.png`;
    const imageFile = new File([blob], filename, {
      type: blob.type,
    });
    try {
      await window.navigator.share({
        files: [imageFile],
      });
    } catch (e) {
      alert(e);
    }
  };

  const screenshotPhoto = useCallback(async () => {
    const imageSrc = cameraRef.current.getScreenshot();
    setPhotoUrl(imageSrc);
  }, [cameraRef.current]);

  const closePhoto = () => setPhotoUrl("");

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

  useEffect(() => {
    if (screenshot) {
      captureShare(screenshot);
    }
  }, [screenshot]);

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
        {isPassed === null && <WebcamTemplateUI src={template.imgUrl} />}
        {isPassed !== null && (
          <CloseImgUI onClick={closePhoto} src={closeIconSrc} />
        )}
        {isPassed === true && <PassStatImgUI src={passedSrc} />}
        {isPassed === false && <PassStatImgUI src={notPassedSrc} />}
      </WecamSectionUI>
      <BottomSectionUI>
        {!photoUrl ? (
          <AbsoluteCenterUI>
            <TakeBtnUI onClick={screenshotPhoto}>
              <TakeBtnImgUI src={template.previewImgUrl} />
            </TakeBtnUI>
          </AbsoluteCenterUI>
        ) : (
          <ButtonListUI>
            <ShareBtnUI onClick={() => takeScreenshot(shareSceneRef.current)}>
              <Icon icon="bitcoin-icons:share-filled" color="white" />
              Share
            </ShareBtnUI>
            <PassOrBackBtnUI
              onClick={() => {
                if (!isPassed) {
                  closePhoto();
                } else {
                  setPassedStat(true);
                  navigate("/login");
                }
              }}
            >
              <Icon icon={isPassed ? "bxs:log-in" : "lets-icons:refund-back"} />
              {isPassed ? "Pass" : "Back"}
            </PassOrBackBtnUI>
          </ButtonListUI>
        )}
      </BottomSectionUI>
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
