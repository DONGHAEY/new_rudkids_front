import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";

export const ProgressBar = ({ length, cnt }) => {
  const progressRef = useRef(null);

  const percentage = useMemo(() => {
    return (cnt * 100) / length;
  }, [length, cnt]);

  useEffect(() => {
    gsap.to(progressRef.current, {
      width: `${percentage}%`,
    });
  }, [percentage]);

  return (
    <ProgressBarUI>
      <CountBallUI>
        {cnt}/{length}
      </CountBallUI>
      <ProgressBarFillUI ref={progressRef} />
    </ProgressBarUI>
  );
};

const ProgressBarUI = styled.div`
  background-color: white;
  height: 13px;
  width: 40%;
  border: #d6d6d6 solid 1px;
  border-radius: 30px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const ProgressBarFillUI = styled.div`
  background-color: #24ff00;
  height: 100%;
  width: 0px;
  border-radius: 30px;
`;

const CountBallUI = styled.div`
  background: #24ff00;
  position: absolute;
  height: 20px;
  width: 20px;
  left: -20px;
  border-radius: 100%;
  object-fit: cover;
  border: solid 3px #1ed300;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #127e00;
  font-weight: bold;
  font-size: 10px;
`;
