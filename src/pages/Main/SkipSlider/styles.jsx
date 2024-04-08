import styled from "styled-components";

export const MoveLightTextWrapperUI = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  right: 50px;
`;

export const MoveLightTextUI = styled.p`
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

export const AppleSliderWrapperUI = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 250px;
  position: relative;
`;

export const SliderWrapperUI = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 80%);
  border-radius: 60px;
`;

export const SlideBallUI = styled.div`
  height: 100%;
  background-color: white;
  height: 50px;
  width: 50px;
  margin: 5px;
  border-radius: 100%;
  cursor: pointer;
  z-index: 1;
`;
