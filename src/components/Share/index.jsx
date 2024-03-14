import { createRef, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";

const stepComponentSrcList = [Step1, Step2];

export const Share = () => {
  const [step, setStep] = useState(0);

  const stepComponentRefList = new Array(stepComponentSrcList.length)
    .fill(null)
    .map(() => createRef());

  const next = () => {
    if (step + 1 <= stepComponentSrcList.length - 1) {
      setStep(step + 1);
    }
  };

  const prev = () => {
    if (step - 1 > 0) {
      setStep(step - 1);
    }
  };

  const stepComponentList = stepComponentSrcList.map((StepComp, idx) => {
    return (
      <StepComp
        key={idx}
        ref={stepComponentRefList[idx]}
        next={next}
        prev={prev}
      />
    );
  });

  return <ShareWrapperUI>{stepComponentList[step]}</ShareWrapperUI>;
};

/********************** */

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
