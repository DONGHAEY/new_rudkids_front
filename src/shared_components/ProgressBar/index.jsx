import { useEffect, useRef } from "react";
import {
  DescriptionTxtUI,
  ProgressBarUI,
  ProgressTxtUI,
  ProgressUI,
} from "./styled";
import gsap from "gsap";
import StorageKey from "../../storageKey";

const ProgressBar = ({ progress, onComplete, description }) => {
  const progressRef = useRef();

  useEffect(() => {
    const beforeProgress = sessionStorage.getItem(StorageKey.progress) ?? 0;
    gsap.fromTo(
      progressRef.current,
      {
        width: `${beforeProgress}%`,
      },
      {
        width: `${progress}%`,
        duration: 0.3,
        onComplete: () => {
          if (progress === 100) {
            onComplete();
          }
        },
      }
    );
    sessionStorage.setItem(StorageKey.progress, progress);
  }, [progress]);

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
