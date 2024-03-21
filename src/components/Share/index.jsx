import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { Step1 } from "./Steps/Step1";
import { Step2 } from "./Steps/Step2";

const stepComponentSrcList = [Step1, Step2];
const totalStepCount = stepComponentSrcList.length;

export const Share = ({ onShareComplete = null }) => {
  const shareWrapperRef = useRef(null);
  const shareComponentRef = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("share_complete") === "true") {
      setStep(totalStepCount);
    }
  }, [totalStepCount]);

  useEffect(() => {
    //사용자 쉐어 다되면
    let isShareComplete = false;
    if (step === totalStepCount) {
      isShareComplete = true;
    }
    if (isShareComplete) {
      localStorage.setItem("share_complete", "true");
      if (onShareComplete && typeof onShareComplete === "function") {
        onShareComplete();
      }
    }
  }, [step, totalStepCount]);

  useEffect(() => {
    if (!shareComponentRef.current) return;
    if (step >= totalStepCount) {
      const completeHandler = () => {
        shareWrapperRef.current.style.display = "none";
      };
      gsap.to(shareWrapperRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: completeHandler,
      });
    } else {
      shareWrapperRef.current.style.opacity = 1;
      shareWrapperRef.current.style.display = "block";
    }
  }, [step, shareComponentRef.current]);

  const next = () => {
    const completeHandler = () => {
      if (step + 1 <= totalStepCount) {
        gsap.to(shareComponentRef.current, {
          opacity: 1,
          duration: 0.5,
        });
        setStep(step + 1);
      }
    };
    gsap.to(shareComponentRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: completeHandler,
    });
  };

  const prev = () => {
    if (step - 1 > 0) {
      setStep(step - 1);
    }
  };

  const stepComponentList = stepComponentSrcList.map((StepComp, idx) => {
    return <StepComp key={idx} next={next} prev={prev} />;
  });

  return (
    <ShareWrapperUI ref={shareWrapperRef}>
      <ShareComponentWrapper ref={shareComponentRef}>
        {stepComponentList[step]}
      </ShareComponentWrapper>
    </ShareWrapperUI>
  );
};

const ShareWrapperUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

const ShareComponentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;
