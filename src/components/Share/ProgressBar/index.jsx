import gsap from "gsap";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CountBallUI,
  GoalBoxArrow,
  GoalBoxUI,
  GoalButtonUI,
  ProgressBarFillUI,
  ProgressBarUI,
  ProgressBarWrapperUI,
} from "./styles";

export const ProgressBar = ({ length, cnt, onGetIn }) => {
  const progressRef = useRef(null);
  const [canpass, setCanpass] = useState(false);

  const percentage = useMemo(() => {
    return (cnt * 100) / length;
  }, [length, cnt]);

  useEffect(() => {
    gsap.to(progressRef.current, {
      width: `${percentage + 5 > 100 ? 100 : percentage + 5}%`,
    });
  }, [percentage]);

  useEffect(() => {
    setCanpass(false);
    if (percentage == 100) {
      setTimeout(() => {
        setCanpass(true);
      }, 500);
    }
  }, [percentage]);

  return (
    <ProgressBarWrapperUI>
      {!canpass && (
        <ProgressBarUI>
          <CountBallUI>
            {cnt}/{length}
          </CountBallUI>
          <ProgressBarFillUI ref={progressRef} />
          <GoalBoxUI>
            <GoalBoxArrow />
            Goal
          </GoalBoxUI>
        </ProgressBarUI>
      )}
      {canpass && <GoalButtonUI onClick={onGetIn}>Get in</GoalButtonUI>}{" "}
    </ProgressBarWrapperUI>
  );
};
