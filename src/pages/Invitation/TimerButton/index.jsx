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
        scale: 0.9,
        duration: 0.25,
      })
      .to(buttonRef.current, {
        scale: 1,
        duration: 0.25,
        yoyo: true,
        repeat: -1,
      });
    timeline.play();
    // gsap.fromTo(
    //   buttonRef.current,
    //   {
    //     background:
    //       "linear-gradient(0deg,rgba(232, 0, 0, 1) 0%,rgba(255, 104, 104, 0.5) 100%)",
    //   },
    //   {
    //     background:
    //       "linear-gradient(360deg,rgba(232, 0, 0, 1) 0%,rgba(255, 104, 104, 0.5) 100%)",
    //     duration: 5,
    //     yoyo: true,
    //     repeat: -1,
    //   }
    // );
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
