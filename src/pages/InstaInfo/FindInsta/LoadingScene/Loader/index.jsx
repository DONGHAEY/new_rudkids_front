import { useEffect, useRef, useState } from "react";
import {
  DescriptTxtUI,
  LoadWrapperUI,
  ProgressBarUI,
  ProgressTxtUI,
  ProgressUI,
} from "./styles";
import gsap from "gsap";

const Loader = ({ isFinished }) => {
  const ref = useRef();
  const [progress, setProgress] = useState(50);

  useEffect(() => {
    const rand = Math.floor(Math.random() * 5) + 1;
    if (progress >= 99) return;
    if (progress + rand > 99) {
      setProgress(99);
      return;
    }
    const timeout = setTimeout(() => {
      setProgress(progress + rand);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [progress]);

  useEffect(() => {
    gsap.to(ref.current, {
      width: `${progress}%`,
      duration: 0.3,
    });
  }, [progress]);

  useEffect(() => {
    if (isFinished) {
      setProgress(100);
    }
  }, [isFinished]);

  return (
    <LoadWrapperUI>
      <ProgressTxtUI>{progress}%</ProgressTxtUI>
      <ProgressBarUI>
        <ProgressUI ref={ref} />
      </ProgressBarUI>
      <DescriptTxtUI>내 인스타그램 프로필 찾는 중</DescriptTxtUI>
    </LoadWrapperUI>
  );
};

export default Loader;
