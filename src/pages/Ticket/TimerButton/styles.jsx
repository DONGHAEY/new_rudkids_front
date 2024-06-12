import styled from "styled-components";

export const TimerButtonUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-top: 30px;
  border-radius: 67px;
  gap: 5px;
  padding-top: 15px;
  padding-block: 19px;
  align-items: center;
  justify-content: center;
  /* background: linear-gradient(
    90deg,
    rgba(232, 0, 0, 1) 0%,
    rgba(255, 104, 104, 1) 100%
  ); */
  background-color: #ffd600;
`;

export const TimelineUI = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  height: 12.08px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  /* max-width: 133.33px; */
  border-radius: 63px;
`;

export const TimelineFillUI = styled.div`
  background-color: #ff0000;
  border-radius: 63px;
`;

export const ButtonTxtUI = styled.p`
  font-family: Poppins-Bold;
  color: black;
  font-size: 28px;
`;
