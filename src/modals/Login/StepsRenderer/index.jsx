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

  const currentComponentRef = shareComponentRefList[step];

  useEffect(() => {
    if (!shareWrapperRef.current) return;
    if (step === totalStepCount) {
      shareWrapperRef.current.display = "none";
    } else {
      shareWrapperRef.current.display = "block";
    }
  }, [step, totalStepCount, shareWrapperRef.current]);

  useEffect(() => {
    if (!shareComponentRefList?.[step].current) {
      return;
    }
    shareComponentRefList[step].current.style.display = "block";
    gsap.to(shareComponentRefList[step].current, {
      opacity: 1,
      duration: 0.5,
    });
  }, [step, shareComponentRefList[step].current]);

  const next = useCallback(() => {
    if (!currentComponentRef.current) {
      return;
    }
    if (step + 1 <= totalStepCount) {
      gsap.to(currentComponentRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          currentComponentRef.current.style.display = "none";
          setStep(step + 1);
        },
      });
    }
  }, currentComponentRef.current);

  const prev = useCallback(() => {
    if (!currentComponentRef.current) {
      return;
    }
    gsap.to(currentComponentRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (shareComponentRefList[step - 1]) {
          currentComponentRef.current.style.display = "none";
          setStep(step - 1);
        }
      },
    });
  }, [currentComponentRef.current]);

  const stepComponentList = stepComponentSrcList.map((StepComp, idx) => {
    const currentRef = shareComponentRefList[idx];
    return (
      <ShareComponentWrapperUI ref={currentRef} key={idx}>
        {<StepComp next={next} prev={prev} isRender={idx === step} />}
      </ShareComponentWrapperUI>
    );
  });

  return <ShareWrapperUI ref={shareWrapperRef} children={stepComponentList} />;
};

export default StepsRenderer;
