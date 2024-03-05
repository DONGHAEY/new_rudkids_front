import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

export const CustomSlider = ({ slidedHandler }) => {
  const slideballRef = useRef(null);
  const slideRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isArrived, setIsArrived] = useState(false);

  const handleOnDrag = (e, data) => {
    if (!slideRef?.current || !slideballRef?.current) return null;
    const slidepos = slideRef.current.getBoundingClientRect();
    const slideballPos = slideballRef.current.getBoundingClientRect();
    const startPosX = 10;
    const endPosX = slidepos.width - slideballPos.width - 10;

    if (data.x >= startPosX && data.x <= endPosX) {
      setIsArrived(false);
      setPosition({ ...position, x: data.x });
    }
    if (data.x >= endPosX) {
      setIsArrived(true);
      setPosition({
        ...position,
        x: endPosX,
      });
    }
  };

  const handleStopDrag = () => {
    if (isArrived) {
      slidedHandler();
    } else {
      setPosition({
        ...position,
        x: 0,
      });
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      console.log(slideRef.current);
    }
  }, [slideRef.current, position.x]);

  return (
    <SliderWrapperUI ref={slideRef}>
      <MoveLightTextWrapperUI>
        <MoveLightTextUI>Slide To Skip</MoveLightTextUI>
      </MoveLightTextWrapperUI>
      <Draggable
        axis="x"
        allowAnyClick={false}
        disabled={isArrived}
        position={position}
        onDrag={(e, data) => handleOnDrag(e, data)}
        onStop={handleStopDrag}
      >
        <SlideBallUI ref={slideballRef} />
      </Draggable>
    </SliderWrapperUI>
  );
};

const MoveLightTextWrapperUI = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  right: 50px;
`;

const MoveLightTextUI = styled.p`
  color: black;
  -webkit-mask-image: linear-gradient(
    -75deg,
    rgba(0, 0, 0, 0.3) 30%,
    #000 50%,
    rgba(0, 0, 0, 0.3) 60%
  );
  -webkit-mask-size: 300%;
  animation: shine 5s infinite;
  font-size: 13px;
  font-weight: bold;
  @-webkit-keyframes shine {
    from {
      -webkit-mask-position: 180%;
    }
    to {
      -webkit-mask-position: -50%;
    }
  }
`;

const SliderWrapperUI = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: rgba(255, 255, 255, 80%);
  border-radius: 60px;
`;

const SlideBallUI = styled.div`
  height: 100%;
  background-color: white;
  height: 40px;
  width: 40px;
  margin: 5px;
  border-radius: 100%;
  z-index: 1;
`;
