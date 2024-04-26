import React, { createRef, memo, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ShareComponentWrapperUI, ShareWrapperUI } from "./styles";

const StepsRenderer = ({ stepComponentSrcList }) => {
  const totalStepCount = stepComponentSrcList.length;
  const [step, setStep] = useState(0);
  const shareWrapperRef = useRef(null);
  const shareComponentRefList = new Array(totalStepCount)
    .fill(null)
    .map(() => createRef());

  useEffect(() => {
    if (!shareWrapperRef.current) return;
    if (step === totalStepCount) {
      shareWrapperRef.current.style.display = "none";
    } else {
      shareWrapperRef.current.style.display = "block";
    }
  }, [step, totalStepCount, shareWrapperRef.current]);

  useEffect(() => {
    if (!shareComponentRefList[step]?.current) return;
    shareComponentRefList[step].current.style.display = "block";
    gsap.to(shareComponentRefList[step].current, {
      opacity: 1,
      duration: 0.5,
    });
  }, [step, totalStepCount]);

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
  };

  const stepComponentList = stepComponentSrcList.map((StepComp, idx) => {
    return (
      <ShareComponentWrapperUI
        key={idx}
        ref={shareComponentRefList[idx]}
        children={<StepComp next={next} prev={prev} isRender={idx === step} />}
      />
    );
  });

  return <ShareWrapperUI ref={shareWrapperRef} children={stepComponentList} />;
};

//이건 한번만 랜더해야함 (그렇게 안하면 꼬임)
export default memo(StepsRenderer);
//이건 한번만 랜더해야함 (그렇게 안하면 꼬임)
