import {
  ButtonImageUI,
  ButtonUI,
  CanvasUI,
  PageUI,
  WecamSectionUI,
  WebcamTemplateUI,
  BottomSectionUI,
  AbsoluteCenterUI,
  TakeBtnUI,
} from "./styles";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import RudkidsWebcam from "./RudkidsWebcam";
import Webcam from "react-webcam";
// import { ShareToInstagramStories } from "@koodos/share-to-insta-stories";
import template1 from "./assets/template1.svg";
import template2 from "./assets/template2.svg";
import { Hands } from "@mediapipe/hands";
import {
  isSignaturePose,
  isFuckyouPose,
} from "./RudkidsWebcam/utils/onResults";

const templates = [
  {
    name: "rud_gate",
    imgUrl: template1,
    previewImgUrl: "",
  },
  {
    name: "television",
    imgUrl: template2,
    previewImgUrl: "",
  },
  {
    name: "mbti",
    imgUrl: "",
    previewImgUrl: "",
  },
];

const RudCameraPage = () => {
  const cameraRef = useRef(null);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const templateImgUrl = templates[selectedIdx].imgUrl;

  const takeBtnClickHandler = async () => {
    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });
    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    //
    hands.onResults((results) => {
      for (const landmarks of results?.multiHandLandmarks) {
        if (isSignaturePose(landmarks)) {
          alert("pass");
          return;
        }
      }
      alert("not-passed");
    });
    const image = cameraRef.current?.video;
    await hands.send({ image });
  };

  useEffect(() => {
    if (!cameraRef?.current) return;
    navigator.mediaDevices.getUserMedia({
      video: true,
    });
  }, [cameraRef.current]);

  return (
    <PageUI>
      <WecamSectionUI>
        <Webcam
          ref={cameraRef}
          audio={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          mirrored
          screenshotFormat="image/jpeg"
          screenshotQuality={1}
          videoConstraints={{
            facingMode: "user",
          }}
        />
        {templateImgUrl && <WebcamTemplateUI src={templateImgUrl} />}
      </WecamSectionUI>
      <BottomSectionUI>
        <AbsoluteCenterUI>
          <TakeBtnUI onClick={takeBtnClickHandler} />
        </AbsoluteCenterUI>
      </BottomSectionUI>
    </PageUI>
  );
};

// const share = async () => {
//   const response = await fetch(previewImgSrc);
//   const blob = await response.blob();
//   const filename = "rudkids_standard.png";
//   const metadata = { type: `image/png` };
//   const imageFile = new File([blob], filename, metadata);
//   alert(imageFile);
//   const data = {
//     files: [imageFile],
//   };
//   if (!document.window.navigator.canShare()) {
//     alert("해당 기기에서는 지원하지 않습니다");
//     return;
//   }
//   await window.navigator.share(data);
// };

export default RudCameraPage;
