import { createRef, useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ShareComponentWrapperUI, ShareWrapperUI } from "./styles";

const StepsRenderer = ({ stepComponentSrcList }) => {
  const totalStepCount = stepComponentSrcList.length;
  const shareWrapperRef = useRef(null);
  const shareComponentRefList = new Array(totalStepCount)
    .fill(null)
    .map(() => createRef());

  const [step, setStep] = useState(0);

  const disable = useCallback(() => {
    shareWrapperRef.current.style.display = "none";
  }, [shareWrapperRef]);

  const enable = useCallback(() => {
    shareWrapperRef.current.style.display = "block";
  }, [shareWrapperRef]);

  useEffect(() => {
    if (step === totalStepCount) {
      disable();
    } else {
      enable();
    }
  }, [step, totalStepCount]);

  useEffect(() => {
    if (shareComponentRefList[step]) {
      shareComponentRefList[step].current.style.display = "block";
      gsap.to(shareComponentRefList[step].current, {
        opacity: 1,
        duration: 0.5,
      });
    }
  }, [step, shareComponentRefList]);

  const next = () => {
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
        <StepComp next={next} prev={prev} isRender={idx === step} />
      </ShareComponentWrapperUI>
    );
  });

  return <ShareWrapperUI ref={shareWrapperRef} children={stepComponentList} />;
};

export default StepsRenderer;
