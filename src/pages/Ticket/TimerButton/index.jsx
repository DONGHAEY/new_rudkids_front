import { useEffect, useRef } from "react";
import {
  TimelineUI,
  ButtonWrapperUI,
  ButtonTxtUI,
  TimelineFillUI,
  ButtonUI,
} from "./styles";
import gsap from "gsap";
import { WindowButtonUI } from "../../../shared_components/RudWindow/shared_styles";

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
  }, []);

  return (
    <ButtonWrapperUI onClick={onClick} ref={buttonRef}>
      <WindowButtonUI
        border="rgba(171, 167, 160, 1)"
        background="rgba(211, 206, 197, 1)"
      >
        <ButtonUI>
          <ButtonTxtUI>OPEN!</ButtonTxtUI>
          <TimelineUI>
            <TimelineFillUI ref={ref} />
          </TimelineUI>
        </ButtonUI>
      </WindowButtonUI>
    </ButtonWrapperUI>
  );
};

export default TimerButton;
