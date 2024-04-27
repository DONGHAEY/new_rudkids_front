import React, {
  createRef,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { StepCompWrapperUI, WrapperUI } from "./styles";

const StepsRenderer = ({ stepComponentSrcList }) => {
  const totalStepCount = stepComponentSrcList.length;
  const [step, setStep] = useState(0);

  const wrapperRef = useRef(null);
  const componentRefList = useMemo(() => {
    return new Array(totalStepCount).fill(null).map((_) => createRef(_));
  }, [totalStepCount]);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (step === totalStepCount) {
      wrapperRef.current.style.display = "none";
    } else {
      wrapperRef.current.style.display = "block";
    }
  }, [step, totalStepCount, wrapperRef.current]);

  useEffect(() => {
    if (!componentRefList[step]?.current) return;
    componentRefList[step].current.style.display = "block";
    gsap.to(componentRefList[step].current, {
      opacity: 1,
      duration: 0.5,
    });
  }, [step, totalStepCount]);

  const next = () => {
    if (step + 1 <= totalStepCount) {
      gsap.to(componentRefList[step].current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          componentRefList[step].current.style.display = "none";
          setStep(step + 1);
        },
      });
    }
  };

  const prev = () => {
    gsap.to(componentRefList[step].current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (componentRefList[step - 1]) {
          componentRefList[step].current.style.display = "none";
          setStep(step - 1);
        }
      },
    });
  };

  const stepComponents = stepComponentSrcList.map((StepComp, idx) => {
    const ref = componentRefList[idx];
    return (
      <StepCompWrapperUI
        key={idx}
        ref={ref}
        children={<StepComp next={next} prev={prev} isRender={idx === step} />}
      />
    );
  });

  return <WrapperUI ref={wrapperRef} children={stepComponents} />;
};

export default memo(StepsRenderer);
