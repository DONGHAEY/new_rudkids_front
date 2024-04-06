import { useEffect, useRef, useState } from "react";
import {
  AppleSliderWrapperUI,
  MoveLightTextUI,
  MoveLightTextWrapperUI,
  SlideBallUI,
  SliderWrapperUI,
} from "./styles";

const SkipSlider = ({ slidedHandler }) => {
  const slideballRef = useRef(null);
  const slideRef = useRef(null);

  const [left, setLeft] = useState(0);

  let isDragging = false;
  let isArrived = false;
  let clickX = 0;
  let clickY = 0;

  useEffect(() => {
    setLeft(0);
  }, []);

  const onTouchStart = (e) => {
    isDragging = true;
    clickX = e.targetTouches[0].screenX;
    clickY = e.targetTouches[0].screenY;
    /** */
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onEnd);
    /** */
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onEnd);
  };

  const onMouseDown = (e) => {
    isDragging = true;
    clickX = e.screenX;
    clickY = e.screenY;
    /** */
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onEnd);
    /** */
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onEnd);
  };

  const onTouchMove = (e) => {
    if (isDragging) {
      const nowX = e.targetTouches[0].screenX;
      const nowY = e.targetTouches[0].screenY;
      let moveY = nowX - clickX;
      let moveX = nowY - clickY;

      const slidepos = slideRef.current.getBoundingClientRect();
      const slideballPos = slideballRef.current.getBoundingClientRect();
      const endPosX = slidepos.width - slideballPos.width - 10;

      const touchPos = left + moveY;

      isArrived = false;
      if (touchPos >= 0 && touchPos <= endPosX) {
        setLeft(touchPos);
      }
      if (touchPos >= endPosX) {
        isArrived = true;
        setLeft(endPosX);
      }
    }
  };

  const onMouseMove = (e) => {
    if (isDragging) {
      const nowX = e.screenX;
      const nowY = e.screenY;
      let moveY = nowX - clickX;
      let moveX = nowY - clickY;

      const slidepos = slideRef.current.getBoundingClientRect();
      const slideballPos = slideballRef.current.getBoundingClientRect();
      const endPosX = slidepos.width - slideballPos.width - 10;

      const touchPos = left + moveY;

      isArrived = false;
      if (touchPos >= 0 && touchPos <= endPosX) {
        setLeft(touchPos);
      }
      if (touchPos >= endPosX) {
        isArrived = true;
        setLeft(endPosX);
      }
    }
  };

  const onEnd = (e) => {
    if (isDragging) {
      if (isArrived) {
        slidedHandler();
      } else {
        setLeft(0);
      }
    }
    isDragging = false;
    isArrived = false;
  };

  return (
    <AppleSliderWrapperUI ref={slideRef}>
      <div
        style={{
          marginLeft: left,
        }}
      />
      <SliderWrapperUI>
        <MoveLightTextWrapperUI>
          <MoveLightTextUI>Slide To Skip</MoveLightTextUI>
        </MoveLightTextWrapperUI>
        <SlideBallUI
          onTouchStart={onTouchStart}
          onMouseDown={onMouseDown}
          ref={slideballRef}
        />
      </SliderWrapperUI>
    </AppleSliderWrapperUI>
  );
};

export default SkipSlider;
