import { useEffect, useRef, useState } from "react";
import {
  AppleSliderWrapperUI,
  MoveLightTextUI,
  MoveLightTextWrapperUI,
  SlideBallUI,
  SliderWrapperUI,
} from "./styles";

const SkipSlider = ({ slidedHandler, slidingHandler }) => {
  const slideballRef = useRef(null);
  const slideRef = useRef(null);

  const [leftSpace, setLeftSpace] = useState(0);

  let isDragging = false;
  let isArrived = false;
  let clickX = 0;
  let clickY = 0;

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
      let moveX = nowX - clickX;
      let moveY = nowY - clickY;

      const slidepos = slideRef.current.getBoundingClientRect();
      const slideballPos = slideballRef.current.getBoundingClientRect();
      const endPosX = slidepos.width - slideballPos.width - 10;
      const touchPos = leftSpace + moveX;

      isArrived = false;
      if (touchPos >= 0 && touchPos <= endPosX) {
        setLeftSpace(touchPos);
      }
      if (touchPos >= endPosX) {
        isArrived = true;
        setLeftSpace(endPosX);
      }
    }
  };

  const onMouseMove = (e) => {
    if (isDragging) {
      const nowX = e.screenX;
      const nowY = e.screenY;
      let moveX = nowX - clickX;
      let moveY = nowY - clickY;

      const slidepos = slideRef.current.getBoundingClientRect();
      const slideballPos = slideballRef.current.getBoundingClientRect();
      const endPosX = slidepos.width - slideballPos.width - 10;
      const touchPos = leftSpace + moveX;

      isArrived = false;
      if (touchPos >= 0 && touchPos <= endPosX) {
        setLeftSpace(touchPos);
      }
      if (touchPos >= endPosX) {
        isArrived = true;
        setLeftSpace(endPosX);
      }
    }
  };

  const onEnd = (e) => {
    if (isDragging) {
      if (isArrived) {
        slidedHandler();
      } else {
        setLeftSpace(0);
      }
    }
    isDragging = false;
    isArrived = false;
  };

  useEffect(() => {
    if (typeof slidingHandler !== "function") return;
    if (!slideRef) return;
    const slidepos = slideRef.current.getBoundingClientRect();
    const slideballPos = slideballRef.current.getBoundingClientRect();
    const endPosX = slidepos.width - slideballPos.width - 10;
    const slideOffset = leftSpace / endPosX;
    slidingHandler(slideOffset);
  }, [slidingHandler, leftSpace, slideRef]);

  return (
    <AppleSliderWrapperUI ref={slideRef}>
      <div
        style={{
          marginLeft: leftSpace,
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
