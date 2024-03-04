import { useEffect, useRef } from "react";
import styled from "styled-components";

export const SkipSlider = ({ onUnlockedHandler }) => {
  const inputRange = useRef(null);

  let maxValue = 100,
    currValue,
    speed = 12,
    rafID;

  function unlockStartHandler() {
    // clear raf if trying again
    window.cancelAnimationFrame(rafID);

    // set to desired value
    currValue = +this.value;
  }

  function unlockEndHandler() {
    currValue = +this.value;
    if (currValue >= maxValue) {
      successHandler();
    } else {
      rafID = window.requestAnimationFrame(animateHandler);
    }
  }

  // handle range animation
  function animateHandler() {
    inputRange.current.value = currValue;
    if (currValue > -1) {
      window.requestAnimationFrame(animateHandler);
    }
    currValue = currValue - speed;
  }

  // handle successful unlock
  function successHandler() {
    // inputRange.current.value = 0;
    onUnlockedHandler();
  }

  useEffect(() => {
    if (!inputRange.current) return;
    inputRange.current.addEventListener("mousedown", unlockStartHandler, false);
    inputRange.current.addEventListener(
      "mousestart",
      unlockStartHandler,
      false
    );
    inputRange.current.addEventListener("mouseup", unlockEndHandler, false);
    inputRange.current.addEventListener("touchend", unlockEndHandler, false);
  }, [inputRange.current]);

  return (
    <SliderInputWrapperUI>
      <SliderInputUI
        ref={inputRange}
        type="range"
        min={0}
        max={100}
        defaultValue={0}
      />
      {/* <SlideToSkipTextUI>Slide To Skip</SlideToSkipTextUI> */}
    </SliderInputWrapperUI>
  );
};

const SliderInputWrapperUI = styled.div`
  position: relative;
`;
const SlideToSkipTextUI = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
`;

const SliderInputUI = styled.input`
  width: 10rem;
`;
