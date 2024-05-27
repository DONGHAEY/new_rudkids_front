import { useEffect, useRef } from "react";
import {
  TimelineUI,
  TimerButtonUI,
  ButtonTxtUI,
  TimelineFillUI,
} from "./styles";
import gsap from "gsap";

const TimerButton = ({ timerOffset, onClick }) => {
  const buttonRef = useRef();
  const ref = useRef();

  useEffect(() => {
    const timmerWidth = timerOffset * 100;
    gsap.to(ref.current, {
      width: `${100 - timmerWidth}%`,
    });
  }, [timerOffset]);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(buttonRef.current, {
        scale: 0.6,
        duration: 1,
      })
      .to(buttonRef.current, {
        scale: 1,
        duration: 1,
        yoyo: true,
        repeat: -1,
      });
    timeline.play();
  }, []);

  return (
    <TimerButtonUI onClick={onClick} ref={buttonRef}>
      <ButtonTxtUI>OPEN</ButtonTxtUI>
      <TimelineUI>
        <TimelineFillUI ref={ref} />
      </TimelineUI>
    </TimerButtonUI>
  );
};

export default TimerButton;
