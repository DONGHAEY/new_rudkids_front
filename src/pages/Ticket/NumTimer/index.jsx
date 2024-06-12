import { useMemo } from "react";
import { NumerTimerUI, TimeTxtUI } from "./styles";
import timerImgSrc from "./assets/timer.svg";

const NumTimer = ({ remainSecond }) => {
  const minute = useMemo(() => {
    return Math.floor(remainSecond / 60);
  }, [remainSecond]);

  const second = useMemo(() => {
    return remainSecond % 60;
  }, [remainSecond]);

  return (
    <NumerTimerUI>
      <img src={timerImgSrc} />
      <TimeTxtUI>
        {String(minute).padStart(2, "0")}:{String(second).padStart(2, "0")}
      </TimeTxtUI>
    </NumerTimerUI>
  );
};

export default NumTimer;
