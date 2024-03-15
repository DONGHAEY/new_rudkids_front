import gsap from "gsap";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

export const ProgressBar = ({ length, cnt }) => {
  const progressRef = useRef(null);
  const [canpass, setCanpass] = useState(false);

  const percentage = useMemo(() => {
    return (cnt * 100) / length;
  }, [length, cnt]);

  useEffect(() => {
    gsap.to(progressRef.current, {
      width: `${percentage + 5 > 100 ? 100 : percentage + 5}%`,
    });
  }, [percentage]);

  useEffect(() => {
    setCanpass(false);
    if (percentage == 100) {
      setTimeout(() => {
        setCanpass(true);
      }, 500);
    }
  }, [percentage]);

  return (
    <ProgressBarWrapperUI>
      {!canpass ? (
        <ProgressBarUI>
          <CountBallUI>
            {cnt}/{length}
          </CountBallUI>
          <ProgressBarFillUI ref={progressRef} />
          <GoalBoxUI>Goal</GoalBoxUI>
        </ProgressBarUI>
      ) : (
        <GoalButtonUI>Get in</GoalButtonUI>
      )}
    </ProgressBarWrapperUI>
  );
};

const ProgressBarWrapperUI = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressBarUI = styled.div`
  background-color: white;
  height: 20px;
  width: 80%;
  max-width: 200px;
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
  height: 30px;
  width: 30px;
  left: -20px;
  border-radius: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  font-size: 10px;
`;

const GoalBoxUI = styled.div`
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  font-family: "Poppins-SemiBold";
  position: absolute;
  bottom: -35px;
  right: 0;
  background-color: red;
  color: white;
  font-size: 10px;
  padding: 6px;
  padding-inline: 9px;
  margin: 0;
  border-radius: 10px;
`;

const GoalButtonUI = styled.button`
  background-color: #24ff00;
  color: white;
  padding: 10px;
  width: 200px;
  height: 100%;
  border-radius: 22px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 19px;
  justify-content: center;
  border: none;
  cursor: pointer;
  @font-face {
    font-family: "Poppins-SemiBold";
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  font-family: "Poppins-SemiBold";
`;
