import styled from "styled-components";

export const TimerButtonUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 30px;
  border-radius: 67px;
  gap: 5px;
  padding-top: 20px;
  padding-block: 24px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(232, 0, 0, 1) 0%,
    rgba(255, 104, 104, 1) 100%
  );
`;

export const TimelineUI = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 12.08px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  max-width: 133.33px;
  border-radius: 63px;
`;

export const TimelineFillUI = styled.div`
  background-color: white;
  border-radius: 63px;
`;

export const ButtonTxtUI = styled.p`
  font-family: Poppins-Bold;
  color: white;
  font-size: 28px;
`;
