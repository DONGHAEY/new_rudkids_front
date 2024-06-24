import { useEffect, useRef } from "react";
import {
  DescriptionTxtUI,
  ProgressBarUI,
  ProgressTxtUI,
  ProgressUI,
} from "./styled";
import gsap from "gsap";

const ProgressBar = ({ progress, onComplete, description }) => {
  const progressRef = useRef();

  useEffect(() => {
    if (!progressRef.current) return;
    if (progress === 100) {
      gsap.to(progressRef.current, {
        width: `100%`,
        duration: 0.3,
        onComplete: () => {
          onComplete();
        },
      });
      return;
    }
    gsap.to(progressRef.current, {
      width: `${progress}%`,
      duration: 0.3,
      onComplete: () => {
        if (progress === 100) {
          onComplete();
        }
      },
    });
  }, [progress, progressRef.current]);

  return (
    <>
      {description && <DescriptionTxtUI>{description}</DescriptionTxtUI>}
      <ProgressBarUI>
        <ProgressUI ref={progressRef} />
      </ProgressBarUI>
      <ProgressTxtUI>Loading {progress}%</ProgressTxtUI>
    </>
  );
};

export default ProgressBar;
