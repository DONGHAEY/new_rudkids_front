import styled from "styled-components";

export const CardCameraUI = styled.div`
  perspective: 500px;
  transform-style: preserve-3d;
  width: 80%;
  height: auto;
  /* position: relative; */
`;

export const CardUI = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  position: relative;
  pointer-events: none;
  border-radius: 20px;
`;

export const CardFrontUI = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 60px;
  border-radius: 5px;
  backface-visibility: hidden;
`;

export const CardBackUI = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 60px;
  border-radius: 5px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
