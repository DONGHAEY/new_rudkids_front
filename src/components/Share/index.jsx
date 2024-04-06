import { createRef, useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ShareComponentWrapperUI, ShareWrapperUI } from "./styles";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";

const Share = () => {
  const stepComponentSrcList = [Step1, Step2];
  const totalStepCount = stepComponentSrcList.length;
  const shareWrapperRef = useRef(null);
  const shareComponentRefList = new Array(totalStepCount)
    .fill(null)
    .map(() => createRef());

  const [step, setStep] = useState(0);
  const [isShareCompleted, setIsShareCompleted] = useState(undefined);

  const disable = useCallback(() => {
    gsap.to(shareWrapperRef.current.style, {
      "-webkit-backdrop-filter": "blur(0px)",
      "backdrop-filter": "blur(0px)",
      duration: 0.5,
      onComplete: () => {
        shareWrapperRef.current.style.display = "none";
      },
    });
  }, [shareWrapperRef]);

  const enable = useCallback(() => {
    shareWrapperRef.current.style.display = "block";
    gsap.to(shareWrapperRef.current.style, {
      "-webkit-backdrop-filter": "blur(5px)",
      "backdrop-filter": "blur(5px)",
      duration: 0.5,
    });
  }, [shareWrapperRef]);

  useEffect(() => {
    if (localStorage.getItem("share_complete") === "true") {
      setIsShareCompleted(true);
    } else if (step === totalStepCount) {
      setIsShareCompleted(true);
    } else {
      setIsShareCompleted(false);
    }
  }, [step, totalStepCount]);

  useEffect(() => {
    if (isShareCompleted === true) {
      disable();
      localStorage.setItem("share_complete", "true");
    } else if (isShareCompleted === false) {
      localStorage.setItem("share_complete", "false");
      enable();
    }
  }, [isShareCompleted]);

  useEffect(() => {
    if (isShareCompleted === undefined) return;
    if (isShareCompleted === true) return;
    if (shareComponentRefList[step]) {
      shareComponentRefList[step].current.style.display = "block";
      gsap.to(shareComponentRefList[step].current, {
        opacity: 1,
        duration: 0.5,
      });
    }
  }, [step, shareComponentRefList, isShareCompleted]);

  const next = () => {
    if (isShareCompleted === undefined) return;
    if (isShareCompleted === true) return;
    if (step + 1 <= totalStepCount) {
      gsap.to(shareComponentRefList[step].current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          shareComponentRefList[step].current.style.display = "none";
          setStep(step + 1);
        },
      });
    }
  };

  const prev = () => {
    if (isShareCompleted === undefined) return;
    if (isShareCompleted === true) return;
    if (shareComponentRefList[step]) {
      gsap.to(shareComponentRefList[step].current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          if (shareComponentRefList[step - 1]) {
            shareComponentRefList[step].current.style.display = "none";
            setStep(step - 1);
          }
        },
      });
    }
  };

  const stepComponentList = stepComponentSrcList.map((StepComp, idx) => {
    const currentRef = shareComponentRefList[idx];
    return (
      <ShareComponentWrapperUI ref={currentRef} key={idx}>
        <StepComp next={next} prev={prev} />
      </ShareComponentWrapperUI>
    );
  });

  return <ShareWrapperUI ref={shareWrapperRef} children={stepComponentList} />;
};

export default Share;
